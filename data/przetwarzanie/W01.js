(window.QUIZ_DATA ||= []).push({ subject: "przetwarzanie", questions: [
  // ===== W01 — Wprowadzenie do NLP, historia i kluczowe elementy rozwoju =====
  { id: "W01-01", w: "W01", c: "nlp-def", type: "single",
    q: "Gałąź Sztucznej Inteligencji pozwalająca komputerom na odczytywanie i zrozumienie ludzkiego języka to:",
    options: ["NLG", "NLP", "PCT", "LLM"],
    correct: [1], explain: "NLP (Natural Language Processing) to cała gałąź AI; NLU i NLG to jej dwa podejścia.", src: "W01, slajd 5", note: "W01-wprowadzenie" },

  { id: "W01-02", w: "W01", c: "nlp-def", type: "open",
    q: "Czym jest NLP?",
    answer: "NLP (Natural Language Processing) to gałąź Sztucznej Inteligencji pozwalająca komputerom odczytywać i rozumieć ludzki język.",
    src: "W01, slajd 5", note: "W01-wprowadzenie" },

  { id: "W01-03", w: "W01", c: "nlu-def", type: "single",
    q: "Analiza struktury i treści tekstu lub mowy w celu ekstrakcji znaczenia, sentymentu lub intencji to:",
    options: ["NLG", "Analiza zawartości", "NLU", "Pattern matching"],
    correct: [2], explain: "NLU (Natural Language Understanding) wydobywa znaczenie, sentyment lub intencję z tekstu albo mowy.", src: "W01, slajd 6", note: "W01-wprowadzenie" },

  { id: "W01-04", w: "W01", c: "nlu-def", type: "open",
    q: "Na czym polega NLU (Natural Language Understanding)?",
    answer: "NLU to analiza struktury i treści tekstu lub mowy w celu ekstrakcji znaczenia, sentymentu lub intencji.",
    src: "W01, slajd 6", note: "W01-wprowadzenie" },

  { id: "W01-05", w: "W01", c: "nlg-def", type: "single",
    q: "Czym jest NLG (Natural Language Generation)?",
    options: ["Analizą treści tekstu w celu wydobycia intencji", "Tworzeniem tekstów z ustrukturyzowanych danych", "Symulacją rozmowy przez pattern matching", "Wyszukiwaniem informacji w dużych tekstach"],
    correct: [1], explain: "NLG to wykorzystanie systemów AI do tworzenia tekstów z danych ustrukturyzowanych; analiza intencji to NLU.", src: "W01, slajd 6", note: "W01-wprowadzenie" },

  { id: "W01-06", w: "W01", c: "nlg-def", type: "single",
    q: "System otrzymuje tabelę z pomiarami pogody i pisze z niej komunikat dla czytelników. Które podejście reprezentuje?",
    options: ["NLU", "Analizę sentymentu", "Analizę zawartości", "NLG"],
    correct: [3], explain: "Tworzenie tekstu z ustrukturyzowanych danych (tabeli) to NLG.", src: "W01, slajd 6", note: "W01-wprowadzenie" },

  { id: "W01-07", w: "W01", c: "zastosowania", type: "multi",
    q: "Które z poniższych slajd wymienia jako typowe zastosowania NLP?",
    options: ["Podsumowanie treści", "Rozpoznawanie i synteza mowy", "Budowa ontologii domeny", "Tłumaczenia maszynowe"],
    correct: [0, 1, 3], explain: "Zastosowania: analiza sentymentu, analiza zawartości, wyszukiwanie informacji, tłumaczenia, podsumowanie, mowa. Ontologie pojawiają się tylko w historii (lata 70.).", src: "W01, slajd 7", note: "W01-wprowadzenie" },

  { id: "W01-25", w: "W01", c: "zastosowania", type: "single",
    q: "Którego z poniższych slajd NIE wymienia wśród typowych zastosowań NLP?",
    options: ["Wyszukiwanie informacji w tekstach", "Rozpoznawanie i synteza mowy", "Analiza fraz maszynami stanów", "Tłumaczenia maszynowe"],
    correct: [2], explain: "Maszyny stanów do analizy fraz to historia NLP z lat 70. (slajd 15), a nie zastosowanie ze slajdu 7.", src: "W01, slajd 7", note: "W01-wprowadzenie" },

  { id: "W01-26", w: "W01", c: "zastosowania", type: "open",
    q: "Wymień trzy typowe zastosowania NLP.",
    answer: "Np. analiza sentymentu, tłumaczenia maszynowe i podsumowanie treści; slajd podaje też analizę zawartości, wyszukiwanie informacji oraz rozpoznawanie i syntezę mowy.",
    src: "W01, slajd 7", note: "W01-wprowadzenie" },

  { id: "W01-08", w: "W01", c: "analiza-zawartosci", type: "single",
    q: "Znajdowanie nazw własnych i adresów oraz klasyfikacja i etykietowanie zawartości to:",
    options: ["Analiza zawartości", "Analiza sentymentu", "Podsumowanie treści", "Synteza mowy"],
    correct: [0], explain: "Tak slajd definiuje analizę zawartości; analiza sentymentu ocenia zadowolenie klienta.", src: "W01, slajd 7", note: "W01-wprowadzenie" },

  { id: "W01-09", w: "W01", c: "analiza-zawartosci", type: "single",
    q: "Firma chce sprawdzić, czy klienci są zadowoleni, na podstawie komentarzy. Które zastosowanie NLP to opisuje?",
    options: ["Analiza zawartości", "Wyszukiwanie informacji", "Analiza sentymentu", "Tłumaczenie maszynowe"],
    correct: [2], explain: "Analiza sentymentu odpowiada na pytanie, czy klient jest zadowolony (opinie, komentarze).", src: "W01, slajd 7", note: "W01-wprowadzenie" },

  { id: "W01-10", w: "W01", c: "wieloznacznosc", type: "single",
    q: "Co według slajdu ilustruje zdanie „I saw a man with a telescope”?",
    options: ["Język naturalny jest niejasny i wieloznaczny", "Przedimki zależą od liczby rzeczownika", "Komputer musi przechowywać całą wiedzę", "ELIZA daje użytkownikom iluzję zrozumienia"],
    correct: [0], explain: "Nie wiadomo, czy teleskop miał człowiek, czy mówiący: przykład wieloznaczności języka.", src: "W01, slajd 8", note: "W01-wprowadzenie" },

  { id: "W01-11", w: "W01", c: "wieloznacznosc", type: "open",
    q: "Dlaczego według wykładu NLP jest trudne?",
    answer: "Bo język naturalny jest niejasny i wieloznaczny, np. w zdaniu „I saw a man with a telescope” nie wiadomo, kto miał teleskop.",
    src: "W01, slajd 8", note: "W01-wprowadzenie" },

  { id: "W01-12", w: "W01", c: "wiedza", type: "multi",
    q: "Jakie dwa rozwiązania problemu wiedzy w NLP podaje slajd?",
    options: ["Wnioskowanie informacji z próbek wiedzy", "Ograniczenie systemu do języka angielskiego", "Przechowywanie wszystkich informacji w komputerze", "Zastąpienie wiedzy prostymi podstawieniami"],
    correct: [0, 2], explain: "Slajd 9: albo przechowujemy całą wiedzę w komputerze, albo wnioskujemy ją z próbek.", src: "W01, slajd 9", note: "W01-wprowadzenie" },

  { id: "W01-27", w: "W01", c: "wiedza", type: "single",
    q: "Czego według slajdu potrzeba, aby dobrze przetwarzać język?",
    options: ["Zestawu 6 reguł gramatycznych i 250 pojęć", "Wiedzy o świecie albo o domenie problemu", "Ontologii do strukturyzowania danych", "Statystyki zamiast reguł pisanych ręcznie"],
    correct: [1], explain: "Slajd 9: należy mieć wiedzę o świecie albo przynajmniej o domenie problemu.", src: "W01, slajd 9", note: "W01-wprowadzenie" },

  { id: "W01-28", w: "W01", c: "wiedza", type: "single",
    q: "System nie ma zapisanych wszystkich faktów, lecz uogólnia na podstawie przykładów. Które rozwiązanie problemu wiedzy ze slajdu to opisuje?",
    options: ["Przechowywanie wszystkich informacji w komputerze", "Wnioskowanie informacji z próbek wiedzy", "Analiza fraz za pomocą maszyn stanów", "Symulacja rozmowy przez podstawienia"],
    correct: [1], explain: "Zamiast przechowywać całą wiedzę w komputerze, system wnioskuje ją z próbek wiedzy.", src: "W01, slajd 9", note: "W01-wprowadzenie" },

  { id: "W01-13", w: "W01", c: "a-the", type: "multi",
    q: "Od czego według slajdu zależy wybór przedimka a lub the w języku angielskim?",
    options: ["Od liczby (pojedyncza, mnoga)", "Od czasu gramatycznego czasownika", "Od typu rzeczownika (policzalny, niepoliczalny)", "Od tego, czy to nazwa własna"],
    correct: [0, 2, 3], explain: "Slajd wymienia: typ rzeczownika, odniesienia (nowa informacja), liczbę, nazwę własną. Czasu czasownika nie ma.", src: "W01, slajd 10", note: "W01-wprowadzenie" },

  { id: "W01-29", w: "W01", c: "a-the", type: "single",
    q: "Jaki wniosek wyciąga slajd z przykładu przedimków a i the?",
    options: ["Wystarczy do tego słownik pojęć leksykalnych", "Trudno to zakodować w zestawie reguł", "Wystarczy pattern matching z podstawieniami", "O wyborze decyduje tylko liczba rzeczownika"],
    correct: [1], explain: "Przedimki zależą od wielu czynników, więc trudno je zakodować w regułach; slajd pyta, czy da się „nauczyć” komputer.", src: "W01, slajd 10", note: "W01-wprowadzenie" },

  { id: "W01-14", w: "W01", c: "turing-chomsky", type: "single",
    q: "Kto zaproponował koncepcję „universal grammar” (1957)?",
    options: ["Alan Turing", "Joseph Weizenbaum", "Noam Chomsky", "Gottfried Leibniz"],
    correct: [2], explain: "Chomsky: universal grammar (1957). Turing: test z artykułu „Computing Machinery and Intelligence”.", src: "W01, slajd 12", note: "W01-wprowadzenie" },

  { id: "W01-15", w: "W01", c: "turing-chomsky", type: "single",
    q: "W którym artykule Alan Turing zaproponował to, co dziś nazywa się Testem Turinga?",
    options: ["„Attention Is All You Need”", "„Computing Machinery and Intelligence”", "„Universal Grammar”", "„Machine Translation of Languages”"],
    correct: [1], explain: "Test Turinga pochodzi z „Computing Machinery and Intelligence” (lata 50.).", src: "W01, slajd 12", note: "W01-wprowadzenie" },

  { id: "W01-16", w: "W01", c: "georgetown", type: "single",
    q: "Czego dotyczył eksperyment Georgetown-IBM z 1954 roku?",
    options: ["Tłumaczenia zdań z angielskiego na rosyjski", "Symulacji rozmowy z terapeutą", "Tłumaczenia zdań z rosyjskiego na angielski", "Gry w Jeopardy! z ludźmi"],
    correct: [2], explain: "60 zdań po rosyjsku przetłumaczono na angielski na komputerze IBM 701.", src: "W01, slajd 13", note: "W01-wprowadzenie" },

  { id: "W01-17", w: "W01", c: "georgetown", type: "single",
    q: "Który opis eksperymentu Georgetown-IBM jest zgodny ze slajdem?",
    options: ["6 reguł gramatycznych, 250 pojęć, chemia organiczna", "250 reguł gramatycznych, 6 pojęć, chemia organiczna", "6 reguł gramatycznych, 250 pojęć, medycyna", "60 reguł gramatycznych, 250 pojęć, fizyka"],
    correct: [0], explain: "Slajd 13: 6 reguł gramatycznych, 250 pojęć leksykalnych w słowniku, specjalizacja w chemii organicznej.", src: "W01, slajd 13", note: "W01-wprowadzenie" },

  { id: "W01-18", w: "W01", c: "eliza", type: "single",
    q: "Na czym opierała się ELIZA Josepha Weizenbauma?",
    options: ["Na statystyce i ontologiach", "Na pattern matching i podstawieniach", "Na sieciach rekurencyjnych", "Na mechanizmie uwagi"],
    correct: [1], explain: "ELIZA symulowała konwersację przez pattern matching i podstawienia, bez rzeczywistego rozumienia.", src: "W01, slajd 14", note: "W01-wprowadzenie" },

  { id: "W01-19", w: "W01", c: "eliza", type: "single",
    q: "Które zdanie o ELIZA NIE jest zgodne ze slajdem?",
    options: ["Mogła udawać terapię PCT", "Dawała użytkownikom iluzję zrozumienia", "Rozumiała sens wypowiedzi rozmówcy", "Symulowała konwersację z człowiekiem"],
    correct: [2], explain: "ELIZA dawała tylko iluzję zrozumienia; nie rozumiała wypowiedzi.", src: "W01, slajd 14", note: "W01-wprowadzenie" },

  { id: "W01-20", w: "W01", c: "projekcja", type: "open",
    q: "Jaki efekt pojawił się przy pracy z systemem ELIZA?",
    answer: "Efekt projekcji: użytkownicy przypisywali programowi komputerowemu ludzkie cechy, np. empatię.",
    src: "W01, slajd 14", note: "W01-wprowadzenie" },

  { id: "W01-30", w: "W01", c: "projekcja", type: "single",
    q: "Przypisywanie programom komputerowym ludzkich cech, takich jak empatia, to według slajdu:",
    options: ["Iluzja zrozumienia", "Efekt projekcji", "Test Turinga", "Terapia PCT"],
    correct: [1], explain: "Slajd 14: pojawia się efekt projekcji ludzkich cech na programy. Iluzję zrozumienia ELIZA daje użytkownikom, to inne zdanie slajdu.", src: "W01, slajd 14", note: "W01-wprowadzenie" },

  { id: "W01-21", w: "W01", c: "epoki", type: "single",
    q: "W którym okresie NLP zwróciło się w stronę statystyki, aby obejść problem złożonych reguł pisanych ręcznie?",
    options: ["W latach 70.", "W latach 80.", "W latach 90.", "Po roku 2014"],
    correct: [1], explain: "Lata 70.: maszyny stanów i ontologie. Lata 80.: statystyka. Lata 90.: sieci neuronowe.", src: "W01, slajd 15", note: "W01-wprowadzenie" },

  { id: "W01-22", w: "W01", c: "epoki", type: "single",
    q: "Co według slajdu charakteryzuje NLP w latach 70. XX wieku?",
    options: ["Modele oparte o sztuczne sieci neuronowe", "Statystyka zamiast ręcznie pisanych reguł", "Maszyny stanów do analizy fraz i ontologie", "Mechanizm uwagi i architektura transformer"],
    correct: [2], explain: "W latach 70. używano maszyn stanów do analizy fraz, potem ontologii do strukturyzacji danych.", src: "W01, slajd 15", note: "W01-wprowadzenie" },

  { id: "W01-23", w: "W01", c: "uwaga-transformer", type: "single",
    q: "Która para „rok — wydarzenie” jest zgodna ze slajdem?",
    options: ["2014 — artykuł o architekturze transformer", "2017 — pojawia się mechanizm uwagi", "2022 — artykuł „Attention Is All You Need”", "2017 — artykuł o architekturze transformer"],
    correct: [3], explain: "Mechanizm uwagi: 2014. „Attention Is All You Need” (transformer): 2017. ChatGPT: 2022.", src: "W01, slajd 16", note: "W01-wprowadzenie" },

  { id: "W01-31", w: "W01", c: "uwaga-transformer", type: "single",
    q: "W którym roku według slajdu pojawia się mechanizm uwagi?",
    options: ["1990", "2014", "2017", "2022"],
    correct: [1], explain: "Mechanizm uwagi: 2014. Artykuł o transformerze: 2017.", src: "W01, slajd 16", note: "W01-wprowadzenie" },

  { id: "W01-32", w: "W01", c: "uwaga-transformer", type: "single",
    q: "Czego według slajdu dotyczy artykuł „Attention Is All You Need” z 2017 roku?",
    options: ["Sieci rekurencyjnych z embeddingami", "Architektury transformer", "Chatbota opartego o duży model", "Statystyki zamiast reguł ręcznych"],
    correct: [1], explain: "Artykuł opisuje architekturę transformer. Sieci rekurencyjne z embeddingami to rok 1990, chatbot ChatGPT to 2022.", src: "W01, slajd 16", note: "W01-wprowadzenie" },

  { id: "W01-24", w: "W01", c: "chronologia", type: "single",
    q: "Która kolejność wydarzeń jest chronologiczna?",
    options: ["ELIZA → Georgetown-IBM → mechanizm uwagi → ChatGPT", "Georgetown-IBM → ELIZA → mechanizm uwagi → ChatGPT", "Georgetown-IBM → mechanizm uwagi → ELIZA → ChatGPT", "ELIZA → mechanizm uwagi → Georgetown-IBM → ChatGPT"],
    correct: [1], explain: "Georgetown-IBM 1954, ELIZA 1964, mechanizm uwagi 2014, ChatGPT 2022.", src: "W01, slajdy 13–16", note: "W01-wprowadzenie" },

  { id: "W01-33", w: "W01", c: "chronologia", type: "single",
    q: "Która kolejność wydarzeń z historii NLP jest zgodna ze slajdami?",
    options: ["Georgetown-IBM → patent na maszynę tłumaczącą → universal grammar → ELIZA", "Patent na maszynę tłumaczącą → universal grammar → Georgetown-IBM → ELIZA", "Patent na maszynę tłumaczącą → Georgetown-IBM → universal grammar → ELIZA", "Patent na maszynę tłumaczącą → Georgetown-IBM → ELIZA → universal grammar"],
    correct: [2], explain: "Patent na maszynę tłumaczącą: lata 30. Georgetown-IBM: 1954. Universal grammar: 1957. ELIZA: 1964.", src: "W01, slajdy 12–14", note: "W01-wprowadzenie" },
]});
