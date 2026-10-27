(window.QUIZ_DATA ||= []).push({ subject: "infra", questions: [
  // ===== W03 — Podstawowe modele danych w chmurze dla AI =====
  { id: "W03-01", w: "W03", c: "hierarchia-danych", type: "single",
    q: "Gdzie według hierarchii potrzeb danych w AI przechowuje się surowe zbiory danych i wagi modeli?",
    options: ["Vector DB", "SQL/NoSQL", "Object Storage", "Semantic Cache w Redis"],
    correct: [2], explain: "Object Storage trzyma Raw Data i artefakty. SQL/NoSQL to metadane i stan, Vector DB to wiedza semantyczna.", src: "W03, slajd 141, 144", note: "W03-modele-danych" },

  { id: "W03-02", w: "W03", c: "hierarchia-danych", type: "single",
    q: "Jaką warstwę danych w AI reprezentuje baza wektorowa (Vector DB)?",
    options: ["Surowe zbiory danych (Raw Data)", "Wiedzę semantyczną (Semantic Knowledge)", "Metadane i stan (Metadata/State)", "Checkpointy treningowe (Checkpoints)"],
    correct: [1], explain: "Vector DB przechowuje wiedzę semantyczną, np. dla systemów RAG.", src: "W03, slajd 141", note: "W03-modele-danych" },

  { id: "W03-03", w: "W03", c: "rdbms-ograniczenia", type: "single",
    q: "Co NIE jest wymienione jako ograniczenie RDBMS w obciążeniach AI?",
    options: ["Kosztowne złączenia JOIN przy dynamicznych strukturach", "Indeks B-Tree działa na danych jednowymiarowych (skalarnych)", "Brak natywnego wyszukiwania k-NN na dużą skalę", "Brak transakcyjności ACID"],
    correct: [3], explain: "RDBMS właśnie zapewnia ACID. Z ACID rezygnuje NoSQL.", src: "W03, slajd 142", note: "W03-modele-danych" },

  { id: "W03-26", w: "W03", c: "rdbms-ograniczenia", type: "single",
    q: "Zespół chce wyszukiwać najbliższe embeddingi w klasycznej bazie relacyjnej na dużą skalę. Na które ograniczenie RDBMS trafi według wykładu?",
    options: ["Brak transakcyjności ACID i słaba spójność danych", "Schema-on-Read, który utrudnia kontrolę struktury", "Brak natywnego wyszukiwania k-NN na dużą skalę", "Niemutowalność obiektów i adresacja Bucket -> Key"],
    correct: [2], explain: "Brak natywnego k-NN na dużą skalę to ograniczenie RDBMS ze slajdu. ACID i silną spójność RDBMS właśnie zapewnia.", src: "W03, slajd 142", note: "W03-modele-danych" },

  { id: "W03-27", w: "W03", c: "rdbms-ograniczenia", type: "single",
    q: "Dlaczego indeks B-Tree jest ograniczeniem RDBMS w obciążeniach AI?",
    options: ["Bo wymusza rezygnację z transakcyjności ACID", "Bo działa tylko na niemutowalnych obiektach w bucketach", "Bo przechowuje rekordy wyłącznie w formacie JSON/BSON", "Bo operuje na danych jednowymiarowych (skalarnych)"],
    correct: [3], explain: "B-Tree operuje na danych skalarnych. Embeddingi to wektory w przestrzeni wielowymiarowej R^d.", src: "W03, slajd 142, 145", note: "W03-modele-danych" },

  { id: "W03-04", w: "W03", c: "nosql", type: "single",
    q: "Która cecha opisuje paradygmat NoSQL według wykładu?",
    options: ["Schema-on-Write i silna spójność", "Rezygnacja z ACID na rzecz Shardingu i Schema-on-Read", "Indeks B-Tree dla danych wielowymiarowych", "Niemutowalność obiektów i adresacja Bucket -> Key"],
    correct: [1], explain: "NoSQL wymienia ACID na skalowalność poziomą i elastyczny schemat przy odczycie. Schema-on-Write to RDBMS.", src: "W03, slajd 142-143", note: "W03-modele-danych" },

  { id: "W03-28", w: "W03", c: "nosql", type: "single",
    q: "Które zestawienie RDBMS i NoSQL jest zgodne z wykładem?",
    options: ["RDBMS: Schema-on-Read; NoSQL: Schema-on-Write", "RDBMS: Schema-on-Write; NoSQL: Schema-on-Read", "RDBMS: Sharding; NoSQL: silna spójność ACID", "RDBMS: Bucket -> Key; NoSQL: transakcje ACID"],
    correct: [1], explain: "RDBMS narzuca schemat przy zapisie i daje ACID. NoSQL rezygnuje z ACID na rzecz Shardingu i Schema-on-Read.", src: "W03, slajd 142-143", note: "W03-modele-danych" },

  { id: "W03-29", w: "W03", c: "nosql", type: "single",
    q: "Zespół chce przechowywać niestrukturalne konfiguracje eksperymentów w formacie JSON. Którą bazę NoSQL wskazuje wykład?",
    options: ["Redis", "Neo4j", "MongoDB", "pgvector"],
    correct: [2], explain: "MongoDB trzyma konfiguracje eksperymentów (JSON/BSON). Redis to pamięć konwersacyjna, Neo4j to GraphRAG.", src: "W03, slajd 143", note: "W03-modele-danych" },

  { id: "W03-05", w: "W03", c: "semantic-cache", type: "single",
    q: "System RAG często dostaje to samo pytanie innymi słowami. Co pozwala uniknąć kosztownego odpytywania LLM za każdym razem?",
    options: ["Semantic Cache (podobne pytania w RAM)", "MongoDB z konfiguracjami w BSON", "Object Storage z wersjonowaniem", "Kwantyzacja Produktowa (PQ) wektorów"],
    correct: [0], explain: "Semantic Cache, np. w Redis, szuka podobnych pytań w pamięci i zwraca zapisaną odpowiedź.", src: "W03, slajd 143", note: "W03-modele-danych" },

  { id: "W03-30", w: "W03", c: "semantic-cache", type: "single",
    q: "Na czym polega Semantic Cache według wykładu?",
    options: ["Na łączeniu baz wektorowych z grafami wiedzy w bazie Neo4j", "Na utrzymywaniu otwartych sesji bazy przez bibliotekę asyncpg", "Na kompresji wektorów do jednego bitu na każdy wymiar", "Na wyszukiwaniu podobnych pytań w RAM zamiast odpytywania LLM"],
    correct: [3], explain: "Semantic Cache omija kosztowne odpytywanie LLM, szukając podobnych pytań w RAM. Grafy wiedzy to GraphRAG.", src: "W03, slajd 143", note: "W03-modele-danych" },

  { id: "W03-06", w: "W03", c: "object-storage", type: "single",
    q: "Co jest darmową, lokalną alternatywą dla AWS S3 używaną do testów?",
    options: ["Redis", "MinIO", "Neo4j", "pgvector"],
    correct: [1], explain: "MinIO odtwarza Object Storage lokalnie, np. w Docker Compose.", src: "W03, slajd 144", note: "W03-modele-danych" },

  { id: "W03-31", w: "W03", c: "object-storage", type: "single",
    q: "Który magazyn ma płaską adresację Bucket -> Key, nieograniczoną skalowalność i niemutowalne obiekty?",
    options: ["Relacyjna baza RDBMS", "Object Storage", "Baza wektorowa (Vector DB)", "Magazyn In-Memory Redis"],
    correct: [1], explain: "To cechy Object Storage, np. AWS S3 lub MinIO.", src: "W03, slajd 144", note: "W03-modele-danych" },

  { id: "W03-32", w: "W03", c: "object-storage", type: "single",
    q: "Co NIE jest cechą Object Storage według wykładu?",
    options: ["Schema-on-Write i silna spójność", "Płaska struktura adresowania Bucket -> Key", "Nieograniczona skalowalność", "Niemutowalność obiektów"],
    correct: [0], explain: "Schema-on-Write i silna spójność to cechy RDBMS.", src: "W03, slajd 142, 144", note: "W03-modele-danych" },

  { id: "W03-07", w: "W03", c: "embeddings", type: "single",
    q: "Czym są embeddings według wykładu?",
    options: ["Rzadkimi wektorami binarnymi obecności słów kluczowych", "Gęstymi wektorami liczb zmiennoprzecinkowych (cechy ukryte)", "Krótkimi kodami stratnymi po kwantyzacji produktowej PQ", "Indeksami B-Tree budowanymi dla danych skalarnych"],
    correct: [1], explain: "Embedding to gęsty wektor float z latent features. Podobieństwo znaczeniowe = bliskość geometryczna.", src: "W03, slajd 145", note: "W03-modele-danych" },

  { id: "W03-33", w: "W03", c: "embeddings", type: "single",
    q: "Co według wykładu oznacza bliskość geometryczna embeddingów dwóch tekstów?",
    options: ["Te same słowa kluczowe w BM25", "Pochodzenie z tego samego PDF", "Podobne znaczenie obu tekstów", "Tę samą liczbę wymiarów wektora"],
    correct: [2], explain: "Podobieństwo znaczeniowe = bliskość geometryczna. Słowa kluczowe obsługuje BM25, nie wektory.", src: "W03, slajd 145, 155", note: "W03-modele-danych" },

  { id: "W03-34", w: "W03", c: "embeddings", type: "single",
    q: "Ile wymiarów ma embedding z modelu all-MiniLM-L6-v2 użytego w przykładach z wykładu?",
    options: ["768", "384", "1536", "16"],
    correct: [1], explain: "all-MiniLM-L6-v2 daje 384 wymiary, stąd kolumna vector(384). 768 to BERT, 1536 to OpenAI.", src: "W03, slajd 145, 164", note: "W03-modele-danych" },

  { id: "W03-08", w: "W03", c: "metryki", type: "single",
    q: "Jaką metrykę wykład zaleca dla tekstów (NLP)?",
    options: ["Odległość Euklidesową L2", "Podobieństwo kosinusowe", "Odległość Hamminga", "Recall@k"],
    correct: [1], explain: "Kosinus dla tekstów, L2 dla obrazów i gęstości danych.", src: "W03, slajd 146", note: "W03-modele-danych" },

  { id: "W03-09", w: "W03", c: "metryki", type: "single",
    q: "Który wzór opisuje podobieństwo kosinusowe?",
    options: ["sqrt(suma (u_i - v_i)^2)", "suma A_i B_i", "(A * B) / (|A| |B|)", "suma 1 / (k + r_m(d))"],
    correct: [2], explain: "Kosinus to iloczyn skalarny podzielony przez iloczyn długości wektorów.", src: "W03, slajd 146", note: "W03-modele-danych" },

  { id: "W03-10", w: "W03", c: "ann", type: "single",
    q: "Na czym polega przejście z k-NN na ANN?",
    options: ["Na oddaniu ok. 1% celności za ok. 1000-krotne przyspieszenie", "Na zwiększeniu dokładności kosztem 1000-krotnego spowolnienia", "Na zastąpieniu embeddingów skalarnym indeksem B-Tree", "Na przeszukiwaniu sekwencyjnym wszystkich wektorów"],
    correct: [0], explain: "ANN wyszukuje przybliżenie. k-NN to dokładny Flat Search o złożoności O(N*D).", src: "W03, slajd 147", note: "W03-modele-danych" },

  { id: "W03-11", w: "W03", c: "ann", type: "single",
    q: "Jaką złożoność ma dokładne wyszukiwanie k-NN (Flat Search)?",
    options: ["O(log N)", "O(N * D)", "O(N log N)", "O(D log N)"],
    correct: [1], explain: "Flat Search porównuje zapytanie z każdym z N wektorów o D wymiarach. O(log N) daje HNSW.", src: "W03, slajd 147, 152", note: "W03-modele-danych" },

  { id: "W03-12", w: "W03", c: "ivf", type: "single",
    q: "Który indeks dzieli przestrzeń na klastry (komórki Woronoja) i przeszukuje tylko wybrane komórki?",
    options: ["HNSW", "IVF", "B-Tree", "Semantic Cache"],
    correct: [1], explain: "IVF (Inverted File Index) używa centroidów i parametrów nlist oraz nprobe.", src: "W03, slajd 148", note: "W03-modele-danych" },

  { id: "W03-35", w: "W03", c: "ivf", type: "single",
    q: "Za co według wykładu odpowiada parametr nprobe w indeksie IVF?",
    options: ["Maksymalna liczba krawędzi na węzeł grafu", "Rozmiar listy kandydatów przy wstawianiu węzła", "Stała wygładzająca w fuzji rankingów RRF", "Przeszukanie punktów w wybranych komórkach"],
    correct: [3], explain: "nprobe dotyczy przeszukiwania wybranych komórek, nlist dotyczy centroidów. Krawędzie i lista kandydatów to HNSW.", src: "W03, slajd 148", note: "W03-modele-danych" },

  { id: "W03-36", w: "W03", c: "ivf", type: "single",
    q: "Jaką wadę indeksu IVF wskazuje wykład?",
    options: ["Ryzyko błędów na granicach klastrów", "Ryzyko pustej listy wyników po filtrze", "Duży narzut RAM na krawędzie grafu", "Narzut 30 ms na każde nowe zapytanie"],
    correct: [0], explain: "Wadą IVF są błędy na granicach klastrów. Pusta lista wyników to ryzyko Post-filteringu.", src: "W03, slajd 148", note: "W03-modele-danych" },

  { id: "W03-13", w: "W03", c: "hnsw", type: "single",
    q: "Jak zbudowany jest indeks HNSW?",
    options: ["Płaska lista centroidów z przypisanymi komórkami Woronoja", "Hierarchia warstw: rzadkie dalekie skoki u góry, gęsty graf L0 na dole", "Zbalansowane drzewo B-Tree dla danych skalarnych w kolumnie", "Jeden płaski, gęsty graf wszystkich dokumentów bez warstw"],
    correct: [1], explain: "HNSW przypomina skip-list. Wyszukiwanie zaczyna się od punktu wejścia na górze i schodzi do L0.", src: "W03, slajd 149, 152", note: "W03-modele-danych" },

  { id: "W03-14", w: "W03", c: "hnsw", type: "single",
    q: "Co robi heurystyka doboru sąsiadów w HNSW?",
    options: ["Zawsze łączy nowy węzeł z M geometrycznie najbliższymi punktami", "Dobiera sąsiadów w różnych kierunkach, by nie izolować klastrów", "Losuje numer najwyższej warstwy dla nowego węzła", "Kompresuje wektory sąsiadów do kodów 16-bajtowych"],
    correct: [1], explain: "Heurystyka odrzuca część najbliższych punktów na rzecz zróżnicowania kierunków. Losowanie warstwy to osobny mechanizm.", src: "W03, slajd 151-153", note: "W03-modele-danych" },

  { id: "W03-15", w: "W03", c: "hnsw-param", type: "single",
    q: "Który hiperparametr HNSW można zmieniać w locie per sesja SQL?",
    options: ["M", "efConstruction", "efSearch", "nlist"],
    correct: [2], explain: "efSearch to rozmiar listy kandydatów przy zapytaniu, np. SET SESSION hnsw.ef_search = 128.", src: "W03, slajd 154", note: "W03-modele-danych" },

  { id: "W03-16", w: "W03", c: "hnsw-param", type: "single",
    q: "Co daje zwiększenie parametru M w HNSW?",
    options: ["Niższy Recall i mniej RAM", "Wyższy Recall, ale więcej RAM", "Szybsze budowanie indeksu bez zmian w RAM", "Mniejszą latencję p99 bez kosztów"],
    correct: [1], explain: "M to maks. liczba krawędzi na węzeł. Więcej krawędzi = lepszy Recall i większy indeks.", src: "W03, slajd 152, 154", note: "W03-modele-danych" },

  { id: "W03-17", w: "W03", c: "pgvector-op", type: "single",
    q: "Który operator pgvector oznacza odległość kosinusową?",
    options: ["<->", "<#>", "<=>", "@@"],
    correct: [2], explain: "<-> to Euklidesowa, <#> to negacja iloczynu skalarnego, <=> to kosinusowa.", src: "W03, slajd 150", note: "W03-modele-danych" },

  { id: "W03-37", w: "W03", c: "pgvector-op", type: "single",
    q: "Co oznacza operator <#> w pgvector?",
    options: ["Odległość Euklidesowa (L2)", "Negacja odległości kosinusowej", "Negacja iloczynu skalarnego", "Suma rang z fuzji RRF"],
    correct: [2], explain: "<#> to negacja iloczynu skalarnego. Kosinusowa to <=>, Euklidesowa to <->.", src: "W03, slajd 150", note: "W03-modele-danych" },

  { id: "W03-38", w: "W03", c: "pgvector-op", type: "single",
    q: "Co zwraca zapytanie SELECT * FROM docs ORDER BY emb <=> :query_emb LIMIT 5?",
    options: ["5 dokumentów najbliższych wg odległości Euklidesowej", "5 dokumentów najbliższych wg odległości kosinusowej", "5 dokumentów najdalszych wg odległości kosinusowej", "5 dokumentów z najwyższym wynikiem słów kluczowych BM25"],
    correct: [1], explain: "<=> to odległość kosinusowa. Sortowanie od najmniejszej odległości daje 5 najbliższych dokumentów.", src: "W03, slajd 150, 163", note: "W03-modele-danych" },

  { id: "W03-18", w: "W03", c: "rrf", type: "single",
    q: "Użytkownik szuka produktu po kodzie „RTX-8900X”, a wyszukiwanie wektorowe zwraca nietrafne wyniki. Co proponuje wykład?",
    options: ["Zwiększyć parametr efSearch w indeksie HNSW", "Zastosować wyszukiwanie hybrydowe HNSW + BM25 z RRF", "Przejść na Kwantyzację Binarną embeddingów", "Zastosować Post-filtering wyników po metadanych"],
    correct: [1], explain: "Wektory łapią intencję, ale gubią ścisłe identyfikatory. Słowa kluczowe BM25/FTS to uzupełniają.", src: "W03, slajd 155", note: "W03-modele-danych" },

  { id: "W03-19", w: "W03", c: "rrf", type: "single",
    q: "Na czym opiera się algorytm Reciprocal Rank Fusion (RRF)?",
    options: ["Na sumowaniu surowych wyników punktowych obu systemów", "Na pozycjach dokumentu w rankingach, bez względu na skalę punktów", "Na odległości kosinusowej między wektorami rankingów", "Na liczbie krawędzi węzła dokumentu w grafie HNSW"],
    correct: [1], explain: "score(d) = suma 1/(k + r_m(d)), gdzie r_m(d) to ranga w systemie m.", src: "W03, slajd 155", note: "W03-modele-danych" },

  { id: "W03-20", w: "W03", c: "pgvector-vs-dedyk", type: "single",
    q: "Kiedy według wykładu warto zostać przy PostgreSQL z pgvector?",
    options: ["Przy skali miliardów rekordów", "Przy zbiorach do ok. 50 mln wektorów i wymogu ACID", "Gdy potrzebna jest pełna separacja compute od storage", "Gdy wymagane jest Single-stage filtering w czasie rzeczywistym"],
    correct: [1], explain: "Pozostałe odpowiedzi to powody migracji do Milvus lub Qdrant.", src: "W03, slajd 156", note: "W03-modele-danych" },

  { id: "W03-39", w: "W03", c: "pgvector-vs-dedyk", type: "single",
    q: "Co NIE jest według wykładu powodem migracji do Milvus lub Qdrant?",
    options: ["Skala miliardów rekordów", "Single-stage filtering w czasie rzeczywistym", "Wymóg silnej spójności relacyjnej (ACID)", "Pełna separacja compute od storage"],
    correct: [2], explain: "Wymóg ACID to powód, by zostać przy pgvector. Pozostałe to powody migracji.", src: "W03, slajd 156", note: "W03-modele-danych" },

  { id: "W03-40", w: "W03", c: "pgvector-vs-dedyk", type: "single",
    q: "Jaki wniosek formułuje wykład przy wyborze między pgvector a bazą dedykowaną?",
    options: ["Nie dodawać nowej bazy przed limitem skalowania pionowego", "Trzymać wektory w osobnej bazie, by uniknąć silosów danych", "Migrować do bazy dedykowanej zawsze, gdy wymagane jest ACID", "Zaczynać od Milvus, bo pgvector nie obsługuje indeksu HNSW"],
    correct: [0], explain: "Nowej bazy nie wprowadza się przed przekroczeniem limitów skalowania pionowego. pgvector usuwa silosy danych i ma indeks HNSW.", src: "W03, slajd 150, 156", note: "W03-modele-danych" },

  { id: "W03-21", w: "W03", c: "filtering", type: "single",
    q: "Baza najpierw znajduje 100 najbliższych wektorów, a potem odrzuca te z inną kategorią. Jak się to nazywa i jakie ma ryzyko?",
    options: ["Pre-filtering, wolny skan liniowy", "Post-filtering, pusta lista wyników", "Iterative Scan, dziurawienie grafu", "Pre-filtering, pusta lista wyników"],
    correct: [1], explain: "Post-filtering filtruje po ANN, więc może nie zostać nic. Pre-filtering grozi skanem liniowym.", src: "W03, slajd 160", note: "W03-modele-danych" },

  { id: "W03-41", w: "W03", c: "filtering", type: "single",
    q: "Jakie ryzyko według wykładu niesie Pre-filtering (najpierw filtr SQL, potem wektory)?",
    options: ["Pusta lista wyników zwrócona użytkownikowi", "Dziurawienie grafu HNSW i wolny skan liniowy", "Błędy na granicach klastrów indeksu IVF", "Utrata indeksu HNSW po restarcie poda bez PVC"],
    correct: [1], explain: "Pre-filtering grozi dziurawieniem grafu HNSW i skanem liniowym. Pusta lista to ryzyko Post-filteringu.", src: "W03, slajd 160", note: "W03-modele-danych" },

  { id: "W03-42", w: "W03", c: "filtering", type: "single",
    q: "Jakie rozwiązanie konfliktu filtrowania metadanych z ANN oferuje pgvector?",
    options: ["Post-filtering wyników ANN", "Reciprocal Rank Fusion (RRF)", "Kwantyzacja Binarna (BQ)", "Iterative Scan (ACORN-like)"],
    correct: [3], explain: "Iterative Scan przeszukuje graf dalej, aż zbierze wymaganą liczbę walidowanych wyników.", src: "W03, slajd 160", note: "W03-modele-danych" },

  { id: "W03-22", w: "W03", c: "chunking", type: "single",
    q: "Dlaczego nie osadza się całego 50-stronicowego PDF jako jednego embeddingu?",
    options: ["Bo przekracza limit kolumny typu vector(384)", "Bo szum semantyczny obniża trafność (Lost in the Middle)", "Bo protokół COPY nie obsługuje dużych plików", "Bo HNSW nie przyjmuje zbyt długich wektorów"],
    correct: [1], explain: "Problem Lost in the Middle rozwiązuje chunking, np. 512 tokenów z overlapem 64.", src: "W03, slajd 157", note: "W03-modele-danych" },

  { id: "W03-43", w: "W03", c: "chunking", type: "single",
    q: "Na czym polega strategia chunkingu Fixed-Size z nakładaniem (Overlap)?",
    options: ["AI wykrywa granice tematyczne i według nich tnie tekst", "Cały dokument PDF osadzany jako jeden duży embedding", "Stałe fragmenty, np. 512 tokenów z 64 tokenami zapasu", "Fragmenty ładowane protokołem COPY zamiast INSERT"],
    correct: [2], explain: "Zapas chroni przed przecięciem zdania w połowie. Granice tematyczne wykrywa Semantic Chunking.", src: "W03, slajd 157", note: "W03-modele-danych" },

  { id: "W03-44", w: "W03", c: "chunking", type: "single",
    q: "Która strategia chunkingu wykorzystuje AI do wykrywania granic tematycznych?",
    options: ["Semantic Chunking", "Fixed-Size z Overlap", "Semantic Cache", "Kwantyzacja Produktowa"],
    correct: [0], explain: "Semantic Chunking dzieli tekst według granic tematycznych. Semantic Cache to podobne pytania w RAM.", src: "W03, slajd 157", note: "W03-modele-danych" },

  { id: "W03-23", w: "W03", c: "statefulset", type: "single",
    q: "Dlaczego baza wektorowa w Kubernetes powinna być StatefulSet, a nie zwykłym Deploymentem?",
    options: ["Bo potrzebuje skalowania poziomego HPA", "Bo indeksy HNSW muszą przetrwać na wolumenach PVC", "Bo Deployment nie obsługuje FastAPI", "Bo StatefulSet wyłącza OOM Killer"],
    correct: [1], explain: "Baza jest stanowa i skaluje się pionowo (VPA). HPA dotyczy bezstanowego API.", src: "W03, slajd 159", note: "W03-modele-danych" },

  { id: "W03-45", w: "W03", c: "statefulset", type: "single",
    q: "Jak wykład zestawia skalowanie w Kubernetes dla API i bazy wektorowej (FinOps)?",
    options: ["VPA dla bezstanowego API, HPA dla stanowej bazy", "HPA dla API i bazy, bo obie są bezstanowe", "VPA dla API i bazy, bo obie są stanowe", "HPA dla bezstanowego API, VPA dla stanowej bazy"],
    correct: [3], explain: "Bezstanowe API skaluje się poziomo (HPA), a stanową bazę wektorową pionowo (VPA).", src: "W03, slajd 159", note: "W03-modele-danych" },

  { id: "W03-46", w: "W03", c: "statefulset", type: "single",
    q: "Jak wykład proponuje chronić bazę wektorową w Kubernetes przed OOM Killer?",
    options: ["Skalowanie poziome HPA także dla stanowej bazy", "Rygorystyczne limity RAM z dużym zapasem na grafy", "Zmniejszenie efSearch w każdej sesji SQL", "Przeniesienie indeksów HNSW do magazynu Object Storage"],
    correct: [1], explain: "Slajd zaleca rygorystyczne limity RAM z dużym zapasem na struktury grafowe. HPA dotyczy bezstanowego API.", src: "W03, slajd 159", note: "W03-modele-danych" },

  { id: "W03-24", w: "W03", c: "metryki-obs", type: "single",
    q: "Jak mierzy się celność indeksu ANN?",
    options: ["Metryką Tail Latency p99", "Metryką Recall@k względem k-NN", "Metryką Cache Hit Ratio", "Liczbą krawędzi M w grafie"],
    correct: [1], explain: "Recall@k porównuje wyniki przybliżone z prawdą absolutną z dokładnego k-NN.", src: "W03, slajd 161", note: "W03-modele-danych" },

  { id: "W03-47", w: "W03", c: "metryki-obs", type: "single",
    q: "Dlaczego według wykładu warto mierzyć Tail Latency (p99), a nie tylko średnią?",
    options: ["Bo p99 porównuje wyniki ANN z dokładnym k-NN", "Bo p99 mierzy trafienia w buforach PostgreSQL", "Bo średnia ukrywa czas 1% najwolniejszych zapytań", "Bo p99 uwzględnia narzut 30 ms na nowe połączenie"],
    correct: [2], explain: "Średnia latencja kłamie, a p99 pokazuje czas 1% najwolniejszych zapytań. Porównanie z k-NN to Recall@k.", src: "W03, slajd 161", note: "W03-modele-danych" },

  { id: "W03-48", w: "W03", c: "metryki-obs", type: "single",
    q: "Którą metrykę infrastrukturalną wykład zaleca monitorować w buforach współdzielonych PostgreSQL?",
    options: ["Cache Hit Ratio", "Recall@k", "Tail Latency (p99)", "efSearch"],
    correct: [0], explain: "Cache Hit Ratio to metryka infrastrukturalna buforów PostgreSQL. Recall@k mierzy celność ANN.", src: "W03, slajd 161", note: "W03-modele-danych" },

  { id: "W03-25", w: "W03", c: "kwantyzacja", type: "single",
    q: "Która kwantyzacja daje 32-krotną redukcję rozmiaru bazy i przyspieszenie instrukcją POPCNT?",
    options: ["Skalarna SQ8", "Produktowa PQ", "Binarna BQ", "FP32 → FP16"],
    correct: [2], explain: "BQ zapisuje 1 bit na wymiar. SQ8 (FP32 → int8) daje 75% oszczędności RAM.", src: "W03, slajd 162", note: "W03-modele-danych" },

  { id: "W03-49", w: "W03", c: "kwantyzacja", type: "single",
    q: "Co według wykładu daje Kwantyzacja Skalarna (SQ8)?",
    options: ["1 bit na wymiar i 32-krotna redukcja bazy", "FP32 → int8 i 75% oszczędności RAM", "Kompresja z 1536 do 16 bajtów kodami stratnymi", "Podział przestrzeni na komórki Woronoja"],
    correct: [1], explain: "SQ8 redukuje FP32 do int8 przy minimalnym spadku celności. 1 bit na wymiar to BQ, kody stratne to PQ.", src: "W03, slajd 148, 162", note: "W03-modele-danych" },

  { id: "W03-50", w: "W03", c: "kwantyzacja", type: "single",
    q: "Która technika kompresuje wektory np. z 1536 do 16 bajtów przy użyciu kodów stratnych?",
    options: ["Kwantyzacja Skalarna (SQ8)", "Kwantyzacja Binarna (BQ)", "Iterative Scan (ACORN-like)", "Kwantyzacja Produktowa (PQ)"],
    correct: [3], explain: "Kwantyzacja Produktowa kompresuje wektory kodami stratnymi. SQ8 to FP32 → int8, BQ to 1 bit na wymiar.", src: "W03, slajd 148, 162", note: "W03-modele-danych" },
]});
