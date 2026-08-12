# IntelliJ Look for VS Code

Makes VS Code look and behave like IntelliJ IDEA's New UI.

Every colour and measurement in here was **taken from a running IntelliJ**, not
guessed: colours are the dominant pixel of a band sampled off the live IDE (or
the literal value in JetBrains' own sources), and the line spacing was matched by
comparing the vertical pitch of code lines in both editors on the same monitor,
displaying the same file.

## Install

```bash
code --install-extension intellij-look-1.0.0.vsix
```

Then run **`IntelliJ Look: Apply IntelliJ Settings`** from the Command Palette
and pick **IntelliJ IDEA Islands Light** (or Dark) as your colour theme.

`IntelliJ Look: Revert IntelliJ Settings` undoes everything it wrote.

The extension pack pulls in the two extensions it builds on: the IntelliJ colour
themes and the IntelliJ keymap.

## What you get

| | |
|---|---|
| **File icons** | The real JetBrains New UI (`expui`) SVGs — `.java` gets the blue ⓒ, JSON the purple `{}`, YAML the red `Y`, and so on |
| **Colours** | Chrome grey `#ECEDF0`, content white — the split that actually reads as IntelliJ, rather than a grey wash over everything |
| **Symbol colours** | Class blue, interface green, enum purple, method red, field orange — the exact fills from the `expui` node icons |
| **VCS colours** | Modified blue, added green, untracked brick, ignored olive — from `DefaultColorSchemesManager.xml` |
| **Line spacing** | `lineHeight 1.775`, which lands the code-line pitch on IntelliJ's exactly |
| **Branch on top** | In the title bar via `window.title`, where IntelliJ shows it |
| **Breadcrumb at the bottom** | Redrawn in the status bar with the full symbol chain; the top one is switched off |
| **Cog in the status bar** | Opens the Command Palette |
| **Collapsed Java packages** | `java/victor/training/petclinic` on one row |

## The setting nobody guesses

If `editor.accessibilitySupport` is `"on"`, VS Code concludes a screen reader is
present, and the explorer then evaluates:

```js
isScreenReaderOptimized() ? false : compactFolders
```

— so **`explorer.compactFolders` is ignored no matter what you set**, and Java
packages never collapse. This extension sets it to `"auto"` (the default, which
still detects a real screen reader). If you genuinely use VoiceOver, set it back
to `"on"` and accept the uncompacted tree.

## What VS Code cannot do

Honest list, so nobody hunts for a setting that does not exist:

- **Rounded tab corners** — the radius is not themable.
- **Arbitrary tab height** — `window.density.editorTabHeight` has exactly two
  steps, `default` (35px) and `compact` (22px). Nothing in between.
- **Thicker panel borders** — borders are 1px; only the colour is themable.
  `workbench.sash.size` widens the *drag* area and the hover band, not a
  permanent line.
- **Per-symbol icons in the Explorer** — file icon themes match on filename,
  extension and language only, so every `.java` file necessarily gets the same
  icon. True ⓒ/Ⓘ/Ⓔ per type exists only in the **Java Projects** view, which is
  IntelliJ's Project tool window equivalent.
- **Anything in the title bar's layout-control strip** — reserved by VS Code.

All of the above would need CSS injection, which means patching VS Code's own
files and living with a permanent "installation appears corrupt" warning. Out of
scope on purpose.

## Licences

- Extension code: **MIT** (see `LICENSE`).
- Bundled icons: SVGs from
  [JetBrains/intellij-community](https://github.com/JetBrains/intellij-community)
  (`platform/icons/src/expui`), **Apache License 2.0** — see
  `LICENSE-ICONS-APACHE-2.0.txt` and `NOTICE`. Not affiliated with or endorsed by
  JetBrains; "IntelliJ IDEA" is their trademark.
