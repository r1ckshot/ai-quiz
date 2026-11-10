// Skleja wszystkie pliki z pytaniami w jeden data/all.js: telefon pobiera jeden plik zamiast kilkudziesięciu.
// Uruchomić po każdej zmianie w data/<klucz>/ (robi to też hook pre-commit): node build-files.js
const fs = require("fs"), path = require("path");
const data = path.join(__dirname, "data");
const parts = [], counts = [];
for (const key of fs.readdirSync(data).sort()) {
  const dir = path.join(data, key);
  if (!fs.statSync(dir).isDirectory()) continue;
  const names = fs.readdirSync(dir).filter(f => /^(W\d\d|egzamin)\.js$/.test(f)).sort();
  for (const f of names) parts.push(`// ${key}/${f}\n` + fs.readFileSync(path.join(dir, f), "utf8").trim() + "\n");
  if (names.length) counts.push(`${key}: ${names.length}`);
}
fs.writeFileSync(path.join(data, "all.js"),
  "// Wygenerowane przez build-files.js, nie edytować ręcznie\n" + parts.join("\n"));
const old = path.join(data, "files.js"); // dawny spis plików, już niepotrzebny
if (fs.existsSync(old)) fs.unlinkSync(old);
console.log(counts.join(", "));
