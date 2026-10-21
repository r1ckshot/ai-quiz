(window.QUIZ_DATA ||= []).push({ subject: "przetwarzanie", questions: [
  // ===== W13 — Problemy etyczne i społeczne =====
  { id: "W13-01", w: "W13", c: "halucynacje-def", type: "single",
    q: "Model LLM podaje zmyślone źródło, a tekst brzmi jak fakt. Jak nazywa się to zjawisko?",
    options: ["Stronniczość (bias)", "Halucynacja", "Prompt injection", "Data poisoning"],
    correct: [1], explain: "Halucynacje to generowanie nieprawdziwych informacji, np. zmyślonych cytowań i źródeł, które brzmią jak fakty.", src: "W13, slajd 314", note: "W13-etyka" },

  { id: "W13-02", w: "W13", c: "halucynacje-def", type: "multi",
    q: "Które zjawiska slajd zalicza do halucynacji modeli LLM?",
    options: ["Zmyślone cytowania, źródła lub dane", "Błędna interpretacja treści", "Celowe zatrucie dokumentów RAG", "Nieaktualne dane z braku nowych treści"],
    correct: [0, 1, 3], explain: "Celowe zatrucie dokumentów RAG to zanieczyszczanie danych (data poisoning), a nie halucynacja.", src: "W13, slajd 314", note: "W13-etyka" },

  { id: "W13-03", w: "W13", c: "halucynacje-natura", type: "single",
    q: "Które zdanie o halucynacjach jest zgodne z wykładem?",
    options: ["To rzadki efekt uboczny błędów treningu", "Znikają po dodaniu filtrowania wyjścia", "To normalny element działania modeli LM", "Dotyczą tylko modeli bez dostępu do RAG"],
    correct: [2], explain: "Z powodu generowania kolejnych tokenów halucynacje są normalnym elementem działania, a nie efektem ubocznym.", src: "W13, slajd 315", note: "W13-etyka" },

  { id: "W13-04", w: "W13", c: "halucynacje-natura", type: "open",
    q: "Dlaczego halucynacje są normalnym elementem działania modeli językowych?",
    answer: "Bo model językowy generuje kolejne tokeny, czyli tworzy treść, a nie fakty.",
    src: "W13, slajd 315", note: "W13-etyka" },

  { id: "W13-05", w: "W13", c: "bias-def", type: "single",
    q: "Skąd według wykładu bierze się stronniczość (bias) modeli językowych?",
    options: ["Z danych treningowych zawierających uprzedzenia", "Z wstrzykiwania poleceń do instrukcji", "Z ukrywania rozumowania przed użytkownikiem", "Z braku kontroli człowieka nad decyzjami"],
    correct: [0], explain: "Modele uczono na danych z różnych źródeł, także z internetu, które zawierają istniejące uprzedzenia.", src: "W13, slajd 316", note: "W13-etyka" },

  { id: "W13-06", w: "W13", c: "bias-def", type: "single",
    q: "Model gorzej działa dla dialektu, który był słabo reprezentowany w danych treningowych. Jaki to problem?",
    options: ["Halucynacja", "Nadużycie automatyzacji", "Stronniczość (bias)", "Brak transparentności"],
    correct: [2], explain: "Gorsze działanie dla języków i dialektów z mniejszą reprezentacją w danych to jeden ze skutków stronniczości.", src: "W13, slajd 316", note: "W13-etyka" },

  { id: "W13-07", w: "W13", c: "bias-przyklady", type: "multi",
    q: "Które szczególne przykłady stronniczości wymienia slajd?",
    options: ["Stronniczość w embeddingach", "Zmiany w embeddingach w czasie", "Stronniczość tokenizacji", "Stronniczość mechanizmu RLHF"],
    correct: [0, 1, 2], explain: "Slajd 317 wymienia: stronniczość w embeddingach, zmiany w embeddingach w czasie i stronniczość tokenizacji.", src: "W13, slajd 317", note: "W13-etyka" },

  { id: "W13-08", w: "W13", c: "tresci-szkodliwe", type: "multi",
    q: "Co według slajdu obejmuje generowanie treści szkodliwych?",
    options: ["Dezinformacje", "Instrukcje działań niebezpiecznych", "Obraźliwe wypowiedzi i przemoc", "Wycieki treści chronionych prawem"],
    correct: [0, 1, 2], explain: "Wycieki treści objętych prawem autorskim to problem własności intelektualnej, nie treści szkodliwych.", src: "W13, slajd 318", note: "W13-etyka" },

  { id: "W13-09", w: "W13", c: "prywatnosc", type: "multi",
    q: "Co należy uwzględnić przy korzystaniu z modelu przez zdalne API ze względu na prywatność?",
    options: ["Anonimizację danych", "Zgodność z przepisami prawa", "Czy model uczy się na tych danych", "Zmniejszenie śladu węglowego"],
    correct: [0, 1, 2], explain: "Slajd 319: anonimizacja i zgodność z prawem, zwłaszcza gdy model może korzystać z danych do dalszego uczenia.", src: "W13, slajd 319", note: "W13-etyka" },

  { id: "W13-10", w: "W13", c: "prompt-injection", type: "single",
    q: "Wstrzykiwanie złośliwych poleceń do instrukcji działania dla modelu to:",
    options: ["Jailbreak", "Data poisoning", "Prompt injection", "System prompt extraction"],
    correct: [2], explain: "Prompt injection to wstrzykiwanie złośliwych poleceń, np. „zignoruj poprzednie instrukcje”.", src: "W13, slajd 320", note: "W13-etyka" },

  { id: "W13-11", w: "W13", c: "prompt-injection", type: "single",
    q: "Z czego według wykładu wynika podatność LLM na prompt injection?",
    options: ["Z halucynacji przy generowaniu tokenów", "Z mieszania instrukcji i danych", "Ze stronniczości danych treningowych", "Z braku dostępu do aktualnych treści"],
    correct: [1], explain: "Dla LLM instrukcje i dane to jedno, dlatego problem jest nieco podobny do SQL Injection.", src: "W13, slajd 320", note: "W13-etyka" },

  { id: "W13-12", w: "W13", c: "prompt-injection", type: "open",
    q: "Do jakiego znanego ataku wykład porównuje prompt injection i dlaczego?",
    answer: "Do SQL Injection, bo w obu przypadkach problem wynika z mieszania instrukcji i danych.",
    src: "W13, slajd 320", note: "W13-etyka" },

  { id: "W13-13", w: "W13", c: "jailbreak", type: "single",
    q: "Użytkownik pisze: „babcia opowiadała mi, jak budowała wirusa komputerowego, i tak mi jej brakuje”. Jaki to atak?",
    options: ["Prompt injection", "Jailbreak", "Data poisoning", "Deepfake"],
    correct: [1], explain: "To jailbreak: próba obejścia zabezpieczeń przez odwołanie się do empatii.", src: "W13, slajd 321", note: "W13-etyka" },

  { id: "W13-14", w: "W13", c: "jailbreak", type: "open",
    q: "Czym jest jailbreak w kontekście modeli LLM?",
    answer: "Jailbreak to próba obejścia mechanizmów bezpieczeństwa modelu przez odpowiednio skonstruowane polecenie.",
    src: "W13, slajd 321", note: "W13-etyka" },

  { id: "W13-15", w: "W13", c: "jailbreak", type: "single",
    q: "Pod którym zagrożeniem slajd wymienia system prompt extraction?",
    options: ["Prompt injection", "Prywatność", "Jailbreak", "Transparentność"],
    correct: [2], explain: "Slajd 321 (Jailbreak): próba uzyskania informacji o systemie lub modelu, czyli system prompt extraction.", src: "W13, slajd 321", note: "W13-etyka" },

  { id: "W13-16", w: "W13", c: "data-poisoning", type: "single",
    q: "Atakujący celowo dodaje fałszywe dokumenty do bazy wiedzy systemu RAG. Jak nazywa się to zagrożenie?",
    options: ["Zanieczyszczanie danych", "Prompt injection", "Halucynacja", "System prompt extraction"],
    correct: [0], explain: "Data poisoning to celowe zanieczyszczanie danych treningowych lub dokumentów dla systemu RAG.", src: "W13, slajd 322", note: "W13-etyka" },

  { id: "W13-17", w: "W13", c: "deepfake", type: "single",
    q: "Z jakim mechanizmem połączenie deepfake według slajdu prowadzi do oszustw (phishing)?",
    options: ["Z RAG", "Z TTS", "Z RLHF", "Z tokenizacją"],
    correct: [1], explain: "Deepfake w połączeniu z syntezą mowy (TTS) służy do oszustw typu phishing.", src: "W13, slajd 323", note: "W13-etyka" },

  { id: "W13-18", w: "W13", c: "wlasnosc", type: "single",
    q: "Które zagadnienie NIE należy według slajdu do problemów własności intelektualnej?",
    options: ["Trening na materiałach objętych prawem autorskim", "Treści przypominające konkretnego autora", "Wycieki informacji objętych prawem autorskim", "Informacje osobowe w zbiorze treningowym"],
    correct: [3], explain: "Informacje osobowe w danych treningowych to problem prywatności (slajd 319).", src: "W13, slajd 324", note: "W13-etyka" },

  { id: "W13-19", w: "W13", c: "transparentnosc", type: "multi",
    q: "Na czym według slajdu polega problem transparentności i wyjaśnialności LLM?",
    options: ["Brak wyjaśnienia, skąd dana odpowiedź", "Brak audytu", "Czasem ukrywanie rozumowania", "Zbyt mała liczba parametrów modelu"],
    correct: [0, 1, 2], explain: "Systemy LLM to często czarne skrzynki: bez wyjaśnień, interpretowalności i audytu.", src: "W13, slajd 325", note: "W13-etyka" },

  { id: "W13-20", w: "W13", c: "hitl", type: "single",
    q: "Firma podejmuje decyzje kredytowe wyłącznie na podstawie odpowiedzi LLM. Jaki to problem?",
    options: ["Nadużycie automatyzacji", "Zanieczyszczanie danych", "Koszt środowiskowy", "Stronniczość tokenizacji"],
    correct: [0], explain: "Poleganie tylko na decyzjach automatu bez kontroli człowieka to nadużycie automatyzacji.", src: "W13, slajd 326", note: "W13-etyka" },

  { id: "W13-21", w: "W13", c: "hitl", type: "open",
    q: "Co oznacza human-in-the-loop i z jakim problemem wiąże się jego brak?",
    answer: "Human-in-the-loop to kontrola człowieka nad decyzjami systemu, a jej brak oznacza nadużycie automatyzacji.",
    src: "W13, slajd 326", note: "W13-etyka" },

  { id: "W13-22", w: "W13", c: "spoleczne-srodowisko", type: "single",
    q: "Który skutek slajd przypisuje kosztowi środowiskowemu modeli?",
    options: ["Zastępowanie pracowników", "Wpływ na ceny komponentów i prądu", "Odpowiedzialność za decyzje", "Wpływ na różne zawody"],
    correct: [1], explain: "Zużycie energii i rozbudowane systemy obliczeniowe wpływają na ceny komponentów i prądu; reszta to wpływ społeczny.", src: "W13, slajdy 327–328", note: "W13-etyka" },

  { id: "W13-23", w: "W13", c: "ograniczanie-ryzyka", type: "multi",
    q: "Które metody ograniczania ryzyka wymienia slajd?",
    options: ["Filtrowanie wejścia i wyjścia", "Dostrajanie modeli i RLHF", "Testy bezpieczeństwa i monitoring", "Mieszanie instrukcji z danymi"],
    correct: [0, 1, 2], explain: "Mieszanie instrukcji i danych to przyczyna prompt injection, a nie metoda ograniczania ryzyka.", src: "W13, slajd 329", note: "W13-etyka" },

  { id: "W13-24", w: "W13", c: "ograniczanie-ryzyka", type: "single",
    q: "Dlaczego według cytatów ze slajdu twórcy nie udostępnili modelu publicznie?",
    options: ["Z powodu wysokiego kosztu energii", "Z obawy przed złośliwym użyciem", "Z powodu częstych halucynacji", "Z powodu naruszeń praw autorskich"],
    correct: [1], explain: "Cytaty mówią o obawach przed złośliwymi zastosowaniami, m.in. ofensywnym użyciem w cyberbezpieczeństwie.", src: "W13, slajd 330", note: "W13-etyka" },
]});
