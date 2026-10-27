(window.QUIZ_DATA ||= []).push({ subject: "infra", questions: [
  // ===== W01 — Wprowadzenie do architektury chmurowej dla AI =====
  { id: "W01-01", w: "W01", c: "ml-vs-se", type: "single",
    q: "Które równanie opisuje podejście Data-Driven (uczenie maszynowe)?",
    options: ["Kod + Dane wejściowe = Wynik deterministyczny", "Dane + Wyniki = Reguły (wagi modelu)", "Reguły + Wyniki = Dane", "Kod + Reguły = Dane wejściowe"],
    correct: [1], explain: "W ML system wywnioskowuje reguły statystyczne z przykładów: dane + wyniki → wagi. 'Kod + Dane = Wynik' to Logic-Driven.", src: "W01, slajd 9", note: "W01-wprowadzenie" },

  { id: "W01-26", w: "W01", c: "ml-vs-se", type: "single",
    q: "Co NIE jest prawdą o podejściu Data-Driven (uczenie maszynowe)?",
    options: ["System wywnioskowuje reguły z dostarczonych przykładów", "Wynikiem uczenia są reguły w postaci wag modelu", "Programista definiuje jawne reguły logiczne", "Zachowanie systemu zależy od ewolucji danych"],
    correct: [2], explain: "Jawne reguły logiczne definiuje programista w podejściu Logic-Driven. W ML reguły (wagi) powstają z danych i wyników.", src: "W01, slajd 9", note: "W01-wprowadzenie" },

  { id: "W01-27", w: "W01", c: "ml-vs-se", type: "single",
    q: "Co według wykładu inżynier chmury musi monitorować w systemie AI przede wszystkim?",
    options: ["Błędy w logach, np. NullPointerException", "Matematyczną poprawność predykcji", "Czas uruchomienia (Spin-up) instancji VM", "Konflikty wersji bibliotek NumPy"],
    correct: [1], explain: "Nie tylko błędy w logach, ale przede wszystkim błędy w matematycznej poprawności predykcji.", src: "W01, slajd 10", note: "W01-wprowadzenie" },

  { id: "W01-02", w: "W01", c: "model-decay", type: "single",
    q: "Model traci skuteczność z czasem, choć jego kod binarny pozostaje bezbłędny. Jak nazywa się to zjawisko?",
    options: ["Dependency Hell", "Glue Code", "Model Decay", "Segmentation Fault"],
    correct: [2], explain: "Model Decay (degradacja) — psuje się jakość predykcji, nie program. Przeciwdziała mu CT.", src: "W01, slajd 10", note: "W01-wprowadzenie" },

  { id: "W01-28", w: "W01", c: "model-decay", type: "single",
    q: "Czym jest Model Decay?",
    options: ["Zmianą rozkładu statystycznego cech wejściowych (X)", "Utratą skuteczności modelu mimo bezbłędnego kodu", "Konfliktem wersji sterownika, CUDA i frameworka", "Pozostałością testów (flagi if-else) w produkcji"],
    correct: [1], explain: "Model Decay to spadek jakości predykcji z czasem, nie błąd programu. Zmiana rozkładu X to Data Drift.", src: "W01, slajd 10", note: "W01-wprowadzenie" },

  { id: "W01-03", w: "W01", c: "data-vs-concept-drift", type: "single",
    q: "Czym jest Data Drift?",
    options: ["Zmianą relacji między wejściem a wynikiem (X → Y)", "Zmianą rozkładu statystycznego cech wejściowych (X)", "Utratą danych w Object Storage", "Różnicą wersji bibliotek między środowiskami"],
    correct: [1], explain: "Data Drift = zmienia się rozkład X. Zmiana relacji X → Y to Concept Drift.", src: "W01, slajd 10, 26", note: "W01-wprowadzenie" },

  { id: "W01-04", w: "W01", c: "data-vs-concept-drift", type: "single",
    q: "Ewolucja relacji między wejściem a wynikiem (X → Y) to:",
    options: ["Concept Drift (dryft pojęciowy)", "Data Drift (dryft danych)", "Model Registry (rejestr modeli)", "Data Lineage (rodowód danych)"],
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
    options: ["Dane (Data)", "Infrastruktura", "Modele (Models)", "Kod (Code)"],
    correct: [1], explain: "Trzy osie: KOD, DANE, MODELE. Sprzęt nie jest osią wersjonowania.", src: "W01, slajd 11", note: "W01-wprowadzenie" },

  { id: "W01-08", w: "W01", c: "ct", type: "single",
    q: "Który element potoków jest unikalny dla systemów AI (nie występuje w klasycznym DevOps)?",
    options: ["Continuous Integration (CI)", "Continuous Delivery (CD)", "Continuous Training (CT)", "Code Review"],
    correct: [2], explain: "CT — „nowa litera w alfabecie CI/CD”, zapobiega degradacji predykcyjnej (Model Decay).", src: "W01, slajd 11, 26", note: "W01-wprowadzenie" },

  { id: "W01-29", w: "W01", c: "ct", type: "single",
    q: "Co według wykładu wyzwala potok Continuous Training (CT)?",
    options: ["Każdy nowy Pull Request w repozytorium Git", "Data Drift i Concept Drift w monitoringu", "Lokalny pre-commit hook przed commitem", "Polecenie make deploy wpisane przez dewelopera"],
    correct: [1], explain: "Mechanizmy wyzwalające CT to Data Drift i Concept Drift. Pull Request wyzwala runnery CI.", src: "W01, slajd 26", note: "W01-wprowadzenie" },

  { id: "W01-30", w: "W01", c: "ct", type: "single",
    q: "Które narzędzie podano na slajdzie o CT jako przykład automatycznego wyzwalania potoku treningowego?",
    options: ["MLflow Model Registry", "Kubeflow Pipelines", "DVC (Data Version Control)", "GitHub Actions"],
    correct: [1], explain: "Architektura CT: monitoring metryk (np. KL-Divergence) i automatyczny potok, np. Kubeflow Pipelines. MLflow to rejestr modeli, DVC wersjonuje dane.", src: "W01, slajd 26", note: "W01-wprowadzenie" },

  { id: "W01-09", w: "W01", c: "hidden-debt", type: "single",
    q: "Według publikacji Google „Hidden Technical Debt in ML Systems” (2015) właściwy kod ML stanowi ok.:",
    options: ["50% kodu produkcyjnego", "25% kodu produkcyjnego", "95% kodu produkcyjnego", "5% kodu produkcyjnego"],
    correct: [3], explain: "Ok. 5%. Reszta to infrastruktura: zbieranie danych, weryfikacja, ekstrakcja cech, zasoby, serwowanie. 25% to „zasada 25%” (inny temat).", src: "W01, slajd 12", note: "W01-wprowadzenie" },

  { id: "W01-31", w: "W01", c: "hidden-debt", type: "single",
    q: "Według slajdu o długu technicznym najłatwiejszą częścią budowy systemu AI jest:",
    options: ["Budowa odpornego ekosystemu wokół modelu", "Optymalizacja samej sieci neuronowej", "Zbieranie i weryfikacja danych", "Ekstrakcja cech i serwowanie modelu"],
    correct: [1], explain: "Wniosek architektoniczny: optymalizacja sieci to najłatwiejsza część. Wyzwaniem jest odporny ekosystem wokół niej.", src: "W01, slajd 12", note: "W01-wprowadzenie" },

  { id: "W01-32", w: "W01", c: "hidden-debt", type: "single",
    q: "W przykładzie Deeplearning4j architektura sieci to kilka linii kodu (5%). Co według slajdu jest prawdziwym wyzwaniem (95%)?",
    options: ["Dobór funkcji aktywacji i liczby neuronów w warstwach", "Integracja z Kafka, czyszczeniem logów i bezpiecznym API", "Konfiguracja optymalizatora Adam i współczynnika uczenia", "Wybór funkcji straty dla warstwy wyjściowej sieci"],
    correct: [1], explain: "95% to integracja kodu modelu z potokami streamingowymi (Kafka), czyszczeniem logów i API. Aktywacje, Adam i funkcja straty należą do 5%.", src: "W01, slajd 13, 14", note: "W01-wprowadzenie" },

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
    options: ["Za limitowanie zużycia CPU i RAM procesów", "Za emulację sprzętu dla systemu gościa", "Za izolację widoku plików, sieci i procesów", "Za wstrzykiwanie sterowników GPU do kontenera"],
    correct: [2], explain: "Namespaces izolują to, co proces widzi (pliki, sieć, PID=1). Limity zasobów to cgroups, GPU — NVIDIA Container Toolkit.", src: "W01, slajd 18", note: "W01-wprowadzenie" },

  { id: "W01-14", w: "W01", c: "vm-vs-container", type: "single",
    q: "Które stwierdzenie o kontenerach jest prawdziwe?",
    options: ["Każdy kontener ma własny, kompletny Guest OS z jądrem", "Kontener współdzieli jądro hosta z innymi procesami", "Czas startu kontenera mierzy się zwykle w minutach", "Obrazy kontenerów ważą zwykle dziesiątki gigabajtów"],
    correct: [1], explain: "Kontener to nie VM — współdzieli jądro hosta, startuje w ms, obrazy mają setki MB. Guest OS, minuty i dziesiątki GB to cechy VM.", src: "W01, slajd 17, 18", note: "W01-wprowadzenie" },

  { id: "W01-33", w: "W01", c: "vm-vs-container", type: "single",
    q: "Która cecha opisuje maszynę wirtualną (VM), a nie kontener?",
    options: ["Współdzielenie jądra (Kernel) maszyny hosta", "Czas startu mierzony w milisekundach", "Pełna emulacja sprzętu przez hypervisor", "Obraz o rozmiarze setek MB"],
    correct: [2], explain: "VM działa na hypervisorze typu 1 lub 2 z pełną emulacją sprzętu. Wspólne jądro, start w ms i obrazy setek MB to cechy kontenera.", src: "W01, slajd 17, 18", note: "W01-wprowadzenie" },

  { id: "W01-34", w: "W01", c: "vm-vs-container", type: "single",
    q: "Zespół potrzebuje instancji modelu startujących w milisekundach i z dostępem do GPU. Co wybrać według wykładu?",
    options: ["VM z hypervisorem typu 1 (Bare-metal)", "Kontenery z NVIDIA Container Toolkit", "VM z hypervisorem typu 2 (Hosted)", "VM z własnym Guest OS dla modelu"],
    correct: [1], explain: "Kontener startuje w milisekundach, a NVIDIA Container Toolkit wstrzykuje do niego GPU. Start VM mierzy się w minutach.", src: "W01, slajd 17, 18", note: "W01-wprowadzenie" },

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

  { id: "W01-35", w: "W01", c: "registry-stages", type: "single",
    q: "Do czego służy stan Archived w Model Registry?",
    options: ["Do testów integracyjnych i shadow deploymentu", "Do obsługi klientów aktualnie serwowaną wersją", "Do audytu i rollbacku starszych wersji", "Do ewidencji nowo zarejestrowanych wag modelu"],
    correct: [2], explain: "Archived to starsze wersje do audytu i rollbacku. Testy i shadow to Staging, klientów obsługuje Production.", src: "W01, slajd 24", note: "W01-wprowadzenie" },

  { id: "W01-36", w: "W01", c: "registry-stages", type: "single",
    q: "Co NIE jest stanem cyklu życia (Lifecycle Stage) w Model Registry według wykładu?",
    options: ["Staging", "Canary", "Archived", "None/Experimental"],
    correct: [1], explain: "Stany to None/Experimental, Staging, Production i Archived. Canary to wdrażanie nowego modelu na 5–10% ruchu (Poziom 2).", src: "W01, slajd 24, 29", note: "W01-wprowadzenie" },

  { id: "W01-18", w: "W01", c: "opex-capex", type: "single",
    q: "Firma kupuje własne klastry GPU NVIDIA DGX do przetwarzania LLM. Jaki to rodzaj kosztów?",
    options: ["OPEX", "CAPEX", "Pay As You Go", "SaaS"],
    correct: [1], explain: "CAPEX = koszty kapitałowe, własna infrastruktura on-premise. OPEX = chmura publiczna, Pay As You Go.", src: "W01, slajd 27", note: "W01-wprowadzenie" },

  { id: "W01-37", w: "W01", c: "opex-capex", type: "single",
    q: "Co NIE jest cechą modelu OPEX (chmura publiczna) według wykładu?",
    options: ["Model Pay As You Go bez ryzyka zakupu sprzętu", "Niższe koszty stałe przy bardzo dużej skali", "Szybkość wdrożenia w chmurze publicznej", "Niemal nieograniczona skalowalność na żądanie"],
    correct: [1], explain: "Niższe koszty stałe przy bardzo dużej skali (wideo, LLM) to cecha CAPEX, czyli własnej infrastruktury.", src: "W01, slajd 27", note: "W01-wprowadzenie" },

  { id: "W01-38", w: "W01", c: "opex-capex", type: "single",
    q: "Startup chce rozliczenia Pay As You Go i skalowalności na żądanie. Jaki to rodzaj kosztów według wykładu?",
    options: ["CAPEX (koszty kapitałowe)", "OPEX (koszty operacyjne)", "Air-gapping (izolacja fizyczna)", "Model hybrydowy (chmura + on-premise)"],
    correct: [1], explain: "OPEX to chmura publiczna: Pay As You Go, szybkie wdrożenie i skalowalność na żądanie. CAPEX to inwestycja we własny sprzęt.", src: "W01, slajd 27", note: "W01-wprowadzenie" },

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
    options: ["Zastępuje Git jako system kontroli wersji kodu i danych", "Jest warstwą API nad powłoką i dokumentacją budowania, testów i wdrożeń", "Przechowuje wagi modelu i metadane eksperymentów treningowych", "Limituje zasoby CPU i RAM kontenera za pomocą cgroups"],
    correct: [1], explain: "Makefile = „uniwersalny kontrakt uruchomieniowy”: to samo polecenie działa lokalnie i na serwerze CI; łańcuchy (make deploy → testy, build, push).", src: "W01, slajd 34", note: "W01-wprowadzenie" },

  { id: "W01-39", w: "W01", c: "makefile", type: "single",
    q: "Jak wykład nazywa mechanizm, w którym make deploy automatycznie uruchamia testy, build oraz push?",
    options: ["Pre-commit hooks", "Łańcuchy wyzwalania", "Continuous Training", "Trunk-based Development"],
    correct: [1], explain: "Łańcuchy wyzwalania (Chaining): jeden cel Makefile uruchamia po kolei kolejne kroki.", src: "W01, slajd 34", note: "W01-wprowadzenie" },

  { id: "W01-40", w: "W01", c: "makefile", type: "single",
    q: "Dlaczego według wykładu Makefile jest „uniwersalnym” kontraktem uruchomieniowym?",
    options: ["Zastępuje plik .github/workflows/ci.yml na serwerze", "To samo polecenie działa lokalnie i na serwerze CI", "Działa wyłącznie wewnątrz kontenera DevContainer", "Automatycznie wersjonuje dane w Object Storage"],
    correct: [1], explain: "Uniwersalność: to samo polecenie działa na laptopie dewelopera i na serwerze CI w chmurze.", src: "W01, slajd 34", note: "W01-wprowadzenie" },

  { id: "W01-23", w: "W01", c: "pre-commit", type: "single",
    q: "Jaka jest główna korzyść kosztowa z pre-commit hooks?",
    options: ["Błędy składni nie trafiają do płatnych agentów CI", "Model trenuje się szybciej na GPU w chmurze", "Dane trafiają automatycznie do kubełka S3", "Kontener startuje w milisekundach zamiast minut"],
    correct: [0], explain: "Pre-commit = lokalna pętla kontroli jakości (Black, Flake8) przed commitem → oszczędność na płatnych runnerach CI.", src: "W01, slajd 32", note: "W01-wprowadzenie" },

  { id: "W01-41", w: "W01", c: "pre-commit", type: "single",
    q: "Lokalna pętla kontroli jakości (Black, Flake8) uruchamiana przed commitem do Git to:",
    options: ["DevContainers (VS Code)", "Uchwyty pre-commit (hooks)", "Potok CI w GitHub Actions", "Wirtualne środowisko (venv)"],
    correct: [1], explain: "Pre-commit hooks działają lokalnie przed commitem. Potok CI w GitHub Actions rusza dopiero w chmurze przy Pull Request.", src: "W01, slajd 32", note: "W01-wprowadzenie" },

  { id: "W01-24", w: "W01", c: "dependency-hell", type: "single",
    q: "Jakie rozwiązanie wykład proponuje na Dependency Hell (Hardware → Sterownik → CUDA → cuDNN → Python → Framework)?",
    options: ["Ręczną aktualizację sterowników i bibliotek na serwerze", "Paradygmat Immutable Infrastructure (nienaruszalny pakiet binarny)", "Pracę wyłącznie w Jupyter Notebook na lokalnej maszynie", "Przeniesienie całego stosu do modelu SaaS dostawcy"],
    correct: [1], explain: "Immutable Infrastructure + ścisła izolacja kodu, zależności i zmiennych środowiskowych od hosta.", src: "W01, slajd 16", note: "W01-wprowadzenie" },

  { id: "W01-42", w: "W01", c: "dependency-hell", type: "single",
    q: "Co oznacza paradygmat Immutable Infrastructure według wykładu?",
    options: ["Środowisko uruchomieniowe jako nienaruszalny pakiet binarny", "Ręczna aktualizacja sterowników GPU na serwerze produkcyjnym", "Wersjonowanie metadanych i sum kontrolnych danych w Git", "Automatyczne douczanie modelu na świeżych danych produkcyjnych"],
    correct: [0], explain: "Środowisko to nienaruszalny pakiet binarny, odizolowany od fizycznego hosta. To rozwiązanie Dependency Hell.", src: "W01, slajd 16", note: "W01-wprowadzenie" },

  { id: "W01-43", w: "W01", c: "dependency-hell", type: "single",
    q: "Konflikty w złożonym stosie Hardware → Sterownik → CUDA → cuDNN → Python → Framework to według wykładu:",
    options: ["Glue Code", "Dependency Hell", "Model Decay", "Pipeline Jungles"],
    correct: [1], explain: "Piekło Zależności (Dependency Hell) to złożoność tego stosu. Glue Code i Pipeline Jungles to antywzorce kodu.", src: "W01, slajd 16", note: "W01-wprowadzenie" },

  { id: "W01-25", w: "W01", c: "reproducibility", type: "single",
    q: "Reprodukowalność w MLOps oznacza możliwość odtworzenia stanu systemu przez powiązanie:",
    options: ["Commitu Git, hasha danych (DVC) i wag modelu", "Commitu Git i nazwy gałęzi w repozytorium", "Logów aplikacji, adresu IP i nazwy serwera", "Snapshotu VM i hasła administratora systemu"],
    correct: [0], explain: "Trzy elementy naraz: kod (commit), dane (hash DVC), model (wagi). Sam Git nie wystarczy.", src: "W01, slajd 11", note: "W01-wprowadzenie" },

  { id: "W01-44", w: "W01", c: "reproducibility", type: "single",
    q: "Po odejściu pracownika nie wiadomo, na jakim zbiorze danych trenowano model. Którego elementu reprodukowalności brakuje?",
    options: ["Commitu Git z kodem systemu", "Hasha zbioru danych (DVC)", "Pliku wag modelu", "Sygnatury wejść i wyjść modelu"],
    correct: [1], explain: "Reprodukowalność wiąże commit Git, hash danych (DVC) i plik wag. Zbiór danych identyfikuje hash DVC.", src: "W01, slajd 11", note: "W01-wprowadzenie" },

  { id: "W01-45", w: "W01", c: "reproducibility", type: "single",
    q: "Czym jest reprodukowalność bitowa według slajdu o wersjonowaniu danych?",
    options: ["Pełną audytowalnością pochodzenia danych", "Odtworzeniem identycznego zbioru treningowego", "Zarządzaniem historią danych na klastrach Spark", "Walidacją formatu wejść i wyjść modelu"],
    correct: [1], explain: "To odtworzenie identycznego zbioru treningowego dla konkretnego modelu. Pochodzenie danych to Data Lineage.", src: "W01, slajd 22", note: "W01-wprowadzenie" },
]});
