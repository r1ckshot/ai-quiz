(window.QUIZ_DATA ||= []).push({ subject: "przetwarzanie", questions: [
  // ===== W05 — Rozpoznawanie encji nazwanych (NER) =====
  { id: "W05-01", w: "W05", c: "ner-def", type: "single",
    q: "Technika pozwalająca na automatyczną identyfikację encji, czyli nazw, imion i dat, to:",
    options: ["POS tagging", "NER", "Lematyzacja", "Tokenizacja"],
    correct: [1], explain: "NER (Named Entity Recognition) identyfikuje encje nazwane: nazwy, imiona, daty.", src: "W05, slajd 153", note: "W05-ner" },

  { id: "W05-02", w: "W05", c: "ner-def", type: "open",
    q: "Czym jest NER (Named Entity Recognition)?",
    answer: "NER to technika automatycznej identyfikacji encji nazwanych w tekście, czyli nazw, imion i dat.",
    src: "W05, slajd 153", note: "W05-ner" },

  { id: "W05-03", w: "W05", c: "ner-def", type: "single",
    q: "Z nazwy pliku „Tesla wyniki sprzedaży 2024.pdf” NER wyodrębnia według slajdu m.in.:",
    options: ["Osobę: Tesla, miejsce: PDF, datę: 2024", "Firmę: Tesla, datę: 2024, typ dokumentu: PDF", "Firmę: Tesla, liczbę: 2024, osobę: sprzedaż", "Miejsce: Tesla, datę: 2024, typ dokumentu: PDF"],
    correct: [1], explain: "Slajd: nazwa firmy Tesla, nazwa dokumentu „wyniki sprzedaży”, data 2024, typ dokumentu PDF.", src: "W05, slajd 153", note: "W05-ner" },

  { id: "W05-04", w: "W05", c: "ner-podejscia", type: "multi",
    q: "Które typy podejścia do NER wymienia slajd?",
    options: ["Oparte o reguły, np. wyrażenia regularne", "Modele statystyczne, np. CRF", "Odległość edycyjna Levenshteina", "Modele LSTM i modele Markowa"],
    correct: [0, 1, 3], explain: "Slajd 155: reguły (wyrażenia regularne), modele statystyczne (CRF), modele LSTM, modele Markowa.", src: "W05, slajd 155", note: "W05-ner" },

  { id: "W05-05", w: "W05", c: "ner-podejscia", type: "single",
    q: "Jakim modelem według slajdu jest CRF (Conditional Random Fields)?",
    options: ["Modelem opartym o reguły", "Modelem statystycznym", "Modelem typu Transformer", "Modelem rekurencyjnym LSTM"],
    correct: [1], explain: "CRF to przykładowy model statystyczny, używający prawdopodobieństwa.", src: "W05, slajd 155", note: "W05-ner" },

  { id: "W05-06", w: "W05", c: "ner-problemy", type: "multi",
    q: "Które problemy NER wymienia slajd?",
    options: ["Encje nakładające się na siebie", "Encje wieloznaczne", "Brak tagów POS w języku polskim", "Encje specyficzne dla domeny problemu"],
    correct: [0, 1, 3], explain: "Slajd 156: encje nakładające się, wieloznaczne, specyficzne dla domeny oraz kontekst.", src: "W05, slajd 156", note: "W05-ner" },

  { id: "W05-07", w: "W05", c: "crf-sekwencja", type: "single",
    q: "Co według slajdu wyróżnia CRF przy obliczaniu prawdopodobieństw klas?",
    options: ["Liczy je dla każdego słowa niezależnie", "Liczy je dla całej sekwencji jednocześnie", "Liczy je tylko dla słów pisanych wielką literą", "Liczy je wyłącznie za pomocą reguł"],
    correct: [1], explain: "CRF wylicza prawdopodobieństwa dla całej sekwencji x jednocześnie.", src: "W05, slajd 157", note: "W05-ner" },

  { id: "W05-08", w: "W05", c: "emission", type: "single",
    q: "Ocena, jak bardzo słowo pasuje do klasy, to w CRF:",
    options: ["Transition score", "Partition function", "Emission score", "Feature vector"],
    correct: [2], explain: "Emission score ocenia dopasowanie słowa do klasy, np. John → PER = 4.5.", src: "W05, slajd 159", note: "W05-ner" },

  { id: "W05-09", w: "W05", c: "emission", type: "single",
    q: "Co ocenia transition score w CRF?",
    options: ["Jak bardzo słowo pasuje do danej klasy", "Czy słowo zaczyna się wielką literą", "Czy dana klasa może następować po innej klasie", "Ile jest możliwych sekwencji klas"],
    correct: [2], explain: "Transition score ocenia, jak prawdopodobne jest, że ta klasa będzie następowała po innej klasie.", src: "W05, slajd 159", note: "W05-ner" },

  { id: "W05-10", w: "W05", c: "emission", type: "single",
    q: "W tabeli ze slajdu para Previous = O, Current = I-PER ma ocenę −3.4. Jaki to rodzaj oceny?",
    options: ["Emission score", "Transition score", "Suma statystyczna", "Prawdopodobieństwo P(y|x)"],
    correct: [1], explain: "Para klasa poprzednia → klasa bieżąca to transition score; I-PER po O jest mało prawdopodobne.", src: "W05, slajd 159", note: "W05-ner" },

  { id: "W05-11", w: "W05", c: "score-wzor", type: "single",
    q: "We wzorze s(x, y) = Σ (A[y(i−1), y(i)] + P_i(y_i)) symbole A i P oznaczają:",
    options: ["A emission score, P transition score", "A transition score, P emission score", "A sumę statystyczną, P prawdopodobieństwo", "A liczbę klas, P liczbę słów"],
    correct: [1], explain: "Slajd 158: A to transition score, a P to emission score.", src: "W05, slajd 158", note: "W05-ner" },

  { id: "W05-12", w: "W05", c: "partition", type: "single",
    q: "Do czego w CRF służy suma statystyczna Z(x) (partition function)?",
    options: ["Do wyboru najlepszej sekwencji klas", "Do normalizacji prawdopodobieństw", "Do wyliczenia cech sąsiednich słów", "Do dostosowania wag metodą gradientu"],
    correct: [1], explain: "Z(x) sumuje e^s wszystkich możliwych sekwencji klas, więc P(y|x) sumują się do 1.", src: "W05, slajd 161", note: "W05-ner" },

  { id: "W05-13", w: "W05", c: "partition", type: "calc",
    q: "Zdanie ma 5 słów, a model ma 9 klas. Ile jest możliwych sekwencji klas, które sumuje Z(x)?",
    answer: 59049, tolerance: 0, explain: "Każde z 5 słów może mieć jedną z 9 klas: 9^5 = 59 049.", src: "W05, slajd 161", note: "W05-ner" },

  { id: "W05-14", w: "W05", c: "partition", type: "calc",
    q: "Dla sekwencji y ocena s(x, y) = 0, a suma statystyczna Z(x) = 10. Ile wynosi P(y|x)?",
    answer: 0.1, tolerance: 0.001, explain: "P(y|x) = e^s / Z(x) = e^0 / 10 = 1 / 10 = 0.1.", src: "W05, slajd 161", note: "W05-ner" },

  { id: "W05-15", w: "W05", c: "viterbi", type: "single",
    q: "Dlaczego w CRF stosuje się algorytm Viterbiego?",
    options: ["Bo liczenie wszystkich możliwości jest kosztowne", "Bo pozwala usunąć klasę O z sekwencji", "Bo zastępuje emission score cechami POS", "Bo zamienia oceny na wyrażenia regularne"],
    correct: [0], explain: "Wyliczanie sumy dla wszystkich możliwości jest kosztowne, więc stosuje się programowanie dynamiczne, zwykle Viterbiego.", src: "W05, slajd 162", note: "W05-ner" },

  { id: "W05-16", w: "W05", c: "viterbi", type: "single",
    q: "Jaką złożoność ma algorytm Viterbiego według slajdu (n — liczba słów, L — liczba klas)?",
    options: ["O(L^n)", "O(n^2 L)", "O(n L^2)", "O(n + L)"],
    correct: [2], explain: "Slajd 162: O(nL^2), gdzie L to liczba klas. O(L^n) to liczba wszystkich sekwencji.", src: "W05, slajd 162", note: "W05-ner" },

  { id: "W05-17", w: "W05", c: "crf-trening", type: "single",
    q: "Co według slajdu robi się podczas treningu CRF?",
    options: ["Liczy się y* = argmax P(y|x)", "Dostosowuje się wagi parametrów emisji i przejść", "Pobiera się model pl_core_news_sm", "Zamienia się klasy PER i LOC na B- i I-"],
    correct: [1], explain: "Trening: dostosowanie wag dla parametrów emisji i przejść, np. metodą gradientu prostego. Argmax liczy się przy predykcji.", src: "W05, slajd 162", note: "W05-ner" },

  { id: "W05-18", w: "W05", c: "crf-trening", type: "open",
    q: "Co CRF wylicza w czasie obliczania (predykcji) zamiast wszystkich możliwości?",
    answer: "Wylicza tylko najlepszą sekwencję klas y* = argmax P(y|x).",
    src: "W05, slajd 163", note: "W05-ner" },

  { id: "W05-19", w: "W05", c: "cechy", type: "multi",
    q: "Które cechy słowa występują w funkcji word2features ze slajdu?",
    options: ["is_title", "suffix3", "is_digit", "is_stopword"],
    correct: [0, 1, 2], explain: "word2features: bias, word, is_title, is_upper, is_digit, is_punct, suffix3, prefix2, length. Cechy is_stopword nie ma.", src: "W05, slajd 165", note: "W05-ner" },

  { id: "W05-20", w: "W05", c: "cechy", type: "single",
    q: "Co oznacza cecha BOS w wektorze cech słowa?",
    options: ["Słowo jest na początku zdania", "Słowo jest na końcu zdania", "Słowo jest pisane wielkimi literami", "Słowo jest znakiem interpunkcji"],
    correct: [0], explain: "BOS = beginning of sentence (brak poprzedniego słowa); EOS = end of sentence.", src: "W05, slajd 166", note: "W05-ner" },

  { id: "W05-21", w: "W05", c: "nnp", type: "single",
    q: "Słowo dostało w POS tagging tag NNP. Co według slajdu trzeba jeszcze zrobić w NER?",
    options: ["Nic, bo NNP to już klasa encji", "Sklasyfikować rodzaj encji nazwanej", "Usunąć je jako daną osobową", "Zamienić je na małe litery"],
    correct: [1], explain: "NNP to tylko nazwa własna; nadal trzeba ustalić, czy to osoba, miejsce czy organizacja.", src: "W05, slajd 164", note: "W05-ner" },

  { id: "W05-22", w: "W05", c: "bio", type: "single",
    q: "Jak w modelu BIO sklasyfikować „John lives in New York.” (klasy PER i LOC)?",
    options: ["B-PER O O B-LOC B-LOC", "B-PER O O I-LOC I-LOC", "B-PER O O B-LOC I-LOC", "I-PER O O B-LOC I-LOC"],
    correct: [2], explain: "John zaczyna encję PER (B-PER), New zaczyna LOC (B-LOC), York jest wewnątrz LOC (I-LOC).", src: "W05, slajd 170", note: "W05-ner" },

  { id: "W05-23", w: "W05", c: "bio", type: "open",
    q: "Po co w NER stosuje się model BIO?",
    answer: "Żeby rozpoznać encje złożone z wielu tokenów: B- oznacza początek encji, I- jej wnętrze, O token poza encją.",
    src: "W05, slajd 170", note: "W05-ner" },


  { id: "W05-24", w: "W05", c: "spacy", type: "single",
    q: "Który atrybut encji w spaCy zwraca jej etykietę, np. persName?",
    options: ["ent.text", "ent.start_char", "ent.label_", "ent.end_char"],
    correct: [2], explain: "Pętla po doc.ents wypisuje ent.text, ent.start_char, ent.end_char i ent.label_ (etykieta).", src: "W05, slajd 172", note: "W05-ner" },

  { id: "W05-25", w: "W05", c: "zastosowania", type: "multi",
    q: "Które zastosowania NER wymienia slajd?",
    options: ["Usuwanie danych osobowych (anonimizacja)", "Wykrywanie nazw chorób w dokumentacji medycznej", "Wyszukiwanie nazw spółek w dokumentach finansowych", "Generowanie tekstu z danych ustrukturyzowanych"],
    correct: [0, 1, 2], explain: "Slajd 173: wyszukiwanie informacji, anonimizacja, nazwy chorób w dokumentacji medycznej. Generowania tekstu nie ma.", src: "W05, slajd 173", note: "W05-ner" },
]});
