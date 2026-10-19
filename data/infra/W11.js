(window.QUIZ_DATA ||= []).push({ subject: "infra", questions: [
  // ===== W11 — Monitorowanie i zarządzanie systemami AI w chmurze =====
  { id: "W11-01", w: "W11", c: "silent-failure", type: "single",
    q: "Jak nazywa się zjawisko, w którym system zwraca HTTP 200 OK, ale model generuje błędne lub szkodliwe wyniki?",
    options: ["Thermal Throttling GPU", "Cicha awaria (Silent Failure)", "Zmęczenie alertami (Alert Fatigue)", "Awaria kaskadowa (Cascading Failure)"],
    correct: [1], explain: "Cicha awaria nie daje wyjątków ani błędów 5xx. Spada tylko jakość predykcji.", src: "W11, slajd 342", note: "W11-monitorowanie" },

  { id: "W11-02", w: "W11", c: "silent-failure", type: "single",
    q: "API modelu kredytowego działa bez błędów i zwraca 200 OK, ale F1 na produkcji stale spada. Które podejście wykryje ten problem?",
    options: ["Monitoring IT oparty na stanie up/down", "Monitoring błędów HTTP 5xx", "ML Observability", "Monitoring zużycia CPU/RAM"],
    correct: [2], explain: "Monitoring IT widzi tylko stan techniczny. ML Observability śledzi poprawność merytoryczną predykcji.", src: "W11, slajd 342", note: "W11-monitorowanie" },

  { id: "W11-03", w: "W11", c: "filary", type: "single",
    q: "Co NIE jest jednym z trzech filarów obserwowalności systemów AI?",
    options: ["Jakość danych (Data Quality)", "Wydajność modelu (Model Performance)", "Operacje usługowe (Service Operations)", "Bezpieczeństwo sieci (Network Security)"],
    correct: [3], explain: "Trzy filary to jakość danych, wydajność modelu i operacje usługowe.", src: "W11, slajd 342", note: "W11-monitorowanie" },

  { id: "W11-04", w: "W11", c: "filary", type: "single",
    q: "Do którego filaru obserwowalności należą latencja P99, przepustowość i koszty?",
    options: ["Jakość danych", "Wydajność modelu", "Operacje usługowe", "Dryft pojęciowy"],
    correct: [2], explain: "Service Operations obejmuje latencję, przepustowość i koszty. Błędy schematu to jakość danych.", src: "W11, slajd 342", note: "W11-monitorowanie" },

  { id: "W11-05", w: "W11", c: "dcgm-metryki", type: "single",
    q: "Która metryka DCGM pokazuje rzeczywiste operacje macierzowe, a nie ogólne zajęcie karty?",
    options: ["GPU Utilization", "Tensor Core Utilization", "Interconnect Saturation", "Thermal Throttling"],
    correct: [1], explain: "GPU Utilization to ogólne zajęcie karty. Tensor Core Utilization mierzy faktyczne operacje macierzowe.", src: "W11, slajd 343", note: "W11-monitorowanie" },

  { id: "W11-06", w: "W11", c: "percentyle", type: "single",
    q: "Jak według wykładu analizować latencję w systemach z Dynamic Batching?",
    options: ["Średnią arytmetyczną czasu odpowiedzi", "Percentylami P95 i P99", "Tylko liczbą błędów 5xx", "Wartością minimalną latencji"],
    correct: [1], explain: "Wykład zaleca rezygnację ze średniej na rzecz percentyli P95 i P99.", src: "W11, slajd 343", note: "W11-monitorowanie" },

  { id: "W11-07", w: "W11", c: "data-drift", type: "single",
    q: "Który rodzaj dryftu opisuje wzór P_t(X) ≠ P_train(X)?",
    options: ["Dryft pojęciowy (Concept Drift)", "Dryft danych (Covariate Shift)", "Zmiana a priori (Prior Probability Shift)", "Alert Fatigue"],
    correct: [1], explain: "Zmienia się rozkład cech wejściowych X. To dryft danych.", src: "W11, slajd 344", note: "W11-monitorowanie" },

  { id: "W11-08", w: "W11", c: "data-drift", type: "single",
    q: "Czujnik IoT ulega awarii i wysyła do modelu nietypowe odczyty. Jaki to rodzaj dryftu?",
    options: ["Dryft danych (Covariate Shift)", "Dryft pojęciowy (Concept Drift)", "Zmiana a priori", "Cicha awaria sprzętowa GPU"],
    correct: [0], explain: "Awaria czujnika IoT to przykład dryftu danych ze slajdu. Zmienia się rozkład X.", src: "W11, slajd 344", note: "W11-monitorowanie" },

  { id: "W11-09", w: "W11", c: "concept-drift", type: "single",
    q: "Inflacja sprawia, że ta sama pensja X oznacza inną zdolność kredytową Y. Co się zmienia?",
    options: ["P(X), czyli rozkład cech", "P(Y|X), czyli relacja cech i celu", "P(Y), czyli rozkład etykiet", "Tylko latencja modelu"],
    correct: [1], explain: "To dryft pojęciowy: zmienia się relacja między cechami a celem.", src: "W11, slajd 345", note: "W11-monitorowanie" },

  { id: "W11-10", w: "W11", c: "concept-drift", type: "single",
    q: "Jaką reakcję według wykładu wymaga dryft pojęciowy?",
    options: ["Kalibracji danych", "Pilnego retreningu modelu", "Zwiększenia interwału scrape do 10s", "Korekty Benjamini-Hochberga"],
    correct: [1], explain: "Dryft danych wymaga kalibracji danych, a dryft pojęciowy pilnego retreningu.", src: "W11, slajd 345", note: "W11-monitorowanie" },

  { id: "W11-11", w: "W11", c: "prior-shift", type: "single",
    q: "Czym jest zmiana a priori (Prior Probability Shift)?",
    options: ["Zmianą rozkładu cech wejściowych P(X)", "Zmianą relacji P(Y|X)", "Zmianą rozkładu etykiet wyjściowych P(Y)", "Spadkiem wydajności przez temperaturę GPU"],
    correct: [2], explain: "Prior Probability Shift to zmiana rozkładu etykiet P(Y).", src: "W11, slajd 345", note: "W11-monitorowanie" },

  { id: "W11-12", w: "W11", c: "psi", type: "single",
    q: "PSI dla cechy wynosi 0.18. Co to oznacza według progów z wykładu?",
    options: ["Stabilność", "Ostrzeżenie", "Akcję retreningu", "Błąd obliczeń, PSI nie może przekroczyć 0.1"],
    correct: [1], explain: "Progi PSI: < 0.1 stabilność, 0.1–0.25 ostrzeżenie, > 0.25 retrening.", src: "W11, slajd 346", note: "W11-monitorowanie" },

  { id: "W11-13", w: "W11", c: "kl-emd", type: "single",
    q: "Która miara jest odporna na rozłączne nośniki rozkładów i stabilna numerycznie?",
    options: ["Dywergencja Kullbacka-Leiblera", "Dystans Wassersteina (EMD)", "PSI (Population Stability Index)", "Korekta Benjamini-Hochberga"],
    correct: [1], explain: "Wasserstein (Earth Mover's Distance) jest odporny na rozłączne nośniki. KL jest asymetryczna i wrażliwa na zera.", src: "W11, slajd 346", note: "W11-monitorowanie" },

  { id: "W11-14", w: "W11", c: "alert-fatigue", type: "single",
    q: "Co stosuje się przeciw Alert Fatigue przy monitorowaniu tysięcy cech?",
    options: ["Korektę Benjamini-Hochberga", "Test Kołmogorowa-Smirnowa", "Strategię Canary", "Interwał próbkowania 10s"],
    correct: [0], explain: "Przy tysiącach cech potrzebna jest korekta Benjamini-Hochberga, by ograniczyć fałszywe alerty.", src: "W11, slajd 346", note: "W11-monitorowanie" },

  { id: "W11-15", w: "W11", c: "async-drift", type: "single",
    q: "Gdzie we wzorcu Asynchronous Drift Detection wykonuje się obliczenia statystyczne?",
    options: ["W wątku inferencji, przy każdym żądaniu", "Poza ścieżką krytyczną API, w CronJob", "W sterowniku NVIDIA przez NVML", "Po stronie klienta, w przeglądarce"],
    correct: [1], explain: "Obliczenia dryftu idą poza ścieżką krytyczną API, np. jako CronJob.", src: "W11, slajd 347", note: "W11-monitorowanie" },

  { id: "W11-16", w: "W11", c: "payload-logging", type: "single",
    q: "Na czym polega rozprzężenie (Decoupling) we wzorcu Asynchronous Payload Logging?",
    options: ["Na synchronicznym zapisie każdej predykcji do bazy SQL", "Na emisji zdarzeń do kolejki Kafka bez blokowania inferencji", "Na zapisie logów w formacie wierszowym zamiast kolumnowego", "Na wyłączeniu logowania predykcji w godzinach szczytu"],
    correct: [1], explain: "Kolejka odcina inferencję od zapisu. Synchroniczny zapis do SQL to wąskie gardło I/O.", src: "W11, slajd 349", note: "W11-monitorowanie" },

  { id: "W11-17", w: "W11", c: "payload-logging", type: "single",
    q: "Co NIE jest zaletą architektury rozprzężonej z Kafką względem zapisu synchronicznego do SQL?",
    options: ["Minimalny narzut latencji", "Wysoka odporność na piki dzięki buforowaniu", "Kolumnowy format zapisu (Parquet/OLAP)", "Relacyjny, wierszowy format zapisu"],
    correct: [3], explain: "Format wierszowy (relacyjny) to cecha zapisu synchronicznego do SQL.", src: "W11, slajd 351, 352", note: "W11-monitorowanie" },

  { id: "W11-18", w: "W11", c: "sidecar", type: "single",
    q: "Który wzorzec przechwytuje logi strukturalne (stdout) przez agentów takich jak FluentBit?",
    options: ["Sidecar Container Pattern", "Data Lakehouse Pattern", "Dynamic Batching w Tritonie", "Prometheus Metric Relabeling"],
    correct: [0], explain: "Wzorzec przyczepki (Sidecar) to dodatkowy kontener z agentem zbierającym stdout.", src: "W11, slajd 349", note: "W11-monitorowanie" },

  { id: "W11-19", w: "W11", c: "dcgm-exporter", type: "single",
    q: "Jak wdraża się NVIDIA DCGM Exporter w Kubernetesie?",
    options: ["Jako DaemonSet, jedna instancja na każdy węzeł GPU", "Jako jeden Deployment dla całego klastra", "Jako Kubernetes CronJob co 4h", "Jako sidecar w każdym podzie aplikacji"],
    correct: [0], explain: "DCGM Exporter działa jako DaemonSet i mówi ze sterownikiem NVIDIA przez API NVML.", src: "W11, slajd 353", note: "W11-monitorowanie" },

  { id: "W11-20", w: "W11", c: "ct-triggers", type: "single",
    q: "Retrening uruchamia alert Prometheusa po wzroście PSI powyżej 0.25. Jaki to typ wyzwalacza CT?",
    options: ["Planowany (czasowy)", "Wydajnościowy (SLO Alerting)", "Sterowany zdarzeniami (Event-Driven)", "Ręczny rollback"],
    correct: [1], explain: "SLO Alerting reaguje na spadek metryk lub PSI > 0.25. Event-Driven reaguje na nową partię danych.", src: "W11, slajd 355", note: "W11-monitorowanie" },

  { id: "W11-21", w: "W11", c: "rollback", type: "single",
    q: "Co według wykładu dzieje się po wykryciu skoku błędów 5xx w wersji Canary?",
    options: ["Uruchamia się retrening w Kubeflow", "Istio cofa ruch do stabilnej wersji Blue", "DCGM Exporter restartuje węzeł GPU", "PSI zostaje przeliczony dla wersji Canary"],
    correct: [1], explain: "Automatyczny rollback: monitoring zintegrowany z Istio cofa ruch z Canary do Blue.", src: "W11, slajd 355", note: "W11-monitorowanie" },

  { id: "W11-22", w: "W11", c: "petla", type: "single",
    q: "Który element zamkniętej pętli MLOps wdraża nowy model na klastrze K8s jako operator GitOps?",
    options: ["Alertmanager", "MLflow", "ArgoCD", "Kubeflow"],
    correct: [2], explain: "ArgoCD wdraża model strategią Canary. Alertmanager wysyła webhook, MLflow przechowuje model.", src: "W11, slajd 356, 358", note: "W11-monitorowanie" },

  { id: "W11-23", w: "W11", c: "petla", type: "single",
    q: "Jaka jest kolejność etapów zamkniętej pętli MLOps po alercie Prometheus/Grafana?",
    options: ["Webhook → retrening → MLflow → ArgoCD", "MLflow → Webhook → ArgoCD → retrening", "ArgoCD → MLflow → retrening → Webhook", "Retrening → Webhook → ArgoCD → MLflow"],
    correct: [0], explain: "Alertmanager wysyła webhook, potem CT, rejestr MLflow i wdrożenie przez ArgoCD.", src: "W11, slajd 356, 358", note: "W11-monitorowanie" },

  { id: "W11-24", w: "W11", c: "llm-metryki", type: "single",
    q: "Która metryka LLM mierzy latencję do wygenerowania pierwszego słowa i jest krytyczna dla UX?",
    options: ["ITL (Inter-Token Latency)", "TTFT (Time-to-First-Token)", "Token Throughput (tokeny/s)", "PSI (Population Stability Index)"],
    correct: [1], explain: "TTFT to czas do pierwszego tokena. ITL to czas między kolejnymi tokenami.", src: "W11, slajd 359", note: "W11-monitorowanie" },

  { id: "W11-25", w: "W11", c: "llm-judge", type: "single",
    q: "Do czego służą biblioteki Ragas i TruLens w LLM Observability?",
    options: ["Do śledzenia kosztów tokenów Prompt i Completion", "Do wykrywania halucynacji i toksyczności (LLM-as-a-Judge)", "Do eksportu metryk GPU przez NVML do Prometheusa", "Do buforowania zdarzeń telemetrii w kolejce Kafka"],
    correct: [1], explain: "Ragas i TruLens realizują LLM-as-a-Judge. Koszty tokenów to FinOps Observability.", src: "W11, slajd 359", note: "W11-monitorowanie" },
]});
