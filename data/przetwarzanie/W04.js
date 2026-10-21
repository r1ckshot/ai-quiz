(window.QUIZ_DATA ||= []).push({ subject: "przetwarzanie", questions: [
  // ===== W04 — Modele N-gramowe, ukryte modele Markowa, LSTM =====
  { id: "W04-01", w: "W04", c: "ngram-def", type: "single",
    q: "Sekwencja dwuwyrazowa występująca po sobie w tekście to:",
    options: ["Unigram", "Trigram", "Bigram", "Skip-gram"],
    correct: [2], explain: "1-gram to pojedyncze słowo, 2-gram (bigram) to dwa słowa, 3-gram (trigram) to trzy.", src: "W04, slajd 101", note: "W04-ngramy-hmm-lstm" },

  { id: "W04-02", w: "W04", c: "ngram-zastosowania", type: "multi",
    q: "Które zastosowania n-gramów podaje slajd?",
    options: ["Wykrywanie plagiatów i analiza stylu", "Rozpoznawanie fonemów w sygnale mowy", "Badania historyczne i językowe", "Tagowanie części mowy"],
    correct: [0, 2], explain: "Slajd 102: plagiaty i styl oraz badania historyczne i językowe. Fonemy i tagowanie to zastosowania HMM.", src: "W04, slajd 102", note: "W04-ngramy-hmm-lstm" },

  { id: "W04-03", w: "W04", c: "model-jezykowy", type: "single",
    q: "Model językowy (language model, LM) to model, który:",
    options: ["Wyznacza ukryte kategorie gramatyczne słów", "Przewiduje kolejne słowa w sekwencji", "Liczy podobieństwo dwóch tekstów", "Tłumaczy słowa na wektory embedding"],
    correct: [1], explain: "Według slajdów 103 i 118 model językowy przewiduje kolejne słowa w sekwencji.", src: "W04, slajdy 103, 118", note: "W04-ngramy-hmm-lstm" },

  { id: "W04-04", w: "W04", c: "model-jezykowy", type: "open",
    q: "Czym jest model językowy i jakie modele z wykładu mogą nim być?",
    answer: "Model językowy przewiduje kolejne słowa w sekwencji; mogą nim być m.in. modele n-gramowe i HMM.",
    src: "W04, slajd 118", note: "W04-ngramy-hmm-lstm" },

  { id: "W04-05", w: "W04", c: "p-w-h", type: "calc",
    q: "W korpusie „ala ma” występuje 4 razy, a „ala ma kota” 3 razy. Ile wynosi P(kota | ala ma) liczone po częstości?",
    answer: 0.75, tolerance: 0.01,
    explain: "Liczność trigramu dzielimy przez liczność kontekstu: 3 / 4 = 0,75.", src: "W04, slajd 105", note: "W04-ngramy-hmm-lstm" },

  { id: "W04-06", w: "W04", c: "p-sekwencji", type: "calc",
    q: "P(w1) = 0,2, P(w2 | w1) = 0,5, P(w3 | w1:2) = 0,4. Ile wynosi prawdopodobieństwo sekwencji P(w1:3)?",
    answer: 0.04, tolerance: 0.001,
    explain: "Prawdopodobieństwo sekwencji to iloczyn kolejnych prawdopodobieństw warunkowych: 0,2 × 0,5 × 0,4 = 0,04.", src: "W04, slajd 106", note: "W04-ngramy-hmm-lstm" },

  { id: "W04-07", w: "W04", c: "backoff", type: "single",
    q: "Model 3-gramowy nie znalazł „ala ma kota”, więc szuka „ma kota”, a potem samego „kota”. Jak nazywa się ta metoda?",
    options: ["Beam search", "Stupid backoff", "Algorytm Viterbiego", "Dekodowanie zachłanne"],
    correct: [1], explain: "Wycofywanie się do krótszego kontekstu to tzw. stupid backoff.", src: "W04, slajd 107", note: "W04-ngramy-hmm-lstm" },

  { id: "W04-08", w: "W04", c: "backoff", type: "open",
    q: "Na czym polega wycofywanie się (stupid backoff) w modelu n-gramowym?",
    answer: "Gdy nie ma dopasowania dla dłuższego n-gramu, model szuka krótszego kontekstu, np. „ala ma kota” → „ma kota” → „kota”.",
    src: "W04, slajd 107", note: "W04-ngramy-hmm-lstm" },

  { id: "W04-09", w: "W04", c: "markow-wlasnosc", type: "single",
    q: "Warunkowe rozkłady prawdopodobieństwa przyszłych stanów zależą wyłącznie od bieżącego stanu, bez względu na przeszłość. To:",
    options: ["Własność Markowa", "Reguła łańcuchowa", "Stupid backoff", "Problem zanikających gradientów"],
    correct: [0], explain: "Tak slajd 110 definiuje własność Markowa; pozwala liczyć P(wn | wn-1) zamiast całej historii.", src: "W04, slajd 110", note: "W04-ngramy-hmm-lstm" },

  { id: "W04-10", w: "W04", c: "lancuch-markowa", type: "multi",
    q: "Które elementy według slajdu ma łańcuch Markowa?",
    options: ["Q, zbiór stanów", "A, macierz przejść między stanami", "B, prawdopodobieństwa emisji", "π, początkowa dystrybucja stanów"],
    correct: [0, 1, 3], explain: "Łańcuch Markowa ma Q, A i π. Emisje B to dodatkowy komponent HMM.", src: "W04, slajdy 111, 115", note: "W04-ngramy-hmm-lstm" },

  { id: "W04-11", w: "W04", c: "lancuch-markowa-calc", type: "calc",
    q: "Generator nazw ze slajdu: C→C 0,2, C→V 0,8, V→C 0,8, V→V 0,2. Stan początkowy to C. Ile wynosi prawdopodobieństwo przejść C → V → C?",
    answer: 0.64, tolerance: 0.01,
    explain: "Mnożymy prawdopodobieństwa przejść: 0,8 × 0,8 = 0,64.", src: "W04, slajd 112", note: "W04-ngramy-hmm-lstm" },

  { id: "W04-12", w: "W04", c: "hmm-def", type: "single",
    q: "Jaki dodatkowy komponent mają HMM w stosunku do zwykłych łańcuchów Markowa?",
    options: ["Początkową dystrybucję stanów π", "Macierz przejść między stanami A", "Prawdopodobieństwa emisji B", "Stan komórki c pamięci długiej"],
    correct: [2], explain: "B = bi(ot) to prawdopodobieństwo obserwacji generowanej ze stanu. Q, A i π ma już łańcuch Markowa.", src: "W04, slajd 115", note: "W04-ngramy-hmm-lstm" },

  { id: "W04-13", w: "W04", c: "hmm-def", type: "open",
    q: "Czym ukryty model Markowa (HMM) różni się od zwykłego łańcucha Markowa?",
    answer: "HMM opisuje zdarzenia obserwowane i ukryte, bo ma dodatkowo prawdopodobieństwa emisji B obserwacji ze stanów.",
    src: "W04, slajdy 114–115", note: "W04-ngramy-hmm-lstm" },

  { id: "W04-14", w: "W04", c: "viterbi-baum", type: "single",
    q: "Znamy A, B i sekwencję obserwacji O. Szukamy najbardziej prawdopodobnej sekwencji stanów Q. Którego algorytmu użyć?",
    options: ["Algorytmu Bauma-Welcha", "Stupid backoff", "Beam search", "Algorytmu Viterbiego"],
    correct: [3], explain: "To zadanie dekodowania, które rozwiązuje algorytm Viterbiego.", src: "W04, slajd 116", note: "W04-ngramy-hmm-lstm" },

  { id: "W04-15", w: "W04", c: "viterbi-baum", type: "single",
    q: "Do czego służy algorytm Bauma-Welcha w HMM?",
    options: ["Do wyznaczenia A i B z samych obserwacji", "Do znalezienia najbardziej prawdopodobnej sekwencji stanów", "Do wyboru następnego słowa metodą przeszukiwania wiązkowego", "Do skracania kontekstu, gdy brak dopasowania n-gramu"],
    correct: [0], explain: "Baum-Welch: mamy tylko obserwacje i wyznaczamy A oraz B. Sekwencję stanów znajduje Viterbi.", src: "W04, slajd 116", note: "W04-ngramy-hmm-lstm" },

  { id: "W04-16", w: "W04", c: "hmm-zastosowania", type: "single",
    q: "W rozpoznawaniu mowy za pomocą HMM ukryte stany to:",
    options: ["Słowa", "Kategorie gramatyczne", "Fonemy", "Wektory cech sygnału"],
    correct: [2], explain: "Mowa: ukryte stany to fonemy, obserwacje to wektory cech. Tagowanie: stany to kategorie gramatyczne, obserwacje to słowa.", src: "W04, slajd 117", note: "W04-ngramy-hmm-lstm" },

  { id: "W04-17", w: "W04", c: "rnn-def", type: "single",
    q: "Co według slajdu stanowi formę pamięci w sieci rekurencyjnej (RNN)?",
    options: ["Macierz przejść między stanami", "Warstwa ukryta z poprzedniego kroku", "Lista najczęstszych n-gramów z korpusu", "Logity słownika z ostatniego kroku"],
    correct: [1], explain: "W RNN wartości warstwy ukrytej z poprzedniego kroku stają się formą pamięci.", src: "W04, slajd 120", note: "W04-ngramy-hmm-lstm" },

  { id: "W04-18", w: "W04", c: "logity", type: "single",
    q: "Co jest bezpośrednim wynikiem modelu językowego RNN w danym kroku?",
    options: ["Jedno następne słowo", "Wektor embedding słowa", "Rozkład prawdopodobieństwa słów", "Najczęstszy trigram w tekście"],
    correct: [2], explain: "Wynikiem nie jest słowo, tylko rozkład prawdopodobieństwa: logity przekształcone przez softmax.", src: "W04, slajd 124", note: "W04-ngramy-hmm-lstm" },

  { id: "W04-19", w: "W04", c: "logity", type: "single",
    q: "Surowe wyniki modelu, których wektor jest dopiero przekształcany funkcją softmax, to:",
    options: ["Embeddingi", "Logity", "Emisje", "Gradienty"],
    correct: [1], explain: "Logity (yt = Why ht + by) to surowe wyniki; softmax zamienia je na prawdopodobieństwa.", src: "W04, slajd 122", note: "W04-ngramy-hmm-lstm" },

  { id: "W04-20", w: "W04", c: "strategie", type: "multi",
    q: "Które strategie doboru następnego słowa wymienia slajd?",
    options: ["Dekodowanie zachłanne", "Wycofywanie (backoff)", "Losowe próbkowanie", "Beam search"],
    correct: [0, 2, 3], explain: "Slajd 125: greedy search, losowe próbkowanie i beam search. Stupid backoff to skracanie kontekstu w modelu n-gramowym.", src: "W04, slajd 125", note: "W04-ngramy-hmm-lstm" },

  { id: "W04-21", w: "W04", c: "vanishing", type: "single",
    q: "Dlaczego proste RNN słabo radzą sobie z długimi sekwencjami?",
    options: ["Gradienty wcześniejszych słów rosną przez mnożenie wartości większych od 1", "Gradienty wcześniejszych słów dążą do 0 przez mnożenie wartości mniejszych od 1", "Stan ukryty nie zależy od poprzedniego kroku", "Sieć nie może mieć więcej niż jednej warstwy ukrytej"],
    correct: [1], explain: "To problem zanikających gradientów (vanishing gradients).", src: "W04, slajd 126", note: "W04-ngramy-hmm-lstm" },

  { id: "W04-22", w: "W04", c: "vanishing", type: "open",
    q: "Na czym polega problem zanikających gradientów w RNN?",
    answer: "Gradienty wcześniejszych słów dążą do 0, bo podczas uczenia mnoży się wiele wartości mniejszych od 1.",
    src: "W04, slajd 126", note: "W04-ngramy-hmm-lstm" },

  { id: "W04-23", w: "W04", c: "lstm-stany", type: "single",
    q: "Który stan LSTM odpowiada pamięci długoterminowej?",
    options: ["Stan ukryty ht", "Stan komórki ct", "Wejście xt", "Logity yt"],
    correct: [1], explain: "Stan komórki ct to pamięć długoterminowa; stan ukryty ht to pamięć krótkoterminowa.", src: "W04, slajd 128", note: "W04-ngramy-hmm-lstm" },

  { id: "W04-24", w: "W04", c: "lstm-bramki", type: "single",
    q: "Która bramka LSTM określa, jaka część pamięci będzie widoczna, i wyznacza stan ukryty?",
    options: ["Forget gate", "Input gate", "Output gate", "Bramka g (tanh)"],
    correct: [2], explain: "Output gate wyznacza ht; forget i input gate przez iloczyn Hadamarta wyznaczają ct.", src: "W04, slajd 129", note: "W04-ngramy-hmm-lstm" },

  { id: "W04-25", w: "W04", c: "hadamard", type: "single",
    q: "Iloczyn Hadamarta we wzorze ct = ft ⊙ ct-1 + it ⊙ c̃t to:",
    options: ["Mnożenie macierzy wiersz przez kolumnę", "Mnożenie odpowiadających sobie elementów", "Iloczyn skalarny dwóch wektorów", "Suma odpowiadających sobie elementów"],
    correct: [1], explain: "Iloczyn Hadamarta to mnożenie element po elemencie (pointwise, element-wise).", src: "W04, slajd 129", note: "W04-ngramy-hmm-lstm" },
]});
