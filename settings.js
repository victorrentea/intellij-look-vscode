// Every value here was measured off a real IntelliJ IDEA window rather than
// eyeballed: colours are the dominant pixel of a band sampled from the running
// IDE (or the literal value in JetBrains' own sources), and the line spacing was
// matched by comparing the vertical pitch of code lines in both editors on the
// same monitor, same file.

const IJ_LIGHT = {
  // Chrome grey, content white. That split — not a grey wash over everything —
  // is what actually reads as "IntelliJ".
  'titleBar.activeBackground': '#ECEDF0',
  'titleBar.inactiveBackground': '#ECEDF0',
  'activityBar.background': '#ECEDF0',
  'statusBar.background': '#ECEDF0',
  'sideBarSectionHeader.background': '#ECEDF0',
  'sideBarTitle.background': '#ECEDF0',
  'sideBar.background': '#FFFFFF',
  'editorGroupHeader.tabsBackground': '#FFFFFF',
  'panel.background': '#FFFFFF',
  'editor.background': '#FFFFFF',

  // The selected tool-window button is a filled rounded square, and IntelliJ
  // draws no indicator bar beside it — so the border is made transparent
  // instead of doubling the marker.
  'activityBar.activeBackground': '#D9D9DB',
  'activityBar.activeBorder': '#00000000',
  'activityBar.activeFocusBorder': '#00000000',
  'activityBar.foreground': '#6C707E',
  'activityBar.inactiveForeground': '#6C707E',

  'sideBar.border': '#C3C8D2',
  'editorGroup.border': '#C3C8D2',
  'sideBarSectionHeader.border': '#DFE1E5',
  'activityBar.border': '#DFE1E5',
  'panel.border': '#DFE1E5',
  'editorGroupHeader.tabsBorder': '#DFE1E5',
  'statusBar.border': '#DFE1E5',
  'titleBar.border': '#DFE1E5',
  'sash.hoverBorder': '#3574F0',

  // A file with problems keeps its normal name colour — only the badge marks it.
  // VS Code paints the label and the badge from this one token, so the badge
  // loses its red/amber too; the two cannot be separated without CSS.
  'list.errorForeground': '#000000',
  'list.warningForeground': '#000000',

  // Node colours straight out of intellij-community's expui SVGs.
  'symbolIcon.classForeground': '#3574F0',
  'symbolIcon.interfaceForeground': '#208A3C',
  'symbolIcon.enumeratorForeground': '#834DF0',
  'symbolIcon.enumeratorMemberForeground': '#834DF0',
  'symbolIcon.propertyForeground': '#834DF0',
  'symbolIcon.methodForeground': '#DB3B4B',
  'symbolIcon.functionForeground': '#DB3B4B',
  'symbolIcon.constructorForeground': '#DB3B4B',
  'symbolIcon.fieldForeground': '#E66D17',
  'symbolIcon.variableForeground': '#E66D17',
  'symbolIcon.constantForeground': '#E66D17',
  'symbolIcon.packageForeground': '#6C707E',
  'symbolIcon.namespaceForeground': '#6C707E',
  'symbolIcon.moduleForeground': '#6C707E',

  // Sampled from IntelliJ's editor: caret line and identifier-under-caret.
  'editor.lineHighlightBackground': '#F5F8FE',
  'editor.lineHighlightBorder': '#00000000',
  'editor.wordHighlightBackground': '#EDEBFB',
  'editor.wordHighlightStrongBackground': '#EDEBFB',
  'editor.wordHighlightTextBackground': '#EDEBFB',
  'editor.selectionHighlightBackground': '#EDEBFB',

  // VCS file-status colours as defined in DefaultColorSchemesManager.xml.
  'gitDecoration.modifiedResourceForeground': '#0032A0',
  'gitDecoration.addedResourceForeground': '#0A7700',
  'gitDecoration.untrackedResourceForeground': '#993300',
  'gitDecoration.deletedResourceForeground': '#616161',
  'gitDecoration.ignoredResourceForeground': '#727238',
  'gitDecoration.renamedResourceForeground': '#007C7C',
  'gitDecoration.conflictingResourceForeground': '#FF0000',
  'gitDecoration.stageModifiedResourceForeground': '#0032A0',
  'gitDecoration.stageDeletedResourceForeground': '#616161',
};

const IJ_DARK = {
  'titleBar.activeBackground': '#2B2D30',
  'titleBar.inactiveBackground': '#2B2D30',
  'activityBar.background': '#2B2D30',
  'statusBar.background': '#2B2D30',
  'sideBarSectionHeader.background': '#2B2D30',
  'sideBarTitle.background': '#2B2D30',
  'sideBar.background': '#2B2D30',
  'editorGroupHeader.tabsBackground': '#2B2D30',
  'panel.background': '#2B2D30',
  'editor.background': '#1E1F22',

  'activityBar.activeBackground': '#43454A',
  'activityBar.activeBorder': '#00000000',
  'activityBar.activeFocusBorder': '#00000000',
  'activityBar.foreground': '#CED0D6',
  'activityBar.inactiveForeground': '#CED0D6',

  'sideBar.border': '#393B40',
  'sideBarSectionHeader.border': '#393B40',
  'activityBar.border': '#393B40',
  'panel.border': '#393B40',
  'editorGroup.border': '#393B40',
  'editorGroupHeader.tabsBorder': '#393B40',
  'statusBar.border': '#393B40',
  'titleBar.border': '#393B40',
  'sash.hoverBorder': '#3574F0',
  'list.errorForeground': '#BCBEC4',
  'list.warningForeground': '#BCBEC4',

  'symbolIcon.classForeground': '#548AF7',
  'symbolIcon.interfaceForeground': '#57965C',
  'symbolIcon.enumeratorForeground': '#A571E6',
  'symbolIcon.enumeratorMemberForeground': '#A571E6',
  'symbolIcon.propertyForeground': '#B589EC',
  'symbolIcon.methodForeground': '#DB5C5C',
  'symbolIcon.functionForeground': '#DB5C5C',
  'symbolIcon.constructorForeground': '#DB5C5C',
  'symbolIcon.fieldForeground': '#C77D55',
  'symbolIcon.variableForeground': '#C77D55',
  'symbolIcon.constantForeground': '#C77D55',
  'symbolIcon.packageForeground': '#CED0D6',
  'symbolIcon.namespaceForeground': '#CED0D6',
  'symbolIcon.moduleForeground': '#CED0D6',

  'gitDecoration.modifiedResourceForeground': '#548AF7',
  'gitDecoration.addedResourceForeground': '#5FAD65',
  'gitDecoration.untrackedResourceForeground': '#C77D55',
  'gitDecoration.deletedResourceForeground': '#868A91',
  'gitDecoration.ignoredResourceForeground': '#9E9E5F',
  'gitDecoration.renamedResourceForeground': '#4DB1AE',
  'gitDecoration.conflictingResourceForeground': '#DB5C5C',
};

const SETTINGS = {
  // The one that is pure cause-and-effect and impossible to guess: with
  // accessibilitySupport forced "on", VS Code decides a screen reader is
  // present and the explorer evaluates `isScreenReaderOptimized() ? false :
  // compactFolders` — so Java packages never collapse, whatever you set.
  // Leave this at "on" only if you genuinely use a screen reader.
  'editor.accessibilitySupport': 'auto',
  'explorer.compactFolders': true,
  // Off by default in VS Code (it costs performance on huge trees), but with
  // packages compacted the long names run past the panel and would otherwise
  // just be truncated.
  'workbench.list.horizontalScrolling': true,

  'editor.fontFamily': "JetBrains Mono, Menlo, Monaco, 'Courier New', monospace",
  'editor.fontLigatures': true,
  'editor.fontSize': 14,
  // Character advance and glyph height already match IntelliJ at this size;
  // only the vertical pitch differed (26px vs 32px on the same monitor).
  'editor.lineHeight': 1.775,
  'editor.stickyScroll.enabled': true,
  'editor.minimap.enabled': false,
  'editor.renderLineHighlight': 'all',
  'editor.bracketPairColorization.enabled': false,
  'editor.guides.bracketPairs': false,
  'workbench.tree.renderIndentGuides': 'none',
  'workbench.tree.indent': 16,
  'workbench.sash.size': 8,

  // IntelliJ shows the branch up top and the breadcrumb at the bottom; VS Code
  // ships the mirror image of that. The title bar is the only top-of-window
  // surface an extension can reach, and it is reached through window.title.
  'window.title': '${rootName}${separator}⑂ ${activeRepositoryBranchName}${separator}${activeEditorShort}${dirty}',
  'breadcrumbs.enabled': false,

  'workbench.iconTheme': 'intellij-expui',
  // The colour theme itself can be set from here, so nobody has to hunt for it
  // in the theme picker. Light/dark follow the OS, which is what IntelliJ does.
  'window.autoDetectColorScheme': true,
  'workbench.preferredLightColorTheme': 'IntelliJ IDEA Islands Light',
  'workbench.preferredDarkColorTheme': 'IntelliJ IDEA Islands Dark',

  // Java tool window ≈ IntelliJ's Project view (per-symbol icons, members).
  'java.dependency.packagePresentation': 'hierarchical',
  'java.dependency.showMembers': true,
  'java.dependency.syncWithFolderExplorer': true,
  'java.inlayHints.parameterNames.enabled': 'all',
};

module.exports = { IJ_LIGHT, IJ_DARK, SETTINGS };
