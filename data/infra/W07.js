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

  { id: "W07-26", w: "W07", c: "medalion", type: "single",
    q: "Co według wykładu przechowuje warstwa Bronze (Raw Zone) w architekturze medalionu?",
    options: ["Surowe pliki JSON i CSV w oryginalnej formie", "Dane po czyszczeniu i normalizacji w Parquet", "Wektory cech zintegrowane z Feature Store", "Logi produkcyjne zbierane do wykrywania dryfu"],
    correct: [0], explain: "Bronze (Landing Zone) to surowe pliki w oryginalnej formie. Parquet to Silver, a wektory cech to Gold.", src: "W07, slajd 167, 169", note: "W07-dane-dla-ai" },

  { id: "W07-27", w: "W07", c: "medalion", type: "single",
    q: "Wektory cech zintegrowane z Feature Store (np. Feast) to w architekturze medalionu warstwa:",
    options: ["Bronze", "Silver", "Gold", "Landing Zone"],
    correct: [2], explain: "Gold to etap Feature Engineering: wektory cech w Feature Store. Silver to dane po ETL w Parquet.", src: "W07, slajd 167", note: "W07-dane-dla-ai" },

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

  { id: "W07-28", w: "W07", c: "cap", type: "single",
    q: "Która właściwość NIE należy do trzech właściwości z twierdzenia CAP?",
    options: ["Spójność (C)", "Dostępność (A)", "Odporność na podział (P)", "Opóźnienie (L)"],
    correct: [3], explain: "CAP to Spójność, Dostępność i Odporność na podział. Opóźnienie (Latency) dodaje dopiero PACELC.", src: "W07, slajd 175", note: "W07-dane-dla-ai" },

  { id: "W07-29", w: "W07", c: "cap", type: "single",
    q: "W klastrze rozproszonym wystąpiła partycja sieciowa. Między czym według CAP musi wybrać architekt?",
    options: ["Między spójnością (CP) a dostępnością (AP)", "Między opóźnieniem (L) a spójnością (C)", "Między replikacją a Consistent Hashing", "Między transakcjami ACID a Eventual Consistency"],
    correct: [0], explain: "Przy partycji (P) wybiera się CP albo AP. Kompromis opóźnienie vs spójność dotyczy stanów stabilnych (PACELC).", src: "W07, slajd 175", note: "W07-dane-dla-ai" },

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

  { id: "W07-30", w: "W07", c: "rdd", type: "single",
    q: "Która cecha NIE dotyczy RDD według wykładu?",
    options: ["Niezmienność (immutability) kolekcji", "Partycjonowanie porcji danych na Executorach", "Odtwarzanie partycji z Lineage Graph", "Kontrola typów w czasie kompilacji"],
    correct: [3], explain: "Kontrolę typów w czasie kompilacji daje Dataset (tylko Java i Scala). RDD jest niezmienne, partycjonowane i odtwarzane z Lineage Graph.", src: "W07, slajd 184, 189", note: "W07-dane-dla-ai" },

  { id: "W07-31", w: "W07", c: "rdd", type: "single",
    q: "Jaką korzyść daje niezmienność (immutability) RDD?",
    options: ["Brak blokad i bezpieczeństwo współbieżności", "Zapis wyników pośrednich na dyskach HDFS", "Kontrolę typów już w czasie kompilacji", "Automatyczne przesuwanie filtrów do źródła danych"],
    correct: [0], explain: "Niezmiennych danych nie trzeba blokować (locks). Dzięki temu RDD jest bezpieczne przy współbieżności.", src: "W07, slajd 184", note: "W07-dane-dla-ai" },

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

  { id: "W07-32", w: "W07", c: "api", type: "single",
    q: "Które API Sparka dodaje kontrolę typów w czasie kompilacji i jest dostępne tylko w Java i Scala?",
    options: ["RDD", "DataFrame", "Dataset", "Structured Streaming"],
    correct: [2], explain: "Dataset (JVM) dodaje kontrolę typów w kompilacji, tylko w Java i Scala. W PySpark używa się DataFrame.", src: "W07, slajd 189", note: "W07-dane-dla-ai" },

  { id: "W07-33", w: "W07", c: "api", type: "single",
    q: "Dlaczego silnik Spark nie może automatycznie optymalizować struktury danych w klasycznym RDD?",
    options: ["Bo obiekty RDD są dla niego czarnymi skrzynkami", "Bo RDD trzyma dane wyłącznie na dyskach HDFS", "Bo RDD nie dzieli danych na partycje Executorów", "Bo transformacje na RDD wykonują się natychmiast"],
    correct: [0], explain: "Spark widzi obiekty RDD jako Opaque objects i nie zna ich struktury. DataFrame ma schemat, więc silnik widzi treść operacji.", src: "W07, slajd 189", note: "W07-dane-dla-ai" },

  { id: "W07-19", w: "W07", c: "catalyst", type: "single",
    q: "Który mechanizm należy do Project Tungsten, a nie do optymalizatora Catalyst?",
    options: ["Logical Plan", "Physical Planning z modelem CBO", "Whole-Stage Code Generation", "Optimized Plan z Predicate Pushdown"],
    correct: [2], explain: "Tungsten to optymalizacja sprzętowa: Off-Heap i Whole-Stage Code Generation. Plany to Catalyst.", src: "W07, slajd 191", note: "W07-dane-dla-ai" },

  { id: "W07-34", w: "W07", c: "catalyst", type: "single",
    q: "Na którym etapie Catalyst wybierana jest najtańsza strategia (np. Broadcast Join) według modelu kosztowego CBO?",
    options: ["Logical Plan", "Optimized Plan", "Physical Planning", "Whole-Stage Code Generation"],
    correct: [2], explain: "Physical Planning wybiera strategię według CBO. Logical Plan rozwiązuje nazwy kolumn, a Optimized Plan stosuje heurystyki.", src: "W07, slajd 191", note: "W07-dane-dla-ai" },

  { id: "W07-35", w: "W07", c: "catalyst", type: "single",
    q: "Co według wykładu daje Off-Heap Memory w Project Tungsten?",
    options: ["Eliminację pauz Garbage Collectora", "Rozwiązanie nazw kolumn z katalogu metadanych", "Przesuwanie filtrów do źródła danych", "Wybór strategii łączenia według CBO"],
    correct: [0], explain: "Off-Heap trzyma pamięć binarną poza stertą Javy, więc nie ma pauz GC. Nazwy kolumn, filtry i CBO to etapy Catalyst.", src: "W07, slajd 191", note: "W07-dane-dla-ai" },

  { id: "W07-20", w: "W07", c: "skew", type: "single",
    q: "W logach dominuje jeden region i jeden rdzeń liczy minuty, a reszta klastra stoi. Jaka technika wymusza sprawiedliwy podział?",
    options: ["Range Partitioning", "Salting (solenie kluczy)", "Column Pruning przy odczycie", "Hash Partitioning"],
    correct: [1], explain: "Salting dodaje losowy wektor do klucza grupowania. To lek na Data Skew i Straggler Tasks.", src: "W07, slajd 192", note: "W07-dane-dla-ai" },

  { id: "W07-36", w: "W07", c: "skew", type: "single",
    q: "Czym według wykładu są Straggler Tasks?",
    options: ["Jeden rdzeń liczy minuty, a reszta klastra stoi", "Zadania czekające na węzły od Cluster Managera", "Zadania odtwarzane z Lineage Graph po awarii węzła", "Zadania łączone w jeden Stage przez pipelining"],
    correct: [0], explain: "Straggler Tasks to skutek Data Skew. Jeden rdzeń przetwarza dane minutami z ryzykiem OOM, a reszta klastra czeka.", src: "W07, slajd 192", note: "W07-dane-dla-ai" },

  { id: "W07-37", w: "W07", c: "skew", type: "single",
    q: "Co jest przyczyną zjawiska Data Skew?",
    options: ["Nierównomierny rozkład kluczy w danych", "Brak jawnego schematu przy odczycie", "Zapis wyników pośrednich na dyski HDFS", "Narzut serializacji Pickle przez Py4J"],
    correct: [0], explain: "Data Skew wynika z nierównomiernego rozkładu kluczy, np. dominacji jednego regionu w logach. Lekiem jest Salting.", src: "W07, slajd 192", note: "W07-dane-dla-ai" },

  { id: "W07-21", w: "W07", c: "lambda-kappa", type: "single",
    q: "Która architektura traktuje wszystko jako strumień, a Apache Kafka jest w niej jedynym źródłem prawdy?",
    options: ["Lambda (Nathan Marz)", "Kappa (Jay Kreps)", "Medalion", "Data Warehouse (Inmon)"],
    correct: [1], explain: "Kappa ma jeden potok cech. Lambda ma dwie warstwy i podwójną bazę kodu.", src: "W07, slajd 197", note: "W07-dane-dla-ai" },

  { id: "W07-38", w: "W07", c: "lambda-kappa", type: "single",
    q: "Jaka jest wada architektury Lambda według wykładu?",
    options: ["Podwójna baza kodu i ryzyko Feature Skew", "Brak precyzyjnego przeliczania historii", "Kafka jako jedyne źródło prawdy", "Brak przetwarzania przyrostowego w locie"],
    correct: [0], explain: "Lambda ma warstwy Batch i Speed, więc dwa kody tych samych cech. To grozi rozbieżnością cech (Feature Skew).", src: "W07, slajd 197", note: "W07-dane-dla-ai" },

  { id: "W07-39", w: "W07", c: "lambda-kappa", type: "single",
    q: "Jak architektura Kappa traktuje przetwarzanie wsadowe (batch)?",
    options: ["Jako skończony przypadek strumienia", "Jako osobną warstwę liczoną w Hadoop", "Jako warstwę Speed dla danych archiwalnych", "Jako etap wykonywany przed zapisem do Kafki"],
    correct: [0], explain: "W Kappa wszystko jest strumieniem, a batch to skończony strumień. Osobne warstwy Batch i Speed ma Lambda.", src: "W07, slajd 197", note: "W07-dane-dla-ai" },

  { id: "W07-22", w: "W07", c: "skew-leak", type: "single",
    q: "Model ma 98% na testach i 62% w realu, bo w treningu użyto informacji niedostępnych w chwili wnioskowania. Jak nazywa się ten problem?",
    options: ["Training-Serving Skew", "Data Leakage", "Data Skew", "Silent Failure"],
    correct: [1], explain: "Data Leakage to użycie informacji z przyszłości. Training-Serving Skew wynika z innego kodu w R&D i produkcji.", src: "W07, slajd 205", note: "W07-dane-dla-ai" },

  { id: "W07-40", w: "W07", c: "skew-leak", type: "single",
    q: "Eksperyment liczy cechy w Pythonie, a produkcja w Javie lub Go. Model w produkcji działa gorzej niż w R&D. Jak nazywa się ten problem?",
    options: ["Training-Serving Skew (rozstrzał)", "Temporal Leakage (wyciek czasowy)", "Data Skew (skośność danych)", "Silent Failure (cicha awaria)"],
    correct: [0], explain: "Training-Serving Skew wynika z odmiennych potoków danych w R&D i produkcji. Data Skew to nierówny rozkład kluczy w partycjach.", src: "W07, slajd 205", note: "W07-dane-dla-ai" },

  { id: "W07-41", w: "W07", c: "skew-leak", type: "single",
    q: "Czym według wykładu jest Temporal Leakage (wyciek czasowy)?",
    options: ["Brak poprawności historycznej (Point-in-Time)", "Rozbieżność logiki cech w Pythonie i w Javie", "Nierównomierny rozkład kluczy między partycjami", "Zmiana jednostek, która po cichu niszczy model"],
    correct: [0], explain: "Temporal Leakage to złamanie Point-in-Time Correctness. Rozbieżność kodu R&D i produkcji to Training-Serving Skew.", src: "W07, slajd 205", note: "W07-dane-dla-ai" },

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

  { id: "W07-42", w: "W07", c: "lineage", type: "single",
    q: "Na produkcji pojawił się drift danych. Inżynier śledzi ścieżkę wstecz aż do źródła błędu. Jaki to rodzaj analizy?",
    options: ["Trace-Forward (analiza wpływu)", "Trace-Back (analiza przyczyn)", "Profilowanie danych", "Point-in-Time Join"],
    correct: [1], explain: "Trace-Back idzie wstecz do źródła błędu. Trace-Forward szuka modeli, które padną po zmianie.", src: "W07, slajd 222", note: "W07-dane-dla-ai" },

  { id: "W07-43", w: "W07", c: "lineage", type: "single",
    q: "Który wymiar śledzenia Data Lineage odpowiada na pytanie, które modele korzystają z tej cechy?",
    options: ["Wstecz (Upstream)", "W przód (Downstream)", "Pomiędzy potokami (Cross-pipeline)", "Snapshot Timestamp"],
    correct: [1], explain: "Downstream patrzy w przód, na modele korzystające z cechy. Upstream pyta, skąd dane pochodzą i kto je zmienił.", src: "W07, slajd 216", note: "W07-dane-dla-ai" },
]});
