import Cookies from 'js-cookie';

const hero = {
  en: {
    flag: 'english (us)',
    mediaNav: 'Media',
    featuresNav: 'Features',
    newsletter: 'Newsletter',
    characterNav: 'Characters',
    purchase: 'Pre-Order',
    available: 'Coming fall 2023',
    available: 'Available October 17<sup class="sup">th</sup>',
    trailer: 'watch the trailer',
    loading: 'loading',
  },
  au: {
    flag: 'english (au)',
    mediaNav: 'Media',
    featuresNav: 'Features',
    newsletter: 'Newsletter',
    characterNav: 'Characters',
    purchase: 'Pre-Order',
    available: 'Coming 2023',
    available: 'Available October 17<sup class="sup">th</sup>',
    trailer: 'watch the trailer',
    loading: 'loading',
  },
  uk: {
    flag: 'english (uk)',
    mediaNav: 'Media',
    featuresNav: 'Features',
    newsletter: 'Newsletter',
    characterNav: 'Characters',
    purchase: 'Pre-Order',
    available: 'Coming 2023',
    available: 'Available October 17<sup class="sup">th</sup>',
    trailer: 'watch the trailer',
    loading: 'loading',
  },
  fr: {
    flag: 'FRANÇAIS',
    mediaNav: 'Médias',
    featuresNav: 'Caractéristiques',
    newsletter: 'Newsletter',
    characterNav: 'Personnages',
    purchase: 'Précommander',
    available: 'Sortie en 2023',
    available: 'Disponible le 17 octobre',
    trailer: 'regardez la bande-annonce',
    loading: 'Chargement',
  },
  it: {
    flag: 'ITALIANO',
    mediaNav: 'Media',
    featuresNav: 'caratteristiche',
    newsletter: 'Newsletter',
    characterNav: 'Personagi',
    purchase: 'PRE-ORDINA',
    available: 'in arrivo nel 2023',
    available: 'Disponibile il 17 ottobre',
    trailer: 'guarda il trailer',
    loading: 'Caricamento',
  },
  de: {
    flag: 'DEUTSCH ',
    mediaNav: 'Medien',
    featuresNav: 'Inhalte',
    newsletter: 'Newsletter',
    characterNav: 'Charaktere',
    purchase: 'Vorbestellen',
    available: 'Erscheint 2023',
    available: 'Erscheint am 17. Oktober',
    trailer: 'Trailer ansehen',
    loading: 'Lädt',
  },
  es: {
    flag: 'ESPAÑOL (ES)',
    mediaNav: 'Multimedia',
    featuresNav: 'características',
    newsletter: 'noticias',
    characterNav: 'Personajes',
    purchase: 'Resérvalo',
    available: 'DISPONIBLE EN 2023',
    available: 'Disponible el 17 de octubre',
    trailer: 've el tráiler',
    loading: 'Cargando',
  },
  br: {
    flag: 'Brasileiro',
    mediaNav: 'Mídia',
    featuresNav: 'recursos',
    newsletter: 'boletim informativo',
    characterNav: 'Personagens',
    purchase: 'Pré-venda',
    available: 'disponível na <br>primavera de 2023',
    available: 'Disponível em 17 de outubro',
    trailer: 'assista ao trailer',
    loading: 'Carregando',
  },
  mx: {
    flag: 'ESPAÑOL (MX)',
    mediaNav: 'Multimedia',
    featuresNav: 'características',
    newsletter: 'boletín',
    characterNav: 'Personajes',
    purchase: 'Reserva',
    available: 'llega en <br>otoño de 2023',
    available: 'Disponible el 17 de octubre',
    trailer: 'mira el tráiler',
    loading: 'Cargando',
  },
};

const media = {
  en: {
    sectionTitle: 'media',
    announcement: 'https://www.youtube.com/watch?v=j3g-62NNoUs?autoplay=0',
    lego: 'https://www.youtube.com/watch?v=pH2_7UjyF5k?autoplay=0',
    multiplayer: 'https://www.youtube.com/watch?v=1DrnSgXHviI?autoplay=0',
    trio: 'https://www.youtube.com/watch?v=4wzSw2iuk_8?autoplay=0',
  },
  au: {
    sectionTitle: 'media',
    announcement: 'https://www.youtube.com/watch?v=YtUiU85CmZE?autoplay=0',
    lego: 'https://www.youtube.com/watch?v=pH2_7UjyF5k?autoplay=0',
    multiplayer: 'https://www.youtube.com/watch?v=VWXxTTHbKV4?autoplay=0',
    trio: 'https://www.youtube.com/watch?v=4wzSw2iuk_8?autoplay=0',
  },
  uk: {
    sectionTitle: 'media',
    announcement: 'https://www.youtube.com/watch?v=IXI21_qv41g?autoplay=0',
    lego: 'https://www.youtube.com/watch?v=pH2_7UjyF5k?autoplay=0',
    multiplayer: 'https://www.youtube.com/watch?v=7XqALvXQ1Ls?autoplay=0',
    trio: 'https://www.youtube.com/watch?v=4wzSw2iuk_8?autoplay=0',
  },
  fr: {
    sectionTitle: 'Médias',
    announcement: 'https://www.youtube.com/watch?v=hArJSploYLQ?autoplay=0',
    lego: 'https://www.youtube.com/watch?v=pH2_7UjyF5k?autoplay=0',
    multiplayer: 'https://www.youtube.com/watch?v=VwAiiqyDdc0?autoplay=0',
    trio: 'https://www.youtube.com/watch?v=4wzSw2iuk_8?autoplay=0',
  },
  it: {
    sectionTitle: 'Media',
    announcement: 'https://www.youtube.com/watch?v=PY4EIc7uC80?autoplay=0',
    lego: 'https://www.youtube.com/watch?v=pH2_7UjyF5k?autoplay=0',
    multiplayer: 'https://www.youtube.com/watch?v=XgvmiD8ef34?autoplay=0',
    trio: 'https://www.youtube.com/watch?v=4wzSw2iuk_8?autoplay=0',
  },
  de: {
    sectionTitle: 'Medien',
    announcement: 'https://www.youtube.com/watch?v=jbG_KUy5zxg?autoplay=0',
    lego: 'https://www.youtube.com/watch?v=pH2_7UjyF5k?autoplay=0',
    multiplayer: 'https://www.youtube.com/watch?v=LAPwW2MU0Mo?autoplay=0',
    trio: 'https://www.youtube.com/watch?v=4wzSw2iuk_8?autoplay=0',
  },
  es: {
    sectionTitle: 'Multimedia',
    announcement: 'https://www.youtube.com/watch?v=CLlsi5GMtp0?autoplay=0',
    lego: 'https://www.youtube.com/watch?v=pH2_7UjyF5k?autoplay=0',
    multiplayer: 'https://www.youtube.com/watch?v=U1o_8qo-fDI?autoplay=0',
    trio: 'https://www.youtube.com/watch?v=4wzSw2iuk_8?autoplay=0',
  },
  br: {
    sectionTitle: 'Mídia',
    announcement: 'https://www.youtube.com/watch?v=j3g-62NNoUs?autoplay=0',
    lego: 'https://www.youtube.com/watch?v=pH2_7UjyF5k?autoplay=0',
    multiplayer: 'https://www.youtube.com/watch?v=1DrnSgXHviI?autoplay=0',
    trio: 'https://www.youtube.com/watch?v=4wzSw2iuk_8?autoplay=0',
  },
  mx: {
    sectionTitle: 'Multimedia',
    announcement: 'https://www.youtube.com/watch?v=j3g-62NNoUs?autoplay=0',
    lego: 'https://www.youtube.com/watch?v=pH2_7UjyF5k?autoplay=0',
    multiplayer: 'https://www.youtube.com/watch?v=1DrnSgXHviI?autoplay=0',
    trio: 'https://www.youtube.com/watch?v=4wzSw2iuk_8?autoplay=0',
  },
};

const features = {
  en: {
    sectionTitle: 'Features',
    featureTitle_1: 'New thrills. Classic feels.',
    featureTitle_2: 'A new Spin on a Classic',
    featureTitle_3: 'Play as your Favorite Characters',
    featureTitle_4: 'Harness the Power of the Chaos Emeralds',
    featureTitle_5: 'More Friends, More Fun',
    featureText_1:
      "Adventure through the mystical Northstar Islands in this all-new take on classic 2D Sonic high-speed action platforming. Play as Sonic, Tails, Knuckles, and Amy Rose and harness all-new Emerald powers to move and attack in dynamic new ways. Navigate gorgeous, never-before-seen environments solo or with up to 3 other players and stop Dr. Eggman, Fang, and a mysterious new adversary from converting the islands' giant animals into Badniks before it's too late!",
    featureText_2:
      "The 2D Sonic high-speed sidescrolling action platforming you know and love, reimagined with fully 3D graphics, new powers and abilities, an all-new setting, and new ways to play! You've never played classic Sonic like this before!",
    featureText_3:
      'Choose from Sonic, Tails, Knuckles, and Amy Rose and take advantage of their unique abilities to blaze a path across the Northstar Islands as they race to defeat Dr. Eggman, who has teamed up with an old nemesis, Fang.',
    featureText_4:
      'Multiply, swim up waterfalls, change form, and more with the powers of the Chaos Emeralds.',
    featureText_5:
      'For the first time ever in a Sonic game, play through the entire campaign with up to 3 other players with drop-in and drop-out 4-Player Local Co-op.',
  },
  au: {
    sectionTitle: 'Features',
    featureTitle_1: 'New thrills. Classic feels.',
    featureTitle_2: 'A new Spin on a Classic',
    featureTitle_3: 'Play as your Favorite Characters',
    featureTitle_4: 'Harness the Power of the Chaos Emeralds',
    featureTitle_5: 'More Friends, More Fun',
    featureText_1:
      "Adventure through the mystical Northstar Islands in this all-new take on classic 2D Sonic high-speed action platforming. Play as Sonic, Tails, Knuckles, and Amy Rose and harness all-new Emerald powers to move and attack in dynamic new ways. Navigate gorgeous, never-before-seen environments solo or with up to 3 other players and stop Dr. Eggman, Fang, and a mysterious new adversary from converting the islands' giant animals into Badniks before it's too late!",
    featureText_2:
      "The 2D Sonic high-speed sidescrolling action platforming you know and love, reimagined with fully 3D graphics, new powers and abilities, an all-new setting, and new ways to play! You've never played classic Sonic like this before!",
    featureText_3:
      'Choose from Sonic, Tails, Knuckles, and Amy Rose and take advantage of their unique abilities to blaze a path across the Northstar Islands as they race to defeat Dr. Eggman, who has teamed up with an old nemesis, Fang.',
    featureText_4:
      'Multiply, swim up waterfalls, change form, and more with the powers of the Chaos Emeralds.',
    featureText_5:
      'For the first time ever in a Sonic game, play through the entire campaign with up to 3 other players with drop-in and drop-out 4-Player Local Co-op.',
  },
  uk: {
    sectionTitle: 'Features',
    featureTitle_1: 'New thrills. Classic feels.',
    featureTitle_2: 'A new Spin on a Classic',
    featureTitle_3: 'Play as your Favorite Characters',
    featureTitle_4: 'Harness the Power of the Chaos Emeralds',
    featureTitle_5: 'More Friends, More Fun',
    featureText_1:
      "Adventure through the mystical Northstar Islands in this all-new take on classic 2D Sonic high-speed action platforming. Play as Sonic, Tails, Knuckles, and Amy Rose and harness all-new Emerald powers to move and attack in dynamic new ways. Navigate gorgeous, never-before-seen environments solo or with up to 3 other players and stop Dr. Eggman, Fang, and a mysterious new adversary from converting the islands' giant animals into Badniks before it's too late!",
    featureText_2:
      "The 2D Sonic high-speed sidescrolling action platforming you know and love, reimagined with fully 3D graphics, new powers and abilities, an all-new setting, and new ways to play! You've never played classic Sonic like this before!",
    featureText_3:
      'Choose from Sonic, Tails, Knuckles, and Amy Rose and take advantage of their unique abilities to blaze a path across the Northstar Islands as they race to defeat Dr. Eggman, who has teamed up with an old nemesis, Fang.',
    featureText_4:
      'Multiply, swim up waterfalls, change form, and more with the powers of the Chaos Emeralds.',
    featureText_5:
      'For the first time ever in a Sonic game, play through the entire campaign with up to 3 other players with drop-in and drop-out 4-Player Local Co-op.',
  },
  fr: {
    sectionTitle: 'Caractéristiques',
    featureTitle_1: 'Nouvelles émotions. Bonnes vieilles sensations.',
    featureTitle_2: 'Un nouveau standard',
    featureTitle_3: 'Incarne tes personnages préférés',
    featureTitle_4: 'Utilise le pouvoir des Chaos Emeralds',
    featureTitle_5: 'Partage le fun entre amis',
    featureText_1:
      "Explore les Northstar Islands dans cette toute nouvelle aventure qui reprend l'action rapide et les séquences de plateforme en 2D des jeux Sonic classiques. Incarne Sonic, Tails, Knuckles et Amy Rose, et utilise les nouveaux Emerald Powers qui offrent des manières inédites de se déplacer et d'attaquer. Parcours des environnements magnifiques et inédits, en solo ou avec jusqu'à 3 autres joueurs, pour déjouer les plans du Dr. Eggman, de Fang et d'un nouvel ennemi qui cherchent à transformer les animaux géants des îles en Badniks !<br><br>Pour les fans de longue date comme pour les nouveaux venus, Sonic Superstars est une occasion idéale de plonger dans l'univers de Sonic.",
    featureText_2:
      'une aventure Sonic classique conçue pour les plateformes modernes. ',
    featureText_3:
      "choisis entre Sonic, Tails, Knuckles et Amy Rose, et utilise leurs pouvoirs pour traverser les Northstar Islands et vaincre le Dr. Eggman, qui s'est associé avec Fang, un ancien adversaire.",
    featureText_4:
      "les nouveaux Emerald Powers permettent de se cloner, de gravir les chutes d'eau, de changer de forme, et bien plus encore.",
    featureText_5:
      "toute l'histoire du jeu est jouable en coopération jusqu'à 4 joueurs en local.",
  },
  it: {
    sectionTitle: 'caratteristiche',
    featureTitle_1: 'Nuove emozioni. Classiche sensazioni.',
    featureTitle_2: 'Un nuovo standard',
    featureTitle_3: 'Gioca nei panni dei tuoi personaggi preferiti',
    featureTitle_4: 'Sprigiona il potere dei Chaos Emerald',
    featureTitle_5: 'Più amici, più divertimento',
    featureText_1:
      "Avventurati attraverso le mistiche Northstar Island in questa nuovissima interpretazione del classico e supersonico platformer Sonic in 2D. Gioca nei panni di Sonic, Knuckles ed Amy Rose e sprigiona i nuovissimi poteri dell'Emerald per muoverti e attaccare in maniere inedite e dinamiche. Attraversa meravigliose ambientazioni mai viste prima, in solitaria o con un massimo di 3 altri giocatori, e impedisci al Dr. Eggman, a Fang e a un nuovo avversario di trasformare in badnik i mastodontici animali delle isole! <br><br>Sonic Superstars è il modo perfetto per scattare nel mondo di Sonic, sia per i fan della prima ora che per chi ha appena scoperto il suo mondo.",
    featureText_2:
      'il Sonic classico conosciuto e amato da tutti, reinventato per le piattaforme moderne!',
    featureText_3:
      'scegli tra Sonic, Tails, Knuckles e Amy Rose, e sfrutta le loro abilità esclusive per attraversare le Northstar Islands e precipitarti a sconfiggere il Dr. Eggman, spalleggiato da un vecchio nemico come Fang.',
    featureText_4:
      'moltiplica, risali le rapide, trasformati e scopri gli altri poteri dei Chaos Emerald.',
    featureText_5:
      "affronta l'intera campagna in modalità cooperativa locale fino a 4 giocatori.",
  },
  de: {
    sectionTitle: 'Inhalte',
    featureTitle_1: 'Brandneuer Spaß. Klassisch gut.',
    featureTitle_2: 'Ein neuer Standard für neue Plattformen',
    featureTitle_3: 'Spiele als deine Lieblingscharaktere',
    featureTitle_4: 'Nutze die Kräfte der Chaos Emeralds',
    featureTitle_5: 'Mehr Freunde, mehr Spaß',
    featureText_1:
      'Erlebe ein rasantes Abenteuer auf den Northstar Islands, inspiriert von klassischen Action-Plattformern aus Sonics 2D-Ära. Spiele als Sonic, Tails, Knuckles und Amy Rose und nutze die brandneuen Kräfte der Chaos Emeralds, um dich auf völlig neue Arten zu bewegen und anzugreifen. Erkunde wunderschöne, noch nie zuvor gesehene Umgebungen alleine oder mit bis zu 3 anderen und halte Dr. Eggman, Fang und einen neuen Gegner davon ab, die Tiere der Inseln in Badniks zu verwandeln, bevor es zu spät ist. <br><br>Egal, ob du Sonic schon seit Jahren kennst oder ganz neu dabei bist - Sonic Superstars hat für alle Fans etwas zu bieten.',
    featureText_2: 'Der klassische Sonic mit neuem Kniff. ',
    featureText_3:
      'Wähle zwischen Sonic, Tails, Knuckles und Amy Rose und nutze ihre einzigartigen Fähigkeiten, um dir einen Weg durch die Northstar Islands zu bahnen und Dr. Eggman und dem alten Widersacher Fang einen Strich durch ihre Rechnung zu machen.',
    featureText_4:
      'Erzeuge Klone, schwimme Wasserfälle hoch, ändere deine Gestalt und mehr.',
    featureText_5:
      'Die gesamte Kampagne kann im lokalen Co-op mit 4 Personen gespielt werden.',
  },
  es: {
    sectionTitle: 'características',
    featureTitle_1: 'Nuevas emociones, Clásicas sensaciones.',
    featureTitle_2: 'Una nueva forma de jugar',
    featureTitle_3: 'Juega con tus personajes favoritos',
    featureTitle_4: 'Aprovecha el poder de las Chaos Emeralds',
    featureTitle_5: 'Más amigos, más diversión',
    featureText_1:
      'Explora las místicas Northstar Islands en esta nueva versión de las clásicas aventuras de acción y plataformas en 2D de Sonic. Juega con Sonic, Tails, Knuckles y Amy Rose y aprovecha los nuevos poderes Emerald para moverte y atacar de mil y una formas. Visita los maravillosos y nunca antes vistos escenarios a solas o en compañía de hasta 3 jugadores más y evita que el Dr. Eggman, Fang y un nuevo adversario conviertan a los animales gigantes de las islas en Badniks antes de que sea demasiado tarde.<br><br>Bien seas fan de Sonic de toda la vida o si acabas de descubrir sus juegos, Sonic Superstars es la manera perfecta de disfrutar del mundo de Sonic.',
    featureText_2:
      'El Sonic clásico que conoces y amas reinventado para las plataformas modernas. ',
    featureText_3:
      'Elige entre Sonic, Tails, Knuckles y Amy Rose y aprovecha sus habilidades únicas para explorar las Northstar Islands y derrotar al Dr. Eggman, que se ha aliado con un viejo enemigo, Fang.',
    featureText_4:
      'Multiplícate, nada por cascadas, cambia de forma y mucho más con el poder de las Chaos Emeralds.',
    featureText_5:
      'Juega la campaña entera en cooperativo local para 4 jugadores.',
  },
  br: {
    sectionTitle: 'recursos',
    featureTitle_1: 'Novas aventuras. Emoções clássicas.',
    featureTitle_2: 'Um novo padrão',
    featureTitle_3: 'Jogue com seus personagens favoritos',
    featureTitle_4: 'Utilize o poder das Esmeraldas Chaos',
    featureTitle_5: 'Quanto mais amigos, melhor',
    featureText_1:
      'Aventura-te pelas místicas Northstar Islands nesta entrada inédita da clássica e rápida jogabilidade de ação e plataformas em 2D. Joga com Sonic, Tails, Knuckles e Amy Rose e utiliza poderes Esmeralda inéditos para realizar movimentos e ataques dinâmicos. Explora novos cenários fantásticos, a sós ou com até 3 outros jogadores, e impede que o Dr. Eggman, Fang e um novo adversário convertam os animais gigantes das ilhas em Badniks, antes que seja tarde demais!<br><br>Quer sejas fã de longa data de Sonic ou tenhas acabado de conhecer a série, Sonic Superstars é a forma perfeita de explorar o mundo de Sonic.',
    featureText_2:
      'o Sonic clássico que você já conhece e adora, reimaginado para plataformas modernas! ',
    featureText_3:
      'escolha entre Sonic, Tails, Knuckles e Amy Rose, e aproveite as habilidades únicas de cada um para percorrer as Northstar Islands na luta contra o Dr. Eggman, que se aliou a um antigo nêmesis, Fang.',
    featureText_4:
      'multiplique-se, suba cachoeiras a nado, mude de forma e muito mais com os poderes das Esmeraldas Chaos.',
    featureText_5:
      'jogue a campanha inteira no modo cooperativo local para 4 jogadores.',
  },
  mx: {
    sectionTitle: 'características',
    featureTitle_1: 'Nuevas emociones. Sentimientos clásicos.',
    featureTitle_2: 'Un nuevo estándar',
    featureTitle_3: 'Juega con tus favoritos',
    featureTitle_4: 'Aprovecha el poder de las Chaos Emeralds',
    featureTitle_5: 'Más amigos, más diversión',
    featureText_1:
      'Aventúrate por las místicas Northstar Islands en esta nueva versión del clásico juego de plataformas 2D de acción a alta velocidad de Sonic. Juega como Sonic, Tails, Knuckles y Amy Rose, y aprovecha los nuevos poderes Esmeralda para moverte y atacar de formas nuevas y dinámicas. Navega por magníficos entornos nunca vistos en solitario o con otros 3 jugadores y evita que el Dr. Eggman, Fang y un nuevo adversario conviertan a los animales gigantes de las islas en Badniks antes de que sea demasiado tarde.<br><br>Tanto si eres un fan de Sonic de toda la vida como si eres nuevo en la serie, Sonic Superstars es la forma perfecta de sumergirte en el mundo de Sonic.',
    featureText_2:
      'El Sonic clásico que conoces y adoras, ¡rediseñado para las plataformas modernas! ',
    featureText_3:
      'Elige entre Sonic, Tails, Knuckles y Amy Rose y aprovecha sus habilidades únicas para encender un camino en las Northstar Islands en su carrera para derrotar al Dr. Eggman, quien hizo equipo con su antiguo némesis, Fang.',
    featureText_4:
      'Multiplícate, asciende por las cascadas, cambia de forma y mucho más con los poderes de las Chaos Emeralds.',
    featureText_5:
      'Juega toda la campaña en modo cooperativo local para 4 jugadores.',
  },
};

const signup = {
  en: {
    sectionTitle: 'Subscribe',
    header: 'Get an Exclusive Amy Rose Skin!',
    text: 'Sign up by January 31, 2024 and earn a classic, redefined look for Amy Rose! Exclusive to our newsletter subscribers only, don modern Amy\'s outfit on classic Amy from Sonic Superstars! Simply enter your details and we\'ll email a code straight to your inbox with instructions on how to download the in-game content after the game is released in Fall 2023.<br><br><span class="textbox__body--italic">*Available in selected regions for a limited time only. Sonic Superstars game (sold separately) necessary to access in-game content. Gaming device must be connected to the internet to download in-game content.</span>',
    subscribe: 'Subscribe to the Newsletter',
  },
  au: {
    sectionTitle: 'Subscribe',
    header: 'Get an Exclusive Amy Rose Skin!',
    text: 'Sign up by January 31, 2024 and earn a classic, redefined look for Amy Rose! Exclusive to our newsletter subscribers only, don modern Amy\'s outfit on classic Amy from Sonic Superstars! Simply enter your details and we\'ll email a code straight to your inbox with instructions on how to download the in-game content after the game is released in Fall 2023.<br><br><span class="textbox__body--italic">*Available in selected regions for a limited time only. Sonic Superstars game (sold separately) necessary to access in-game content. Gaming device must be connected to the internet to download in-game content.</span>',
    subscribe: 'Subscribe to the Newsletter',
  },
  uk: {
    sectionTitle: 'Subscribe',
    header: 'Get an Exclusive Amy Rose Skin!',
    text: 'Sign up by January 31, 2024 and earn a classic, redefined look for Amy Rose! Exclusive to our newsletter subscribers only, don modern Amy\'s outfit on classic Amy from Sonic Superstars! Simply enter your details and we\'ll email a code straight to your inbox with instructions on how to download the in-game content after the game is released in Fall 2023.<br><br><span class="textbox__body--italic">*Available in selected regions for a limited time only. Sonic Superstars game (sold separately) necessary to access in-game content. Gaming device must be connected to the internet to download in-game content.</span>',
    subscribe: 'Subscribe to the Newsletter',
  },
  fr: {
    sectionTitle: "S'abonner",
    header: "Obtiens une apparence exclusive d'Amy Rose !",
    text: 'Inscris-toi avant le 31 janvier 2024 pour obtenir une nouvelle apparence classique pour Amy Rose ! En exclusivité pour nos abonnés à la newsletter, applique la tenue moderne d\'Amy sur son apparence classique dans Sonic Superstars ! Entre tes informations et nous t\'enverrons un code par email avec les instructions de téléchargement du contenu après la sortie du jeu en automne 2023.<br><br><span class="textbox__body--italic">* Disponible uniquement dans certaines régions pour une durée limitée. Le jeu Sonic Superstars (vendu séparément) est requis pour accéder au contenu. La plateforme de jeu doit être connectée à Internet pour télécharger le contenu.</span>',
    subscribe: "S'abonner à la newsletter",
  },
  it: {
    sectionTitle: 'iscriviti',
    header: 'Ottieni un esclusivo aspetto di Amy Rose!',
    text: 'Iscriviti entro il 31 gennaio 2024, e ottieni un classico look ridisegnato di Amy Rose! Esclusivo per chi si iscrive alla nostra newsletter, indossa un abito moderno per il personaggio classico di Amy in Sonic Superstars! Inserisci i tuoi dettagli e ti invieremo un codice via e-mail con le istruzioni su come scaricare il contenuto nel gioco dopo la sua pubblicazione il prossimo autunno 2023.<br><br><span class="textbox__body--italic">* Disponibile in regioni selezionate per un periodo limitato. Per accedere ai contenuti di gioco è richiesto il gioco Sonic Superstars (venduto separatamente). Il dispositivo di gioco deve essere connesso a internet per scaricare i contenuti.</span>',
    subscribe: 'Iscriviti alla newsletter',
  },
  de: {
    sectionTitle: 'Abonnieren',
    header: 'Hol dir einen exklusiven Skin für Amy Rose!',
    text: 'Melde dich bis 31. Januar 2024 an und erhalte einen klassischen, neu überarbeiteten Look für Amy Rose! Dieses moderne Outfit für die klassische Amy aus Sonic Superstars gibt es exklusiv nur für alle, die unseren Newsletter abonnieren! Gib einfach deine Details ein und du erhältst nach Erscheinen des Spiels im Herbst 2023 einen Code mit Anweisungen zum Herunterladen der Spielinhalte direkt in dein E-Mail-Postfach.<br><br><span class="textbox__body--italic">*Für begrenzte Zeit in ausgewählten Regionen verfügbar. Zur Nutzung der Spielinhalte wird das Grundspiel Sonic Superstars (separat erhältlich) benötigt. Zum Download der Spielinhalte muss das Spielgerät über eine Internetverbindung verfügen.</span>',
    subscribe: 'Newsletter abonnieren',
  },
  es: {
    sectionTitle: 'suscribirse',
    header: '¡Consigue la apariencia exclusiva de Amy Rose!',
    text: '¡Regístrate antes del 31 de enero de 2024 y obtendrás una apariencia clásica pero redefinida para Amy Rose! ¡Exclusiva solo para suscriptores de nuestro boletín, viste a la clásica Amy de Sonic Superstars con el atuendo moderno de Amy!  Simplemente escribe tus datos y te enviaremos un código por correo electrónico con instrucciones sobre cómo descargar el contenido del juego después de su lanzamiento en otoño de 2023.<br><br><span class="textbox__body--italic">* Disponible en ciertas regiones durante un tiempo limitado. Es necesario tener Sonic Superstars (a la venta por separado) para acceder al contenido de juego. Tu dispositivo deberá estar conectado a internet para descargar el contenido de juego.</span>',
    subscribe: 'Suscríbete al boletín informativo',
  },
  br: {
    sectionTitle: 'assinar',
    header: 'Obtenha um visual exclusivo da Amy Rose!',
    text: 'Cadastre-se até 31 de janeiro de 2024 e ganhe um clássico visual repaginado da Amy Rose! Exclusivamente para assinantes do boletim informativo, vista o visual moderno da Amy na Amy clássica de Sonic Superstars! Basta inserir seus detalhes, e vamos enviar um código por e-mail com instruções de como baixar o conteúdo após o lançamento do jogo na primavera de 2023.<br><br><span class="textbox__body--italic">*Disponível em algumas regiões por tempo limitado. É necessário ter o jogo Sonic Superstars (vendido separadamente) para acessar o conteúdo. O dispositivo deve estar conectado à Internet para baixar o conteúdo do jogo.</span>',
    subscribe: 'Assine o boletim informativo',
  },
  mx: {
    sectionTitle: 'suscribirme',
    header: '¡Consigue un diseño exclusivo para Amy Rose!',
    text: '¡Regístrate antes del 31 de enero de 2024 y ganarás un aspecto clásico y rediseñado para Amy Rose! Exclusivo para los suscriptores de nuestro boletín, ¡usa el atuendo moderno de Amy con la Amy clásica de Sonic Superstars! Simplemente introduce tus datos y te enviaremos un código por correo electrónico con instrucciones para descargar el contenido del juego después de su lanzamiento en otoño de 2023.<br><br><span class="textbox__body--italic">*Disponible en las regiones seleccionadas solamente durante un tiempo limitado. El título Sonic Superstars (se vende por separado) es necesario para acceder al contenido en el juego. El dispositivo de juego debe tener conexión a Internet para descargar contenido en el juego.</span>',
    subscribe: 'SUSCRÍBETE AL BOLETÍN',
  },
};

const footer = {
  en: {
    connect: 'connect with SEGA',
    subscribe: 'Subscribe to the Newsletter',
    logos:
      '<img class="footer__logoImg footer__logoImg--segaLogo" src="images/sega_logo.png" alt="SEGA Logo"/><img class="footer__logoImg footer__logoImg--segaLogo" src="images/sonic_team.png" alt="Sonic Team Logo"/><a href="https://www.esrb.org/EPCConfirm/896/" target="_blank"><img class="footer__logoImg" src="images/esrb_privacycert.png" alt="esrb Certified"/></a><img class="footer__logoImg" src="images/esrb_sonic.svg" alt="Rate E by ESRB"/>',
    copy: '©SEGA. All rights reserved. SEGA is registered in the U.S. Patent and Trademark Office. SEGA, the SEGA logo and SONIC SUPERSTARS are either registered trademarks or trademarks of SEGA CORPORATION or its affiliates. All other trademarks, logos and copyrights are property of their respective owners.<br>©2023 The LEGO Group. LEGO, the LEGO logo, the Minifigure, and the Brick and Knob configurations are trademarks and/or copyrights of the LEGO Group. All other marks and trademarks are the property of their respective owners. All rights reserved.<br>"PS", "PS5" and "PS4" are registered trademarks or trademarks of Sony Interactive Entertainment Inc.<br>Microsoft, the Xbox Sphere mark, the Series X logo, Xbox One, and Xbox Series X are trademarks of the Microsoft group of companies.<br>Nintendo Switch is a trademark of Nintendo<br>EPIC GAMES and the EPIC STORE LOGO are trademarks or registered trademarks of EPIC GAMES INC.<br>©2023 Valve Corporation. Steam and the Steam logo are trademarks and/or registered trademarks of Valve Corporation in the U.S. and/or other countries.<br>The ESRB rating icons are registered trademarks of the Entertainment Software Association.',
    cookie: 'https://www.sega.com/cookiepolicy',
    privacy: 'https://www.sega.com/Privacy',
    cookieText: 'Cookie Policy',
    privacyText: 'Privacy Policy',
  },
  au: {
    connect: 'connect with SEGA',
    subscribe: 'Subscribe to the Newsletter',
    logos:
      '<img class="footer__logoImg footer__logoImg--segaLogo" src="images/sega_logo.png" alt="SEGA Logo"/><img class="footer__logoImg footer__logoImg--segaLogo" src="images/sonic_team.png" alt="Sonic Team Logo"/><img class="footer__logoImg" src="images/g_au_rating.jpg" alt="Rated G"/>',
    copy: '©SEGA. All rights reserved. SEGA is registered in the U.S. Patent and Trademark Office. SEGA, the SEGA logo and SONIC SUPERSTARS are either registered trademarks or trademarks of SEGA CORPORATION or its affiliates. All other trademarks, logos and copyrights are property of their respective owners.<br>©2023 The LEGO Group. LEGO, the LEGO logo, the Minifigure, and the Brick and Knob configurations are trademarks and/or copyrights of the LEGO Group. All other marks and trademarks are the property of their respective owners. All rights reserved.<br>"PS", "PS5" and "PS4" are registered trademarks or trademarks of Sony Interactive Entertainment Inc.<br>Microsoft, the Xbox Sphere mark, the Series X logo, Xbox One, and Xbox Series X are trademarks of the Microsoft group of companies.<br>Nintendo Switch is a trademark of Nintendo<br>EPIC GAMES and the EPIC STORE LOGO are trademarks or registered trademarks of EPIC GAMES INC.<br>©2023 Valve Corporation. Steam and the Steam logo are trademarks and/or registered trademarks of Valve Corporation in the U.S. and/or other countries.',
    cookie: 'https://www.sega.co.uk/cookiepolicy',
    privacy: 'https://www.sega.co.uk/Privacy',
    cookieText: 'Cookie Policy',
    privacyText: 'Privacy Policy',
  },
  uk: {
    connect: 'connect with SEGA',
    subscribe: 'Subscribe to the Newsletter',
    logos:
      '<img class="footer__logoImg footer__logoImg--segaLogo" src="images/sega_logo.png" alt="SEGA Logo"/><img class="footer__logoImg footer__logoImg--segaLogo" src="images/sonic_team.png" alt="Sonic Team Logo"/><img class="footer__logoImg" src="images/pegi_3.jpg" alt="PEGI 3"/>',
    copy: '©SEGA. All rights reserved. SEGA is registered in the U.S. Patent and Trademark Office. SEGA, the SEGA logo and SONIC SUPERSTARS are either registered trademarks or trademarks of SEGA CORPORATION or its affiliates. All other trademarks, logos and copyrights are property of their respective owners.<br>©2023 The LEGO Group. LEGO, the LEGO logo, the Minifigure, and the Brick and Knob configurations are trademarks and/or copyrights of the LEGO Group. All other marks and trademarks are the property of their respective owners. All rights reserved.<br>"PS", "PS5" and "PS4" are registered trademarks or trademarks of Sony Interactive Entertainment Inc.<br>Microsoft, the Xbox Sphere mark, the Series X logo, Xbox One, and Xbox Series X are trademarks of the Microsoft group of companies.<br>Nintendo Switch is a trademark of Nintendo<br>EPIC GAMES and the EPIC STORE LOGO are trademarks or registered trademarks of EPIC GAMES INC.<br>©2023 Valve Corporation. Steam and the Steam logo are trademarks and/or registered trademarks of Valve Corporation in the U.S. and/or other countries.',
    cookie: 'http://www.sega.co.uk/cookiepolicy',
    privacy: 'http://www.sega.co.uk/Privacy',
    cookieText: 'Cookie Policy',
    privacyText: 'Privacy Policy',
  },
  fr: {
    connect: 'Se connecter avec SEGA',
    subscribe: "S'abonner à la newsletter",
    logos:
      '<img class="footer__logoImg footer__logoImg--segaLogo" src="images/sega_logo.png" alt="SEGA Logo"/><img class="footer__logoImg footer__logoImg--segaLogo" src="images/sonic_team.png" alt="Sonic Team Logo"/><img class="footer__logoImg" src="images/pegi_3.jpg" alt="PEGI 3"/>',
    copy: '©SEGA. All rights reserved. SEGA is registered in the U.S. Patent and Trademark Office. SEGA, the SEGA logo and SONIC SUPERSTARS are either registered trademarks or trademarks of SEGA CORPORATION or its affiliates. All other trademarks, logos and copyrights are property of their respective owners.<br>©2023 The LEGO Group. LEGO, the LEGO logo, the Minifigure, and the Brick and Knob configurations are trademarks and/or copyrights of the LEGO Group. All other marks and trademarks are the property of their respective owners. All rights reserved.<br>"PS", "PS5" and "PS4" are registered trademarks or trademarks of Sony Interactive Entertainment Inc.<br>Microsoft, the Xbox Sphere mark, the Series X logo, Xbox One, and Xbox Series X are trademarks of the Microsoft group of companies.<br>Nintendo Switch is a trademark of Nintendo<br>EPIC GAMES and the EPIC STORE LOGO are trademarks or registered trademarks of EPIC GAMES INC.<br>©2023 Valve Corporation. Steam and the Steam logo are trademarks and/or registered trademarks of Valve Corporation in the U.S. and/or other countries.',
    cookie: 'https://www.sega.fr/cookiepolicy',
    privacy: 'http://www.sega.fr/Privacy',
    cookieText: 'Politique relative aux cookies',
    privacyText: 'Politique de confidentialité',
  },
  it: {
    connect: 'Contatta SEGA',
    subscribe: 'Iscriviti alla newsletter',
    logos:
      '<img class="footer__logoImg footer__logoImg--segaLogo" src="images/sega_logo.png" alt="SEGA Logo"/><img class="footer__logoImg footer__logoImg--segaLogo" src="images/sonic_team.png" alt="Sonic Team Logo"/><img class="footer__logoImg" src="images/pegi_3.jpg" alt="PEGI 3"/>',
    copy: '©SEGA. All rights reserved. SEGA is registered in the U.S. Patent and Trademark Office. SEGA, the SEGA logo and SONIC SUPERSTARS are either registered trademarks or trademarks of SEGA CORPORATION or its affiliates. All other trademarks, logos and copyrights are property of their respective owners.<br>©2023 The LEGO Group. LEGO, the LEGO logo, the Minifigure, and the Brick and Knob configurations are trademarks and/or copyrights of the LEGO Group. All other marks and trademarks are the property of their respective owners. All rights reserved.<br>"PS", "PS5" and "PS4" are registered trademarks or trademarks of Sony Interactive Entertainment Inc.<br>Microsoft, the Xbox Sphere mark, the Series X logo, Xbox One, and Xbox Series X are trademarks of the Microsoft group of companies.<br>Nintendo Switch is a trademark of Nintendo<br>EPIC GAMES and the EPIC STORE LOGO are trademarks or registered trademarks of EPIC GAMES INC.<br>©2023 Valve Corporation. Steam and the Steam logo are trademarks and/or registered trademarks of Valve Corporation in the U.S. and/or other countries.',
    cookie: 'http://www.sega-italia.com/cookiepolicy',
    privacy: 'http://www.sega-italia.com/Privacy',
    cookieText: 'Politica sui cookie',
    privacyText: 'Informativa sulla privacy',
  },
  de: {
    connect: 'Neuigkeiten von SEGA',
    subscribe: 'Newsletter abonnieren',
    logos:
      '<img class="footer__logoImg footer__logoImg--segaLogo" src="images/sega_logo.png" alt="SEGA Logo"/><img class="footer__logoImg footer__logoImg--segaLogo" src="images/sonic_team.png" alt="Sonic Team Logo"/><img class="footer__logoImg" src="images/usk_6.png" alt="USK 6"/>',
    copy: '©SEGA. All rights reserved. SEGA is registered in the U.S. Patent and Trademark Office. SEGA, the SEGA logo and SONIC SUPERSTARS are either registered trademarks or trademarks of SEGA CORPORATION or its affiliates. All other trademarks, logos and copyrights are property of their respective owners.<br>©2023 The LEGO Group. LEGO, the LEGO logo, the Minifigure, and the Brick and Knob configurations are trademarks and/or copyrights of the LEGO Group. All other marks and trademarks are the property of their respective owners. All rights reserved.<br>"PS", "PS5" and "PS4" are registered trademarks or trademarks of Sony Interactive Entertainment Inc.<br>Microsoft, the Xbox Sphere mark, the Series X logo, Xbox One, and Xbox Series X are trademarks of the Microsoft group of companies.<br>Nintendo Switch is a trademark of Nintendo<br>EPIC GAMES and the EPIC STORE LOGO are trademarks or registered trademarks of EPIC GAMES INC.<br>©2023 Valve Corporation. Steam and the Steam logo are trademarks and/or registered trademarks of Valve Corporation in the U.S. and/or other countries.',
    cookie: 'https://privacy.sega.com/de/sega-cookie-richtlinie',
    privacy: 'http://www.sega.de/Privacy',
    cookieText: 'Cookie-Richtlinie',
    privacyText: 'Datenschutzrichtlinie',
  },
  es: {
    connect: 'Conecta con SEGA',
    subscribe: 'Suscríbete al boletín informativo',
    logos:
      '<img class="footer__logoImg footer__logoImg--segaLogo" src="images/sega_logo.png" alt="SEGA Logo"/><img class="footer__logoImg footer__logoImg--segaLogo" src="images/sonic_team.png" alt="Sonic Team Logo"/><img class="footer__logoImg" src="images/pegi_3.jpg" alt="PEGI 3"/>',
    copy: '©SEGA. All rights reserved. SEGA is registered in the U.S. Patent and Trademark Office. SEGA, the SEGA logo and SONIC SUPERSTARS are either registered trademarks or trademarks of SEGA CORPORATION or its affiliates. All other trademarks, logos and copyrights are property of their respective owners.<br>©2023 The LEGO Group. LEGO, the LEGO logo, the Minifigure, and the Brick and Knob configurations are trademarks and/or copyrights of the LEGO Group. All other marks and trademarks are the property of their respective owners. All rights reserved.<br>"PS", "PS5" and "PS4" are registered trademarks or trademarks of Sony Interactive Entertainment Inc.<br>Microsoft, the Xbox Sphere mark, the Series X logo, Xbox One, and Xbox Series X are trademarks of the Microsoft group of companies.<br>Nintendo Switch is a trademark of Nintendo<br>EPIC GAMES and the EPIC STORE LOGO are trademarks or registered trademarks of EPIC GAMES INC.<br>©2023 Valve Corporation. Steam and the Steam logo are trademarks and/or registered trademarks of Valve Corporation in the U.S. and/or other countries.',
    cookie: 'http://www.sega.es/cookiepolicy',
    privacy: 'http://www.sega.es/Privacy',
    cookieText: 'Política de cookies',
    privacyText: 'Política de privacidad',
  },
  br: {
    connect: 'Conecte-se com a SEGA',
    subscribe: 'Assine o boletim informativo',
    logos:
      '<img class="footer__logoImg footer__logoImg--segaLogo" src="images/sega_logo.png" alt="SEGA Logo"/><img class="footer__logoImg footer__logoImg--segaLogo" src="images/sonic_team.png" alt="Sonic Team Logo"/><img class="footer__logoImg" src="images/br_rating_L.png" alt="Rated L"/>',
    copy: '©SEGA. All rights reserved. SEGA is registered in the U.S. Patent and Trademark Office. SEGA, the SEGA logo and SONIC SUPERSTARS are either registered trademarks or trademarks of SEGA CORPORATION or its affiliates. All other trademarks, logos and copyrights are property of their respective owners.<br>©2023 The LEGO Group. LEGO, the LEGO logo, the Minifigure, and the Brick and Knob configurations are trademarks and/or copyrights of the LEGO Group. All other marks and trademarks are the property of their respective owners. All rights reserved.<br>"PS", "PS5" and "PS4" are registered trademarks or trademarks of Sony Interactive Entertainment Inc.<br>Microsoft, the Xbox Sphere mark, the Series X logo, Xbox One, and Xbox Series X are trademarks of the Microsoft group of companies.<br>Nintendo Switch is a trademark of Nintendo<br>EPIC GAMES and the EPIC STORE LOGO are trademarks or registered trademarks of EPIC GAMES INC.<br>©2023 Valve Corporation. Steam and the Steam logo are trademarks and/or registered trademarks of Valve Corporation in the U.S. and/or other countries.',
    cookie: 'https://privacy.sega.com/en/sega-cookie-policy',
    privacy: 'https://privacy.sega.com/en/sega-of-america-inc-privacy-policy',
    cookieText: 'Política de Cookies',
    privacyText: 'Política de Privacidade',
  },
  mx: {
    connect: 'Conecta con SEGA',
    subscribe: 'Suscríbete al boletín',
    logos:
      '<img class="footer__logoImg footer__logoImg--segaLogo" src="images/sega_logo.png" alt="SEGA Logo"/><img class="footer__logoImg footer__logoImg--segaLogo" src="images/sonic_team.png" alt="Sonic Team Logo"/><img class="footer__logoImg" src="images/esrb_sonic.svg" alt="Rated E"/>',
    copy: '©SEGA. All rights reserved. SEGA is registered in the U.S. Patent and Trademark Office. SEGA, the SEGA logo and SONIC SUPERSTARS are either registered trademarks or trademarks of SEGA CORPORATION or its affiliates. All other trademarks, logos and copyrights are property of their respective owners.<br>©2023 The LEGO Group. LEGO, the LEGO logo, the Minifigure, and the Brick and Knob configurations are trademarks and/or copyrights of the LEGO Group. All other marks and trademarks are the property of their respective owners. All rights reserved.<br>"PS", "PS5" and "PS4" are registered trademarks or trademarks of Sony Interactive Entertainment Inc.<br>Microsoft, the Xbox Sphere mark, the Series X logo, Xbox One, and Xbox Series X are trademarks of the Microsoft group of companies.<br>Nintendo Switch is a trademark of Nintendo<br>EPIC GAMES and the EPIC STORE LOGO are trademarks or registered trademarks of EPIC GAMES INC.<br>©2023 Valve Corporation. Steam and the Steam logo are trademarks and/or registered trademarks of Valve Corporation in the U.S. and/or other countries.',
    cookie: 'http://www.sega.es/cookiepolicy',
    privacy: 'http://www.sega.es/Privacy',
    cookieText: 'Política de cookies',
    privacyText: 'Política de privacidad',
  },
};

function heroChange(language) {
  const country = document.querySelector(`[data-country="${language}"]`);
  country.classList.add('noFlag');
  document.querySelector('.eflags__selected .eflags__text').textContent =
    hero[language].flag;
  document.querySelector('.navigation__media h2').textContent =
    hero[language].mediaNav;
  document.querySelector('.navigation__features h2').textContent =
    hero[language].featuresNav;
  document.querySelector('.navigation__characters h2').textContent =
    hero[language].characterNav;
  document.querySelector('.navigation__newsletter h2').textContent =
    hero[language].newsletter;
  document.querySelector('.navigation__newsletter h5').textContent =
    hero[language].newsletter;
  document.querySelector('.navigation__newsletter h2').title =
    hero[language].newsletter.toUpperCase();
  document.querySelector('.navigation__newsletter h5').title =
    hero[language].newsletter.toUpperCase();
  document.querySelector('.hero__callout').innerHTML = hero[language].available;
  document.querySelector('.loader__text').textContent = hero[language].loading;
  document.querySelector('.hero__watch h5').textContent =
    hero[language].trailer;
  document.querySelector('.hero__purchase h5').textContent =
    hero[language].purchase;
}

function mediaChange(language) {
  document.querySelector('.media__text').textContent =
    media[language].sectionTitle;
  document.querySelector('.heroTrailer').href = media[language].multiplayer;
  document.querySelector('.announceTrailer').href =
    media[language].announcement;
  document.querySelector('.legoTrailer').href = media[language].lego;
  document.querySelector('.multiplayerTrailer').href =
    media[language].multiplayer;
  document.querySelector('.trioTrailer').href = media[language].trio;
}

function featureChange(language) {
  document.querySelector('.features__text').textContent =
    features[language].sectionTitle;
  document.querySelector('.feature__title--1').textContent =
    features[language].featureTitle_1;
  document.querySelector('.features__text--1').innerHTML =
    features[language].featureText_1;
  document.querySelector('.feature__title--2').textContent =
    features[language].featureTitle_2;
  document.querySelector('.features__text--2').innerHTML =
    features[language].featureText_2;
  document.querySelector('.feature__title--3').textContent =
    features[language].featureTitle_3;
  document.querySelector('.features__text--3').innerHTML =
    features[language].featureText_3;
  document.querySelector('.feature__title--4').textContent =
    features[language].featureTitle_4;
  document.querySelector('.features__text--4').innerHTML =
    features[language].featureText_4;
  document.querySelector('.feature__title--5').textContent =
    features[language].featureTitle_5;
  document.querySelector('.features__text--5').innerHTML =
    features[language].featureText_5;
}

function signupChange(language) {
  document.querySelector('.subscribe__text').textContent =
    signup[language].sectionTitle;
  document.querySelector('.signup__title--1').textContent =
    signup[language].header;
  document.querySelector('.signup__text--1').innerHTML = signup[language].text;
  document.querySelector('.incentive__btn h5').textContent =
    signup[language].subscribe;
}

function footerChange(language) {
  document.querySelector('.footer__connect').textContent =
    footer[language].connect;
  document.querySelector('.footer__newsletterButton').textContent =
    footer[language].subscribe;
  document.querySelector('.rating_icons').innerHTML = footer[language].logos;
  document.querySelector('.footer__copy').innerHTML = footer[language].copy;
  document.querySelector('.cookie').href = footer[language].cookie;
  document.querySelector('.privacy').href = footer[language].privacy;
  document.querySelector('.cookie').textContent = footer[language].cookieText;
  document.querySelector('.privacy').textContent = footer[language].privacyText;
}

const langHTML = {
  en: 'en-US',
  uk: 'en-UK',
  au: 'en-AU',
  fr: 'fr-FR',
  it: 'it-IT',
  de: 'de-DE',
  es: 'es-ES',
  br: 'pt-BR',
  mx: 'mx-ES',
};

const language = Cookies.get('lang');
document.querySelector('html').lang = langHTML[language.toLowerCase()];

// heroChange(language);
// mediaChange(language);
// featureChange(language);
// signupChange(language);
// footerChange(language);
