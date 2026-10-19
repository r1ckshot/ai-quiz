// Sprawdza, czy poprawna odpowiedź nie zdradza się długością.
// Użycie: node check-length.js data/infra   (opcjonalnie: --list, żeby wypisać podejrzane pytania)
const fs = require("fs"), path = require("path");
const dir = process.argv[2], list = process.argv.includes("--list");
global.window = {};
for (const f of fs.readdirSync(dir).filter(f => f.endsWith(".js"))) eval(fs.readFileSync(path.join(dir, f), "utf8"));
const qs = window.QUIZ_DATA.flatMap(p => p.questions).filter(q => q.type === "single" || q.type === "multi");
let longest = 0;
const flagged = [];
for (const q of qs) {
  const len = q.options.map(o => o.length);
  const ok = q.correct.map(i => len[i]), bad = len.filter((_, i) => !q.correct.includes(i));
  const avgBad = bad.reduce((a, b) => a + b, 0) / bad.length;
  if (Math.min(...ok) > Math.max(...bad)) longest++;
  if (Math.max(...ok) >= 1.5 * avgBad) flagged.push(q.id);
}
const pct = n => Math.round(n / qs.length * 100) + "%";
console.log(`pytań: ${qs.length}, poprawna najdłuższa: ${longest} (${pct(longest)}, cel ≤ 30%), poprawna ≥ 1,5× średniej: ${flagged.length} (${pct(flagged.length)}, cel ≤ 10%)`);
if (list) console.log(flagged.join(" "));
