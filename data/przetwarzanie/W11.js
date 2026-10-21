(window.QUIZ_DATA ||= []).push({ subject: "przetwarzanie", questions: [
  // ===== W11 — Ocena i testowanie modeli tekstowych =====
  { id: "W11-01", w: "W11", c: "ocena-trudnosc", type: "open",
    q: "Dlaczego ocena modelu takiego jak LLM jest trudna?",
    answer: "Bo nie ma jednej metryki, a jeden model może wykonywać wiele różnych zadań.",
    src: "W11, slajd 281", note: "W11-ocena-modeli" },

  { id: "W11-02", w: "W11", c: "benchmark-def", type: "single",
    q: "Na czym polega ocena LLM za pomocą benchmarku?",
    options: ["Użytkownik ocenia na ślepo dwie odpowiedzi", "Silniejszy model ocenia odpowiedzi słabszego", "Model rozwiązuje przygotowane zadania z poprawnymi odpowiedziami", "Mierzy się zaskoczenie modelu kolejnym tokenem"],
    correct: [2], explain: "Benchmark to zestaw wcześniej przygotowanych zadań z poprawnymi odpowiedziami; to prawdopodobnie najczęstsza metoda.", src: "W11, slajd 282", note: "W11-ocena-modeli" },

  { id: "W11-03", w: "W11", c: "benchmarki-tabela", type: "single",
    q: "Który benchmark według slajdu mierzy generowanie kodu Python?",
    options: ["GSM8K", "HumanEval", "HellaSwag", "TruthfulQA"],
    correct: [1], explain: "HumanEval: kod Python. GSM8K: zadania matematyczne. HellaSwag: wnioskowanie zdroworozsądkowe. TruthfulQA: halucynacje.", src: "W11, slajd 282", note: "W11-ocena-modeli" },

  { id: "W11-04", w: "W11", c: "benchmarki-tabela", type: "single",
    q: "Która para „benchmark — co mierzy” jest zgodna ze slajdem?",
    options: ["MMLU — naprawianie błędów w projektach", "ARC — skłonność do halucynacji", "GPQA — generowanie kodu Python", "GSM8K — rozwiązywanie zadań matematycznych"],
    correct: [3], explain: "MMLU: wiedza z wielu dziedzin. ARC: pytania z nauk ścisłych. GPQA: bardzo trudne pytania eksperckie.", src: "W11, slajd 282", note: "W11-ocena-modeli" },

  { id: "W11-05", w: "W11", c: "benchmarki-tabela", type: "single",
    q: "Zespół chce sprawdzić, czy model umie naprawiać rzeczywiste błędy w projektach programistycznych. Który benchmark wybrać?",
    options: ["SWE-bench", "TruthfulQA", "HumanEval", "MMLU"],
    correct: [0], explain: "SWE-bench: rzeczywiste błędy w projektach. HumanEval: kod Python. TruthfulQA: halucynacje.", src: "W11, slajd 282", note: "W11-ocena-modeli" },

  { id: "W11-06", w: "W11", c: "benchmaxxing", type: "single",
    q: "Jak nazywa się sytuacja, gdy model świetnie wypada w testach, a słabo w zastosowaniach rzeczywistych?",
    options: ["Perplexity", "Benchmaxxing", "Halucynacja", "Green AI"],
    correct: [1], explain: "Benchmaxxing to zasadniczo overfitting, czyli nadmierne dopasowanie do danych testowych.", src: "W11, slajd 283", note: "W11-ocena-modeli" },

  { id: "W11-07", w: "W11", c: "benchmaxxing", type: "open",
    q: "Dlaczego publicznie dostępna baza pytań benchmarku może prowadzić do benchmaxxingu?",
    answer: "Bo pytania mogą trafić do zbioru treningowego LLM, więc model osiąga bardzo dobre wyniki przez nadmierne dopasowanie do danych testowych.",
    src: "W11, slajd 283", note: "W11-ocena-modeli" },

  { id: "W11-08", w: "W11", c: "hle", type: "single",
    q: "Które zdanie o Humanity's Last Exam (HLE) NIE jest zgodne ze slajdem?",
    options: ["Składa się z 2500 pytań", "Część pytań jest multi-modalna", "Wszystkie pytania są publicznie dostępne", "Część to pytania wielokrotnego wyboru"],
    correct: [2], explain: "HLE testuje nadmierne dopasowanie na zestawie tajnych pytań, więc nie wszystkie są publiczne.", src: "W11, slajd 284", note: "W11-ocena-modeli" },

  { id: "W11-09", w: "W11", c: "hle", type: "single",
    q: "Jaką dokładność na HLE osiągały modele (np. GPT-4o) w listopadzie 2024 roku?",
    options: ["Poniżej 10%", "Około 25%", "Około 50%", "Powyżej 90%"],
    correct: [0], explain: "Listopad 2024: poniżej 10%. Modele z połowy 2026 zbliżają się do 50%.", src: "W11, slajd 285", note: "W11-ocena-modeli" },

  { id: "W11-10", w: "W11", c: "perplexity", type: "single",
    q: "Na jakie pytanie odpowiada perplexity (zakłopotanie)?",
    options: ["Jak bardzo różnią się dwa rozkłady prawdopodobieństwa?", "Jak bardzo model jest zaskoczony kolejnym tokenem?", "Ile energii model zużywa na wygenerowanie tokenu?", "Jak często model zmyśla fakty i cytowania?"],
    correct: [1], explain: "Perplexity mierzy zaskoczenie kolejnym tokenem; im mniejsza, tym lepiej model przewiduje tekst.", src: "W11, slajd 286", note: "W11-ocena-modeli" },

  { id: "W11-11", w: "W11", c: "perplexity", type: "single",
    q: "Które zdanie o perplexity NIE jest zgodne ze slajdem?",
    options: ["Jest stosowana podczas treningu", "Im mniejsza, tym lepiej model przewiduje tekst", "Pozwala wykryć halucynacje modelu", "Liczy się z prawdopodobieństw kolejnych tokenów"],
    correct: [2], explain: "Slajd 286: perplexity nie mierzy rozumowania ani halucynacji.", src: "W11, slajd 286", note: "W11-ocena-modeli" },

  { id: "W11-12", w: "W11", c: "perplexity-calc", type: "calc",
    q: "Model przypisał dwóm kolejnym tokenom prawdopodobieństwa p(x1) = 0,5 i p(x2) = 0,125. Oblicz PPL = e^(−(1/N)·Σ log p(xi)), log naturalny.",
    answer: 4, tolerance: 0.01,
    explain: "Średnia logarytmów: (ln 0,5 + ln 0,125)/2 = ln(0,0625)/2 = ln 0,25; PPL = e^(−ln 0,25) = 4.", src: "W11, slajd 286", note: "W11-ocena-modeli" },

  { id: "W11-13", w: "W11", c: "kld", type: "single",
    q: "Co mierzy KLD (Kullback–Leibler Divergence)?",
    options: ["Jak bardzo model jest zaskoczony tekstem", "Jak bardzo różnią się dwa rozkłady prawdopodobieństwa", "Jak szybko model generuje kolejne tokeny", "Jak wiele tajnych pytań model rozwiązał"],
    correct: [1], explain: "KLD mierzy różnicę dwóch rozkładów, np. rozkładu kolejnego tokenu modelu i rozkładu referencyjnego.", src: "W11, slajd 287", note: "W11-ocena-modeli" },

  { id: "W11-14", w: "W11", c: "kld", type: "single",
    q: "We wzorze D_KL(P||Q) ze slajdu, czym są P i Q?",
    options: ["P: testowany model, Q: rozkład referencyjny", "P: rozkład referencyjny, Q: testowany model", "P: tokeny wejścia, Q: tokeny wyjścia", "P: model silniejszy, Q: główny sędzia"],
    correct: [1], explain: "P to rozkład referencyjny (np. model nauczyciel), Q to rozkład testowanego modelu.", src: "W11, slajd 287", note: "W11-ocena-modeli" },

  { id: "W11-15", w: "W11", c: "kld-calc", type: "calc",
    q: "Rozkład referencyjny P = (0,5; 0,5), rozkład modelu Q = (0,25; 0,75). Oblicz D_KL(P||Q) = Σ P(x)·log(P(x)/Q(x)), log naturalny.",
    answer: 0.144, tolerance: 0.01,
    explain: "0,5·ln(0,5/0,25) + 0,5·ln(0,5/0,75) = 0,347 − 0,203 ≈ 0,144.", src: "W11, slajd 287", note: "W11-ocena-modeli" },

  { id: "W11-16", w: "W11", c: "halucynacje", type: "multi",
    q: "Co według slajdu sprawdza się przy ocenie halucynacji?",
    options: ["Czy model wymyśla cytowania", "Czy model zachowuje wymagany format", "Czy model podaje nieistniejące przepisy prawa", "Czy model przyznaje się do niewiedzy, gdy powinien"],
    correct: [0, 2, 3], explain: "Zachowanie formatu to ocena zgodności z instrukcjami, nie ocena halucynacji.", src: "W11, slajd 288", note: "W11-ocena-modeli" },

  { id: "W11-17", w: "W11", c: "instrukcje", type: "single",
    q: "Model poprawnie odpowiada, ale zamiast tabeli zwraca akapit i dodaje zbędne uwagi. Który rodzaj oceny to wykryje?",
    options: ["Ocena zgodności z instrukcjami", "Ocena halucynacji modelu", "Ocena zużycia energii (green AI)", "Perplexity"],
    correct: [0], explain: "Zgodność z instrukcjami: wymagany format, brak zbędnych informacji, ograniczenia, polecenia wieloetapowe.", src: "W11, slajd 289", note: "W11-ocena-modeli" },

  { id: "W11-18", w: "W11", c: "ocena-ludzie", type: "multi",
    q: "Które z poniższych slajd wymienia jako typowe kryteria oceny przez ludzi?",
    options: ["Uprzejmość", "Szybkość generowania", "Bezpieczeństwo", "Naturalność"],
    correct: [0, 2, 3], explain: "Kryteria: poprawność, przydatność, naturalność, kompletność, bezpieczeństwo, uprzejmość, zgodność z instrukcją. Szybkość to ocena wydajności.", src: "W11, slajd 290", note: "W11-ocena-modeli" },

  { id: "W11-19", w: "W11", c: "arena", type: "single",
    q: "Jedno zapytanie trafia do dwóch ukrytych modeli, a użytkownik wybiera lepszą odpowiedź. Jak nazywa się taki system oceny?",
    options: ["Benchmark", "LLM-as-a-judge", "System typu arena", "Prywatny benchmark"],
    correct: [2], explain: "Arena to publiczna platforma ze ślepymi porównaniami modeli; generuje rankingi i oceny, np. ELO.", src: "W11, slajd 291", note: "W11-ocena-modeli" },

  { id: "W11-20", w: "W11", c: "arena", type: "single",
    q: "Jakie oceny według slajdu generują systemy typu arena?",
    options: ["Wartości perplexity", "Oceny w J/token", "Rankingi i oceny ELO", "Wyniki w skali 0–100"],
    correct: [2], explain: "Arena generuje rankingi i oceny, np. ELO. Skala 0–100 dotyczy przykładu Inkling.", src: "W11, slajd 291", note: "W11-ocena-modeli" },

  { id: "W11-21", w: "W11", c: "llm-judge", type: "single",
    q: "Na czym polega LLM-as-a-judge?",
    options: ["Słabszy model ocenia silniejszy", "Użytkownicy porównują dwa modele", "Silniejszy model ocenia słabszy", "Model ocenia sam siebie bez polecenia"],
    correct: [2], explain: "Do oceny słabszego modelu wykorzystuje się silniejszy, poprzez odpowiednie polecenie.", src: "W11, slajd 292", note: "W11-ocena-modeli" },

  { id: "W11-22", w: "W11", c: "llm-judge", type: "open",
    q: "Jaką zaletę LLM-as-a-judge podaje slajd w porównaniu z oceną przez użytkowników?",
    answer: "Jest tańsze niż testowanie z wykorzystaniem użytkowników.",
    src: "W11, slajd 292", note: "W11-ocena-modeli" },

  { id: "W11-23", w: "W11", c: "wieloaspektowe", type: "single",
    q: "Dlaczego LLM raczej testuje się wielokryterialnie?",
    options: ["Bo każdy test ocenia inny aspekt działania LLM", "Bo pojedyncze benchmarki są zawsze tajne", "Bo perplexity mierzy tylko rozumowanie", "Bo arena nie generuje żadnych rankingów"],
    correct: [0], explain: "Każdy test ocenia inny aspekt; przykład Inkling: wyniki znormalizowane do 0–100 na wykresie radarowym.", src: "W11, slajd 293", note: "W11-ocena-modeli" },

  { id: "W11-24", w: "W11", c: "wydajnosc-energia", type: "single",
    q: "W jakiej jednostce według slajdu można wyrazić zużycie energii modelu w podejściu green AI?",
    options: ["Tokeny na sekundę", "J/token", "Punkty ELO", "Procent dokładności"],
    correct: [1], explain: "Ocena zużycia energii: ile energii model potrzebuje na odpowiedź, wyrażane jako J/token.", src: "W11, slajd 296", note: "W11-ocena-modeli" },

  { id: "W11-25", w: "W11", c: "wydajnosc-energia", type: "single",
    q: "Co mierzy narzędzie llama-bench przy lokalnie uruchamianych LLM?",
    options: ["Skłonność do halucynacji", "Szybkość prompt processing i token generation", "Zgodność odpowiedzi z instrukcją", "Różnicę rozkładów modelu i nauczyciela"],
    correct: [1], explain: "Ocena wydajności: szybkość przetwarzania zapytań (prompt processing) i generowania odpowiedzi (token generation).", src: "W11, slajd 295", note: "W11-ocena-modeli" },
]});
