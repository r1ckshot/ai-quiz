(window.QUIZ_DATA ||= []).push({ subject: "infra", questions: [
  // ===== W10 — Automatyzacja wdrażania AI w chmurze (CD4ML) =====
  { id: "W10-01", w: "W10", c: "filary", type: "single",
    q: "Który filar CD4ML oznacza możliwość odtworzenia modelu przez spięcie kodu, danych i środowiska?",
    options: ["Jakość (Quality)", "Powtarzalność (Reproducibility)", "Automatyzacja (Automation)", "Interdyscyplinarność"],
    correct: [1], explain: "Powtarzalność to odtworzenie artefaktu. Jakość to bramki, automatyzacja to brak ręcznych interwencji.", src: "W10, slajd 289", note: "W10-cd4ml" },

  { id: "W10-02", w: "W10", c: "filary", type: "single",
    q: "Co NIE jest jednym z trzech filarów architektury CD4ML?",
    options: ["Powtarzalność", "Jakość", "Automatyzacja", "Efemeryczność"],
    correct: [3], explain: "Filary to powtarzalność, jakość i automatyzacja. Efemeryczność to zasada inżynieryjna fazy CT.", src: "W10, slajd 289, 297", note: "W10-cd4ml" },

  { id: "W10-03", w: "W10", c: "osie", type: "single",
    q: "Jak według wykładu wygląda zależność w systemach AI?",
    options: ["Oprogramowanie = f(Kod)", "Model = f(Kod, Dane)", "Model = f(Kod, Dane, Konfiguracja)", "Model = f(Dane, Infrastruktura)"],
    correct: [2], explain: "Systemy AI mają trzy osie zmienności. Oprogramowanie = f(Kod) dotyczy systemów tradycyjnych.", src: "W10, slajd 290", note: "W10-cd4ml" },

  { id: "W10-04", w: "W10", c: "osie", type: "single",
    q: "Jaką krotką musi być identyfikowany każdy artefakt w CD4ML?",
    options: ["(Commit Hash, Data Snapshot Hash, Config ID)", "(Image Tag, Commit Hash, Namespace)", "(Model ID, Accuracy, Timestamp)", "(Run ID, Experiment ID, Stage)"],
    correct: [0], explain: "To wymóg nierozerwalnego spięcia trzech osi: kod, dane, konfiguracja.", src: "W10, slajd 290", note: "W10-cd4ml" },

  { id: "W10-05", w: "W10", c: "osie", type: "single",
    q: "Hiperparametry, wersje CUDA i limity K8s należą według wykładu do której osi zmienności?",
    options: ["Kod", "Dane", "Konfiguracja", "Infrastruktura"],
    correct: [2], explain: "Oś konfiguracji jest zarządzana przez MLflow/Helm. Kod to Git, dane to DVC/Delta Lake.", src: "W10, slajd 290", note: "W10-cd4ml" },

  { id: "W10-06", w: "W10", c: "wyzwalacze", type: "single",
    q: "Co w referencyjnej architekturze potoku wyzwala fazę Continuous Training przy degradacji modelu?",
    options: ["Git Push / Pull Request", "Drift Alert z systemu monitorowania", "Skan Trivy", "Kubectl rollout undo"],
    correct: [1], explain: "Git Push/PR inicjuje CI. Drift Alert z monitoringu wyzwala CT.", src: "W10, slajd 292", note: "W10-cd4ml" },

  { id: "W10-07", w: "W10", c: "przeplyw", type: "single",
    q: "Która sekwencja opisuje przepływ artefaktów w fazie CI?",
    options: ["Model → KServe → Staging → Produkcja", "Kod → Testy jednostkowe → Obraz Docker → Rejestr (ECR/GHCR)", "Obraz → KFP → Walidacja statystyczna → Model Registry", "Dane → DVC → MLflow → Produkcja"],
    correct: [1], explain: "CI kończy się obrazem w rejestrze. Trening w KFP to CT, KServe i Staging to CD.", src: "W10, slajd 292", note: "W10-cd4ml" },

  { id: "W10-08", w: "W10", c: "ci-testy", type: "single",
    q: "Po co w fazie CI symuluje się 1–2 kroki treningu?",
    options: ["Aby sprawdzić standardy kodu", "Aby wykryć NaN/Inf w gradientach", "Aby wygenerować SBOM", "Aby porównać model z Championem"],
    correct: [1], explain: "To weryfikacja gradientów. Standardy kodu sprawdzają flake8 i black.", src: "W10, slajd 295", note: "W10-cd4ml" },

  { id: "W10-09", w: "W10", c: "great-expectations", type: "single",
    q: "Które narzędzie w fazie CI waliduje kontrakty danych i odrzuca „zatrute” zbiory przed treningiem?",
    options: ["flake8", "Great Expectations", "Syft", "Cosign"],
    correct: [1], explain: "Great Expectations testuje rozkłady i brakujące wartości w locie.", src: "W10, slajd 295", note: "W10-cd4ml" },

  { id: "W10-10", w: "W10", c: "ct-strategie", type: "single",
    q: "Która strategia wyzwalania CT jest według wykładu zalecana?",
    options: ["Scheduled (Cron)", "Data-Driven", "Event-Driven", "Manual"],
    correct: [2], explain: "Event-Driven: retrening po wykryciu dryftu danych powyżej progu SLA.", src: "W10, slajd 297", note: "W10-cd4ml" },

  { id: "W10-11", w: "W10", c: "ct-strategie", type: "single",
    q: "Potok CT startuje, gdy w magazynie S3 pojawia się nowa, duża partia danych. Jaka to strategia?",
    options: ["Event-Driven", "Data-Driven", "Scheduled (Cron)", "Shadow"],
    correct: [1], explain: "Data-Driven reaguje na nowe dane w S3/GCS. Event-Driven reaguje na dryft.", src: "W10, slajd 297", note: "W10-cd4ml" },

  { id: "W10-12", w: "W10", c: "idempotentnosc", type: "single",
    q: "Co oznacza zasada idempotentności w fazie CT?",
    options: ["Trening odbywa się w izolowanych Namespaces", "Identyczne dane wejściowe generują statystycznie spójny wynik", "Kontenery są niszczone po treningu", "Model jest retrenowany co tydzień"],
    correct: [1], explain: "Izolowane Namespaces to efemeryczność. Idempotentność dotyczy spójności wyniku.", src: "W10, slajd 297", note: "W10-cd4ml" },

  { id: "W10-13", w: "W10", c: "dvc-mlflow", type: "single",
    q: "Które narzędzie odpowiada za wersjonowanie ciężkich zbiorów danych i wag modelu („Git dla danych”)?",
    options: ["MLflow", "DVC", "Kubeflow Pipelines", "Helm"],
    correct: [1], explain: "DVC wersjonuje dane i wagi. MLflow przechowuje metryki, parametry i etapy modelu.", src: "W10, slajd 298", note: "W10-cd4ml" },

  { id: "W10-14", w: "W10", c: "dvc-mlflow", type: "single",
    q: "Co według wykładu pełni funkcję centralnego źródła prawdy o metadanych, wersjach kodu i statusach modelu?",
    options: ["Magazyn Artefaktów S3/DVC", "Rejestr Modeli MLflow", "Rejestr obrazów ECR/GHCR", "Feature Store"],
    correct: [1], explain: "Rejestr MLflow trzyma metadane. Ciężkie wagi leżą w magazynie S3/DVC.", src: "W10, slajd 299, 300", note: "W10-cd4ml" },

  { id: "W10-15", w: "W10", c: "pakowanie", type: "single",
    q: "Który wzorzec pakowania daje lekki obraz, ale zależność od sieci przy starcie kontenera?",
    options: ["Embedded Model", "Runtime Download", "Multi-stage build", "Shadow Deployment"],
    correct: [1], explain: "Runtime Download pobiera wagi z S3 przy starcie. Embedded Model to szybki start i duży obraz.", src: "W10, slajd 301", note: "W10-cd4ml" },

  { id: "W10-16", w: "W10", c: "devsecops", type: "single",
    q: "Do czego służy SBOM w fazie CD?",
    options: ["Do skanowania luk CVE", "Do automatycznej inwentaryzacji bibliotek", "Do podpisywania obrazów", "Do generowania krótkotrwałych tokenów"],
    correct: [1], explain: "SBOM to inwentaryzacja bibliotek (np. Syft). CVE skanuje Trivy.", src: "W10, slajd 301", note: "W10-cd4ml" },

  { id: "W10-17", w: "W10", c: "shadow-canary", type: "single",
    q: "W którym wzorcu 100% realnego ruchu trafia do nowej wersji, ale odpowiedź nie wraca do klienta?",
    options: ["Canary Deployment", "Shadow Deployment", "Blue-Green", "Rollback"],
    correct: [1], explain: "Shadow klonuje ruch i loguje wyniki. Canary stopniowo przekierowuje prawdziwy ruch.", src: "W10, slajd 302", note: "W10-cd4ml" },

  { id: "W10-18", w: "W10", c: "shadow-canary", type: "single",
    q: "Ruch jest przekierowywany do nowego modelu etapami 5% → 10% → 100% przez Istio. Jaki to wzorzec?",
    options: ["Shadow Deployment", "Canary Deployment", "Embedded Model", "Step Caching"],
    correct: [1], explain: "Canary Deployment to stopniowe przekierowanie ruchu przez Service Mesh (Istio).", src: "W10, slajd 302", note: "W10-cd4ml" },

  { id: "W10-19", w: "W10", c: "ewaluacja", type: "single",
    q: "Model ma wyższe średnie Accuracy, ale drastycznie gorsze wyniki dla klientów VIP. Która technika to wykryje?",
    options: ["Ewaluacja wycinkowa (slice-based)", "Analiza statyczna flake8", "Step Caching", "SBOM"],
    correct: [0], explain: "Slice-based evaluation testuje metryki dla podzbiorów. Chroni przed pułapką globalnych metryk.", src: "W10, slajd 303", note: "W10-cd4ml" },

  { id: "W10-20", w: "W10", c: "iac", type: "single",
    q: "Po co w IaC ustawia się min_size = 0 dla grup węzłów GPU?",
    options: ["Aby wyłączyć skanowanie CVE", "Aby zredukować koszty w spoczynku", "Aby wymusić Step Caching", "Aby uruchamiać procesy jako non-root"],
    correct: [1], explain: "To element FinOps: węzły GPU są powoływane tylko na czas treningu CT.", src: "W10, slajd 304", note: "W10-cd4ml" },

  { id: "W10-21", w: "W10", c: "orkiestracja", type: "single",
    q: "Które narzędzie ma natywnie Artifact Lineage (ML Metadata) i Step Caching kroków DAG?",
    options: ["GitHub Actions", "Tekton / Argo Workflows", "Kubeflow Pipelines", "Terraform"],
    correct: [2], explain: "W GitHub Actions i Tekton/Argo lineage nie ma. KFP ma go natywnie.", src: "W10, slajd 305, 306", note: "W10-cd4ml" },

  { id: "W10-22", w: "W10", c: "lancuch-dostaw", type: "single",
    q: "Który atak polega na zdalnym wykonaniu kodu (RCE) przy deserializacji wag .pkl lub .pt?",
    options: ["Model Poisoning", "Pickle Vulnerability", "Schema Mismatch", "Silent Failure"],
    correct: [1], explain: "Pickle Vulnerability to RCE przy deserializacji. Model Poisoning to podmiana modelu z backdoorem.", src: "W10, slajd 307", note: "W10-cd4ml" },

  { id: "W10-23", w: "W10", c: "sekrety", type: "single",
    q: "Jakie rozwiązanie zastępuje statyczne klucze API w GitHub Secrets bezkluczowym uwierzytelnianiem?",
    options: ["Sigstore", "OpenID Connect (OIDC)", "Kyverno", "SBOM"],
    correct: [1], explain: "OIDC daje runnerowi krótkotrwały token tożsamości akceptowany przez chmurę.", src: "W10, slajd 308", note: "W10-cd4ml" },

  { id: "W10-24", w: "W10", c: "rollback", type: "single",
    q: "Jaki błąd powoduje powrót do starego kodu przy nowym schemacie w Feature Store?",
    options: ["Schema Mismatch", "Silent Failure", "OOM Killer", "Infrastructure Drift"],
    correct: [0], explain: "Dlatego każda wersja modelu musi mieć metadaną o kompatybilnej wersji schematu danych.", src: "W10, slajd 310", note: "W10-cd4ml" },

  { id: "W10-25", w: "W10", c: "silent-failure", type: "single",
    q: "System zwraca HTTP 200 OK, ale model przetwarza zamienione kolumny z SQL. Jak nazywa się taka awaria?",
    options: ["Schema Mismatch", "Cicha awaria (Silent Failure)", "Model Poisoning", "Drift infrastrukturalny"],
    correct: [1], explain: "Silent Failure nie rzuca wyjątków. Daje błędne biznesowo decyzje.", src: "W10, slajd 311", note: "W10-cd4ml" },
]});
