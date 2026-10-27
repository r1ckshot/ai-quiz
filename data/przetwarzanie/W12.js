(window.QUIZ_DATA ||= []).push({ subject: "przetwarzanie", questions: [
  // ===== W12 — Synteza mowy i STT =====
  { id: "W12-01", w: "W12", c: "stt-tts", type: "single",
    q: "Która nazwa oznacza ten sam problem co STT (Speech-To-Text)?",
    options: ["TTS", "ASR", "VAD", "MFCC"],
    correct: [1], explain: "STT i ASR (Automatic Speech Recognition) to rozpoznawanie mowy i transkrypcja na tekst; TTS to problem lustrzany.", src: "W12, slajd 299", note: "W12-mowa" },

  { id: "W12-02", w: "W12", c: "stt-tts", type: "open",
    q: "Czym różni się STT od TTS?",
    answer: "STT zamienia mowę na tekst, a TTS syntetyzuje mowę z tekstu; to dwa lustrzane problemy.",
    src: "W12, slajd 299", note: "W12-mowa" },

  { id: "W12-03", w: "W12", c: "repr-dzwieku", type: "single",
    q: "W jakiej kolejności według slajdu przetwarza się dźwięk na wektory cech?",
    options: ["FFT → podział na ramki → wyliczenie cech", "Podział na ramki → FFT → wyliczenie cech", "Wyliczenie cech → FFT → podział na ramki", "Podział na ramki → wyliczenie cech → FFT"],
    correct: [1], explain: "Dźwięk dzieli się na ramki, potem wykonuje się FFT, a potem wylicza cechy.", src: "W12, slajd 300", note: "W12-mowa" },

  { id: "W12-26", w: "W12", c: "repr-dzwieku", type: "single",
    q: "Który krok następuje bezpośrednio po podziale dźwięku na ramki?",
    options: ["Wyliczenie cech", "Transformata Fouriera (FFT)", "Usunięcie ciszy (VAD)", "Synteza fali przez vocoder"],
    correct: [1], explain: "Po podziale na ramki wykonuje się FFT, dopiero potem wylicza się cechy.", src: "W12, slajd 300", note: "W12-mowa" },

  { id: "W12-27", w: "W12", c: "repr-dzwieku", type: "open",
    q: "Wymień kolejne etapy przetwarzania dźwięku na wektory cech.",
    answer: "Podział dźwięku na ramki, transformata Fouriera (FFT), wyliczenie cech.",
    src: "W12, slajd 300", note: "W12-mowa" },

  { id: "W12-04", w: "W12", c: "mel", type: "single",
    q: "Dlaczego stosuje się przekształcenie częstotliwości na skalę mel?",
    options: ["Bo FFT nie działa na surowym sygnale", "Bo ludzie nie słyszą jednakowo w każdej częstotliwości", "Bo spektrogram wymaga wektora 39-wymiarowego", "Bo usuwa ciszę i dźwięki tła z nagrania"],
    correct: [1], explain: "Słuch człowieka jest nierówny w częstotliwościach; skala mel jest mniej czuła na wyższe częstotliwości.", src: "W12, slajd 301", note: "W12-mowa" },

  { id: "W12-05", w: "W12", c: "mel", type: "single",
    q: "Które zdanie o skali mel jest zgodne ze slajdem?",
    options: ["Jest mniej czuła na niższe częstotliwości", "Jest jednakowo czuła w całym paśmie", "Jest mniej czuła na wyższe częstotliwości", "Jest bardziej czuła na wyższe częstotliwości"],
    correct: [2], explain: "Slajd 301: skala mel jest mniej czuła na wyższe częstotliwości.", src: "W12, slajd 301", note: "W12-mowa" },

  { id: "W12-06", w: "W12", c: "mel-calc", type: "calc",
    q: "Oblicz wartość w skali mel dla f = 700 Hz, korzystając ze wzoru mel(f) = 1127 ln(1 + f/700). Podaj wynik z dokładnością do 1.",
    answer: 781.2, tolerance: 1,
    explain: "mel(700) = 1127 ln(1 + 1) = 1127 × 0,6931 ≈ 781,2.", src: "W12, slajd 301", note: "W12-mowa" },

  { id: "W12-28", w: "W12", c: "mel-calc", type: "calc",
    q: "Oblicz wartość w skali mel dla f = 1400 Hz, korzystając ze wzoru mel(f) = 1127 ln(1 + f/700). Podaj wynik z dokładnością do 1.",
    answer: 1238.1, tolerance: 1,
    explain: "mel(1400) = 1127 ln(1 + 2) = 1127 × 1,0986 ≈ 1238,1.", src: "W12, slajd 301", note: "W12-mowa" },

  { id: "W12-07", w: "W12", c: "mfcc", type: "single",
    q: "Typowa reprezentacja fali dźwiękowej, uwzględniająca istotne fragmenty dla wyliczenia jednostek fonetycznych, to:",
    options: ["FFT", "MFCC", "VAD", "GMM"],
    correct: [1], explain: "MFCC (mel frequency cepstral coefficients) to typowa reprezentacja fali dźwiękowej.", src: "W12, slajd 302", note: "W12-mowa" },

  { id: "W12-08", w: "W12", c: "mfcc", type: "single",
    q: "Ile wymiarów ma wektor MFCC według slajdu?",
    options: ["13", "26", "39", "700"],
    correct: [2], explain: "Slajd 302: MFCC to 39-wymiarowy wektor.", src: "W12, slajd 302", note: "W12-mowa" },

  { id: "W12-09", w: "W12", c: "model-akustyczny-stt", type: "multi",
    q: "Które modele historycznie stosowano jako model akustyczny do nauki zależności między cechami audio a fonemami?",
    options: ["Ukryte modele Markowa", "Modele Gaussowskie", "Vocoder HiFi-GAN", "Transformer Whisper"],
    correct: [0, 1], explain: "Historycznie: HMM i GMM. Whisper to współczesny system STT, HiFi-GAN to vocoder.", src: "W12, slajd 303", note: "W12-mowa" },

  { id: "W12-29", w: "W12", c: "model-akustyczny-stt", type: "single",
    q: "Czego uczy się model akustyczny w systemie STT?",
    options: ["Zależności między cechami audio a fonemami", "Zależności między fonemami a interpunkcją", "Wysokości głosu i czasu jego trwania", "Zależności między mówcami a słowami kluczowymi"],
    correct: [0], explain: "W STT model akustyczny uczy się zależności między cechami audio a fonemami.", src: "W12, slajd 303", note: "W12-mowa" },

  { id: "W12-10", w: "W12", c: "wav2vec", type: "single",
    q: "Który opis systemu Wav2vec jest zgodny ze slajdem?",
    options: ["Sieci konwolucyjne i transformatory, Meta, 2020", "Ukryte modele Markowa i GMM, Meta, 2020", "Transformer enkoder-dekoder, OpenAI, 2023", "Sieci konwolucyjne i transformatory, Google, 2016"],
    correct: [0], explain: "Wav2vec to system oparty na CNN oraz transformatorach, opracowany przez Meta w 2020.", src: "W12, slajd 303", note: "W12-mowa" },

  { id: "W12-30", w: "W12", c: "wav2vec", type: "open",
    q: "Czym jest Wav2vec i kto go opracował?",
    answer: "To oryginalny system STT oparty na sieciach konwolucyjnych i transformatorach, opracowany przez firmę Meta w 2020.",
    src: "W12, slajd 303", note: "W12-mowa" },

  { id: "W12-11", w: "W12", c: "common-voice", type: "single",
    q: "Co jest potrzebne do treningu systemu STT i jaki korpus podaje slajd?",
    options: ["Same nagrania bez opisu; korpus Common Voice", "Pary nagranie i transkrypcja; korpus Common Voice", "Same transkrypcje tekstowe; korpus Common Crawl", "Pary tekst i spektrogram; korpus Common Crawl"],
    correct: [1], explain: "Trening STT wymaga par nagranie oraz transkrypcja; popularny korpus to Common Voice (Mozilla).", src: "W12, slajd 304", note: "W12-mowa" },

  { id: "W12-31", w: "W12", c: "common-voice", type: "single",
    q: "Czym jest Common Voice?",
    options: ["Korpus nagrań z transkrypcjami w ponad 290 językach", "System STT oparty na CNN i transformatorach firmy Meta", "Vocoder generujący dźwięk w oparciu o poprzednie próbki", "System TTS klonujący głos z próbki kilku sekund"],
    correct: [0], explain: "Common Voice to korpus do treningu STT: pary nagranie i transkrypcja, ponad 290 języków.", src: "W12, slajd 304", note: "W12-mowa" },

  { id: "W12-32", w: "W12", c: "common-voice", type: "single",
    q: "Ile godzin nagrań w języku polskim zawiera korpus Common Voice według slajdu?",
    options: ["190", "290", "3800", "39"],
    correct: [0], explain: "Slajd 304: ponad 3800 godzin po angielsku i 190 godzin po polsku.", src: "W12, slajd 304", note: "W12-mowa" },

  { id: "W12-12", w: "W12", c: "whisper", type: "single",
    q: "Na jakiej architekturze oparty jest Whisper?",
    options: ["Transformer typu enkoder-dekoder", "Ukryty model Markowa z GMM", "Sam dekoder transformera", "Sieć rekurencyjna LSTM"],
    correct: [0], explain: "Whisper to transformer enkoder-dekoder uczony na spektrogramach sygnału.", src: "W12, slajd 305", note: "W12-mowa" },

  { id: "W12-13", w: "W12", c: "whisper", type: "single",
    q: "Co w architekturze Whispera analizuje spektrogram przed wejściem do bloków enkodera transformera?",
    options: ["Vocoder HiFi-GAN", "Warstwa konwolucyjna", "Moduł detekcji ciszy", "Warstwa cross attention"],
    correct: [1], explain: "Na diagramie: 2 × Conv1D + GELU przetwarza Log-Mel Spectrogram przed enkoderem.", src: "W12, slajd 306", note: "W12-mowa" },

  { id: "W12-14", w: "W12", c: "whisper", type: "open",
    q: "Co jest wejściem Whispera i jak jest ono przetwarzane przed enkoderem?",
    answer: "Wejściem jest spektrogram sygnału, który przed blokami enkodera transformera analizuje warstwa konwolucyjna.",
    src: "W12, slajdy 305–306", note: "W12-mowa" },

  { id: "W12-15", w: "W12", c: "problemy-stt", type: "single",
    q: "Jak nazywa się usuwanie ciszy z nagrania w systemach STT?",
    options: ["Speaker diarization", "Wake-word detection", "Voice Activity Detection", "Word Error Rate"],
    correct: [2], explain: "VAD (Voice Activity Detection) to usuwanie ciszy; diarization to rozpoznawanie mówców.", src: "W12, slajd 307", note: "W12-mowa" },

  { id: "W12-16", w: "W12", c: "problemy-stt", type: "single",
    q: "Nagranie rozmowy trzech osób trzeba podzielić według tego, kto mówi. Który problem STT to opisuje?",
    options: ["Voice Activity Detection", "Wykrywanie wake-word", "Usuwanie dźwięków tła", "Diarization"],
    correct: [3], explain: "Rozpoznawanie mówców to diarization.", src: "W12, slajd 307", note: "W12-mowa" },

  { id: "W12-17", w: "W12", c: "problemy-stt", type: "single",
    q: "Z czym według slajdu wiążą się halucynacje modelu STT w trakcie ciszy?",
    options: ["Z uczeniem na danych z nagrań wideo", "Z wykrywaniem słowa kluczowego", "Z przejściem na skalę mel", "Z konkatenacją nagranych klipów"],
    correct: [0], explain: "Slajd 307: uczenie się na danych z nagrań wideo prowadzi do halucynacji w trakcie ciszy.", src: "W12, slajd 307", note: "W12-mowa" },

  { id: "W12-18", w: "W12", c: "wake-word", type: "open",
    q: "Czym jest wake-word w systemach STT?",
    answer: "To wykrywanie słowa kluczowego, np. „siri”, po którym dopiero rozpoczyna się właściwa transkrypcja.",
    src: "W12, slajd 307", note: "W12-mowa" },

  { id: "W12-33", w: "W12", c: "wake-word", type: "single",
    q: "Asystent najpierw nasłuchuje słowa „siri”, a dopiero potem rozpoczyna transkrypcję. Jak nazywa się to wzbogacenie STT?",
    options: ["Wake-word", "Voice Activity Detection", "Diarization", "Word Error Rate"],
    correct: [0], explain: "Wykrywanie słów kluczowych (wake-word) poprzedza właściwy proces transkrypcji.", src: "W12, slajd 307", note: "W12-mowa" },

  { id: "W12-19", w: "W12", c: "synteza", type: "multi",
    q: "Co według slajdu trzeba wywnioskować z tekstu w procesie syntezy mowy?",
    options: ["Fonemy", "Akcent", "Mówców", "Pauzy"],
    correct: [0, 1, 3], explain: "Z tekstu wnioskuje się fonemy, akcent, interpunkcję i pauzy; rozpoznawanie mówców dotyczy STT.", src: "W12, slajd 308", note: "W12-mowa" },

  { id: "W12-34", w: "W12", c: "synteza", type: "single",
    q: "Czego uczy się model akustyczny w syntezie mowy?",
    options: ["Wysokości głosu i czasu jego trwania", "Zależności między cechami audio a fonemami", "Podziału nagrania na mówców w rozmowie", "Usuwania ciszy i dźwięków tła z nagrania"],
    correct: [0], explain: "W syntezie model akustyczny uczy się wysokości głosu, czasu trwania i innych elementów wymowy.", src: "W12, slajd 308", note: "W12-mowa" },

  { id: "W12-20", w: "W12", c: "vocoder", type: "single",
    q: "Jaką rolę pełni vocoder w syntezie mowy?",
    options: ["Zamienia tekst na fonemy i pauzy", "Wykrywa słowo kluczowe w nagraniu", "Ze spektrogramu syntetyzuje falę dźwiękową", "Ze spektrogramu wylicza wektor MFCC"],
    correct: [2], explain: "Model akustyczny generuje spektrogram, a vocoder syntetyzuje z niego rzeczywistą falę dźwiękową.", src: "W12, slajd 309", note: "W12-mowa" },

  { id: "W12-21", w: "W12", c: "vocoder", type: "single",
    q: "Które systemy według slajdu generują dźwięk w oparciu o poprzednie próbki?",
    options: ["Whisper, Wav2vec", "WaveNet, HiFi-GAN", "Kokoro, Bark", "ChatGPT Realtime, Qwen3-Omni"],
    correct: [1], explain: "WaveNet i HiFi-GAN generują dźwięk z poprzednich próbek, co daje intonację, akcenty, a nawet śmiech.", src: "W12, slajd 309", note: "W12-mowa" },

  { id: "W12-22", w: "W12", c: "tts-przyklady", type: "single",
    q: "Który z wymienionych NIE jest przykładem systemu TTS ze slajdu?",
    options: ["XTTSv2", "Kokoro", "Whisper", "ElevenLabs"],
    correct: [2], explain: "Przykłady TTS: XTTSv2, Kokoro, Bark, ElevenLabs. Whisper to system STT.", src: "W12, slajdy 305, 310", note: "W12-mowa" },

  { id: "W12-35", w: "W12", c: "tts-przyklady", type: "open",
    q: "Podaj przykłady systemów TTS wymienionych na slajdzie.",
    answer: "XTTSv2, Kokoro, Bark, ElevenLabs.",
    src: "W12, slajd 310", note: "W12-mowa" },

  { id: "W12-23", w: "W12", c: "end-to-end", type: "single",
    q: "Co odróżnia system end-to-end od potoku STT-LLM-TTS?",
    options: ["Warstwą pośrednią nie jest tekst", "Zawsze składa się z jednego modelu", "Nie korzysta z dużych modeli językowych", "Używa tekstu jako warstwy pośredniej"],
    correct: [0], explain: "W end-to-end audio trafia wprost do przestrzeni ukrytej; to nie musi być jeden model, ale pośrednio nie ma tekstu.", src: "W12, slajd 311", note: "W12-mowa" },

  { id: "W12-24", w: "W12", c: "end-to-end", type: "open",
    q: "Na czym polega podejście end-to-end w systemach mowy?",
    answer: "Zamiast potoku STT-LLM-TTS korzysta się z wielomodalności LLM, a audio jest wprost przekształcane do reprezentacji wektorowej w przestrzeni ukrytej.",
    src: "W12, slajd 311", note: "W12-mowa" },

  { id: "W12-25", w: "W12", c: "klonowanie", type: "multi",
    q: "Które cechy według slajdu zawiera wektor cech głosu w klonowaniu głosu?",
    options: ["Barwa", "Rytm", "Fonemy treści", "Sposób artykulacji"],
    correct: [0, 1, 3], explain: "Wektor głosu: barwa, wysokość, sposób artykulacji, rytm; jest niezależny od wektora fonemów treści.", src: "W12, slajd 312", note: "W12-mowa" },

  { id: "W12-36", w: "W12", c: "klonowanie", type: "single",
    q: "Z jak długiej próbki systemy klonowania głosu uczą się brzmienia głosu i akcentu?",
    options: ["Kilka-kilkanaście sekund", "Kilka-kilkanaście minut", "Kilkaset godzin nagrań", "Pełny korpus Common Voice"],
    correct: [0], explain: "Slajd 312: wystarczy krótka próbka, kilka-kilkanaście sekund.", src: "W12, slajd 312", note: "W12-mowa" },

  { id: "W12-37", w: "W12", c: "klonowanie", type: "open",
    q: "Jak działa klonowanie głosu na podstawie spektrogramu?",
    answer: "Z krótkiej próbki tworzy się wektor cech głosu (barwa, wysokość, artykulacja, rytm), niezależny od wektora fonemów, i generuje audio tym głosem.",
    src: "W12, slajd 312", note: "W12-mowa" },
]});
