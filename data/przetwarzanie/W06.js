(window.QUIZ_DATA ||= []).push({ subject: "przetwarzanie", questions: [
  // ===== W06 — Klasyfikacja tekstu, naiwny klasyfikator Bayesa, analiza sentymentu =====
  { id: "W06-01", w: "W06", c: "klasyfikacja-cele", type: "single",
    q: "Serwis chce automatycznie sprawdzać, czy wiadomość zawiera wulgaryzmy. Który cel klasyfikacji tekstu podaje dla tego slajd?",
    options: ["Analiza sentymentu", "Moderacja treści", "Etykietowanie tematyczne", "Ekstrakcja cech"],
    correct: [1], explain: "Slajd 134: moderacja treści odpowiada na pytanie, czy wiadomość zawiera wulgaryzmy.", src: "W06, slajd 134", note: "W06-klasyfikacja-sentyment" },

  { id: "W06-02", w: "W06", c: "klasyfikacja-cele", type: "single",
    q: "Jakie pytanie według slajdu rozwiązuje etykietowanie tematyczne?",
    options: ["Czy wzmianka o firmie jest pozytywna?", "Czy wiadomość zawiera wulgaryzmy?", "Jaki to jest typ zgłoszenia błędu?", "Czy recenzja produktu jest negatywna?"],
    correct: [2], explain: "Etykietowanie tematyczne: jaki to typ zgłoszenia błędu. Pozytywna lub negatywna wzmianka to analiza sentymentu.", src: "W06, slajd 134", note: "W06-klasyfikacja-sentyment" },

  { id: "W06-03", w: "W06", c: "tradycyjne-ml", type: "single",
    q: "Który klasyfikator slajd NIE zalicza do „tradycyjnego” ML?",
    options: ["Regresja logistyczna", "Naiwny klasyfikator Bayesa", "SVM", "LSTM"],
    correct: [3], explain: "LSTM i transformery to osobna grupa; „tradycyjne” ML to Bayes, regresja logistyczna, SVM, drzewa, lasy, k-NN.", src: "W06, slajd 135", note: "W06-klasyfikacja-sentyment" },

  { id: "W06-04", w: "W06", c: "tradycyjne-ml", type: "single",
    q: "Dlaczego według slajdu nie zawsze należy używać LLM do klasyfikacji tekstu?",
    options: ["Metody tradycyjne mogą być szybsze i tańsze", "LLM nie potrafią przypisać tekstu do klasy", "LLM wymagają reprezentacji bag of words", "Metody tradycyjne zawsze są dokładniejsze"],
    correct: [0], explain: "Slajd 135: nie zawsze do wszystkiego używa się LLM, bo „tradycyjne” metody mogą być szybsze i tańsze.", src: "W06, slajd 135", note: "W06-klasyfikacja-sentyment" },

  { id: "W06-05", w: "W06", c: "ekstrakcja-cech", type: "multi",
    q: "Które metody slajd wymienia do ekstrakcji cech w klasyfikacji tekstu?",
    options: ["TF-IDF", "Wygładzanie Laplace’a", "Bag of Words", "Embeddingi"],
    correct: [0, 2, 3], explain: "Ekstrakcja cech: Bag of Words, TF-IDF, n-gramy, embeddingi. Wygładzanie Laplace’a dotyczy szacowania prawdopodobieństw.", src: "W06, slajd 135", note: "W06-klasyfikacja-sentyment" },

  { id: "W06-06", w: "W06", c: "nb-def", type: "single",
    q: "Klasyfikator probabilistyczny, który dla dokumentu d przypisuje klasę c, to:",
    options: ["Regresja logistyczna", "Naiwny Bayes", "Metoda k-NN", "Model BERT"],
    correct: [1], explain: "Slajd 136 tak definiuje naiwny klasyfikator Bayesa: ĉ = argmax P(c | d).", src: "W06, slajd 136", note: "W06-klasyfikacja-sentyment" },

  { id: "W06-07", w: "W06", c: "nb-def", type: "open",
    q: "Czym jest naiwny klasyfikator Bayesa?",
    answer: "To klasyfikator probabilistyczny, który dla dokumentu d przypisuje klasę c o największym P(c | d).",
    src: "W06, slajd 136", note: "W06-klasyfikacja-sentyment" },

  { id: "W06-08", w: "W06", c: "apriori", type: "single",
    q: "Jak slajd opisuje prawdopodobieństwo a priori P(H)?",
    options: ["Jak prawdopodobne jest H po uwzględnieniu e", "Jak prawdopodobne jest e przy prawdziwym H", "Jak prawdopodobne jest H bez uwzględniania e", "Jak prawdopodobne jest e niezależnie od H"],
    correct: [2], explain: "A priori: bez uwzględniania obserwacji e. Po uwzględnieniu e to a posteriori P(H|e).", src: "W06, slajd 138", note: "W06-klasyfikacja-sentyment" },

  { id: "W06-09", w: "W06", c: "apriori", type: "single",
    q: "Jak nazywa się P(H|e), czyli prawdopodobieństwo H po uwzględnieniu obserwacji e?",
    options: ["Prawdopodobieństwo a priori", "Prawdopodobieństwo a posteriori", "Wiarygodność obserwacji", "Prawdopodobieństwo brzegowe"],
    correct: [1], explain: "Slajd 138: P(H|e) to prawdopodobieństwo a posteriori.", src: "W06, slajd 138", note: "W06-klasyfikacja-sentyment" },

  { id: "W06-10", w: "W06", c: "bayes-calc", type: "calc",
    q: "Twierdzenie Bayesa: P(H|e) = P(e|H)×P(H) / P(e). Oblicz P(H|e), jeśli P(e|H) = 0,6, P(H) = 0,2, P(e) = 0,3.",
    answer: 0.4, tolerance: 0.001,
    explain: "0,6 × 0,2 / 0,3 = 0,12 / 0,3 = 0,4.", src: "W06, slajd 137", note: "W06-klasyfikacja-sentyment" },

  { id: "W06-11", w: "W06", c: "pd-stale", type: "single",
    q: "Dlaczego w regule klasyfikacji można pominąć mianownik P(d)?",
    options: ["Bo P(d) jest zawsze równe 1", "Bo P(d) jest stałe dla wszystkich klas", "Bo P(d) zastępuje wygładzanie Laplace’a", "Bo cechy dokumentu są niezależne"],
    correct: [1], explain: "Slajd 140: P(d) jest stałe, więc ĉ = argmax P(d|c)P(c).", src: "W06, slajd 140", note: "W06-klasyfikacja-sentyment" },

  { id: "W06-12", w: "W06", c: "pd-stale", type: "single",
    q: "Co w klasyfikacji tekstu zastępuje hipotezę H i obserwację e z twierdzenia Bayesa?",
    options: ["H to cecha f, e to klasa c", "H to dokument d, e to klasa c", "H to klasa c, e to dokument d", "H to klasa c, e to zbiór D"],
    correct: [2], explain: "Slajd 140: zamiast hipotezy H jest klasa c, zamiast obserwacji e jest dokument d.", src: "W06, slajd 140", note: "W06-klasyfikacja-sentyment" },

  { id: "W06-13", w: "W06", c: "naiwne-zalozenie", type: "single",
    q: "Na czym polega naiwne założenie Bayesa?",
    options: ["Na pominięciu prawdopodobieństwa a priori", "Na dodaniu 1 do każdej liczby wystąpień", "Na warunkowej niezależności cech", "Na zamianie iloczynu na sumę logarytmów"],
    correct: [2], explain: "Slajd 142: upraszczamy, zakładając warunkową niezależność cech, więc P(d|c) to iloczyn P(f_i|c).", src: "W06, slajd 142", note: "W06-klasyfikacja-sentyment" },

  { id: "W06-14", w: "W06", c: "naiwne-zalozenie", type: "open",
    q: "Dlaczego klasyfikator Bayesa nazywa się „naiwny”?",
    answer: "Bo zakłada warunkową niezależność cech, dzięki czemu P(d|c) liczy się jako iloczyn P(f_i|c).",
    src: "W06, slajdy 141–142", note: "W06-klasyfikacja-sentyment" },

  { id: "W06-15", w: "W06", c: "kumulacja", type: "single",
    q: "Jaki problem rozwiązuje zastąpienie iloczynu prawdopodobieństw sumą ich logarytmów?",
    options: ["Kumulację błędów numerycznych", "Zerowe prawdopodobieństwo nowych słów", "Zależność między cechami", "Brak etykiet w zbiorze uczącym"],
    correct: [0], explain: "Slajdy 143–144: mnożenie wielu wartości z [0,1] kumuluje błędy numeryczne. Zera usuwa Laplace.", src: "W06, slajdy 143–144", note: "W06-klasyfikacja-sentyment" },

  { id: "W06-16", w: "W06", c: "kumulacja", type: "open",
    q: "Dlaczego w naiwnym klasyfikatorze Bayesa stosuje się logarytmy?",
    answer: "Bo wielokrotne mnożenie prawdopodobieństw mniejszych od 1 kumuluje błędy numeryczne, więc dodaje się ich logarytmy.",
    src: "W06, slajdy 143–144", note: "W06-klasyfikacja-sentyment" },

  { id: "W06-17", w: "W06", c: "mle", type: "calc",
    q: "Metodą MLE P(c) ≈ N_c / |D|. W zbiorze jest 120 dokumentów, z czego 30 należy do klasy „spam”. Oblicz P(spam).",
    answer: 0.25, tolerance: 0.001,
    explain: "N_c / |D| = 30 / 120 = 0,25.", src: "W06, slajd 145", note: "W06-klasyfikacja-sentyment" },

  { id: "W06-18", w: "W06", c: "mle", type: "single",
    q: "Jak nazywa się metoda, którą według slajdu bardzo często szacuje się P(c) jako N_c / |D|?",
    options: ["Wygładzanie Laplace’a", "Metoda MLE", "Wnioskowanie a posteriori", "Bag of Words"],
    correct: [1], explain: "Slajd 145: MLE (Maximum Likelihood Estimation), metoda największej wiarygodności, P(c) ≈ N_c / |D|.", src: "W06, slajd 145", note: "W06-klasyfikacja-sentyment" },

  { id: "W06-19", w: "W06", c: "laplace", type: "single",
    q: "Czemu zapobiega wygładzanie Laplace’a?",
    options: ["Kumulacji błędów numerycznych przy mnożeniu", "Zerowemu prawdopodobieństwu elementów spoza zbioru uczącego", "Zależności między kolejnymi cechami dokumentu", "Przewadze najliczniejszej klasy w zbiorze"],
    correct: [1], explain: "Slajd 146: Laplace zapobiega zerowemu prawdopodobieństwu elementów, które nie wystąpiły w zbiorze uczącym.", src: "W06, slajd 146", note: "W06-klasyfikacja-sentyment" },

  { id: "W06-20", w: "W06", c: "laplace", type: "calc",
    q: "Wzór Laplace’a: P(w_i|c) = (N_i,c + 1) / (Σ_j N_j,c + |V|). Słowo w_i nie wystąpiło w klasie c, klasa c ma łącznie 8 elementów, |V| = 12. Oblicz P(w_i|c).",
    answer: 0.05, tolerance: 0.001,
    explain: "(0 + 1) / (8 + 12) = 1 / 20 = 0,05. Bez wygładzania wyszłoby 0.", src: "W06, slajd 146", note: "W06-klasyfikacja-sentyment" },

  { id: "W06-21", w: "W06", c: "sentyment-def", type: "open",
    q: "Czym jest analiza sentymentu?",
    answer: "To zadanie klasyfikacji dokumentu: analiza treści w celu wyodrębnienia tonu emocjonalnego, np. czy recenzja jest pozytywna.",
    src: "W06, slajd 148", note: "W06-klasyfikacja-sentyment" },

  { id: "W06-22", w: "W06", c: "skale", type: "multi",
    q: "Które skale analizy sentymentu wymienia slajd?",
    options: ["Binarna (pozytywny/negatywny)", "Ciągła", "Wykrywanie emocji (złość, smutek)", "Tematyczna (typ zgłoszenia)"],
    correct: [0, 1, 2], explain: "Skale: binarna, wielopozycyjna, ciągła, wykrywanie emocji. Typ zgłoszenia to etykietowanie tematyczne.", src: "W06, slajd 149", note: "W06-klasyfikacja-sentyment" },

  { id: "W06-23", w: "W06", c: "metody-sentymentu", type: "single",
    q: "Do której grupy metod analizy sentymentu slajd zalicza model BERT?",
    options: ["Metody oparte o reguły", "Metody oparte o typowy ML", "Metody oparte o transformery", "Metody oparte o MLE"],
    correct: [2], explain: "Slajd 150: reguły, typowy ML (np. naiwny Bayes), transformery (np. BERT).", src: "W06, slajd 150", note: "W06-klasyfikacja-sentyment" },

  { id: "W06-24", w: "W06", c: "textblob", type: "single",
    q: "Na czym według slajdu opiera się analiza sentymentu w bibliotece TextBlob?",
    options: ["Na modelu BERT", "Na naiwnym klasyfikatorze Bayesa", "Na zestawie reguł", "Na embeddingach słów"],
    correct: [2], explain: "Slajd 151: TextBlob zawiera analizę sentymentu z wykorzystaniem zestawu reguł.", src: "W06, slajd 151", note: "W06-klasyfikacja-sentyment" },

  { id: "W06-25", w: "W06", c: "textblob", type: "single",
    q: "Jak według slajdu TextBlob integruje się ze spaCy?",
    options: ["Przez bibliotekę spacytextblob", "Przez model en_core_web_sm", "Przez atrybut sentiment_assessments", "Przez potok modelu BERT"],
    correct: [0], explain: "Slajd 151: integracja przez spacytextblob, dodawaną do potoku nlp.add_pipe('spacytextblob').", src: "W06, slajd 151", note: "W06-klasyfikacja-sentyment" },
]});
