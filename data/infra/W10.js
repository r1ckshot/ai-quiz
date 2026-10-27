(window.QUIZ_DATA ||= []).push({ subject: "infra", questions: [
  // ===== W10 — Automatyzacja wdrażania AI w chmurze (CD4ML) =====
  { id: "W10-01", w: "W10", c: "filary", type: "single",
    q: "Który filar CD4ML oznacza możliwość odtworzenia modelu przez spięcie kodu, danych i środowiska?",
    options: ["Jakość (Quality Gates)", "Powtarzalność (Reproducibility)", "Automatyzacja (Automation)", "Interdyscyplinarność zespołów"],
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
    options: ["Oś kodu źródłowego", "Oś danych treningowych", "Oś konfiguracji", "Oś infrastruktury"],
    correct: [2], explain: "Oś konfiguracji jest zarządzana przez MLflow/Helm. Kod to Git, dane to DVC/Delta Lake.", src: "W10, slajd 290", note: "W10-cd4ml" },

  { id: "W10-06", w: "W10", c: "wyzwalacze", type: "single",
    q: "Co w referencyjnej architekturze potoku wyzwala fazę Continuous Training przy degradacji modelu?",
    options: ["Git Push / Pull Request", "Drift Alert z monitoringu", "Raport CVE ze skanu Trivy", "Kubectl rollout undo"],
    correct: [1], explain: "Git Push/PR inicjuje CI. Drift Alert z monitoringu wyzwala CT.", src: "W10, slajd 292", note: "W10-cd4ml" },

  { id: "W10-26", w: "W10", c: "wyzwalacze", type: "single",
    q: "Co według architektury referencyjnej inicjuje fazę Continuous Integration (CI)?",
    options: ["Drift Alert z systemu monitorowania", "Git Push / Pull Request", "Harmonogram (Cron)", "Promocja modelu w MLflow"],
    correct: [1], explain: "Git Push/PR inicjuje CI. Drift Alert wyzwala CT, a Cron służy do okresowego retreningu.", src: "W10, slajd 292", note: "W10-cd4ml" },

  { id: "W10-27", w: "W10", c: "wyzwalacze", type: "single",
    q: "Co NIE jest wyzwalaczem (Trigger) w referencyjnej architekturze potoku CI/CD/CT?",
    options: ["Git Push / Pull Request", "Drift Alert z monitoringu", "Harmonogram (Cron)", "Skan podatności Trivy"],
    correct: [3], explain: "Wyzwalacze to Git Push/PR, Drift Alert i Cron. Trivy skanuje obrazy na luki CVE w fazie CD.", src: "W10, slajd 292, 301", note: "W10-cd4ml" },

  { id: "W10-07", w: "W10", c: "przeplyw", type: "single",
    q: "Która sekwencja opisuje przepływ artefaktów w fazie CI?",
    options: ["Model → KServe → Staging → Produkcja", "Kod → Testy jednostkowe → Obraz Docker → Rejestr (ECR/GHCR)", "Obraz → KFP → Walidacja statystyczna → Model Registry", "Dane → DVC → MLflow → Produkcja"],
    correct: [1], explain: "CI kończy się obrazem w rejestrze. Trening w KFP to CT, KServe i Staging to CD.", src: "W10, slajd 292", note: "W10-cd4ml" },

  { id: "W10-28", w: "W10", c: "przeplyw", type: "single",
    q: "Która sekwencja opisuje przepływ artefaktów w fazie CT?",
    options: ["Kod → Testy jednostkowe → Obraz Docker → Rejestr (ECR/GHCR)", "Obraz → KFP → Walidacja statystyczna → Model Registry", "Model → Kontener serwujący (KServe) → Staging → Produkcja", "Dane → DVC → MLflow → Produkcja"],
    correct: [1], explain: "CT bierze obraz z CI, trenuje w klastrze (KFP) i kończy wpisem do Model Registry (MLflow).", src: "W10, slajd 292", note: "W10-cd4ml" },

  { id: "W10-29", w: "W10", c: "przeplyw", type: "single",
    q: "Który komponent w fazie CD pełni rolę kontenera serwującego model?",
    options: ["Kubeflow Pipelines (KFP)", "KServe", "Rejestr Modeli MLflow", "Rejestr obrazów ECR/GHCR"],
    correct: [1], explain: "CD: Model → KServe → Staging → Produkcja. KFP trenuje w CT, a ECR/GHCR przechowuje obrazy z CI.", src: "W10, slajd 292", note: "W10-cd4ml" },

  { id: "W10-08", w: "W10", c: "ci-testy", type: "single",
    q: "Po co w fazie CI symuluje się 1–2 kroki treningu?",
    options: ["Aby sprawdzić standardy kodu", "Aby wykryć NaN/Inf w gradientach", "Aby wygenerować SBOM", "Aby porównać model z Championem"],
    correct: [1], explain: "To weryfikacja gradientów. Standardy kodu sprawdzają flake8 i black.", src: "W10, slajd 295", note: "W10-cd4ml" },

  { id: "W10-30", w: "W10", c: "ci-testy", type: "single",
    q: "Co weryfikują testy algorytmiczne w fazie CI?",
    options: ["Standardy kodu (flake8, black)", "Kształty tensorów i determinizm", "Rozkłady statystyczne i wartości Null", "Podpisy kryptograficzne wag modelu"],
    correct: [1], explain: "Testy algorytmiczne sprawdzają Tensor Shapes i Random Seeds. flake8 i black to analiza statyczna.", src: "W10, slajd 295", note: "W10-cd4ml" },

  { id: "W10-31", w: "W10", c: "ci-testy", type: "single",
    q: "Do czego według wykładu służą flake8 i black w fazie CI?",
    options: ["Do pilnowania standardów kodu", "Do walidacji kontraktów danych", "Do wykrywania NaN/Inf w gradientach", "Do inwentaryzacji bibliotek (SBOM)"],
    correct: [0], explain: "flake8 i black to statyczna analiza dla standardów kodu. Kontrakty danych waliduje Great Expectations.", src: "W10, slajd 295", note: "W10-cd4ml" },

  { id: "W10-09", w: "W10", c: "great-expectations", type: "single",
    q: "Które narzędzie w fazie CI waliduje kontrakty danych i odrzuca „zatrute” zbiory przed treningiem?",
    options: ["flake8 i black", "Great Expectations", "Syft i Trivy", "Sigstore Cosign"],
    correct: [1], explain: "Great Expectations testuje rozkłady i brakujące wartości w locie.", src: "W10, slajd 295", note: "W10-cd4ml" },

  { id: "W10-32", w: "W10", c: "great-expectations", type: "single",
    q: "Co według wykładu testuje Great Expectations w locie w fazie CI?",
    options: ["Kształty tensorów i determinizm treningu", "Rozkłady statystyczne i wartości Null", "Standardy formatowania kodu Pythona", "Luki CVE w bibliotekach obrazu Docker"],
    correct: [1], explain: "Great Expectations waliduje kontrakty danych: rozkłady i Nulls. Kształty tensorów to testy algorytmiczne.", src: "W10, slajd 295", note: "W10-cd4ml" },

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
    options: ["Trening odbywa się w izolowanych Namespaces", "Te same dane wejściowe dają statystycznie spójny wynik", "Kontenery treningowe są niszczone po każdym przebiegu", "Model jest retrenowany według stałego harmonogramu"],
    correct: [1], explain: "Izolowane Namespaces to efemeryczność. Idempotentność dotyczy spójności wyniku.", src: "W10, slajd 297", note: "W10-cd4ml" },

  { id: "W10-33", w: "W10", c: "idempotentnosc", type: "single",
    q: "Dwa przebiegi CT na identycznych danych dają statystycznie rozbieżne modele. Którą zasadę inżynieryjną CT naruszono?",
    options: ["Efemeryczność", "Idempotentność", "Oddzielenie obliczeń od stanu", "Interdyscyplinarność"],
    correct: [1], explain: "Idempotentność wymaga statystycznie spójnego wyniku dla identycznych danych. Efemeryczność to trening w izolowanych Namespaces.", src: "W10, slajd 297", note: "W10-cd4ml" },

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

  { id: "W10-34", w: "W10", c: "pakowanie", type: "single",
    q: "Jakie cechy ma wzorzec pakowania Embedded Model?",
    options: ["Lekki obraz, zależność od sieci", "Szybki start, duży rozmiar obrazu", "Wolny start, mały rozmiar obrazu", "Wagi pobierane z S3 podczas startu"],
    correct: [1], explain: "Embedded Model ma wagi w obrazie Docker. Lekki obraz z zależnością od sieci to Runtime Download.", src: "W10, slajd 301", note: "W10-cd4ml" },

  { id: "W10-16", w: "W10", c: "devsecops", type: "single",
    q: "Do czego służy SBOM w fazie CD?",
    options: ["Do skanowania obrazów na luki CVE", "Do inwentaryzacji użytych bibliotek", "Do kryptograficznego podpisywania obrazów", "Do generowania krótkotrwałych tokenów"],
    correct: [1], explain: "SBOM to inwentaryzacja bibliotek (np. Syft). CVE skanuje Trivy.", src: "W10, slajd 301", note: "W10-cd4ml" },

  { id: "W10-35", w: "W10", c: "devsecops", type: "single",
    q: "Którym narzędziem według wykładu wykrywa się luki (CVE) w obrazie przed wdrożeniem?",
    options: ["Syft", "Trivy", "Cosign", "Great Expectations"],
    correct: [1], explain: "Trivy skanuje podatności CVE. Syft tworzy SBOM, a Cosign podpisuje obrazy.", src: "W10, slajd 301", note: "W10-cd4ml" },

  { id: "W10-36", w: "W10", c: "devsecops", type: "single",
    q: "Co NIE należy do praktyk bezpieczeństwa (DevSecOps) w fazie CD?",
    options: ["SBOM, czyli inwentaryzacja bibliotek", "Skanowanie podatności CVE narzędziem Trivy", "Uruchamianie procesów jako non-root", "Step Caching wykonanych kroków potoku"],
    correct: [3], explain: "DevSecOps w CD to SBOM, Trivy i non-root user. Step Caching to funkcja Kubeflow Pipelines.", src: "W10, slajd 301, 305", note: "W10-cd4ml" },

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
    options: ["Ewaluacja wycinkowa (slice-based)", "Analiza statyczna flake8", "Step Caching w Kubeflow", "Skanowanie SBOM narzędziem Syft"],
    correct: [0], explain: "Slice-based evaluation testuje metryki dla podzbiorów. Chroni przed pułapką globalnych metryk.", src: "W10, slajd 303", note: "W10-cd4ml" },

  { id: "W10-37", w: "W10", c: "ewaluacja", type: "single",
    q: "Zmiana nazwiska klienta nie powinna zmieniać jego oceny kredytowej. Jakie testy to sprawdzają?",
    options: ["Ewaluacja wycinkowa (Slice-based evaluation)", "Testy niezmienniczości (Invariance)", "Testy determinizmu (Random Seeds)", "Walidacja kontraktów danych"],
    correct: [1], explain: "Testy Invariance sprawdzają, że nieistotna zmiana wejścia nie zmienia wyniku. Slice-based testuje metryki dla podzbiorów.", src: "W10, slajd 303", note: "W10-cd4ml" },

  { id: "W10-38", w: "W10", c: "ewaluacja", type: "single",
    q: "Co robi automatyczna brama (Automated Gating) w potoku CI/CD?",
    options: ["Blokuje promocję modelu łamiącego progi segmentów", "Przełącza ruch etapami 5% → 10% → 100% przez Istio", "Klonuje realny ruch do nowej wersji modelu w cieniu", "Odrzuca zatrute zbiory danych przed treningiem"],
    correct: [0], explain: "Gating blokuje promocję, jeśli model narusza progi któregokolwiek segmentu. Odrzucanie zatrutych danych to Great Expectations.", src: "W10, slajd 303", note: "W10-cd4ml" },

  { id: "W10-20", w: "W10", c: "iac", type: "single",
    q: "Po co w IaC ustawia się min_size = 0 dla grup węzłów GPU?",
    options: ["Aby wyłączyć skanowanie CVE", "Aby zredukować koszty w spoczynku", "Aby wymusić Step Caching", "Aby uruchamiać procesy jako non-root"],
    correct: [1], explain: "To element FinOps: węzły GPU są powoływane tylko na czas treningu CT.", src: "W10, slajd 304", note: "W10-cd4ml" },

  { id: "W10-39", w: "W10", c: "iac", type: "single",
    q: "Który problem według wykładu eliminuje Infrastruktura jako kod (IaC)?",
    options: ["Drift infrastrukturalny z ręcznej konfiguracji", "Dryft danych powyżej progu SLA w produkcji", "Cicha awaria przy zamienionych kolumnach SQL", "Błąd Schema Mismatch po powrocie do starego kodu"],
    correct: [0], explain: "Ręczna konfiguracja klastrów GPU i InfiniBand uniemożliwia powtarzalność. IaC opisuje infrastrukturę deklaratywnie.", src: "W10, slajd 304", note: "W10-cd4ml" },

  { id: "W10-40", w: "W10", c: "iac", type: "single",
    q: "Które narzędzia wykład podaje do deklaratywnego definiowania klastrów, uprawnień IAM i magazynów danych?",
    options: ["Kyverno / Gatekeeper", "Terraform / Crossplane", "Tekton / Argo Workflows", "Sigstore / Cosign"],
    correct: [1], explain: "Terraform i Crossplane to narzędzia IaC. Kyverno/Gatekeeper walidują podpisy w klastrze.", src: "W10, slajd 304", note: "W10-cd4ml" },

  { id: "W10-21", w: "W10", c: "orkiestracja", type: "single",
    q: "Które narzędzie ma natywnie Artifact Lineage (ML Metadata) i Step Caching kroków DAG?",
    options: ["GitHub Actions", "Tekton / Argo Workflows", "Kubeflow Pipelines", "Terraform"],
    correct: [2], explain: "W GitHub Actions i Tekton/Argo lineage nie ma. KFP ma go natywnie.", src: "W10, slajd 305, 306", note: "W10-cd4ml" },

  { id: "W10-41", w: "W10", c: "orkiestracja", type: "single",
    q: "Jaką rolę według wykładu pełni GitHub Actions w dychotomii narzędzi orkiestracji?",
    options: ["Silnik ML do ciężkich obliczeń w Kubernetesie", "Nadrzędny kontroler CI/CD i sterowanie API", "Ogólna orkiestracja zadań w Kubernetesie", "Natywna alokacja GPU/TPU dla treningu"],
    correct: [1], explain: "GitHub Actions to nadrzędny kontroler CI/CD. Ciężkie obliczenia ML w Kubernetesie wykonuje KFP.", src: "W10, slajd 305, 306", note: "W10-cd4ml" },

  { id: "W10-42", w: "W10", c: "orkiestracja", type: "single",
    q: "Co daje funkcja Step Caching w Kubeflow Pipelines?",
    options: ["Śledzi metadane artefaktów w bazie MLMD", "Pomija wykonane już kroki potoku (np. ETL)", "Buforuje wyłącznie zależności, np. pip cache", "Przydziela GPU przez Node Pools Kubernetesa"],
    correct: [1], explain: "Step Caching pomija wykonane kroki i skraca retrening. Śledzenie metadanych w MLMD to Artifact Lineage.", src: "W10, slajd 305, 306", note: "W10-cd4ml" },

  { id: "W10-22", w: "W10", c: "lancuch-dostaw", type: "single",
    q: "Który atak polega na zdalnym wykonaniu kodu (RCE) przy deserializacji wag .pkl lub .pt?",
    options: ["Model Poisoning", "Pickle Vulnerability", "Schema Mismatch", "Silent Failure"],
    correct: [1], explain: "Pickle Vulnerability to RCE przy deserializacji. Model Poisoning to podmiana modelu z backdoorem.", src: "W10, slajd 307", note: "W10-cd4ml" },

  { id: "W10-43", w: "W10", c: "lancuch-dostaw", type: "single",
    q: "Atakujący podmienia model w Model Registry na wersję z wstrzykniętym „backdoorem”. Jak nazywa się ten wektor ataku?",
    options: ["Pickle Vulnerability", "Model Poisoning", "Schema Mismatch", "Drift infrastrukturalny"],
    correct: [1], explain: "Model Poisoning to podmiana modelu z backdoorem. Pickle Vulnerability to RCE przy deserializacji.", src: "W10, slajd 307", note: "W10-cd4ml" },

  { id: "W10-44", w: "W10", c: "lancuch-dostaw", type: "single",
    q: "Na czym polega obrona Sigstore & Cosign w łańcuchu dostaw ML?",
    options: ["Na inwentaryzacji bibliotek obrazu (SBOM)", "Na podpisywaniu obrazów Docker i wag modelu", "Na skanowaniu obrazów Docker pod kątem luk CVE", "Na zastąpieniu kluczy API tokenami OIDC"],
    correct: [1], explain: "Sigstore i Cosign podpisują obrazy i wagi w CI/CD. Podpis jest walidowany w klastrze przez Kyverno/Gatekeeper.", src: "W10, slajd 307", note: "W10-cd4ml" },

  { id: "W10-23", w: "W10", c: "sekrety", type: "single",
    q: "Jakie rozwiązanie zastępuje statyczne klucze API w GitHub Secrets bezkluczowym uwierzytelnianiem?",
    options: ["Sigstore i Cosign", "OpenID Connect (OIDC)", "Kyverno / Gatekeeper", "Skanowanie Trivy"],
    correct: [1], explain: "OIDC daje runnerowi krótkotrwały token tożsamości akceptowany przez chmurę.", src: "W10, slajd 308", note: "W10-cd4ml" },

  { id: "W10-45", w: "W10", c: "sekrety", type: "single",
    q: "Do czego wykład proponuje wykorzystać HashiCorp Vault?",
    options: ["Do podpisywania obrazów Docker i wag modelu", "Do generowania haseł bazodanowych w locie", "Do walidacji podpisów przed startem Poda", "Do inwentaryzacji bibliotek w obrazie (SBOM)"],
    correct: [1], explain: "Vault daje dynamiczne hasła bazodanowe z czasem życia rzędu minut. Podpisy to Sigstore/Cosign i Kyverno.", src: "W10, slajd 308", note: "W10-cd4ml" },

  { id: "W10-46", w: "W10", c: "sekrety", type: "single",
    q: "Co według wykładu jest antywzorcem w zarządzaniu sekretami?",
    options: ["Krótkotrwały token tożsamości OIDC dla runnera", "Statyczne klucze API w GitHub Secrets", "Dynamiczne hasła z Vault z czasem życia minut", "Bezkluczowe uwierzytelnianie (Keyless)"],
    correct: [1], explain: "Statyczne klucze w Gicie lub GitHub Secrets grożą wyciekiem. Rozwiązaniem jest OIDC i dynamiczne sekrety Vault.", src: "W10, slajd 308", note: "W10-cd4ml" },

  { id: "W10-24", w: "W10", c: "rollback", type: "single",
    q: "Jaki błąd powoduje powrót do starego kodu przy nowym schemacie w Feature Store?",
    options: ["Schema Mismatch", "Silent Failure", "OOM Killer", "Infrastructure Drift"],
    correct: [0], explain: "Dlatego każda wersja modelu musi mieć metadaną o kompatybilnej wersji schematu danych.", src: "W10, slajd 310", note: "W10-cd4ml" },

  { id: "W10-47", w: "W10", c: "rollback", type: "single",
    q: "Co pozwala odczytać dane w stanie z momentu, gdy stary model był stabilny?",
    options: ["Zapytania czasowe w Delta Lake/Iceberg", "Polecenie kubectl rollout undo w klastrze", "Step Caching w Kubeflow Pipelines (KFP)", "Artifact Lineage w bazie ML Metadata"],
    correct: [0], explain: "Time-travel queries w Delta Lake/Iceberg czytają dane z dawnego stanu. kubectl rollout undo cofa tylko obraz Docker.", src: "W10, slajd 310", note: "W10-cd4ml" },

  { id: "W10-48", w: "W10", c: "rollback", type: "single",
    q: "Jak według wykładu wygląda rollback w klasycznych mikroserwisach?",
    options: ["Przywrócenie starego obrazu (rollout undo)", "Odczyt danych zapytaniami czasowymi Delta Lake", "Synchronizacja modelu z wersją schematu danych", "Retrening modelu na danych z migawki DVC"],
    correct: [0], explain: "W mikroserwisach rollback to proste kubectl rollout undo. W AI trzeba też zsynchronizować schemat danych.", src: "W10, slajd 310", note: "W10-cd4ml" },

  { id: "W10-25", w: "W10", c: "silent-failure", type: "single",
    q: "System zwraca HTTP 200 OK, ale model przetwarza zamienione kolumny z SQL. Jak nazywa się taka awaria?",
    options: ["Awaria kaskadowa (Cascading Failure)", "Cicha awaria (Silent Failure)", "Zatrucie modelu (Model Poisoning)", "Drift infrastrukturalny"],
    correct: [1], explain: "Silent Failure nie rzuca wyjątków. Daje błędne biznesowo decyzje.", src: "W10, slajd 311", note: "W10-cd4ml" },

  { id: "W10-49", w: "W10", c: "silent-failure", type: "single",
    q: "Co NIE jest cechą cichej awarii (Silent Failure) według wykładu?",
    options: ["System zwraca HTTP 200 OK", "Model przetwarza uszkodzony wektor wejściowy", "Wynikiem są błędne biznesowo decyzje", "System rzuca wyjątek i zatrzymuje potok"],
    correct: [3], explain: "Cicha awaria nie rzuca wyjątków. System działa, ale podejmuje błędne biznesowo decyzje.", src: "W10, slajd 311", note: "W10-cd4ml" },
]});
