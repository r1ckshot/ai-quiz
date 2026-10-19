(window.QUIZ_DATA ||= []).push({ subject: "infra", questions: [
  // ===== W02 — Podstawowe modele obliczeniowe w chmurze dla AI =====
  { id: "W02-01", w: "W02", c: "shared-resp", type: "single",
    q: "W modelu współdzielonej odpowiedzialności: dostawca zarządza sprzętem, a użytkownik instaluje OS, stos CUDA i biblioteki. Który to model?",
    options: ["On-Premises", "IaaS", "PaaS", "Serverless / FaaS"],
    correct: [1], explain: "W IaaS dostawca daje tylko krzem. CUDA, biblioteki i runtime instaluje użytkownik.", src: "W02, slajd 39, 41", note: "W02-modele-obliczeniowe" },

  { id: "W02-02", w: "W02", c: "shared-resp", type: "single",
    q: "Co zostaje po stronie użytkownika w modelu PaaS (np. SageMaker, Vertex AI)?",
    options: ["Sprzęt, OS i sterowniki GPU", "Tylko stos CUDA i biblioteki", "Kod i definicje danych", "Chłodzenie i sieć"],
    correct: [2], explain: "PaaS przenosi runtime na dostawcę. Inżynier dostarcza tylko kod i definicje danych.", src: "W02, slajd 39, 41", note: "W02-modele-obliczeniowe" },

  { id: "W02-03", w: "W02", c: "serverless", type: "single",
    q: "Jak nazywa się mechanizm Serverless, który niszczy instancje przy braku ruchu, dając koszt operacyjny równy zero?",
    options: ["Time-Slicing", "Scale-to-Zero", "Throttling", "Auto-scaling klastrów szkoleniowych"],
    correct: [1], explain: "Scale-to-Zero to cecha Serverless/FaaS. Bez ruchu nie ma instancji ani kosztu.", src: "W02, slajd 54", note: "W02-modele-obliczeniowe" },

  { id: "W02-04", w: "W02", c: "serverless", type: "single",
    q: "Według dekalogu architekta, do jakiego scenariusza najlepiej pasuje Serverless?",
    options: ["Ciężki trening modeli LLM", "Rzadkie predykcje", "Standardowe potoki MLOps w korporacji", "Optymalizacja komunikacji NCCL"],
    correct: [1], explain: "Serverless dla rzadkich predykcji, PaaS dla standardów, IaaS dla ciężkiego R&D.", src: "W02, slajd 56, 86", note: "W02-modele-obliczeniowe" },

  { id: "W02-05", w: "W02", c: "macierz", type: "single",
    q: "Który model obliczeniowy ma według macierzy wyboru rozliczanie transakcyjne (za liczbę wywołań i milisekundy)?",
    options: ["IaaS", "PaaS", "Serverless / FaaS", "On-Premises"],
    correct: [2], explain: "Serverless: Pay-per-Execution. IaaS to opłata godzinowa, PaaS to rozliczanie mieszane.", src: "W02, slajd 57", note: "W02-modele-obliczeniowe" },

  { id: "W02-06", w: "W02", c: "macierz", type: "single",
    q: "Co NIE jest cechą IaaS według macierzy wyboru modelu obliczeniowego?",
    options: ["Pełny dostęp do roota i sysctl", "Ręczna instalacja NVIDIA Driver, CUDA, cuDNN", "Bardzo wysoki narzut administracyjny", "Zero administracji (NoOps)"],
    correct: [3], explain: "NoOps to cecha Serverless. IaaS wymaga inżynierów DevOps/SysOps.", src: "W02, slajd 57", note: "W02-modele-obliczeniowe" },

  { id: "W02-07", w: "W02", c: "cold-start", type: "single",
    q: "Która technika NIE jest podana na wykładzie jako sposób mitygacji Cold Start?",
    options: ["Kwantyzacja wag (FP32 do INT8)", "ONNX Runtime zamiast PyTorch/TensorFlow", "GraalVM Native Image (AOT)", "GPU Passthrough"],
    correct: [3], explain: "GPU Passthrough to technika wirtualizacji akceleratora. Na Cold Start działają kwantyzacja, ONNX Runtime i GraalVM.", src: "W02, slajd 55", note: "W02-modele-obliczeniowe" },

  { id: "W02-08", w: "W02", c: "cold-start", type: "single",
    q: "Czym jest Cold Start w mikrousługach AI?",
    options: ["Opóźnieniem przez alokację zasobów i ładowanie wag modelu do RAM", "Wstrzymaniem procesu po wyczerpaniu kwoty CPU", "Bezczynnym czekaniem GPU na dane od CPU", "Zabiciem procesu przez OOM Killer"],
    correct: [0], explain: "Cold Start to opóźnienie startu. Wstrzymanie po kwocie to Throttling, czekanie GPU to GPU Starvation.", src: "W02, slajd 55", note: "W02-modele-obliczeniowe" },

  { id: "W02-09", w: "W02", c: "vcpu", type: "single",
    q: "Ile fizycznych rdzeni zazwyczaj odpowiada 4 vCPU w chmurze?",
    options: ["1", "2", "4", "8"],
    correct: [1], explain: "vCPU to wątek logiczny (SMT/Hyper-Threading). 4 vCPU to zwykle 2 fizyczne rdzenie.", src: "W02, slajd 58", note: "W02-modele-obliczeniowe" },

  { id: "W02-10", w: "W02", c: "namespaces", type: "single",
    q: "Który Namespace sprawia, że proces treningowy jest widoczny wewnątrz kontenera jako PID 1?",
    options: ["NET Namespace", "MNT Namespace", "PID Namespace", "Cgroups v2"],
    correct: [2], explain: "PID Namespace izoluje numerację procesów. NET daje własną kartę sieciową, MNT własne pliki.", src: "W02, slajd 59", note: "W02-modele-obliczeniowe" },

  { id: "W02-11", w: "W02", c: "throttling", type: "single",
    q: "Wstrzymanie procesu po wyczerpaniu limitu mikrosekund w danym oknie CFS to:",
    options: ["Throttling", "Time-Slicing", "Latency Jitter", "Copy-on-Write"],
    correct: [0], explain: "CFS liczy quota w każdym period. Po wyczerpaniu kwoty proces jest dławiony (throttling).", src: "W02, slajd 60", note: "W02-modele-obliczeniowe" },

  { id: "W02-12", w: "W02", c: "gpu-starvation", type: "single",
    q: "GPU jest bezczynne, bo czeka na dane od workerów CPU. Co wskazano jako przyczynę i jak to diagnozować?",
    options: ["Za mało VRAM; nvidia-smi", "Throttling CFS w warstwie przygotowania danych; licznik nr_throttled w cgroups", "Brak MIG; UUID instancji", "Wyciek pamięci Off-Heap; Garbage Collector"],
    correct: [1], explain: "GPU Starvation wynika z dławienia CPU przez CFS. Diagnoza: licznik nr_throttled.", src: "W02, slajd 61", note: "W02-modele-obliczeniowe" },

  { id: "W02-13", w: "W02", c: "mem-limits", type: "single",
    q: "Która flaga docker run ustawia twardy limit RAM, po którym proces jest natychmiast zabijany?",
    options: ["--memory-reservation", "--memory", "--cpus", "--gpus all"],
    correct: [1], explain: "--memory to twardy limit (OOM Killer). --memory-reservation to miękki limit z ostrzeżeniem.", src: "W02, slajd 62", note: "W02-modele-obliczeniowe" },

  { id: "W02-14", w: "W02", c: "off-heap", type: "single",
    q: "Dlaczego DL4J (ND4J) alokuje tensory w pamięci Off-Heap?",
    options: ["Żeby odciążyć Garbage Collector Javy", "Żeby działać bez GPU", "Żeby pamięć była widoczna w standardowym monitoringu Javy", "Żeby uniknąć Maven"],
    correct: [0], explain: "Off-Heap omija stertę i GC. Skutek uboczny: oszukuje standardowe narzędzia monitoringu Javy.", src: "W02, slajd 49, 62–63", note: "W02-modele-obliczeniowe" },

  { id: "W02-15", w: "W02", c: "gpu-virt", type: "single",
    q: "Która technologia dzieli GPU sprzętowo na maks. 7 instancji z własnymi SM i Cache L2?",
    options: ["vGPU z Time-Slicing", "GPU Passthrough", "NVIDIA MIG", "SR-IOV"],
    correct: [2], explain: "MIG (Ampere, Hopper) to sprzętowa partycja z gwarancją QoS. vGPU dzieli w domenie czasu.", src: "W02, slajd 66", note: "W02-modele-obliczeniowe" },

  { id: "W02-16", w: "W02", c: "gpu-virt", type: "single",
    q: "Kilka VM korzysta naprzemiennie z rdzeni jednej karty, a czas odpowiedzi jest niedeterministyczny (Latency Jitter). O jakim mechanizmie mowa?",
    options: ["MIG", "vGPU z Time-Slicing", "GPU Passthrough", "Pinned Memory"],
    correct: [1], explain: "Time-Slicing w vGPU powoduje walkę o szczeliny czasowe, stąd Latency Jitter.", src: "W02, slajd 65", note: "W02-modele-obliczeniowe" },

  { id: "W02-17", w: "W02", c: "gpu-tpu", type: "single",
    q: "Która architektura opiera się na tablicy skurczowej (Systolic Array) i jednostce MXU?",
    options: ["GPU (SIMT)", "TPU (ASIC)", "CPU z NUMA", "vGPU"],
    correct: [1], explain: "TPU to ASIC z Systolic Array i MXU. GPU ma rdzenie CUDA i Tensor.", src: "W02, slajd 64", note: "W02-modele-obliczeniowe" },

  { id: "W02-18", w: "W02", c: "container-toolkit", type: "single",
    q: "Co jest mostem między sterownikami jądra na hoście a bibliotekami CUDA w kontenerze?",
    options: ["NVIDIA Container Toolkit", "OverlayFS", "tini", "Apache Maven"],
    correct: [0], explain: "Toolkit (nvidia-container-runtime, libnvidia-container) wstrzykuje GPU do kontenera.", src: "W02, slajd 67", note: "W02-modele-obliczeniowe" },

  { id: "W02-19", w: "W02", c: "pytorch-vram", type: "single",
    q: "Który mechanizm PyTorch redukuje zużycie VRAM w inferencji o ponad połowę?",
    options: ["pin_memory=True", "Caching Allocator", "torch.no_grad()", "CUDA_VISIBLE_DEVICES=0"],
    correct: [2], explain: "no_grad wyłącza gradienty. pin_memory przyspiesza transfer DMA, nie oszczędza VRAM.", src: "W02, slajd 70", note: "W02-modele-obliczeniowe" },

  { id: "W02-20", w: "W02", c: "layer-cache", type: "single",
    q: "Jaka kolejność instrukcji Dockerfile (Python) najlepiej wykorzystuje Layer Caching?",
    options: ["COPY ./src → COPY requirements.txt → RUN pip install", "COPY requirements.txt → RUN pip install → COPY ./src", "RUN pip install → COPY requirements.txt → COPY ./src", "COPY . → RUN pip install"],
    correct: [1], explain: "Order Matters: rzadko zmieniane zależności najpierw, często zmieniany kod na końcu.", src: "W02, slajd 74–75", note: "W02-modele-obliczeniowe" },

  { id: "W02-21", w: "W02", c: "volumes", type: "single",
    q: "Dlaczego plików wag .pth lub .zip nie należy składować wewnątrz kontenera?",
    options: ["Kontenery są efemeryczne, a zapis dużych plików ma narzut Copy-on-Write", "Docker nie obsługuje plików binarnych", "OverlayFS szyfruje warstwy", "Distroless nie ma systemu plików"],
    correct: [0], explain: "Kontener znika z danymi, a CoW spowalnia zapis. Rozwiązanie: wolumeny.", src: "W02, slajd 71", note: "W02-modele-obliczeniowe" },

  { id: "W02-22", w: "W02", c: "multi-stage", type: "single",
    q: "Co trafia do etapu Runner w wielofazowym budowaniu obrazu dla DL4J?",
    options: ["Pełne JDK i Maven", "Tylko binarny artefakt (uber-jar) w czystym JRE", "Kod źródłowy i pom.xml", "Wszystkie zależności z Maven Central"],
    correct: [1], explain: "Builder ma JDK i Maven. Runner dostaje tylko uber-jar, np. na obrazie distroless.", src: "W02, slajd 72–73", note: "W02-modele-obliczeniowe" },

  { id: "W02-23", w: "W02", c: "distroless", type: "single",
    q: "Obraz bez powłoki shell i bez menedżera pakietów, zawierający tylko aplikację i jej runtime, to:",
    options: ["Alpine", "Distroless", "ubuntu:latest", "nvidia/cuda devel"],
    correct: [1], explain: "Distroless (Google) nie ma shella. Alpine jest mały (ok. 5 MB), ale ma busybox.", src: "W02, slajd 76", note: "W02-modele-obliczeniowe" },

  { id: "W02-24", w: "W02", c: "pid1", type: "single",
    q: "Po co w Dockerfile ustawia się ENTRYPOINT [\"/usr/bin/tini\", \"--\"]?",
    options: ["Żeby tini był PID 1: sprząta procesy zombie i przekazuje sygnały (SIGTERM)", "Żeby przyspieszyć Layer Caching", "Żeby udostępnić GPU kontenerowi", "Żeby ograniczyć RAM kontenera"],
    correct: [0], explain: "Python/Java słabo pełnią rolę Init. tini adoptuje osierocone procesy i propaguje sygnały.", src: "W02, slajd 80–81", note: "W02-modele-obliczeniowe" },

  { id: "W02-25", w: "W02", c: "compose", type: "single",
    q: "W docker-compose.yml usługa api ma QDRANT_HOST=vector-db. Dzięki czemu to działa?",
    options: ["Dzięki depends_on", "Kontenery widzą się po nazwach usług w wewnętrznej sieci Dockera", "Dzięki NVIDIA Container Toolkit", "Dzięki wolumenowi qdrant_data"],
    correct: [1], explain: "To Service Discovery po nazwie usługi. depends_on ustala tylko kolejność startu.", src: "W02, slajd 82, 84", note: "W02-modele-obliczeniowe" },
]});
