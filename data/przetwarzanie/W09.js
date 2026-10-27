(window.QUIZ_DATA ||= []).push({ subject: "przetwarzanie", questions: [
  // ===== W09 — Duże modele językowe (LLM), projektowanie systemów dialogowych =====
  { id: "W09-01", w: "W09", c: "bert-gpt", type: "single",
    q: "Model zawierający tylko bloki enkodera, którego priorytetem jest rozumienie języka, to:",
    options: ["GPT", "BERT", "Model instrukcyjny", "MoE"],
    correct: [1], explain: "BERT (Bidirectional Encoder Representations from Transformers) ma tylko bloki enkodera; GPT ma tylko bloki dekodera.", src: "W09, slajd 225", note: "W09-llm-dialog" },

  { id: "W09-02", w: "W09", c: "bert-gpt", type: "single",
    q: "Które zdanie o modelu GPT jest zgodne ze slajdem?",
    options: ["Zawiera tylko bloki enkodera", "Nie oczekuje promptu, lecz sekwencji", "Zawiera tylko bloki dekodera", "Jego priorytetem jest rozumienie języka"],
    correct: [2], explain: "GPT (Generative Pretrained Transformer) ma tylko bloki dekodera i priorytetem jest generowanie tokenów.", src: "W09, slajd 226", note: "W09-llm-dialog" },

  { id: "W09-03", w: "W09", c: "bert-gpt-open", type: "open",
    q: "Czym różni się BERT od GPT pod względem budowy?",
    answer: "BERT zawiera tylko bloki enkodera i służy rozumieniu języka, a GPT zawiera tylko bloki dekodera i służy generowaniu tokenów.",
    src: "W09, slajdy 225–226", note: "W09-llm-dialog" },

  { id: "W09-39", w: "W09", c: "bert-gpt-open", type: "open",
    q: "Do jakich zadań są dostosowane modele typu BERT?",
    answer: "Do zadań takich jak NER czy analiza sentymentu; nie oczekują promptu, lecz sekwencji.",
    src: "W09, slajd 225", note: "W09-llm-dialog" },

  { id: "W09-04", w: "W09", c: "parametry", type: "single",
    q: "Od czego według slajdu zależy liczba parametrów w modelu transformer?",
    options: ["Od rozmiaru słownika i liczby ekspertów", "Od wymiarowości embeddingów i liczby bloków dekodera", "Od długości kontekstu i formatu wag", "Od liczby tokenów w zbiorze uczącym"],
    correct: [1], explain: "Slajd 227: liczba parametrów zależy od wymiarowości embeddingów i liczby bloków dekodera.", src: "W09, slajd 227", note: "W09-llm-dialog" },

  { id: "W09-05", w: "W09", c: "kontekst-llm", type: "single",
    q: "Co według slajdu jest najważniejszą cechą LLM?",
    options: ["Przetwarzanie znacznie dłuższych sekwencji niż poprzednicy", "Budowanie reprezentacji numerycznej dla tokenów", "Brak potrzeby dużych mocy obliczeniowych", "Wbudowana klasyfikacja intencji użytkownika"],
    correct: [0], explain: "Najważniejsza cecha LLM to rozmiar kontekstu: GPT-3 miał 2048 tokenów, dziś milion tokenów nie jest niczym nadzwyczajnym.", src: "W09, slajd 230", note: "W09-llm-dialog" },

  { id: "W09-28", w: "W09", c: "kontekst-llm", type: "single",
    q: "Ile tokenów kontekstu miał GPT-3 według slajdu?",
    options: ["1024", "4096", "2048", "1 000 000"],
    correct: [2], explain: "Slajd 230: GPT-3 miał 2048 tokenów kontekstu, dziś milion tokenów nie jest niczym nadzwyczajnym.", src: "W09, slajd 230", note: "W09-llm-dialog" },

  { id: "W09-06", w: "W09", c: "skala", type: "single",
    q: "Która para „model — liczba parametrów (rok)” jest zgodna ze slajdem?",
    options: ["GPT-1 — 175B (2018)", "GPT-2 — 117M (2020)", "GPT-3 — 175B (2020)", "GPT-3 — 1.5B (2019)"],
    correct: [2], explain: "GPT-1 117M (2018), GPT-2 124M–1.5B (2019), GPT-3 175B (2020).", src: "W09, slajd 229", note: "W09-llm-dialog" },

  { id: "W09-07", w: "W09", c: "vram", type: "calc",
    q: "Wg slajdu 1 parametr zajmuje 16 bajtów. Ile GB pamięci VRAM potrzebuje model Llama 3.1 8B (8 miliardów parametrów)?",
    answer: 128, tolerance: 1,
    explain: "8 × 10⁹ × 16 B = 128 GB; analogicznie slajd liczy 70B × 16 B = 1120 GB.", src: "W09, slajdy 228, 231", note: "W09-llm-dialog" },

  { id: "W09-26", w: "W09", c: "vram", type: "calc",
    q: "Wg slajdu 1 parametr zajmuje 16 bajtów. Ile GB pamięci VRAM potrzebuje model Gemma 2 9B (9 miliardów parametrów)?",
    answer: 144, tolerance: 1,
    explain: "9 × 10⁹ × 16 B = 144 GB; „B” w nazwie oznacza miliardy parametrów.", src: "W09, slajdy 228, 231", note: "W09-llm-dialog" },

  { id: "W09-08", w: "W09", c: "kwantyzacja", type: "single",
    q: "Na czym polega kwantyzacja modelu?",
    options: ["Na zmniejszeniu liczby bloków dekodera", "Na zmniejszeniu dokładności reprezentacji wag", "Na dzieleniu zadania między ekspertów", "Na treningu tylko prostej warstwy FFN"],
    correct: [1], explain: "Kwantyzacja zmniejsza dokładność reprezentacji wag, np. z FP16 na FP8 albo nawet INT4.", src: "W09, slajd 232", note: "W09-llm-dialog" },

  { id: "W09-09", w: "W09", c: "kwantyzacja", type: "multi",
    q: "Jakie skutki kwantyzacji podaje slajd?",
    options: ["Zmniejszenie jakości odpowiedzi modelu", "Zwiększenie liczby parametrów modelu", "Drobne pomyłki w tokenach wyjściowych", "Wydłużenie okna kontekstowego modelu"],
    correct: [0, 2], explain: "Kwantyzacja obniża jakość odpowiedzi (zwłaszcza w trudnych zadaniach) i może powodować drobne pomyłki w tokenach.", src: "W09, slajd 232", note: "W09-llm-dialog" },

  { id: "W09-10", w: "W09", c: "ptq-qat", type: "single",
    q: "Model jest trenowany z symulacją kwantyzacji, aby był bardziej odporny na utratę precyzji. Jak nazywa się to podejście?",
    options: ["PTQ", "QAT", "LoRA", "RLHF"],
    correct: [1], explain: "QAT (Quantization-Aware Training) symuluje kwantyzację w treningu; PTQ kwantyzuje model już po treningu.", src: "W09, slajd 233", note: "W09-llm-dialog" },

  { id: "W09-11", w: "W09", c: "ptq-qat", type: "single",
    q: "Czym jest PTQ (Post-Training Quantization)?",
    options: ["Treningiem z symulacją kwantyzacji", "Kwantyzacją modelu już po jego wytrenowaniu", "Dostrajaniem modelu za pomocą ocen ludzi", "Kwantyzacją wyłącznie w formacie NVFP4"],
    correct: [1], explain: "W PTQ model kwantyzuje się bezpośrednio po wytrenowaniu; QAT symuluje kwantyzację w treningu.", src: "W09, slajd 233", note: "W09-llm-dialog" },

  { id: "W09-12", w: "W09", c: "moe", type: "single",
    q: "Wiele wyspecjalizowanych podmodeli współdzieli zadanie, a mechanizm routingu dobiera część z nich dla każdego tokenu. Jak nazywa się to podejście?",
    options: ["Destylacja", "Kwantyzacja", "MoE", "LoRA"],
    correct: [2], explain: "MoE: router dynamicznie dobiera ekspertów dla każdego tokenu.", src: "W09, slajd 234", note: "W09-llm-dialog" },

  { id: "W09-27", w: "W09", c: "moe", type: "single",
    q: "Co daje podejście MoE według slajdu?",
    options: ["Zmniejszenie dokładności reprezentacji wag modelu", "Trening wyłącznie jednej prostej warstwy FFN", "Więcej parametrów przy mniejszym koszcie obliczeń", "Dłuższe okno kontekstowe bez zmian w modelu"],
    correct: [2], explain: "MoE zwiększa ogólną liczbę parametrów, ale zmniejsza koszt obliczeniowy, bo dla tokenu używa się tylko części ekspertów.", src: "W09, slajd 234", note: "W09-llm-dialog" },

  { id: "W09-13", w: "W09", c: "zbiory", type: "multi",
    q: "Na jakich danych według slajdu uczone są systemy LLM?",
    options: ["Repozytoria kodu", "Artykuły naukowe", "Dane syntetyczne z innych LLM", "Wyłącznie ręcznie oznaczone pary"],
    correct: [0, 1, 2], explain: "Książki, artykuły naukowe, repozytoria kodu, strony WWW, social media i dane syntetyczne (destylacja).", src: "W09, slajd 235", note: "W09-llm-dialog" },

  { id: "W09-31", w: "W09", c: "zbiory", type: "single",
    q: "Dane syntetyczne generowane przez inne LLM-y służą do uczenia. Jak slajd nazywa to podejście?",
    options: ["Kwantyzacja", "Pre-trening", "Destylacja", "Fine-tuning"],
    correct: [2], explain: "Dane syntetyczne generowane przez inne LLM-y to destylacja.", src: "W09, slajd 235", note: "W09-llm-dialog" },

  { id: "W09-14", w: "W09", c: "bazowy", type: "single",
    q: "Co jest wynikiem fazy pre-treningu?",
    options: ["Model instrukcyjny gotowy do rozmowy", "Model bazowy generujący tylko następny token", "Algorytm nagradzający oparty na ocenach", "Model dostrojony do kodu SQL"],
    correct: [1], explain: "Pre-trening daje model bazowy (foundation model): czysty model predykcyjny generujący następny token.", src: "W09, slajd 236", note: "W09-llm-dialog" },

  { id: "W09-15", w: "W09", c: "bazowy", type: "open",
    q: "Czym jest model bazowy (foundation model)?",
    answer: "To wynik pre-treningu: czysty model predykcyjny, który pozwala wyłącznie na generowanie następnego tokenu po zadanym zapytaniu.",
    src: "W09, slajd 236", note: "W09-llm-dialog" },

  { id: "W09-16", w: "W09", c: "instruction", type: "single",
    q: "Model jest uczony na danych o strukturze „instrukcja → dobra odpowiedź”, aby reagował na polecenia. Która to faza?",
    options: ["Pre-trening na bilionach tokenów", "Instruction tuning", "Kwantyzacja PTQ", "Destylacja danych z LLM"],
    correct: [1], explain: "Instruction tuning daje model instrukcyjny, z którym można „porozmawiać”.", src: "W09, slajd 237", note: "W09-llm-dialog" },

  { id: "W09-29", w: "W09", c: "instruction", type: "single",
    q: "Jaki model powstaje w fazie, w której uczy się go reagować na polecenia użytkownika?",
    options: ["Algorytm nagradzający", "Model bazowy", "Model kwantyzowany", "Model instrukcyjny"],
    correct: [3], explain: "Wynikiem tej fazy jest model instrukcyjny, z którym można „porozmawiać”; model bazowy powstaje w pre-treningu.", src: "W09, slajd 237", note: "W09-llm-dialog" },

  { id: "W09-17", w: "W09", c: "finetuning", type: "single",
    q: "Szpital dotrenowuje gotowy LLM na własnych dokumentach medycznych. Jak slajd nazywa ten proces?",
    options: ["Pre-trening", "Fine-tuning", "Instruction tuning", "Kwantyzacja"],
    correct: [1], explain: "Fine-tuning to dalszy trening na zbiorze ze specjalistycznej branży (medycyna, prawo), do celu (SQL) lub języka.", src: "W09, slajd 238", note: "W09-llm-dialog" },

  { id: "W09-30", w: "W09", c: "finetuning", type: "single",
    q: "Które zastosowanie dostrajania NIE jest wymienione na slajdzie?",
    options: ["Wydłużenie okna kontekstowego", "Branża specjalistyczna, np. medycyna", "Tworzenie kodu SQL", "Konkretny język, np. polski"],
    correct: [0], explain: "Slajd wymienia specjalistyczną branżę, cel (np. kod SQL) i konkretny język; okna kontekstowego nie dotyczy.", src: "W09, slajd 238", note: "W09-llm-dialog" },

  { id: "W09-18", w: "W09", c: "rlhf", type: "single",
    q: "Technika dostrajania modelu za pomocą ocen przez człowieka, z której powstaje algorytm nagradzający, to:",
    options: ["QAT", "LoRA", "RLHF", "MoE"],
    correct: [2], explain: "RLHF (Reinforcement Learning from Human Feedback): ludzie oceniają odpowiedzi, powstaje algorytm nagradzający.", src: "W09, slajd 239", note: "W09-llm-dialog" },

  { id: "W09-19", w: "W09", c: "rlhf", type: "open",
    q: "Jaki niepożądany efekt może powodować RLHF?",
    answer: "Sykofancję, czyli bardzo entuzjastyczne zgadzanie się modelu z użytkownikiem, bo ludzie to lubią.",
    src: "W09, slajd 239", note: "W09-llm-dialog" },

  { id: "W09-20", w: "W09", c: "llama-ollama", type: "single",
    q: "Które zdanie o llama.cpp i Ollama jest zgodne ze slajdem?",
    options: ["llama.cpp opiera się wewnętrznie o Ollama", "Ollama opiera się wewnętrznie o llama.cpp", "llama.cpp działa tylko na kartach GPU", "Ollama to biblioteka transformers"],
    correct: [1], explain: "Ollama to aplikacja oparta o llama.cpp; llama.cpp używa formatu GGUF i działa na CPU, GPU i NPU.", src: "W09, slajd 242", note: "W09-llm-dialog" },

  { id: "W09-32", w: "W09", c: "llama-ollama", type: "single",
    q: "Na jakim formacie modeli opiera się llama.cpp?",
    options: ["NVFP4", "FP16", "GGUF", "INT4"],
    correct: [2], explain: "llama.cpp opiera się o modele w formacie GGUF.", src: "W09, slajd 242", note: "W09-llm-dialog" },

  { id: "W09-33", w: "W09", c: "llama-ollama", type: "multi",
    q: "Co dostarcza sama biblioteka llama.cpp według slajdu?",
    options: ["Narzędzia konsolowe", "Serwer HTTP", "Bindingi do wielu języków", "System pobierania modeli (model hub)"],
    correct: [0, 1, 2], explain: "llama.cpp ma narzędzia konsolowe, serwer HTTP i bindingi; model hub dostarcza dopiero Ollama.", src: "W09, slajd 242", note: "W09-llm-dialog" },

  { id: "W09-21", w: "W09", c: "api", type: "single",
    q: "Dlaczego według slajdu można stosować jedną bibliotekę do wielu dostawców LLM?",
    options: ["Bo wszystkie modele są w formacie GGUF", "Bo wiele systemów dostosowało się do API OpenAI", "Bo biblioteka transformers pobiera modele", "Bo każdy model zawiera tylko bloki dekodera"],
    correct: [1], explain: "Większość LLM to API HTTP; wiele systemów przyjęło API OpenAI.", src: "W09, slajd 245", note: "W09-llm-dialog" },

  { id: "W09-34", w: "W09", c: "api", type: "single",
    q: "W jakiej formie udostępniana jest większość modeli LLM według slajdu?",
    options: ["Prostego API HTTP na serwerach dostawcy", "Biblioteki Pythona działającej tylko lokalnie", "Plików GGUF pobieranych ręcznie z Internetu", "Aplikacji graficznej z wbudowanym model hub"],
    correct: [0], explain: "Większość LLM to prosty API HTTP na serwerach usługodawcy.", src: "W09, slajd 245", note: "W09-llm-dialog" },

  { id: "W09-22", w: "W09", c: "dialog", type: "single",
    q: "Chatbot zapamiętuje imię i preferencje użytkownika i korzysta z nich w kolejnej rozmowie. Jaki to rodzaj pamięci?",
    options: ["Pamięć krótkoterminowa", "Pamięć długoterminowa", "Okno kontekstowe", "Prompt systemowy"],
    correct: [1], explain: "Pamięć długoterminowa przechowuje fakty o użytkowniku między rozmowami; krótkoterminowa to historia bieżącej rozmowy.", src: "W09, slajd 248", note: "W09-llm-dialog" },

  { id: "W09-35", w: "W09", c: "dialog", type: "single",
    q: "Historia aktualnej rozmowy w systemie dialogowym to:",
    options: ["Pamięć długoterminowa", "Prompt systemowy", "Pamięć krótkoterminowa", "Klasyfikacja intencji"],
    correct: [2], explain: "Historia aktualnej rozmowy to pamięć krótkoterminowa; fakty o użytkowniku między rozmowami to pamięć długoterminowa.", src: "W09, slajd 248", note: "W09-llm-dialog" },

  { id: "W09-23", w: "W09", c: "intencje", type: "single",
    q: "Co według slajdu jest najbardziej istotne przy projektowaniu systemów dialogowych z LLM?",
    options: ["Kwantyzacja wag do formatu INT4", "Klasyfikacja intencji (intent recognition)", "Trening z symulacją kwantyzacji", "Zwiększenie liczby bloków dekodera"],
    correct: [1], explain: "Najbardziej istotna jest klasyfikacja intencji, którą może wykonywać sam model LLM.", src: "W09, slajd 247", note: "W09-llm-dialog" },

  { id: "W09-36", w: "W09", c: "intencje", type: "single",
    q: "Użytkownik pisze „chcę zmienić hasło”. Który element systemu dialogowego rozpoznaje, czego on chce?",
    options: ["Pamięć długoterminowa", "Podsumowanie rozmowy", "Pobieranie faktów z bazy wiedzy", "Klasyfikacja intencji"],
    correct: [3], explain: "Rozpoznawaniem celu wypowiedzi jest klasyfikacja intencji (intent recognition), którą może wykonywać sam LLM.", src: "W09, slajd 247", note: "W09-llm-dialog" },

  { id: "W09-24", w: "W09", c: "kontekst-dialog", type: "multi",
    q: "Jak według slajdu skraca się kontekst w systemie dialogowym?",
    options: ["Stosowanie okien", "Rozdzielanie rozmów", "Podsumowywanie rozmowy", "Dłuższy prompt systemowy"],
    correct: [0, 1, 2], explain: "Zbyt długi prompt systemowy wyczerpuje kontekst; stosuje się okna, rozdzielanie rozmów i podsumowywanie.", src: "W09, slajd 249", note: "W09-llm-dialog" },

  { id: "W09-37", w: "W09", c: "kontekst-dialog", type: "multi",
    q: "Jakie skutki według slajdu ma zbyt długi prompt systemowy?",
    options: ["Wyższe koszty", "Zmniejszenie liczby parametrów", "Wyczerpanie kontekstu", "Dłuższy czas analizy"],
    correct: [0, 2, 3], explain: "Zbyt długi prompt może szybko wyczerpać kontekst, wydłużyć czas analizy i zwiększyć koszty.", src: "W09, slajd 249", note: "W09-llm-dialog" },

  { id: "W09-25", w: "W09", c: "wiedza-rag", type: "open",
    q: "Co zrobić, gdy chatbot ma odpowiadać na pytania dotyczące konkretnej wiedzy?",
    answer: "Nie polegać na wiedzy modelu, tylko dostarczać fakty z zewnętrznej bazy wiedzy, np. przez RAG (Retrieval-Augmented Generation).",
    src: "W09, slajd 250", note: "W09-llm-dialog" },

  { id: "W09-38", w: "W09", c: "wiedza-rag", type: "single",
    q: "Zewnętrzny system bazy wiedzy dostarcza znane fakty modelowi językowemu. Jakie podejście to opisuje?",
    options: ["LoRA", "MoE", "QAT", "RAG"],
    correct: [3], explain: "RAG (Retrieval-Augmented Generation) dostarcza modelowi fakty z zewnętrznej bazy wiedzy.", src: "W09, slajd 250", note: "W09-llm-dialog" },
]});
