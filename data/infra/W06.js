(window.QUIZ_DATA ||= []).push({ subject: "infra", questions: [
  // ===== W06 — Architektura serwerowa dla systemów sztucznej inteligencji =====
  { id: "W06-01", w: "W06", c: "klaster-hpc", type: "single",
    q: "Homogeniczny zespół węzłów obliczeniowych połączonych siecią o niskiej latencji, działający jako zunifikowany superkomputer, to:",
    options: ["Topologia Leaf-Spine", "Podsystem akceleratora", "Klaster HPC dla AI", "Domena NUMA"],
    correct: [2], explain: "Tak wykład definiuje klaster HPC dla AI. Leaf-Spine to tylko topologia sieci między węzłami.", src: "W06, slajd 231", note: "W06-architektura-serwerowa" },

  { id: "W06-26", w: "W06", c: "klaster-hpc", type: "single",
    q: "Czym według wykładu jest klaster HPC dla AI?",
    options: ["Heterogeniczny zbiór serwerów Enterprise 2U w sieci 10GbE", "Płyta bazowa z 8 GPU spiętymi dedykowaną magistralą", "Hierarchia przełączników o równej przepustowości między węzłami", "Homogeniczny zespół węzłów działający jak jeden superkomputer"],
    correct: [3], explain: "Klaster HPC dla AI to homogeniczne węzły w sieci o niskiej latencji, działające jako zunifikowany superkomputer. Płyta z 8 GPU to podsystem akceleratora jednego węzła.", src: "W06, slajd 231", note: "W06-architektura-serwerowa" },

  { id: "W06-02", w: "W06", c: "filary", type: "single",
    q: "Co NIE jest jednym z czterech filarów klastra HPC dla AI?",
    options: ["Akceleracja (Compute)", "Pamięć (VRAM/HBM)", "Połączenia (Interconnect)", "Wirtualizacja (Hypervisor)"],
    correct: [3], explain: "Cztery filary to Compute, VRAM/HBM, Interconnect i Parallel Storage. Hypervisora wśród nich nie ma.", src: "W06, slajd 231", note: "W06-architektura-serwerowa" },

  { id: "W06-27", w: "W06", c: "filary", type: "single",
    q: "Do którego z czterech filarów klastra HPC dla AI należą NVLink i InfiniBand?",
    options: ["Akceleracja (Compute)", "Pamięć (VRAM/HBM)", "Połączenia (Interconnect)", "Pamięć masowa (Parallel Storage)"],
    correct: [2], explain: "NVLink i InfiniBand to interkonekty: wewnątrz węzła i między węzłami. Należą do filaru Połączenia (Interconnect).", src: "W06, slajd 231, 233", note: "W06-architektura-serwerowa" },

  { id: "W06-03", w: "W06", c: "arch-procesory", type: "single",
    q: "Który model wykonania przypisano GPU, które ukrywa opóźnienia pamięci przełączaniem kontekstu tysięcy wątków?",
    options: ["MIMD", "SIMT", "Systolic Array", "NUMA"],
    correct: [1], explain: "GPU to SIMT. MIMD to CPU, a Systolic Array to TPU/NPU.", src: "W06, slajd 234", note: "W06-architektura-serwerowa" },

  { id: "W06-04", w: "W06", c: "arch-procesory", type: "single",
    q: "W którym układzie dane i wagi przepływają falowo bezpośrednio między komórkami obliczeniowymi, redukując odczyt i zapis do rejestrów?",
    options: ["CPU (MIMD)", "GPU (Streaming Multiprocessors)", "TPU (macierz skurczowa)", "NVSwitch"],
    correct: [2], explain: "To mechanizm macierzy skurczowej (Systolic Array) w TPU. Jej celem są operacje macierzowe (GEMM).", src: "W06, slajd 235–236", note: "W06-architektura-serwerowa" },

  { id: "W06-05", w: "W06", c: "tensor-core", type: "single",
    q: "Co wykonują rdzenie tensorowe (Tensor Cores) w jednym cyklu zegara?",
    options: ["Operację FMA D = A × B + C", "Przełączanie kontekstu tysięcy wątków", "Predykcję skoków", "Transfer VRAM-do-VRAM"],
    correct: [0], explain: "Tensor Cores to jednostki sprzętowe do FMA w jednym cyklu. Predykcja skoków to cecha CPU.", src: "W06, slajd 234", note: "W06-architektura-serwerowa" },

  { id: "W06-28", w: "W06", c: "tensor-core", type: "single",
    q: "Jednostki sprzętowe wykonujące operacje FMA (D = A × B + C) w jednym cyklu zegara to:",
    options: ["Streaming Multiprocessors (SM)", "Macierze skurczowe (Systolic Arrays)", "Rdzenie tensorowe (Tensor Cores)", "Jednostki ALU rdzenia CPU"],
    correct: [2], explain: "To Tensor Cores, wbudowane w GPU obok bloków SM. Macierze skurczowe to architektura TPU/NPU.", src: "W06, slajd 234", note: "W06-architektura-serwerowa" },

  { id: "W06-06", w: "W06", c: "host-rola", type: "single",
    q: "Jaką rolę pełnią procesory hosta (x86 lub ARM) w węźle HGX?",
    options: ["Główna jednostka obliczeniowa dla wag modelu", "Orkiestratory ruchu, zarządzanie OS i I/O", "Przełącznik P2P między wszystkimi GPU", "Bufor danych dla pamięci HBM"],
    correct: [1], explain: "CPU hosta zarządza OS i I/O. Na schemacie wprost: nie główne jednostki obliczeniowe dla wag modelu.", src: "W06, slajd 237–238", note: "W06-architektura-serwerowa" },

  { id: "W06-29", w: "W06", c: "host-rola", type: "single",
    q: "Które zadanie NIE należy do procesorów hosta (x86 lub ARM) w węźle AI?",
    options: ["Zarządzanie systemem operacyjnym", "Obsługa operacji wejścia/wyjścia (I/O)", "Orkiestracja ruchu danych w węźle", "Obliczenia na wagach modelu"],
    correct: [3], explain: "Host zarządza OS i I/O jako orkiestrator ruchu. Schemat HGX mówi wprost, że to nie główne jednostki obliczeniowe dla wag modelu.", src: "W06, slajd 237–238", note: "W06-architektura-serwerowa" },

  { id: "W06-07", w: "W06", c: "nvswitch", type: "single",
    q: "Który układ na płycie głównej umożliwia pełną komunikację P2P między wszystkimi GPU w węźle?",
    options: ["PCIe Switch", "NIC ConnectX", "NVSwitch", "UPI"],
    correct: [2], explain: "NVSwitch spina GPU w siatkę NVLink. UPI łączy procesory hosta Intel, ConnectX to karty sieciowe.", src: "W06, slajd 240", note: "W06-architektura-serwerowa" },

  { id: "W06-30", w: "W06", c: "nvswitch", type: "single",
    q: "Czym jest NVSwitch w węźle obliczeniowym AI?",
    options: ["Przełącznik PCIe do komunikacji z dyskami NVMe", "Układ dający pełną komunikację P2P między GPU", "Karta sieciowa obsługująca InfiniBand lub Ethernet", "Interkonekt między procesorami hosta (UPI)"],
    correct: [1], explain: "NVSwitch to układ na płycie łączący wszystkie GPU w węźle. Na schemacie HGX cztery takie układy spinają siatkę NVLink.", src: "W06, slajd 238–240", note: "W06-architektura-serwerowa" },

  { id: "W06-08", w: "W06", c: "pcie-nvlink", type: "single",
    q: "Dlaczego PCIe Gen 5 jest wąskim gardłem przy synchronizacji gradientów między GPU?",
    options: ["Nie obsługuje transferu do pamięci HBM w GPU", "Ma maks. 64 GB/s, a dane idą przez Host CPU i RAM", "Wymaga priorytetyzacji ruchu PFC w sieci", "Działa tylko między węzłami, nie wewnątrz"],
    correct: [1], explain: "PCIe ma do 64 GB/s i złożoną ścieżkę przez CPU i RAM. NVLink daje 900 GB/s i transfer VRAM-do-VRAM.", src: "W06, slajd 240–242", note: "W06-architektura-serwerowa" },

  { id: "W06-31", w: "W06", c: "pcie-nvlink", type: "single",
    q: "Ile razy NVLink 4 (Hopper) przewyższa przepustowością PCIe Gen 5 x16 według wykładu?",
    options: ["Ponad 2 razy", "Ponad 4 razy", "Ponad 14 razy", "Ponad 50 razy"],
    correct: [2], explain: "NVLink 4 daje 900 GB/s na GPU, a PCIe Gen 5 x16 64 GB/s. To ponad 14-krotna różnica.", src: "W06, slajd 240", note: "W06-architektura-serwerowa" },

  { id: "W06-32", w: "W06", c: "pcie-nvlink", type: "single",
    q: "Co według wykładu wyróżnia ścieżkę przesyłu NVLink z NVSwitch na tle PCIe?",
    options: ["Transfer VRAM-do-VRAM z pominięciem CPU i RAM", "Dane przechodzą przez Host CPU i pamięć RAM", "Bezstratna sieć z priorytetyzacją ruchu PFC", "Transfer do VRAM GPU innego serwera przez sieć"],
    correct: [0], explain: "NVLink z NVSwitch daje uproszczoną ścieżkę VRAM-do-VRAM. Przez Host CPU i RAM przechodzi tradycyjna magistrala PCIe.", src: "W06, slajd 241–242", note: "W06-architektura-serwerowa" },

  { id: "W06-09", w: "W06", c: "memory-wall", type: "single",
    q: "Moc obliczeniowa rośnie szybciej niż przepustowość tradycyjnych pamięci DRAM. Jak nazywa się ten problem?",
    options: ["I/O Starvation", "Memory Wall", "Underutilization", "Network Congestion"],
    correct: [1], explain: "To Memory Wall. Odpowiedzią na nią jest pamięć HBM.", src: "W06, slajd 243", note: "W06-architektura-serwerowa" },

  { id: "W06-33", w: "W06", c: "memory-wall", type: "single",
    q: "Na czym polega problem Memory Wall (Ściana Pamięci)?",
    options: ["Akceleratory czekają na dane z wolnych macierzy dyskowych", "Moc obliczeniowa rośnie szybciej niż przepustowość DRAM", "Potężne GPU marnuje się na małe zadania inferencyjne", "Modele LLM nie mieszczą się w pamięci jednego GPU"],
    correct: [1], explain: "Memory Wall to wolniejszy wzrost przepustowości DRAM niż mocy obliczeniowej. Czekanie na dyski to I/O Starvation.", src: "W06, slajd 243", note: "W06-architektura-serwerowa" },

  { id: "W06-10", w: "W06", c: "hbm", type: "single",
    q: "Czym jest HBM (High Bandwidth Memory)?",
    options: ["Pionowe stosy DRAM na wspólnym podłożu z rdzeniem GPU", "Pamięć cache L3 wbudowana w rdzeń procesora hosta", "Równoległy system plików z serwerami metadanych", "Moduły DDR5 RAM w gniazdach płyty głównej hosta"],
    correct: [0], explain: "HBM to stosy DRAM obok GPU, łączone przez Silicon Interposer i TSV. Daje ponad 3–4 TB/s.", src: "W06, slajd 243", note: "W06-architektura-serwerowa" },

  { id: "W06-11", w: "W06", c: "hbm", type: "single",
    q: "Co w pakowaniu 2.5D/3D pozwala uzyskać ekstremalnie szerokie magistrale pamięci HBM?",
    options: ["Połączenia NVLink i NVSwitch", "Magistrale UPI i Infinity Fabric", "Silicon Interposer i przelotki TSV", "Protokół RoCE v2 z kontrolą PFC"],
    correct: [2], explain: "Silicon Interposer i TSV to technologia 2.5D/3D Packaging. NVLink łączy całe GPU, nie stosy pamięci.", src: "W06, slajd 243–245", note: "W06-architektura-serwerowa" },

  { id: "W06-12", w: "W06", c: "ib-roce", type: "single",
    q: "Implementacja protokołu RDMA w sieciach Ethernet, wymagająca wsparcia dla priorytetyzacji ruchu (PFC), to:",
    options: ["InfiniBand", "RoCE v2", "GPUDirect RDMA", "10GbE z TCP/IP"],
    correct: [1], explain: "RoCE v2 = RDMA over Converged Ethernet. InfiniBand to osobna, natywna sieć HPC.", src: "W06, slajd 246", note: "W06-architektura-serwerowa" },

  { id: "W06-13", w: "W06", c: "ib-roce", type: "single",
    q: "Klaster ma tysiące węzłów, a priorytetem jest najwyższa stabilność sieci. Co wybrać według wykładu?",
    options: ["RoCE v2", "Tradycyjny Ethernet z TCP/IP", "InfiniBand", "PCIe Gen 5"],
    correct: [2], explain: "InfiniBand daje najwyższą stabilność w skali tysięcy węzłów. RoCE v2 to tańsza opcja dla mniejszych klastrów.", src: "W06, slajd 246", note: "W06-architektura-serwerowa" },

  { id: "W06-14", w: "W06", c: "rdma", type: "single",
    q: "Mechanizm pozwalający karcie sieciowej bezpośrednio czytać i zapisywać pamięć zdalnego węzła bez udziału CPU (Kernel Bypass) to:",
    options: ["Zero-Copy", "RDMA", "Overlapping", "Ring-AllReduce"],
    correct: [1], explain: "To RDMA. Zero-Copy to tylko eliminacja kopiowania między buforami użytkownika a jądrem.", src: "W06, slajd 247", note: "W06-architektura-serwerowa" },

  { id: "W06-15", w: "W06", c: "rdma", type: "single",
    q: "Dane mają trafić z VRAM GPU jednego serwera do VRAM GPU drugiego serwera przez PCIe i sieć. Jak nazywa się ta technologia?",
    options: ["GPUDirect RDMA", "NVLink i NVSwitch", "MIG (Multi-Instance GPU)", "Device Plugin"],
    correct: [0], explain: "GPUDirect RDMA łączy VRAM różnych serwerów. Zysk to ok. 70% mniej opóźnień.", src: "W06, slajd 247", note: "W06-architektura-serwerowa" },

  { id: "W06-16", w: "W06", c: "nccl", type: "single",
    q: "Który algorytm NCCL pozwala synchronizować gradienty z prędkością niezależną od liczby GPU w klastrze?",
    options: ["Pipeline Parallelism", "Job Step", "Ring-AllReduce", "ZeRO"],
    correct: [2], explain: "Ring-AllReduce to topologia synchronizacji gradientów. Job Step to pojęcie Slurma, ZeRO to fragmentacja stanów.", src: "W06, slajd 248", note: "W06-architektura-serwerowa" },

  { id: "W06-34", w: "W06", c: "nccl", type: "single",
    q: "Który klasyczny standard HPC służy głównie do orkiestracji procesów i komunikacji na CPU?",
    options: ["NVIDIA NCCL", "PyTorch DDP", "RDMA", "MPI"],
    correct: [3], explain: "MPI to klasyczny standard HPC, używany głównie na CPU. NCCL to komunikacja zbiorcza zoptymalizowana dla GPU.", src: "W06, slajd 248", note: "W06-architektura-serwerowa" },

  { id: "W06-35", w: "W06", c: "nccl", type: "single",
    q: "Którą ścieżkę komunikacji NCCL wybiera automatycznie?",
    options: ["NVLink wewnątrz węzła, InfiniBand na zewnątrz", "InfiniBand wewnątrz węzła, NVLink na zewnątrz", "PCIe wewnątrz węzła, Ethernet TCP/IP na zewnątrz", "NVLink zarówno wewnątrz, jak i na zewnątrz węzła"],
    correct: [0], explain: "NCCL sam wykrywa najlepszą ścieżkę. NVLink działa wewnątrz węzła, InfiniBand między węzłami.", src: "W06, slajd 248", note: "W06-architektura-serwerowa" },

  { id: "W06-17", w: "W06", c: "ddp", type: "single",
    q: "Dlaczego PyTorch DDP stosuje architekturę wieloprocesową (jeden proces na GPU)?",
    options: ["Aby eliminować blokadę GIL Pythona", "Aby ominąć wąskie gardło magistrali PCIe", "Aby podzielić każde GPU na instancje MIG", "Aby zastąpić komunikację NCCL przez MPI"],
    correct: [0], explain: "Jeden proces na GPU eliminuje GIL. Komunikację DDP robi NCCL, nakładana na Backward Pass.", src: "W06, slajd 249", note: "W06-architektura-serwerowa" },

  { id: "W06-36", w: "W06", c: "ddp", type: "single",
    q: "Która zmienna kontrolna PyTorch DDP oznacza łączną liczbę GPU w klastrze?",
    options: ["RANK", "MASTER_ADDR", "LOCAL_RANK", "WORLD_SIZE"],
    correct: [3], explain: "WORLD_SIZE to łączna liczba GPU. RANK to globalny ID procesu, a MASTER_ADDR to adres węzła koordynującego.", src: "W06, slajd 249", note: "W06-architektura-serwerowa" },

  { id: "W06-37", w: "W06", c: "ddp", type: "single",
    q: "Czym jest Overlapping w treningu PyTorch DDP?",
    options: ["Uruchamianie jednego procesu na każdym GPU w węźle", "Podział warstw modelu między różne serwery", "Nakładanie komunikacji NCCL na obliczenia wsteczne", "Fragmentacja stanów optymalizatora między GPU"],
    correct: [2], explain: "Overlapping nakłada komunikację sieciową (NCCL) na Backward Pass. Jeden proces na GPU to cecha samej architektury DDP.", src: "W06, slajd 249", note: "W06-architektura-serwerowa" },

  { id: "W06-18", w: "W06", c: "topologie", type: "single",
    q: "Ile musi wynosić współczynnik nadsubskrypcji (Oversubscription) sieci w treningu AI?",
    options: ["1:1", "2:1", "4:1", "1:7"],
    correct: [0], explain: "Trening AI wymaga sieci bezblokadowej, czyli 1:1.", src: "W06, slajd 251", note: "W06-architektura-serwerowa" },

  { id: "W06-19", w: "W06", c: "topologie", type: "single",
    q: "W której topologii każdy przełącznik liścia jest połączony z każdym przełącznikiem rdzenia?",
    options: ["Fat-Tree", "DragonFly", "Leaf-Spine", "Ring-AllReduce"],
    correct: [2], explain: "To Leaf-Spine, nowoczesny standard DC AI. DragonFly jest dla skal >10 000 GPU.", src: "W06, slajd 251", note: "W06-architektura-serwerowa" },

  { id: "W06-20", w: "W06", c: "slurm", type: "single",
    q: "Co w Slurm oznacza pojęcie Job Step?",
    options: ["Rezerwacja jednego GPU na określoną liczbę godzin", "Podział zadania na równoległe procesy na wielu węzłach", "Jeden krok gradientu w pętli treningowej modelu", "Kolejka zadań czekających na wolny węzeł"],
    correct: [1], explain: "Job Step dzieli zadanie na równoległe procesy na wielu węzłach. Slurm to standard dla klastrów Bare-Metal.", src: "W06, slajd 252", note: "W06-architektura-serwerowa" },

  { id: "W06-38", w: "W06", c: "slurm", type: "single",
    q: "Do czego według wykładu służy Slurm Workload Manager?",
    options: ["Zarządzanie zasobami w klastrach Bare-Metal", "Automatyzacja stosu sterowników GPU w Kubernetesie", "Weryfikacja przepustowości sieci przed treningiem", "Komunikacja zbiorcza GPU (All-Reduce, Broadcast)"],
    correct: [0], explain: "Slurm to standard branżowy w klastrach Bare-Metal: kolejkuje zadania, rezerwuje GPU i orkiestruje wiele węzłów. Sterowniki GPU w K8s automatyzuje GPU Operator.", src: "W06, slajd 252", note: "W06-architektura-serwerowa" },

  { id: "W06-39", w: "W06", c: "slurm", type: "single",
    q: "Ile GPU łącznie zarezerwuje komenda: srun --nodes=4 --ntasks-per-node=8 --gpus-per-node=8 python train.py?",
    options: ["8", "32", "64", "256"],
    correct: [1], explain: "4 węzły po 8 GPU (--gpus-per-node=8) to 32 GPU. --ntasks-per-node=8 to liczba procesów na węzeł, a nie dodatkowe GPU.", src: "W06, slajd 252", note: "W06-architektura-serwerowa" },

  { id: "W06-21", w: "W06", c: "k8s-gpu", type: "single",
    q: "Który mechanizm pozwala Kubeletowi reklamować zasób nvidia.com/gpu?",
    options: ["Device Plugins", "Slurm srun", "Attestation", "NCCL Tests"],
    correct: [0], explain: "Natywny K8s widzi tylko CPU/RAM. Device Plugin, instalowany przez GPU Operator, dodaje zasób GPU.", src: "W06, slajd 253", note: "W06-architektura-serwerowa" },

  { id: "W06-40", w: "W06", c: "k8s-gpu", type: "single",
    q: "Co według wykładu robi NVIDIA GPU Operator?",
    options: ["Dzieli sprzętowo GPU na maks. 7 izolowanych instancji", "Automatyzuje stos sterowników GPU na węzłach roboczych", "Kolejkuje zadania i rezerwuje GPU w klastrach Bare-Metal", "Szyfruje dane wewnątrz akceleratora podczas obliczeń"],
    correct: [1], explain: "GPU Operator automatyzuje Driver, Container Runtime i Device Plugin na węzłach. Sprzętowy podział GPU to MIG, a kolejkowanie zadań to Slurm.", src: "W06, slajd 253", note: "W06-architektura-serwerowa" },

  { id: "W06-41", w: "W06", c: "k8s-gpu", type: "single",
    q: "Jak według wykładu rezerwuje się akcelerator GPU w manifeście YAML Kubernetesa?",
    options: ["Przez limits i requests", "Przez flagę --gpus-per-node", "Przez zmienną WORLD_SIZE", "Przez komendę nvidia-smi topo -m"],
    correct: [0], explain: "W manifeście YAML akcelerator rezerwuje się przez limits i requests. --gpus-per-node to flaga srun w Slurmie.", src: "W06, slajd 253", note: "W06-architektura-serwerowa" },

  { id: "W06-22", w: "W06", c: "pfs", type: "single",
    q: "Na czym polega architektura Parallel File Systems (np. Lustre)?",
    options: ["Na kopiowaniu pełnego modelu na lokalny dysk każdego GPU", "Na oddzieleniu metadanych od surowych bloków danych", "Na szyfrowaniu danych wewnątrz pamięci akceleratora", "Na trzymaniu całego zbioru danych w pamięci HBM"],
    correct: [1], explain: "PFS oddziela metadane od danych. Dzięki temu tysiące procesów czytają dane z przepustowością TB/s.", src: "W06, slajd 254", note: "W06-architektura-serwerowa" },

  { id: "W06-42", w: "W06", c: "pfs", type: "single",
    q: "Akceleratory GPU głodują (I/O Starvation), czekając na dane z wolnych macierzy dyskowych. Co stosuje się według wykładu?",
    options: ["Parallel File System (Lustre)", "Pamięć HBM z przelotkami TSV", "Partycjonowanie GPU przez MIG", "Topologię sieci typu DragonFly"],
    correct: [0], explain: "Na I/O Starvation odpowiedzią są Parallel File Systems: Lustre, WEKA, GPFS. HBM rozwiązuje Memory Wall, a nie wolne dyski.", src: "W06, slajd 254", note: "W06-architektura-serwerowa" },

  { id: "W06-23", w: "W06", c: "3d-parallelism", type: "single",
    q: "Który rodzaj równoległości dzieli operacje mnożenia macierzy wewnątrz warstwy?",
    options: ["Data Parallelism", "Tensor Parallelism", "Pipeline Parallelism", "ZeRO"],
    correct: [1], explain: "TP dzieli macierze wewnątrz warstwy. PP dzieli całe warstwy między serwery.", src: "W06, slajd 255", note: "W06-architektura-serwerowa" },

  { id: "W06-24", w: "W06", c: "3d-parallelism", type: "single",
    q: "Chcesz oszczędzić VRAM przez fragmentację stanów optymalizatora i gradientów. Co stosujesz?",
    options: ["Pipeline Parallelism", "Data Parallelism", "Zero Redundancy Optimizer", "MIG (Multi-Instance GPU)"],
    correct: [2], explain: "ZeRO fragmentuje stany optymalizatora i gradienty. DP przeciwnie kopiuje cały model na każde GPU.", src: "W06, slajd 255", note: "W06-architektura-serwerowa" },

  { id: "W06-25", w: "W06", c: "mig", type: "single",
    q: "Co jest prawdą o MIG (Multi-Instance GPU)?",
    options: ["Programowo współdzieli GPU w czasie na poziomie hypervisora", "Sprzętowo dzieli GPU na max. 7 izolowanych instancji", "Łączy wiele GPU przez NVLink w jedną logiczną kartę", "Zwiększa pojemność VRAM przez pamięć RAM hosta"],
    correct: [1], explain: "MIG to partycjonowanie sprzętowe z własnymi SM, pamięcią i cache. Współdzielenie w czasie to vGPU.", src: "W06, slajd 258", note: "W06-architektura-serwerowa" },

  { id: "W06-43", w: "W06", c: "mig", type: "single",
    q: "Czym według wykładu jest NVIDIA vGPU?",
    options: ["Sprzętowym podziałem GPU na maks. 7 instancji", "Przesyłem danych z VRAM do VRAM innego serwera", "Szyfrowaniem danych wewnątrz pamięci akceleratora", "Programową wirtualizacją dzielącą GPU w czasie"],
    correct: [3], explain: "vGPU to wirtualizacja programowa na poziomie hypervisora, współdzieląca zasoby w czasie. Sprzętowy podział na maks. 7 instancji to MIG.", src: "W06, slajd 258", note: "W06-architektura-serwerowa" },

  { id: "W06-44", w: "W06", c: "mig", type: "single",
    q: "Małe zadania inferencyjne marnują GPU H100, a każdy użytkownik wymaga pełnej izolacji błędów i gwarantowanego QoS. Co wybrać?",
    options: ["NVIDIA vGPU", "MIG", "GPUDirect RDMA", "Tensor Parallelism"],
    correct: [1], explain: "MIG daje pełną izolację błędów i gwarantowaną wydajność (QoS) każdemu użytkownikowi. vGPU tylko współdzieli zasoby w czasie.", src: "W06, slajd 258", note: "W06-architektura-serwerowa" },
]});
