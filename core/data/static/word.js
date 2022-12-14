export default class Word {
  static WORDS_TR_200 = [
    "bir",
    "bu",
    "ne",
    "ve",
    "mi",
    "için",
    "çok",
    "ben",
    "o",
    "de",
    "evet",
    "var",
    "ama",
    "mı",
    "değil",
    "da",
    "hayır",
    "sen",
    "şey",
    "daha",
    "bana",
    "kadar",
    "seni",
    "beni",
    "iyi",
    "tamam",
    "onu",
    "bunu",
    "gibi",
    "yok",
    "benim",
    "her",
    "sana",
    "ki",
    "sadece",
    "neden",
    "burada",
    "senin",
    "ya",
    "zaman",
    "hiç",
    "şimdi",
    "nasıl",
    "sonra",
    "olduğunu",
    "en",
    "mu",
    "misin",
    "hadi",
    "şu",
    "öyle",
    "güzel",
    "biraz",
    "musun",
    "önce",
    "İyi",
    "lütfen",
    "ona",
    "bak",
    "böyle",
    "oldu",
    "hey",
    "istiyorum",
    "geri",
    "onun",
    "bile",
    "gerçekten",
    "artık",
    "kim",
    "eğer",
    "bay",
    "yani",
    "çünkü",
    "biliyorum",
    "doğru",
    "büyük",
    "buraya",
    "peki",
    "başka",
    "belki",
    "tanrım",
    "olarak",
    "tek",
    "efendim",
    "biri",
    "haydi",
    "olur",
    "et",
    "olacak",
    "olan",
    "adam",
    "İşte",
    "merhaba",
    "sanırım",
    "teşekkürler",
    "orada",
    "nerede",
    "biz",
    "demek",
    "hiçbir",
    "yardım",
    "ederim",
    "bilmiyorum",
    "gün",
    "a",
    "gece",
    "in",
    "fazla",
    "bütün",
    "harika",
    "yeni",
    "bunun",
    "iki",
    "gel",
    "biliyor",
    "tüm",
    "ile",
    "kötü",
    "oh",
    "olsun",
    "küçük",
    "tam",
    "ol",
    "son",
    "siz",
    "şeyler",
    "şeyi",
    "bayan",
    "hemen",
    "sorun",
    "size",
    "üzgünüm",
    "ver",
    "onları",
    "lanet",
    "teşekkür",
    "ın",
    "git",
    "devam",
    "i",
    "kız",
    "dostum",
    "pekala",
    "sizi",
    "gerek",
    "bizi",
    "e",
    "bize",
    "dur",
    "hakkında",
    "buna",
    "aynı",
    "oluyor",
    "kendi",
    "anne",
    "baba",
    "mısın",
    "diye",
    "iş",
    "kimse",
    "izin",
    "asla",
    "hala",
    "tabii",
    "al",
    "seninle",
    "mü",
    "selam",
    "olabilir",
    "şunu",
    "benimle",
    "söyle",
    "para",
    "bizim",
    "önemli",
    "yoksa",
    "içinde",
    "herkes",
    "ister",
    "değilim",
    "üç",
    "yüzden",
    "gidelim",
    "geldi",
    "dakika",
    "tekrar",
    "bırak",
    "vardı",
    "biliyorsun",
    "özür",
    "işte",
    "bakalım",
    "istiyorsun",
    "yapıyorsun",
    "hep",
    "miyim",
    "onlar",
    "buradan",
    "nin",
    "geliyor",
  ];

  static WORDS_EN_200 = [
    "the",
    "be",
    "of",
    "and",
    "a",
    "to",
    "in",
    "he",
    "have",
    "it",
    "that",
    "for",
    "they",
    "I",
    "with",
    "as",
    "not",
    "on",
    "she",
    "at",
    "by",
    "this",
    "we",
    "you",
    "do",
    "but",
    "from",
    "or",
    "which",
    "one",
    "would",
    "all",
    "will",
    "there",
    "say",
    "who",
    "make",
    "when",
    "can",
    "more",
    "if",
    "no",
    "man",
    "out",
    "other",
    "so",
    "what",
    "time",
    "up",
    "go",
    "about",
    "than",
    "into",
    "could",
    "state",
    "only",
    "new",
    "year",
    "some",
    "take",
    "come",
    "these",
    "know",
    "see",
    "use",
    "get",
    "like",
    "then",
    "first",
    "any",
    "work",
    "now",
    "may",
    "such",
    "give",
    "over",
    "think",
    "most",
    "even",
    "find",
    "day",
    "also",
    "after",
    "way",
    "many",
    "must",
    "look",
    "before",
    "great",
    "back",
    "through",
    "long",
    "where",
    "much",
    "should",
    "well",
    "people",
    "down",
    "own",
    "just",
    "because",
    "good",
    "each",
    "those",
    "feel",
    "seem",
    "how",
    "high",
    "too",
    "place",
    "little",
    "world",
    "very",
    "still",
    "nation",
    "hand",
    "old",
    "life",
    "tell",
    "write",
    "become",
    "here",
    "show",
    "house",
    "both",
    "between",
    "need",
    "mean",
    "call",
    "develop",
    "under",
    "last",
    "right",
    "move",
    "thing",
    "general",
    "school",
    "never",
    "same",
    "another",
    "begin",
    "while",
    "number",
    "part",
    "turn",
    "real",
    "leave",
    "might",
    "want",
    "point",
    "form",
    "off",
    "child",
    "few",
    "small",
    "since",
    "against",
    "ask",
    "late",
    "home",
    "interest",
    "large",
    "person",
    "end",
    "open",
    "public",
    "follow",
    "during",
    "present",
    "without",
    "again",
    "hold",
    "govern",
    "around",
    "possible",
    "head",
    "consider",
    "word",
    "program",
    "problem",
    "however",
    "lead",
    "system",
    "set",
    "order",
    "eye",
    "plan",
    "run",
    "keep",
    "face",
    "fact",
    "group",
    "play",
    "stand",
    "increase",
    "early",
    "course",
    "change",
    "help",
    "line",
  ];


  static WORDS_TR_1000 = [
    "olarak",
    "ben",
    "onun",
    "bu",
    "diye",
    "oldu",
    "için",
    "üzerinde",
    "vardır",
    "ile",
    "onlar",
    "olmak",
    "at",
    "bir",
    "var",
    "Bu",
    "dan",
    "tarafından",
    "sıcak",
    "kelime",
    "ancak",
    "ne",
    "bazı",
    "olduğunu",
    "o",
    "sen",
    "veya",
    "vardı",
    "",
    "arasında",
    "karşı",
    "ve",
    "bir",
    "içinde",
    "biz",
    "can",
    "üzerinden",
    "diğer",
    "vardı",
    "hangi",
    "do",
    "onların",
    "zaman",
    "eğer",
    "olacak",
    "nasıl",
    "dedi",
    "bir",
    "her",
    "söyle",
    "yok",
    "set",
    "üç",
    "istiyorum",
    "hava",
    "iyi",
    "ayrıca",
    "oynamak",
    "küçük",
    "son",
    "koymak",
    "ev",
    "okumak",
    "el",
    "liman",
    "büyük",
    "büyü",
    "ekleyin",
    "hatta",
    "arazi",
    "burada",
    "gerekir",
    "büyük",
    "yüksek",
    "böyle",
    "izleyin",
    "hareket",
    "neden",
    "sormak",
    "erkekler",
    "değişim",
    "gitti",
    "ışık",
    "tür",
    "kapalı",
    "gerek",
    "ev",
    "resim",
    "denemek",
    "bizi",
    "tekrar",
    "hayvan",
    "nokta",
    "anne",
    "dünya",
    "yakın",
    "inşa etmek",
    "öz",
    "toprak",
    "baba",
    "herhangi bir",
    "yeni",
    "iş",
    "bölüm",
    "almak",
    "olsun",
    "yer",
    "yapılan",
    "canlı",
    "nerede",
    "sonra",
    "geri",
    "küçük",
    "sadece",
    "yuvarlak",
    "adam",
    "yıl",
    "geldi",
    "gösterisi",
    "her",
    "iyi",
    "bana",
    "vermek",
    "bizim",
    "altında",
    "adı",
    "çok",
    "ile",
    "sadece",
    "formu",
    "cümle",
    "büyük",
    "düşünmek",
    "demek",
    "yardım",
    "düşük",
    "hat",
    "farklı",
    "dönüş",
    "neden",
    "çok",
    "Yani",
    "önce",
    "hareket",
    "sağ",
    "çocuk",
    "eski",
    "çok",
    "aynı",
    "diye",
    "tüm",
    "orada",
    "zaman",
    "yukarı",
    "Kullanım",
    "senin",
    "yol",
    "hakkında",
    "birçok",
    "o zaman",
    "onları",
    "yazmak",
    "would",
    "gibi",
    "bu yüzden",
    "bu",
    "onu",
    "uzun",
    "yapmak",
    "şey",
    "görmek",
    "onu",
    "iki",
    "var",
    "bak",
    "daha fazla",
    "gün",
    "olabilir",
    "gitmek",
    "gel",
    "yaptım",
    "numarası",
    "ses",
    "hayır",
    "en",
    "insanlar",
    "benim",
    "üzerinde",
    "bilmek",
    "su",
    "daha",
    "çağrı",
    "ilk",
    "kim",
    "may",
    "aşağı",
    "yan",
    "oldu",
    "Şimdi",
    "bulmak",
    "kafa",
    "standı",
    "kendi",
    "sayfa",
    "gerekir",
    "ülke",
    "bulundu",
    "cevap",
    "okul",
    "büyümek",
    "çalışma",
    "hala",
    "öğrenmek",
    "bitki",
    "kapak",
    "gıda",
    "güneş",
    "dört",
    "arasında",
    "devlet",
    "tutmak",
    "göz",
    "asla",
    "son",
    "let",
    "düşünce",
    "Şehir",
    "ağaç",
    "çapraz",
    "çiftlik",
    "sert",
    "başlangıç",
    "olabilir",
    "hikaye",
    "testere",
    "kadar",
    "deniz",
    "çizmek",
    "sol",
    "geç",
    "run",
    "yapamaz",
    "süre",
    "basın",
    "yakın",
    "gece",
    "gerçek",
    "hayat",
    "az",
    "kuzey",
    "kitap",
    "taşımak",
    "aldı",
    "bilim",
    "yemek",
    "oda",
    "arkadaşı",
    "başladı",
    "fikir",
    "balık",
    "dağ",
    "dur",
    "bir kez",
    "baz",
    "duymak",
    "at",
    "kesim",
    "emin",
    "izle",
    "renk",
    "yüz",
    "ahşap",
    "ana",
    "açık",
    "görünmek",
    "birlikte",
    "sonraki",
    "beyaz",
    "çocuk",
    "başla",
    "var",
    "yürümek",
    "örnek",
    "kolaylığı",
    "kâğıt",
    "grup",
    "her zaman",
    "müzik",
    "bu",
    "her ikisi de",
    "işareti",
    "sık sık",
    "mektup",
    "kadar",
    "kilometre",
    "nehir",
    "araba",
    "ayaklar",
    "bakım",
    "ikinci",
    "yeterli",
    "düz",
    "kız",
    "olağan",
    "genç",
    "hazır",
    "yukarıdaki",
    "hiç",
    "kırmızı",
    "listesi",
    "olsa",
    "hissetmek",
    "tartışma",
    "kuş",
    "yakında",
    "vücut",
    "köpek",
    "aile",
    "doğrudan",
    "poz",
    "bırakın",
    "şarkı",
    "ölçmek",
    "kapı",
    "ürün",
    "siyah",
    "kısa",
    "rakam",
    "sınıf",
    "rüzgar",
    "soru",
    "olur",
    "komple",
    "gemi",
    "alan",
    "yarım",
    "kaya",
    "sipariş",
    "yangın",
    "güney",
    "sorun",
    "parça",
    "söyledi",
    "biliyordu",
    "geçmek",
    "beri",
    "üst",
    "bütün",
    "kral",
    "sokak",
    "inch",
    "çarpmak",
    "hiçbir şey",
    "ders",
    "kalmak",
    "tekerlek",
    "tam",
    "kuvvet",
    "mavi",
    "nesne",
    "karar vermek",
    "yüzey",
    "derin",
    "ay",
    "ada",
    "ayak",
    "sistem",
    "meşgul",
    "Test",
    "kayıt",
    "tekne",
    "ortak",
    "altın",
    "mümkün",
    "düzlem",
    "başkasının yeri",
    "kuru",
    "acaba",
    "gülmek",
    "bin",
    "önce",
    "koştu",
    "kontrol",
    "oyunu",
    "şekil",
    "eşit",
    "sıcak",
    "özledim",
    "getirdi",
    "ısı",
    "kar",
    "lastik",
    "getirmek",
    "evet",
    "uzak",
    "doldurun",
    "doğu",
    "boya",
    "dil",
    "arasında",
    "ünitesi",
    "güç",
    "kasaba",
    "ince",
    "belirli",
    "uçmak",
    "düşmek",
    "kurşun",
    "ağlamak",
    "karanlık",
    "makine",
    "notu",
    "bekleyin",
    "planı",
    "rakam",
    "yıldız",
    "kutu",
    "i",
    "alan",
    "gerisi",
    "doğru",
    "yetenekli",
    "kiloluk",
    "bitti",
    "güzellik",
    "sürücü",
    "durdu",
    "içeren",
    "ön",
    "öğretmek",
    "hafta",
    "nihai",
    "verdi",
    "yeşil",
    "oh",
    "hızlı",
    "geliştirmek",
    "okyanus",
    "sıcak",
    "ücretsiz",
    "dakika",
    "güçlü",
    "özel",
    "zihin",
    "arkasında",
    "açık",
    "kuyruk",
    "üretmek",
    "gerçek",
    "uzay",
    "duydum",
    "en iyi",
    "saat",
    "daha iyi",
    "gerçek",
    "sırasında",
    "yüz",
    "beş",
    "hatırlıyorum",
    "adım",
    "erken",
    "tutun",
    "batı",
    "zemin",
    "faiz",
    "ulaşmak",
    "hızlı",
    "fiil",
    "şarkı söylemek",
    "dinle",
    "altı",
    "tablo",
    "seyahat",
    "daha az",
    "sabah",
    "on",
    "basit",
    "birkaç",
    "ünlü",
    "doğru",
    "savaş",
    "koymak",
    "karşı",
    "desen",
    "yavaş",
    "merkezi",
    "aşk",
    "kişi",
    "para",
    "hizmet",
    "görünür",
    "yol",
    "harita",
    "yağmur",
    "kural",
    "idare",
    "Çek",
    "soğuk",
    "haber",
    "ses",
    "enerji",
    "avı",
    "muhtemel",
    "yatak",
    "kardeş",
    "yumurta",
    "binmek",
    "hücre",
    "inanıyorum",
    "belki",
    "seçmek",
    "ani",
    "saymak",
    "kare",
    "neden",
    "uzunluk",
    "temsil",
    "sanat",
    "konu",
    "bölge",
    "boyut",
    "değiştirmek",
    "yerleşmek",
    "konuşmak",
    "ağırlık",
    "genel",
    "buz",
    "madde",
    "daire",
    "çifti",
    "dahil",
    "bölmek",
    "hece",
    "keçe",
    "büyük",
    "top",
    "henüz",
    "dalga",
    "bırakın",
    "kalp",
    "duyuyorum",
    "mevcut",
    "ağır",
    "dans",
    "motor",
    "pozisyon",
    "kol",
    "geniş",
    "yelken",
    "materyal",
    "kesir",
    "orman",
    "oturmak",
    "yarış",
    "penceresi",
    "mağaza",
    "yaz",
    "tren",
    "uyku",
    "kanıtlamak",
    "yalnız",
    "bacak",
    "egzersiz",
    "duvar",
    "catch",
    "dağ",
    "dilek",
    "gökyüzü",
    "kurulu",
    "sevinç",
    "kış",
    "Cts",
    "yazılı",
    "vahşi",
    "enstrüman",
    "tuttu",
    "cam",
    "çim",
    "inek",
    "iş",
    "kenar",
    "işareti",
    "ziyareti",
    "geçmiş",
    "yumuşak",
    "eğlenceli",
    "parlak",
    "gaz",
    "hava",
    "ay",
    "milyon",
    "ayı",
    "bitirmek",
    "mutlu",
    "umut",
    "çiçek",
    "giydirmek",
    "garip",
    "gitti",
    "ticaret",
    "melodi",
    "gezi",
    "ofis",
    "almak",
    "satır",
    "ağız",
    "tam",
    "sembol",
    "ölmek",
    "en az",
    "sorun",
    "bağırmak",
    "hariç",
    "yazdı",
    "tohum",
    "sesi",
    "katılmak",
    "önermek",
    "temiz",
    "molası",
    "bayan",
    "yarda",
    "yükselecek",
    "kötü",
    "darbe",
    "yağ",
    "kan",
    "dokunma",
    "büyüdü",
    "yüzde",
    "karıştırmak",
    "takım",
    "tel",
    "maliyet",
    "kaybetti",
    "kahverengi",
    "giymek",
    "bahçe",
    "eşit",
    "gönderildi",
    "seçim",
    "düştü",
    "uygun",
    "akış",
    "adil",
    "banka",
    "toplamak",
    "kaydetmek",
    "kontrolü",
    "ondalık",
    "kulak",
    "başka",
    "oldukça",
    "kırdı",
    "dava",
    "orta",
    "öldürmek",
    "oğlu",
    "göl",
    "an",
    "ölçek",
    "yüksek sesle",
    "bahar",
    "gözlemlemek",
    "çocuk",
    "düz",
    "ünsüz",
    "ulus",
    "Sözlük",
    "süt",
    "hız",
    "yöntem",
    "Organ",
    "ödeme",
    "yaş",
    "bölüm",
    "elbise",
    "bulut",
    "sürpriz",
    "sessiz",
    "taş",
    "küçücük",
    "tırmanış",
    "serin",
    "dizayn",
    "kötü",
    "çok",
    "deneme",
    "alt",
    "anahtar",
    "demir",
    "tek",
    "sopa",
    "düz",
    "yirmi",
    "cilt",
    "gülümseme",
    "kırışık",
    "delik",
    "atlama",
    "bebek",
    "sekiz",
    "köy",
    "karşılamak",
    "kök",
    "satın",
    "yükseltmek",
    "çözmek",
    "metal",
    "olsun",
    "it",
    "yedi",
    "paragraf",
    "üçüncü",
    "Shall",
    "tutulan",
    "saç",
    "tanımlamak",
    "aşçı",
    "zemin",
    "ya da",
    "sonuç",
    "yanmak",
    "tepe",
    "güvenli",
    "kedi",
    "yüzyıl",
    "düşünmek",
    "tipi",
    "hukuk",
    "bit",
    "sahil",
    "kopya",
    "ifade",
    "sessiz",
    "uzun boylu",
    "kum",
    "toprak",
    "rulo",
    "sıcaklık",
    "parmak",
    "sanayi",
    "değeri",
    "kavga",
    "yalan",
    "yendi",
    "heyecanlandırmak",
    "doğal",
    "görünüm",
    "sense",
    "sermaye",
    "olmaz",
    "sandalye",
    "tehlike",
    "meyve",
    "zengin",
    "kalın",
    "asker",
    "süreç",
    "işletmek",
    "uygulama",
    "ayrı",
    "zor",
    "doktor",
    "lütfen",
    "korumak",
    "öğlen",
    "kırpma",
    "çağdaş",
    "eleman",
    "vurmak",
    "öğrenci",
    "köşe",
    "parti",
    "besleme",
    "kimin",
    "yerleştirmek",
    "halka",
    "karakter",
    "böcek",
    "yakalandı",
    "dönemi",
    "göstermektedir",
    "radyo",
    "konuştu",
    "atomudur",
    "insan",
    "geçmişi",
    "etkisi",
    "elektrik",
    "bekliyoruz",
    "kemik",
    "demiryolu",
    "hayal",
    "sağlamak",
    "katılıyorum",
    "böylece",
    "nazik",
    "kadın",
    "kaptan",
    "sanırım",
    "gerekli",
    "keskin",
    "kanat",
    "oluşturmak",
    "komşu",
    "yıkama",
    "yarasa",
    "yerine",
    "kalabalık",
    "mısır",
    "karşılaştırma",
    "şiir",
    "dize",
    "çan",
    "bağlı",
    "et",
    "ovmak",
    "tüp",
    "ünlü",
    "dolar",
    "akışı",
    "korku",
    "görüş",
    "ince",
    "üçgen",
    "gezegen",
    "acele",
    "baş",
    "koloni",
    "saat",
    "mayın",
    "kravat",
    "girin",
    "büyük",
    "taze",
    "arama",
    "göndermek",
    "sarı",
    "gun",
    "izin",
    "baskı",
    "ölü",
    "nokta",
    "çöl",
    "takım elbise",
    "akım",
    "asansör",
    "gül",
    "varmak",
    "usta",
    "iz",
    "ebeveyn",
    "kıyı",
    "bölünme",
    "levha",
    "madde",
    "iyilik",
    "bağlamak",
    "sonrası",
    "harcamak",
    "akor",
    "şişman",
    "memnun",
    "orijinal",
    "payı",
    "istasyon",
    "baba",
    "ekmek",
    "şarj",
    "uygun",
    "bar",
    "teklif",
    "segmenti",
    "köle",
    "ördek",
    "anlık",
    "pazar",
    "derecesi",
    "doldurmak",
    "civciv",
    "sevgili",
    "düşman",
    "cevap",
    "içki",
    "meydana",
    "destek",
    "konuşma",
    "doğa",
    "aralığı",
    "buhar",
    "hareket",
    "yol",
    "sıvı",
    "log",
    "demek",
    "bölüm",
    "dişler",
    "kabuk",
    "boyun",
    "oksijen",
    "şeker",
    "ölüm",
    "güzel",
    "beceri",
    "kadın",
    "sezon",
    "çözüm",
    "mıknatıs",
    "gümüş",
    "teşekkür ederim",
    "şube",
    "maç",
    "sonek",
    "özellikle",
    "incir",
    "korkuyor",
    "büyük",
    "kardeş",
    "çelik",
    "tartışmak",
    "ileri",
    "benzer",
    "kılavuz",
    "deneyim",
    "puan",
    "elma",
    "satın aldı",
    "açtı",
    "zift",
    "ceket",
    "kitle",
    "kart",
    "bant",
    "halat",
    "kayma",
    "win",
    "rüya",
    "akşam",
    "durumu",
    "beslemek",
    "aracı",
    "toplam",
    "temel",
    "koku",
    "vadi",
    "ne",
    "çift",
    "koltuk",
    "devam etmek",
    "bloğu",
    "grafiği",
    "şapka",
    "satmak",
    "başarı",
    "şirket",
    "çıkarmak",
    "olay",
    "özellikle",
    "anlaşma",
    "yüzmek",
    "vadeli",
    "karşısında",
    "karısı",
    "ayakkabı",
    "omuz",
    "yaymak",
    "düzenlemek",
    "kamp",
    "icat",
    "pamuk",
    "doğmuş",
    "belirlemek",
    "kuart",
    "dokuz",
    "kamyon",
    "gürültü",
    "seviyesi",
    "şans",
    "toplamak",
    "dükkan",
    "streç",
    "atmak",
    "parlaklık",
    "mülkiyet",
    "sütun",
    "molekülü",
    "seçin",
    "yanlış",
    "gri",
    "tekrar",
    "gerektirir",
    "geniş",
    "hazırlamak",
    "tuz",
    "burun",
    "çoğul",
    "öfke",
    "iddia",
    "kıta",
  ];


  static WORDS_EN_1000 = [
    "as",
    "I",
    "his",
    "that",
    "he",
    "was",
    "for",
    "on",
    "are",
    "with",
    "they",
    "be",
    "at",
    "one",
    "have",
    "this",
    "from",
    "by",
    "hot",
    "word",
    "but",
    "what",
    "some",
    "is",
    "it",
    "you",
    "or",
    "had",
    "the",
    "of",
    "to",
    "and",
    "a",
    "in",
    "we",
    "can",
    "out",
    "other",
    "were",
    "which",
    "do",
    "their",
    "time",
    "if",
    "will",
    "how",
    "said",
    "an",
    "each",
    "tell",
    "does",
    "set",
    "three",
    "want",
    "air",
    "well",
    "also",
    "play",
    "small",
    "end",
    "put",
    "home",
    "read",
    "hand",
    "port",
    "large",
    "spell",
    "add",
    "even",
    "land",
    "here",
    "must",
    "big",
    "high",
    "such",
    "follow",
    "act",
    "why",
    "ask",
    "men",
    "change",
    "went",
    "light",
    "kind",
    "off",
    "need",
    "house",
    "picture",
    "try",
    "us",
    "again",
    "animal",
    "point",
    "mother",
    "world",
    "near",
    "build",
    "self",
    "earth",
    "father",
    "any",
    "new",
    "work",
    "part",
    "take",
    "get",
    "place",
    "made",
    "live",
    "where",
    "after",
    "back",
    "little",
    "only",
    "round",
    "man",
    "year",
    "came",
    "show",
    "every",
    "good",
    "me",
    "give",
    "our",
    "under",
    "name",
    "very",
    "through",
    "just",
    "form",
    "sentence",
    "great",
    "think",
    "say",
    "help",
    "low",
    "line",
    "differ",
    "turn",
    "cause",
    "much",
    "mean",
    "before",
    "move",
    "right",
    "boy",
    "old",
    "too",
    "same",
    "she",
    "all",
    "there",
    "when",
    "up",
    "use",
    "your",
    "way",
    "about",
    "many",
    "then",
    "them",
    "write",
    "would",
    "like",
    "so",
    "these",
    "her",
    "long",
    "make",
    "thing",
    "see",
    "him",
    "two",
    "has",
    "look",
    "more",
    "day",
    "could",
    "go",
    "come",
    "did",
    "number",
    "sound",
    "no",
    "most",
    "people",
    "my",
    "over",
    "know",
    "water",
    "than",
    "call",
    "first",
    "who",
    "may",
    "down",
    "side",
    "been",
    "now",
    "find",
    "head",
    "stand",
    "own",
    "page",
    "should",
    "country",
    "found",
    "answer",
    "school",
    "grow",
    "study",
    "still",
    "learn",
    "plant",
    "cover",
    "food",
    "sun",
    "four",
    "between",
    "state",
    "keep",
    "eye",
    "never",
    "last",
    "let",
    "thought",
    "city",
    "tree",
    "cross",
    "farm",
    "hard",
    "start",
    "might",
    "story",
    "saw",
    "far",
    "sea",
    "draw",
    "left",
    "late",
    "run",
    "don’t",
    "while",
    "press",
    "close",
    "night",
    "real",
    "life",
    "few",
    "north",
    "book",
    "carry",
    "took",
    "science",
    "eat",
    "room",
    "friend",
    "began",
    "idea",
    "fish",
    "mountain",
    "stop",
    "once",
    "base",
    "hear",
    "horse",
    "cut",
    "sure",
    "watch",
    "color",
    "face",
    "wood",
    "main",
    "open",
    "seem",
    "together",
    "next",
    "white",
    "children",
    "begin",
    "got",
    "walk",
    "example",
    "ease",
    "paper",
    "group",
    "always",
    "music",
    "those",
    "both",
    "mark",
    "often",
    "letter",
    "until",
    "mile",
    "river",
    "car",
    "feet",
    "care",
    "second",
    "enough",
    "plain",
    "girl",
    "usual",
    "young",
    "ready",
    "above",
    "ever",
    "red",
    "list",
    "though",
    "feel",
    "talk",
    "bird",
    "soon",
    "body",
    "dog",
    "family",
    "direct",
    "pose",
    "leave",
    "song",
    "measure",
    "door",
    "product",
    "black",
    "short",
    "numeral",
    "class",
    "wind",
    "question",
    "happen",
    "complete",
    "ship",
    "area",
    "half",
    "rock",
    "order",
    "fire",
    "south",
    "problem",
    "piece",
    "told",
    "knew",
    "pass",
    "since",
    "top",
    "whole",
    "king",
    "street",
    "inch",
    "multiply",
    "nothing",
    "course",
    "stay",
    "wheel",
    "full",
    "force",
    "blue",
    "object",
    "decide",
    "surface",
    "deep",
    "moon",
    "island",
    "foot",
    "system",
    "busy",
    "test",
    "record",
    "boat",
    "common",
    "gold",
    "possible",
    "plane",
    "stead",
    "dry",
    "wonder",
    "laugh",
    "thousand",
    "ago",
    "ran",
    "check",
    "game",
    "shape",
    "equate",
    "hot",
    "miss",
    "brought",
    "heat",
    "snow",
    "tire",
    "bring",
    "yes",
    "distant",
    "fill",
    "east",
    "paint",
    "language",
    "among",
    "unit",
    "power",
    "town",
    "fine",
    "certain",
    "fly",
    "fall",
    "lead",
    "cry",
    "dark",
    "machine",
    "note",
    "wait",
    "plan",
    "figure",
    "star",
    "box",
    "noun",
    "field",
    "rest",
    "correct",
    "able",
    "pound",
    "done",
    "beauty",
    "drive",
    "stood",
    "contain",
    "front",
    "teach",
    "week",
    "final",
    "gave",
    "green",
    "oh",
    "quick",
    "develop",
    "ocean",
    "warm",
    "free",
    "minute",
    "strong",
    "special",
    "mind",
    "behind",
    "clear",
    "tail",
    "produce",
    "fact",
    "space",
    "heard",
    "best",
    "hour",
    "better",
    "TRUE",
    "during",
    "hundred",
    "five",
    "remember",
    "step",
    "early",
    "hold",
    "west",
    "ground",
    "interest",
    "reach",
    "fast",
    "verb",
    "sing",
    "listen",
    "six",
    "table",
    "travel",
    "less",
    "morning",
    "ten",
    "simple",
    "several",
    "vowel",
    "toward",
    "war",
    "lay",
    "against",
    "pattern",
    "slow",
    "center",
    "love",
    "person",
    "money",
    "serve",
    "appear",
    "road",
    "map",
    "rain",
    "rule",
    "govern",
    "pull",
    "cold",
    "notice",
    "voice",
    "energy",
    "hunt",
    "probable",
    "bed",
    "brother",
    "egg",
    "ride",
    "cell",
    "believe",
    "perhaps",
    "pick",
    "sudden",
    "count",
    "square",
    "reason",
    "length",
    "represent",
    "art",
    "subject",
    "region",
    "size",
    "vary",
    "settle",
    "speak",
    "weight",
    "general",
    "ice",
    "matter",
    "circle",
    "pair",
    "include",
    "divide",
    "syllable",
    "felt",
    "grand",
    "ball",
    "yet",
    "wave",
    "drop",
    "heart",
    "am",
    "present",
    "heavy",
    "dance",
    "engine",
    "position",
    "arm",
    "wide",
    "sail",
    "material",
    "fraction",
    "forest",
    "sit",
    "race",
    "window",
    "store",
    "summer",
    "train",
    "sleep",
    "prove",
    "lone",
    "leg",
    "exercise",
    "wall",
    "catch",
    "mount",
    "wish",
    "sky",
    "board",
    "joy",
    "winter",
    "sat",
    "written",
    "wild",
    "instrument",
    "kept",
    "glass",
    "grass",
    "cow",
    "job",
    "edge",
    "sign",
    "visit",
    "past",
    "soft",
    "fun",
    "bright",
    "gas",
    "weather",
    "month",
    "million",
    "bear",
    "finish",
    "happy",
    "hope",
    "flower",
    "clothe",
    "strange",
    "gone",
    "trade",
    "melody",
    "trip",
    "office",
    "receive",
    "row",
    "mouth",
    "exact",
    "symbol",
    "die",
    "least",
    "trouble",
    "shout",
    "except",
    "wrote",
    "seed",
    "tone",
    "join",
    "suggest",
    "clean",
    "break",
    "lady",
    "yard",
    "rise",
    "bad",
    "blow",
    "oil",
    "blood",
    "touch",
    "grew",
    "cent",
    "mix",
    "team",
    "wire",
    "cost",
    "lost",
    "brown",
    "wear",
    "garden",
    "equal",
    "sent",
    "choose",
    "fell",
    "fit",
    "flow",
    "fair",
    "bank",
    "collect",
    "save",
    "control",
    "decimal",
    "ear",
    "else",
    "quite",
    "broke",
    "case",
    "middle",
    "kill",
    "son",
    "lake",
    "moment",
    "scale",
    "loud",
    "spring",
    "observe",
    "child",
    "straight",
    "consonant",
    "nation",
    "dictionary",
    "milk",
    "speed",
    "method",
    "organ",
    "pay",
    "age",
    "section",
    "dress",
    "cloud",
    "surprise",
    "quiet",
    "stone",
    "tiny",
    "climb",
    "cool",
    "design",
    "poor",
    "lot",
    "experiment",
    "bottom",
    "key",
    "iron",
    "single",
    "stick",
    "flat",
    "twenty",
    "skin",
    "smile",
    "crease",
    "hole",
    "jump",
    "baby",
    "eight",
    "village",
    "meet",
    "root",
    "buy",
    "raise",
    "solve",
    "metal",
    "whether",
    "push",
    "seven",
    "paragraph",
    "third",
    "shall",
    "held",
    "hair",
    "describe",
    "cook",
    "floor",
    "either",
    "result",
    "burn",
    "hill",
    "safe",
    "cat",
    "century",
    "consider",
    "type",
    "law",
    "bit",
    "coast",
    "copy",
    "phrase",
    "silent",
    "tall",
    "sand",
    "soil",
    "roll",
    "temperature",
    "finger",
    "industry",
    "value",
    "fight",
    "lie",
    "beat",
    "excite",
    "natural",
    "view",
    "sense",
    "capital",
    "won’t",
    "chair",
    "danger",
    "fruit",
    "rich",
    "thick",
    "soldier",
    "process",
    "operate",
    "practice",
    "separate",
    "difficult",
    "doctor",
    "please",
    "protect",
    "noon",
    "crop",
    "modern",
    "element",
    "hit",
    "student",
    "corner",
    "party",
    "supply",
    "whose",
    "locate",
    "ring",
    "character",
    "insect",
    "caught",
    "period",
    "indicate",
    "radio",
    "spoke",
    "atom",
    "human",
    "history",
    "effect",
    "electric",
    "expect",
    "bone",
    "rail",
    "imagine",
    "provide",
    "agree",
    "thus",
    "gentle",
    "woman",
    "captain",
    "guess",
    "necessary",
    "sharp",
    "wing",
    "create",
    "neighbor",
    "wash",
    "bat",
    "rather",
    "crowd",
    "corn",
    "compare",
    "poem",
    "string",
    "bell",
    "depend",
    "meat",
    "rub",
    "tube",
    "famous",
    "dollar",
    "stream",
    "fear",
    "sight",
    "thin",
    "triangle",
    "planet",
    "hurry",
    "chief",
    "colony",
    "clock",
    "mine",
    "tie",
    "enter",
    "major",
    "fresh",
    "search",
    "send",
    "yellow",
    "gun",
    "allow",
    "print",
    "dead",
    "spot",
    "desert",
    "suit",
    "current",
    "lift",
    "rose",
    "arrive",
    "master",
    "track",
    "parent",
    "shore",
    "division",
    "sheet",
    "substance",
    "favor",
    "connect",
    "post",
    "spend",
    "chord",
    "fat",
    "glad",
    "original",
    "share",
    "station",
    "dad",
    "bread",
    "charge",
    "proper",
    "bar",
    "offer",
    "segment",
    "slave",
    "duck",
    "instant",
    "market",
    "degree",
    "populate",
    "chick",
    "dear",
    "enemy",
    "reply",
    "drink",
    "occur",
    "support",
    "speech",
    "nature",
    "range",
    "steam",
    "motion",
    "path",
    "liquid",
    "log",
    "meant",
    "quotient",
    "teeth",
    "shell",
    "neck",
    "oxygen",
    "sugar",
    "death",
    "pretty",
    "skill",
    "women",
    "season",
    "solution",
    "magnet",
    "silver",
    "thank",
    "branch",
    "match",
    "suffix",
    "especially",
    "fig",
    "afraid",
    "huge",
    "sister",
    "steel",
    "discuss",
    "forward",
    "similar",
    "guide",
    "experience",
    "score",
    "apple",
    "bought",
    "led",
    "pitch",
    "coat",
    "mass",
    "card",
    "band",
    "rope",
    "slip",
    "win",
    "dream",
    "evening",
    "condition",
    "feed",
    "tool",
    "total",
    "basic",
    "smell",
    "valley",
    "nor",
    "double",
    "seat",
    "continue",
    "block",
    "chart",
    "hat",
    "sell",
    "success",
    "company",
    "subtract",
    "event",
    "particular",
    "deal",
    "swim",
    "term",
    "opposite",
    "wife",
    "shoe",
    "shoulder",
    "spread",
    "arrange",
    "camp",
    "invent",
    "cotton",
    "born",
    "determine",
    "quart",
    "nine",
    "truck",
    "noise",
    "level",
    "chance",
    "gather",
    "shop",
    "stretch",
    "throw",
    "shine",
    "property",
    "column",
    "molecule",
    "select",
    "wrong",
    "gray",
    "repeat",
    "require",
    "broad",
    "prepare",
    "salt",
    "nose",
    "plural",
    "anger",
    "claim",
    "continent",
  ];

}
