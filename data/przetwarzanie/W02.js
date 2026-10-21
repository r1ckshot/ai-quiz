(window.QUIZ_DATA ||= []).push({ subject: "przetwarzanie", questions: [
  // ===== W02 — Podstawy lingwistyki: regex, tokenizacja, lematyzacja, części mowy, odległość edycyjna =====
  { id: "W02-01", w: "W02", c: "morfem", type: "single",
    q: "„Niepodzielne” części niosące odrębne znaczenie, np. kot-ek albo act-or, to według slajdu:",
    options: ["Fonemy", "Morfemy", "Głoski", "Tokeny"],
    correct: [1], explain: "Morfemy niosą odrębne znaczenie: kot = zwierzę, -ek = zdrobnienie.", src: "W02, slajd 19", note: "W02-lingwistyka" },

  { id: "W02-02", w: "W02", c: "morfem", type: "open",
    q: "Czym są morfemy? Podaj przykład.",
    answer: "Morfemy to niepodzielne części niosące odrębne znaczenie, np. kot-ek, gdzie kot = zwierzę, a -ek = zdrobnienie.",
    src: "W02, slajd 19", note: "W02-lingwistyka" },

  { id: "W02-03", w: "W02", c: "fleksja", type: "single",
    q: "Dział gramatyki zajmujący się odmianą wyrazów to:",
    options: ["Składnia", "Semantyka", "Fleksja", "Fonetyka"],
    correct: [2], explain: "Fleksja zajmuje się odmianą wyrazów; składnia łączeniem słów, semantyka znaczeniem.", src: "W02, slajd 20", note: "W02-lingwistyka" },

  { id: "W02-04", w: "W02", c: "skladnia-semantyka", type: "single",
    q: "Zdania „Stolicą Francji jest Paryż.” i „Francja ma stolicę w Paryżu.” mają inną budowę, ale to samo znaczenie. Która dziedzina bada to znaczenie?",
    options: ["Składnia", "Semantyka", "Morfologia", "Fonetyka"],
    correct: [1], explain: "Semantyka bada znaczenie słów, wyrażeń i zdań; składnia opisuje reguły łączenia słów.", src: "W02, slajd 25", note: "W02-lingwistyka" },

  { id: "W02-05", w: "W02", c: "skladnia-semantyka", type: "single",
    q: "Co według slajdu opisuje składnia?",
    options: ["Znaczenie słów, wyrażeń i zdań", "Odmianę wyrazów przez przypadki", "Reguły łączenia słów w poprawne struktury", "Dźwięki ludzkiej mowy i ich budowę"],
    correct: [2], explain: "Składnia opisuje reguły łączenia słów w poprawne struktury językowe, np. „Kot psa gonią.” jest niepoprawne.", src: "W02, slajd 22", note: "W02-lingwistyka" },

  { id: "W02-06", w: "W02", c: "reprezentacja-znaczenia", type: "multi",
    q: "Które sposoby reprezentacji znaczenia w NLP wymienia slajd?",
    options: ["Ontologie i bazy wiedzy", "Systemy oparte o reguły", "Odległość Levenshteina", "Embeddingi"],
    correct: [0, 1, 3], explain: "Slajd 27: reguły, ontologie i bazy wiedzy, embeddingi. Levenshtein to miara lingwistyczna.", src: "W02, slajd 27", note: "W02-lingwistyka" },

  { id: "W02-07", w: "W02", c: "gloska-fonem", type: "single",
    q: "Najmniejszy element wypowiedzi dźwiękowej, będący realizacją fonemu, to:",
    options: ["Morfem", "Sylaba", "Token", "Głoska"],
    correct: [3], explain: "Głoska realizuje fonem; fonem to jednostka struktury fonologicznej mowy.", src: "W02, slajd 28", note: "W02-lingwistyka" },

  { id: "W02-08", w: "W02", c: "regex-def", type: "single",
    q: "Czym według slajdu są wyrażenia regularne?",
    options: ["Formalną definicją wzorca opisującego tekst do wyszukania", "Zbiorem reguł usuwających końcówki fleksyjne", "Metodą łączenia par znaków w nowe tokeny", "Miarą podobieństwa pomiędzy dwoma napisami"],
    correct: [0], explain: "Regex to formalna definicja wzorca; służy głównie do podstawowego preprocessingu danych.", src: "W02, slajd 33", note: "W02-lingwistyka" },

  { id: "W02-09", w: "W02", c: "regex-skladnia", type: "single",
    q: "Który symbol regex oznacza według slajdu granicę słowa?",
    options: ["\\s", "\\b", "\\B", "\\w"],
    correct: [1], explain: "\\b to granica słowa, \\B nie granica słowa, \\s biały znak, \\w litera.", src: "W02, slajd 34", note: "W02-lingwistyka" },

  { id: "W02-10", w: "W02", c: "regex-skladnia", type: "single",
    q: "Który kwantyfikator oznacza „1 lub więcej” wystąpień?",
    options: ["*", "?", "+", "{n}"],
    correct: [2], explain: "* to 0 lub więcej, + to 1 lub więcej, ? to 0 lub 1.", src: "W02, slajd 35", note: "W02-lingwistyka" },

  { id: "W02-11", w: "W02", c: "re-funkcje", type: "single",
    q: "Która funkcja modułu re zwraca obiekt Match, jeśli w ciągu istnieje dopasowanie?",
    options: ["findall", "split", "sub", "search"],
    correct: [3], explain: "search zwraca Match; findall zwraca listę dopasowań, split listę części, sub zamienia dopasowania.", src: "W02, slajd 37", note: "W02-lingwistyka" },

  { id: "W02-12", w: "W02", c: "tokenizacja", type: "open",
    q: "Czym jest tokenizacja?",
    answer: "Tokenizacja to proces podziału dokumentu na mniejsze, niepodzielne fragmenty (tokeny), np. na poszczególne słowa.",
    src: "W02, slajd 41", note: "W02-lingwistyka" },

  { id: "W02-13", w: "W02", c: "tokenizacja", type: "single",
    q: "Dlaczego tokenizacja do poziomu pojedynczych znaków jest według slajdu nieefektywna?",
    options: ["Bo angielski ma około 500000 słów", "Bo LLM mają limit okna kontekstowego w tokenach", "Bo znaki nie zachowują przedrostków i rdzeni", "Bo wymaga słownika dla każdego języka"],
    correct: [1], explain: "Znaków jest mało, ale tekst daje wtedy bardzo dużo tokenów, a okno kontekstowe LLM jest ograniczone liczbą tokenów.", src: "W02, slajd 43", note: "W02-lingwistyka" },

  { id: "W02-14", w: "W02", c: "bpe", type: "single",
    q: "Na czym polega algorytm BPE (Byte-pair encoding)?",
    options: ["Usuwa ze słowa końcówkę fleksyjną", "Dzieli tekst na słowa po białych znakach", "Łączy najczęstsze pary tokenów w jeden token", "Sprowadza słowo do jego formy podstawowej"],
    correct: [2], explain: "BPE łączy pary tokenów (początkowo znaków) w jeden token w zależności od częstości wykorzystania.", src: "W02, slajd 44", note: "W02-lingwistyka" },

  { id: "W02-15", w: "W02", c: "bpe", type: "open",
    q: "Kiedy kończy się łączenie par tokenów w algorytmie BPE?",
    answer: "Łączenie najczęstszych par powtarza się, aż zostanie osiągnięty zadany rozmiar słownika.",
    src: "W02, slajdy 44–45", note: "W02-lingwistyka" },

  { id: "W02-16", w: "W02", c: "bpe-przyklad", type: "calc",
    q: "W przykładzie BPE słowo „pisał” tokenizuje się na znaki z dodaniem specjalnego znaku końca słowa </w>. Ile tokenów powstaje na starcie?",
    answer: 6, tolerance: 0,
    explain: "p i s a ł </w> to 6 tokenów: 5 liter i znacznik końca słowa.", src: "W02, slajd 45", note: "W02-lingwistyka" },

  { id: "W02-17", w: "W02", c: "slownik-bpe", type: "multi",
    q: "Co według slajdu cechuje większy słownik BPE?",
    options: ["Mniej tokenów na zdanie", "Lepszy dla rzadszych słów i wielojęzyczności", "Odpowiedni dla małych korpusów domenowych", "Większe wymagania pamięciowe i obliczeniowe"],
    correct: [0, 1, 3], explain: "Małe i domenowe korpusy to zaleta mniejszego słownika. Wielkość słownika to hiperparametr.", src: "W02, slajd 48", note: "W02-lingwistyka" },

  { id: "W02-18", w: "W02", c: "pretokenizacja", type: "single",
    q: "Do czego GPT-2 używa wyrażeń regularnych?",
    options: ["Do usuwania końcówek fleksyjnych", "Do pre-tokenizacji przed podziałem na tokeny", "Do obliczania odległości edycyjnej", "Do oznaczania części mowy"],
    correct: [1], explain: "Pre-tokenizator GPT-2 dzieli tekst regexem na skróty, słowa, liczby, interpunkcję i białe znaki.", src: "W02, slajd 50", note: "W02-lingwistyka" },

  { id: "W02-19", w: "W02", c: "stemming-lematyzacja", type: "single",
    q: "Proces przekształcania odmienionych form wyrazu do formy podstawowej, uwzględniający znaczenie i reguły gramatyczne, to:",
    options: ["Stemming", "Tokenizacja", "POS tagging", "Lematyzacja"],
    correct: [3], explain: "Lematyzacja daje lemat i uwzględnia znaczenie; stemming tylko usuwa końcówkę fleksyjną.", src: "W02, slajd 57", note: "W02-lingwistyka" },

  { id: "W02-20", w: "W02", c: "stemming-lematyzacja", type: "single",
    q: "Które zdanie o stemmingu NIE jest zgodne ze slajdami?",
    options: ["Może być wykonywany słownikowo lub algorytmicznie", "Wynik nie zawsze jest poprawnym słowem", "Usuwa ze słowa końcówkę fleksyjną", "Uwzględnia znaczenie i reguły gramatyczne"],
    correct: [3], explain: "Znaczenie i reguły gramatyczne uwzględnia lematyzacja, nie stemming.", src: "W02, slajdy 53–57", note: "W02-lingwistyka" },

  { id: "W02-21", w: "W02", c: "overstemming", type: "single",
    q: "Stemmer zostawił formy „pisał” i „pisała” jako dwa różne rdzenie. Jak nazywa się ta wada?",
    options: ["Overstemming", "Understemming", "Lematyzacja", "Miara morfologiczna"],
    correct: [1], explain: "Understemming to niepołączenie wszystkich form wyrazu; overstemming to zbyt mocne skrócenie.", src: "W02, slajd 56", note: "W02-lingwistyka" },

  { id: "W02-22", w: "W02", c: "pos-tagging", type: "multi",
    q: "Które podejścia do oznaczania części mowy wymienia slajd?",
    options: ["Ukryte modele Markowa", "Tagger Brilla", "Algorytm Portera", "Modele transformer"],
    correct: [0, 1, 3], explain: "Slajd 61: reguły, statystyka, HMM z Viterbim, tagger Brilla, LSTM, transformer. Porter to stemming.", src: "W02, slajd 61", note: "W02-lingwistyka" },

  { id: "W02-23", w: "W02", c: "pos-tagging", type: "open",
    q: "Dlaczego do oznaczania części mowy nie wystarczy słownik słów z ich częściami mowy?",
    answer: "Bo słowa mogą pełnić różne funkcje w zdaniu, więc ta sama forma może być różną częścią mowy.",
    src: "W02, slajd 61", note: "W02-lingwistyka" },

  { id: "W02-24", w: "W02", c: "levenshtein", type: "calc",
    q: "Jaka jest odległość Levenshteina między „Kot” a „Pies” (wstawienie, usunięcie i zamiana kosztują po 1)?",
    answer: 4, tolerance: 0,
    explain: "Trzy zamiany i jedno wstawienie: 3 + 1 = 4.", src: "W02, slajd 66", note: "W02-lingwistyka" },

  { id: "W02-25", w: "W02", c: "levenshtein", type: "single",
    q: "Co oznacza odległość edycyjna?",
    options: ["Liczbę wspólnych liter dwóch napisów", "Minimalną liczbę operacji zmieniających jeden ciąg w drugi", "Liczbę tokenów potrzebnych do zakodowania słowa", "Różnicę długości dwóch napisów w znakach"],
    correct: [1], explain: "Odległość edycyjna to minimalna liczba operacji potrzebnych do przekształcenia jednego ciągu znaków w inny.", src: "W02, slajd 65", note: "W02-lingwistyka" },
]});
