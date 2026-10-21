(window.QUIZ_DATA ||= []).push({ subject: "przetwarzanie", questions: [
  // ===== W03 — Reprezentacja wektorowa tekstu, word2vec, embedding =====
  { id: "W03-01", w: "W03", c: "wektory-cel", type: "single",
    q: "Dlaczego według wykładu modele ML wymagają reprezentacji tekstu w postaci wartości liczbowych?",
    options: ["Uczą się metodą gradientu prostego, która wymaga funkcji ciągłych", "Bo tylko liczby da się zapisać w macierzy współwystępowania", "Bo tekst musi być najpierw przetłumaczony na język angielski", "Bo prawo Zipfa nie działa dla słów zapisanych tekstem"],
    correct: [0], explain: "Slajd 70: modele ML uczą się metodą gradientu prostego, co wymaga funkcji ciągłych; na wektorach działa też iloczyn skalarny.", src: "W03, slajd 70", note: "W03-reprezentacja-wektorowa" },

  { id: "W03-02", w: "W03", c: "korpus", type: "single",
    q: "Jak w NLP nazywa się kolekcja dokumentów tekstowych?",
    options: ["Słownik", "Korpus", "Macierz TDM", "Przestrzeń osadzania"],
    correct: [1], explain: "Korpus (corpus) to kolekcja dokumentów; dokumentem może być nawet pojedyncze zdanie.", src: "W03, slajd 71", note: "W03-reprezentacja-wektorowa" },

  { id: "W03-03", w: "W03", c: "bow", type: "single",
    q: "Które zdanie o podejściu Bag of Words NIE jest zgodne ze slajdami?",
    options: ["Wektor ma tyle wartości, ile słów jest w słowniku", "Wartości mogą być liczbą wystąpień słowa w dokumencie", "Kolejność słów w dokumencie jest zachowana w wektorze", "Dokument jest przedstawiony jako wielowymiarowy wektor"],
    correct: [2], explain: "Slajd 74: Bag of Words ignoruje kolejność słów.", src: "W03, slajd 74", note: "W03-reprezentacja-wektorowa" },

  { id: "W03-04", w: "W03", c: "bow", type: "single",
    q: "Słownik: kot, lubi, mleko, je, rybę, pies. Jak wygląda wektor BoW dokumentu „pies lubi mleko”?",
    options: ["[1, 1, 1, 0, 0, 0]", "[0, 1, 1, 0, 0, 1]", "[1, 0, 0, 1, 1, 0]", "[0, 0, 1, 1, 0, 1]"],
    correct: [1], explain: "Pozycje 2, 3 i 6 (lubi, mleko, pies) dostają 1; to kolumna D3 macierzy TDM.", src: "W03, slajdy 73–76", note: "W03-reprezentacja-wektorowa" },

  { id: "W03-05", w: "W03", c: "bow", type: "open",
    q: "Na czym polega reprezentacja Bag of Words?",
    answer: "Dokument to wektor o długości słownika, w którym każda wartość to liczba wystąpień danego słowa (albo 0/1), bez kolejności słów.",
    src: "W03, slajdy 72–74", note: "W03-reprezentacja-wektorowa" },

  { id: "W03-06", w: "W03", c: "vsm", type: "single",
    q: "Generalizacja Bag of Words, w której każdy dokument jest wektorem, a odległość wektorowa ma znaczenie, to:",
    options: ["One-hot encoding", "Vector Space Model", "Macierz współwystępowania", "Funkcja rankingowa BM25"],
    correct: [1], explain: "VSM: odległość między wektorami odpowiada najczęściej podobieństwu dokumentów.", src: "W03, slajd 75", note: "W03-reprezentacja-wektorowa" },

  { id: "W03-07", w: "W03", c: "tdm", type: "single",
    q: "Co według slajdu oznaczają wiersze i kolumny macierzy TDM?",
    options: ["Wiersze to dokumenty, kolumny to słowa", "Wiersze to słowa, kolumny to dokumenty", "Wiersze i kolumny to słowa ze słownika", "Wiersze to słowa, kolumny to wymiary embeddingu"],
    correct: [1], explain: "Term Document Matrix: wiersze to słowa, kolumny to dokumenty w korpusie, wartości to wagi.", src: "W03, slajd 76", note: "W03-reprezentacja-wektorowa" },

  { id: "W03-08", w: "W03", c: "idf", type: "single",
    q: "Do czego służy IDF (Inverse Document Frequency)?",
    options: ["Przypisuje wyższe wagi słowom częstszym w korpusie", "Przypisuje wyższe wagi słowom rzadszym w korpusie", "Zlicza wystąpienia słowa w jednym dokumencie", "Zaznacza 1 lub 0, czy słowo jest w dokumencie"],
    correct: [1], explain: "Slajd 77: IDF pozwala przypisać wyższe wagi słowom, które są rzadsze w korpusie.", src: "W03, slajd 77", note: "W03-reprezentacja-wektorowa" },

  { id: "W03-09", w: "W03", c: "idf", type: "multi",
    q: "Jakie wagi w macierzy TDM wymienia slajd?",
    options: ["Binarne: czy słowo jest w dokumencie", "Liczba wystąpień słowa w dokumencie", "Wagi warstwy ukrytej sieci word2vec", "Częstość występowania słowa (TF)"],
    correct: [0, 1, 3], explain: "Slajd 77: wagi binarne, liczba wystąpień, częstość TF oraz IDF. Wagi warstwy ukrytej to embeddingi.", src: "W03, slajd 77", note: "W03-reprezentacja-wektorowa" },

  { id: "W03-10", w: "W03", c: "tfidf", type: "calc",
    q: "Korpus: D1 „kot lubi mleko”, D2 „kot je rybę”, D3 „pies lubi mleko”. Oblicz TF-IDF słowa „kot” w D1 wzorem tf(t) × log(N / df(t)), logarytm naturalny. Wynik do 3 miejsc po przecinku.",
    answer: 0.405, tolerance: 0.01,
    explain: "tf = 1, N = 3, df(kot) = 2, więc ln(3/2) ≈ 0.405; tak samo w tabeli na slajdzie 79.", src: "W03, slajd 79", note: "W03-reprezentacja-wektorowa" },

  { id: "W03-11", w: "W03", c: "tfidf", type: "open",
    q: "Czym jest TF-IDF?",
    answer: "TF-IDF to iloczyn częstości słowa w dokumencie (TF) i odwrotnej częstości dokumentowej (IDF), która podnosi wagę rzadkich słów.",
    src: "W03, slajdy 77–79", note: "W03-reprezentacja-wektorowa" },

  { id: "W03-12", w: "W03", c: "cosinus", type: "single",
    q: "Iloczyn skalarny wektorów A i B podzielony przez iloczyn ich długości (norm) to:",
    options: ["Macierz współwystępowania", "Podobieństwo cosinusowe", "Funkcja rankingowa BM25", "Waga TF-IDF dokumentu"],
    correct: [1], explain: "Slajd 80: Similarity(A, B) to iloczyn skalarny A i B podzielony przez ‖A‖ ‖B‖.", src: "W03, slajd 80", note: "W03-reprezentacja-wektorowa" },

  { id: "W03-13", w: "W03", c: "cosinus", type: "single",
    q: "Które zdanie o podobieństwie cosinusowym jest zgodne ze slajdem?",
    options: ["Zależy od długości wektorów i jest w zakresie [0, 1]", "Zależy tylko od kąta i jest w zakresie [-1, 1]", "Zależy tylko od kąta i jest w zakresie [0, 1]", "Zależy od długości wektorów i jest w zakresie [-1, 1]"],
    correct: [1], explain: "Slajd 80: zależy tylko od kąta pomiędzy wektorami, zawsze w zakresie [-1, 1].", src: "W03, slajd 80", note: "W03-reprezentacja-wektorowa" },

  { id: "W03-14", w: "W03", c: "cosinus", type: "calc",
    q: "Wagi binarne z TDM: D1 = [1, 1, 1, 0, 0, 0], D3 = [0, 1, 1, 0, 0, 1]. Oblicz podobieństwo cosinusowe D1 i D3. Wynik do 3 miejsc po przecinku.",
    answer: 0.667, tolerance: 0.01,
    explain: "Iloczyn skalarny = 2, normy = √3 i √3, więc 2 / 3 ≈ 0.667.", src: "W03, slajdy 76, 80", note: "W03-reprezentacja-wektorowa" },

  { id: "W03-15", w: "W03", c: "wyszukiwanie", type: "single",
    q: "Która funkcja rankingowa według slajdu wywodzi się z podobieństwa cosinusowego w wyszukiwaniu?",
    options: ["GloVe", "BM25", "CBOW", "PCA"],
    correct: [1], explain: "Slajd 82: zapytanie wektoryzuje się do przestrzeni TF-IDF; stąd wywodzi się m.in. BM25.", src: "W03, slajd 82", note: "W03-reprezentacja-wektorowa" },

  { id: "W03-16", w: "W03", c: "zipf", type: "single",
    q: "Jaki wniosek dla wektorów BoW wynika z prawa Zipfa?",
    options: ["Są zazwyczaj gęste i niskowymiarowe", "Są zazwyczaj rzadkie (sparse)", "Zachowują podobieństwo znaczeniowe", "Mają długość równą liczbie dokumentów"],
    correct: [1], explain: "Częstość jest odwrotnie proporcjonalna do rangi, więc większość słów występuje rzadko i wektory BoW są rzadkie.", src: "W03, slajd 83", note: "W03-reprezentacja-wektorowa" },

  { id: "W03-17", w: "W03", c: "zipf", type: "calc",
    q: "Najczęstsze słowo w korpusie występuje 1000 razy. Ile razy według prawa Zipfa występuje mniej więcej drugie najczęstsze słowo?",
    answer: 500, tolerance: 1,
    explain: "Częstość odwrotnie proporcjonalna do rangi: drugie słowo pojawia się ok. połowę razy rzadziej, czyli 1000 / 2.", src: "W03, slajd 83", note: "W03-reprezentacja-wektorowa" },

  { id: "W03-18", w: "W03", c: "wspolwystepowanie", type: "multi",
    q: "Jakie problemy macierzy współwystępowania wymienia slajd?",
    options: ["Jest ogromna (V × V)", "Ignoruje słowa rzadkie", "Jest bardzo rzadka", "Wymaga sieci LSTM"],
    correct: [0, 2], explain: "Slajd 87: macierz jest ogromna i bardzo rzadka; rozwiązanie to aproksymacja siecią neuronową.", src: "W03, slajd 87", note: "W03-reprezentacja-wektorowa" },

  { id: "W03-19", w: "W03", c: "skip-gram", type: "single",
    q: "Co według slajdu oznacza skip-gram o rozmiarze 5?",
    options: ["5 słów przed słowem brakującym", "2 słowa przed i 2 słowa po słowie brakującym", "5 brakujących słów w jednej sekwencji", "4 słowa przed i 1 słowo po słowie brakującym"],
    correct: [1], explain: "Skip-gram to sekwencja bez środkowego słowa; rozmiar 5 = 2 + brakujące + 2.", src: "W03, slajd 88", note: "W03-reprezentacja-wektorowa" },

  { id: "W03-20", w: "W03", c: "cbow", type: "single",
    q: "Co slajd mówi o CBOW w porównaniu z CSGM?",
    options: ["Jest wolniejszy, ale lepszy dla rzadkich słów", "Jest szybszy, ale gorszy dla rzadkich słów", "Obsługuje słowa spoza słownika", "Opiera się na sieci LSTM"],
    correct: [1], explain: "Slajd 89: CBOW (Continuous Bag of Words) jest szybszy, ale gorszy dla rzadziej występujących słów.", src: "W03, slajd 89", note: "W03-reprezentacja-wektorowa" },

  { id: "W03-21", w: "W03", c: "embedding", type: "single",
    q: "Czym są embeddingi w sieci word2vec po zakończeniu treningu?",
    options: ["Wyjściami warstwy softmax", "Wagami warstwy ukrytej", "Wierszami macierzy TDM", "Wektorami one-hot słów"],
    correct: [1], explain: "Slajd 92: warstwa ukryta ma tyle neuronów, ile wymiarów embeddingu; jej wagi to embeddingi.", src: "W03, slajd 92", note: "W03-reprezentacja-wektorowa" },

  { id: "W03-22", w: "W03", c: "embedding", type: "open",
    q: "Czym jest word embedding według wykładu?",
    answer: "To wektor słowa o znacznie mniejszej liczbie wymiarów niż słownik, którego word2vec uczy się z kontekstu zamiast liczyć słowa.",
    src: "W03, slajdy 90–91", note: "W03-reprezentacja-wektorowa" },

  { id: "W03-23", w: "W03", c: "embedding-cechy", type: "multi",
    q: "Które cechy embeddingów slajdy podają jako najważniejsze?",
    options: ["Zachowują podobieństwo znaczeniowe", "Każdy wymiar odpowiada jednemu konceptowi", "Można wykonywać na nich operacje matematyczne", "Mają długość równą rozmiarowi słownika"],
    correct: [0, 2], explain: "Slajdy 94 i 97: podobieństwo znaczeniowe oraz operacje typu król − mężczyzna + kobieta ≈ królowa.", src: "W03, slajdy 94, 97", note: "W03-reprezentacja-wektorowa" },

  { id: "W03-24", w: "W03", c: "latent-space", type: "single",
    q: "Które zdanie o przestrzeni ukrytej (latent space) NIE jest zgodne ze slajdem?",
    options: ["Nazywana jest też przestrzenią osadzania", "Istnieje osobny wymiar dla konceptu „kot”", "To abstrakcyjna, wielowymiarowa reprezentacja", "Model nie jest uczony konceptów"],
    correct: [1], explain: "Slajd 96: nie ma pojedynczego wymiaru dla konceptu „kot”; wymiary nie muszą odpowiadać konceptom.", src: "W03, slajd 96", note: "W03-reprezentacja-wektorowa" },

  { id: "W03-25", w: "W03", c: "kolejne-podejscia", type: "single",
    q: "Który model generuje embeddingi zależne od kontekstu użycia słowa i opiera się o sieć LSTM?",
    options: ["GloVe", "FastText", "ELMo", "BERT"],
    correct: [2], explain: "ELMo: kontekst + LSTM. FastText: sekwencje znaków. BERT: transformer. GloVe: nienadzorowany, szybszy od word2vec.", src: "W03, slajdy 98–99", note: "W03-reprezentacja-wektorowa" },
]});
