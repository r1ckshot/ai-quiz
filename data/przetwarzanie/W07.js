(window.QUIZ_DATA ||= []).push({ subject: "przetwarzanie", questions: [
  // ===== W07 — Modele wielojęzyczne i tłumaczenie maszynowe, mechanizm uwagi =====
  { id: "W07-01", w: "W07", c: "mt-historia", type: "single",
    q: "Jaka jest kolejność podejść do tłumaczenia maszynowego według slajdu?",
    options: ["Sieci RNN i LSTM → modele statystyczne → reguły gramatyki", "Reguły gramatyki → sieci RNN i LSTM → modele statystyczne", "Reguły gramatyki → modele statystyczne → sieci RNN i LSTM", "Modele statystyczne → reguły gramatyki → sieci RNN i LSTM"],
    correct: [2], explain: "Najpierw reguły kodujące gramatykę (i nowe języki), w XX w. modele statystyczne, na początku XXI w. sieci neuronowe.", src: "W07, slajd 175", note: "W07-tlumaczenie-maszynowe" },

  { id: "W07-26", w: "W07", c: "mt-historia", type: "single",
    q: "Które podejście do tłumaczenia maszynowego slajd wiąże z początkiem XXI wieku?",
    options: ["Reguły kodujące gramatykę", "Modele statystyczne", "Nowe języki, np. esperanto", "Sieci neuronowe (RNN, LSTM)"],
    correct: [3], explain: "Modele statystyczne to XX wiek; na początku XXI wieku zwrócono się ku sieciom neuronowym, RNN i LSTM.", src: "W07, slajd 175", note: "W07-tlumaczenie-maszynowe" },

  { id: "W07-02", w: "W07", c: "mt-cele", type: "multi",
    q: "Które z poniższych slajd wymienia jako cele tłumaczenia maszynowego?",
    options: ["Dostęp do informacji", "Pozbycie się przepaści cyfrowej", "Ujednolicenie kolejności słów", "Tłumaczenia wspomagane komputerowo (CAT)"],
    correct: [0, 1, 3], explain: "Cele: dostęp do informacji, likwidacja digital divide, CAT jako element lokalizacji aplikacji.", src: "W07, slajd 176", note: "W07-tlumaczenie-maszynowe" },

  { id: "W07-27", w: "W07", c: "mt-cele", type: "single",
    q: "Co oznacza CAT, wymienione na slajdzie jako element lokalizacji aplikacji?",
    options: ["Kodowanie reguł gramatyki", "Tokenizację opartą na BPE", "Tłumaczenia wspomagane komputerowo", "Uczenie na korpusie równoległym"],
    correct: [2], explain: "CAT to computer-aided translation, czyli tłumaczenia wspomagane komputerowo.", src: "W07, slajd 176", note: "W07-tlumaczenie-maszynowe" },

  { id: "W07-03", w: "W07", c: "jezyki-roznice", type: "single",
    q: "Jaką kolejność słów slajd przypisuje językowi polskiemu i japońskiemu?",
    options: ["Polski SOV, japoński SVO", "Polski SVO, japoński SOV", "Oba języki SVO", "Polski VSO, japoński SOV"],
    correct: [1], explain: "Slajd 176: SVO w języku polskim, SOV w japońskim.", src: "W07, slajd 176", note: "W07-tlumaczenie-maszynowe" },

  { id: "W07-28", w: "W07", c: "jezyki-roznice", type: "multi",
    q: "Czym według slajdu różnią się języki świata (jest ich około 7000)?",
    options: ["Kolejnością słów", "Typem morfologii", "Słownictwem", "Długością zdań"],
    correct: [0, 1, 2], explain: "Slajd wymienia kolejność słów, typ morfologii i słownictwo.", src: "W07, slajd 176", note: "W07-tlumaczenie-maszynowe" },

  { id: "W07-04", w: "W07", c: "encdec-kiedy", type: "single",
    q: "Kiedy według slajdu stosuje się modele typu enkoder-dekoder?",
    options: ["Gdy każdemu słowu wejścia odpowiada jedno słowo wyjścia", "Gdy wyjście ma inną długość lub nie odpowiada jasno słowom wejścia", "Gdy trzeba sklasyfikować cały tekst do jednej kategorii", "Gdy wejście i wyjście są w tym samym języku"],
    correct: [1], explain: "Enkoder-dekoder przekształca sekwencję w sekwencję o innej długości lub bez jasnej odpowiedniości słów.", src: "W07, slajd 177", note: "W07-tlumaczenie-maszynowe" },

  { id: "W07-05", w: "W07", c: "encdec-kiedy", type: "open",
    q: "Dlaczego model enkoder-dekoder dobrze nadaje się do tłumaczenia?",
    answer: "Bo przekształca sekwencję wejściową w wyjściową o innej długości i innej kolejności słów, bez jasnej odpowiedniości słowo w słowo.",
    src: "W07, slajd 177", note: "W07-tlumaczenie-maszynowe" },

  { id: "W07-06", w: "W07", c: "tokenizacja-mt", type: "single",
    q: "Jaką wadę BPE w tłumaczeniu maszynowym wskazuje slajd?",
    options: ["Nie radzi sobie z alfabetami innymi niż łaciński", "Wymaga korpusu równoległego do uczenia", "Dzieli tekst wyłącznie na całe słowa", "Czasami tworzy dużo tokenów bez znaczenia"],
    correct: [3], explain: "BPE czasami tworzy dużą liczbę tokenów pozbawionych znaczenia, dlatego często używa się unigram lub SentencePiece.", src: "W07, slajd 178", note: "W07-tlumaczenie-maszynowe" },

  { id: "W07-29", w: "W07", c: "tokenizacja-mt", type: "single",
    q: "Dlaczego w tłumaczeniu maszynowym tokenizacja oparta na podziale na słowa może nie być odpowiednia?",
    options: ["Bo słowa są zbyt krótkie dla enkodera", "Bo w językach znaczenie ma morfologia", "Bo korpusy równoległe nie zawierają słów", "Bo języki różnią się kolejnością słów"],
    correct: [1], explain: "Skoro morfologia ma znaczenie, podział na słowa może nie być odpowiedni; stosuje się BPE, unigram lub SentencePiece.", src: "W07, slajd 178", note: "W07-tlumaczenie-maszynowe" },

  { id: "W07-07", w: "W07", c: "bitekst", type: "single",
    q: "Tekst występujący równolegle w dwóch językach, na którym uczy się modele tłumaczenia, to:",
    options: ["Bitekst (korpus równoległy)", "Embedding wielojęzyczny", "Wektor kontekstu", "Słownik dwujęzyczny"],
    correct: [0], explain: "Modele MT uczone są na korpusach równoległych, czyli bitekstach; przykładem historycznym jest kamień z Rosetty.", src: "W07, slajd 179", note: "W07-tlumaczenie-maszynowe" },

  { id: "W07-08", w: "W07", c: "bitekst", type: "open",
    q: "Na jakich danych uczy się modele tłumaczenia maszynowego?",
    answer: "Na korpusach równoległych (bitekstach), czyli tekście występującym równolegle w dwóch językach, np. Europarl lub Tatoeba.",
    src: "W07, slajdy 179–181", note: "W07-tlumaczenie-maszynowe" },

  { id: "W07-09", w: "W07", c: "korpusy", type: "single",
    q: "Który korpus jest otwartym projektem wolontariuszy z ok. 900 000 zdań angielskich przetłumaczonych na wiele języków?",
    options: ["Europarl", "Kamień z Rosetty", "Tatoeba", "SentencePiece"],
    correct: [2], explain: "Tatoeba: projekt otwarty, budowany przez wolontariuszy. Europarl pochodzi z prac Parlamentu Europejskiego.", src: "W07, slajd 181", note: "W07-tlumaczenie-maszynowe" },

  { id: "W07-10", w: "W07", c: "korpusy", type: "single",
    q: "Co zawiera korpus Europarl według slajdu?",
    options: ["Zdania z wielu języków tłumaczone przez wolontariuszy", "Pary językowe 21 języków UE z angielskim, z prac Parlamentu", "Pliki TSV z fiszkami do nauki języków obcych", "Teksty prawne wszystkich państw członkowskich ONZ"],
    correct: [1], explain: "Europarl: pary między każdym z 21 oficjalnych języków UE a angielskim, na podstawie prac Parlamentu Europejskiego.", src: "W07, slajd 180", note: "W07-tlumaczenie-maszynowe" },

  { id: "W07-11", w: "W07", c: "emb-wielojezyczne", type: "single",
    q: "Co jest potrzebne, aby obliczyć podobieństwo zdań pomiędzy różnymi językami?",
    options: ["Wspólna, wielojęzyczna przestrzeń ukryta", "Osobny słownik dla każdej pary języków", "Ta sama kolejność słów w obu językach", "Tokenizacja w oparciu o podział na słowa"],
    correct: [0], explain: "Slajd 182: trzeba mieć wspólną, wielojęzyczną przestrzeń ukrytą (embeddingi wielojęzyczne).", src: "W07, slajd 182", note: "W07-tlumaczenie-maszynowe" },

  { id: "W07-12", w: "W07", c: "seq2seq", type: "single",
    q: "Jak inaczej nazywa się sieci w architekturze enkoder-dekoder?",
    options: ["Bag-of-words (worek słów)", "Sequence-to-sequence (seq2seq)", "Sequence labeling (tagowanie)", "Word2vec (skip-gram)"],
    correct: [1], explain: "Sieci enkoder-dekoder nazywane są również sequence-to-sequence (seq2seq).", src: "W07, slajd 183", note: "W07-tlumaczenie-maszynowe" },

  { id: "W07-13", w: "W07", c: "seq2seq", type: "open",
    q: "Jaka jest główna idea architektury enkoder-dekoder?",
    answer: "Enkoder bierze sekwencję i tworzy jej reprezentację pośrednią (kontekst), z której dekoder tworzy sekwencję wyjściową.",
    src: "W07, slajd 183", note: "W07-tlumaczenie-maszynowe" },

  { id: "W07-14", w: "W07", c: "seq2seq-autorzy", type: "single",
    q: "Kiedy i przez kogo według slajdu zaproponowano model Seq2Seq?",
    options: ["W 2017 roku, przez autorów „Attention Is All You Need”", "W 2014 roku, przez Lê Viết Quốca i Ilyę Sutskevera", "W 2006 roku, przez zespół IBM Watson", "W 2014 roku, przez Alana Turinga i Noama Chomsky’ego"],
    correct: [1], explain: "Slajd 183: Seq2Seq powstał w 2014 roku, zaproponowany przez Lê Viết Quốca i Ilyę Sutskevera.", src: "W07, slajd 183", note: "W07-tlumaczenie-maszynowe" },

  { id: "W07-15", w: "W07", c: "enkoder", type: "single",
    q: "Które zdanie o enkoderze NIE jest zgodne ze slajdem?",
    options: ["Może być siecią RNN, LSTM, konwolucyjną lub transformerem", "Typowo ma wiele warstw, używa się wartości z najwyższej", "Tworzy kontekstualną reprezentację sekwencji wejściowej", "Używa się wartości z jego najniższej, pierwszej warstwy"],
    correct: [3], explain: "Slajd 184: używa się wartości z najwyższej warstwy enkodera, nie najniższej.", src: "W07, slajd 184", note: "W07-tlumaczenie-maszynowe" },

  { id: "W07-30", w: "W07", c: "enkoder", type: "single",
    q: "Jaki jest cel enkodera według slajdu?",
    options: ["Wygenerowanie sekwencji wyjściowej token po tokenie", "Podział tekstu na tokeny algorytmem BPE lub unigram", "Obliczenie wag uwagi za pomocą funkcji softmax", "Stworzenie kontekstualnej reprezentacji wejścia"],
    correct: [3], explain: "Celem enkodera jest kontekstualna reprezentacja sekwencji wejściowej; sekwencję wyjściową tworzy dekoder.", src: "W07, slajd 184", note: "W07-tlumaczenie-maszynowe" },

  { id: "W07-16", w: "W07", c: "dekoder", type: "single",
    q: "Jak w najprostszej wersji dekoder wykorzystuje kontekst?",
    options: ["Jako wartość początkową stanu ukrytego", "Jako ostatni token sekwencji wyjściowej", "Jako wagi warstwy softmax", "Jako embedding pierwszego słowa wejścia"],
    correct: [0], explain: "Najprościej kontekst jest wartością początkową stanu ukrytego; żeby nie zanikał, może być parametrem każdego nowego stanu.", src: "W07, slajd 185", note: "W07-tlumaczenie-maszynowe" },

  { id: "W07-31", w: "W07", c: "dekoder", type: "open",
    q: "Jak dekoder może wykorzystać kontekst, żeby jego wpływ nie zanikał?",
    answer: "Kontekst może być parametrem do obliczenia każdego nowego stanu ukrytego, a nie tylko wartością początkową stanu.",
    src: "W07, slajd 185", note: "W07-tlumaczenie-maszynowe" },

  { id: "W07-17", w: "W07", c: "waskie-gardlo", type: "single",
    q: "Na czym polega wąskie gardło w architekturze enkoder-dekoder?",
    options: ["Dekoder musi przetwarzać tokeny w tej samej kolejności co enkoder", "Enkoder ma zbyt mało warstw, by objąć całą sekwencję", "Jeden wektor kontekstu musi nieść całe znaczenie sekwencji", "Softmax zbyt mocno spłaszcza wagi stanów ukrytych"],
    correct: [2], explain: "Wektor kontekstu musi reprezentować wszystko o znaczeniu sekwencji, bo dekoder nie ma innej informacji.", src: "W07, slajd 186", note: "W07-tlumaczenie-maszynowe" },

  { id: "W07-18", w: "W07", c: "waskie-gardlo", type: "single",
    q: "Model enkoder-dekoder bez uwagi dobrze tłumaczy krótkie zdania, ale w długich gubi treść z początku. Co jest przyczyną?",
    options: ["Za mała liczba tokenów tworzonych przez BPE", "Wąskie gardło jednego wektora kontekstu", "Brak wspólnej przestrzeni wielojęzycznej", "Inna kolejność słów SVO i SOV"],
    correct: [1], explain: "Dla długich sekwencji jeden wektor kontekstu nie mieści wszystkiego; informacje z początku są tracone.", src: "W07, slajdy 186, 188", note: "W07-tlumaczenie-maszynowe" },

  { id: "W07-19", w: "W07", c: "uwaga-def", type: "single",
    q: "Co według slajdu wprowadza mechanizm uwagi w modelu enkoder-dekoder?",
    options: ["Dostęp dekodera tylko do ostatniego stanu enkodera", "Dostęp enkodera do stanów ukrytych dekodera", "Dostęp dekodera do wszystkich stanów ukrytych enkodera", "Kontekst ustalany raz dla całej sekwencji"],
    correct: [2], explain: "Mechanizm uwagi daje dekoderowi dostęp do wszystkich ukrytych stanów enkodera, a nie tylko ostatniego.", src: "W07, slajd 188", note: "W07-tlumaczenie-maszynowe" },

  { id: "W07-20", w: "W07", c: "uwaga-def", type: "open",
    q: "Czym jest mechanizm uwagi (attention) w modelu enkoder-dekoder?",
    answer: "To sposób na dostęp dekodera do wszystkich ukrytych stanów enkodera, a nie tylko ostatniego, z kontekstem liczonym przy każdym kroku.",
    src: "W07, slajdy 188, 193", note: "W07-tlumaczenie-maszynowe" },

  { id: "W07-21", w: "W07", c: "uwaga-score", type: "single",
    q: "Jak w najprostszym podejściu liczy się ocenę score(hd_{i-1}, he_j) i co ona wyraża?",
    options: ["Sumą wektorów; wyraża długość sekwencji", "Iloczynem skalarnym; wyraża istotność jako podobieństwo", "Funkcją softmax; wyraża prawdopodobieństwo tokena", "Średnią ważoną; wyraża liczbę stanów enkodera"],
    correct: [1], explain: "score(hd_{i-1}, he_j) = hd_{i-1} · he_j; iloczyn skalarny implementuje istotność jako podobieństwo.", src: "W07, slajdy 190–191", note: "W07-tlumaczenie-maszynowe" },

  { id: "W07-22", w: "W07", c: "uwaga-score", type: "calc",
    q: "Stan dekodera hd_{i-1} = [1, 2], stan enkodera he_j = [3, 1]. Oblicz score(hd_{i-1}, he_j) iloczynem skalarnym.",
    answer: 5, tolerance: 0.01, explain: "1·3 + 2·1 = 5.", src: "W07, slajd 191", note: "W07-tlumaczenie-maszynowe" },

  { id: "W07-23", w: "W07", c: "uwaga-softmax", type: "single",
    q: "Do czego w mechanizmie uwagi służy funkcja softmax?",
    options: ["Do zamiany tokenów na embeddingi wielojęzyczne", "Do wyboru tylko jednego najlepszego stanu enkodera", "Do obliczenia iloczynu skalarnego stanów ukrytych", "Do normalizacji ocen w wektor wag α"],
    correct: [3], explain: "Oceny score normalizuje się softmaxem; powstaje wektor wag α, proporcjonalna istotność każdego stanu enkodera.", src: "W07, slajd 192", note: "W07-tlumaczenie-maszynowe" },

  { id: "W07-24", w: "W07", c: "uwaga-softmax", type: "calc",
    q: "Enkoder ma dwa stany. Oceny score wynoszą 2 i 0. Oblicz wagę α dla pierwszego stanu (softmax), do dwóch miejsc po przecinku.",
    answer: 0.88, tolerance: 0.01, explain: "α = e^2 / (e^2 + e^0) = 7,389 / 8,389 ≈ 0,88.", src: "W07, slajd 192", note: "W07-tlumaczenie-maszynowe" },

  { id: "W07-25", w: "W07", c: "uwaga-kontekst", type: "single",
    q: "Które zdanie o wektorze kontekstu z mechanizmem uwagi NIE jest zgodne ze slajdami?",
    options: ["Jest liczony jako średnia ważona stanów enkodera", "Uwzględnia stan dekodera sprzed bieżącego tokena", "Jest aktualizowany przy każdym kroku dekodowania", "Jest równy ostatniemu stanowi ukrytemu enkodera"],
    correct: [3], explain: "Z uwagą kontekst uwzględnia wszystkie stany enkodera (średnia ważona), a nie tylko ostatni.", src: "W07, slajdy 189, 193", note: "W07-tlumaczenie-maszynowe" },

  { id: "W07-32", w: "W07", c: "uwaga-kontekst", type: "calc",
    q: "Enkoder ma dwa jednowymiarowe stany ukryte: he_1 = 2 i he_2 = 6. Wagi uwagi wynoszą α_1 = 0,25 i α_2 = 0,75. Oblicz wektor kontekstu c_i jako średnią ważoną.",
    answer: 5, tolerance: 0.01, explain: "0,25 × 2 + 0,75 × 6 = 0,5 + 4,5 = 5.", src: "W07, slajdy 189, 192", note: "W07-tlumaczenie-maszynowe" },
]});
