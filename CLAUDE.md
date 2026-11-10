# ai-quiz — zasady repo

- Commit, push i tworzenie repo na GitHubie — tylko po wyraźnym „ok” właściciela w czacie.
- Conventional Commits, tylko tytuł, bez treści: `feat: add egzamin pack`. Na końcu trailer `Co-Authored-By`.
- Hook `.git/hooks/commit-msg` odrzuca inny format (hooki nie są w repo — po nowym klonie dodać ponownie).
- Interfejs w całości po polsku. Pytania: `data/<klucz>/WNN.js`, po zmianie `node --check`. Po każdej zmianie pytań — `node build-files.js` (skleja je w `data/all.js`, strona czyta tylko ten plik; hook `.git/hooks/pre-commit` robi to sam przed commitem).
- Zanim coś trafi do commita — sprawdzić stronę w przeglądarce (komputer i telefon).
