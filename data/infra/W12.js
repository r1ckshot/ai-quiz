(window.QUIZ_DATA ||= []).push({ subject: "infra", questions: [
  // ===== W12 — Optymalizacja wydajności i kosztów AI w chmurze =====
  { id: "W12-01", w: "W12", c: "finops-def", type: "single",
    q: "Jak nazywa się połączenie technologii, architektury i finansów w celu optymalizacji wydatków chmurowych?",
    options: ["Unit Economics", "FinOps", "Shift-Left", "TCO"],
    correct: [1], explain: "Tak wykład definiuje FinOps. TCO i Unit Economics to wskaźniki, którymi FinOps się posługuje.", src: "W12, slajd 362", note: "W12-finops-optymalizacja" },

  { id: "W12-26", w: "W12", c: "finops-def", type: "single",
    q: "Czym według wykładu jest FinOps?",
    options: ["Kosztem na zapytanie i na użytkownika", "Całkowitym kosztem posiadania systemu AI w cyklu życia", "Połączeniem technologii, architektury i finansów", "Kontrolą kosztów wbudowaną w potoki CD4ML"],
    correct: [2], explain: "To definicja ze slajdu 362. Unit Economics i TCO to wskaźniki, a kontrola w CD4ML to Shift-Left FinOps.", src: "W12, slajd 362", note: "W12-finops-optymalizacja" },

  { id: "W12-27", w: "W12", c: "finops-def", type: "single",
    q: "Jaki cel FinOps w MLOps podaje wykład?",
    options: ["Wyłączanie środowisk deweloperskich poza godzinami pracy", "Maksymalizacja utylizacji budżetu przy rygorach SLA", "Rezerwacja „gorących” instancji GPU dla opóźnień < 50 ms", "Jak najniższy koszt na inferencję bez względu na SLA"],
    correct: [1], explain: "Cel to maksymalizacja utylizacji budżetu przy zachowaniu rygorów SLA. Wyłączanie środowisk R&D to tylko jedna z praktyk.", src: "W12, slajd 362", note: "W12-finops-optymalizacja" },

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

  { id: "W12-28", w: "W12", c: "tco-inferencja", type: "single",
    q: "Jak wykład porównuje dynamikę kosztów treningu i inferencji?",
    options: ["Trening: ciągły, rosnący koszt; inferencja: okresowe piki", "Oba: krótkie piki kosztowe w fazie budowy modelu", "Oba: stały koszt, niezależny od fazy cyklu życia", "Trening: okresowe piki; inferencja: ciągły, rosnący koszt"],
    correct: [3], explain: "Trening daje nagłe piki na klastrach GPU. Inferencja to trend rosnący, do 80% TCO.", src: "W12, slajd 363, 365", note: "W12-finops-optymalizacja" },

  { id: "W12-05", w: "W12", c: "koszt-inferencji", type: "single",
    q: "Instancja GPU kosztuje 3 USD/h i obsługuje 1500 zapytań/h. Ile wynosi koszt na inferencję?",
    options: ["0,002 USD", "4500 USD", "500 USD", "0,5 USD"],
    correct: [0], explain: "Koszt na inferencję = koszt instancji na godzinę / liczba zapytań na godzinę = 3 / 1500.", src: "W12, slajd 364", note: "W12-finops-optymalizacja" },

  { id: "W12-29", w: "W12", c: "koszt-inferencji", type: "single",
    q: "Jak wykład definiuje koszt na inferencję?",
    options: ["Liczba zapytań na godzinę / koszt instancji na godzinę", "Koszt instancji na godzinę / liczba zapytań na godzinę", "Koszt instancji na godzinę × liczba zapytań na godzinę", "Koszt treningu / liczba użytkowników w cyklu życia"],
    correct: [1], explain: "Koszt instancji na godzinę dzieli się przez liczbę zapytań na godzinę.", src: "W12, slajd 364", note: "W12-finops-optymalizacja" },

  { id: "W12-30", w: "W12", c: "koszt-inferencji", type: "single",
    q: "Instancja A: 4 USD/h i 1000 zapytań/h. Instancja B: 6 USD/h i 3000 zapytań/h. Która ma niższy koszt na inferencję?",
    options: ["A: 0,004 USD na inferencję", "A: 250 USD na inferencję", "B: 0,002 USD na inferencję", "Obie: 0,003 USD na inferencję"],
    correct: [2], explain: "A: 4 / 1000 = 0,004 USD. B: 6 / 3000 = 0,002 USD, więc B jest tańsza mimo wyższej stawki godzinowej.", src: "W12, slajd 364", note: "W12-finops-optymalizacja" },

  { id: "W12-06", w: "W12", c: "sla-pulapka", type: "single",
    q: "Dlaczego bardzo rygorystyczne SLA (opóźnienie poniżej 50 ms) prowadzi do wykładniczego wzrostu kosztów?",
    options: ["Wymusza kosztowny trening QAT zamiast PTQ", "Blokuje Dynamic Batching, wymusza „gorące” GPU", "Uniemożliwia tagowanie zasobów i atrybucję kosztów", "Wymusza eksport modelu do formatu ONNX"],
    correct: [1], explain: "Bez grupowania zapytań trzeba trzymać nieobciążone instancje. To prowadzi do GPU idling i marnowania budżetu.", src: "W12, slajd 363, 365", note: "W12-finops-optymalizacja" },

  { id: "W12-31", w: "W12", c: "sla-pulapka", type: "single",
    q: "Jak wykład nazywa wykładniczy wzrost kosztów przy rygorystycznym obniżaniu opóźnień poniżej 50 ms?",
    options: ["GPU Idling", "Pułapka SLA", "Over-provisioning", "Data Egress"],
    correct: [1], explain: "Infografika nazywa to „pułapką SLA”. GPU Idling jest jej skutkiem, nie nazwą zjawiska.", src: "W12, slajd 364–365", note: "W12-finops-optymalizacja" },

  { id: "W12-32", w: "W12", c: "sla-pulapka", type: "single",
    q: "Co NIE jest skutkiem rygoru opóźnień poniżej 50 ms według wykładu?",
    options: ["Brak możliwości dynamicznego grupowania zapytań", "Utrzymywanie „gorących”, nieobciążonych instancji GPU", "Rezerwacja zasobów i zakaz buforowania", "Wyłączanie klastrów GPU przy braku ruchu"],
    correct: [3], explain: "Wyłączanie GPU przy braku ruchu to Scale-to-Zero. Ostre SLA wymusza odwrotnie: stale gorące, rezerwowane instancje.", src: "W12, slajd 363, 365", note: "W12-finops-optymalizacja" },

  { id: "W12-07", w: "W12", c: "spot", type: "single",
    q: "Który mechanizm zapewnia odporność na awarie przy treningu na instancjach Spot?",
    options: ["Dynamic Batching w Tritonie", "Checkpointing do S3/Blob Storage", "Tagowanie zasobów w FinOps", "Constant Folding w ONNX Runtime"],
    correct: [1], explain: "Instancje Spot to tania, niewykorzystana moc chmury. Checkpointing pozwala wznowić pracę po ich odebraniu.", src: "W12, slajd 366", note: "W12-finops-optymalizacja" },

  { id: "W12-33", w: "W12", c: "spot", type: "single",
    q: "Czym według wykładu są instancje Spot (AWS/Azure)?",
    options: ["Niewykorzystaną mocą chmury z rabatami 60%–90%", "Instancjami rezerwowanymi pod rygor SLA < 50 ms", "Mocą GPU przydzielaną nadmiarowo „na zapas”", "Replikami GPU tworzonymi przez KEDA przy ruchu"],
    correct: [0], explain: "Spot to niewykorzystana moc chmury z rabatami 60%–90%. Przed utratą pracy chroni checkpointing.", src: "W12, slajd 366", note: "W12-finops-optymalizacja" },

  { id: "W12-08", w: "W12", c: "tagowanie", type: "single",
    q: "Która praktyka FinOps polega na obowiązkowej atrybucji kosztów (Projekt, Środowisko, Właściciel)?",
    options: ["Tagowanie zasobów", "Cost Gating", "Automatyzacja R&D", "Unit Economics"],
    correct: [0], explain: "Tagi przypisują koszt do projektu, środowiska i właściciela.", src: "W12, slajd 366", note: "W12-finops-optymalizacja" },

  { id: "W12-34", w: "W12", c: "tagowanie", type: "single",
    q: "Czemu służy tagowanie zasobów w praktykach FinOps?",
    options: ["Blokowaniu wdrożeń przekraczających budżet projektu", "Atrybucji kosztów: projekt, środowisko, właściciel", "Wyłączaniu środowisk deweloperskich po godzinach pracy", "Zapisywaniu checkpointów stanów do S3/Blob Storage"],
    correct: [1], explain: "Tagi (Projekt, Środowisko, Właściciel) przypisują każdy koszt do źródła. Blokowanie wdrożeń to Cost Gating.", src: "W12, slajd 366", note: "W12-finops-optymalizacja" },

  { id: "W12-09", w: "W12", c: "bottleneck", type: "single",
    q: "Jakie wąskie gardło sprzętowe wykład podaje jako najczęstszy problem LLM?",
    options: ["Compute Bottleneck (moc rdzeni)", "Memory Bandwidth Bottleneck (VRAM)", "Data Egress między regionami", "Cold Start przy ładowaniu wag"],
    correct: [1], explain: "Najczęstszy problem LLM to przepustowość pamięci VRAM, nie czysta moc obliczeniowa rdzeni.", src: "W12, slajd 367", note: "W12-finops-optymalizacja" },

  { id: "W12-35", w: "W12", c: "bottleneck", type: "single",
    q: "Jak nazywa się wąskie gardło polegające na ograniczeniu czystej mocy obliczeniowej rdzeni?",
    options: ["Memory Bandwidth Bottleneck", "Compute Bottleneck", "GPU Idling", "Data Egress"],
    correct: [1], explain: "Compute Bottleneck to brak mocy rdzeni. Memory Bandwidth Bottleneck dotyczy przepustowości szyny VRAM.", src: "W12, slajd 367", note: "W12-finops-optymalizacja" },

  { id: "W12-36", w: "W12", c: "bottleneck", type: "single",
    q: "Na czym polega Memory Bandwidth Bottleneck?",
    options: ["Na ograniczeniu czystej mocy obliczeniowej rdzeni", "Na kosztownym transferze danych między regionami", "Na ograniczeniu przepustowości szyny pamięci VRAM", "Na bezczynności drogich zasobów obliczeniowych"],
    correct: [2], explain: "To ograniczenie szyny pamięci VRAM, według wykładu najczęstszy problem LLM. Moc rdzeni to Compute Bottleneck.", src: "W12, slajd 367", note: "W12-finops-optymalizacja" },

  { id: "W12-10", w: "W12", c: "trojkat", type: "single",
    q: "Co NIE jest wierzchołkiem trójkąta kompromisów architektonicznych?",
    options: ["Dokładność (Accuracy)", "Wydajność (Latency/Throughput)", "Koszt (VRAM/Zasoby)", "Bezpieczeństwo (Security)"],
    correct: [3], explain: "Trójkąt tworzą dokładność, wydajność i koszt. Punkt pracy przesuwa się kwantyzacją, pruningiem, destylacją i optymalizacją grafu.", src: "W12, slajd 367", note: "W12-finops-optymalizacja" },

  { id: "W12-37", w: "W12", c: "trojkat", type: "single",
    q: "Które metody według wykładu przesuwają punkt pracy w trójkącie kompromisów?",
    options: ["Tagowanie zasobów, instancje Spot, automatyzacja R&D", "Kwantyzacja, pruning, destylacja, optymalizacja grafu", "Dynamic Batching, Model Hot-Swapping, współdzielenie GPU", "Autoskalowanie HPA, KEDA i Scale-to-Zero klastrów"],
    correct: [1], explain: "Slajd wymienia kwantyzację, pruning, destylację i optymalizację grafu. Pozostałe to praktyki FinOps, mechanizmy Tritona i autoskalowanie.", src: "W12, slajd 367", note: "W12-finops-optymalizacja" },

  { id: "W12-38", w: "W12", c: "trojkat", type: "single",
    q: "Co w trójkącie kompromisów opisuje wierzchołek „Koszt (VRAM/Zasoby)”?",
    options: ["Jakość predykcji modelu", "Szybkość odpowiedzi systemu", "Rozmiar infrastruktury", "Liczbę zapytań na godzinę"],
    correct: [2], explain: "Koszt to rozmiar infrastruktury. Jakość predykcji to Dokładność, a szybkość odpowiedzi to Wydajność.", src: "W12, slajd 367", note: "W12-finops-optymalizacja" },

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

  { id: "W12-39", w: "W12", c: "kwant-dynamiczna", type: "single",
    q: "Jak nazywa się kwantyzacja z przykładu PyTorch, w której wagi INT8 są statyczne, a aktywacje kwantyzowane w locie?",
    options: ["QAT (Quantization-Aware Training)", "Kwantyzacja dynamiczna", "Pruning niestrukturalny", "Constant Folding"],
    correct: [1], explain: "Przykład używa quantize_dynamic: wagi statycznie, aktywacje w locie. QAT symuluje kwantyzację w trakcie treningu.", src: "W12, slajd 369", note: "W12-finops-optymalizacja" },

  { id: "W12-16", w: "W12", c: "onnx", type: "single",
    q: "Który otwarty standard ma eliminować przywiązanie do dostawcy (Vendor Lock-in) jako uniwersalny format modeli?",
    options: ["TensorRT", "ONNX", "Triton Inference Server", "KEDA"],
    correct: [1], explain: "ONNX (Open Neural Network Exchange) to otwarty format. TensorRT to kompilator NVIDIA, Triton to serwer.", src: "W12, slajd 370", note: "W12-finops-optymalizacja" },

  { id: "W12-40", w: "W12", c: "onnx", type: "single",
    q: "Jak ONNX według wykładu zmniejsza rozmiar kontenerów produkcyjnych?",
    options: ["Usuwa ciężkie biblioteki treningowe, np. PyTorch", "Zeruje indywidualne wagi, tworząc rzadkie macierze", "Przelicza stałe fragmenty grafu na etapie kompilacji", "Dobiera algorytmy CUDA pod architekturę karty GPU"],
    correct: [0], explain: "Niezależność od frameworka: produkcja nie potrzebuje PyTorch/TensorFlow, tylko lekkiego środowiska. Constant Folding optymalizuje graf, nie kontener.", src: "W12, slajd 370", note: "W12-finops-optymalizacja" },

  { id: "W12-41", w: "W12", c: "onnx", type: "single",
    q: "Co zapewniają dostawcy wykonania (Execution Providers) w ONNX Runtime?",
    options: ["Aktualizację wag modelu bez przestojów serwisu", "Wieloplatformowość: CUDA, TensorRT, OpenVINO, CoreML", "Współdzielenie jednej karty GPU przez wiele modeli", "Skalowanie replik według liczby wiadomości w kolejce"],
    correct: [1], explain: "Execution Providers to moduły dla CUDA, TensorRT, OpenVINO i CoreML. Hot-Swapping i współdzielenie GPU to mechanizmy Tritona.", src: "W12, slajd 370", note: "W12-finops-optymalizacja" },

  { id: "W12-17", w: "W12", c: "onnx-opt", type: "single",
    q: "Jak nazywa się optymalizacja grafowa ONNX Runtime, która łączy wiele operacji w jeden zoptymalizowany kernel?",
    options: ["Operator Fusion", "Constant Folding", "Dead Code Elimination", "Kernel Auto-Tuning"],
    correct: [0], explain: "Constant Folding przelicza stałe przy kompilacji. Dead Code Elimination usuwa nieużywane ścieżki.", src: "W12, slajd 370", note: "W12-finops-optymalizacja" },

  { id: "W12-42", w: "W12", c: "onnx-opt", type: "single",
    q: "Na czym polega Constant Folding w ONNX Runtime?",
    options: ["Na łączeniu wielu operacji w jeden zoptymalizowany kernel", "Na usuwaniu nieużywanych ścieżek obliczeniowych", "Na przeliczeniu stałych części grafu przy kompilacji", "Na zerowaniu indywidualnych wag modelu"],
    correct: [2], explain: "Constant Folding przelicza stałe fragmenty grafu na etapie kompilacji. Łączenie operacji to Operator Fusion.", src: "W12, slajd 370", note: "W12-finops-optymalizacja" },

  { id: "W12-43", w: "W12", c: "onnx-opt", type: "single",
    q: "Co NIE jest optymalizacją grafową w ONNX Runtime?",
    options: ["Operator Fusion", "Constant Folding", "Kernel Auto-Tuning", "Dead Code Elimination"],
    correct: [2], explain: "Kernel Auto-Tuning to mechanizm TensorRT. ONNX Runtime robi Operator Fusion, Constant Folding i Dead Code Elimination.", src: "W12, slajd 370, 372", note: "W12-finops-optymalizacja" },

  { id: "W12-18", w: "W12", c: "tensorrt", type: "single",
    q: "Jak nazywa się mechanizm TensorRT, który automatycznie dobiera najwydajniejsze algorytmy CUDA pod konkretną architekturę karty?",
    options: ["Operator Fusion", "Kernel Auto-Tuning", "Concurrent Model Execution", "Dynamic Batching"],
    correct: [1], explain: "Kernel Auto-Tuning dobiera algorytmy np. pod Ampere lub Hopper.", src: "W12, slajd 372", note: "W12-finops-optymalizacja" },

  { id: "W12-44", w: "W12", c: "tensorrt", type: "single",
    q: "Czym według wykładu jest NVIDIA TensorRT SDK?",
    options: ["Otwartym standardem serwowania modeli w kontenerach", "Uniwersalnym, otwartym formatem reprezentacji modeli", "Kompilatorem do niskopoziomowej optymalizacji na GPU", "Autoskalerem Kubernetes opartym na zdarzeniach"],
    correct: [2], explain: "TensorRT to kompilator sprzętowy dla GPU NVIDIA. Triton to serwer, ONNX to format, KEDA to autoskaler.", src: "W12, slajd 372", note: "W12-finops-optymalizacja" },

  { id: "W12-45", w: "W12", c: "tensorrt", type: "single",
    q: "Co robi Kernel Auto-Tuning w TensorRT?",
    options: ["Dobiera algorytmy CUDA pod architekturę karty GPU", "Łączy wiele operacji w jeden zoptymalizowany kernel", "Łączy zapytania od wielu użytkowników w jedną partię", "Usuwa nieużywane ścieżki obliczeniowe z grafu modelu"],
    correct: [0], explain: "Kernel Auto-Tuning wybiera najwydajniejsze algorytmy CUDA, np. pod Ampere lub Hopper. Łączenie operacji to Operator Fusion.", src: "W12, slajd 372", note: "W12-finops-optymalizacja" },

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

  { id: "W12-46", w: "W12", c: "pruning", type: "single",
    q: "Jak nazywa się fizyczne usuwanie całych kanałów, filtrów lub głowic uwagi z sieci?",
    options: ["Pruning niestrukturalny", "Pruning strukturalny", "Destylacja wiedzy", "Dead Code Elimination"],
    correct: [1], explain: "Pruning strukturalny usuwa całe kanały, filtry lub głowice. Niestrukturalny zeruje pojedyncze wagi.", src: "W12, slajd 373", note: "W12-finops-optymalizacja" },

  { id: "W12-47", w: "W12", c: "pruning", type: "single",
    q: "Jaki wynik daje pruning strukturalny według wykładu?",
    options: ["Rzadkie macierze, które wymagają wsparcia cusPARSE", "Wagi INT8 i aktywacje kwantyzowane w locie", "Mały model Ucznia uczony na miękkich etykietach", "Mniejszą, gęstą sieć na dowolnym procesorze"],
    correct: [3], explain: "Strukturalny daje mniejszą, gęstą sieć działającą wszędzie. Rzadkie macierze to efekt pruningu niestrukturalnego.", src: "W12, slajd 373", note: "W12-finops-optymalizacja" },

  { id: "W12-22", w: "W12", c: "destylacja", type: "single",
    q: "Która technika używa „miękkich etykiet” (Soft Targets) i funkcji straty KL-Divergence?",
    options: ["Kwantyzacja QAT", "Pruning niestrukturalny", "Destylacja wiedzy", "Constant Folding"],
    correct: [2], explain: "Destylacja przenosi wiedzę z dużego Nauczyciela do małego Ucznia.", src: "W12, slajd 373", note: "W12-finops-optymalizacja" },

  { id: "W12-48", w: "W12", c: "destylacja", type: "single",
    q: "Na czym polega destylacja wiedzy (Teacher–Student)?",
    options: ["Na zerowaniu indywidualnych wag dużego modelu", "Na transferze wiedzy z Nauczyciela do małego Ucznia", "Na symulacji błędów kwantyzacji podczas treningu", "Na łączeniu wielu operacji w jeden zoptymalizowany kernel"],
    correct: [1], explain: "Destylacja przenosi wiedzę z potężnego Nauczyciela do małego Ucznia. Symulacja błędów kwantyzacji to QAT.", src: "W12, slajd 373", note: "W12-finops-optymalizacja" },

  { id: "W12-49", w: "W12", c: "destylacja", type: "single",
    q: "Jaki cel pruningu i destylacji wiedzy podaje wykład?",
    options: ["Współdzielenie jednej karty GPU przez wiele modeli", "Eliminację przywiązania do dostawcy (Vendor Lock-in)", "Maksymalizację przepustowości przez grupowanie zapytań", "Uruchomienie AI na tanich CPU lub urządzeniach Edge"],
    correct: [3], explain: "Celem jest zaawansowane AI na tanich instancjach CPU lub urządzeniach brzegowych (Edge AI).", src: "W12, slajd 373", note: "W12-finops-optymalizacja" },

  { id: "W12-23", w: "W12", c: "keda", type: "single",
    q: "Na podstawie czego skaluje KEDA, w odróżnieniu od tradycyjnego HPA?",
    options: ["Wyłącznie użycia CPU i RAM w Podach", "Zdarzeń, np. liczby wiadomości w kolejce", "Liczby tagów zasobów w przestrzeni nazw", "Rozmiaru obrazu kontenera w rejestrze"],
    correct: [1], explain: "KEDA skaluje np. po kolejce Kafka/RabbitMQ lub metrykach Prometheus. HPA po CPU/RAM zawodzi przy asynchronicznym AI.", src: "W12, slajd 374", note: "W12-finops-optymalizacja" },

  { id: "W12-50", w: "W12", c: "keda", type: "single",
    q: "Jak nazywa się mechanizm skalowania w Kubernetes oparty na zdarzeniach i metrykach biznesowych?",
    options: ["HPA", "Kubecost", "KEDA", "Seekable OCI"],
    correct: [2], explain: "KEDA to Kubernetes Event-driven Autoscaling. HPA skaluje po CPU/RAM.", src: "W12, slajd 374", note: "W12-finops-optymalizacja" },

  { id: "W12-51", w: "W12", c: "keda", type: "single",
    q: "Zapytania do modelu czekają w kolejce RabbitMQ, a użycie CPU Podów jest niskie. Co skaluje repliki według długości kolejki?",
    options: ["HPA na podstawie użycia CPU i RAM", "KEDA z wyzwalaczem opartym na kolejce", "Dynamic Batching w Triton Inference Server", "Infracost uruchamiany przy Pull Request"],
    correct: [1], explain: "KEDA skaluje po liczbie wiadomości w kolejce (Kafka/RabbitMQ). HPA patrzy tylko na CPU/RAM, które tu są niskie.", src: "W12, slajd 374", note: "W12-finops-optymalizacja" },

  { id: "W12-24", w: "W12", c: "scale-to-zero", type: "single",
    q: "Które ustawienie w obiekcie ScaledObject KEDA realizuje Scale-to-Zero?",
    options: ["maxReplicaCount: 10", "minReplicaCount: 0", "threshold: '5'", "type: prometheus"],
    correct: [1], explain: "minReplicaCount: 0 pozwala całkowicie wyłączyć repliki GPU bez ruchu.", src: "W12, slajd 374–375", note: "W12-finops-optymalizacja" },

  { id: "W12-52", w: "W12", c: "scale-to-zero", type: "single",
    q: "Czym jest Scale-to-Zero, nazywane na slajdzie „Świętym Graalem FinOps”?",
    options: ["Wyłączaniem środowisk deweloperskich po godzinach pracy", "Całkowitym wyłączaniem klastrów GPU przy braku ruchu", "Zerowaniem indywidualnych wag w pruningu", "Blokowaniem wdrożeń przekraczających budżet"],
    correct: [1], explain: "Scale-to-Zero całkowicie wyłącza GPU, gdy nie ma ruchu użytkowników. Wyłączanie środowisk deweloperskich to Automatyzacja R&D.", src: "W12, slajd 374", note: "W12-finops-optymalizacja" },

  { id: "W12-53", w: "W12", c: "scale-to-zero", type: "single",
    q: "Produkcyjny serwis inferencji na GPU nie ma ruchu przez całą noc. Który mechanizm pozwala nie płacić za bezczynne GPU?",
    options: ["Dynamic Batching w Tritonie", "Concurrent Model Execution", "Scale-to-Zero w KEDA", "Kernel Auto-Tuning w TensorRT"],
    correct: [2], explain: "KEDA z minReplicaCount: 0 wyłącza wszystkie repliki GPU przy braku ruchu. Pozostałe mechanizmy działają tylko na włączonych GPU.", src: "W12, slajd 374–375", note: "W12-finops-optymalizacja" },

  { id: "W12-25", w: "W12", c: "cost-gating", type: "single",
    q: "Jak nazywa się blokowanie wdrożenia modelu, gdy szacowany koszt na zapytanie przekracza budżet projektu?",
    options: ["Cost Gating", "Over-provisioning", "Model Hot-Swapping", "Tagowanie zasobów"],
    correct: [0], explain: "Cost Gating to bramkowanie kosztowe w ramach Shift-Left FinOps w potoku CD4ML.", src: "W12, slajd 376", note: "W12-finops-optymalizacja" },

  { id: "W12-54", w: "W12", c: "cost-gating", type: "single",
    q: "Co robi bramkowanie kosztowe (Cost Gating) w potoku CD4ML?",
    options: ["Przypisuje koszty do projektu, środowiska i właściciela", "Blokuje wdrożenie przy koszcie zapytania ponad budżet", "Wyłącza środowiska deweloperskie poza godzinami pracy", "Skaluje repliki GPU do zera przy braku ruchu"],
    correct: [1], explain: "Cost Gating zatrzymuje wdrożenie, jeśli szacowany koszt na zapytanie przekracza budżet projektu. Przypisywanie kosztów to tagowanie.", src: "W12, slajd 376", note: "W12-finops-optymalizacja" },

  { id: "W12-55", w: "W12", c: "cost-gating", type: "single",
    q: "Kiedy uruchamia się potok „Model Cost Regression Gating” z przykładu GitHub Actions?",
    options: ["Po wdrożeniu modelu na produkcję", "Co noc, poza godzinami pracy", "Przy każdym pull request", "Przy 5 oczekujących zapytaniach"],
    correct: [2], explain: "Wyzwalacz to on: [pull_request], więc koszty i VRAM są sprawdzane przed wdrożeniem. To Shift-Left FinOps.", src: "W12, slajd 376–377", note: "W12-finops-optymalizacja" },
]});
