(window.QUIZ_DATA ||= []).push({ subject: "przetwarzanie", questions: [
  // ===== W10 — Wyszukiwanie w bazach wiedzy, sampling i podejście RAG =====
  { id: "W10-01", w: "W10", c: "zadania-llm", type: "multi",
    q: "Które z poniższych slajd wymienia jako główne zadania dla LLM?",
    options: ["Wyszukiwanie informacji (IR)", "Podsumowywanie", "Rozpoznawanie i synteza mowy", "Generowanie tekstu do wzorca"],
    correct: [0, 1, 3], explain: "Slajd 252: IR, podsumowywanie i generowanie tekstu do wzorca (np. kodu). Mowy tu nie ma.", src: "W10, slajd 252", note: "W10-rag" },

  { id: "W10-02", w: "W10", c: "halucynacje", type: "single",
    q: "Jak według wykładu nazywa się błędne informacje generowane przez model, np. nieistniejące źródła?",
    options: ["Cutoff date", "Halucynacje", "Efekt projekcji", "Presence penalty"],
    correct: [1], explain: "Faktyczna nieprawda, nieistniejące źródła i błędna interpretacja to halucynacje.", src: "W10, slajd 253", note: "W10-rag" },

  { id: "W10-26", w: "W10", c: "halucynacje", type: "single",
    q: "Co według wykładu trzeba robić, gdy model ma odpowiadać dokładnie na pytania, aby błędne informacje były mało prawdopodobne?",
    options: ["Zwiększać liczbę wymiarów embeddingu", "Wydłużać fragmenty tekstu w indeksie", "Sterować generowaniem tokenów", "Dodawać więcej metadanych do dokumentów"],
    correct: [2], explain: "Slajd 253: dokładne odpowiedzi wymagają sterowania generowaniem tokenów, czyli samplingu.", src: "W10, slajd 253", note: "W10-rag" },

  { id: "W10-27", w: "W10", c: "halucynacje", type: "multi",
    q: "Które z poniższych slajd podaje jako przykłady błędnych informacji generowanych przez model?",
    options: ["Faktyczna nieprawda", "Nieistniejące źródła", "Zbyt wolne generowanie tokenów", "Błędna interpretacja"],
    correct: [0, 1, 3], explain: "Slajd 253 wymienia faktyczną nieprawdę, nieistniejące źródła i błędną interpretację.", src: "W10, slajd 253", note: "W10-rag" },

  { id: "W10-03", w: "W10", c: "sampling-def", type: "single",
    q: "Czym jest sampling w generowaniu tekstu przez LLM?",
    options: ["Podziałem dokumentu na fragmenty do wyszukiwania", "Sterowaniem wyborem następnego tokenu spośród kandydatów", "Zamianą korpusu tekstu na wektory embeddingów", "Dostrajaniem modelu na danych własnościowych"],
    correct: [1], explain: "Model zwraca rozkład nad słownikiem tokenów, a parametry samplingu decydują o wyborze konkretnego tokenu.", src: "W10, slajd 254", note: "W10-rag" },

  { id: "W10-28", w: "W10", c: "sampling-def", type: "single",
    q: "Co model zwraca w każdym kroku generowania, zanim zadziałają parametry wyboru tokenu?",
    options: ["Jeden gotowy token do dopisania", "Rozkład prawdopodobieństwa tokenów", "Wektor embeddingu całego zapytania", "Listę podobnych dokumentów z korpusu"],
    correct: [1], explain: "Slajd 254: model zwraca rozkład prawdopodobieństwa nad słownikiem tokenów, a parametry decydują o wyborze.", src: "W10, slajd 254", note: "W10-rag" },

  { id: "W10-29", w: "W10", c: "sampling-def", type: "multi",
    q: "Które z poniższych są parametrami sterującymi wyborem następnego tokenu według slajdu?",
    options: ["Temperatura", "Min-p", "Chunking", "Indeks BM25"],
    correct: [0, 1], explain: "Slajd 254 wymienia: temperaturę, top-k, top-p, min-p oraz repetition i presence penalty.", src: "W10, slajd 254", note: "W10-rag" },

  { id: "W10-04", w: "W10", c: "temperatura", type: "single",
    q: "Co się dzieje z rozkładem prawdopodobieństwa przy wysokiej temperaturze?",
    options: ["Najlepsze tokeny stają się bardziej dominujące", "Rozkład staje się bardziej płaski", "Model zawsze wybiera najlepszy token", "Odrzucane są tokeny poniżej progu"],
    correct: [1], explain: "Wysoka temperatura spłaszcza rozkład; niska wzmacnia dominację najbardziej prawdopodobnych tokenów.", src: "W10, slajd 255", note: "W10-rag" },

  { id: "W10-05", w: "W10", c: "temperatura", type: "single",
    q: "Budujesz system generujący kod i wywołujący narzędzia (tool calling). Jaką temperaturę zaleca wykład?",
    options: ["Wysoką, bo zwiększa kreatywność", "Wysoką, bo spłaszcza rozkład", "Niską, bo zwiększa losowość", "Niską, bo odpowiedzi są przewidywalne"],
    correct: [3], explain: "Niska temperatura daje odpowiedzi bardziej deterministyczne; to istotne w IR, kodzie i tool calling.", src: "W10, slajd 256", note: "W10-rag" },

  { id: "W10-06", w: "W10", c: "temperatura", type: "open",
    q: "Co oznacza temperatura równa 0?",
    answer: "Model zawsze wybiera token o największym prawdopodobieństwie.",
    src: "W10, slajd 255", note: "W10-rag" },

  { id: "W10-07", w: "W10", c: "top-k", type: "single",
    q: "Który parametr samplingu ogranicza wybór do stałej liczby najbardziej prawdopodobnych tokenów?",
    options: ["Top-p", "Min-p", "Top-k", "Temperatura"],
    correct: [2], explain: "Top-k zostawia k najlepszych tokenów; top-p i min-p dają zmienną liczbę tokenów.", src: "W10, slajd 257", note: "W10-rag" },

  { id: "W10-08", w: "W10", c: "top-k", type: "calc",
    q: "Rozkład: cat 0.40, dog 0.25, bird 0.20, lion 0.08, elephant 0.05, zebra 0.02. Jakie jest P(cat) po top-k = 3 i renormalizacji? (2 miejsca po przecinku)",
    answer: 0.47, tolerance: 0.01,
    explain: "Zostają cat, dog, bird o sumie 0.85; 0.40 / 0.85 ≈ 0.47.", src: "W10, slajd 257", note: "W10-rag" },

  { id: "W10-09", w: "W10", c: "top-p", type: "single",
    q: "Jak inaczej nazywa się top-p sampling?",
    options: ["Greedy sampling", "Nucleus sampling", "Beam sampling", "Min-p sampling"],
    correct: [1], explain: "Slajd 258: top-p to tzw. nucleus sampling.", src: "W10, slajd 258", note: "W10-rag" },

  { id: "W10-10", w: "W10", c: "top-p", type: "calc",
    q: "Rozkład: cat 0.40, dog 0.25, bird 0.20, lion 0.08, elephant 0.05, zebra 0.02. Ile tokenów zostanie wybranych przy top-p = 0.9?",
    answer: 4, tolerance: 0,
    explain: "Sumy: 0.40, 0.65, 0.85, 0.93. Pierwsza suma przekraczająca 0.9 to 0.93, czyli 4 tokeny.", src: "W10, slajd 258", note: "W10-rag" },

  { id: "W10-11", w: "W10", c: "min-p", type: "calc",
    q: "Najlepszy token ma p = 0,4, a min_p = 0,1. Jaki jest próg, powyżej którego tokeny zostaną zachowane?",
    answer: 0.04, tolerance: 0.001,
    explain: "Min-p liczy próg względem najlepszego tokenu: 0,4 × 0,1 = 0,04.", src: "W10, slajd 259", note: "W10-rag" },

  { id: "W10-30", w: "W10", c: "min-p", type: "calc",
    q: "Najlepszy token ma p = 0,6, a min_p = 0,1. Jaki jest próg, powyżej którego tokeny zostaną zachowane?",
    answer: 0.06, tolerance: 0.001,
    explain: "Próg liczy się względem najlepszego tokenu: 0,6 × 0,1 = 0,06.", src: "W10, slajd 259", note: "W10-rag" },

  { id: "W10-31", w: "W10", c: "min-p", type: "single",
    q: "Który parametr odrzuca tokeny o prawdopodobieństwie zbyt małym w porównaniu do najlepszego tokenu?",
    options: ["Top-k", "Top-p", "Min-p", "Repetition penalty"],
    correct: [2], explain: "Min-p porównuje prawdopodobieństwo każdego tokenu z najlepszym tokenem.", src: "W10, slajd 259", note: "W10-rag" },

  { id: "W10-12", w: "W10", c: "penalty", type: "single",
    q: "Który parametr nakłada stałą karę za pojawienie się tokenu, niezależnie od liczby jego wystąpień?",
    options: ["Repetition penalty", "Presence penalty", "Nucleus sampling", "Temperatura"],
    correct: [1], explain: "Presence penalty to stała kara; repetition penalty zmniejsza logity już wygenerowanych tokenów.", src: "W10, slajd 261", note: "W10-rag" },

  { id: "W10-32", w: "W10", c: "penalty", type: "single",
    q: "Który parametr po wygenerowaniu pewnych tokenów zmniejsza ich logity?",
    options: ["Nucleus sampling", "Presence penalty", "Repetition penalty", "Min-p sampling"],
    correct: [2], explain: "Slajd 260: repetition penalty obniża logity już użytych tokenów, więc model rzadziej je powtarza.", src: "W10, slajd 260", note: "W10-rag" },

  { id: "W10-13", w: "W10", c: "rag-problemy", type: "multi",
    q: "Jakie problemy baz wiedzy modeli LLM uzasadniają podejście RAG?",
    options: ["Wiedza kończy się na cutoff date", "Brak danych własnościowych firmy", "Zbyt mała liczba parametrów samplingu", "Brak wiedzy o najświeższych wydarzeniach"],
    correct: [0, 1, 3], explain: "Slajd 264: model może być nieaktualny (cutoff date) i nie znać danych własnościowych.", src: "W10, slajd 264", note: "W10-rag" },

  { id: "W10-33", w: "W10", c: "rag-problemy", type: "single",
    q: "Który z poniższych problemów NIE jest wskazany na slajdzie jako problem baz wiedzy modeli?",
    options: ["Nieaktualność danych uczących", "Brak wiedzy o danych własnościowych", "Zbyt wolne działanie indeksu BM25", "Brak wiedzy o świeżych wydarzeniach"],
    correct: [2], explain: "Slajd 264 mówi o nieaktualności (cutoff date) i braku danych własnościowych, nie o szybkości indeksu.", src: "W10, slajd 264", note: "W10-rag" },

  { id: "W10-34", w: "W10", c: "rag-problemy", type: "single",
    q: "Chatbot nie zna wydarzeń z zeszłego tygodnia. Co jest przyczyną według wykładu?",
    options: ["Zbyt niska temperatura modelu", "Cutoff date w danych uczących", "Zbyt mały parametr top-k", "Brak metadanych we fragmentach"],
    correct: [1], explain: "Model był uczony na danych do pewnego momentu, więc nie wie nic o świeższych wydarzeniach.", src: "W10, slajd 264", note: "W10-rag" },

  { id: "W10-14", w: "W10", c: "rag-def", type: "open",
    q: "Czym jest RAG?",
    answer: "RAG (Retrieval-Augmented Generation) to generacja odpowiedzi wzbogacona o wyszukiwanie informacji ze źródeł.",
    src: "W10, slajd 265", note: "W10-rag" },

  { id: "W10-15", w: "W10", c: "rag-def", type: "single",
    q: "Która kolejność kroków odpowiada schematowi RAG ze slajdu?",
    options: ["Generate → Retrieve → Augment", "Augment → Retrieve → Generate", "Retrieve → Augment → Generate", "Retrieve → Generate → Augment"],
    correct: [2], explain: "Najpierw wyszukanie danych, potem wzbogacenie promptu, na końcu LLM generuje odpowiedź.", src: "W10, slajd 266", note: "W10-rag" },

  { id: "W10-16", w: "W10", c: "chunking", type: "multi",
    q: "Które strategie podziału na fragmenty (chunking) podaje slajd?",
    options: ["Stała liczba tokenów", "Według nagłówków", "Według daty modyfikacji", "Semantyczne"],
    correct: [0, 1, 3], explain: "Slajd 269: stała liczba tokenów, akapity, nagłówki, podział semantyczny. Data modyfikacji to metadana.", src: "W10, slajd 269", note: "W10-rag" },

  { id: "W10-17", w: "W10", c: "chunking", type: "single",
    q: "Dlaczego według slajdu fragmenty (chunki) nie mogą być zbyt duże?",
    options: ["Bo BM25 nie liczy wtedy IDF", "Bo embedding staje się mniej precyzyjny", "Bo metadane przestają działać", "Bo trzeba wtedy stosować OCR"],
    correct: [1], explain: "Slajd 269: zbyt duży fragment daje mniej precyzyjny embedding.", src: "W10, slajd 269", note: "W10-rag" },

  { id: "W10-18", w: "W10", c: "metadane", type: "single",
    q: "Do czego według slajdu służą metadane fragmentów tekstu?",
    options: ["Do filtrowania wyników i budowy odwołań", "Do obliczania wag w softmaxie z temperaturą", "Do zastąpienia indeksu wektorowego", "Do podziału dokumentu na akapity"],
    correct: [0], explain: "Metadane (autor, data, źródło, tagi…) pozwalają filtrować wyniki wyszukiwania i budować do nich odwołania.", src: "W10, slajd 270", note: "W10-rag" },

  { id: "W10-35", w: "W10", c: "metadane", type: "multi",
    q: "Które z poniższych slajd podaje jako przykłady metadanych fragmentu tekstu?",
    options: ["Identyfikator dokumentu", "Numer strony", "Wartość IDF słowa", "Tagi"],
    correct: [0, 1, 3], explain: "Slajd 270: identyfikator, tytuł, autor, daty, źródło, numer strony, język, tagi.", src: "W10, slajd 270", note: "W10-rag" },

  { id: "W10-36", w: "W10", c: "metadane", type: "single",
    q: "System RAG ma pokazać użytkownikowi, z której strony dokumentu pochodzi odpowiedź. Co powinien mieć każdy fragment?",
    options: ["Wyższą temperaturę generowania", "Metadane ze źródłem i numerem strony", "Embedding o mniejszej liczbie wymiarów", "Nakładanie się z sąsiednim fragmentem"],
    correct: [1], explain: "Metadane pozwalają budować odwołania do wyników wyszukiwania.", src: "W10, slajd 270", note: "W10-rag" },

  { id: "W10-19", w: "W10", c: "bm25", type: "single",
    q: "Które zdanie o BM25 NIE jest zgodne z wykładem?",
    options: ["To klasyczny algorytm rankingowy", "Analizuje znaczenie słów w zapytaniu", "Bazuje na TF i IDF", "Opiera się na statystyce"],
    correct: [1], explain: "BM25 nie analizuje znaczenia słów; opiera się na statystyce TF i IDF.", src: "W10, slajd 274", note: "W10-rag" },

  { id: "W10-20", w: "W10", c: "bm25", type: "single",
    q: "Co oznacza parametr b we wzorze BM25?",
    options: ["Rzadkość słowa", "Wpływ częstotliwości", "Średnią długość dokumentów", "Siłę normalizacji długości"],
    correct: [3], explain: "b to siła normalizacji długości; k1 to wpływ częstotliwości, IDF to rzadkość słowa.", src: "W10, slajd 275", note: "W10-rag" },

  { id: "W10-21", w: "W10", c: "bm25", type: "calc",
    q: "BM25 dla jednego słowa zapytania: IDF = 1, TF = 2, k1 = 1, |D| = avgdl. Ile wynosi score(D, Q)? (2 miejsca po przecinku)",
    answer: 1.33, tolerance: 0.01,
    explain: "Przy |D| = avgdl nawias równa się 1: 1 × 2 × (1 + 1) / (2 + 1) = 4/3 ≈ 1.33.", src: "W10, slajd 275", note: "W10-rag" },

  { id: "W10-22", w: "W10", c: "hybryda", type: "open",
    q: "Na czym polega podejście hybrydowe w wyszukiwaniu?",
    answer: "Równolegle szuka się embeddingami dokumentów podobnych semantycznie i BM25 dokumentów z dokładnie tymi samymi słowami.",
    src: "W10, slajd 276", note: "W10-rag" },

  { id: "W10-37", w: "W10", c: "hybryda", type: "single",
    q: "Które dwa mechanizmy wyszukiwania działają równolegle w podejściu hybrydowym?",
    options: ["Top-k i top-p", "Embeddingi i BM25", "OCR i stemming", "MCP i OpenAPI"],
    correct: [1], explain: "Slajd 276: embeddingi znajdują dokumenty podobne semantycznie, BM25 te z tymi samymi słowami.", src: "W10, slajd 276", note: "W10-rag" },

  { id: "W10-38", w: "W10", c: "hybryda", type: "single",
    q: "W systemie hybrydowym trzeba znaleźć dokument zawierający dokładnie ten sam kod produktu co zapytanie. Który komponent to robi?",
    options: ["Podobieństwo cosinusowe embeddingów", "BM25", "Presence penalty", "Chunking semantyczny"],
    correct: [1], explain: "BM25 odnajduje dokumenty zawierające dokładnie te same słowa.", src: "W10, slajd 276", note: "W10-rag" },

  { id: "W10-23", w: "W10", c: "mcp", type: "single",
    q: "Na czym wewnętrznie opiera się Model Context Protocol (MCP)?",
    options: ["Na OpenAPI", "Na JSON-RPC", "Na indeksie BM25", "Na OCR"],
    correct: [1], explain: "MCP opiera się na JSON-RPC; do OpenAPI jest tylko nieco podobny w zastosowaniach.", src: "W10, slajd 278", note: "W10-rag" },

  { id: "W10-24", w: "W10", c: "mcp", type: "single",
    q: "LLM sam wybiera, z którego źródła danych skorzystać, na podstawie kontekstu zapytania. Jak nazywa się takie podejście?",
    options: ["Wyszukiwanie leksykalne", "Nucleus sampling", "Agentowy RAG", "Chunking semantyczny"],
    correct: [2], explain: "LLM jako orkiestrator dobierający źródło danych to przejście do agentowego RAG (agentic RAG).", src: "W10, slajd 277", note: "W10-rag" },

  { id: "W10-25", w: "W10", c: "niewiedza", type: "open",
    q: "Na czym polega problem niewiedzy modeli LLM w systemach RAG?",
    answer: "Model musi być bardzo dobrze dostrojony, by odpowiadać „nie wiem” i cytować bazę wiedzy, inaczej halucynuje nawet z RAG.",
    src: "W10, slajd 279", note: "W10-rag" },

  { id: "W10-39", w: "W10", c: "niewiedza", type: "single",
    q: "Co jest potrzebne, aby system RAG potrafił odpowiadać „nie wiem” i cytować bazę wiedzy?",
    options: ["Wyższa temperatura generowania", "Bardzo dobre dostrojenie modelu LLM", "Większy top-k w wyszukiwaniu", "Częstsza zmiana modelu embeddingowego"],
    correct: [1], explain: "Slajd 279: bez dobrego dostrojenia model potrafi halucynować nawet na podstawie RAG.", src: "W10, slajd 279", note: "W10-rag" },
]});
