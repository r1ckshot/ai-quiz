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

  { id: "W05-26", w: "W05", c: "pod", type: "single",
    q: "Jak nazywa się najmniejsza jednostka obliczeniowa, którą zarządza Kubernetes?",
    options: ["Deployment", "Pod", "ReplicaSet", "Worker Node"],
    correct: [1], explain: "Pod to najmniejsza jednostka K8s. Deployment i ReplicaSet zarządzają replikami Podów, a Worker Node to serwer lub VM.", src: "W05, slajd 96", note: "W05-kubernetes" },

  { id: "W05-27", w: "W05", c: "pod", type: "single",
    q: "Zespół chce umieścić bazę danych i model w jednym Podzie. Co mówi o tym złota zasada z wykładu?",
    options: ["Nie łączyć, bo jeden Pod to jedna funkcja skalowania", "Można łączyć, bo kontenery Poda dzielą adres IP", "Można łączyć, jeśli baza działa jako kontener Sidecar", "Nie łączyć, bo Pod mieści tylko jeden kontener"],
    correct: [0], explain: "Złota zasada: jeden Pod = jedna funkcja skalowania. Pod może mieć kilka kontenerów, ale bazy i modelu się w nim nie łączy.", src: "W05, slajd 96", note: "W05-kubernetes" },

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

  { id: "W05-28", w: "W05", c: "limity", type: "single",
    q: "Która część specyfikacji zasobów to gwarancja dla modelu, używana przez Schedulera przy wyborze węzła?",
    options: ["Limits", "Requests", "Resource Quotas", "nvidia.com/gpu"],
    correct: [1], explain: "Requests to gwarancja zasobów do normalnej pracy, używana przez Schedulera. Limits to sufit maksymalnego zużycia.", src: "W05, slajd 100", note: "W05-kubernetes" },

  { id: "W05-29", w: "W05", c: "limity", type: "single",
    q: "Co się stanie, gdy kontener z modelem przekroczy swój limit CPU?",
    options: ["OOMKill, czyli natychmiastowe zabicie procesu", "Throttling, czyli spowolnienie inferencji", "Restart kontenera przez Liveness Probe", "Usunięcie Poda z węzła efektem NoExecute"],
    correct: [1], explain: "Przekroczenie CPU daje throttling, czyli spowolnienie inferencji. OOMKill dotyczy przekroczenia RAM.", src: "W05, slajd 100", note: "W05-kubernetes" },

  { id: "W05-08", w: "W05", c: "service-typy", type: "single",
    q: "Który typ Service tworzy alias DNS (rekord CNAME) dla usługi zewnętrznej, np. RDS?",
    options: ["ClusterIP", "NodePort", "LoadBalancer", "ExternalName"],
    correct: [3], explain: "ExternalName to alias DNS. ClusterIP jest wewnętrzny, NodePort otwiera port 30000-32767, LoadBalancer daje zewnętrzne IP.", src: "W05, slajd 120", note: "W05-kubernetes" },

  { id: "W05-30", w: "W05", c: "service-typy", type: "single",
    q: "Który typ Service jest domyślny i służy do komunikacji wewnątrz klastra, np. z bazą danych?",
    options: ["NodePort", "ClusterIP", "LoadBalancer", "ExternalName"],
    correct: [1], explain: "ClusterIP to typ domyślny do komunikacji wewnątrz klastra. LoadBalancer daje zewnętrzne IP w chmurze.", src: "W05, slajd 120", note: "W05-kubernetes" },

  { id: "W05-31", w: "W05", c: "service-typy", type: "single",
    q: "Który typ Service otwiera port z zakresu 30000-32767 na każdym węźle klastra?",
    options: ["ClusterIP", "ExternalName", "NodePort", "LoadBalancer"],
    correct: [2], explain: "NodePort otwiera port 30000-32767 na każdym węźle. Wykład nazywa go typem testowym.", src: "W05, slajd 102, 120", note: "W05-kubernetes" },

  { id: "W05-09", w: "W05", c: "kube-proxy", type: "single",
    q: "Dlaczego tryb IPVS kube-proxy jest kluczowy dla klastrów AI z tysiącami usług?",
    options: ["Sekwencyjnie sprawdza reguły Netfilter, złożoność O(n)", "Używa tablic mieszających, złożoność O(1)", "Terminuje TLS na granicy klastra", "Routuje ruch po ścieżkach URL"],
    correct: [1], explain: "IPVS ma stały czas przekierowania dzięki tablicom mieszającym. iptables sprawdza reguły po kolei, O(n).", src: "W05, slajd 121", note: "W05-kubernetes" },

  { id: "W05-32", w: "W05", c: "kube-proxy", type: "single",
    q: "Czym jest kube-proxy według wykładu?",
    options: ["Komponentem Control Plane wybierającym węzeł z GPU", "Agentem na węźle pilnującym zdrowia kontenerów", "Demonem na każdym węźle implementującym wirtualne IP", "Kontrolerem Ingress terminującym ruch TLS na krawędzi"],
    correct: [2], explain: "kube-proxy to demon na każdym węźle, który implementuje wirtualne IP Service. Wybór węzła to kube-scheduler, a zdrowie kontenerów pilnuje Kubelet.", src: "W05, slajd 90, 91, 121", note: "W05-kubernetes" },

  { id: "W05-33", w: "W05", c: "kube-proxy", type: "single",
    q: "Czym tryb iptables kube-proxy różni się od trybu IPVS?",
    options: ["Używa tablic mieszających, więc działa w czasie O(1)", "Sprawdza reguły Netfilter po kolei, złożoność O(n)", "Oferuje tryby Least Connection i Weighted Round-Robin", "Routuje ruch HTTP po ścieżkach URL w warstwie L7"],
    correct: [1], explain: "iptables sprawdza reguły Netfilter sekwencyjnie, O(n). Tablice mieszające O(1) i Least Connection to cechy IPVS.", src: "W05, slajd 121", note: "W05-kubernetes" },

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

  { id: "W05-34", w: "W05", c: "secrets-base64", type: "single",
    q: "Administrator z dostępem do bazy etcd czyta domyślny Secret, bez Encryption at Rest. Co zobaczy?",
    options: ["Szyfrogram AES, nieczytelny bez klucza lokalnego", "Tekst jawny, bo Base64 to tylko kodowanie znaków", "Nic, bo sekrety są trzymane wyłącznie w tmpfs", "Dane zaszyfrowane kluczem z zewnętrznego KMS"],
    correct: [1], explain: "Base64 to tylko kodowanie, więc osoba z dostępem do etcd widzi sekret jako tekst jawny. Szyfrowanie daje dopiero Encryption at Rest.", src: "W05, slajd 127, 128", note: "W05-kubernetes" },

  { id: "W05-15", w: "W05", c: "encryption-at-rest", type: "single",
    q: "Który dostawca w EncryptionConfiguration oznacza brak szyfrowania (stan domyślny)?",
    options: ["aescbc", "kms", "identity", "aesgcm"],
    correct: [2], explain: "identity to brak szyfrowania. aescbc/aesgcm to klucz lokalny, kms to zewnętrzny KMS.", src: "W05, slajd 128", note: "W05-kubernetes" },

  { id: "W05-35", w: "W05", c: "encryption-at-rest", type: "single",
    q: "Który dostawca w EncryptionConfiguration integruje klaster z zewnętrznym Key Management Service, np. Azure Key Vault?",
    options: ["identity", "aescbc", "kms", "aesgcm"],
    correct: [2], explain: "kms łączy klaster z zewnętrznym KMS, np. Azure Key Vault lub AWS KMS. aescbc i aesgcm szyfrują kluczem lokalnym.", src: "W05, slajd 128", note: "W05-kubernetes" },

  { id: "W05-36", w: "W05", c: "encryption-at-rest", type: "single",
    q: "Ktoś ukradł fizyczny dysk z węzła Master. Który mechanizm sprawia, że nie odczyta z niego haseł?",
    options: ["Kodowanie Base64 Sekretów", "RBAC dla kont serwisowych", "Encryption at Rest w etcd", "Typ sekretu Opaque"],
    correct: [2], explain: "Encryption at Rest chroni dane na poziomie fizycznego zapisu w etcd. Base64 nie szyfruje, a RBAC tylko ogranicza widoczność dla kont serwisowych.", src: "W05, slajd 128", note: "W05-kubernetes" },

  { id: "W05-16", w: "W05", c: "secrets-tmpfs", type: "single",
    q: "Dlaczego wolumen sekretu (tmpfs) jest bezpieczniejszy niż zmienne środowiskowe?",
    options: ["Bo jest zapisywany na szyfrowanym dysku węzła", "Bo dane są tylko w RAM i znikają po usunięciu Poda", "Bo szyfruje dane algorytmem Base64 przed zapisem", "Bo sekret trafia do zmiennych w /proc/1/environ"],
    correct: [1], explain: "tmpfs trzyma sekret w RAM. Zmienne ENV mogą wyciec do logów i są widoczne w /proc/1/environ.", src: "W05, slajd 130", note: "W05-kubernetes" },

  { id: "W05-37", w: "W05", c: "secrets-tmpfs", type: "single",
    q: "Która cecha dotyczy wolumenu sekretu (tmpfs), a NIE zmiennych ENV?",
    options: ["Widoczność hasła w pliku /proc/1/environ", "Ryzyko wycieku hasła do stack traces w logach", "Odświeżanie haseł w kontenerze bez restartu", "Dostęp do hasła dla procesów potomnych"],
    correct: [2], explain: "Wolumen sekretu wspiera Hot-Reloading haseł bez restartu usługi. Pozostałe cechy to zagrożenia zmiennych ENV.", src: "W05, slajd 130", note: "W05-kubernetes" },

  { id: "W05-38", w: "W05", c: "secrets-tmpfs", type: "single",
    q: "Aplikacja w Pythonie (Pydantic Settings) może czytać hasło z wolumenu tmpfs lub ze zmiennej ENV. Co zaleca wykład?",
    options: ["Najpierw wolumen tmpfs, a ENV dopiero potem", "Najpierw ENV, a wolumen tmpfs dopiero potem", "Plik .env umieszczony w kontenerze produkcyjnym", "Hasło wpisane na stałe do obrazu Docker"],
    correct: [0], explain: "Wykład zaleca priorytet odczytu z wolumenów tmpfs przed ENV. Plik .env w kontenerze produkcyjnym to antywzorzec.", src: "W05, slajd 132", note: "W05-kubernetes" },

  { id: "W05-17", w: "W05", c: "eso", type: "single",
    q: "Który zasób External Secrets Operator definiuje połączenie i uwierzytelnienie do Vaulta?",
    options: ["ExternalSecret", "SecretStore", "SealedSecret", "imagePullSecrets"],
    correct: [1], explain: "SecretStore to połączenie z Vaultem. ExternalSecret mapuje klucze Vaulta na natywne Sekrety K8s.", src: "W05, slajd 131", note: "W05-kubernetes" },

  { id: "W05-39", w: "W05", c: "eso", type: "single",
    q: "Który zasób External Secrets Operator deklaruje mapowanie kluczy z Vaulta do natywnych Sekretów K8s?",
    options: ["SecretStore", "SealedSecret", "ExternalSecret", "EncryptionConfiguration"],
    correct: [2], explain: "ExternalSecret mapuje klucze Vaulta na natywne Sekrety. SecretStore definiuje połączenie i uwierzytelnienie do Vaulta.", src: "W05, slajd 131", note: "W05-kubernetes" },

  { id: "W05-40", w: "W05", c: "eso", type: "single",
    q: "Jaki problem natywnych Sekretów K8s rozwiązują HashiCorp Vault i External Secrets Operator?",
    options: ["Limit rozmiaru obiektu 1 MB w bazie etcd", "Brak automatycznej rotacji haseł i audytu", "Statyczność zmiennych ENV po starcie Poda", "Brak terminacji TLS na krawędzi klastra"],
    correct: [1], explain: "Natywne Sekrety nie mają automatycznej rotacji haseł ani audytowalności. Vault daje poświadczenia z krótkim TTL i dziennik audytowy.", src: "W05, slajd 131", note: "W05-kubernetes" },

  { id: "W05-18", w: "W05", c: "wolumeny", type: "single",
    q: "Który typ wolumenu jest antywzorcem na produkcji, bo niszczy przenośność Poda między węzłami?",
    options: ["emptyDir", "PersistentVolumeClaim", "hostPath", "ConfigMap Volume"],
    correct: [2], explain: "hostPath daje dostęp do plików konkretnego węzła. Nadaje się do laboratorium, nie na produkcję.", src: "W05, slajd 106", note: "W05-kubernetes" },

  { id: "W05-41", w: "W05", c: "wolumeny", type: "single",
    q: "Który wolumen służy do przekazania wag z Init Containera do silnika inferencyjnego w tym samym Podzie?",
    options: ["hostPath", "emptyDir", "PersistentVolume", "ConfigMap Volume"],
    correct: [1], explain: "emptyDir to pamięć robocza współdzielona przez kontenery Poda. hostPath daje dostęp do plików węzła.", src: "W05, slajd 106", note: "W05-kubernetes" },

  { id: "W05-42", w: "W05", c: "wolumeny", type: "single",
    q: "Co daje ustawienie medium: Memory w wolumenie emptyDir?",
    options: ["Trwałość wag nawet po wyłączeniu klastra", "Przetwarzanie tensorów w RAM przez tmpfs", "Dostęp do plików węzła i sterowników GPU", "Odczyt tych samych wag przez wiele replik"],
    correct: [1], explain: "medium: Memory to tmpfs w RAM do ultraszybkiego przetwarzania tensorów. Trwałość wag daje PV/PVC.", src: "W05, slajd 106", note: "W05-kubernetes" },

  { id: "W05-19", w: "W05", c: "pv-pvc", type: "single",
    q: "Który tryb dostępu PVC jest kluczowy dla skalowania inferencji, gdy wiele replik czyta te same wagi?",
    options: ["ReadOnlyMany (ROX)", "medium: Memory", "NoExecute", "Dynamic Provisioning"],
    correct: [0], explain: "ROX pozwala wielu replikom czytać jeden wolumen z wagami jednocześnie.", src: "W05, slajd 107", note: "W05-kubernetes" },

  { id: "W05-43", w: "W05", c: "pv-pvc", type: "single",
    q: "Czym jest PersistentVolumeClaim (PVC)?",
    options: ["Fizycznym zasobem klastra zarządzanym przez administratora", "Żądaniem programisty o przestrzeń i parametry wydajności", "Profilem dysku wskazywanym w polu storageClassName", "Pamięcią roboczą współdzieloną przez kontenery Poda"],
    correct: [1], explain: "PVC to żądanie programisty AI o konkretną przestrzeń i wydajność. Fizyczny zasób zarządzany przez administratora to PV.", src: "W05, slajd 107", note: "W05-kubernetes" },

  { id: "W05-44", w: "W05", c: "pv-pvc", type: "single",
    q: "Klaster wyłączono na weekend. Co gwarantuje, że wagi modelu nie znikną?",
    options: ["Wolumen emptyDir współdzielony w Podzie", "PV/PVC oddzielone od cyklu życia Podów", "emptyDir z ustawieniem medium: Memory", "Zapis wag lokalnie w systemie plików kontenera"],
    correct: [1], explain: "PV/PVC oddziela trwały magazyn od ulotnych Podów, więc wagi przetrwają wyłączenie klastra. Wagi zapisane lokalnie w kontenerze giną przy restarcie.", src: "W05, slajd 106, 107", note: "W05-kubernetes" },

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

  { id: "W05-45", w: "W05", c: "sondy", type: "single",
    q: "Która sonda cyklicznie wykrywa zawieszenia (Deadlocks) w JVM/Python i automatycznie restartuje kontener?",
    options: ["Startup Probe", "Readiness Probe", "Liveness Probe", "Init Container"],
    correct: [2], explain: "Liveness Probe wykrywa zawieszenia i restartuje kontener. Readiness sprawdza tylko gotowość na ruch.", src: "W05, slajd 111", note: "W05-kubernetes" },

  { id: "W05-46", w: "W05", c: "sondy", type: "single",
    q: "Ciężki model LLM ładuje wagi nawet przez kilka minut. Która sonda pilnuje tego procesu?",
    options: ["Liveness Probe", "Startup Probe", "Readiness Probe", "Custom Metrics"],
    correct: [1], explain: "Startup Probe to tarcza ochronna dla ciężkich LLM podczas długiego ładowania wag. Liveness wykrywa zawieszenia (Deadlocks).", src: "W05, slajd 111", note: "W05-kubernetes" },

  { id: "W05-23", w: "W05", c: "hpa", type: "single",
    q: "Dlaczego HPA w AI często potrzebuje Custom Metrics (Prometheus, NVIDIA DCGM Exporter)?",
    options: ["Bo Kubernetes nie zbiera metryk RAM z węzłów", "Bo przy pełnym GPU zużycie CPU bywa niskie", "Bo HPA działa wyłącznie razem z KEDA", "Bo metryki CPU są blokowane przez RBAC"],
    correct: [1], explain: "Standardowe CPU/RAM zawodzą w AI. Skalowanie po obciążeniu rdzeni CUDA wymaga metryk dedykowanych.", src: "W05, slajd 112", note: "W05-kubernetes" },

  { id: "W05-47", w: "W05", c: "hpa", type: "single",
    q: "Które narzędzie wykład wskazuje do skalowania do zera (Scale-to-Zero) w oparciu o Kafka Lag?",
    options: ["NVIDIA DCGM Exporter", "KEDA", "Prometheus", "metrics-server"],
    correct: [1], explain: "KEDA skaluje do zera na podstawie kolejek Kafka Lag. Prometheus i DCGM Exporter dostarczają Custom Metrics dla HPA.", src: "W05, slajd 112", note: "W05-kubernetes" },

  { id: "W05-24", w: "W05", c: "strategie", type: "single",
    q: "W której strategii model v2 dostaje kopie zapytań produkcyjnych, ale jego odpowiedzi nie wracają do klienta?",
    options: ["Blue/Green", "Canary", "Shadow", "RollingUpdate"],
    correct: [2], explain: "Shadow służy tylko do analizy. W Canary część klientów dostaje odpowiedzi v2.", src: "W05, slajd 114", note: "W05-kubernetes" },

  { id: "W05-25", w: "W05", c: "strategie", type: "single",
    q: "Zespół kieruje 5% ruchu do nowej wersji modelu, żeby sprawdzić metryki na żywo. Jak nazywa się ta strategia?",
    options: ["Canary Deployment", "Shadow Deployment", "Blue/Green Deployment", "Rollback"],
    correct: [0], explain: "Canary to stopniowe kierowanie ułamka ruchu do v2. Blue/Green przełącza cały ruch selektorem Service.", src: "W05, slajd 114", note: "W05-kubernetes" },
]});
