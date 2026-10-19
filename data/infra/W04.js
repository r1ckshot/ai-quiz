(window.QUIZ_DATA ||= []).push({ subject: "infra", questions: [
  // ===== W04 — Platformy chmurowe wspierające sztuczną inteligencję =====
  { id: "W04-01", w: "W04", c: "platforma-ai", type: "single",
    q: "Jak na wykładzie zdefiniowano platformę AI?",
    options: ["Warstwa nad IaaS/PaaS łącząca cały cykl życia MLOps", "Zestaw kart GPU wynajmowanych na godziny w chmurze", "Hurtownia danych z wbudowanym silnikiem SQL do analiz", "Biblioteka Open Source do trenowania sieci neuronowych"],
    correct: [0], explain: "Platforma AI to warstwa nad infrastrukturą IaaS/PaaS. Łączy cały cykl życia MLOps.", src: "W04, slajd 263", note: "W04-platformy-ai" },

  { id: "W04-02", w: "W04", c: "mlops-poziomy", type: "single",
    q: "Na którym poziomie Modelu Dojrzałości MLOps (Google Cloud) pojawia się automatyzacja potoków (Continuous Training) i Feature Store?",
    options: ["Poziom 0", "Poziom 1", "Poziom 2", "Poziom 3"],
    correct: [1], explain: "Poziom 1 to CT i Feature Store. Pełne CI/CD i pętle sprzężenia zwrotnego to Poziom 2.", src: "W04, slajd 264", note: "W04-platformy-ai" },

  { id: "W04-03", w: "W04", c: "mlops-poziomy", type: "single",
    q: "Zespół trenuje modele w izolowanych notatnikach Jupyter, ręcznie i bez śledzenia eksperymentów. Który to poziom dojrzałości MLOps?",
    options: ["Poziom 0", "Poziom 1", "Poziom 2", "Poziom BYOS"],
    correct: [0], explain: "Ręczne procesy i brak Experiment Tracking to Poziom 0.", src: "W04, slajd 264", note: "W04-platformy-ai" },

  { id: "W04-04", w: "W04", c: "plaszczyzny", type: "single",
    q: "Do której płaszczyzny platformy AI należą rejestr modeli, Experiment Tracking i audytowalność?",
    options: ["Płaszczyzna danych (Data Plane)", "Płaszczyzna obliczeń i orkiestracji", "Płaszczyzna MLOps (Governance)", "Płaszczyzna Serwowania i Obserwowalności"],
    correct: [2], explain: "Governance obejmuje rejestr, śledzenie eksperymentów i audyt. Drift Detection to płaszczyzna serwowania.", src: "W04, slajd 265", note: "W04-platformy-ai" },

  { id: "W04-05", w: "W04", c: "plaszczyzny", type: "single",
    q: "Co NIE należy do płaszczyzny danych (Data Plane) według wykładu?",
    options: ["Magazyn obiektowy S3/GCS", "Wersjonowanie DVC/Delta Lake", "Feature Store", "Autoskalowanie punktów końcowych"],
    correct: [3], explain: "Autoskalowanie endpointów to płaszczyzna Serwowania i Obserwowalności.", src: "W04, slajd 265", note: "W04-platformy-ai" },

  { id: "W04-06", w: "W04", c: "sagemaker", type: "single",
    q: "Który mechanizm AWS SageMaker zapewnia bezpośredni, strumieniowy odczyt danych z S3?",
    options: ["AWS PrivateLink", "Fast File Mode", "Ground Truth", "Materializacja"],
    correct: [1], explain: "Fast File Mode optymalizuje I/O z S3. PrivateLink izoluje ruch sieciowy od internetu.", src: "W04, slajd 266", note: "W04-platformy-ai" },

  { id: "W04-07", w: "W04", c: "sagemaker", type: "single",
    q: "Jaka jest struktura kontraktu kontenerowego SageMaker?",
    options: ["/opt/ml/ z katalogami input/data, model, output", "/var/lib/docker/ z katalogami overlay2, volumes", "/srv/ml/ z katalogami datasets, checkpoints", "/mnt/data/ z plikiem config.yaml i katalogiem weights"],
    correct: [0], explain: "Kontener SageMaker czyta dane z /opt/ml/input/data i zapisuje model w /opt/ml/model.", src: "W04, slajd 267–268", note: "W04-platformy-ai" },

  { id: "W04-08", w: "W04", c: "spot", type: "single",
    q: "Instancje Spot dają zniżkę do 90%. Co jest wymagane, żeby trening na nich był niezawodny?",
    options: ["Dynamic Batching (Triton)", "Checkpointing (np. na S3)", "Szyfrowanie kluczem CMK", "Scale-to-Zero (KServe)"],
    correct: [1], explain: "Spot to nadwyżki mocy, które mogą zostać odebrane. Checkpointing pozwala wznowić trening.", src: "W04, slajd 267, 283", note: "W04-platformy-ai" },

  { id: "W04-09", w: "W04", c: "vertex", type: "single",
    q: "Których silników wykonawczych Open Source używa Vertex AI Pipelines?",
    options: ["Kubeflow Pipelines (KFP) i TFX", "Apache Airflow i Argo Workflows", "MLflow Projects i Feast", "SageMaker Pipelines i Bedrock"],
    correct: [0], explain: "Vertex AI unifikuje cykl życia ML wokół potoków na KFP i TensorFlow Extended.", src: "W04, slajd 269", note: "W04-platformy-ai" },

  { id: "W04-10", w: "W04", c: "bigquery-ml", type: "single",
    q: "Jaką główną zaletę BigQuery ML wskazano na wykładzie?",
    options: ["Trening przez SQL w hurtowni, bez wąskiego gardła I/O", "Dostęp do modeli GPT-4 przez API z hurtowni danych", "Sprzętowy podział A100 na 7 izolowanych instancji", "Automatyczne szyfrowanie ruchu mTLS między usługami"],
    correct: [0], explain: "BigQuery ML trenuje XGBoost i DNN w hurtowni. Dane nie wędrują do osobnego klastra.", src: "W04, slajd 271", note: "W04-platformy-ai" },

  { id: "W04-11", w: "W04", c: "azure", type: "single",
    q: "Którego narzędzia Azure ML używa jako natywnego interfejsu do śledzenia eksperymentów i rejestru modeli?",
    options: ["Kubeflow Pipelines", "MLflow", "MLMD", "Feast"],
    correct: [1], explain: "Azure ML ma natywną integrację z MLflow. MLMD to Vertex AI.", src: "W04, slajd 272, 274", note: "W04-platformy-ai" },

  { id: "W04-12", w: "W04", c: "hyperscalers", type: "single",
    q: "Który hyperscaler ma według wykładu przewagę w klastrach TPU i potokach (Kubeflow)?",
    options: ["AWS", "GCP", "Azure", "Żaden, to cecha BYOS"],
    correct: [1], explain: "GCP: TPU i KFP. AWS: najszerszy ekosystem i I/O. Azure: GenAI i tożsamość.", src: "W04, slajd 273", note: "W04-platformy-ai" },

  { id: "W04-13", w: "W04", c: "premium-tax", type: "single",
    q: "O ile według wykładu usługi zarządzane (PaaS) są droższe od surowej infrastruktury IaaS?",
    options: ["5–10%", "20–40%", "do 90%", "ponad 80%"],
    correct: [1], explain: "To PaaS Premium Tax: 20–40%. Do 90% to zniżka Spot, ponad 80% to udział GPU w rachunku.", src: "W04, slajd 273", note: "W04-platformy-ai" },

  { id: "W04-14", w: "W04", c: "byos", type: "single",
    q: "Czym jest paradygmat BYOS (Bring Your Own Stack)?",
    options: ["Budową własnej platformy MLOps na czystym Kubernetesie", "Kupnem pakietu usług jednego hyperscalera", "Treningiem modeli w hurtowni danych przez SQL", "Uruchamianiem modeli tylko na laptopie"],
    correct: [0], explain: "BYOS to własny stos Open Source na Kubernetesie (EKS, GKE, On-Prem). Cel: niezależność i niższe koszty IaaS.", src: "W04, slajd 275", note: "W04-platformy-ai" },

  { id: "W04-15", w: "W04", c: "byos", type: "single",
    q: "Które przypisanie w stosie BYOS (Best-of-Breed) jest NIEPOPRAWNE?",
    options: ["Orkiestracja: Kubernetes", "Metadane i eksperymenty: MLflow", "Dane: Feast / DVC", "Potoki: Triton"],
    correct: [3], explain: "Potoki to Kubeflow Pipelines / Flyte. Triton to serwer inferencji.", src: "W04, slajd 275", note: "W04-platformy-ai" },

  { id: "W04-16", w: "W04", c: "ray-kubeflow", type: "single",
    q: "Które narzędzie pozwala skalować kod z laptopa na klaster bez pisania manifestów YAML?",
    options: ["Kubeflow Training Operators", "Ray Train", "KServe", "Istio"],
    correct: [1], explain: "Ray Train to uniwersalna abstrakcja obliczeń rozproszonych. Training Operators to CRD Kubernetesa (TFJob, PyTorchJob).", src: "W04, slajd 276", note: "W04-platformy-ai" },

  { id: "W04-17", w: "W04", c: "feature-store", type: "single",
    q: "Cechy w R&D liczone są w Pandas, a na produkcji ponownie w Javie, i wyniki się różnią. Jak nazywa się ten błąd?",
    options: ["Data Poisoning", "Training-Serving Skew", "Vendor Lock-in", "Pipeline Jungles"],
    correct: [1], explain: "Training-Serving Skew to inna logika cech w treningu i produkcji. Lekiem jest Feature Store, np. Feast.", src: "W04, slajd 277", note: "W04-platformy-ai" },

  { id: "W04-18", w: "W04", c: "feature-store", type: "single",
    q: "Który magazyn Feast dostarcza najświeższe wektory do inferencji z latencją poniżej 10 ms?",
    options: ["Offline Store (Parquet na S3/GCS)", "Online Store (Redis / DynamoDB)", "Artifact Store (MinIO)", "Backend Store (PostgreSQL)"],
    correct: [1], explain: "Online Store służy inferencji. Offline Store trzyma dane historyczne do treningu.", src: "W04, slajd 277", note: "W04-platformy-ai" },

  { id: "W04-19", w: "W04", c: "mlflow", type: "single",
    q: "Gdzie serwer MLflow na własnej infrastrukturze przechowuje wagi modeli i wykresy?",
    options: ["W Backend Store (PostgreSQL)", "W Artifact Store (MinIO / S3)", "W Online Store (Redis)", "W Azure Key Vault"],
    correct: [1], explain: "Artifact Store to magazyn obiektowy na ciężkie pliki. Backend Store trzyma parametry, metryki i tagi.", src: "W04, slajd 278", note: "W04-platformy-ai" },

  { id: "W04-20", w: "W04", c: "hpo", type: "single",
    q: "Co robi Hyperband Pruner w Optunie?",
    options: ["Przerywa słabo rokujące próby, oszczędzając zasoby", "Łączy zapytania użytkowników w jeden batch na GPU", "Synchronizuje cechy między Offline i Online Store", "Szyfruje ruch między Podami protokołem mTLS"],
    correct: [0], explain: "Pruner kończy słabe próby wcześnie. Łączenie zapytań to Dynamic Batching w Tritonie.", src: "W04, slajd 279", note: "W04-platformy-ai" },

  { id: "W04-21", w: "W04", c: "serving", type: "single",
    q: "Które narzędzie oferuje Scale-to-Zero i wdrażanie kanarkowe (Canary Deployments)?",
    options: ["NVIDIA Triton", "KServe", "Optuna", "Feast"],
    correct: [1], explain: "KServe to orkiestrator Cloud-Native. Triton to silnik inferencji z Dynamic Batching.", src: "W04, slajd 281", note: "W04-platformy-ai" },

  { id: "W04-22", w: "W04", c: "finops", type: "single",
    q: "Co według strategii Lokalności Danych należy robić?",
    options: ["Przenosić obliczenia do regionu, w którym są dane", "Kopiować dane do regionu z najtańszym GPU", "Trzymać dane wewnątrz kontenera treningowego", "Rozpraszać dane po wielu chmurach i regionach"],
    correct: [0], explain: "Obliczenia idą do danych, nigdy odwrotnie. Inaczej rośnie koszt Network Egress.", src: "W04, slajd 283", note: "W04-platformy-ai" },

  { id: "W04-23", w: "W04", c: "finops", type: "single",
    q: "Obliczenia GPU to zwykle ponad 80% rachunku. Co wykład nazywa ukrytą pułapką kosztową?",
    options: ["Network Egress", "Instancje Spot", "MIG", "Checkpointing"],
    correct: [0], explain: "Transfer danych na zewnątrz (Egress) jest ukrytym kosztem. Spot i MIG to sposoby optymalizacji.", src: "W04, slajd 283", note: "W04-platformy-ai" },

  { id: "W04-24", w: "W04", c: "security", type: "single",
    q: "Co zastępuje statyczne hasła w procesach według wykładu o bezpieczeństwie AI?",
    options: ["Managed Identities / IRSA (wstrzykiwanie ról)", "Klucze dostępu zapisane w obrazie Docker", "Zero-Trust Network z mTLS (Istio)", "Tokeny API w plikach .env kontenera"],
    correct: [0], explain: "Role wstrzykuje się do procesów. Istio z mTLS to z kolei Zero-Trust Network.", src: "W04, slajd 282", note: "W04-platformy-ai" },

  { id: "W04-25", w: "W04", c: "build-buy", type: "single",
    q: "Które kryterium przemawia za strategią BUY (usługi AWS/GCP/Azure), a nie BUILD?",
    options: ["Wysoka skala i oszczędność na PaaS Premium", "Wymogi suwerenności danych", "Brak dużego zespołu DevOps/SRE", "Potrzeba własnych sterowników"],
    correct: [2], explain: "BUY: mały zespół, Time-to-Market, zmienne obciążenie. Pozostałe opcje to kryteria BUILD.", src: "W04, slajd 285", note: "W04-platformy-ai" },
]});
