// Spis plików z pytaniami: strona wczytuje tylko istniejące pliki, bez prób W13…W15, których jeszcze nie ma.
// Uruchomić po dodaniu lub usunięciu pliku w data/<klucz>/: node build-files.js
const fs = require("fs"), path = require("path");
const data = path.join(__dirname, "data");
const files = {};
for (const key of fs.readdirSync(data).sort()) {
  const dir = path.join(data, key);
  if (!fs.statSync(dir).isDirectory()) continue;
  const names = fs.readdirSync(dir).filter(f => /^(W\d\d|egzamin)\.js$/.test(f)).sort().map(f => f.slice(0, -3));
  if (names.length) files[key] = names;
}
fs.writeFileSync(path.join(data, "files.js"),
  "// Wygenerowane przez build-files.js, nie edytować ręcznie\nwindow.QUIZ_FILES = " + JSON.stringify(files) + ";\n");
console.log(Object.entries(files).map(([k, v]) => `${k}: ${v.length}`).join(", "));
