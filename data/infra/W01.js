(window.QUIZ_DATA ||= []).push({ subject: "infra", questions: [
  // ===== W01 — Wprowadzenie do architektury chmurowej dla AI =====
  { id: "W01-01", w: "W01", c: "ml-vs-se", type: "single",
    q: "Które równanie opisuje podejście Data-Driven (uczenie maszynowe)?",
    options: ["Kod + Dane wejściowe = Wynik deterministyczny", "Dane + Wyniki = Reguły (wagi modelu)", "Reguły + Wyniki = Dane", "Kod + Reguły = Dane wejściowe"],
    correct: [1], explain: "W ML system wywnioskowuje reguły statystyczne z przykładów: dane + wyniki → wagi. 'Kod + Dane = Wynik' to Logic-Driven.", src: "W01, slajd 9", note: "W01-wprowadzenie" },

  { id: "W01-02", w: "W01", c: "model-decay", type: "single",
    q: "Model traci skuteczność z czasem, choć jego kod binarny pozostaje bezbłędny. Jak nazywa się to zjawisko?",
    options: ["Dependency Hell", "Glue Code", "Model Decay", "Segmentation Fault"],
    correct: [2], explain: "Model Decay (degradacja) — psuje się jakość predykcji, nie program. Przeciwdziała mu CT.", src: "W01, slajd 10", note: "W01-wprowadzenie" },

  { id: "W01-03", w: "W01", c: "data-vs-concept-drift", type: "single",
    q: "Czym jest Data Drift?",
    options: ["Zmianą relacji między wejściem a wynikiem (X → Y)", "Zmianą rozkładu statystycznego cech wejściowych (X)", "Utratą danych w Object Storage", "Różnicą wersji bibliotek między środowiskami"],
    correct: [1], explain: "Data Drift = zmienia się rozkład X. Zmiana relacji X → Y to Concept Drift.", src: "W01, slajd 10, 26", note: "W01-wprowadzenie" },

  { id: "W01-04", w: "W01", c: "data-vs-concept-drift", type: "single",
    q: "Ewolucja relacji między wejściem a wynikiem (X → Y) to:",
    options: ["Concept Drift (dryft pojęciowy)", "Data Drift (dryft danych)", "Model Registry", "Data Lineage"],
    correct: [0], explain: "Concept Drift — zmienia się sama zależność X → Y. Data Drift dotyczy tylko rozkładu X.", src: "W01, slajd 26", note: "W01-wprowadzenie" },

  { id: "W01-05", w: "W01", c: "data-vs-concept-drift", type: "single",
    q: "Na slajdzie podano przykład: zmiana nawyków zakupowych po pandemii. Jakie zjawisko ilustruje?",
    options: ["Glue Code", "Concept Drift", "Dead Experimental Code", "Data Drift"],
    correct: [3], explain: "Slajd 10 podaje ten przykład przy Data Drift — zmiana rozkładu cech wejściowych.", src: "W01, slajd 10", note: "W01-wprowadzenie" },

  { id: "W01-06", w: "W01", c: "mlops-trojca", type: "single",
    q: "Jakie trzy osie zmiany obejmuje „Trójca Święta MLOps”?",
    options: ["Kod, dane, modele", "Kod, sprzęt, ludzie", "Dane, sieć, bezpieczeństwo", "CI, CD, CT"],
    correct: [0], explain: "MLOps = równorzędne zarządzanie i wersjonowanie kodu, danych i modeli. CI/CD/CT to potoki, nie osie.", src: "W01, slajd 11", note: "W01-wprowadzenie" },

  { id: "W01-07", w: "W01", c: "mlops-trojca", type: "single",
    q: "Co NIE jest jedną z trzech osi zmiany w „Trójcy Świętej MLOps”?",
    options: ["Dane", "Infrastruktura sprzętowa", "Modele", "Kod"],
    correct: [1], explain: "Trzy osie: KOD, DANE, MODELE. Sprzęt nie jest osią wersjonowania.", src: "W01, slajd 11", note: "W01-wprowadzenie" },

  { id: "W01-08", w: "W01", c: "ct", type: "single",
    q: "Który element potoków jest unikalny dla systemów AI (nie występuje w klasycznym DevOps)?",
    options: ["Continuous Integration (CI)", "Continuous Delivery (CD)", "Continuous Training (CT)", "Code Review"],
    correct: [2], explain: "CT — „nowa litera w alfabecie CI/CD”, zapobiega degradacji predykcyjnej (Model Decay).", src: "W01, slajd 11, 26", note: "W01-wprowadzenie" },

  { id: "W01-09", w: "W01", c: "hidden-debt", type: "single",
    q: "Według publikacji Google „Hidden Technical Debt in ML Systems” (2015) właściwy kod ML stanowi ok.:",
    options: ["50% kodu produkcyjnego", "25% kodu produkcyjnego", "95% kodu produkcyjnego", "5% kodu produkcyjnego"],
    correct: [3], explain: "Ok. 5%. Reszta to infrastruktura: zbieranie danych, weryfikacja, ekstrakcja cech, zasoby, serwowanie. 25% to „zasada 25%” (inny temat).", src: "W01, slajd 12", note: "W01-wprowadzenie" },

  { id: "W01-10", w: "W01", c: "iaas-paas-saas", type: "single",
    q: "Amazon SageMaker, Azure ML i Vertex AI to przykłady modelu:",
    options: ["PaaS", "IaaS", "SaaS", "On-premise"],
    correct: [0], explain: "PaaS — zarządzane usługi ML z automatyczną orkiestracją treningu i serwowania. SaaS to gotowe modele przez API (GPT-4).", src: "W01, slajd 15", note: "W01-wprowadzenie" },

  { id: "W01-11", w: "W01", c: "iaas-paas-saas", type: "single",
    q: "Potrzebujesz pełnej kontroli nad OS i sterownikami GPU do optymalizacji niskopoziomowej (np. Amazon EC2 P4d). Który model usług?",
    options: ["SaaS", "PaaS", "IaaS", "Model hybrydowy"],
    correct: [2], explain: "IaaS daje pełną kontrolę nad OS i sterownikami GPU — kluczowe przy optymalizacji niskopoziomowej.", src: "W01, slajd 15", note: "W01-wprowadzenie" },

  { id: "W01-12", w: "W01", c: "namespaces-cgroups", type: "single",
    q: "Który mechanizm jądra Linux limituje zasoby CPU/RAM kontenera i chroni przed „hałaśliwym sąsiadem”?",
    options: ["Namespaces", "Cgroups", "Hypervisor", "NVIDIA Container Toolkit"],
    correct: [1], explain: "Cgroups (Control Groups) = limity zasobów. Namespaces = izolacja widoku systemu.", src: "W01, slajd 18", note: "W01-wprowadzenie" },

  { id: "W01-13", w: "W01", c: "namespaces-cgroups", type: "single",
    q: "Za co odpowiadają Namespaces (przestrzenie nazw) w kontenerach?",
    options: ["Za limitowanie zużycia CPU i RAM", "Za emulację sprzętu", "Za izolację widoku systemu (pliki, sieć, procesy)", "Za wstrzykiwanie GPU do kontenera"],
    correct: [2], explain: "Namespaces izolują to, co proces widzi (pliki, sieć, PID=1). Limity zasobów to cgroups, GPU — NVIDIA Container Toolkit.", src: "W01, slajd 18", note: "W01-wprowadzenie" },

  { id: "W01-14", w: "W01", c: "vm-vs-container", type: "single",
    q: "Które stwierdzenie o kontenerach jest prawdziwe?",
    options: ["Każdy kontener ma własny, kompletny Guest OS", "Kontener współdzieli jedno fizyczne jądro hosta z innymi procesami", "Czas startu kontenera mierzy się w minutach", "Obrazy kontenerów ważą zwykle dziesiątki GB"],
    correct: [1], explain: "Kontener to nie VM — współdzieli jądro hosta, startuje w ms, obrazy mają setki MB. Guest OS, minuty i dziesiątki GB to cechy VM.", src: "W01, slajd 17, 18", note: "W01-wprowadzenie" },

  { id: "W01-15", w: "W01", c: "dvc", type: "single",
    q: "Co przy użyciu DVC jest przechowywane w repozytorium Git?",
    options: ["Pełne pliki danych (CSV, obrazy, wideo)", "Wagi wytrenowanego modelu", "Metadane i sumy kontrolne danych", "Nic — DVC zastępuje Git"],
    correct: [2], explain: "W Git: metadane i sumy kontrolne (plik .dvc). Właściwe dane: Object Storage (S3, Azure Blob).", src: "W01, slajd 22", note: "W01-wprowadzenie" },

  { id: "W01-16", w: "W01", c: "dvc", type: "single",
    q: "Które polecenie przesyła binarne dane do Object Storage (S3/Azure)?",
    options: ["dvc push", "git push", "dvc add", "dvc pull"],
    correct: [0], explain: "dvc push wysyła dane do remote. dvc add rejestruje plik, dvc pull pobiera, git push wysyła tylko kod i metadane.", src: "W01, slajd 23", note: "W01-wprowadzenie" },

  { id: "W01-17", w: "W01", c: "registry-stages", type: "single",
    q: "Który stan cyklu życia w Model Registry służy do testów integracyjnych i shadow deploymentu?",
    options: ["Production", "Archived", "None/Experimental", "Staging"],
    correct: [3], explain: "Staging — testy integracyjne i shadow deployment. Production — serwowana wersja, Archived — audyt i rollback.", src: "W01, slajd 24", note: "W01-wprowadzenie" },

  { id: "W01-18", w: "W01", c: "opex-capex", type: "single",
    q: "Firma kupuje własne klastry GPU NVIDIA DGX do przetwarzania LLM. Jaki to rodzaj kosztów?",
    options: ["OPEX", "CAPEX", "Pay As You Go", "SaaS"],
    correct: [1], explain: "CAPEX = koszty kapitałowe, własna infrastruktura on-premise. OPEX = chmura publiczna, Pay As You Go.", src: "W01, slajd 27", note: "W01-wprowadzenie" },

  { id: "W01-19", w: "W01", c: "mlops-levels", type: "single",
    q: "Data Scientist przesyła gotowy model jako plik ZIP/pickle do inżyniera IT, brak CI/CD. Który to poziom dojrzałości MLOps wg Google?",
    options: ["Poziom 0", "Poziom 1", "Poziom 2", "Poziom 3"],
    correct: [0], explain: "Poziom 0 — proces manualny, izolacja ról, wdrażany artefakt binarny, nie potok.", src: "W01, slajd 28", note: "W01-wprowadzenie" },

  { id: "W01-20", w: "W01", c: "mlops-levels", type: "single",
    q: "Na którym poziomie MLOps produktem staje się zautomatyzowany potok (a nie plik modelu) i pojawia się Feature Store?",
    options: ["Poziom 0", "Poziom 2", "Poziom 1", "Żadnym — Feature Store nie jest częścią MLOps"],
    correct: [2], explain: "Poziom 1 (Pipeline Automation): produkt = potok, Feature Store, CT wyzwalane dryftem.", src: "W01, slajd 29, 30", note: "W01-wprowadzenie" },

  { id: "W01-21", w: "W01", c: "mlops-levels", type: "single",
    q: "Automatyczne testowanie nowego modelu na 5–10% ruchu użytkowników (Canary Deployment) jest cechą:",
    options: ["Poziomu 0", "Poziomu 1", "Fazy badawczej", "Poziomu 2"],
    correct: [3], explain: "Canary Deployments to Poziom 2 (CI/CD Pipeline Automation) — szczyt dojrzałości, pętla zamknięta.", src: "W01, slajd 29", note: "W01-wprowadzenie" },

  { id: "W01-22", w: "W01", c: "makefile", type: "single",
    q: "Jaką rolę pełni Makefile w projekcie MLOps według wykładu?",
    options: ["Zastępuje system kontroli wersji Git", "Jest abstrakcyjną warstwą API nad powłoką i skodyfikowaną dokumentacją budowania, testowania i wdrażania", "Przechowuje wagi modelu", "Limituje zasoby CPU/RAM kontenera"],
    correct: [1], explain: "Makefile = „uniwersalny kontrakt uruchomieniowy”: to samo polecenie działa lokalnie i na serwerze CI; łańcuchy (make deploy → testy, build, push).", src: "W01, slajd 34", note: "W01-wprowadzenie" },

  { id: "W01-23", w: "W01", c: "pre-commit", type: "single",
    q: "Jaka jest główna korzyść kosztowa z pre-commit hooks?",
    options: ["Błędy składniowe nie docierają do płatnych agentów CI w chmurze", "Model trenuje się szybciej na GPU", "Dane są automatycznie wysyłane do S3", "Kontener startuje w milisekundach"],
    correct: [0], explain: "Pre-commit = lokalna pętla kontroli jakości (Black, Flake8) przed commitem → oszczędność na płatnych runnerach CI.", src: "W01, slajd 32", note: "W01-wprowadzenie" },

  { id: "W01-24", w: "W01", c: "dependency-hell", type: "single",
    q: "Jakie rozwiązanie wykład proponuje na Dependency Hell (Hardware → Sterownik → CUDA → cuDNN → Python → Framework)?",
    options: ["Ręczną aktualizację bibliotek na serwerze", "Paradygmat Immutable Infrastructure — środowisko jako nienaruszalny pakiet binarny", "Pracę wyłącznie w Jupyter Notebook", "Model SaaS"],
    correct: [1], explain: "Immutable Infrastructure + ścisła izolacja kodu, zależności i zmiennych środowiskowych od hosta.", src: "W01, slajd 16", note: "W01-wprowadzenie" },

  { id: "W01-25", w: "W01", c: "reproducibility", type: "single",
    q: "Reprodukowalność w MLOps oznacza możliwość odtworzenia stanu systemu przez powiązanie:",
    options: ["Commitu Git, hasha zbioru danych (DVC) i pliku wag modelu", "Tylko commitu Git", "Logów aplikacji i adresu IP serwera", "Obrazu VM i hasła administratora"],
    correct: [0], explain: "Trzy elementy naraz: kod (commit), dane (hash DVC), model (wagi). Sam Git nie wystarczy.", src: "W01, slajd 11", note: "W01-wprowadzenie" },
]});
