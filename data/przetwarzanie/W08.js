(window.QUIZ_DATA ||= []).push({ subject: "przetwarzanie", questions: [
  // ===== W08 — Transformer =====
  { id: "W08-01", w: "W08", c: "transformer-def", type: "single",
    q: "Czym według wykładu jest Transformer?",
    options: ["Konkretnym dużym modelem językowym", "Architekturą, na bazie której buduje się modele", "Odmianą sieci rekurencyjnej LSTM", "Techniką kodowania pozycji tokenów"],
    correct: [1], explain: "Transformer to nie konkretny model, tylko architektura: na jej bazie powstają modele językowe i np. klasyfikatory.", src: "W08, slajd 223", note: "W08-transformer" },

  { id: "W08-02", w: "W08", c: "transformer-def", type: "open",
    q: "Czym jest Transformer i kiedy go zaprezentowano?",
    answer: "Transformer to architektura głębokich sieci neuronowych zaprezentowana w 2017 roku w artykule „Attention is all you need”.",
    src: "W08, slajd 194", note: "W08-transformer" },

  { id: "W08-03", w: "W08", c: "self-vs-multi", type: "single",
    q: "Mechanizm do znajdowania znaczenia i rozpoznawania zależności pomiędzy elementami sekwencji to:",
    options: ["Multi-head attention", "Cross attention", "Self-attention", "Causal mask"],
    correct: [2], explain: "Samouwaga (self-attention) wykrywa zależności w sekwencji; multi-head pozwala zrównoleglić uwagę.", src: "W08, slajd 197", note: "W08-transformer" },

  { id: "W08-04", w: "W08", c: "self-vs-multi", type: "single",
    q: "Do czego według slajdu służy multi-head attention (uwaga wieloczłonowa)?",
    options: ["Do zrównoleglenia przetwarzania uwagi", "Do zakrycia przyszłych tokenów w dekoderze", "Do dodania wejścia warstwy do jej wyjścia", "Do obrotu wektorów Query i Key"],
    correct: [0], explain: "Multi-head attention to mechanizm pozwalający na zrównoleglenie przetwarzania uwagi.", src: "W08, slajd 197", note: "W08-transformer" },

  { id: "W08-05", w: "W08", c: "dekoder-warstwy", type: "multi",
    q: "Które warstwy posiada każdy dekoder w transformerze?",
    options: ["Warstwę samouwagi", "Warstwę uwagi enkoder-dekoder", "Warstwę obrotu wektorów Value", "Warstwę feed-forward"],
    correct: [0, 1, 3], explain: "Dekoder: samouwaga, cross attention, feed-forward. Obrót wektorów to RoPE w obliczeniu uwagi, a Value nie jest obracane.", src: "W08, slajd 201", note: "W08-transformer" },

  { id: "W08-06", w: "W08", c: "dekoder-warstwy", type: "single",
    q: "Która warstwa występuje w dekoderze, ale NIE występuje w enkoderze?",
    options: ["Samouwaga", "Feed-forward", "Kodowanie pozycji", "Cross attention"],
    correct: [3], explain: "Enkoder ma samouwagę i feed-forward; dekoder dodatkowo ma uwagę pomiędzy enkoderem a dekoderem.", src: "W08, slajdy 200–201", note: "W08-transformer" },

  { id: "W08-07", w: "W08", c: "stos", type: "single",
    q: "Które zdanie o stosach enkoderów i dekoderów jest zgodne ze slajdami?",
    options: ["Enkodery w stosie współdzielą jeden zestaw wag", "Oryginał miał 6 enkoderów i 12 dekoderów", "Są identyczne, ale każdy ma własne wagi", "Każdy enkoder ma inną budowę warstw"],
    correct: [2], explain: "Wszystkie enkodery i dekodery są identyczne budową, ale mają własne wagi; oryginał: 6 + 6.", src: "W08, slajdy 199, 201", note: "W08-transformer" },

  { id: "W08-30", w: "W08", c: "stos", type: "single",
    q: "Ile enkoderów i ile dekoderów zakładała oryginalna implementacja transformera?",
    options: ["12 enkoderów i 12 dekoderów", "6 enkoderów i 12 dekoderów", "6 enkoderów i 6 dekoderów", "8 enkoderów i 8 dekoderów"],
    correct: [2], explain: "Oryginalna implementacja zakładała stos 6 enkoderów oraz 6 dekoderów.", src: "W08, slajd 199", note: "W08-transformer" },

  { id: "W08-08", w: "W08", c: "trening-inferencja", type: "single",
    q: "Co dostaje dekoder w pierwszym kroku inferencji zamiast sekwencji wyjściowej?",
    options: ["Wektor kontekstu z tokenem końca", "Pustą sekwencję z tokenem początku", "Sekwencję celu z tokenami padding", "Ostatnie słowo sekwencji wejściowej"],
    correct: [1], explain: "Podczas inferencji nie ma wyjścia, więc dekoder startuje od pustej sekwencji z tokenem początku.", src: "W08, slajd 206", note: "W08-transformer" },

  { id: "W08-09", w: "W08", c: "trening-inferencja", type: "open",
    q: "Czym różni się wejście transformera podczas treningu od wejścia podczas inferencji?",
    answer: "Podczas treningu dostarcza się sekwencję wejściową i wyjściową, a podczas inferencji jest tylko sekwencja wejściowa i wyjście generuje się w pętli.",
    src: "W08, slajdy 202, 205", note: "W08-transformer" },

  { id: "W08-10", w: "W08", c: "kodowanie-pozycji", type: "single",
    q: "Dlaczego transformer potrzebuje kodowania pozycji, a sieć RNN nie?",
    options: ["RNN ma maskę, która ukrywa przyszłe tokeny", "RNN używa RoPE wbudowanego w każdą komórkę", "Transformer nie ma żadnych warstw embeddingu", "RNN przetwarza token po tokenie i zna pozycję"],
    correct: [3], explain: "RNN czyta słowo po słowie, więc zna pozycję; transformer przetwarza sekwencję w całości.", src: "W08, slajdy 198, 207", note: "W08-transformer" },

  { id: "W08-26", w: "W08", c: "kodowanie-pozycji", type: "single",
    q: "W jaki sposób oryginalna praca o Transformerze wprowadziła informację o pozycji tokenu?",
    options: ["Obracając wektory Query i Key o kąt zależny od wymiaru", "Ukrywając przyszłe tokeny maską przed funkcją softmax", "Dodając do embeddingu wektor zależny od pozycji", "Przetwarzając tokeny po kolei, jak sieć rekurencyjna"],
    correct: [2], explain: "Praca zaproponowała dodanie wektora zależnego od pozycji do embeddingu tokena przed pierwszą warstwą (wzór sinus i cosinus).", src: "W08, slajd 207", note: "W08-transformer" },

  { id: "W08-11", w: "W08", c: "sinusoidalne", type: "single",
    q: "Jak zachowują się wymiary niskiego rzędu w kodowaniu sinusoidalnym?",
    options: ["Oscylują wolno, prawie się nie zmieniają", "Szybko oscylują, gwałtownie się zmieniają", "Są stałe dla wszystkich pozycji tokenów", "Są obracane parami o kąt theta"],
    correct: [1], explain: "Częstotliwość maleje z wymiarem: niskie wymiary oscylują szybko, wysokie wolno.", src: "W08, slajd 208", note: "W08-transformer" },

  { id: "W08-12", w: "W08", c: "sinusoidalne", type: "calc",
    q: "Ile wynosi PE(pos, 2i+1) dla pozycji pos = 0 według wzoru kodowania sinusoidalnego?",
    answer: 1, tolerance: 0.001,
    explain: "PE(pos, 2i+1) = cos(pos / 10000^(2i/d_model)); dla pos = 0 to cos(0) = 1.", src: "W08, slajd 208", note: "W08-transformer" },

  { id: "W08-13", w: "W08", c: "rope", type: "single",
    q: "Które wektory obraca kodowanie RoPE?",
    options: ["Query i Key", "Key i Value", "Tylko Value", "Embedding tokenu"],
    correct: [0], explain: "RoPE obraca Query i Key, Value pozostaje niezmienione, a embedding tokenu też się nie zmienia.", src: "W08, slajd 209", note: "W08-transformer" },

  { id: "W08-14", w: "W08", c: "rope", type: "single",
    q: "Które zdanie o RoPE NIE jest zgodne ze slajdem?",
    options: ["Naturalnie koduje pozycje względne", "Obraca wektory parami wymiarów", "Dodaje wektor pozycji do embeddingu", "Działa podczas obliczania uwagi"],
    correct: [2], explain: "Dodanie wektora do embeddingu to oryginalne kodowanie sinusoidalne; w RoPE embedding pozostaje niezmieniony.", src: "W08, slajdy 207, 209", note: "W08-transformer" },

  { id: "W08-15", w: "W08", c: "yarn", type: "single",
    q: "Do czego służy technika YaRN?",
    options: ["Do maskowania przyszłych tokenów", "Do wydłużenia kontekstu ponad trening", "Do łączenia wyników wielu głów", "Do skalowania wyników iloczynu Q i K"],
    correct: [1], explain: "YaRN (Yet another RoPE extensioN) pozwala wydłużyć kontekst ponad to, na czym model był trenowany.", src: "W08, slajd 210", note: "W08-transformer" },

  { id: "W08-29", w: "W08", c: "yarn", type: "single",
    q: "Co oznacza skrót YaRN?",
    options: ["Yet another Recurrent Network", "Yet another Residual Normalization", "Yet another Rotary Neuron", "Yet another RoPE extensioN"],
    correct: [3], explain: "YaRN to Yet another RoPE extensioN, technika wydłużająca kontekst ponad trening.", src: "W08, slajd 210", note: "W08-transformer" },

  { id: "W08-16", w: "W08", c: "qkv", type: "single",
    q: "Która macierz wag uczy się kodować informacje do przekazania dalej?",
    options: ["W_Q", "W_K", "W_O", "W_V"],
    correct: [3], explain: "W_Q tworzy zapytania, W_K reprezentuje cechy, W_V koduje informacje do przekazania dalej.", src: "W08, slajd 213", note: "W08-transformer" },

  { id: "W08-17", w: "W08", c: "qkv", type: "open",
    q: "Jakie trzy role pełni każdy token w jednostce uwagi?",
    answer: "Token jest zapytaniem (Query), kandydatem do znalezienia (Key) i źródłem informacji (Value).",
    src: "W08, slajd 213", note: "W08-transformer" },

  { id: "W08-18", w: "W08", c: "skalowanie", type: "single",
    q: "Dlaczego iloczyn skalarny Query i Key jest skalowany?",
    options: ["Bo może być dowolnie wielką wartością", "Bo musi być równy zero po softmax", "Bo zastępuje kodowanie pozycji", "Bo musi mieć wymiar wektora Value"],
    correct: [0], explain: "Wynik iloczynu może być dowolnie duży, więc dzieli się go przez pierwiastek wymiaru Query i Key.", src: "W08, slajd 214", note: "W08-transformer" },

  { id: "W08-19", w: "W08", c: "skalowanie", type: "calc",
    q: "Wektory Query i Key mają wymiar d_k = 64. Przez jaką liczbę dzieli się QK^T we wzorze uwagi?",
    answer: 8, tolerance: 0.001,
    explain: "Attention = softmax(QK^T / √d_k) V, a √64 = 8.", src: "W08, slajd 215", note: "W08-transformer" },

  { id: "W08-20", w: "W08", c: "multihead", type: "single",
    q: "Jaka jest rola macierzy W_O w Multi-Head Attention?",
    options: ["Tworzy zapytania dla każdej głowy", "Ustawia przyszłe oceny na minus nieskończoność", "Miesza informacje ze wszystkich głów", "Obraca wektory Key o kąt theta"],
    correct: [2], explain: "Po concat wyników głów macierz liniowa W_O „miesza” informacje ze wszystkich jednostek uwagi.", src: "W08, slajd 217", note: "W08-transformer" },

  { id: "W08-21", w: "W08", c: "multihead", type: "single",
    q: "Dlaczego używa się kilku mniejszych jednostek uwagi zamiast jednej większej?",
    options: ["Bo jedna jednostka nie potrafi liczyć softmax", "Bo każda może specjalizować się w typie zależności", "Bo jedna jednostka wymaga kodowania RoPE", "Bo mniejsze jednostki nie mają własnych wag"],
    correct: [1], explain: "Jedna jednostka zapisuje wszystkie relacje w jednej przestrzeni; kilka mniejszych specjalizuje się, np. w zgodności podmiot-orzeczenie.", src: "W08, slajd 218", note: "W08-transformer" },

  { id: "W08-22", w: "W08", c: "causal-mask", type: "single",
    q: "Jaką wartość causal mask wstawia do wybranych ocen uwagi przed softmax?",
    options: ["Wartość zero", "Plus nieskończoność", "Minus nieskończoność", "Pierwiastek z wymiaru d_k"],
    correct: [2], explain: "Maska ustawia oceny na minus nieskończoność, więc po softmax są równe 0 i model ignoruje te pozycje.", src: "W08, slajd 220", note: "W08-transformer" },

  { id: "W08-23", w: "W08", c: "causal-mask", type: "open",
    q: "Po co w dekoderze stosuje się maskowanie (causal mask)?",
    answer: "Aby zachować autoregresywność modelu, czyli zabrać mu możliwość przewidywania przyszłości przez wyzerowanie uwagi do przyszłych pozycji.",
    src: "W08, slajd 220", note: "W08-transformer" },

  { id: "W08-24", w: "W08", c: "residual", type: "single",
    q: "Jaki problem rozwiązują połączenia resztkowe (residual connections)?",
    options: ["Zbyt krótkiego kontekstu modelu", "Zanikających gradientów", "Braku informacji o pozycji", "Przewidywania przyszłych tokenów"],
    correct: [1], explain: "Połączenia resztkowe pomagają uniknąć zanikających gradientów i pozwalają trenować bardzo głębokie modele.", src: "W08, slajd 221", note: "W08-transformer" },

  { id: "W08-27", w: "W08", c: "residual", type: "single",
    q: "Jak nazywa się mechanizm, w którym warstwa dodaje swoje wejście do wyjścia i normalizuje wynik?",
    options: ["Warstwa cross attention", "Maskowanie przyczynowe", "Połączenie resztkowe", "Konkatenacja wyników głów"],
    correct: [2], explain: "Residual connection pozwala warstwie nie zastępować poprzedniej reprezentacji, lecz ją skorygować.", src: "W08, slajd 221", note: "W08-transformer" },

  { id: "W08-25", w: "W08", c: "ffn", type: "single",
    q: "Czym jest sieć FFN w transformerze?",
    options: ["Perceptronem dla każdego tokenu osobno", "Warstwą uwagi między enkoderem a dekoderem", "Macierzą łączącą wyniki wszystkich głów", "Rekurencyjną siecią czytającą sekwencję"],
    correct: [0], explain: "FFN to niewielki wielowarstwowy perceptron stosowany oddzielnie dla każdego tokenu, z ReLU lub GELU.", src: "W08, slajd 222", note: "W08-transformer" },

  { id: "W08-28", w: "W08", c: "ffn", type: "single",
    q: "Które zdanie o sieciach FFN w transformerze NIE jest zgodne ze slajdem?",
    options: ["Są niewielkim wielowarstwowym perceptronem", "Stosuje się je oddzielnie dla każdego tokenu", "Używają funkcji aktywacji ReLU lub GELU", "Zastępują jednostkę uwagi w bloku transformera"],
    correct: [3], explain: "Transformer to nie tylko jednostka uwagi, ale są tam również sieci FFN, więc ich nie zastępują.", src: "W08, slajd 222", note: "W08-transformer" },
]});
