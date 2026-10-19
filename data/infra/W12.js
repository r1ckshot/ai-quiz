(window.QUIZ_DATA ||= []).push({ subject: "infra", questions: [
  // ===== W12 — Optymalizacja wydajności i kosztów AI w chmurze =====
  { id: "W12-01", w: "W12", c: "finops-def", type: "single",
    q: "Jak nazywa się połączenie technologii, architektury i finansów w celu optymalizacji wydatków chmurowych?",
    options: ["Unit Economics", "FinOps", "Shift-Left", "TCO"],
    correct: [1], explain: "Tak wykład definiuje FinOps. TCO i Unit Economics to wskaźniki, którymi FinOps się posługuje.", src: "W12, slajd 362", note: "W12-finops-optymalizacja" },

  { id: "W12-02", w: "W12", c: "finops-wyzwania", type: "single",
    q: "Zespół przydziela modelowi dwa razy więcej GPU niż potrzeba, „na zapas”. Które wyzwanie FinOps to opisuje?",
    options: ["GPU Idling", "Over-provisioning", "Unit Economics", "Data Egress"],
    correct: [1], explain: "Over-provisioning to nadmiarowa moc przydzielona na zapas. GPU Idling to bezczynność już przydzielonych zasobów.", src: "W12, slajd 362", note: "W12-finops-optymalizacja" },

  { id: "W12-03", w: "W12", c: "finops-wyzwania", type: "single",
    q: "Co NIE jest wymienione jako główne wyzwanie FinOps w MLOps?",
    options: ["GPU Idling", "Over-provisioning", "Unit Economics", "Model Hot-Swapping"],
    correct: [3], explain: "Model Hot-Swapping to mechanizm Tritona do aktualizacji wag bez przestojów, nie wyzwanie.", src: "W12, slajd 362, 372", note: "W12-finops-optymalizacja" },

  { id: "W12-04", w: "W12", c: "tco-inferencja", type: "single",
    q: "Który składnik według wykładu może stanowić do 80% TCO systemu AI?",
    options: ["Trening na klastrach GPU (p4d/p5)", "Inferencja w fazie produkcyjnej", "Magazyny S3/Blob", "Transfer Data Egress"],
    correct: [1], explain: "Inferencja to ciągły, długoterminowy koszt. Trening daje tylko okresowe piki.", src: "W12, slajd 363, 365", note: "W12-finops-optymalizacja" },

  { id: "W12-05", w: "W12", c: "koszt-inferencji", type: "single",
    q: "Instancja GPU kosztuje 3 USD/h i obsługuje 1500 zapytań/h. Ile wynosi koszt na inferencję?",
    options: ["0,002 USD", "4500 USD", "500 USD", "0,5 USD"],
    correct: [0], explain: "Koszt na inferencję = koszt instancji na godzinę / liczba zapytań na godzinę = 3 / 1500.", src: "W12, slajd 364", note: "W12-finops-optymalizacja" },

  { id: "W12-06", w: "W12", c: "sla-pulapka", type: "single",
    q: "Dlaczego bardzo rygorystyczne SLA (opóźnienie poniżej 50 ms) prowadzi do wykładniczego wzrostu kosztów?",
    options: ["Wymusza kosztowny trening QAT zamiast PTQ", "Blokuje Dynamic Batching, wymusza „gorące” GPU", "Uniemożliwia tagowanie zasobów i atrybucję kosztów", "Wymusza eksport modelu do formatu ONNX"],
    correct: [1], explain: "Bez grupowania zapytań trzeba trzymać nieobciążone instancje. To prowadzi do GPU idling i marnowania budżetu.", src: "W12, slajd 363, 365", note: "W12-finops-optymalizacja" },

  { id: "W12-07", w: "W12", c: "spot", type: "single",
    q: "Który mechanizm zapewnia odporność na awarie przy treningu na instancjach Spot?",
    options: ["Dynamic Batching w Tritonie", "Checkpointing do S3/Blob Storage", "Tagowanie zasobów w FinOps", "Constant Folding w ONNX Runtime"],
    correct: [1], explain: "Instancje Spot to tania, niewykorzystana moc chmury. Checkpointing pozwala wznowić pracę po ich odebraniu.", src: "W12, slajd 366", note: "W12-finops-optymalizacja" },

  { id: "W12-08", w: "W12", c: "tagowanie", type: "single",
    q: "Która praktyka FinOps polega na obowiązkowej atrybucji kosztów (Projekt, Środowisko, Właściciel)?",
    options: ["Tagowanie zasobów", "Cost Gating", "Automatyzacja R&D", "Unit Economics"],
    correct: [0], explain: "Tagi przypisują koszt do projektu, środowiska i właściciela.", src: "W12, slajd 366", note: "W12-finops-optymalizacja" },

  { id: "W12-09", w: "W12", c: "bottleneck", type: "single",
    q: "Jakie wąskie gardło sprzętowe wykład podaje jako najczęstszy problem LLM?",
    options: ["Compute Bottleneck (moc rdzeni)", "Memory Bandwidth Bottleneck (VRAM)", "Data Egress między regionami", "Cold Start przy ładowaniu wag"],
    correct: [1], explain: "Najczęstszy problem LLM to przepustowość pamięci VRAM, nie czysta moc obliczeniowa rdzeni.", src: "W12, slajd 367", note: "W12-finops-optymalizacja" },

  { id: "W12-10", w: "W12", c: "trojkat", type: "single",
    q: "Co NIE jest wierzchołkiem trójkąta kompromisów architektonicznych?",
    options: ["Dokładność (Accuracy)", "Wydajność (Latency/Throughput)", "Koszt (VRAM/Zasoby)", "Bezpieczeństwo (Security)"],
    correct: [3], explain: "Trójkąt tworzą dokładność, wydajność i koszt. Punkt pracy przesuwa się kwantyzacją, pruningiem, destylacją i optymalizacją grafu.", src: "W12, slajd 367", note: "W12-finops-optymalizacja" },

  { id: "W12-11", w: "W12", c: "kwantyzacja", type: "single",
    q: "Jak nazywa się mapowanie wag z zakresu ciągłego (32 bity) na dyskretne reprezentacje o niższej precyzji?",
    options: ["Pruning", "Destylacja wiedzy", "Kwantyzacja", "Constant Folding"],
    correct: [2], explain: "To definicja kwantyzacji. Pruning usuwa wagi, destylacja przenosi wiedzę do mniejszego modelu.", src: "W12, slajd 368", note: "W12-finops-optymalizacja" },

  { id: "W12-12", w: "W12", c: "kwantyzacja", type: "single",
    q: "Ile razy według wykładu kwantyzacja FP32 → INT8 zmniejsza zapotrzebowanie na VRAM?",
    options: ["2 razy", "4 razy", "8 razy", "32 razy"],
    correct: [1], explain: "FP32 zajmuje 4 bajty na wagę, INT8 jeden bajt.", src: "W12, slajd 368", note: "W12-finops-optymalizacja" },

  { id: "W12-13", w: "W12", c: "ptq-qat", type: "single",
    q: "Która metodologia kwantyzacji symuluje błędy kwantyzacji podczas treningu i daje najwyższą dokładność?",
    options: ["PTQ", "QAT", "Kwantyzacja dynamiczna", "Constant Folding"],
    correct: [1], explain: "QAT to Quantization-Aware Training. PTQ to szybka kalibracja już wytrenowanego modelu.", src: "W12, slajd 368", note: "W12-finops-optymalizacja" },

  { id: "W12-14", w: "W12", c: "ptq-qat", type: "single",
    q: "Zespół ma gotowy model i chce go szybko skwantyzować bez ponownego treningu. Którą metodologię wybrać?",
    options: ["QAT", "PTQ", "Destylację Teacher–Student", "Pruning strukturalny"],
    correct: [1], explain: "PTQ to szybka kalibracja gotowego modelu. QAT wymaga treningu.", src: "W12, slajd 368", note: "W12-finops-optymalizacja" },

  { id: "W12-15", w: "W12", c: "kwant-dynamiczna", type: "single",
    q: "Co cechuje kwantyzację dynamiczną do INT8 w przykładzie PyTorch?",
    options: ["Wagi i aktywacje kwantyzowane w locie", "Wagi statycznie, aktywacje w locie", "Aktywacje statycznie, wagi w locie", "Kwantyzacja tylko podczas treningu"],
    correct: [1], explain: "Komentarz w kodzie mówi: wagi statycznie, aktywacje w locie.", src: "W12, slajd 369", note: "W12-finops-optymalizacja" },

  { id: "W12-16", w: "W12", c: "onnx", type: "single",
    q: "Który otwarty standard ma eliminować przywiązanie do dostawcy (Vendor Lock-in) jako uniwersalny format modeli?",
    options: ["TensorRT", "ONNX", "Triton Inference Server", "KEDA"],
    correct: [1], explain: "ONNX (Open Neural Network Exchange) to otwarty format. TensorRT to kompilator NVIDIA, Triton to serwer.", src: "W12, slajd 370", note: "W12-finops-optymalizacja" },

  { id: "W12-17", w: "W12", c: "onnx-opt", type: "single",
    q: "Jak nazywa się optymalizacja grafowa ONNX Runtime, która łączy wiele operacji w jeden zoptymalizowany kernel?",
    options: ["Operator Fusion", "Constant Folding", "Dead Code Elimination", "Kernel Auto-Tuning"],
    correct: [0], explain: "Constant Folding przelicza stałe przy kompilacji. Dead Code Elimination usuwa nieużywane ścieżki.", src: "W12, slajd 370", note: "W12-finops-optymalizacja" },

  { id: "W12-18", w: "W12", c: "tensorrt", type: "single",
    q: "Jak nazywa się mechanizm TensorRT, który automatycznie dobiera najwydajniejsze algorytmy CUDA pod konkretną architekturę karty?",
    options: ["Operator Fusion", "Kernel Auto-Tuning", "Concurrent Model Execution", "Dynamic Batching"],
    correct: [1], explain: "Kernel Auto-Tuning dobiera algorytmy np. pod Ampere lub Hopper.", src: "W12, slajd 372", note: "W12-finops-optymalizacja" },

  { id: "W12-19", w: "W12", c: "triton", type: "single",
    q: "Kilka modeli ma współdzielić jedną kartę GPU w Tritonie. Który mechanizm to zapewnia?",
    options: ["Dynamic Batching zapytań", "Model Hot-Swapping", "Concurrent Model Execution", "Kernel Auto-Tuning w TensorRT"],
    correct: [2], explain: "Concurrent Model Execution to wiele modeli na jednym GPU. Dynamic Batching łączy zapytania w partie.", src: "W12, slajd 372", note: "W12-finops-optymalizacja" },

  { id: "W12-20", w: "W12", c: "triton", type: "single",
    q: "Co NIE jest mechanizmem FinOps w Triton Inference Server?",
    options: ["Dynamic Batching", "Concurrent Model Execution", "Model Hot-Swapping", "Constant Folding"],
    correct: [3], explain: "Constant Folding to optymalizacja grafowa ONNX Runtime.", src: "W12, slajd 370, 372", note: "W12-finops-optymalizacja" },

  { id: "W12-21", w: "W12", c: "pruning", type: "single",
    q: "Który rodzaj przycinania wymaga wsparcia sprzętowego (np. NVIDIA cusPARSE)?",
    options: ["Strukturalny, bo usuwa kanały i filtry", "Niestrukturalny, bo zeruje pojedyncze wagi", "Oba, bo każdy daje rzadkie macierze", "Żaden, pruning działa na dowolnym procesorze"],
    correct: [1], explain: "Niestrukturalny daje rzadkie macierze. Strukturalny daje mniejszą, gęstą sieć na dowolnym procesorze.", src: "W12, slajd 373", note: "W12-finops-optymalizacja" },

  { id: "W12-22", w: "W12", c: "destylacja", type: "single",
    q: "Która technika używa „miękkich etykiet” (Soft Targets) i funkcji straty KL-Divergence?",
    options: ["Kwantyzacja QAT", "Pruning niestrukturalny", "Destylacja wiedzy", "Constant Folding"],
    correct: [2], explain: "Destylacja przenosi wiedzę z dużego Nauczyciela do małego Ucznia.", src: "W12, slajd 373", note: "W12-finops-optymalizacja" },

  { id: "W12-23", w: "W12", c: "keda", type: "single",
    q: "Na podstawie czego skaluje KEDA, w odróżnieniu od tradycyjnego HPA?",
    options: ["Wyłącznie użycia CPU i RAM w Podach", "Zdarzeń, np. liczby wiadomości w kolejce", "Liczby tagów zasobów w przestrzeni nazw", "Rozmiaru obrazu kontenera w rejestrze"],
    correct: [1], explain: "KEDA skaluje np. po kolejce Kafka/RabbitMQ lub metrykach Prometheus. HPA po CPU/RAM zawodzi przy asynchronicznym AI.", src: "W12, slajd 374", note: "W12-finops-optymalizacja" },

  { id: "W12-24", w: "W12", c: "scale-to-zero", type: "single",
    q: "Które ustawienie w obiekcie ScaledObject KEDA realizuje Scale-to-Zero?",
    options: ["maxReplicaCount: 10", "minReplicaCount: 0", "threshold: '5'", "type: prometheus"],
    correct: [1], explain: "minReplicaCount: 0 pozwala całkowicie wyłączyć repliki GPU bez ruchu.", src: "W12, slajd 374–375", note: "W12-finops-optymalizacja" },

  { id: "W12-25", w: "W12", c: "cost-gating", type: "single",
    q: "Jak nazywa się blokowanie wdrożenia modelu, gdy szacowany koszt na zapytanie przekracza budżet projektu?",
    options: ["Cost Gating", "Over-provisioning", "Model Hot-Swapping", "Tagowanie zasobów"],
    correct: [0], explain: "Cost Gating to bramkowanie kosztowe w ramach Shift-Left FinOps w potoku CD4ML.", src: "W12, slajd 376", note: "W12-finops-optymalizacja" },
]});
