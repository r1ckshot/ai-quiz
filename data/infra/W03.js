(window.QUIZ_DATA ||= []).push({ subject: "infra", questions: [
  // ===== W03 — Podstawowe modele danych w chmurze dla AI =====
  { id: "W03-01", w: "W03", c: "hierarchia-danych", type: "single",
    q: "Gdzie według hierarchii potrzeb danych w AI przechowuje się surowe zbiory danych i wagi modeli?",
    options: ["Vector DB", "SQL/NoSQL", "Object Storage", "Semantic Cache w Redis"],
    correct: [2], explain: "Object Storage trzyma Raw Data i artefakty. SQL/NoSQL to metadane i stan, Vector DB to wiedza semantyczna.", src: "W03, slajd 141, 144", note: "W03-modele-danych" },

  { id: "W03-02", w: "W03", c: "hierarchia-danych", type: "single",
    q: "Jaką warstwę danych w AI reprezentuje baza wektorowa (Vector DB)?",
    options: ["Surowe zbiory (Raw Data)", "Wiedzę semantyczną (Semantic Knowledge)", "Metadane i stan (Metadata/State)", "Checkpointy treningowe"],
    correct: [1], explain: "Vector DB przechowuje wiedzę semantyczną, np. dla systemów RAG.", src: "W03, slajd 141", note: "W03-modele-danych" },

  { id: "W03-03", w: "W03", c: "rdbms-ograniczenia", type: "single",
    q: "Co NIE jest wymienione jako ograniczenie RDBMS w obciążeniach AI?",
    options: ["Kosztowne złączenia JOIN przy dynamicznych strukturach", "Indeks B-Tree działa na danych jednowymiarowych (skalarnych)", "Brak natywnego wyszukiwania k-NN na dużą skalę", "Brak transakcyjności ACID"],
    correct: [3], explain: "RDBMS właśnie zapewnia ACID. Z ACID rezygnuje NoSQL.", src: "W03, slajd 142", note: "W03-modele-danych" },

  { id: "W03-04", w: "W03", c: "nosql", type: "single",
    q: "Która cecha opisuje paradygmat NoSQL według wykładu?",
    options: ["Schema-on-Write i silna spójność", "Rezygnacja z ACID na rzecz Shardingu i Schema-on-Read", "Indeks B-Tree dla danych wielowymiarowych", "Niemutowalność obiektów i adresacja Bucket -> Key"],
    correct: [1], explain: "NoSQL wymienia ACID na skalowalność poziomą i elastyczny schemat przy odczycie. Schema-on-Write to RDBMS.", src: "W03, slajd 142-143", note: "W03-modele-danych" },

  { id: "W03-05", w: "W03", c: "semantic-cache", type: "single",
    q: "System RAG często dostaje to samo pytanie innymi słowami. Co pozwala uniknąć kosztownego odpytywania LLM za każdym razem?",
    options: ["Semantic Cache (wyszukiwanie podobnych pytań w RAM)", "MongoDB z konfiguracjami w BSON", "Object Storage z wersjonowaniem", "Kwantyzacja Produktowa"],
    correct: [0], explain: "Semantic Cache, np. w Redis, szuka podobnych pytań w pamięci i zwraca zapisaną odpowiedź.", src: "W03, slajd 143", note: "W03-modele-danych" },

  { id: "W03-06", w: "W03", c: "object-storage", type: "single",
    q: "Co jest darmową, lokalną alternatywą dla AWS S3 używaną do testów?",
    options: ["Redis", "MinIO", "Neo4j", "pgvector"],
    correct: [1], explain: "MinIO odtwarza Object Storage lokalnie, np. w Docker Compose.", src: "W03, slajd 144", note: "W03-modele-danych" },

  { id: "W03-07", w: "W03", c: "embeddings", type: "single",
    q: "Czym są embeddings według wykładu?",
    options: ["Rzadkimi wektorami binarnymi słów kluczowych", "Gęstymi wektorami liczb zmiennoprzecinkowych reprezentującymi cechy ukryte", "Kodami stratnymi po kwantyzacji PQ", "Indeksami B-Tree dla danych skalarnych"],
    correct: [1], explain: "Embedding to gęsty wektor float z latent features. Podobieństwo znaczeniowe = bliskość geometryczna.", src: "W03, slajd 145", note: "W03-modele-danych" },

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
    options: ["Na świadomej rezygnacji z ok. 1% celności na rzecz ok. 1000-krotnego przyspieszenia", "Na zwiększeniu dokładności kosztem 1000-krotnego spowolnienia", "Na zastąpieniu embeddingów indeksem B-Tree", "Na przeszukiwaniu sekwencyjnym wszystkich wektorów"],
    correct: [0], explain: "ANN wyszukuje przybliżenie. k-NN to dokładny Flat Search o złożoności O(N*D).", src: "W03, slajd 147", note: "W03-modele-danych" },

  { id: "W03-11", w: "W03", c: "ann", type: "single",
    q: "Jaką złożoność ma dokładne wyszukiwanie k-NN (Flat Search)?",
    options: ["O(log N)", "O(N * D)", "O(1)", "O(D)"],
    correct: [1], explain: "Flat Search porównuje zapytanie z każdym z N wektorów o D wymiarach. O(log N) daje HNSW.", src: "W03, slajd 147, 152", note: "W03-modele-danych" },

  { id: "W03-12", w: "W03", c: "ivf", type: "single",
    q: "Który indeks dzieli przestrzeń na klastry (komórki Woronoja) i przeszukuje tylko wybrane komórki?",
    options: ["HNSW", "IVF", "B-Tree", "Semantic Cache"],
    correct: [1], explain: "IVF (Inverted File Index) używa centroidów i parametrów nlist oraz nprobe.", src: "W03, slajd 148", note: "W03-modele-danych" },

  { id: "W03-13", w: "W03", c: "hnsw", type: "single",
    q: "Jak zbudowany jest indeks HNSW?",
    options: ["Płaska lista centroidów z komórkami Woronoja", "Hierarchia warstw: górne z rzadkimi dalekimi skokami, dolna L0 z gęstym grafem wszystkich dokumentów", "Drzewo B-Tree dla danych skalarnych", "Jeden gęsty graf bez warstw"],
    correct: [1], explain: "HNSW przypomina skip-list. Wyszukiwanie zaczyna się od punktu wejścia na górze i schodzi do L0.", src: "W03, slajd 149, 152", note: "W03-modele-danych" },

  { id: "W03-14", w: "W03", c: "hnsw", type: "single",
    q: "Co robi heurystyka doboru sąsiadów w HNSW?",
    options: ["Zawsze łączy węzeł z najbliższymi punktami", "Szuka sąsiadów w różnych kierunkach geometrycznych, by zapobiec izolacji klastrów", "Losuje numer warstwy dla nowego węzła", "Kompresuje wektory do 16 bajtów"],
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

  { id: "W03-18", w: "W03", c: "rrf", type: "single",
    q: "Użytkownik szuka produktu po kodzie „RTX-8900X”, a wyszukiwanie wektorowe zwraca nietrafne wyniki. Co proponuje wykład?",
    options: ["Zwiększyć efSearch", "Wyszukiwanie hybrydowe HNSW + BM25/FTS połączone RRF", "Przejść na Kwantyzację Binarną", "Zastosować Post-filtering"],
    correct: [1], explain: "Wektory łapią intencję, ale gubią ścisłe identyfikatory. Słowa kluczowe BM25/FTS to uzupełniają.", src: "W03, slajd 155", note: "W03-modele-danych" },

  { id: "W03-19", w: "W03", c: "rrf", type: "single",
    q: "Na czym opiera się algorytm Reciprocal Rank Fusion (RRF)?",
    options: ["Na sumowaniu surowych wyników punktowych systemów", "Na pozycjach (rangach) dokumentu w rankingach, bez względu na skalę punktową", "Na odległości kosinusowej między rankingami", "Na liczbie krawędzi w grafie HNSW"],
    correct: [1], explain: "score(d) = suma 1/(k + r_m(d)), gdzie r_m(d) to ranga w systemie m.", src: "W03, slajd 155", note: "W03-modele-danych" },

  { id: "W03-20", w: "W03", c: "pgvector-vs-dedyk", type: "single",
    q: "Kiedy według wykładu warto zostać przy PostgreSQL z pgvector?",
    options: ["Przy skali miliardów rekordów", "Przy zbiorach do ok. 50 mln wektorów i wymogu ACID", "Gdy potrzebna jest pełna separacja compute od storage", "Gdy wymagane jest Single-stage filtering w czasie rzeczywistym"],
    correct: [1], explain: "Pozostałe odpowiedzi to powody migracji do Milvus lub Qdrant.", src: "W03, slajd 156", note: "W03-modele-danych" },

  { id: "W03-21", w: "W03", c: "filtering", type: "single",
    q: "Baza najpierw znajduje 100 najbliższych wektorów, a potem odrzuca te z inną kategorią. Jak się to nazywa i jakie ma ryzyko?",
    options: ["Pre-filtering, wolny skan liniowy", "Post-filtering, pusta lista wyników", "Iterative Scan, dziurawienie grafu", "Pre-filtering, pusta lista wyników"],
    correct: [1], explain: "Post-filtering filtruje po ANN, więc może nie zostać nic. Pre-filtering grozi skanem liniowym.", src: "W03, slajd 160", note: "W03-modele-danych" },

  { id: "W03-22", w: "W03", c: "chunking", type: "single",
    q: "Dlaczego nie osadza się całego 50-stronicowego PDF jako jednego embeddingu?",
    options: ["Bo przekracza limit typu vector(384)", "Bo generuje szum semantyczny i niszczy trafność (Lost in the Middle)", "Bo protokół COPY nie obsługuje dużych plików", "Bo HNSW nie przyjmuje długich wektorów"],
    correct: [1], explain: "Problem Lost in the Middle rozwiązuje chunking, np. 512 tokenów z overlapem 64.", src: "W03, slajd 157", note: "W03-modele-danych" },

  { id: "W03-23", w: "W03", c: "statefulset", type: "single",
    q: "Dlaczego baza wektorowa w Kubernetes powinna być StatefulSet, a nie zwykłym Deploymentem?",
    options: ["Bo potrzebuje skalowania poziomego HPA", "Bo indeksy HNSW muszą przetrwać na wolumenach PVC", "Bo Deployment nie obsługuje FastAPI", "Bo StatefulSet wyłącza OOM Killer"],
    correct: [1], explain: "Baza jest stanowa i skaluje się pionowo (VPA). HPA dotyczy bezstanowego API.", src: "W03, slajd 159", note: "W03-modele-danych" },

  { id: "W03-24", w: "W03", c: "metryki-obs", type: "single",
    q: "Jak mierzy się celność indeksu ANN?",
    options: ["Tail Latency p99", "Recall@k względem brute-force k-NN", "Cache Hit Ratio", "Liczbą krawędzi M"],
    correct: [1], explain: "Recall@k porównuje wyniki przybliżone z prawdą absolutną z dokładnego k-NN.", src: "W03, slajd 161", note: "W03-modele-danych" },

  { id: "W03-25", w: "W03", c: "kwantyzacja", type: "single",
    q: "Która kwantyzacja daje 32-krotną redukcję rozmiaru bazy i przyspieszenie instrukcją POPCNT?",
    options: ["Skalarna SQ8", "Produktowa PQ", "Binarna BQ", "FP32 → FP16"],
    correct: [2], explain: "BQ zapisuje 1 bit na wymiar. SQ8 (FP32 → int8) daje 75% oszczędności RAM.", src: "W03, slajd 162", note: "W03-modele-danych" },
]});
