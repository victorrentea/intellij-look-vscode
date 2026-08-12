const vscode = require('vscode');
const path = require('path');
const { IJ_LIGHT, IJ_DARK, SETTINGS } = require('./settings');

const SEP = '  ›  ';
const LIGHT_THEMES = ['[IntelliJ IDEA Islands Light]', '[IntelliJ IDEA New UI Light]'];
const DARK_THEMES = ['[IntelliJ IDEA Islands Dark]', '[IntelliJ IDEA New UI Dark]', '[IntelliJ IDEA Classic Dark]'];

/** Deepest-first chain of symbols containing `pos`, outermost first. */
function symbolChain(symbols, pos) {
  for (const s of symbols || []) {
    if (s.range && s.range.contains(pos)) {
      return [s, ...symbolChain(s.children, pos)];
    }
  }
  return [];
}

async function applySettings() {
  const cfg = vscode.workspace.getConfiguration();
  for (const [key, value] of Object.entries(SETTINGS)) {
    await cfg.update(key, value, vscode.ConfigurationTarget.Global);
  }
  // Merge rather than replace: the user may already colour other themes.
  const existing = cfg.get('workbench.colorCustomizations') || {};
  const merged = { ...existing };
  for (const t of LIGHT_THEMES) merged[t] = { ...(existing[t] || {}), ...IJ_LIGHT };
  for (const t of DARK_THEMES) merged[t] = { ...(existing[t] || {}), ...IJ_DARK };
  await cfg.update('workbench.colorCustomizations', merged, vscode.ConfigurationTarget.Global);

  vscode.window.showInformationMessage(
    'IntelliJ Look applied. Pick "IntelliJ IDEA Islands Light/Dark" as your colour theme to complete it.');
}

async function revertSettings() {
  const cfg = vscode.workspace.getConfiguration();
  for (const key of Object.keys(SETTINGS)) {
    await cfg.update(key, undefined, vscode.ConfigurationTarget.Global);
  }
  const existing = { ...(cfg.get('workbench.colorCustomizations') || {}) };
  for (const t of [...LIGHT_THEMES, ...DARK_THEMES]) delete existing[t];
  await cfg.update('workbench.colorCustomizations', existing, vscode.ConfigurationTarget.Global);
  vscode.window.showInformationMessage('IntelliJ Look reverted to VS Code defaults.');
}

function activate(context) {
  context.subscriptions.push(
    vscode.commands.registerCommand('intellijLook.applySettings', applySettings),
    vscode.commands.registerCommand('intellijLook.revertSettings', revertSettings),
  );

  // A cog that opens the Command Palette. It sits in the status bar because the
  // strip holding the four layout controls is part of the title bar, which VS
  // Code keeps for itself — there is no contribution point that reaches it.
  const cog = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 100);
  cog.text = '$(gear)';
  cog.tooltip = 'Command Palette';
  cog.command = 'workbench.action.showCommands';
  cog.show();

  // IntelliJ puts the breadcrumb in the footer; VS Code puts it under the tabs.
  // `breadcrumbs.enabled: false` turns the top one off and this redraws it at
  // the bottom, left-aligned with a low priority so it lands to the right of
  // the branch and the problem counters — where IntelliJ's own trail sits.
  const trail = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, -100);
  trail.command = 'workbench.action.gotoSymbol';
  trail.tooltip = 'Go to Symbol in Editor…';

  let seq = 0;
  async function render() {
    const mine = ++seq;                        // a slow symbol query must never
    const ed = vscode.window.activeTextEditor;  // overwrite a newer one
    if (!ed) { trail.hide(); return; }

    const folder = vscode.workspace.getWorkspaceFolder(ed.document.uri);
    const rel = folder
      ? path.relative(path.dirname(folder.uri.fsPath), ed.document.uri.fsPath)
      : ed.document.uri.fsPath;

    let symbols = [];
    try {
      symbols = await vscode.commands.executeCommand(
        'vscode.executeDocumentSymbolProvider', ed.document.uri) || [];
    } catch { /* no provider for this language — the path alone is still useful */ }
    if (mine !== seq) return;

    // DocumentSymbol has .children; the older flat SymbolInformation does not,
    // and only the former can produce a nested trail.
    const chain = symbols.length && symbols[0].children !== undefined
      ? symbolChain(symbols, ed.selection.active).map(s => s.name)
      : [];

    trail.text = [...rel.split(path.sep), ...chain].join(SEP);
    trail.show();
  }

  const debounced = (() => {
    let t;
    return () => { clearTimeout(t); t = setTimeout(render, 120); };
  })();

  context.subscriptions.push(
    cog,
    trail,
    vscode.window.onDidChangeActiveTextEditor(debounced),
    vscode.window.onDidChangeTextEditorSelection(debounced),
    vscode.workspace.onDidChangeTextDocument(debounced),
  );
  render();
}

function deactivate() {}

module.exports = { activate, deactivate };
