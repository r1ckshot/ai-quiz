(window.QUIZ_DATA ||= []).push({ subject: "przetwarzanie", questions: [
  // ===== W04 — Modele N-gramowe, ukryte modele Markowa, LSTM =====
  { id: "W04-01", w: "W04", c: "ngram-def", type: "single",
    q: "Sekwencja dwuwyrazowa występująca po sobie w tekście to:",
    options: ["Unigram", "Trigram", "Bigram", "Skip-gram"],
    correct: [2], explain: "1-gram to pojedyncze słowo, 2-gram (bigram) to dwa słowa, 3-gram (trigram) to trzy.", src: "W04, slajd 101", note: "W04-ngramy-hmm-lstm" },

  { id: "W04-26", w: "W04", c: "ngram-def", type: "single",
    q: "Czym są n-gramy?",
    options: ["Zbiory N najczęstszych słów z korpusu", "Ciągi N elementów następujących po sobie", "Wektory N liczb opisujące słowo", "Sekwencje N stanów ukrytych modelu"],
    correct: [1], explain: "N-gramy to ciągi N elementów (słów, znaków) następujących po sobie w tekście.", src: "W04, slajd 101", note: "W04-ngramy-hmm-lstm" },

  { id: "W04-27", w: "W04", c: "ngram-def", type: "calc",
    q: "Lista tokens ma 10 elementów. Ile trigramów utworzy kod ze slajdu: [' '.join(tokens[i:i+3]) for i in range(len(tokens)-2)]?",
    answer: 8, tolerance: 0.01,
    explain: "Pętla przebiega po range(10 − 2) = range(8), czyli powstaje 8 trigramów.", src: "W04, slajd 102", note: "W04-ngramy-hmm-lstm" },

  { id: "W04-02", w: "W04", c: "ngram-zastosowania", type: "multi",
    q: "Które zastosowania n-gramów podaje slajd?",
    options: ["Wykrywanie plagiatów i analiza stylu", "Rozpoznawanie fonemów w sygnale mowy", "Badania historyczne i językowe", "Tagowanie części mowy"],
    correct: [0, 2], explain: "Slajd 102: plagiaty i styl oraz badania historyczne i językowe. Fonemy i tagowanie to zastosowania HMM.", src: "W04, slajd 102", note: "W04-ngramy-hmm-lstm" },

  { id: "W04-28", w: "W04", c: "ngram-zastosowania", type: "single",
    q: "Co NIE jest zastosowaniem n-gramów podanym na slajdach 102 i 103?",
    options: ["Wykrywanie plagiatów", "Systemy podpowiedzi", "Korekta gramatyczna", "Tłumaczenie maszynowe"],
    correct: [3], explain: "Plagiaty, podpowiedzi i korekta to zastosowania n-gramów. Tłumaczenie maszynowe to zastosowanie LSTM (slajd 132).", src: "W04, slajdy 102, 103", note: "W04-ngramy-hmm-lstm" },

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

  { id: "W04-29", w: "W04", c: "p-w-h", type: "calc",
    q: "W korpusie „ala ma” występuje 8 razy, a „ala ma psa” 2 razy. Ile wynosi P(psa | ala ma) liczone po częstości?",
    answer: 0.25, tolerance: 0.01,
    explain: "Liczność trigramu dzielimy przez liczność kontekstu: 2 / 8 = 0,25.", src: "W04, slajd 105", note: "W04-ngramy-hmm-lstm" },

  { id: "W04-30", w: "W04", c: "p-w-h", type: "single",
    q: "Jak najprościej wyliczyć P(w | h) w modelu n-gramowym?",
    options: ["Pomnożyć P(w) przez rozmiar korpusu", "Podzielić C(h, w) przez C(h)", "Zsumować logity słów ze słownika", "Wybrać największą emisję B ze stanu"],
    correct: [1], explain: "Slajd 105: wyliczenie po częstości, czyli liczność sekwencji ze słowem w podzielona przez liczność h.", src: "W04, slajd 105", note: "W04-ngramy-hmm-lstm" },

  { id: "W04-06", w: "W04", c: "p-sekwencji", type: "calc",
    q: "P(w1) = 0,2, P(w2 | w1) = 0,5, P(w3 | w1:2) = 0,4. Ile wynosi prawdopodobieństwo sekwencji P(w1:3)?",
    answer: 0.04, tolerance: 0.001,
    explain: "Prawdopodobieństwo sekwencji to iloczyn kolejnych prawdopodobieństw warunkowych: 0,2 × 0,5 × 0,4 = 0,04.", src: "W04, slajd 106", note: "W04-ngramy-hmm-lstm" },

  { id: "W04-31", w: "W04", c: "p-sekwencji", type: "calc",
    q: "P(w1) = 0,5, P(w2 | w1) = 0,4, P(w3 | w1:2) = 0,5, P(w4 | w1:3) = 0,1. Ile wynosi P(w1:4)?",
    answer: 0.01, tolerance: 0.001,
    explain: "Mnożymy kolejne prawdopodobieństwa warunkowe: 0,5 × 0,4 × 0,5 × 0,1 = 0,01.", src: "W04, slajd 106", note: "W04-ngramy-hmm-lstm" },

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

  { id: "W04-32", w: "W04", c: "markow-wlasnosc", type: "single",
    q: "Co oznacza przybliżenie P(wn | w1:n−1) ≈ P(wn | wn−1)?",
    options: ["Słowo zależy od wszystkich wcześniejszych słów", "Słowo zależy tylko od następnego słowa", "Słowo zależy tylko od bezpośrednio poprzedniego", "Słowo nie zależy od żadnego innego słowa"],
    correct: [2], explain: "Do wyliczenia prawdopodobieństwa wystarcza bezpośrednio poprzednie słowo, bez całej historii.", src: "W04, slajd 110", note: "W04-ngramy-hmm-lstm" },

  { id: "W04-33", w: "W04", c: "markow-wlasnosc", type: "open",
    q: "Na czym polega własność Markowa?",
    answer: "Warunkowe rozkłady prawdopodobieństwa przyszłych stanów zależą wyłącznie od bieżącego stanu, bez względu na przeszłość.",
    src: "W04, slajd 110", note: "W04-ngramy-hmm-lstm" },

  { id: "W04-10", w: "W04", c: "lancuch-markowa", type: "multi",
    q: "Które elementy według slajdu ma łańcuch Markowa?",
    options: ["Q, zbiór stanów", "A, macierz przejść między stanami", "B, prawdopodobieństwa emisji", "π, początkowa dystrybucja stanów"],
    correct: [0, 1, 3], explain: "Łańcuch Markowa ma Q, A i π. Emisje B to dodatkowy komponent HMM.", src: "W04, slajdy 111, 115", note: "W04-ngramy-hmm-lstm" },

  { id: "W04-34", w: "W04", c: "lancuch-markowa", type: "single",
    q: "Co opisuje macierz A w łańcuchu Markowa?",
    options: ["Początkową dystrybucję stanów", "Prawdopodobieństwa przejść pomiędzy stanami", "Prawdopodobieństwa obserwacji ze stanów", "Zbiór wszystkich stanów"],
    correct: [1], explain: "A to macierz prawdopodobieństw przejść. Q to zbiór stanów, π to początkowa dystrybucja.", src: "W04, slajd 111", note: "W04-ngramy-hmm-lstm" },

  { id: "W04-35", w: "W04", c: "lancuch-markowa", type: "open",
    q: "Wymień trzy elementy łańcucha Markowa.",
    answer: "Q (zbiór stanów), A (macierz prawdopodobieństw przejść pomiędzy stanami) i π (początkowa dystrybucja stanów).",
    src: "W04, slajd 111", note: "W04-ngramy-hmm-lstm" },

  { id: "W04-11", w: "W04", c: "lancuch-markowa-calc", type: "calc",
    q: "Generator nazw ze slajdu: C→C 0,2, C→V 0,8, V→C 0,8, V→V 0,2. Stan początkowy to C. Ile wynosi prawdopodobieństwo przejść C → V → C?",
    answer: 0.64, tolerance: 0.01,
    explain: "Mnożymy prawdopodobieństwa przejść: 0,8 × 0,8 = 0,64.", src: "W04, slajd 112", note: "W04-ngramy-hmm-lstm" },

  { id: "W04-36", w: "W04", c: "lancuch-markowa-calc", type: "calc",
    q: "Generator nazw ze slajdu: C→C 0,2, C→V 0,8, V→C 0,8, V→V 0,2. Stan początkowy to C. Ile wynosi prawdopodobieństwo przejść C → V → V → C?",
    answer: 0.128, tolerance: 0.001,
    explain: "Mnożymy prawdopodobieństwa przejść: 0,8 × 0,2 × 0,8 = 0,128.", src: "W04, slajd 112", note: "W04-ngramy-hmm-lstm" },

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

  { id: "W04-37", w: "W04", c: "hmm-zastosowania", type: "single",
    q: "W tagowaniu części mowy za pomocą HMM obserwacjami są:",
    options: ["Fonemy", "Słowa", "Kategorie gramatyczne", "Wektory cech sygnału"],
    correct: [1], explain: "Tagowanie: stany to kategorie gramatyczne, obserwacje to słowa. Wektory cech to obserwacje w rozpoznawaniu mowy.", src: "W04, slajd 117", note: "W04-ngramy-hmm-lstm" },

  { id: "W04-17", w: "W04", c: "rnn-def", type: "single",
    q: "Co według slajdu stanowi formę pamięci w sieci rekurencyjnej (RNN)?",
    options: ["Macierz przejść między stanami", "Warstwa ukryta z poprzedniego kroku", "Lista najczęstszych n-gramów z korpusu", "Logity słownika z ostatniego kroku"],
    correct: [1], explain: "W RNN wartości warstwy ukrytej z poprzedniego kroku stają się formą pamięci.", src: "W04, slajd 120", note: "W04-ngramy-hmm-lstm" },

  { id: "W04-38", w: "W04", c: "rnn-def", type: "single",
    q: "Co odróżnia sieć rekurencyjną od zwykłej sieci?",
    options: ["Bramki sterujące pamięcią", "Macierz przejść między stanami", "Cykle w połączeniach sieci", "Prawdopodobieństwa emisji"],
    correct: [2], explain: "Dzięki cyklom wartość wejścia może zależeć od wcześniejszych wyjść.", src: "W04, slajd 120", note: "W04-ngramy-hmm-lstm" },

  { id: "W04-39", w: "W04", c: "rnn-def", type: "open",
    q: "Jak sieć RNN oblicza stan ukryty w każdym kroku?",
    answer: "Na podstawie bieżącego wejścia oraz tego, co zapamiętała z poprzedniego kroku (stanu ukrytego z poprzedniego kroku).",
    src: "W04, slajd 120", note: "W04-ngramy-hmm-lstm" },

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

  { id: "W04-40", w: "W04", c: "strategie", type: "single",
    q: "Jaki bardzo popularny heurystyczny algorytm przeszukiwania służy do doboru następnego słowa?",
    options: ["Algorytm Viterbiego", "Algorytm Bauma-Welcha", "Stupid backoff", "Beam search"],
    correct: [3], explain: "Slajd 125 wskazuje beam search. Viterbi i Baum-Welch to algorytmy HMM.", src: "W04, slajd 125", note: "W04-ngramy-hmm-lstm" },

  { id: "W04-41", w: "W04", c: "strategie", type: "open",
    q: "Wymień strategie doboru następnego słowa, zamiast zawsze wybierania najbardziej prawdopodobnego.",
    answer: "Dekodowanie zachłanne (greedy search), losowe próbkowanie i beam search.",
    src: "W04, slajd 125", note: "W04-ngramy-hmm-lstm" },

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

  { id: "W04-42", w: "W04", c: "lstm-stany", type: "single",
    q: "Czym w LSTM jest stan ukryty ht?",
    options: ["Pamięcią długoterminową", "Surowym wynikiem modelu", "Pamięcią krótkoterminową", "Embeddingiem bieżącego słowa"],
    correct: [2], explain: "Stan ukryty ht to pamięć krótkoterminowa, a stan komórki ct długoterminowa.", src: "W04, slajd 128", note: "W04-ngramy-hmm-lstm" },

  { id: "W04-43", w: "W04", c: "lstm-stany", type: "open",
    q: "Jakie dwa stany utrzymuje model LSTM?",
    answer: "Stan ukryty ht (pamięć krótkoterminowa) i stan komórki ct (pamięć długoterminowa).",
    src: "W04, slajd 128", note: "W04-ngramy-hmm-lstm" },

  { id: "W04-24", w: "W04", c: "lstm-bramki", type: "single",
    q: "Która bramka LSTM określa, jaka część pamięci będzie widoczna, i wyznacza stan ukryty?",
    options: ["Forget gate", "Input gate", "Output gate", "Bramka g (tanh)"],
    correct: [2], explain: "Output gate wyznacza ht; forget i input gate przez iloczyn Hadamarta wyznaczają ct.", src: "W04, slajd 129", note: "W04-ngramy-hmm-lstm" },

  { id: "W04-44", w: "W04", c: "lstm-bramki", type: "single",
    q: "Z których bramek wylicza się stan komórki ct przez iloczyn Hadamarta?",
    options: ["Input gate i output gate", "Tylko output gate", "Forget gate i input gate", "Forget gate i output gate"],
    correct: [2], explain: "ct = ft ⊙ ct-1 + it ⊙ c̃t, a output gate wyznacza stan ukryty.", src: "W04, slajd 129", note: "W04-ngramy-hmm-lstm" },

  { id: "W04-25", w: "W04", c: "hadamard", type: "single",
    q: "Iloczyn Hadamarta we wzorze ct = ft ⊙ ct-1 + it ⊙ c̃t to:",
    options: ["Mnożenie macierzy wiersz przez kolumnę", "Mnożenie odpowiadających sobie elementów", "Iloczyn skalarny dwóch wektorów", "Suma odpowiadających sobie elementów"],
    correct: [1], explain: "Iloczyn Hadamarta to mnożenie element po elemencie (pointwise, element-wise).", src: "W04, slajd 129", note: "W04-ngramy-hmm-lstm" },

  { id: "W04-45", w: "W04", c: "hadamard", type: "single",
    q: "Ile wynosi iloczyn Hadamarta wektorów [2, 3] i [4, 5]?",
    options: ["[6, 8]", "[8, 15]", "23", "[10, 12]"],
    correct: [1], explain: "Mnożymy elementy odpowiadające sobie: [2 × 4, 3 × 5] = [8, 15].", src: "W04, slajd 129", note: "W04-ngramy-hmm-lstm" },
]});
