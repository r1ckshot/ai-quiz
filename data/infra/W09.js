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

  { id: "W09-04", w: "W09", c: "data-poisoning", type: "single",
    q: "Atakujący dodaje spreparowane przykłady do zbioru treningowego, aby wstrzyknąć do modelu „backdoor”. Jak nazywa się ten atak?",
    options: ["Adversarial / Evasion Attack", "Data Poisoning", "Membership Inference", "Sponge Attack"],
    correct: [1], explain: "Data Poisoning to manipulacja zbiorem treningowym. Evasion działa dopiero w fazie wnioskowania.", src: "W09, slajd 329", note: "W09-bezpieczenstwo" },

  { id: "W09-05", w: "W09", c: "adversarial", type: "single",
    q: "Czym są ataki kontradyktoryjne (Adversarial / Evasion Attacks)?",
    options: ["Niewidocznym szumem na wejściu, wywołującym błąd w fazie wnioskowania", "Manipulacją zbiorem treningowym w celu degradacji modelu", "Odtwarzaniem danych treningowych z pewności odpowiedzi modelu", "Zapytaniami wymuszającymi maksymalną liczbę operacji zmiennoprzecinkowych"],
    correct: [0], explain: "Evasion dodaje niewidoczny szum do wejścia w fazie wnioskowania. Manipulacja zbiorem treningowym to Data Poisoning.", src: "W09, slajd 329", note: "W09-bezpieczenstwo" },

  { id: "W09-06", w: "W09", c: "inversion", type: "single",
    q: "Który atak polega na odtwarzaniu danych treningowych (np. PII) poprzez analizę odpowiedzi i pewności modelu?",
    options: ["Prompt Injection", "Data Poisoning", "Inwersja modelu", "Jailbreaking"],
    correct: [2], explain: "Inwersja modelu i Membership Inference wyciągają informacje o danych treningowych z odpowiedzi modelu.", src: "W09, slajd 329", note: "W09-bezpieczenstwo" },

  { id: "W09-07", w: "W09", c: "prompt-injection", type: "single",
    q: "Złośliwa instrukcja ukryta w dokumencie pobranym przez system RAG zmienia zachowanie LLM. Jak nazywa się ten atak?",
    options: ["Pośredni Prompt Injection", "Inwersja modelu", "Bezpośredni Jailbreaking", "Membership Inference"],
    correct: [0], explain: "Slajd wymienia pośredni Prompt Injection, np. przez systemy RAG.", src: "W09, slajd 329", note: "W09-bezpieczenstwo" },

  { id: "W09-08", w: "W09", c: "envelope", type: "single",
    q: "Na czym polega architektura Envelope Encryption?",
    options: ["Klucz KEK jest szyfrowany przez klucz DEK", "Klucz DEK jest szyfrowany przez klucz KEK", "Dane są szyfrowane wyłącznie kluczem dostawcy chmury", "Ruch w klastrze jest szyfrowany przez mTLS"],
    correct: [1], explain: "Data Encryption Key szyfruje dane, a sam jest szyfrowany przez Key Encryption Key.", src: "W09, slajd 330", note: "W09-bezpieczenstwo" },

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

  { id: "W09-12", w: "W09", c: "workload-identity", type: "single",
    q: "Czym jest Workload Identity w Kubernetes?",
    options: ["Montowaniem sekretów jako wolumenów tmpfs", "Wiązaniem konta serwisowego K8s z rolą chmurową (IAM)", "Synchronizacją zewnętrznych magazynów z obiektami K8s Secret", "Podziałem sieci na podsieci Ingestion, Training i Serving"],
    correct: [1], explain: "Workload Identity łączy konto serwisowe K8s z rolą IAM, bez statycznych kluczy.", src: "W09, slajd 331", note: "W09-bezpieczenstwo" },

  { id: "W09-13", w: "W09", c: "secrets-k8s", type: "single",
    q: "Który mechanizm montuje sekrety jako wolumeny w pamięci RAM kontenera (tmpfs)?",
    options: ["External Secrets Operator", "CSI Secret Store Driver", "DefaultAzureCredential", "Cosign"],
    correct: [1], explain: "CSI Secret Store Driver montuje sekrety w tmpfs. ESO synchronizuje je do natywnych K8s Secret.", src: "W09, slajd 332", note: "W09-bezpieczenstwo" },

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

  { id: "W09-19", w: "W09", c: "sponge", type: "single",
    q: "Jak nazywa się atak ML-DoS polegający na preparowaniu zapytań wymuszających maksymalną liczbę operacji zmiennoprzecinkowych?",
    options: ["Sponge Attack", "Evasion Attack", "Jailbreaking", "Data Poisoning"],
    correct: [0], explain: "Sponge Attack wykorzystuje asymetrię kosztów: tanie zapytanie, drogie obliczenia GPU.", src: "W09, slajd 338", note: "W09-bezpieczenstwo" },

  { id: "W09-20", w: "W09", c: "guardrails", type: "single",
    q: "Która warstwa Defense-in-Depth to proxy (np. Llama Guard) weryfikujące semantycznie wejście i wyjście modelu?",
    options: ["Web Application Firewall", "Rate Limiting", "AI Guardrails", "SIEM (Sentinel)"],
    correct: [2], explain: "AI Guardrails sprawdzają treść semantycznie. WAF filtruje ruch na krawędzi sieci.", src: "W09, slajd 338", note: "W09-bezpieczenstwo" },

  { id: "W09-21", w: "W09", c: "audit", type: "single",
    q: "W jakich magazynach rejestruje się niezmienne logi audytowe zapytań i decyzji modelu?",
    options: ["WORM, np. AWS Object Lock", "tmpfs w pamięci RAM kontenera", "Natywne obiekty K8s Secret", "Zdalne repozytorium DVC"],
    correct: [0], explain: "Logi audytowe trafiają do magazynów WORM: Azure Immutable Blob lub AWS Object Lock.", src: "W09, slajd 339", note: "W09-bezpieczenstwo" },

  { id: "W09-22", w: "W09", c: "audit", type: "single",
    q: "Na czym polega kryptograficzny Data Lineage według wykładu?",
    options: ["Na szyfrowaniu danych treningowych kluczami CMK", "Na powiązaniu commita Git, hasha DVC i ID modelu MLflow", "Na wysyłaniu telemetrii ML do Microsoft Sentinel", "Na kompresji zbiorów danych przed zapisem w S3"],
    correct: [1], explain: "Data Lineage to pełna identyfikowalność: Git, DVC, MLflow.", src: "W09, slajd 339", note: "W09-bezpieczenstwo" },
]});
