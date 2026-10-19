(window.QUIZ_DATA ||= []).push({ subject: "infra", questions: [
  // ===== W05 — Narzędzia do zarządzania kontenerami (Kubernetes) =====
  { id: "W05-01", w: "W05", c: "control-plane", type: "single",
    q: "Który komponent Control Plane jest sercem komunikacji i jedynym punktem wejścia do klastra Kubernetes?",
    options: ["etcd", "kube-scheduler", "kube-apiserver", "kube-controller-manager"],
    correct: [2], explain: "kube-apiserver to jedyny punkt wejścia i waliduje każde żądanie. etcd tylko przechowuje stan.", src: "W05, slajd 90", note: "W05-kubernetes" },

  { id: "W05-02", w: "W05", c: "control-plane", type: "single",
    q: "Który komponent NIE należy do Control Plane, tylko działa na węźle Worker?",
    options: ["kube-controller-manager", "Kubelet", "etcd", "kube-scheduler"],
    correct: [1], explain: "Kubelet to agent na każdym Worker Node. Pozostałe trzy tworzą Control Plane.", src: "W05, slajd 90, 91", note: "W05-kubernetes" },

  { id: "W05-03", w: "W05", c: "control-plane", type: "single",
    q: "Gdzie Kubernetes przechowuje stan klastra jako „pamięć długotrwałą”?",
    options: ["W rozproszonej bazie klucz-wartość etcd", "W kube-apiserver", "W ConfigMap w przestrzeni kube-system", "W wolumenie emptyDir węzła Master"],
    correct: [0], explain: "etcd to rozproszona baza klucz-wartość ze stanem klastra.", src: "W05, slajd 90", note: "W05-kubernetes" },

  { id: "W05-04", w: "W05", c: "pod", type: "single",
    q: "Co dzielą między sobą kontenery wewnątrz jednego Poda?",
    options: ["Obraz kontenera, ale nie adres IP ani wolumeny", "Adres IP, przestrzeń nazw sieciowych i wolumeny", "Limity CPU i RAM, ale każdy ma własny IP", "Nic, każdy ma własny IP i własne wolumeny"],
    correct: [1], explain: "Pod to najmniejsza jednostka K8s. Jego kontenery dzielą IP, sieć i wolumeny.", src: "W05, slajd 96", note: "W05-kubernetes" },

  { id: "W05-05", w: "W05", c: "pod-wzorce", type: "single",
    q: "Zespół chce dodać logowanie i monitoring do kontenera z modelem bez zmiany kodu modelu. Jaki wzorzec Poda zastosować?",
    options: ["Init Container", "Adapter", "Sidecar", "ReplicaSet"],
    correct: [2], explain: "Sidecar rozszerza główny kontener (logowanie, monitoring, proxy) bez modyfikacji jego kodu.", src: "W05, slajd 98", note: "W05-kubernetes" },

  { id: "W05-06", w: "W05", c: "pod-wzorce", type: "single",
    q: "Wagi modelu trzeba pobrać, zanim wystartuje serwer inferencji. Który mechanizm do tego służy?",
    options: ["Sidecar", "Init Container", "Liveness Probe", "NodeSelector"],
    correct: [1], explain: "Init Container wykonuje zadania sekwencyjnie przed startem głównego kontenera.", src: "W05, slajd 96, 98", note: "W05-kubernetes" },

  { id: "W05-07", w: "W05", c: "limity", type: "single",
    q: "Co się stanie, gdy kontener przekroczy swój limit RAM w Kubernetes?",
    options: ["Throttling, czyli spowolnienie inferencji", "Przeniesienie Poda na inny węzeł bez restartu", "OOMKill, czyli natychmiastowe zabicie procesu", "Automatyczne zwiększenie limitu przez HPA"],
    correct: [2], explain: "Przekroczenie RAM kończy się OOMKill. Przekroczenie CPU daje tylko throttling.", src: "W05, slajd 100", note: "W05-kubernetes" },

  { id: "W05-08", w: "W05", c: "service-typy", type: "single",
    q: "Który typ Service tworzy alias DNS (rekord CNAME) dla usługi zewnętrznej, np. RDS?",
    options: ["ClusterIP", "NodePort", "LoadBalancer", "ExternalName"],
    correct: [3], explain: "ExternalName to alias DNS. ClusterIP jest wewnętrzny, NodePort otwiera port 30000-32767, LoadBalancer daje zewnętrzne IP.", src: "W05, slajd 120", note: "W05-kubernetes" },

  { id: "W05-09", w: "W05", c: "kube-proxy", type: "single",
    q: "Dlaczego tryb IPVS kube-proxy jest kluczowy dla klastrów AI z tysiącami usług?",
    options: ["Sekwencyjnie sprawdza reguły Netfilter, złożoność O(n)", "Używa tablic mieszających, złożoność O(1)", "Terminuje TLS na granicy klastra", "Routuje ruch po ścieżkach URL"],
    correct: [1], explain: "IPVS ma stały czas przekierowania dzięki tablicom mieszającym. iptables sprawdza reguły po kolei, O(n).", src: "W05, slajd 121", note: "W05-kubernetes" },

  { id: "W05-10", w: "W05", c: "ingress", type: "single",
    q: "Który obiekt pozwala kierować /api/v1 do modelu ML, a / do frontendu, za jednym publicznym IP?",
    options: ["Service typu NodePort", "Ingress", "kube-proxy w trybie iptables", "EndpointSlices"],
    correct: [1], explain: "Ingress działa w warstwie L7 i obsługuje path-based routing. Service działa w L4.", src: "W05, slajd 103, 122", note: "W05-kubernetes" },

  { id: "W05-11", w: "W05", c: "ingress", type: "single",
    q: "Co NIE jest cechą Ingress według wykładu?",
    options: ["Terminacja TLS na krawędzi klastra", "Host-based routing", "Równoważenie TCP/UDP przez tablice IPVS", "Jedna domena dla całego portfela modeli"],
    correct: [2], explain: "Równoważenie L4 przez IPVS lub iptables realizuje kube-proxy dla Service, nie Ingress.", src: "W05, slajd 102, 103, 122", note: "W05-kubernetes" },

  { id: "W05-12", w: "W05", c: "configmap", type: "single",
    q: "Jak udostępnić ConfigMap w Podzie, aby zmiana parametrów działała bez restartu procesu (Hot-Reloading)?",
    options: ["Jako zmienne środowiskowe ENV", "Jako wolumen (ConfigMap Volume)", "Wpisać wartości do obrazu Docker", "Przez plik .env w kontenerze"],
    correct: [1], explain: "Wolumen ConfigMap wspiera Hot-Reload przez symlinki Kubeleta. Zmienne ENV są statyczne po starcie.", src: "W05, slajd 104, 126", note: "W05-kubernetes" },

  { id: "W05-13", w: "W05", c: "configmap", type: "single",
    q: "Jaki jest maksymalny rozmiar obiektu ConfigMap i co go ogranicza?",
    options: ["1 MB, ograniczenie bazy etcd", "100 MB, ograniczenie Kubeleta", "1 GB, ograniczenie wolumenu tmpfs", "Bez limitu"],
    correct: [0], explain: "ConfigMap ma maks. 1 MB przez etcd. Większe wagi pobiera się przez initContainers z S3/MinIO.", src: "W05, slajd 125", note: "W05-kubernetes" },

  { id: "W05-14", w: "W05", c: "secrets-base64", type: "single",
    q: "Które zdanie o domyślnych Secrets w Kubernetes jest prawdziwe?",
    options: ["Base64 to silne szyfrowanie symetryczne kluczem", "Base64 to tylko kodowanie, sekret jest jawny w etcd", "Sekrety są domyślnie szyfrowane przez zewnętrzny KMS", "Sekrety nie są zapisywane w etcd, tylko w RAM"],
    correct: [1], explain: "Base64 to nie szyfrowanie. Na produkcji wymagane jest Encryption at Rest.", src: "W05, slajd 105, 127", note: "W05-kubernetes" },

  { id: "W05-15", w: "W05", c: "encryption-at-rest", type: "single",
    q: "Który dostawca w EncryptionConfiguration oznacza brak szyfrowania (stan domyślny)?",
    options: ["aescbc", "kms", "identity", "aesgcm"],
    correct: [2], explain: "identity to brak szyfrowania. aescbc/aesgcm to klucz lokalny, kms to zewnętrzny KMS.", src: "W05, slajd 128", note: "W05-kubernetes" },

  { id: "W05-16", w: "W05", c: "secrets-tmpfs", type: "single",
    q: "Dlaczego wolumen sekretu (tmpfs) jest bezpieczniejszy niż zmienne środowiskowe?",
    options: ["Bo jest zapisywany na szyfrowanym dysku węzła", "Bo dane są tylko w RAM i znikają po usunięciu Poda", "Bo szyfruje dane algorytmem Base64 przed zapisem", "Bo sekret trafia do zmiennych w /proc/1/environ"],
    correct: [1], explain: "tmpfs trzyma sekret w RAM. Zmienne ENV mogą wyciec do logów i są widoczne w /proc/1/environ.", src: "W05, slajd 130", note: "W05-kubernetes" },

  { id: "W05-17", w: "W05", c: "eso", type: "single",
    q: "Który zasób External Secrets Operator definiuje połączenie i uwierzytelnienie do Vaulta?",
    options: ["ExternalSecret", "SecretStore", "SealedSecret", "imagePullSecrets"],
    correct: [1], explain: "SecretStore to połączenie z Vaultem. ExternalSecret mapuje klucze Vaulta na natywne Sekrety K8s.", src: "W05, slajd 131", note: "W05-kubernetes" },

  { id: "W05-18", w: "W05", c: "wolumeny", type: "single",
    q: "Który typ wolumenu jest antywzorcem na produkcji, bo niszczy przenośność Poda między węzłami?",
    options: ["emptyDir", "PersistentVolumeClaim", "hostPath", "ConfigMap Volume"],
    correct: [2], explain: "hostPath daje dostęp do plików konkretnego węzła. Nadaje się do laboratorium, nie na produkcję.", src: "W05, slajd 106", note: "W05-kubernetes" },

  { id: "W05-19", w: "W05", c: "pv-pvc", type: "single",
    q: "Który tryb dostępu PVC jest kluczowy dla skalowania inferencji, gdy wiele replik czyta te same wagi?",
    options: ["ReadOnlyMany (ROX)", "medium: Memory", "NoExecute", "Dynamic Provisioning"],
    correct: [0], explain: "ROX pozwala wielu replikom czytać jeden wolumen z wagami jednocześnie.", src: "W05, slajd 107", note: "W05-kubernetes" },

  { id: "W05-20", w: "W05", c: "taints", type: "single",
    q: "Który efekt Taint usuwa już działające Pody z węzła w momencie nałożenia piętna?",
    options: ["NoSchedule", "PreferNoSchedule", "NoExecute", "Required"],
    correct: [2], explain: "NoExecute usuwa działające Pody. NoSchedule tylko nie wpuszcza nowych.", src: "W05, slajd 110", note: "W05-kubernetes" },

  { id: "W05-21", w: "W05", c: "taints", type: "single",
    q: "Węzły H100 mają być dostępne tylko dla Podów badaczy, a inne Pody mają być od nich odpychane. Co zastosować?",
    options: ["Taint na węźle i Toleration w Podach badaczy", "NodeSelector z etykietą H100 w Podach frontendu", "Readiness Probe na węzłach H100", "Service ClusterIP dla Podów badaczy"],
    correct: [0], explain: "Taint odpycha niechciane Pody. Toleration to przepustka Poda na węzeł z piętnem.", src: "W05, slajd 110", note: "W05-kubernetes" },

  { id: "W05-22", w: "W05", c: "sondy", type: "single",
    q: "Która sonda sprawdza, czy silnik AI zainicjalizował CUDA i może przyjąć ruch, zapobiegając błędom 502/504?",
    options: ["Startup Probe", "Liveness Probe", "Readiness Probe", "Custom Metrics"],
    correct: [2], explain: "Readiness pilnuje gotowości na ruch. Liveness wykrywa zawieszenia, Startup chroni długie ładowanie wag.", src: "W05, slajd 111", note: "W05-kubernetes" },

  { id: "W05-23", w: "W05", c: "hpa", type: "single",
    q: "Dlaczego HPA w AI często potrzebuje Custom Metrics (Prometheus, NVIDIA DCGM Exporter)?",
    options: ["Bo Kubernetes nie zbiera metryk RAM z węzłów", "Bo przy pełnym GPU zużycie CPU bywa niskie", "Bo HPA działa wyłącznie razem z KEDA", "Bo metryki CPU są blokowane przez RBAC"],
    correct: [1], explain: "Standardowe CPU/RAM zawodzą w AI. Skalowanie po obciążeniu rdzeni CUDA wymaga metryk dedykowanych.", src: "W05, slajd 112", note: "W05-kubernetes" },

  { id: "W05-24", w: "W05", c: "strategie", type: "single",
    q: "W której strategii model v2 dostaje kopie zapytań produkcyjnych, ale jego odpowiedzi nie wracają do klienta?",
    options: ["Blue/Green", "Canary", "Shadow", "RollingUpdate"],
    correct: [2], explain: "Shadow służy tylko do analizy. W Canary część klientów dostaje odpowiedzi v2.", src: "W05, slajd 114", note: "W05-kubernetes" },

  { id: "W05-25", w: "W05", c: "strategie", type: "single",
    q: "Zespół kieruje 5% ruchu do nowej wersji modelu, żeby sprawdzić metryki na żywo. Jak nazywa się ta strategia?",
    options: ["Canary Deployment", "Shadow Deployment", "Blue/Green Deployment", "Rollback"],
    correct: [0], explain: "Canary to stopniowe kierowanie ułamka ruchu do v2. Blue/Green przełącza cały ruch selektorem Service.", src: "W05, slajd 114", note: "W05-kubernetes" },
]});
