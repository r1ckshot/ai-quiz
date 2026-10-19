(window.QUIZ_DATA ||= []).push({ subject: "infra", questions: [
  // ===== W07 — Przechowywanie, przetwarzanie i zarządzanie danymi dla AI =====
  { id: "W07-01", w: "W07", c: "data-centric", type: "single",
    q: "Jak nazywa się paradygmat, w którym model pozostaje stały, a systematycznie poprawia się dane?",
    options: ["Model-Centric AI", "Data-Centric AI", "Schema-on-Read", "Continuous Training"],
    correct: [1], explain: "Data-Centric AI to inżynieria danych przy stałym modelu. Model-Centric optymalizuje sieć przy stałych danych.", src: "W07, slajd 166", note: "W07-dane-dla-ai" },

  { id: "W07-02", w: "W07", c: "data-centric", type: "single",
    q: "Który element NIE należy do wymiarów jakości danych 4V z wykładu?",
    options: ["Volume", "Velocity", "Veracity", "Visibility"],
    correct: [3], explain: "4V to Volume, Velocity, Variety i Veracity. Visibility nie występuje.", src: "W07, slajd 166", note: "W07-dane-dla-ai" },

  { id: "W07-03", w: "W07", c: "medalion", type: "single",
    q: "W architekturze medalionu dane po czyszczeniu, imputacji i normalizacji, zapisane w kolumnowym Parquet, to warstwa:",
    options: ["Bronze", "Silver", "Gold", "Landing Zone"],
    correct: [1], explain: "Silver to dane po ETL w Parquet. Bronze to surowe pliki, Gold to wektory cech.", src: "W07, slajd 167, 169", note: "W07-dane-dla-ai" },

  { id: "W07-04", w: "W07", c: "data-lake", type: "single",
    q: "Co oznacza Schema-on-Read w Data Lake?",
    options: ["Schemat jest wymuszany przy każdym zapisie", "Schemat jest nakładany dopiero podczas odczytu danych", "Dane są normalizowane do 3NF przed zapisem", "Zapisy naruszające strukturę są blokowane"],
    correct: [1], explain: "W Data Lake najpierw zapisuje się surowe dane (ELT), a schemat nakłada się przy odczycie. Wymuszanie przy zapisie to Schema-on-Write hurtowni.", src: "W07, slajd 170, 171", note: "W07-dane-dla-ai" },

  { id: "W07-05", w: "W07", c: "data-lake", type: "single",
    q: "Zespół wrzuca do jeziora danych pliki bez metadanych i bez kontroli wersji. Nikt nie wie, co gdzie leży. Jak nazywa się ta patologia?",
    options: ["Data Skew", "Data Swamp", "Silent Failure", "Feature Skew"],
    correct: [1], explain: "Data Swamp (Bagno Danych) to Data Lake bez metadanych i wersjonowania.", src: "W07, slajd 171", note: "W07-dane-dla-ai" },

  { id: "W07-06", w: "W07", c: "lakehouse", type: "single",
    q: "Która cecha Data Lakehouse pozwala odczytać historyczną wersję danych na podstawie dziennika transakcji?",
    options: ["Schema Enforcement", "Time Travel", "Consistent Hashing", "Column Pruning"],
    correct: [1], explain: "Time Travel czyta starszą wersję z dziennika transakcji. To daje reprodukowalność zbiorów treningowych.", src: "W07, slajd 173", note: "W07-dane-dla-ai" },

  { id: "W07-07", w: "W07", c: "lakehouse", type: "single",
    q: "Który z wymienionych NIE jest otwartym formatem Data Lakehouse według wykładu?",
    options: ["Delta Lake", "Apache Iceberg", "Apache Hudi", "Apache Kafka"],
    correct: [3], explain: "Formaty Lakehouse to Delta Lake, Iceberg i Hudi. Kafka to broker zdarzeń.", src: "W07, slajd 173", note: "W07-dane-dla-ai" },

  { id: "W07-08", w: "W07", c: "cap", type: "single",
    q: "Co twierdzenie PACELC dodaje do twierdzenia CAP?",
    options: ["Kompromis opóźnienie vs spójność w stanach stabilnych", "Gwarancje ACID na magazynie obiektowym", "Minimalizację migracji danych przy skalowaniu", "Podział na warstwy Batch i Speed"],
    correct: [0], explain: "PACELC rozszerza CAP o stan bez partycji: wybór między Latency a Consistency.", src: "W07, slajd 175", note: "W07-dane-dla-ai" },

  { id: "W07-09", w: "W07", c: "mapreduce", type: "single",
    q: "Zasada Data Locality w MapReduce polega na:",
    options: ["Replikacji danych na trzech dyskach HDFS", "Wysyłaniu kodu do węzłów, na których leżą dane", "Trzymaniu danych w RAM zamiast na dysku", "Tasowaniu danych po kluczu przez sieć"],
    correct: [1], explain: "Kod ma kilobajty, dane terabajty. Wysyła się więc kod do danych.", src: "W07, slajd 178", note: "W07-dane-dla-ai" },

  { id: "W07-10", w: "W07", c: "mapreduce", type: "single",
    q: "Która faza MapReduce jest według wykładu najdroższa?",
    options: ["Map (mapowanie)", "Shuffle & Sort", "Reduce (agregacja)", "Odczyt bloków HDFS"],
    correct: [1], explain: "Shuffle & Sort tasuje dane po kluczu przez sieć klastra (M×R połączeń).", src: "W07, slajd 178", note: "W07-dane-dla-ai" },

  { id: "W07-11", w: "W07", c: "spark-topology", type: "single",
    q: "Który komponent klastra Spark inicjalizuje SparkSession, kompiluje kod na DAG i rozdziela zadania?",
    options: ["Executor", "Cluster Manager", "Driver Program", "Worker Node"],
    correct: [2], explain: "Driver to mózg aplikacji. Executory tylko liczą, a Cluster Manager przydziela węzły.", src: "W07, slajd 181", note: "W07-dane-dla-ai" },

  { id: "W07-12", w: "W07", c: "spark-topology", type: "single",
    q: "Do której strefy pamięci Executora trafiają operacje shuffle, sortowania i join?",
    options: ["Storage Memory", "Execution Memory", "User Memory", "Off-Heap Driver Memory"],
    correct: [1], explain: "Execution Memory obsługuje shuffle, sort i join. Storage Memory służy do cache danych i RDD.", src: "W07, slajd 181, 182", note: "W07-dane-dla-ai" },

  { id: "W07-13", w: "W07", c: "rdd", type: "single",
    q: "Jak RDD odtwarza utracone partycje bez replikacji danych na dyskach?",
    options: ["Przez Index Files", "Przez Lineage Graph", "Przez Spill to Disk", "Przez Consistent Hashing"],
    correct: [1], explain: "Lineage Graph to przepis na dane. Spark przelicza z niego zgubioną partycję w RAM.", src: "W07, slajd 184", note: "W07-dane-dla-ai" },

  { id: "W07-14", w: "W07", c: "lazy", type: "single",
    q: "Która operacja Sparka jest akcją, a nie transformacją?",
    options: ["filter", "map", "join", "count"],
    correct: [3], explain: "count wymusza obliczenia i wynik wraca do Drivera. map, filter i join są leniwe.", src: "W07, slajd 185", note: "W07-dane-dla-ai" },

  { id: "W07-15", w: "W07", c: "lazy", type: "single",
    q: "Spark przy odczycie z S3 przesuwa filtr bezpośrednio do źródła danych. Jak nazywa się ta optymalizacja?",
    options: ["Column Pruning", "Predicate Pushdown", "Salting", "Whole-Stage Code Generation"],
    correct: [1], explain: "Predicate Pushdown przesuwa filtry do źródła. Column Pruning odrzuca niepotrzebne kolumny.", src: "W07, slajd 185", note: "W07-dane-dla-ai" },

  { id: "W07-16", w: "W07", c: "dag", type: "single",
    q: "W którym miejscu DAGScheduler dzieli Job na kolejne Stage?",
    options: ["Po każdej transformacji wąskiej", "Na barierze Shuffle (zależność szeroka)", "Na granicy każdej partycji danych", "Po każdym wywołaniu map() lub filter()"],
    correct: [1], explain: "Stage kończy się na barierze wymiany danych przez sieć. Zależności wąskie są łączone w jeden etap.", src: "W07, slajd 187", note: "W07-dane-dla-ai" },

  { id: "W07-17", w: "W07", c: "dag", type: "single",
    q: "Która operacja tworzy zależność szeroką (Wide) i wymaga Shuffle?",
    options: ["map()", "filter()", "groupBy()", "select()"],
    correct: [2], explain: "groupBy() i join() są szerokie. map() i filter() działają lokalnie.", src: "W07, slajd 187", note: "W07-dane-dla-ai" },

  { id: "W07-18", w: "W07", c: "api", type: "single",
    q: "Dlaczego w PySpark DataFrame jest szybszy od klasycznego RDD?",
    options: ["Bo trzyma dane na dysku zamiast w pamięci RAM", "Bo ma schemat i wspólny plan bez narzutu Pickle", "Bo sprawdza typy już w czasie kompilacji", "Bo omija Driver i działa tylko na Executorach"],
    correct: [1], explain: "Schemat pozwala silnikowi optymalizować plan i Python osiąga wydajność Scali. Kontrola typów w kompilacji to Dataset.", src: "W07, slajd 189", note: "W07-dane-dla-ai" },

  { id: "W07-19", w: "W07", c: "catalyst", type: "single",
    q: "Który mechanizm należy do Project Tungsten, a nie do optymalizatora Catalyst?",
    options: ["Logical Plan", "Physical Planning z modelem CBO", "Whole-Stage Code Generation", "Optimized Plan z Predicate Pushdown"],
    correct: [2], explain: "Tungsten to optymalizacja sprzętowa: Off-Heap i Whole-Stage Code Generation. Plany to Catalyst.", src: "W07, slajd 191", note: "W07-dane-dla-ai" },

  { id: "W07-20", w: "W07", c: "skew", type: "single",
    q: "W logach dominuje jeden region i jeden rdzeń liczy minuty, a reszta klastra stoi. Jaka technika wymusza sprawiedliwy podział?",
    options: ["Range Partitioning", "Salting (solenie kluczy)", "Column Pruning przy odczycie", "Hash Partitioning"],
    correct: [1], explain: "Salting dodaje losowy wektor do klucza grupowania. To lek na Data Skew i Straggler Tasks.", src: "W07, slajd 192", note: "W07-dane-dla-ai" },

  { id: "W07-21", w: "W07", c: "lambda-kappa", type: "single",
    q: "Która architektura traktuje wszystko jako strumień, a Apache Kafka jest w niej jedynym źródłem prawdy?",
    options: ["Lambda (Nathan Marz)", "Kappa (Jay Kreps)", "Medalion", "Data Warehouse (Inmon)"],
    correct: [1], explain: "Kappa ma jeden potok cech. Lambda ma dwie warstwy i podwójną bazę kodu.", src: "W07, slajd 197", note: "W07-dane-dla-ai" },

  { id: "W07-22", w: "W07", c: "skew-leak", type: "single",
    q: "Model ma 98% na testach i 62% w realu, bo w treningu użyto informacji niedostępnych w chwili wnioskowania. Jak nazywa się ten problem?",
    options: ["Training-Serving Skew", "Data Leakage", "Data Skew", "Silent Failure"],
    correct: [1], explain: "Data Leakage to użycie informacji z przyszłości. Training-Serving Skew wynika z innego kodu w R&D i produkcji.", src: "W07, slajd 205", note: "W07-dane-dla-ai" },

  { id: "W07-23", w: "W07", c: "feature-store", type: "single",
    q: "Która technologia według wykładu służy jako Online Store z odczytem punktowym poniżej 10 ms?",
    options: ["Redis", "BigQuery", "Snowflake", "S3/Parquet"],
    correct: [0], explain: "Online Store to Redis, DynamoDB, Cassandra. BigQuery, Snowflake i S3 to Offline Store.", src: "W07, slajd 207", note: "W07-dane-dla-ai" },

  { id: "W07-24", w: "W07", c: "feature-store", type: "single",
    q: "Jak nazywa się wersjonowany punkt końcowy Feature Store, który definiuje zestaw cech potrzebny konkretnemu modelowi?",
    options: ["Entity (encja)", "Feature View", "Feature Service", "Registry (rejestr)"],
    correct: [2], explain: "Feature Service to wersjonowany zestaw cech dla modelu. Feature View to grupa cech z jednego źródła.", src: "W07, slajd 209", note: "W07-dane-dla-ai" },

  { id: "W07-25", w: "W07", c: "lineage", type: "single",
    q: "Inżynier pyta: „Co się stanie, jeśli usunę tę kolumnę?” i szuka modeli, które ulegną awarii. Jaki to rodzaj analizy?",
    options: ["Trace-Back (analiza przyczyn)", "Trace-Forward (analiza wpływu)", "Profilowanie danych", "Point-in-Time Join"],
    correct: [1], explain: "Trace-Forward idzie w przód, do modeli zależnych. Trace-Back idzie wstecz do źródła błędu.", src: "W07, slajd 222", note: "W07-dane-dla-ai" },
]});
