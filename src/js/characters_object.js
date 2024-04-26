import Cookies from 'js-cookie';

const characterImages = {
  amy: {
    image: 'images/amy.png',
    thumb_on: 'images/amy_on.jpg',
    thumb_off: 'imgaes/amy_off.jpg',
  },
  eggman: {
    image: 'images/eggman.png',
    thumb_on: 'images/eggman_on.jpg',
    thumb_off: 'imgaes/eggman_off.jpg',
  },
  fangs: {
    image: 'images/fangs.png',
    thumb_on: 'images/fangs_on.jpg',
    thumb_off: 'imgaes/fangs_off.jpg',
  },
  knuckles: {
    image: 'images/knuckles.png',
    thumb_on: 'images/knuckles_on.jpg',
    thumb_off: 'imgaes/knuckles_off.jpg',
  },
  sonic: {
    image: 'images/sonic.png',
    thumb_on: 'images/sonic_on.jpg',
    thumb_off: 'imgaes/sonic_off.jpg',
  },
  tails: {
    image: 'images/tails.png',
    thumb_on: 'images/tails_on.jpg',
    thumb_off: 'imgaes/tails_off.jpg',
  },
  trip: {
    image: 'images/trip.png',
    thumb_on: 'images/trip_on.jpg',
    thumb_off: 'imgaes/trip_off.jpg',
  },
};

const characterLinks = {
  en: {
    title: 'characters',
    amy: {
      name: 'Amy',
      desc: 'Still learning to use her own surprising strength, Amy is a pink hedgehog who wields the huge “Piko Piko Hammer.” She has a strong sense of justice and will always follow her heart to protect the weak, even though that often means putting herself in danger.',
    },
    eggman: {
      name: 'Eggman',
      desc: 'An evil genius with an IQ of 300, Dr. Eggman wants to expand his Eggman Empire through world domination. With armies of robots at his disposal, he is a constant threat and is always looking to bolster his power through stealing objects like the Chaos Emeralds. Perhaps this is what has drawn him to the Northstar Islands...',
    },
    fangs: {
      name: 'Fang',
      desc: 'Fang is a springy jerboa that is light on his feet and is always looking for the next big score. A bounty hunter by trade, Fang the Hunter has been known by many different names over the years, likely due to his “WANTED” status with the authorities. Always trying to stay one step ahead, he’s constantly modifying and upgrading his primary mode of transportation, the Marvelous Queen.',
    },
    knuckles: {
      name: 'Knuckles',
      desc: 'Knuckles the Echidna is said to be the last of his kind and is bound by duty to protect the Master Emerald on Angel Island. He is known for his immense strength and can use his spiked fists to smash enemies, climb walls, and even destroy solid rock. Gliding is another of his abilities, allowing him to quickly traverse the varied environments of his island and the world beyond.',
    },
    sonic: {
      name: 'Sonic',
      desc: "The fastest thing alive! Sonic the Hedgehog runs at mach speeds and is quick to engage those that threaten his friends, his freedom, or the natural world around him. He loves to relax when he's not on an adventure but will jump at the chance to thwart any evil plot from Dr. Eggman.",
    },
    tails: {
      name: 'Tails',
      desc: "Miles “Tails” Prower is an energetic fox, a genius mechanic, and the pilot of Sonic's plane, the “Tornado.” Once bullied for having an extra tail, he has since found strength in his uniqueness: by spinning his two tails together, he can propel himself forward and even fly short distances in the air! One of Sonic's closest friends, Tails is the best sidekick anyone could ask for.  ",
    },
    trip: {
      name: 'Trip',
      desc: 'Not much is known yet about Trip, the mysterious girl first encountered by Fang on the Northstar Islands. While a bit clumsy, Trip is heavily armored and has been enlisted by Fang and Dr. Eggman to protect and guide them around the wonders of this uncharted region.',
    },
  },
  au: {
    title: 'characters',
    amy: {
      name: 'Amy',
      desc: 'Still learning to use her own surprising strength, Amy is a pink hedgehog who wields the huge “Piko Piko Hammer.” She has a strong sense of justice and will always follow her heart to protect the weak, even though that often means putting herself in danger.',
    },
    eggman: {
      name: 'Eggman',
      desc: 'An evil genius with an IQ of 300, Dr. Eggman wants to expand his Eggman Empire through world domination. With armies of robots at his disposal, he is a constant threat and is always looking to bolster his power through stealing objects like the Chaos Emeralds. Perhaps this is what has drawn him to the Northstar Islands...',
    },
    fangs: {
      name: 'Fang',
      desc: 'Fang is a springy jerboa that is light on his feet and is always looking for the next big score. A bounty hunter by trade, Fang the Hunter has been known by many different names over the years, likely due to his “WANTED” status with the authorities. Always trying to stay one step ahead, he’s constantly modifying and upgrading his primary mode of transportation, the Marvelous Queen.',
    },
    knuckles: {
      name: 'Knuckles',
      desc: 'Knuckles the Echidna is said to be the last of his kind and is bound by duty to protect the Master Emerald on Angel Island. He is known for his immense strength and can use his spiked fists to smash enemies, climb walls, and even destroy solid rock. Gliding is another of his abilities, allowing him to quickly traverse the varied environments of his island and the world beyond.',
    },
    sonic: {
      name: 'Sonic',
      desc: "The fastest thing alive! Sonic the Hedgehog runs at mach speeds and is quick to engage those that threaten his friends, his freedom, or the natural world around him. He loves to relax when he's not on an adventure but will jump at the chance to thwart any evil plot from Dr. Eggman.",
    },
    tails: {
      name: 'Tails',
      desc: "Miles “Tails” Prower is an energetic fox, a genius mechanic, and the pilot of Sonic's plane, the “Tornado.” Once bullied for having an extra tail, he has since found strength in his uniqueness: by spinning his two tails together, he can propel himself forward and even fly short distances in the air! One of Sonic's closest friends, Tails is the best sidekick anyone could ask for.  ",
    },
    trip: {
      name: 'Trip',
      desc: 'Not much is known yet about Trip, the mysterious girl first encountered by Fang on the Northstar Islands. While a bit clumsy, Trip is heavily armored and has been enlisted by Fang and Dr. Eggman to protect and guide them around the wonders of this uncharted region.',
    },
  },
  uk: {
    title: 'characters',
    amy: {
      name: 'Amy',
      desc: 'Still learning to use her own surprising strength, Amy is a pink hedgehog who wields the huge “Piko Piko Hammer.” She has a strong sense of justice and will always follow her heart to protect the weak, even though that often means putting herself in danger.',
    },
    eggman: {
      name: 'Eggman',
      desc: 'An evil genius with an IQ of 300, Dr. Eggman wants to expand his Eggman Empire through world domination. With armies of robots at his disposal, he is a constant threat and is always looking to bolster his power through stealing objects like the Chaos Emeralds. Perhaps this is what has drawn him to the Northstar Islands...',
    },
    fangs: {
      name: 'Fang',
      desc: 'Fang is a springy jerboa that is light on his feet and is always looking for the next big score. A bounty hunter by trade, Fang the Hunter has been known by many different names over the years, likely due to his “WANTED” status with the authorities. Always trying to stay one step ahead, he’s constantly modifying and upgrading his primary mode of transportation, the Marvelous Queen.',
    },
    knuckles: {
      name: 'Knuckles',
      desc: 'Knuckles the Echidna is said to be the last of his kind and is bound by duty to protect the Master Emerald on Angel Island. He is known for his immense strength and can use his spiked fists to smash enemies, climb walls, and even destroy solid rock. Gliding is another of his abilities, allowing him to quickly traverse the varied environments of his island and the world beyond.',
    },
    sonic: {
      name: 'Sonic',
      desc: "The fastest thing alive! Sonic the Hedgehog runs at mach speeds and is quick to engage those that threaten his friends, his freedom, or the natural world around him. He loves to relax when he's not on an adventure but will jump at the chance to thwart any evil plot from Dr. Eggman.",
    },
    tails: {
      name: 'Tails',
      desc: "Miles “Tails” Prower is an energetic fox, a genius mechanic, and the pilot of Sonic's plane, the “Tornado.” Once bullied for having an extra tail, he has since found strength in his uniqueness: by spinning his two tails together, he can propel himself forward and even fly short distances in the air! One of Sonic's closest friends, Tails is the best sidekick anyone could ask for.  ",
    },
    trip: {
      name: 'Trip',
      desc: 'Not much is known yet about Trip, the mysterious girl first encountered by Fang on the Northstar Islands. While a bit clumsy, Trip is heavily armored and has been enlisted by Fang and Dr. Eggman to protect and guide them around the wonders of this uncharted region.',
    },
  },
  fr: {
    title: ' PErSONnAgES',
    amy: {
      name: 'Amy',
      desc: "Ne maîtrisant pas encore totalement sa propre force, Amy est une hérissonne rose qui brandit le « marteau géant Piko Piko ». Elle possède un grand sens de la justice et suit toujours son cœur pour protéger les faibles, même si cela l'oblige parfois à se mettre en danger. ",
    },
    eggman: {
      name: 'Eggman',
      desc: 'Génie machiavélique dont le QI dépasse 300, Dr. Eggman souhaite étendre son Eggmanlande en conquérant le monde entier. Avec ses armées de robots serviles, il constitue une menace perpétuelle et cherche à augmenter son pouvoir en dérobant de puissants artéfacts tels que les Chaos Emeralds. C’est peut-être ce qui l’a attiré sur les Northstar Islands…  ',
    },
    fangs: {
      name: 'Fang',
      desc: 'Fang est une gerboise aussi rapide qu’agile, et toujours en quête de son prochain gros coup. Chasseur de prime expérimenté, Fang the Hunter a eu de nombreux noms différents au fil des ans, probablement car il est recherché par les autorités. Il essaie toujours de garder un coup d’avance, et il améliore sans cesse son principal moyen de transport : le Marvelous Queen.   ',
    },
    knuckles: {
      name: 'Knuckles',
      desc: "Knuckles the Echidna est le dernier représentant de son espèce, et a l'importante mission de protéger la Master Emerald sur Angel Island. Sa force immense est légendaire, et ses poings piquants lui permettent de pulvériser les ennemis, de grimper sur les parois et même de briser la pierre. Il peut également planer et ainsi traverser sans peine les différents environnements de son île et du monde qui l'entoure. ",
    },
    sonic: {
      name: 'Sonic',
      desc: "La créature la plus rapide du monde ! Sonic the Hedgehog court à la vitesse supersonique et n'attend pas pour combattre ceux qui menacent ses amis, sa liberté ou le monde qui l'entoure. Quand il n'est pas parti à l'aventure, il adore se détendre, mais n'hésite pas devant la moindre occasion de saboter les plans diaboliques du Dr. Eggman. ",
    },
    tails: {
      name: 'Tails',
      desc: 'Miles "Tails" Prower est un renard débrouillard et un mécano talentueux, il pilote aussi l\'avion de Sonic, le « Tornado ». Autrefois sujet des moqueries à cause de ses deux queues, il a désormais trouvé sa force dans sa singularité : en faisant pivoter ses deux queues, il arrive à se soulever dans les airs et même à voler sur une courte distance ! Un des amis les plus intimes de Sonic, Tails est le meilleur compagnon qu\'on puisse espérer.  ',
    },
    trip: {
      name: 'Trip',
      desc: 'On sait peu de choses sur Trip, la mystérieuse jeune fille que Fang a rencontrée sur les Northstar Islands. Bien qu’un peu maladroite, Trip bénéficie d’une solide armure et a été engagée par Fang et le Dr. Eggman pour les protéger et les guider à travers les merveilles de cette région inexplorée.',
    },
  },
  it: {
    title: 'PErSONaGgI',
    amy: {
      name: 'Amy',
      desc: 'Amy è un porcospino rosa che sta ancora imparando a gestire la sua sorprendente forza. Brandisce il "martello Piko Piko". Ha un fortissimo senso della giustizia e segue sempre il suo cuore, proteggendo i deboli anche a costo di mettersi in pericolo. ',
    },
    eggman: {
      name: 'Eggman',
      desc: "Un genio del male con un QI di 300. Il Dr. Eggman vuole espandere Eggmanlandia dominando il mondo. Con eserciti di robot al suo servizio, è una costante minaccia che cerca sempre di rubare oggetti come i Chaos Emerald per diventare più potente. Forse è questo che l'ha portato alle Northstar Islands...  ",
    },
    fangs: {
      name: 'Fang',
      desc: 'Fang è uno scattante jerboa, sempre in cerca del suo prossimo colpo. Fang the Hunter è un cacciatore di taglie, che ha adottato vari nomi nel corso degli anni, forse per eludere il suo status di "RICERCATO" con le autorità. Cerca sempre di essere un passo avanti, motivo per cui modifica e potenzia costantemente la Marvelous Queen, il suo mezzo di trasporto preferito.   ',
    },
    knuckles: {
      name: 'Knuckles',
      desc: "Knuckles the Echidna è descritto come l'ultimo della sua specie e ha il compito di proteggere il Master Emerald su Angel Island. Noto per la sua immensa forza, può usare i suoi pugni borchiati per sconfiggere nemici, scalare muri e distruggere le rocce. È anche in grado di planare, attraversando rapidamente le zone della sua isola e del resto del mondo. ",
    },
    sonic: {
      name: 'Sonic',
      desc: "L'essere più veloce del mondo! Sonic the Hedgehog corre alla velocità del suono ed è sempre pronto a battersi contro chi minaccia i suoi amici, la sua libertà o la natura che lo circonda. Quando non vive avventure ama il relax, ma non perde occasione di sventare i diabolici piani del Dr. Eggman. ",
    },
    tails: {
      name: 'Tails',
      desc: 'Miles "Tails" Prower è una volpe piena di energie, un geniale meccanico e il pilota dell\'aereo di Sonic, il "Tornado". Una volta veniva preso in giro per la sua coda in più, ma ha poi scoperto la forza della sua unicità. Facendo roteare le sue due code, riesce a muoversi più velocemente e persino a volare per brevi distanze! Tails è uno dei migliori amici di Sonic, nonché la migliore spalla che si possa desiderare.  ',
    },
    trip: {
      name: 'Trip',
      desc: "Non sappiamo ancora molto di Trip, la misteriosa ragazza incontrata da Fang sulle Northstar Islands. È un po' maldestra, ma Trip è ben corazzata ed è stata arruolata da Fang e dal Dr. Eggman per proteggerli e guidarli tra le meraviglie di questa regione inesplorata.",
    },
  },
  de: {
    title: 'CHaRAkTeRE',
    amy: {
      name: 'Amy',
      desc: 'Diese rosarote Igelin mit dem riesigen „Piko Piko Hammer“ lernt noch, wie sie mit ihrer teils überraschenden Stärke umgeht. Mit ihrem unbeirrbaren Sinn für Gerechtigkeit und ihrem starken Willen setzt sie sich stets ein, um Schwächere zu beschützen, auch wenn sie dabei selbst in Gefahr gerät. ',
    },
    eggman: {
      name: 'Eggman',
      desc: 'Dieser Bösewicht mit einem IQ von 300 möchte sein Eggman Empire ausbreiten und die Weltherrschaft an sich reißen. Mit seiner Roboterarmee ist er eine dauerhafte Bedrohung. Gleichzeitig versucht er ständig, seine Macht durch den Diebstahl von Artefakten wie den Chaos Emeralds noch zu vergrößern. Vielleicht ist es das, was ihn zu den Northstar Islands geführt hat ...  ',
    },
    fangs: {
      name: 'Fang',
      desc: 'Fang ist eine leichtfüßige Springmaus, immer in Bewegung und immer auf der Suche nach der nächsten Beute. Als Kopfgeldjäger hat Fang the Hunter über die Jahre schon verschiedenste Namen getragen – vermutlich, weil jeder seiner Namen früher oder später auf der Liste gesuchter Verbrecher landet. Er will immer einen Schritt voraus sein und so verbessert und modifiziert er ständig sein primäres Fortbewegungsmittel, die Marvelous Queen.   ',
    },
    knuckles: {
      name: 'Knuckles',
      desc: 'Knuckles the Echidna ist angeblich der Letzte seiner Art und es ist seine Pflicht, den Master Emerald auf Angel Island zu hüten. Er ist für seine unheimliche Kraft bekannt und kann mit seinen stachelbesetzten Fäusten Gegner kurz und klein schlagen, Wände hochklettern und sogar massive Felsen zertrümmern. Außerdem kann er gleiten und auf diese Weise schnell in den verschiedenen Gebieten seiner Insel und in der weiten Welt umherreisen. ',
    },
    sonic: {
      name: 'Sonic',
      desc: ' Das schnellste Wesen der Welt! Sonic the Hedgehog düst mit Überschallgeschwindigkeit durch die Welt und zögert nicht, sich allen zu stellen, die seine Freunde, seine Freiheit oder die Natur um ihn herum bedrohen. Wenn er nicht gerade auf einem spannenden Abenteuer ist, entspannt er gerne – ist aber jederzeit bereit, Dr. Eggmans neuste böse Pläne zu durchkreuzen. ',
    },
    tails: {
      name: 'Tails',
      desc: 'Miles „Tails“ Prower ist ein tatkräftiger Fuchs, ein Mechanikgenie und der Pilot von Sonics Flugzeug, dem „Tornado“. Nachdem er einst wegen seiner zwei Schwänze gehänselt wurde, hat er diese Eigenart inzwischen als Stärke erkannt, denn wenn er seine Schwänze schnell im Kreis dreht, kann er sich vorwärts katapultieren und sogar kurze Strecken fliegen! Tails ist einer von Sonics engsten Freunden und die beste rechte Hand, die man sich nur wünschen könnte.  ',
    },
    trip: {
      name: 'Trip',
      desc: 'Über Trip, das mysteriöse Mädchen, das Fang auf den Northstar Islands traf, ist noch nicht viel bekannt. Sie scheint etwas tollpatschig, ist aber schwer gepanzert und wurde von Fang und Dr. Eggman angeheuert, um ihnen in dieser noch unbekannten Region als Leibwache und Reiseführerin zu dienen.',
    },
  },
  es: {
    title: 'PErSOnAJeS',
    amy: {
      name: 'Amy',
      desc: 'Aún está aprendiendo a usar su extraordinaria fuerza. Amy es una eriza de color rosa que lleva un martillo enorme, el martillo Piko Piko. Tiene un fuerte sentido de la justicia y un gran corazón, lo que la lleva siempre a proteger a los más débiles, aunque eso a menudo signifique ponerse en peligro. ',
    },
    eggman: {
      name: 'Eggman',
      desc: 'Un genio malvado con un coeficiente intelectual de 300. El Dr. Eggman quiere expandir el "Imperio de Eggman" por todo el mundo y por ello quiere dominar el planeta entero. Tiene a su disposición un ejército entero de robots, por lo que es un peligro constante y siempre está dispuesto a aumentar su poder robando objetos como las Chaos Emeralds. Puede que sea esto lo que lo ha llevado a viajar hasta las Northstar Islands...  ',
    },
    fangs: {
      name: 'Fang',
      desc: 'Fang es un jerbo muy rápido que siempre está buscando dar su próximo golpe. Es un cazarrecompensas profesional y ha tenido varios aliases distintos durante su carrera, muy probablemente debido a los carteles de "SE BUSCA" en los que aparece su cara. Siempre intenta evitar que lo capturen, por lo que cambia y mejora su modo de transporte frecuentemente, la Marvelous Queen.   ',
    },
    knuckles: {
      name: 'Knuckles',
      desc: 'Dicen que Knuckles the Echidna es el último superviviente de su especie y su deber es proteger la Master Emerald en Angel Island. Es conocido por su inmensa fuerza y puede usar sus puños con pinchos para machacar a los enemigos, escalar por las paredes y destruir rocas. También puede sobrevolar, lo que le permite desplazarse rápidamente por distintos escenarios de la isla y del mundo en general. ',
    },
    sonic: {
      name: 'Sonic',
      desc: '¡El erizo más rápido del mundo! Sonic the Hedgehog corre a velocidades supersónicas y no duda en enfrentarse a todo aquel que amenace a sus amigos, su libertad o el mundo natural que lo rodea. Le encanta relajarse cuando no está por ahí corriendo aventuras, pero jamás dejará pasar la oportunidad de desbaratar los maléficos planes del Dr. Eggman. ',
    },
    tails: {
      name: 'Tails',
      desc: 'Miles "Tails" Prower es un zorrito muy vivo y un genio de la mecánica, y el piloto del "Tornado", el avión de Sonic. Hubo un tiempo en que se burlaban de él por tener dos colitas, pero eso es lo que lo hace un zorrito único. Además, cuando las hace girar, puede volar por el aire durante un ratito. Tails es uno de los mejores amigos de Sonic y el mejor compañero de aventuras que podía pedir el erizo.  ',
    },
    trip: {
      name: 'Trip',
      desc: 'Aún no se sabe mucho sobre Trip, la chica misteriosa que se encuentra con Fang en las Northstar Islands. Es un poco torpe, pero Trip va armada hasta los dientes y ha sido contratada por Fang y el Dr. Eggman para que los proteja y los guíe en esta región aún por explorar.',
    },
  },
  br: {
    title: 'Personagens',
    amy: {
      name: 'Amy',
      desc: 'Amy, que ainda está aprendendo a usar sua força surpreendente, é um ouriço cor-de-rosa que empunha o gigante martelo Piko Piko. Ela tem um senso de justiça inabalável e sempre segue o que o coração diz para proteger os inocentes, mesmo que isso signifique arriscar a própria vida. ',
    },
    eggman: {
      name: 'Eggman',
      desc: 'Um gênio do mal com 300 de QI, o Dr. Eggman deseja expandir o Império dele dominando o mundo. Com exércitos de robôs à disposição, representa uma ameaça constante e está sempre em busca de aumentar o próprio poder por meio de objetos como as Esmeralda Chaos. Talvez seja esse o motivo de ele ter ido para as Northstar Islands...  ',
    },
    fangs: {
      name: 'Fang',
      desc: ' Fang é um jerboa flexível muito sorrateiro que está sempre à procura da próxima recompensa. Sendo um caçador de recompensas, Fang the Hunter já teve diversos nomes ao longo dos anos, provavelmente devido ao status de procurado dele entre as autoridades. Seu principal meio de transporte, a Rainha Magnífica, está em constante processo de melhorias para que ele sempre esteja um passo à frente de todo mundo.  ',
    },
    knuckles: {
      name: 'Knuckles',
      desc: 'Acredita-se que Knuckles the Echidna seja o último do seu povo. Ele tem o dever de proteger a Esmeralda Mestre na Angel Island. Conhecido por sua imensa força, usa os punhos afiados para arrasar inimigos, escalar paredes e até destruir pedras. Planar é outra de suas habilidades e permite que ele percorra as paisagens diversas da ilha e do mundo além dela de forma rápida. ',
    },
    sonic: {
      name: 'Sonic',
      desc: 'O ser mais rápido de todos! Sonic the Hedgehog corre a velocidades incríveis e está sempre pronto para encarar quem ameaça seus amigos, sua liberdade ou a natureza do mundo. Ele adora relaxar quando não está em uma aventura, mas nunca recusa o desafio de frustrar os planos malignos do Dr. Eggman. ',
    },
    tails: {
      name: 'Tails',
      desc: 'Miles "Tails" Prower é uma raposa cheia de energia, um mecânico genial e o piloto do avião do Sonic, o Tornado. Ele já sofreu bullying por causa da sua cauda extra, mas hoje em dia reconhece a força em ser diferente: ao girar ambas as caudas, ele é capaz de voar a curtas distâncias! Um dos grandes amigos do Sonic, Tails é o melhor companheiro que alguém poderia querer.  ',
    },
    trip: {
      name: 'Trip',
      desc: 'Ainda não se sabe muito sobre a Trip, a misteriosa garota encontrada por Fang nas Northstar Islands. Embora um pouco desajeitada, Trip tem uma armadura robusta e foi recrutada por Fang e Dr. Eggman para ser a guarda-costas e guia deles pelas maravilhas desta região desconhecida.',
    },
  },
  mx: {
    title: 'Personajes',
    amy: {
      name: 'Amy',
      desc: 'Una erizo rosa que empuña el enorme "martillo Piko Piko" y que todavía está aprendiendo a usar su sorprendente fuerza. Tiene un fuerte sentido de la justicia y siempre sigue su corazón para proteger a los débiles, aunque a menudo eso signifique ponerse en peligro. ',
    },
    eggman: {
      name: 'Eggman',
      desc: 'Un genio del mal con un coeficiente intelectual de 300 que quiere expandir el Imperio de Eggman mediante la dominación del mundo. Con ejércitos de robots a su disposición, es una amenaza constante y siempre busca reforzar su poder mediante el robo de objetos como las Chaos Emeralds. Quizás esto fue lo que lo trajo a las Northstar Islands...  ',
    },
    fangs: {
      name: 'Fang',
      desc: 'Fang es un jerbo saltarín de pies ligeros que siempre está buscando asestar muchos puntos. A Fang the Hunter, un cazarrecompensas de oficio, se le ha conocido por muchos nombres a lo largo de los años, probablemente debido a su estado de "SE BUSCA" con las autoridades. Siempre trata de estar un paso adelante y constantemente modifica y mejora su medio de transporte principal, la Marvelous Queen.   ',
    },
    knuckles: {
      name: 'Knuckles',
      desc: 'Se dice que Knuckles the Echidna es el último de su especie y está obligado a proteger la Master Emerald en Angel Island. Es conocido por su inmensa fuerza y puede utilizar sus puños con púas para aplastar a los enemigos, escalar paredes e incluso destruir la roca sólida. Planear es otra de sus habilidades, lo que le permite atravesar rápidamente los variados entornos de su isla y todo el mundo. ',
    },
    sonic: {
      name: 'Sonic',
      desc: '¡Lo más rápido que existe! Sonic the Hedgehog corre a velocidades de vértigo y se apresura a enfrentarse a quienes amenazan a sus amigos, su libertad o el mundo natural que le rodea. Le encanta relajarse cuando no está en una aventura, pero actúa de inmediato para frustrar cualquier plan malvado del Dr. Eggman. ',
    },
    tails: {
      name: 'Tails',
      desc: 'Miles "Tails" Prower es un zorro activo, un mecánico genial y el piloto del avión de Sonic, el "Tornado". En el pasado lo molestaban por tener una cola de más, pero encontró la fuerza en su singularidad: ¡al girar sus dos colas juntas, puede impulsarse hacia delante e incluso volar cortas distancias en el aire! Tails, uno de los mejores amigos de Sonic, es el mejor compañero que podrías pedir.  ',
    },
    trip: {
      name: 'Trip',
      desc: 'Aún no se sabe mucho sobre Trip, la misteriosa chica que Fang encontró por primera vez en las Northstar Islands. Aunque es un poco torpe, Trip va fuertemente blindada y fue reclutada por Fang y el Dr. Eggman para protegerlos y guiarlos por las maravillas de esta región inexplorada.',
    },
  },
};

const images = [
  'images/amy.png',
  'images/eggman.png',
  'images/fangs.png',
  'images/knuckles.png',
  'images/sonic.png',
  'images/tails.png',
  'images/trip.png',
  'images/ss_ns.png',
  'images/ss_ps5.png',
  'images/ss_ps4.png',
  'images/ss_xbox.png',
];

const preloadImages = (imageArray, index = 0) => {
  if (imageArray && imageArray.length > index) {
    const img = new Image();
    img.onload = () => {
      preloadImages(imageArray, index + 1);
    };
    img.src = images[index];
  }
};

// preloadImages(images);

//character selection

let canIClickCharacter = true;

const showCorrectCharacter = (language, character) => {
  const name = document.querySelector('.characters__name');
  const desc = document.querySelector('.characters__description');
  const image = document.querySelector('.characters__image');
  document.querySelector('.characters__href').href =
    characterImages[character].image;
  const fading = document.querySelectorAll(
    '.characters__text, .characters__image',
  );
  fading.forEach(item => {
    item.classList.add('characters__fadeout');
  });

  setTimeout(() => {
    name.textContent = characterLinks[language][character].name;
    desc.innerHTML = characterLinks[language][character].desc;
    image.src = characterImages[character].image;
    fading.forEach(item => {
      item.classList.remove('characters__fadeout');
    });
    canIClickCharacter = true;
  }, 800);
};

const characters = document.querySelectorAll('.characters__top');

characters.forEach(character => {
  character.addEventListener('click', e => {
    e.preventDefault();
    if (
      canIClickCharacter &&
      !e.target.classList.contains('characters__active')
    ) {
      canIClickCharacter = false;
      const language = Cookies.get('lang');
      document
        .querySelector('.characters__active')
        .classList.remove('characters__active');
      character.classList.add('characters__active');
      const characterSelected = character.dataset.character;
      showCorrectCharacter(language, characterSelected);
    }
  });
});

//on startup this will set up the characer section. Will use the current language, set the console cookie to Switch and then call for the correct character area to be shown. If changing to a different console, you need to set the gameConsole cookie here to a different console.
// (() => {
//   const language = Cookies.get('lang');
//   // if (language === undefined) {
//   //   language = 'en';
//   // }
//   const characterSelected = 'sonic';
//   characters.forEach(character => {
//     character.classList.remove('.characterActive');
//   });
//   let { title } = characterLinks[language];
//   title = title[0].toUpperCase() + title.slice(1).toLowerCase();
//   document.querySelector('.character__text').textContent = title;
//   document
//     .querySelector(`[data-character="${characterSelected}"]`)
//     .classList.add('.characters__active');
//   showCorrectCharacter(language, characterSelected);
// })();
