(window.QUIZ_DATA ||= []).push({ subject: "wizja", questions: [
  // ===== W01 — Wprowadzenie do wizji komputerowej =====
  { id: "W01-01", w: "W01", c: "inverse-problem", type: "single",
    q: "Jak nazywa się zadanie odtworzenia sceny 3D na podstawie obrazu 2D?",
    options: ["Forward problem", "Rendering sceny 3D", "Problem odwrotny", "Pikselizacja"],
    correct: [2], explain: "Odtworzenie 3D z 2D to problem odwrotny (inverse problem). Generowanie obrazu 2D ze sceny 3D to forward problem.", src: "W01, slajd 11", note: "W01-wprowadzenie" },

  { id: "W01-02", w: "W01", c: "inverse-problem", type: "single",
    q: "Dlaczego odtworzenie sceny 3D z obrazu 2D jest trudne?",
    options: ["Istnieje dokładnie jedno rozwiązanie, ale kosztowne", "Wiele różnych scen 3D może dać ten sam obraz 2D", "Obraz 2D zawiera zawsze pełną informację o głębi", "Matryca kamery nie rejestruje jasności pikseli"],
    correct: [1], explain: "Problem odwrotny jest źle postawiony: nieskończenie wiele scen daje ten sam obraz wejściowy.", src: "W01, slajd 11", note: "W01-wprowadzenie" },

  { id: "W01-03", w: "W01", c: "inverse-problem", type: "single",
    q: "Program generuje obraz na ekranie 2D na podstawie modelu sceny 3D. Ile rozwiązań ma to zadanie według wykładu?",
    options: ["Jedno rozwiązanie", "Nieskończenie wiele", "Dokładnie dwa", "Zależy od oświetlenia"],
    correct: [0], explain: "To forward problem: dane ustawienie sceny daje jeden obraz.", src: "W01, slajd 10", note: "W01-wprowadzenie" },

  { id: "W01-04", w: "W01", c: "cv-vs-ip", type: "single",
    q: "Która dziedzina przekształca obraz 2D w nowy obraz 2D na tym samym poziomie abstrakcji?",
    options: ["Wizja komputerowa", "Grafika komputerowa", "Fotogrametria", "Przetwarzanie obrazów"],
    correct: [3], explain: "Image Processing: obraz → przekształcenie → nowy obraz. Wizja daje semantykę sceny, grafika renderuje model.", src: "W01, slajd 9", note: "W01-wprowadzenie" },

  { id: "W01-05", w: "W01", c: "cv-vs-ip", type: "single",
    q: "Co jest wyjściem wizji komputerowej (Computer Vision) według wykładu?",
    options: ["Model matematyczny lub semantyka sceny 3D", "Nowy obraz 2D po przekształceniu", "Obraz rastrowy 2D po renderingu", "Plik RAW bez interpolacji kolorów"],
    correct: [0], explain: "Wizja: obraz rastrowy 2D → detekcja i ekstrakcja cech → model lub semantyka sceny 3D.", src: "W01, slajd 9", note: "W01-wprowadzenie" },

  { id: "W01-06", w: "W01", c: "paradygmaty", type: "single",
    q: "Który paradygmat wizji komputerowej zapoczątkowała w 2012 r. sieć AlexNet?",
    options: ["Cechy 2D (Pattern Recognition)", "Uczenie głębokie (end-to-end)", "Rekonstrukcja 3D (szkoła Marra)", "Fotogrametria klasyczna"],
    correct: [1], explain: "Paradygmat 3: rewolucja AlexNet w 2012 r., czyli Deep Learning.", src: "W01, slajd 14", note: "W01-wprowadzenie" },

  { id: "W01-07", w: "W01", c: "paradygmaty", type: "single",
    q: "Który nurt ściśle rozdziela etapy Low-level, Mid-level i High-level?",
    options: ["Klasyczna wizja 2D (cechy)", "Uczenie głębokie (end-to-end)", "Rekonstrukcja 3D (Marra)", "Segmentacja barwna w HSV"],
    correct: [2], explain: "Podejście Marra: ścisła separacja etapów, geometria liczona niezależnie od treści sceny.", src: "W01, slajd 13", note: "W01-wprowadzenie" },

  { id: "W01-08", w: "W01", c: "akwizycja", type: "single",
    q: "Jaka jest kolejność etapów akwizycji obrazu cyfrowego?",
    options: ["Optyka → emisja → konwersja → detekcja → zapis", "Emisja → detekcja → optyka → zapis → konwersja", "Detekcja → emisja → optyka → konwersja → zapis", "Emisja → optyka → detekcja → konwersja → zapis"],
    correct: [3], explain: "Źródło światła oświetla scenę, optyka skupia, sensor CMOS/CCD zbiera ładunki, przetwornik A/C kwantuje, procesor zapisuje macierz.", src: "W01, slajd 24", note: "W01-wprowadzenie" },

  { id: "W01-09", w: "W01", c: "obraz-dyskretny", type: "single",
    q: "W wyniku czego powstaje obraz cyfrowy w ujęciu dyskretnym?",
    options: ["Próbkowania przestrzennego i kwantyzacji amplitudy", "Renderingu modelu geometrycznego 3D", "Interpolacji składowych z sąsiednich pikseli", "Normalizacji współrzędnych do sumy 1"],
    correct: [0], explain: "Macierz M×N powstaje przez pikselizację (dyskretne współrzędne) i kwantyzację jasności.", src: "W01, slajd 22", note: "W01-wprowadzenie" },

  { id: "W01-10", w: "W01", c: "bayer", type: "single",
    q: "Czym jest mozaika Bayera?",
    options: ["Formatem zapisu obrazu bez interpolacji", "Układem filtrów R, G, B na matrycy", "Sposobem podpróbkowania chrominancji 4:2:0", "Modelem barw opartym na kole barw"],
    correct: [1], explain: "Elementy matrycy mierzą tylko jasność, więc nakłada się na nie filtry: każdy piksel widzi jedną składową.", src: "W01, slajd 28", note: "W01-wprowadzenie" },

  { id: "W01-11", w: "W01", c: "bayer", type: "single",
    q: "Każdy piksel matrycy z mozaiką Bayera rejestruje tylko jedną składową koloru. Skąd biorą się pozostałe dwie?",
    options: ["Z drugiej matrycy w kamerze", "Z przeliczenia do przestrzeni HSV", "Z interpolacji sąsiednich pikseli", "Z korekcji krzywą gamma 2,2"],
    correct: [2], explain: "Brakujące składowe są interpolowane z sąsiadów, zwykle sprzętowo w kamerze. Format RAW zapisuje dane bez interpolacji.", src: "W01, slajd 29", note: "W01-wprowadzenie" },

  { id: "W01-12", w: "W01", c: "rgb-dl", type: "single",
    q: "Którą przestrzeń barw wykład zaleca jako wejście dla sieci CNN (np. YOLO, ResNet)?",
    options: ["HSV", "YCbCr", "Skala szarości", "RGB"],
    correct: [3], explain: "Sieci są projektowane pod tensory H×W×3 w RGB i same uczą się zależności między kanałami. HSV i YCbCr dają zbędny narzut.", src: "W01, slajd 32", note: "W01-wprowadzenie" },

  { id: "W01-13", w: "W01", c: "rgb-wady", type: "single",
    q: "Dlaczego segmentacja progowa w RGB jest niestabilna przy zacienieniu obiektu?",
    options: ["Jasność jest wymieszana z barwą we wszystkich kanałach", "Wartość H jest niezdefiniowana dla szarości", "Przeliczenie z RGB wymaga tablic LUT", "RGB zapisuje tylko jedną składową na piksel"],
    correct: [0], explain: "Brak separacji luminancji: zmiana oświetlenia zmienia wszystkie trzy składowe R, G, B.", src: "W01, slajd 33", note: "W01-wprowadzenie" },

  { id: "W01-14", w: "W01", c: "hsv-wady", type: "single",
    q: "Która cecha jest wadą przestrzeni HSV?",
    options: ["Brak separacji jasności od barwy", "H nieokreślone, gdy S lub V wynosi 0", "Kanały R, G, B są od siebie zależne", "Brak zgodności z obrazem monochromatycznym"],
    correct: [1], explain: "Dla odcieni szarości H jest niezdefiniowane (losowe lub 0), co daje szum w filtrach opartych na H.", src: "W01, slajd 38", note: "W01-wprowadzenie" },

  { id: "W01-15", w: "W01", c: "hsv-wady", type: "single",
    q: "Co NIE jest wadą przestrzeni HSV według wykładu?",
    options: ["Przeskok na kole barw między 0 a 360°", "Nieliniowe przeliczanie między RGB i HSV", "Silna wrażliwość H i S na zmiany jasności", "Upraszczanie barw niespektralnych, np. magenty"],
    correct: [2], explain: "Odporność na zmiany oświetlenia to zaleta HSV: jasność ma nieznaczny wpływ na H i S.", src: "W01, slajd 37", note: "W01-wprowadzenie" },

  { id: "W01-16", w: "W01", c: "hsv-zastosowanie", type: "single",
    q: "Robot ma śledzić czerwoną piłeczkę przy zmiennym oświetleniu. Którą przestrzeń barw wskazuje wykład?",
    options: ["RGB", "Skala szarości", "CIE xyz", "HSV"],
    correct: [3], explain: "Color Tracking to zastosowanie HSV; RGB jest niewskazane przy zmiennym oświetleniu.", src: "W01, slajd 40", note: "W01-wprowadzenie" },

  { id: "W01-17", w: "W01", c: "grayscale", type: "single",
    q: "Która składowa ma największą wagę we wzorze Gray z normy ITU-R BT.601?",
    options: ["R (0,299)", "G (0,587)", "B (0,114)", "Wszystkie po 0,333"],
    correct: [1], explain: "Gray = 0,299R + 0,587G + 0,114B; wagi odpowiadają czułości oka na długości fal.", src: "W01, slajd 42", note: "W01-wprowadzenie" },

  { id: "W01-18", w: "W01", c: "grayscale", type: "single",
    q: "Jakie zadanie wykład wymienia jako niewskazane dla skali szarości?",
    options: ["Detekcja krawędzi metodą Canny", "Rozpoznawanie tablic w systemach OCR", "Wykrywanie punktów SIFT i ORB", "Rozpoznawanie kolorów sygnalizacji"],
    correct: [3], explain: "Grayscale nie ma chrominancji, więc nie nadaje się do pojazdów autonomicznych (kolory świateł). Krawędzie, OCR i SIFT są wskazane.", src: "W01, slajd 47", note: "W01-wprowadzenie" },

  { id: "W01-19", w: "W01", c: "ycbcr", type: "single",
    q: "Co oznacza składowa Cb w przestrzeni YCbCr?",
    options: ["Różnicę barwy niebieskiej i jasności (B − Y)", "Różnicę barwy czerwonej i jasności (R − Y)", "Kąt barwy dominującej na kole barw", "Jasność psychometryczną w zakresie 0–100"],
    correct: [0], explain: "Cb to chrominancja niebieska (B − Y), Cr to chrominancja czerwona (R − Y).", src: "W01, slajd 48", note: "W01-wprowadzenie" },

  { id: "W01-20", w: "W01", c: "ycbcr", type: "single",
    q: "Dlaczego podpróbkowanie chrominancji w YCbCr nie psuje ostrości obrazu?",
    options: ["Oko ma więcej czopków niż pręcików", "Oko ma dużo więcej pręcików niż czopków", "Cb i Cr zawierają informację o krawędziach", "Kanał Y jest zapisywany co drugi piksel"],
    correct: [1], explain: "Ok. 120 mln pręcików (jasność) i 6–7 mln czopków (barwa): mózg toleruje mniejszą rozdzielczość koloru.", src: "W01, slajd 50", note: "W01-wprowadzenie" },

  { id: "W01-21", w: "W01", c: "ycbcr", type: "single",
    q: "W której przestrzeni barw odcienie skóry tworzą wąski klaster niezależny od oświetlenia?",
    options: ["RGB", "HSV", "YCbCr", "Skala szarości"],
    correct: [2], explain: "W płaszczyźnie Cb–Cr skóra skupia się w klastrze Cb ≈ 77–127, Cr ≈ 133–173, niezależnie od Y.", src: "W01, slajd 54", note: "W01-wprowadzenie" },

  { id: "W01-22", w: "W01", c: "cie-lab", type: "single",
    q: "W którym modelu odległość euklidesowa między kolorami odpowiada różnicy widzianej przez człowieka?",
    options: ["RGB", "CIE xyz", "YCbCr", "CIE Lab"],
    correct: [3], explain: "CIE Lab ma nieliniowe skalowanie osi dopasowane do percepcji. W RGB, xyz i YCbCr odległość nie odpowiada percepcji.", src: "W01, slajd 63", note: "W01-wprowadzenie" },

  { id: "W01-23", w: "W01", c: "cie-lab", type: "single",
    q: "Czym CIE Lab różni się od CIE xyz?",
    options: ["Używa tylko transformacji liniowych", "Szarości leżą na osi x = y = z", "Ma nieliniowe skalowanie osi", "Jest zależny od matrycy kamery"],
    correct: [2], explain: "W xyz zastosowano transformacje liniowe; Lab dodaje nieliniowe skalowanie i oś szarości = L.", src: "W01, slajd 60", note: "W01-wprowadzenie" },

  { id: "W01-24", w: "W01", c: "srgb", type: "single",
    q: "Jaki standard przyjmuje urządzenie, gdy obraz nie ma profilu kolorów ICC?",
    options: ["sRGB", "ITU-R BT.2020", "ITU-R BT.601", "CIE Lab"],
    correct: [0], explain: "sRGB jest standardem bazowym: każde urządzenie go rozumie i zakłada go przy braku profilu ICC.", src: "W01, slajd 68", note: "W01-wprowadzenie" },

  { id: "W01-25", w: "W01", c: "srgb", type: "single",
    q: "Jaką część barw rozróżnianych przez oko w CIE xy pokrywa sRGB?",
    options: ["Około 18%", "Około 35%", "Ponad 75%", "Około 50%"],
    correct: [1], explain: "sRGB pokrywa ok. 35% barw; BT.2020 (4K/HDR) ponad 75%.", src: "W01, slajd 68", note: "W01-wprowadzenie" },
]});
