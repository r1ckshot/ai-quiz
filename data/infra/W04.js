(window.QUIZ_DATA ||= []).push({ subject: "infra", questions: [
  // ===== W04 — Platformy chmurowe wspierające sztuczną inteligencję =====
  { id: "W04-01", w: "W04", c: "platforma-ai", type: "single",
    q: "Jak na wykładzie zdefiniowano platformę AI?",
    options: ["Warstwa nad IaaS/PaaS łącząca cały cykl życia MLOps", "Zestaw kart GPU wynajmowanych na godziny w chmurze", "Hurtownia danych z wbudowanym silnikiem SQL do analiz", "Biblioteka Open Source do trenowania sieci neuronowych"],
    correct: [0], explain: "Platforma AI to warstwa nad infrastrukturą IaaS/PaaS. Łączy cały cykl życia MLOps.", src: "W04, slajd 263", note: "W04-platformy-ai" },

  { id: "W04-26", w: "W04", c: "platforma-ai", type: "single",
    q: "Warstwa abstrakcji nad infrastrukturą IaaS/PaaS integrująca pełny cykl życia MLOps. Jak wykład nazywa to pojęcie?",
    options: ["Paradygmat BYOS", "Płaszczyzna MLOps (Governance)", "Platforma AI", "Zarządzana bezserwerowość"],
    correct: [2], explain: "To definicja platformy AI. BYOS to własna platforma MLOps na czystym Kubernetesie.", src: "W04, slajd 263", note: "W04-platformy-ai" },

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

  { id: "W04-27", w: "W04", c: "spot", type: "single",
    q: "Jak wykład nazywa wykorzystanie nadwyżek mocy chmury ze zniżką do 90%?",
    options: ["MIG (podział karty A100)", "Cloud Repatriation", "Zarządzana bezserwerowość", "Instancje Spot"],
    correct: [3], explain: "Instancje Spot to nadwyżki mocy chmury, tańsze do 90%. Wymagają Checkpointingu.", src: "W04, slajd 283", note: "W04-platformy-ai" },

  { id: "W04-28", w: "W04", c: "spot", type: "single",
    q: "Który parametr estymatora SageMaker w przykładzie ze slajdu wskazuje miejsce zapisu checkpointów przy treningu na Spot?",
    options: ["max_wait", "use_spot_instances", "checkpoint_s3_uri", "entry_point"],
    correct: [2], explain: "checkpoint_s3_uri to ścieżka S3 na checkpointy. use_spot_instances włącza Spot, a max_wait to limit oczekiwania na Spot.", src: "W04, slajd 267", note: "W04-platformy-ai" },

  { id: "W04-09", w: "W04", c: "vertex", type: "single",
    q: "Których silników wykonawczych Open Source używa Vertex AI Pipelines?",
    options: ["Kubeflow Pipelines (KFP) i TFX", "Apache Airflow i Argo Workflows", "MLflow Projects i Feast", "SageMaker Pipelines i Bedrock"],
    correct: [0], explain: "Vertex AI unifikuje cykl życia ML wokół potoków na KFP i TensorFlow Extended.", src: "W04, slajd 269", note: "W04-platformy-ai" },

  { id: "W04-29", w: "W04", c: "vertex", type: "single",
    q: "Którą filozofię architektury wykład przypisuje Google Cloud Vertex AI?",
    options: ["Zestaw niezależnych mikrousług (Ground Truth, Studio)", "Unifikacja cyklu życia ML wokół orkiestracji potoków", "Najwyższa integracja z korporacyjnym IAM (Entra ID)", "Własna platforma MLOps na czystym Kubernetesie"],
    correct: [1], explain: "Vertex AI to architektura zorientowana na potoki. Mikrousługi to SageMaker, a Entra ID to Azure.", src: "W04, slajd 269", note: "W04-platformy-ai" },

  { id: "W04-30", w: "W04", c: "vertex", type: "single",
    q: "Do czego Vertex AI wykorzystuje ML Metadata (MLMD)?",
    options: ["Do strumieniowego odczytu danych z S3", "Do synchronizacji stanu między Offline i Online Store", "Do szyfrowania danych kluczami klienta (CMK)", "Do typowania artefaktów i śledzenia pochodzenia"],
    correct: [3], explain: "MLMD typuje artefakty i śledzi ich pochodzenie (Lineage). Synchronizacja magazynów to Materializacja w Feast.", src: "W04, slajd 269", note: "W04-platformy-ai" },

  { id: "W04-10", w: "W04", c: "bigquery-ml", type: "single",
    q: "Jaką główną zaletę BigQuery ML wskazano na wykładzie?",
    options: ["Trening przez SQL w hurtowni, bez wąskiego gardła I/O", "Dostęp do modeli GPT-4 przez API z hurtowni danych", "Sprzętowy podział A100 na 7 izolowanych instancji", "Automatyczne szyfrowanie ruchu mTLS między usługami"],
    correct: [0], explain: "BigQuery ML trenuje XGBoost i DNN w hurtowni. Dane nie wędrują do osobnego klastra.", src: "W04, slajd 271", note: "W04-platformy-ai" },

  { id: "W04-31", w: "W04", c: "bigquery-ml", type: "single",
    q: "Dane leżą w hurtowni BigQuery. Zespół chce trenować XGBoost przez SQL, bez przenoszenia danych do klastra. Co wybrać?",
    options: ["Ray Train", "Kubeflow Training Operators", "BigQuery ML", "Fast File Mode"],
    correct: [2], explain: "BigQuery ML trenuje XGBoost i DNN w hurtowni przy użyciu SQL. Eliminuje to wąskie gardło I/O.", src: "W04, slajd 271", note: "W04-platformy-ai" },

  { id: "W04-11", w: "W04", c: "azure", type: "single",
    q: "Którego narzędzia Azure ML używa jako natywnego interfejsu do śledzenia eksperymentów i rejestru modeli?",
    options: ["Kubeflow Pipelines", "MLflow", "MLMD", "Feast"],
    correct: [1], explain: "Azure ML ma natywną integrację z MLflow. MLMD to Vertex AI.", src: "W04, slajd 272, 274", note: "W04-platformy-ai" },

  { id: "W04-32", w: "W04", c: "azure", type: "single",
    q: "Co według wykładu NIE jest cechą Microsoft Azure AI?",
    options: ["Integracja z IAM przez Microsoft Entra ID", "Szyfrowanie kluczami CMK w Azure Key Vault", "Potoki oparte na Kubeflow Pipelines i TFX", "Wyłączny dostęp do GPT-4 i o1 (Azure OpenAI)"],
    correct: [2], explain: "KFP i TFX to silniki Vertex AI (GCP). Azure ma własne Azure ML Pipelines.", src: "W04, slajd 272, 274", note: "W04-platformy-ai" },

  { id: "W04-33", w: "W04", c: "azure", type: "single",
    q: "Która usługa daje wyłączny dostęp do modeli GPT-4 i o1 wewnątrz bezpiecznego obwodu sieciowego chmury?",
    options: ["Amazon Bedrock", "Azure OpenAI", "Vertex AI Model Garden", "Azure Arc"],
    correct: [1], explain: "Azure OpenAI to strategia GenAI Azure (GPT-4 exclusive). Bedrock to AWS, a Model Garden to GCP.", src: "W04, slajd 272, 274", note: "W04-platformy-ai" },

  { id: "W04-12", w: "W04", c: "hyperscalers", type: "single",
    q: "Który hyperscaler ma według wykładu przewagę w klastrach TPU i potokach (Kubeflow)?",
    options: ["AWS", "GCP", "Azure", "Żaden, to cecha BYOS"],
    correct: [1], explain: "GCP: TPU i KFP. AWS: najszerszy ekosystem i I/O. Azure: GenAI i tożsamość.", src: "W04, slajd 273", note: "W04-platformy-ai" },

  { id: "W04-34", w: "W04", c: "hyperscalers", type: "single",
    q: "Która strategia GenAI należy według tabeli porównawczej do AWS?",
    options: ["Vertex AI Model Garden + Gemini", "Azure OpenAI Service (GPT-4 exclusive)", "Amazon Bedrock (Multi-Model choice)", "SageMaker Pipelines (Proprietary)"],
    correct: [2], explain: "AWS stawia na Amazon Bedrock. GCP na Model Garden z Gemini, a Azure na OpenAI Service.", src: "W04, slajd 274", note: "W04-platformy-ai" },

  { id: "W04-35", w: "W04", c: "hyperscalers", type: "single",
    q: "Które przypisanie hyperscalera do jego kluczowej przewagi jest NIEPOPRAWNE?",
    options: ["AWS: najszerszy ekosystem i potężne I/O", "GCP: klastry TPU i potoki (Kubeflow)", "Azure: lider GenAI i zarządzanie tożsamością", "AWS: natywna integracja z MLflow"],
    correct: [3], explain: "Natywna integracja z MLflow to Azure ML. AWS wyróżnia najszerszy ekosystem i Fast File Mode.", src: "W04, slajd 273–274", note: "W04-platformy-ai" },

  { id: "W04-13", w: "W04", c: "premium-tax", type: "single",
    q: "O ile według wykładu usługi zarządzane (PaaS) są droższe od surowej infrastruktury IaaS?",
    options: ["5–10%", "20–40%", "do 90%", "ponad 80%"],
    correct: [1], explain: "To PaaS Premium Tax: 20–40%. Do 90% to zniżka Spot, ponad 80% to udział GPU w rachunku.", src: "W04, slajd 273", note: "W04-platformy-ai" },

  { id: "W04-36", w: "W04", c: "premium-tax", type: "single",
    q: "Jak wykład nazywa to, że usługi zarządzane kosztują od 20% do 40% więcej niż surowa infrastruktura IaaS?",
    options: ["Network Egress", "PaaS Premium Tax", "Vendor Lock-in", "Cloud Repatriation"],
    correct: [1], explain: "PaaS Premium Tax to narzut usług zarządzanych. Network Egress to ukryty koszt transferu danych.", src: "W04, slajd 273", note: "W04-platformy-ai" },

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

  { id: "W04-37", w: "W04", c: "ray-kubeflow", type: "single",
    q: "Czym według wykładu są Kubeflow Training Operators?",
    options: ["Uniwersalną warstwą abstrakcji obliczeń rozproszonych", "Orkiestratorem Cloud-Native ze skalowaniem do zera", "Rozszerzeniem API Kubernetesa (CRD): TFJob, PyTorchJob", "Silnikiem wykonawczym potoków (KFP) w Vertex AI Pipelines"],
    correct: [2], explain: "Training Operators to CRD Kubernetesa do zadań TFJob i PyTorchJob. Uniwersalna warstwa abstrakcji to Ray Train.", src: "W04, slajd 276", note: "W04-platformy-ai" },

  { id: "W04-38", w: "W04", c: "ray-kubeflow", type: "single",
    q: "Co wykład wymienia jako zaletę Ray?",
    options: ["Automatyczne skalowanie do zera i wdrożenia kanarkowe", "Aktory pamięci współdzielonej i odporność na awarie węzłów", "Bezpośredni, strumieniowy odczyt danych z S3 (Fast File Mode)", "Łączenie zapytań wielu użytkowników w jeden batch na GPU"],
    correct: [1], explain: "Ray dynamicznie zarządza aktorami pamięci współdzielonej i znosi awarie węzłów. Skalowanie do zera to KServe.", src: "W04, slajd 276", note: "W04-platformy-ai" },

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

  { id: "W04-39", w: "W04", c: "mlflow", type: "single",
    q: "Co przechowuje Backend Store serwera MLflow na własnej infrastrukturze?",
    options: ["Wagi modeli i wykresy w magazynie obiektowym", "Parametry, metryki i tagi w relacyjnej bazie", "Najświeższe wektory cech dla inferencji", "Masowe dane historyczne w formacie Parquet"],
    correct: [1], explain: "Backend Store to relacyjna baza (PostgreSQL) na metadane. Wagi i wykresy trafiają do Artifact Store.", src: "W04, slajd 278", note: "W04-platformy-ai" },

  { id: "W04-40", w: "W04", c: "mlflow", type: "single",
    q: "Jaką zaletę BYOS wykład wskazuje dla serwera MLflow na własnej infrastrukturze?",
    options: ["Zniżka do 90% dzięki nadwyżkom mocy chmury", "Wyłączny dostęp do modeli GPT-4 i o1 w obwodzie sieciowym", "Automatyczne skalowanie punktów końcowych do zera", "Brak limitów wielkości modeli i opłat licencyjnych"],
    correct: [3], explain: "Własny serwer MLflow nie ma limitów wielkości modeli ani opłat licencyjnych za użytkownika.", src: "W04, slajd 278", note: "W04-platformy-ai" },

  { id: "W04-20", w: "W04", c: "hpo", type: "single",
    q: "Co robi Hyperband Pruner w Optunie?",
    options: ["Przerywa słabo rokujące próby, oszczędzając zasoby", "Łączy zapytania użytkowników w jeden batch na GPU", "Synchronizuje cechy między Offline i Online Store", "Szyfruje ruch między Podami protokołem mTLS"],
    correct: [0], explain: "Pruner kończy słabe próby wcześnie. Łączenie zapytań to Dynamic Batching w Tritonie.", src: "W04, slajd 279", note: "W04-platformy-ai" },

  { id: "W04-41", w: "W04", c: "hpo", type: "single",
    q: "Jak rozproszona Optuna synchronizuje wiedzę między setkami kontenerów roboczych?",
    options: ["Przez Online Store w Redis lub DynamoDB", "Przez wspólną bazę danych PostgreSQL", "Przez siatkę usługową Istio z mTLS", "Przez Materializację stanu w Feast"],
    correct: [1], explain: "Rozproszony backend Optuny to wspólna baza PostgreSQL. W kodzie to parametr storage z adresem postgresql://.", src: "W04, slajd 279–280", note: "W04-platformy-ai" },

  { id: "W04-42", w: "W04", c: "hpo", type: "single",
    q: "Co w kodzie Optuny ze slajdu przerywa próbę, gdy trial.should_prune() zwraca True?",
    options: ["trial.report(val_loss, step=epoch)", "raise optuna.TrialPruned()", "study.optimize(objective, n_trials=100)", "return val_loss"],
    correct: [1], explain: "Wyjątek optuna.TrialPruned() kończy słabą próbę. trial.report tylko przekazuje val_loss z epoki.", src: "W04, slajd 280", note: "W04-platformy-ai" },

  { id: "W04-21", w: "W04", c: "serving", type: "single",
    q: "Które narzędzie oferuje Scale-to-Zero i wdrażanie kanarkowe (Canary Deployments)?",
    options: ["NVIDIA Triton", "KServe", "Optuna", "Feast"],
    correct: [1], explain: "KServe to orkiestrator Cloud-Native. Triton to silnik inferencji z Dynamic Batching.", src: "W04, slajd 281", note: "W04-platformy-ai" },

  { id: "W04-43", w: "W04", c: "serving", type: "single",
    q: "Na czym polega Dynamic Batching w NVIDIA Triton?",
    options: ["Na przerywaniu słabo rokujących prób treningowych", "Na podziale karty A100 na 7 niezależnych instancji", "Na łączeniu zapytań wielu użytkowników w jeden batch", "Na automatycznym skalowaniu punktów końcowych do zera"],
    correct: [2], explain: "Dynamic Batching łączy pojedyncze zapytania w jeden wektor, żeby lepiej wykorzystać GPU. Przerywanie prób to Hyperband Pruner.", src: "W04, slajd 281", note: "W04-platformy-ai" },

  { id: "W04-44", w: "W04", c: "serving", type: "single",
    q: "W nocy ruch do modelu spada do zera, a firma nie chce płacić za bezczynne instancje. Która funkcja KServe pomoże?",
    options: ["Canary Deployments", "Dynamic Batching", "Fast File Mode", "Scale-to-Zero"],
    correct: [3], explain: "KServe oferuje automatyczne skalowanie do zera. Dynamic Batching to funkcja Tritona.", src: "W04, slajd 281", note: "W04-platformy-ai" },

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

  { id: "W04-45", w: "W04", c: "security", type: "single",
    q: "Do czego wykład proponuje siatkę usługową Istio?",
    options: ["Do wstrzykiwania ról do procesów zamiast haseł", "Do centralnego zarządzania sekretami i kluczami w Vault", "Do automatycznego szyfrowania ruchu mTLS między Podami", "Do dynamicznej alokacji zasobów CPU, GPU i TPU"],
    correct: [2], explain: "Istio realizuje Zero-Trust Network: szyfruje ruch mTLS między Podami. Sekrety trzyma HashiCorp Vault lub Azure Key Vault.", src: "W04, slajd 282", note: "W04-platformy-ai" },

  { id: "W04-46", w: "W04", c: "security", type: "single",
    q: "Które zagrożenia wykład nazywa nowymi zagrożeniami w ekosystemach AI?",
    options: ["Pipeline Jungles i Glue Code", "Data Poisoning i Prompt Injection", "Network Egress i Vendor Lock-in", "Training-Serving Skew i dryft danych"],
    correct: [1], explain: "Slajd o bezpieczeństwie wymienia Data Poisoning i Prompt Injection. Pipeline Jungles i Glue Code to zagrożenia MLOps ze slajdu 264.", src: "W04, slajd 282", note: "W04-platformy-ai" },

  { id: "W04-25", w: "W04", c: "build-buy", type: "single",
    q: "Które kryterium przemawia za strategią BUY (usługi AWS/GCP/Azure), a nie BUILD?",
    options: ["Wysoka skala i oszczędność na PaaS Premium", "Wymogi suwerenności danych", "Brak dużego zespołu DevOps/SRE", "Potrzeba własnych sterowników"],
    correct: [2], explain: "BUY: mały zespół, Time-to-Market, zmienne obciążenie. Pozostałe opcje to kryteria BUILD.", src: "W04, slajd 285", note: "W04-platformy-ai" },

  { id: "W04-47", w: "W04", c: "build-buy", type: "single",
    q: "Które kryterium przemawia za strategią BUILD (Kubernetes/Ray/MLflow), a nie BUY?",
    options: ["Priorytet dla Time-to-Market (MVP w kilka tygodni)", "Głęboka personalizacja (własne sterowniki)", "Niestabilne, zmienne obciążenie", "Brak dużego zespołu DevOps/SRE"],
    correct: [1], explain: "BUILD: wysoka skala, suwerenność danych, głęboka personalizacja. Pozostałe opcje to kryteria BUY.", src: "W04, slajd 285", note: "W04-platformy-ai" },
]});
