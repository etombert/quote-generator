document.addEventListener("DOMContentLoaded", function() {
    const quoteText = document.getElementById("quote-text");
    const quoteButton = document.getElementById("generate-quote");
    const languageButtons = document.querySelectorAll(".languages button");
    let currentLanguage = "English";

    const quotes = {
        "English": [
            "The only limit to our realization of tomorrow is our doubts of today. - Franklin D. Roosevelt",
            "Life is what happens when you're busy making other plans. - John Lennon",
            "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment. - Buddha",
            "Happiness depends upon ourselves. - Aristotle",
            "Turn your wounds into wisdom. - Oprah Winfrey",
            "Success is not the key to happiness. Happiness is the key to success. - Albert Schweitzer",
            "You must be the change you wish to see in the world. - Mahatma Gandhi",
            "Keep your face always toward the sunshine—and shadows will fall behind you. - Walt Whitman",
            "The purpose of our lives is to be happy. - Dalai Lama",
            "We do not remember days, we remember moments. - Cesare Pavese",
            "It always seems impossible until it’s done. - Nelson Mandela",
            "Act as if what you do makes a difference. It does. - William James",
            "Believe you can and you’re halfway there. - Theodore Roosevelt",
            "Success is not how high you have climbed, but how you make a positive difference to the world. - Roy T. Bennett",
            "With the new day comes new strength and new thoughts. - Eleanor Roosevelt"
        ],
        "Français": [
            "A quoi sert ton million si tu prends perpète? - Maes",
            "Le succès, c'est d'aller d'échec en échec sans perdre son enthousiasme. - Winston Churchill",
            "L'imagination est plus importante que le savoir. - Albert Einstein",
            "La seule façon de faire du bon travail, c'est d'aimer ce que vous faites. - Steve Jobs",
            "La vie, c’est comme une bicyclette, il faut avancer pour ne pas perdre l’équilibre. - Albert Einstein",
            "Rien n'est impossible, il suffit d'y croire. - Napoléon Bonaparte",
            "L'important, c'est de ne jamais cesser de poser des questions. - Albert Einstein",
            "La vraie sagesse, c’est de savoir que l’on ne sait rien. - Socrate",
            "On ne voit bien qu’avec le cœur. L’essentiel est invisible pour les yeux. - Antoine de Saint-Exupéry",
            "La patience est amère, mais son fruit est doux. - Aristote",
            "Il n’y a qu’un bonheur dans la vie, c’est d’aimer et d’être aimé. - George Sand",
            "Le bonheur n’est pas quelque chose de prêt à l’emploi. Il vient de vos propres actions. - Dalaï Lama",
            "Un voyage de mille lieues commence toujours par un premier pas. - Lao Tseu",
            "Tout ce que vous pouvez imaginer est réel. - Pablo Picasso",
            "Il est temps de vivre la vie que vous vous êtes imaginée. - Henry James"
        ],
        "Deutsch": [
            "Das Leben ist wie Fahrradfahren. Um das Gleichgewicht zu halten, musst du in Bewegung bleiben. - Albert Einstein",
            "Man sieht nur mit dem Herzen gut. Das Wesentliche ist für die Augen unsichtbar. - Antoine de Saint-Exupéry",
            "Erfolg ist nicht der Schlüssel zum Glück. Glück ist der Schlüssel zum Erfolg. - Albert Schweitzer",
            "Wer aufhört, besser zu werden, hat aufgehört, gut zu sein. - Philip Rosenthal",
            "Der einzige Weg, großartige Arbeit zu leisten, ist, zu lieben, was man tut. - Steve Jobs",
            "Zwei Dinge sind unendlich: das Universum und die menschliche Dummheit. - Albert Einstein",
            "Die Kunst zu leben besteht darin, zu lernen, im Regen zu tanzen, anstatt auf die Sonne zu warten. - Unbekannt",
            "Nicht die Glücklichen sind dankbar. Es sind die Dankbaren, die glücklich sind. - Francis Bacon",
            "Leben heißt nicht zu warten, dass der Sturm vorüberzieht, sondern lernen, im Regen zu tanzen. - Vivian Greene",
            "Mut steht am Anfang des Handelns, Glück am Ende. - Demokrit",
            "Phantasie ist wichtiger als Wissen, denn Wissen ist begrenzt. - Albert Einstein",
            "Gib jedem Tag die Chance, der schönste deines Lebens zu werden. - Mark Twain",
            "Der Weg ist das Ziel. - Konfuzius",
            "Glück hängt nicht davon ab, wer du bist oder was du hast. Es hängt allein davon ab, was du denkst. - Dale Carnegie",
            "Vertrauen ist Mut, und Treue ist Kraft. - Marie von Ebner-Eschenbach"
        ],
        "Español": [
            "La vida es lo que pasa mientras estás ocupado haciendo otros planes. - John Lennon",
            "No cuentes los días, haz que los días cuenten. - Muhammad Ali",
            "Haz de tu vida un sueño, y de tu sueño una realidad. - Antoine de Saint-Exupéry",
            "El éxito no es la clave de la felicidad. La felicidad es la clave del éxito. - Albert Schweitzer",
            "Cree en ti y todo será posible. - Anónimo",
            "No hay camino para la paz, la paz es el camino. - Mahatma Gandhi",
            "El único modo de hacer un gran trabajo es amar lo que haces. - Steve Jobs",
            "La educación es el arma más poderosa que puedes usar para cambiar el mundo. - Nelson Mandela",
            "No esperes a que pase la tormenta, aprende a bailar bajo la lluvia. - Vivian Greene",
            "El futuro pertenece a aquellos que creen en la belleza de sus sueños. - Eleanor Roosevelt",
            "Si puedes soñarlo, puedes hacerlo. - Walt Disney",
            "La felicidad no es algo hecho. Viene de tus propias acciones. - Dalai Lama",
            "No hay nada imposible, porque los sueños de ayer son las esperanzas de hoy y pueden convertirse en realidad mañana. - Anónimo",
            "La mente es como un paracaídas, solo funciona si se abre. - Albert Einstein",
            "Un viaje de mil millas comienza con un solo paso. - Lao Tse"
        ],
        "Portuguese": [
            "A vida é como andar de bicicleta. Para manter o equilíbrio, você deve continuar se movendo. - Albert Einstein",
            "O sucesso não é a chave para a felicidade. A felicidade é a chave para o sucesso. - Albert Schweitzer",
            "A imaginação é mais importante que o conhecimento. - Albert Einstein",
            "Acredite que você pode e você já está no meio do caminho. - Theodore Roosevelt",
            "O futuro pertence àqueles que acreditam na beleza de seus sonhos. - Eleanor Roosevelt",
            "A felicidade não é algo pronto. Ela vem de suas próprias ações. - Dalai Lama",
            "Não espere por uma crise para descobrir o que é importante em sua vida. - Platão",
            "O otimismo é a fé em ação. Nada se pode realizar sem esperança e confiança. - Helen Keller",
            "Nunca é tarde demais para ser aquilo que sempre desejou ser. - George Eliot",
            "A mente é como um paraquedas, só funciona se estiver aberta. - Frank Zappa",
            "O sucesso é ir de fracasso em fracasso sem perder o entusiasmo. - Winston Churchill",
            "Seja a mudança que você deseja ver no mundo. - Mahatma Gandhi",
            "A paciência é amarga, mas seu fruto é doce. - Aristóteles",
            "A simplicidade é o último grau da sofisticação. - Leonardo da Vinci",
            "A vida encolhe ou se expande em proporção à coragem de cada um. - Anaïs Nin"
        ],
        "Italiano": [
            "La vita è quello che ti accade mentre sei impegnato a fare altri progetti. - John Lennon",
            "Il successo non è la chiave della felicità. La felicità è la chiave del successo. - Albert Schweitzer",
            "Sii il cambiamento che vuoi vedere nel mondo. - Mahatma Gandhi",
            "Non aspettare. Il momento giusto non arriva mai. - Napoleon Hill",
            "Il futuro appartiene a coloro che credono nella bellezza dei propri sogni. - Eleanor Roosevelt",
            "L’unico modo per fare un ottimo lavoro è amare quello che fai. - Steve Jobs",
            "Se puoi sognarlo, puoi farlo. - Walt Disney",
            "La pazienza è amara, ma il suo frutto è dolce. - Aristotele",
            "Chi ha un perché per vivere può sopportare quasi ogni come. - Friedrich Nietzsche",
            "Un viaggio di mille miglia inizia con un solo passo. - Lao Tse",
            "Non smettere mai di sognare, solo chi sogna può volare. - Peter Pan",
            "Non importa quanto lentamente vai, purché non ti fermi. - Confucio",
            "Il miglior modo per prevedere il futuro è crearlo. - Peter Drucker",
            "Non esiste una strada per la felicità. La felicità è la strada. - Buddha",
            "Chi trova un amico trova un tesoro. - Proverbio italiano"
        ],
        "中国人": [
            "生活就像骑自行车。为了保持平衡，你必须不断前进。- 爱因斯坦",
            "成功并不是幸福的关键。幸福才是成功的关键。- 史怀哲",
            "不管你觉得自己能不能，你都是对的。- 亨利·福特",
            "伟大的思想来自伟大的心灵。- 迪斯雷利",
            "未来属于那些相信自己梦想之美的人。- 埃莉诺·罗斯福",
            "一个真正的朋友能看透你的心，并仍然喜欢你。- 埃尔伯特·哈伯德",
            "耐心是苦涩的，但它的果实是甜美的。- 亚里士多德",
            "失败是成功之母。- 中国谚语",
            "机会只垂青有准备的人。- 巴斯德",
            "千里之行，始于足下。- 老子",
            "改变自己，世界才会改变。- 马云",
            "知足常乐。- 中国谚语",
            "一个人如果想要成功，就要勇敢面对挑战。- 孙子",
            "光阴似箭，日月如梭。- 中国谚语",
            "路漫漫其修远兮，吾将上下而求索。- 屈原"
        ],
        "日本": [
            "人生とは自転車のようなものだ。倒れないようにするには走り続けなければならない。- アインシュタイン",
            "成功は幸福の鍵ではない。幸福が成功の鍵なのだ。- アルベルト・シュヴァイツァー",
            "明日死ぬかのように生きよ。永遠に生きるかのように学べ。- マハトマ・ガンジー",
            "幸福は習慣の一つであり、それを学ぶことができる。- ダライ・ラマ",
            "一度も失敗したことがない人は、何も新しいことを試みたことがない人である。- アルベルト・アインシュタイン",
            "千里の道も一歩から。- 老子",
            "忍耐は苦いが、その果実は甘い。- アリストテレス",
            "人間は考える葦である。- ブレーズ・パスカル",
            "何事も始まりが最も大事である。- プラトン",
            "夢を見ることができれば、それは実現できる。- ウォルト・ディズニー",
            "光陰矢の如し。- 日本のことわざ",
            "成功の秘訣は、情熱を持って行動することだ。- オプラ・ウィンフリー",
            "どんなに暗い夜でも、必ず朝は来る。- 日本のことわざ",
            "求めよ、さらば与えられん。- 聖書",
            "幸福とは旅の仕方であって、行き先ではない。- 日本のことわざ"
        ],
        "한국인": [
            "삶은 자전거를 타는 것과 같다. 균형을 유지하려면 계속 움직여야 한다. - 아인슈타인",
            "성공은 행복의 열쇠가 아니다. 행복이 성공의 열쇠다. - 알베르트 슈바이처",
            "천리 길도 한 걸음부터. - 한국 속담",
            "미래는 당신이 오늘 무엇을 하느냐에 달려 있다. - 마하트마 간디",
            "행복은 목표가 아니라 삶의 방식이다. - 톰 로빈스",
            "꿈을 꾸면 이룰 수 있다. - 월트 디즈니",
            "실패를 두려워하지 마라. 실패는 성공으로 가는 과정일 뿐이다. - 이소룡",
            "지혜는 경험에서 오며, 경험은 실수를 통해 얻어진다. - 한국 속담",
            "기회는 준비된 자에게 온다. - 한국 속담",
            "강한 사람은 넘어지지 않는 사람이 아니라, 넘어져도 다시 일어서는 사람이다. - 한국 속담",
            "자신을 믿어라. 그러면 불가능은 가능해진다. - 한국 속담",
            "남을 바꾸려 하지 말고 자신을 먼저 바꿔라. - 공자",
            "아무리 작은 노력도 계속하면 큰 결과를 만든다. - 한국 속담",
            "우리가 원하는 미래는 우리가 만드는 것이다. - 한국 속담",
            "도전 없는 인생은 의미가 없다. - 한국 속담"
        ],
        "Ελληνικά": [
            "Η ζωή είναι σαν το ποδήλατο. Για να διατηρήσεις την ισορροπία σου, πρέπει να συνεχίσεις να κινείσαι. - Άλμπερτ Αϊνστάιν",
            "Η επιτυχία δεν είναι το κλειδί της ευτυχίας. Η ευτυχία είναι το κλειδί της επιτυχίας. - Άλμπερτ Σβάιτσερ",
            "Ο καλύτερος τρόπος να προβλέψεις το μέλλον είναι να το δημιουργήσεις. - Πίτερ Ντράκερ",
            "Η τύχη ευνοεί τους τολμηρούς. - Βιργίλιος",
            "Κάθε εμπόδιο είναι μια ευκαιρία για ανάπτυξη. - Ελληνική παροιμία",
            "Η ευτυχία δεν είναι προορισμός, αλλά τρόπος ζωής. - Ελληνική παροιμία",
            "Το μόνο αληθινό λάθος είναι να μην προσπαθείς ξανά. - Αριστοτέλης",
            "Η γνώση είναι δύναμη. - Φράνσις Μπέικον",
            "Το μεγαλύτερο πλούτος είναι η υγεία. - Βιργίλιος",
            "Όποιος φοβάται την αποτυχία, δεν θα γνωρίσει ποτέ την επιτυχία. - Επίκουρος",
            "Η αρχή είναι το ήμισυ του παντός. - Πλάτωνας",
            "Δεν υπάρχει βασιλικός δρόμος για τη μάθηση. - Ευκλείδης",
            "Οι μεγάλες ψυχές έχουν θελήσεις, οι αδύναμες ψυχές έχουν μόνο επιθυμίες. - Κομφούκιος",
            "Η αλλαγή είναι ο νόμος της ζωής. - Τζον Φ. Κένεντι",
            "Οι μικρές πράξεις καλοσύνης είναι καλύτερες από τις μεγάλες προθέσεις. - Ελληνική παροιμία"
        ],
        "Hrvatski": [
            "Život je poput vožnje biciklom. Da biste održali ravnotežu, morate se kretati. - Albert Einstein",
            "Sreća nije nešto gotovo. Dolazi iz vaših vlastitih postupaka. - Dalaj Lama",
            "Ne bojte se neuspjeha. Strah od neuspjeha je pravi neuspjeh. - Paulo Coelho",
            "Svaki put od tisuću milja počinje jednim korakom. - Lao Ce",
            "Samo je jedan kutak svemira koji sigurno možete poboljšati, a to ste vi sami. - Aldous Huxley",
            "Uspjeh nije ključ sreće. Sreća je ključ uspjeha. - Albert Schweitzer",
            "Ne čekajte. Pravo vrijeme nikada ne dolazi. - Napoleon Hill",
            "Snovi postaju stvarnost kad imate hrabrost da ih slijedite. - Walt Disney",
            "Ne bojte se sporog napretka, bojte se stajanja. - Kineska poslovica",
            "Najveće bogatstvo je zdravlje. - Vergilije",
            "Sreća ne ovisi o vanjskim uvjetima, ona se upravlja iznutra. - Dalaj Lama",
            "Ne učimo iz škole, već iz života. - Seneka",
            "Započeti nešto novo znači vjerovati u sebe. - Njemačka poslovica",
            "Budućnost pripada onima koji vjeruju u ljepotu svojih snova. - Eleanor Roosevelt",
            "Najbolji način da predvidite budućnost je da je stvorite. - Peter Drucker"
        ],
        "भारतीय": [
            "जीवन साइकिल चलाने के समान है। संतुलन बनाए रखने के लिए आपको आगे बढ़ते रहना होगा। - अल्बर्ट आइंस्टीन",
            "सफलता की कुंजी खुशी नहीं है। खुशी ही सफलता की कुंजी है। - अल्बर्ट श्वाइत्ज़र",
            "जो कुछ भी तुम सोच सकते हो, वह तुम कर सकते हो। - वॉल्ट डिज़्नी",
            "धैर्य कड़वा है, लेकिन इसका फल मीठा है। - अरस्तू",
            "यदि आप इसे सपना देख सकते हैं, तो आप इसे कर सकते हैं। - वॉल्ट डिज़्नी",
            "हर महान यात्रा एक छोटे कदम से शुरू होती है। - चीनी कहावत",
            "अपने आप को बदलिए, दुनिया खुद बदल जाएगी। - महात्मा गांधी",
            "मनुष्य अपने विचारों से निर्मित होता है, जैसा वह सोचता है, वैसा ही बनता है। - गौतम बुद्ध",
            "समय और ज्वार किसी की प्रतीक्षा नहीं करते। - भारतीय कहावत",
            "विफलता केवल फिर से शुरू करने का अवसर है, इस बार अधिक बुद्धिमानी से। - हेनरी फोर्ड",
            "ज्ञान शक्ति है। - फ्रांसिस बेकन",
            "कभी भी किसी महान कार्य को करने में संकोच न करें। - रवींद्रनाथ टैगोर",
            "सपने देखो, और उन्हें पूरा करने के लिए कड़ी मेहनत करो। - ए.पी.जे. अब्दुल कलाम",
            "आपका सबसे अच्छा शिक्षक आपकी आखिरी गलती है। - भारतीय कहावत",
            "सफलता अंत नहीं है, असफलता घातक नहीं है, यह हिम्मत है जो मायने रखती है। - विंस्टन चर्चिल"
        ],
        "Русский": [
            "Жизнь — это как езда на велосипеде. Чтобы сохранить равновесие, нужно двигаться. - Альберт Эйнштейн",
            "Счастье — это не что-то готовое. Оно исходит от ваших собственных действий. - Далай Лама",
            "Не бойтесь ошибок. Они говорят вам, что вы движетесь вперед. - Роберт Кийосаки",
            "Путешествие в тысячу миль начинается с одного шага. - Лао Цзы",
            "Тот, кто хочет видеть радугу, должен пережить дождь. - Русская пословица",
            "Успех — это не ключ к счастью. Счастье — это ключ к успеху. - Альберт Швейцер",
            "Лучшая месть — огромный успех. - Фрэнк Синатра",
            "Если можете мечтать, значит, можете осуществить. - Уолт Дисней",
            "Смысл жизни — найти свой дар. Цель жизни — отдать его миру. - Пабло Пикассо",
            "Все великие достижения начинаются с малого. - Лао Цзы",
            "Будущее принадлежит тем, кто верит в красоту своей мечты. - Элеонора Рузвельт",
            "Лучший способ предсказать будущее — создать его. - Питер Друкер",
            "Никогда не сдавайся. Великие дела требуют времени. - Русская пословица",
            "Преодолей себя, и ты преодолеешь мир. - Фёдор Достоевский",
            "Мы не можем изменить направление ветра, но можем настроить паруса. - Аристотель"
        ],
    };

    function generateQuote() {
        const quotesArray = quotes[currentLanguage];
        const randomIndex = Math.floor(Math.random() * quotesArray.length);
        quoteText.textContent = quotesArray[randomIndex];
    }

    quoteButton.addEventListener("click", generateQuote);

    languageButtons.forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".languages .active").classList.remove("active");
            this.classList.add("active");
            currentLanguage = this.textContent;
            generateQuote();
        });
    });
});