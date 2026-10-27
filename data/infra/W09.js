(window.QUIZ_DATA ||= []).push({ subject: "infra", questions: [
  // ===== W09 — Bezpieczeństwo w chmurowych systemach AI (SecMLOps) =====
  { id: "W09-01", w: "W09", c: "shared-resp-sec", type: "single",
    q: "Za co w modelu współdzielonej odpowiedzialności odpowiada dostawca chmury (a nie architekt AI)?",
    options: ["Dane treningowe i wagi modeli AI", "Izolacja hipernadzorcy i ochrona sprzętu GPU", "Bezpieczeństwo punktów końcowych API", "Zarządzanie dostępem (IAM) do modeli"],
    correct: [1], explain: "Dostawca odpowiada za infrastrukturę fizyczną, hipernadzorcę i GPU. Dane, wagi, API i dostęp to zadania architekta AI.", src: "W09, slajd 328", note: "W09-bezpieczenstwo" },

  { id: "W09-02", w: "W09", c: "shared-resp-sec", type: "single",
    q: "Co NIE należy do obowiązków architekta AI w modelu współdzielonej odpowiedzialności?",
    options: ["Ochrona wag modeli", "Bezpieczeństwo punktów końcowych API", "Izolacja hipernadzorcy", "Ochrona danych treningowych"],
    correct: [2], explain: "Izolacja hipernadzorcy to warstwa dostawcy chmury.", src: "W09, slajd 328", note: "W09-bezpieczenstwo" },

  { id: "W09-03", w: "W09", c: "zero-trust", type: "single",
    q: "Która zasada jest streszczana hasłem „Never trust, always verify” w odniesieniu do każdego elementu potoku MLOps?",
    options: ["Defense-in-Depth", "Zasada najmniejszych uprawnień", "Zero Trust", "Shared Responsibility Model"],
    correct: [2], explain: "Zero Trust to „nigdy nie ufaj, zawsze weryfikuj” dla każdego elementu potoku.", src: "W09, slajd 328", note: "W09-bezpieczenstwo" },

  { id: "W09-23", w: "W09", c: "zero-trust", type: "single",
    q: "Co oznacza zasada Zero Trust w potoku MLOps?",
    options: ["Nigdy nie ufaj, zawsze weryfikuj każdy element potoku", "Każdy kontener ma dostęp tylko do potrzebnych zasobów", "Ochronę zapewnia kilka niezależnych warstw zabezpieczeń", "Dostawca i architekt AI dzielą odpowiedzialność za ochronę"],
    correct: [0], explain: "Zero Trust to „Never trust, always verify” dla każdego elementu potoku MLOps. Pozostałe opcje opisują inne zasady z wykładu.", src: "W09, slajd 328", note: "W09-bezpieczenstwo" },

  { id: "W09-04", w: "W09", c: "data-poisoning", type: "single",
    q: "Atakujący dodaje spreparowane przykłady do zbioru treningowego, aby wstrzyknąć do modelu „backdoor”. Jak nazywa się ten atak?",
    options: ["Adversarial / Evasion Attack", "Data Poisoning", "Membership Inference", "Sponge Attack"],
    correct: [1], explain: "Data Poisoning to manipulacja zbiorem treningowym. Evasion działa dopiero w fazie wnioskowania.", src: "W09, slajd 329", note: "W09-bezpieczenstwo" },

  { id: "W09-24", w: "W09", c: "data-poisoning", type: "single",
    q: "Czym jest zatruwanie danych (Data Poisoning)?",
    options: ["Manipulacją zbiorem treningowym w celu wstrzyknięcia backdoorów", "Niewidoczną modyfikacją danych wejściowych w fazie wnioskowania", "Odtwarzaniem danych treningowych z odpowiedzi i pewności modelu", "Manipulacją instrukcjami LLM przez dokumenty pobrane w RAG"],
    correct: [0], explain: "Data Poisoning psuje zbiór treningowy: backdoor lub degradacja modelu. Szum na wejściu w fazie wnioskowania to Evasion.", src: "W09, slajd 329", note: "W09-bezpieczenstwo" },

  { id: "W09-25", w: "W09", c: "data-poisoning", type: "single",
    q: "Czym według wykładu Data Poisoning różni się od ataku Adversarial / Evasion?",
    options: ["Poisoning zmienia zbiór treningowy, Evasion dane wejściowe przy wnioskowaniu", "Poisoning zmienia dane wejściowe przy wnioskowaniu, Evasion zbiór treningowy", "Poisoning odtwarza dane PII z modelu, Evasion wstrzykuje backdoor do wag", "Poisoning manipuluje instrukcjami LLM, Evasion zbiorem treningowym"],
    correct: [0], explain: "Poisoning manipuluje zbiorem treningowym. Evasion dodaje niewidoczny szum do wejścia w fazie wnioskowania.", src: "W09, slajd 329", note: "W09-bezpieczenstwo" },

  { id: "W09-05", w: "W09", c: "adversarial", type: "single",
    q: "Czym są ataki kontradyktoryjne (Adversarial / Evasion Attacks)?",
    options: ["Niewidocznym szumem na wejściu, wywołującym błąd w fazie wnioskowania", "Manipulacją zbiorem treningowym w celu degradacji modelu", "Odtwarzaniem danych treningowych z pewności odpowiedzi modelu", "Zapytaniami wymuszającymi maksymalną liczbę operacji zmiennoprzecinkowych"],
    correct: [0], explain: "Evasion dodaje niewidoczny szum do wejścia w fazie wnioskowania. Manipulacja zbiorem treningowym to Data Poisoning.", src: "W09, slajd 329", note: "W09-bezpieczenstwo" },

  { id: "W09-26", w: "W09", c: "adversarial", type: "single",
    q: "Do zdjęcia dodano niewidoczny szum i w fazie wnioskowania model błędnie je klasyfikuje. Jaki to atak?",
    options: ["Zatruwanie danych (Data Poisoning)", "Atak kontradyktoryjny (Evasion)", "Inwersja modelu i Membership Inference", "Atak ML-DoS (Sponge Attack)"],
    correct: [1], explain: "Niewidoczna modyfikacja wejścia i błąd w fazie wnioskowania to atak kontradyktoryjny (Adversarial / Evasion).", src: "W09, slajd 329", note: "W09-bezpieczenstwo" },

  { id: "W09-06", w: "W09", c: "inversion", type: "single",
    q: "Który atak polega na odtwarzaniu danych treningowych (np. PII) poprzez analizę odpowiedzi i pewności modelu?",
    options: ["Prompt Injection", "Data Poisoning", "Inwersja modelu", "Jailbreaking"],
    correct: [2], explain: "Inwersja modelu i Membership Inference wyciągają informacje o danych treningowych z odpowiedzi modelu.", src: "W09, slajd 329", note: "W09-bezpieczenstwo" },

  { id: "W09-27", w: "W09", c: "inversion", type: "single",
    q: "Co jest celem ataków inwersji modelu i Membership Inference?",
    options: ["Odtworzenie danych treningowych, np. PII", "Wstrzyknięcie backdoora do zbioru treningowego", "Błędna klasyfikacja przez szum na wejściu modelu", "Zawieszenie klastra kosztownymi zapytaniami GPU"],
    correct: [0], explain: "Oba ataki odtwarzają dane treningowe (np. PII) z odpowiedzi i pewności modelu.", src: "W09, slajd 329", note: "W09-bezpieczenstwo" },

  { id: "W09-07", w: "W09", c: "prompt-injection", type: "single",
    q: "Złośliwa instrukcja ukryta w dokumencie pobranym przez system RAG zmienia zachowanie LLM. Jak nazywa się ten atak?",
    options: ["Pośredni Prompt Injection", "Inwersja modelu", "Bezpośredni Jailbreaking", "Membership Inference"],
    correct: [0], explain: "Slajd wymienia pośredni Prompt Injection, np. przez systemy RAG.", src: "W09, slajd 329", note: "W09-bezpieczenstwo" },

  { id: "W09-28", w: "W09", c: "prompt-injection", type: "single",
    q: "Czym jest Prompt Injection według taksonomii zagrożeń z wykładu?",
    options: ["Bezpośrednią lub pośrednią manipulacją instrukcjami modeli LLM", "Manipulacją zbiorem treningowym w celu degradacji modelu LLM", "Odtwarzaniem danych PII z odpowiedzi i pewności modelu LLM", "Zapytaniami wymuszającymi maksymalne obciążenie GPU w modelach LLM"],
    correct: [0], explain: "Prompt Injection to manipulacja instrukcjami LLM, bezpośrednia lub pośrednia (np. przez RAG).", src: "W09, slajd 329", note: "W09-bezpieczenstwo" },

  { id: "W09-08", w: "W09", c: "envelope", type: "single",
    q: "Na czym polega architektura Envelope Encryption?",
    options: ["Klucz KEK jest szyfrowany przez klucz DEK", "Klucz DEK jest szyfrowany przez klucz KEK", "Dane są szyfrowane wyłącznie kluczem dostawcy chmury", "Ruch w klastrze jest szyfrowany przez mTLS"],
    correct: [1], explain: "Data Encryption Key szyfruje dane, a sam jest szyfrowany przez Key Encryption Key.", src: "W09, slajd 330", note: "W09-bezpieczenstwo" },

  { id: "W09-29", w: "W09", c: "envelope", type: "single",
    q: "Jak nazywa się architektura szyfrowania At-Rest, w której klucz DEK jest szyfrowany przez klucz KEK?",
    options: ["Customer-Managed Keys", "Envelope Encryption", "Confidential Computing", "Mutual TLS (mTLS)"],
    correct: [1], explain: "W Envelope Encryption klucz KEK szyfruje klucz DEK. CMK to własne klucze klienta zamiast kluczy dostawcy.", src: "W09, slajd 330", note: "W09-bezpieczenstwo" },

  { id: "W09-09", w: "W09", c: "encryption-states", type: "single",
    q: "Który mechanizm chroni dane podczas obliczeń (In-Use) w enklawach sprzętowych, np. NVIDIA H100 TEE?",
    options: ["Customer-Managed Keys", "TLS 1.3", "Confidential Computing", "mTLS w Service Mesh"],
    correct: [2], explain: "Confidential Computing to szyfrowanie w pamięci (In-Use). CMK dotyczy At-Rest, TLS i mTLS dotyczą In-Transit.", src: "W09, slajd 330", note: "W09-bezpieczenstwo" },

  { id: "W09-10", w: "W09", c: "encryption-states", type: "single",
    q: "Co według wykładu stosuje się do szyfrowania ruchu wewnątrz klastra Kubernetes?",
    options: ["Envelope Encryption z KMS", "mTLS w Service Mesh (Istio)", "Customer-Managed Keys w AWS KMS", "Azure Immutable Blob"],
    correct: [1], explain: "In-Transit: TLS 1.3 na zewnątrz, mTLS przez Istio/Linkerd wewnątrz klastra.", src: "W09, slajd 330", note: "W09-bezpieczenstwo" },

  { id: "W09-11", w: "W09", c: "oidc", type: "single",
    q: "Co jest rozwiązaniem problemu statycznych kluczy (np. AWS_ACCESS_KEY w GitHub Secrets) między potokiem CI/CD a chmurą?",
    options: ["Przeniesienie kluczy do pliku konfiguracyjnego w repozytorium", "Federacja tożsamości OIDC z efemerycznym tokenem JWT", "Szyfrowanie kluczy przez TLS 1.3", "Rate Limiting zapytań do chmury"],
    correct: [1], explain: "OIDC daje uwierzytelnianie bezhasłowe. Runner dostaje JWT ważny tylko przez czas zadania.", src: "W09, slajd 331", note: "W09-bezpieczenstwo" },

  { id: "W09-30", w: "W09", c: "oidc", type: "single",
    q: "Co wykład wskazuje jako główny antywzorzec zarządzania tożsamością w MLOps?",
    options: ["Hardkodowanie poświadczeń w kodzie lub GitHub Secrets", "Efemeryczne tokeny JWT ważne przez czas trwania zadania", "Wiązanie konta serwisowego K8s z rolą chmurową IAM", "Dynamiczne pobieranie sekretów z Azure Key Vault"],
    correct: [0], explain: "Statyczne klucze (AWS_ACCESS_KEY, tokeny Hugging Face) w kodzie lub GitHub Secrets to główny antywzorzec. Pozostałe opcje to zalecane rozwiązania.", src: "W09, slajd 331", note: "W09-bezpieczenstwo" },

  { id: "W09-31", w: "W09", c: "oidc", type: "single",
    q: "Runner GitHub Actions łączy się z chmurą przez federację tożsamości OIDC. Co otrzymuje zamiast statycznego klucza?",
    options: ["Efemeryczny token JWT na czas trwania zadania", "Klucz AWS_ACCESS_KEY zapisany w GitHub Secrets", "Klucz DEK zaszyfrowany przez klucz KEK w KMS", "Certyfikat mTLS wydany przez Service Mesh Istio"],
    correct: [0], explain: "W federacji OIDC runner dostaje efemeryczny JWT ważny tylko przez czas zadania. Statyczny klucz w GitHub Secrets to antywzorzec.", src: "W09, slajd 331", note: "W09-bezpieczenstwo" },

  { id: "W09-12", w: "W09", c: "workload-identity", type: "single",
    q: "Czym jest Workload Identity w Kubernetes?",
    options: ["Montowaniem sekretów jako wolumenów tmpfs", "Wiązaniem konta serwisowego K8s z rolą chmurową (IAM)", "Synchronizacją zewnętrznych magazynów z obiektami K8s Secret", "Podziałem sieci na podsieci Ingestion, Training i Serving"],
    correct: [1], explain: "Workload Identity łączy konto serwisowe K8s z rolą IAM, bez statycznych kluczy.", src: "W09, slajd 331", note: "W09-bezpieczenstwo" },

  { id: "W09-32", w: "W09", c: "workload-identity", type: "single",
    q: "Pod treningowy ma pobierać wagi z chmury bez statycznych kluczy, dzięki powiązaniu konta serwisowego K8s z rolą IAM. Jak nazywa się ten mechanizm?",
    options: ["Workload Identity", "External Secrets Operator", "CSI Secret Store Driver", "Private Endpoints"],
    correct: [0], explain: "Workload Identity wiąże konto serwisowe K8s z rolą chmurową (IAM), więc Pod nie potrzebuje statycznych kluczy.", src: "W09, slajd 331", note: "W09-bezpieczenstwo" },

  { id: "W09-33", w: "W09", c: "workload-identity", type: "single",
    q: "Kontener treningowy ma dostęp tylko do specyficznego podkatalogu w S3. Którą zasadę ilustruje ten przykład z wykładu?",
    options: ["Zasada najmniejszych uprawnień", "Mikrosegmentacja sieci", "Filtrowanie wyjścia (Egress)", "Model współdzielonej odpowiedzialności"],
    correct: [0], explain: "Slajd podaje dostęp kontenera tylko do podkatalogu S3 jako przykład zasady najmniejszych uprawnień.", src: "W09, slajd 331", note: "W09-bezpieczenstwo" },

  { id: "W09-13", w: "W09", c: "secrets-k8s", type: "single",
    q: "Który mechanizm montuje sekrety jako wolumeny w pamięci RAM kontenera (tmpfs)?",
    options: ["External Secrets Operator", "CSI Secret Store Driver", "DefaultAzureCredential", "Cosign"],
    correct: [1], explain: "CSI Secret Store Driver montuje sekrety w tmpfs. ESO synchronizuje je do natywnych K8s Secret.", src: "W09, slajd 332", note: "W09-bezpieczenstwo" },

  { id: "W09-34", w: "W09", c: "secrets-k8s", type: "single",
    q: "Co robi External Secrets Operator (ESO) w Kubernetes?",
    options: ["Synchronizuje zewnętrzne magazyny z obiektami K8s Secret", "Montuje sekrety jako wolumeny tmpfs w pamięci RAM kontenera", "Wiąże konto serwisowe Kubernetes z rolą chmurową IAM", "Szyfruje ruch między Podami przez mTLS w Service Mesh"],
    correct: [0], explain: "ESO synchronizuje zewnętrzne magazyny z natywnymi K8s Secret. Montowanie w tmpfs to CSI Secret Store Driver.", src: "W09, slajd 332", note: "W09-bezpieczenstwo" },

  { id: "W09-35", w: "W09", c: "secrets-k8s", type: "single",
    q: "W przykładzie FastAPI z wykładu klucz do bazy wektorowej jest pobierany z Key Vault. Gdzie i kiedy trafia?",
    options: ["Do pamięci RAM podczas startu aplikacji", "Do pliku .env podczas budowania obrazu", "Do GitHub Secrets podczas wdrożenia CI/CD", "Do obiektu K8s Secret przy każdym zapytaniu"],
    correct: [0], explain: "Komentarz w kodzie mówi, że klucz trafia do RAM podczas startu i nie ma go w plikach.", src: "W09, slajd 333", note: "W09-bezpieczenstwo" },

  { id: "W09-14", w: "W09", c: "network", type: "single",
    q: "Jaki jest cel filtrowania ruchu wychodzącego (Egress Filtering) z kontenerów treningowych?",
    options: ["Ochrona przed atakami ML-DoS", "Zapobieganie eksfiltracji danych", "Przyspieszenie mapowania wag w pamięci", "Wymuszenie TLS 1.3 na zewnętrznych punktach końcowych"],
    correct: [1], explain: "Blokada egress uniemożliwia wysłanie danych na zewnątrz z kontenera treningowego.", src: "W09, slajd 334, 335", note: "W09-bezpieczenstwo" },

  { id: "W09-15", w: "W09", c: "network", type: "single",
    q: "Który element zapewnia komunikację z S3/Blob Storage wyłącznie wewnątrz sieci szkieletowej chmury?",
    options: ["Private Endpoints (PrivateLink)", "Kubernetes Network Policies", "WAF (Web Application Firewall)", "Service Mesh (Istio)"],
    correct: [0], explain: "Private Endpoints (Azure/AWS PrivateLink) trzymają ruch do storage w sieci chmury.", src: "W09, slajd 334", note: "W09-bezpieczenstwo" },

  { id: "W09-16", w: "W09", c: "pickle-safetensors", type: "single",
    q: "Dlaczego format Pickle (.pkl, .pt, .bin) jest krytyczną podatnością w łańcuchu dostaw ML?",
    options: ["Nie obsługuje mapowania wag w pamięci (mmap)", "Pozwala wykonać dowolny kod przy deserylizacji", "Nie pozwala na podpisywanie wag Cosign", "Przechowuje wagi w formacie bez kompresji"],
    correct: [1], explain: "Deserylizacja Pickle może uruchomić złośliwy kod. Safetensors parsuje tylko dane numeryczne.", src: "W09, slajd 336, 337", note: "W09-bezpieczenstwo" },

  { id: "W09-17", w: "W09", c: "pickle-safetensors", type: "single",
    q: "Co NIE jest cechą formatu Safetensors według wykładu?",
    options: ["Brak wsparcia dla kodu wykonywalnego", "Szybkie mapowanie w pamięci (mmap)", "Alternatywa od Hugging Face", "Wbudowane podpisywanie wag narzędziem Sigstore"],
    correct: [3], explain: "Podpisywanie (Cosign/Sigstore) to osobny krok weryfikacji integralności, nie cecha formatu.", src: "W09, slajd 336", note: "W09-bezpieczenstwo" },

  { id: "W09-18", w: "W09", c: "supply-chain", type: "single",
    q: "Które narzędzia służą według wykładu do skanowania artefaktów modeli w potoku CI/CD?",
    options: ["Cosign i Sigstore", "modelscan i Trivy", "Istio i Linkerd", "DVC i MLflow"],
    correct: [1], explain: "modelscan i Trivy skanują artefakty. Cosign/Sigstore podpisują wagi.", src: "W09, slajd 336", note: "W09-bezpieczenstwo" },

  { id: "W09-36", w: "W09", c: "supply-chain", type: "single",
    q: "Co według wykładu stosuje się do lokalnej weryfikacji każdego pobranego modelu bazowego?",
    options: ["Sumy kontrolne SHA-256", "Skanowanie narzędziem modelscan", "Klucze Customer-Managed Keys", "Konwersję wag do formatu .pkl"],
    correct: [0], explain: "Lokalna weryfikacja to suma SHA-256 każdego pobranego modelu bazowego. modelscan skanuje artefakty w potoku CI/CD.", src: "W09, slajd 336", note: "W09-bezpieczenstwo" },

  { id: "W09-37", w: "W09", c: "supply-chain", type: "single",
    q: "Do czego według wykładu służą narzędzia Cosign/Sigstore w łańcuchu dostaw ML?",
    options: ["Do podpisywania wag modeli", "Do skanowania artefaktów w CI/CD", "Do mapowania wag w pamięci (mmap)", "Do synchronizacji sekretów z K8s"],
    correct: [0], explain: "Cosign/Sigstore podpisują wagi modeli. Skanowanie artefaktów robią modelscan i Trivy.", src: "W09, slajd 336", note: "W09-bezpieczenstwo" },

  { id: "W09-19", w: "W09", c: "sponge", type: "single",
    q: "Jak nazywa się atak ML-DoS polegający na preparowaniu zapytań wymuszających maksymalną liczbę operacji zmiennoprzecinkowych?",
    options: ["Sponge Attack", "Evasion Attack", "Jailbreaking", "Data Poisoning"],
    correct: [0], explain: "Sponge Attack wykorzystuje asymetrię kosztów: tanie zapytanie, drogie obliczenia GPU.", src: "W09, slajd 338", note: "W09-bezpieczenstwo" },

  { id: "W09-38", w: "W09", c: "sponge", type: "single",
    q: "Dlaczego według wykładu API wnioskowania jest podatne na ataki ML-DoS (Sponge Attacks)?",
    options: ["Zapytanie ma wysoki koszt GPU, a atak jest tani", "Deserylizacja wag Pickle pozwala na wykonanie kodu", "Model zdradza dane PII przez pewność odpowiedzi", "Węzły GPU mają publiczne adresy IP w sieci VPC"],
    correct: [0], explain: "Asymetria kosztów: pojedyncze zapytanie zużywa drogie GPU (VRAM, energia), a atak kosztuje mało.", src: "W09, slajd 338", note: "W09-bezpieczenstwo" },

  { id: "W09-20", w: "W09", c: "guardrails", type: "single",
    q: "Która warstwa Defense-in-Depth to proxy (np. Llama Guard) weryfikujące semantycznie wejście i wyjście modelu?",
    options: ["Web Application Firewall", "Rate Limiting", "AI Guardrails", "SIEM (Sentinel)"],
    correct: [2], explain: "AI Guardrails sprawdzają treść semantycznie. WAF filtruje ruch na krawędzi sieci.", src: "W09, slajd 338", note: "W09-bezpieczenstwo" },

  { id: "W09-39", w: "W09", c: "guardrails", type: "single",
    q: "Czym są AI Guardrails w architekturze Defense-in-Depth?",
    options: ["Warstwą proxy weryfikującą semantycznie wejście i wyjście", "Filtracją całego ruchu sieciowego na krawędzi sieci", "Ograniczaniem liczby zapytań według estymowanego kosztu tokenów", "Integracją telemetrii ML z systemem SIEM, np. Sentinel"],
    correct: [0], explain: "AI Guardrails to proxy (np. Llama Guard) sprawdzające semantycznie wejście i wyjście. Krawędź sieci to WAF, koszt tokenów to Rate Limiting.", src: "W09, slajd 338", note: "W09-bezpieczenstwo" },

  { id: "W09-40", w: "W09", c: "guardrails", type: "single",
    q: "Co NIE jest warstwą architektury Defense-in-Depth dla API wnioskowania według wykładu?",
    options: ["WAF (Web Application Firewall)", "AI Guardrails (np. Llama Guard)", "Rate Limiting według kosztu tokenów", "Egress Filtering (Network Policy)"],
    correct: [3], explain: "Defense-in-Depth na slajdzie to WAF, AI Guardrails i Rate Limiting. Egress Filtering należy do izolacji sieciowej.", src: "W09, slajd 338", note: "W09-bezpieczenstwo" },

  { id: "W09-21", w: "W09", c: "audit", type: "single",
    q: "W jakich magazynach rejestruje się niezmienne logi audytowe zapytań i decyzji modelu?",
    options: ["WORM, np. AWS Object Lock", "tmpfs w pamięci RAM kontenera", "Natywne obiekty K8s Secret", "Zdalne repozytorium DVC"],
    correct: [0], explain: "Logi audytowe trafiają do magazynów WORM: Azure Immutable Blob lub AWS Object Lock.", src: "W09, slajd 339", note: "W09-bezpieczenstwo" },

  { id: "W09-22", w: "W09", c: "audit", type: "single",
    q: "Na czym polega kryptograficzny Data Lineage według wykładu?",
    options: ["Na szyfrowaniu danych treningowych kluczami CMK", "Na powiązaniu commita Git, hasha DVC i ID modelu MLflow", "Na wysyłaniu telemetrii ML do Microsoft Sentinel", "Na kompresji zbiorów danych przed zapisem w S3"],
    correct: [1], explain: "Data Lineage to pełna identyfikowalność: Git, DVC, MLflow.", src: "W09, slajd 339", note: "W09-bezpieczenstwo" },
]});
