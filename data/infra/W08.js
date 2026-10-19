(window.QUIZ_DATA ||= []).push({ subject: "infra", questions: [
  // ===== W08 — Integracja systemów AI z architekturą chmurową: wzorce serwowania modeli =====
  { id: "W08-01", w: "W08", c: "sla-metryki", type: "single",
    q: "Która metryka Serving SLA oznacza liczbę zapytań na sekundę (QPS) obsługiwanych przez system?",
    options: ["Latency", "Throughput", "Cost Efficiency", "Time to First Token"],
    correct: [1], explain: "Throughput to przepustowość w QPS. Latency to czas do uzyskania predykcji.", src: "W08, slajd 314", note: "W08-serwowanie-modeli" },

  { id: "W08-02", w: "W08", c: "sla-metryki", type: "single",
    q: "Jak na wykładzie zdefiniowano Cost Efficiency w serwowaniu modeli?",
    options: ["Koszt jednej godziny pracy GPU", "Koszt infrastruktury w przeliczeniu na 1000 inferencji", "Liczba zapytań na sekundę na dolara", "Koszt treningu jednej epoki"],
    correct: [1], explain: "Cost Efficiency to koszt infrastruktury na 1000 inferencji.", src: "W08, slajd 314", note: "W08-serwowanie-modeli" },

  { id: "W08-03", w: "W08", c: "sla-metryki", type: "single",
    q: "Jaką miarą opisuje się Latency dla modeli LLM?",
    options: ["QPS", "Time to First Token", "CTR", "Correlation ID"],
    correct: [1], explain: "Dla LLM opóźnienie to czas do pierwszego tokenu (Time to First Token).", src: "W08, slajd 314", note: "W08-serwowanie-modeli" },

  { id: "W08-04", w: "W08", c: "real-time", type: "single",
    q: "Jakie typowe SLA podano na wykładzie dla wzorca Real-Time Inference?",
    options: ["< 10 ms", "< 200 ms", "< 2 s", "Raz na dobę"],
    correct: [1], explain: "Real-Time wymaga niskiego SLA, zazwyczaj poniżej 200 ms. Poniżej 10 ms to latencja Online Store.", src: "W08, slajd 315", note: "W08-serwowanie-modeli" },

  { id: "W08-05", w: "W08", c: "real-time", type: "single",
    q: "Co NIE jest wymienione jako Model Serving Engine we wzorcu Real-Time?",
    options: ["NVIDIA Triton", "TorchServe", "vLLM", "Apache Spark"],
    correct: [3], explain: "Spark to silnik rozproszony dla Batch Scoring. Triton, TorchServe i vLLM to silniki serwowania.", src: "W08, slajd 315, 318", note: "W08-serwowanie-modeli" },

  { id: "W08-06", w: "W08", c: "singleton", type: "single",
    q: "Na czym polega wzorzec Singleton w produkcyjnym serwerze FastAPI z wykładu?",
    options: ["Model ładowany jest przy każdym zapytaniu", "Model ładowany jest raz podczas startu kontenera", "Każdy klient dostaje własną replikę modelu", "Model działa tylko na jednym rdzeniu CPU"],
    correct: [1], explain: "Singleton ładuje model raz przy starcie kontenera. Zapytania korzystają z tej samej instancji.", src: "W08, slajd 316", note: "W08-serwowanie-modeli" },

  { id: "W08-07", w: "W08", c: "batch", type: "single",
    q: "Bank chce raz w nocy przeliczyć scoring kredytowy dla całego portfela klientów. Który wzorzec serwowania pasuje najlepiej?",
    options: ["Real-Time Inference", "Batch Scoring", "Streaming Inference", "Multi-Armed Bandits"],
    correct: [1], explain: "Masowe przetwarzanie offline to Batch Scoring. Scoring portfela banku to przykład z wykładu.", src: "W08, slajd 318", note: "W08-serwowanie-modeli" },

  { id: "W08-08", w: "W08", c: "batch", type: "single",
    q: "Jaki jest cel wzorca Batch Scoring według wykładu?",
    options: ["Minimalne opóźnienie pojedynczej odpowiedzi", "Maksymalizacja przepustowości i optymalizacja kosztów FinOps", "Dynamiczny podział ruchu między modele", "Buforowanie skoków danych w brokerze"],
    correct: [1], explain: "Batch celuje w przepustowość i koszty. Niskie opóźnienie to cel Real-Time.", src: "W08, slajd 318", note: "W08-serwowanie-modeli" },

  { id: "W08-09", w: "W08", c: "streaming", type: "single",
    q: "Który wzorzec jest hybrydą Real-time i Batch, przetwarzającą dane w locie przez brokera komunikatów?",
    options: ["Batch Scoring", "Streaming Inference", "A/B Testing", "Feature Store"],
    correct: [1], explain: "Streaming Inference to hybryda. Fundamentem są magistrale zdarzeń, np. Kafka.", src: "W08, slajd 319", note: "W08-serwowanie-modeli" },

  { id: "W08-10", w: "W08", c: "streaming", type: "single",
    q: "Jak nazywa się zaleta architektury strumieniowej, w której broker bezpiecznie buforuje nagłe skoki danych?",
    options: ["Backpressure Handling", "Time-Slicing", "Training-Serving Skew", "Scale-to-Zero"],
    correct: [0], explain: "Backpressure Handling to buforowanie skoków przez brokera. Fault Tolerance to gwarancja dostarczenia.", src: "W08, slajd 319", note: "W08-serwowanie-modeli" },

  { id: "W08-11", w: "W08", c: "streaming", type: "single",
    q: "Która kolejność przepływu danych w Streaming Inference jest zgodna z wykładem?",
    options: ["Producer → Kafka Topic → Stream Processor (Model) → Output Topic", "Kafka Topic → Producer → Output Topic → Model", "Model → Producer → Kafka Topic → Output Topic", "Producer → Model → Kafka Topic → Airflow"],
    correct: [0], explain: "Zdarzenie od producenta trafia do tematu Kafki, model je przetwarza i zapisuje wynik do Output Topic.", src: "W08, slajd 319", note: "W08-serwowanie-modeli" },

  { id: "W08-12", w: "W08", c: "eda", type: "single",
    q: "Do czego służy Correlation ID w zdarzeniu ML w architekturze EDA?",
    options: ["Do wersjonowania wag modelu", "Do śledzenia przepływu przez wiele mikrousług", "Do szyfrowania wektora wejściowego", "Do podziału ruchu między Champion i Challenger"],
    correct: [1], explain: "Correlation ID to klucz do śledzenia przepływu przez mikrousługi. Wersję modelu niesie pole version w metadanych.", src: "W08, slajd 320", note: "W08-serwowanie-modeli" },

  { id: "W08-13", w: "W08", c: "eda", type: "single",
    q: "Co NIE jest zaletą EDA dla MLOps według wykładu?",
    options: ["Błąd serwera predykcyjnego nie zatrzymuje frontendu", "Nowy konsument (np. monitoring dryftu) bez modyfikacji producenta", "Łatwiejsze debugowanie bez potrzeby Tracingu", "Luźne relacje oparte na Pub/Sub"],
    correct: [2], explain: "Debugowanie w EDA jest trudniejsze i wymaga śledzenia rozproszonego. To wyzwanie, nie zaleta.", src: "W08, slajd 320", note: "W08-serwowanie-modeli" },

  { id: "W08-14", w: "W08", c: "ab-mab", type: "single",
    q: "Który wzorzec dynamicznie przekierowuje ruch w czasie rzeczywistym, np. algorytmem Thompson Sampling?",
    options: ["A/B Testing", "Multi-Armed Bandits", "Batch Scoring", "Time-Slicing"],
    correct: [1], explain: "MAB promuje lepszy model w trakcie testu. A/B dzieli ruch statycznie.", src: "W08, slajd 321", note: "W08-serwowanie-modeli" },

  { id: "W08-15", w: "W08", c: "ab-mab", type: "single",
    q: "Zespół kieruje stale 90% użytkowników na Model Champion i 10% na Challenger, a po określonym czasie analizuje CTR. Jaki to wzorzec?",
    options: ["Multi-Armed Bandits", "A/B Testing", "Streaming Inference", "MPS"],
    correct: [1], explain: "Statyczny podział ruchu i analiza statystyczna po czasie to A/B Testing.", src: "W08, slajd 321", note: "W08-serwowanie-modeli" },

  { id: "W08-16", w: "W08", c: "feature-store", type: "single",
    q: "Jak nazywa się problem rozbieżności między obliczaniem cech podczas treningu a ich wyznaczaniem na produkcji?",
    options: ["Concept Drift", "Training-Serving Skew", "Silent Failure", "Underutilization"],
    correct: [1], explain: "Training-Serving Skew wynika z innej implementacji transformacji, np. Pandas vs Java/C++. Lekiem jest Feature Store.", src: "W08, slajd 322", note: "W08-serwowanie-modeli" },

  { id: "W08-17", w: "W08", c: "feature-store", type: "single",
    q: "Które przyporządkowanie magazynów Feature Store jest zgodne z wykładem?",
    options: ["Offline Store: Redis, Online Store: Parquet na S3", "Offline Store: Parquet na S3, Online Store: Redis", "Offline Store: Kafka, Online Store: Spark", "Oba magazyny: Redis"],
    correct: [1], explain: "Offline Store to historia do treningu (Parquet na S3). Online Store to baza <10 ms do inferencji (Redis).", src: "W08, slajd 322", note: "W08-serwowanie-modeli" },

  { id: "W08-18", w: "W08", c: "gpu-sharing", type: "single",
    q: "Która technika współdzielenia GPU dzieli sprzętowo kartę A100/H100 na 7 izolowanych instancji z własną pamięcią L2?",
    options: ["Time-Slicing", "MPS (Multi-Process Service)", "MIG (Multi-Instance GPU)", "HPA"],
    correct: [2], explain: "MIG to podział sprzętowy. Time-Slicing przełącza kontekst programowo bez izolacji VRAM.", src: "W08, slajd 324", note: "W08-serwowanie-modeli" },

  { id: "W08-19", w: "W08", c: "gpu-sharing", type: "single",
    q: "Która technika współdzielenia GPU nie zapewnia izolacji pamięci VRAM, bo programowo przełącza kontekst między procesami?",
    options: ["Time-Slicing", "MIG", "Offline Store", "Thompson Sampling"],
    correct: [0], explain: "Time-Slicing to programowe przełączanie kontekstu bez izolacji VRAM.", src: "W08, slajd 324", note: "W08-serwowanie-modeli" },

  { id: "W08-20", w: "W08", c: "silent-failure", type: "single",
    q: "System zwraca HTTP 200 OK, ale po zmianie rozkładu danych predykcje są błędne biznesowo. Jak nazwano to zjawisko?",
    options: ["Cold Start", "Silent Failure", "Backpressure", "Tight Coupling"],
    correct: [1], explain: "Cicha awaria: technicznie wszystko działa, ale predykcje są złe.", src: "W08, slajd 325", note: "W08-serwowanie-modeli" },

  { id: "W08-21", w: "W08", c: "silent-failure", type: "single",
    q: "Co według wykładu wchodzi w skład trójnogu obserwowalności?",
    options: ["Logging, Tracing, Metrics", "Prometheus, Grafana, Kafka", "Latency, Throughput, Cost Efficiency", "Data Drift, Concept Drift, Skew"],
    correct: [0], explain: "Trójnóg to logowanie zdarzeń, śledzenie rozproszone i metryki wydajnościowe.", src: "W08, slajd 325", note: "W08-serwowanie-modeli" },
]});
