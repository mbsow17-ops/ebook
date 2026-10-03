import { Ebook, Review } from '../types';

export const EBOOKS: Ebook[] = [
  {
    id: 'imposteur-1',
    slug: 'vaincre-le-syndrome-de-l-imposteur',
    title: "Vaincre le Syndrome de l'Imposteur",
    subtitle: "Cesser de douter de sa légitimité et s'approprier enfin ses victoires",
    category: 'imposteur',
    categoryLabel: "Syndrome de l'Imposteur",
    price: 18,
    originalPrice: 28,
    coverImage: '/src/assets/images/book_cover_impostor_syndrome_1791068720636.jpg',
    author: 'Dr. Camille Vaugirard',
    authorBio: 'Docteure en psychologie cognitive et formatrice auprès de cadres dirigeants et créateurs.',
    pages: 196,
    readTime: '3h 40min',
    publicationYear: 2026,
    rating: 4.9,
    reviewCount: 342,
    tagline: 'Le guide de référence pour enfin vous sentir à votre place.',
    shortDescription: 'Déconstruisez la petite voix qui vous murmure que vous avez eu de la chance. Une méthode progressive en 5 phases fondée sur les neurosciences.',
    fullDescription: 'Le sentiment d’illégitimité n’est pas une fatalité génétique : c’est un schéma de pensée appris, souvent renforcé par notre perfectionnisme et notre peur viscérale de décevoir. Dans cet ouvrage devenu une référence, le Dr. Camille Vaugirard livre une grille de lecture limpide et 24 protocoles concrets pour dissocier votre valeur personnelle de la validation extérieure. Vous apprendrez à recevoir les compliments sans malaise, à négocier votre juste valeur et à embrasser vos réussites sans trembler.',
    keyTakeaways: [
      'Identifier les 5 déclencheurs inconscients du sentiment de fraude',
      'Le protocole du "Journal des Preuves Tangibles" pour neutraliser l\'auto-dépréciation',
      'Désamorcer le piège du perfectionnisme paralysant en réunion',
      'Affirmer son autorité naturelle sans arrogance ni fausse modestie'
    ],
    tableOfContents: [
      { number: 'Chapitre 1', title: 'L’illusion du masque : d’où vient ce sentiment d’usurpation ?', page: 12 },
      { number: 'Chapitre 2', title: 'Le cycle de l’anxiété et de la sur-préparation', page: 48 },
      { number: 'Chapitre 3', title: 'Démonter la mécanique du critique intérieur', page: 86 },
      { number: 'Chapitre 4', title: 'Le protocole des 7 faits : réécrire son récit personnel', page: 124 },
      { number: 'Chapitre 5', title: 'S’ancrer dans sa légitimité professionnelle et intime', page: 168 }
    ],
    sampleChapter: {
      chapterNumber: 'Chapitre 1',
      chapterTitle: 'L’illusion du masque : d’où vient ce sentiment d’usurpation ?',
      intro: 'Vous entrez dans la salle. Tout le monde semble savoir exactement ce qu’il fait. Tout le monde a l’air sûr, posé, légitime. Sauf vous. Au creux de votre estomac, une phrase résonne comme une sentence : "S’ils savaient vraiment..."',
      paragraphs: [
        'Ce vertige a un nom. Décrit pour la première fois en 1978 par les psychologues Pauline Rose Clance et Suzanne Imes, le phénomène de l’imposteur touche près de 70 % des personnes à un moment de leur trajectoire. Pourtant, dans l’intimité de nos pensées, nous sommes persuadés d’en être la seule victime.',
        'La première illusion consiste à croire que les gens confiants ne ressentent aucun doute. C’est faux. La différence fondamentale ne réside pas dans l’absence de peur, mais dans l’interprétation que le cerveau donne à ce signal.',
        'Quand une personne souffrant du syndrome de l’imposteur réussit, son cerveau attribue le résultat à des facteurs externes et instables : la chance, le hasard, un jury complaisant, un timing favorable. Lorsqu’elle échoue, l’explication devient soudainement interne et définitive : "Je suis incompétent(e)". Ce biais d’attribution destructeur est la pierre angulaire de l’usurpation ressentie.',
        'Pour retrouver la paix, il ne s’agit pas de gonfler artificiellement son ego avec des affirmations magiques devant un miroir. Il s’agit de rétablir une stricte hygiène de la preuve rationnelle.'
      ],
      quote: 'Votre cerveau ne croit pas aux slogans motivants. Il ne s’incline que devant l’accumulation calme et méthodique de faits vérifiables.',
      practicalExercise: {
        title: 'Exercice pratique : L’audit de causalité rationnelle',
        description: 'Chaque fois que vous avez envie de dire "J’ai eu de la chance", remplissez ce tableau en trois colonnes :',
        steps: [
          'Notez le résultat obtenu (ex: "J\'ai obtenu le contrat")',
          'Listez 3 compétences concrètes et 2 efforts préalables qui ont rendu ce résultat possible',
          'Interdisez-vous d’employer les mots "chance", "hasard" ou "circonstances" dans votre compte-rendu mental'
        ]
      }
    },
    audioDuration: '4:15 min',
    bonusIncluded: 'Cahier d’exercices interactif (42 pages) + Fiche mémo de poche anti-panique',
    featured: true,
    bestseller: true
  },
  {
    id: 'parole-1',
    slug: 'la-voix-rayonnante',
    title: 'La Voix Rayonnante',
    subtitle: 'L’art d’oser parler en public, captiver son auditoire et apprivoiser le trac',
    category: 'prise-de-parole',
    categoryLabel: 'Prise de Parole',
    price: 19,
    originalPrice: 29,
    coverImage: '/src/assets/images/book_cover_public_speaking_1791068731247.jpg',
    author: 'Marc-Aurèle Daudet',
    authorBio: 'Ancien ténor d’opéra et coach en rhétorique pour intervenants TEDx et dirigeants d’entreprise.',
    pages: 218,
    readTime: '4h 10min',
    publicationYear: 2026,
    rating: 4.8,
    reviewCount: 289,
    tagline: 'Transformez le tremblement de votre voix en présence magnétique.',
    shortDescription: 'Ne fuyez plus les réunions et les discours. Maîtrisez le souffle diaphragmatique, l’ancrage postural et la structure narrative des orateurs inspirants.',
    fullDescription: 'La glossophobie (peur de parler en public) est statistiquement plus redoutée que la mort par beaucoup d’adultes. Pourtant, le trac n’est pas un ennemi à abattre : c’est de l’énergie brute mal canalisée. Marc-Aurèle Daudet déconstruit la mécanique physiologique du blocage de gorge et enseigne les techniques corporelles ancestrales du théâtre et du chant lyrique adaptées au monde professionnel. Vous découvrirez comment habiter les silences, poser votre regard et captiver sans forcer.',
    keyTakeaways: [
      'Le rituel des 90 secondes avant d’entrer en scène pour stabiliser le rythme cardiaque',
      'Poser sa voix sur les harmoniques graves pour inspirer une autorité chaleureuse',
      'Gérer les trous de mémoire et les questions pièges avec élégance',
      'Remplacer les "euh" et tics verbaux par des silences d’impact'
    ],
    tableOfContents: [
      { number: 'Chapitre 1', title: 'L’alchimie du trac : apprivoiser l’adrénaline', page: 14 },
      { number: 'Chapitre 2', title: 'Le corps comme instrument : ancrage et verticalité', page: 52 },
      { number: 'Chapitre 3', title: 'Le souffle suspendu : libérer la tessiture naturelle', page: 94 },
      { number: 'Chapitre 4', title: 'La rhétorique du silence : l’art de faire attendre', page: 140 },
      { number: 'Chapitre 5', title: 'L’art de la répartie sereine face aux contradicteurs', page: 182 }
    ],
    sampleChapter: {
      chapterNumber: 'Chapitre 1',
      chapterTitle: 'L’alchimie du trac : apprivoiser l’adrénaline',
      intro: 'Trente secondes avant votre prise de parole. Vos mains sont moites. Vos tempes battent à tout rompre. Votre gorge se noue comme si l’air refusait de descendre. Votre réflexe primitif crie : "Fuis !"',
      paragraphs: [
        'Ce que vous ressentez à cet instant précis est une merveille d’ingénierie biologique. Votre système nerveux sympathique inonde votre flux sanguin d’adrénaline et de cortisol pour vous préparer à affronter un prédateur. Le problème ? Le prédateur d’aujourd’hui est un comité de direction ou un micro branché.',
        'La plus grande erreur commise par 95 % des gens est de tenter de "se calmer". Dire à un cerveau en état d’alerte de se calmer est neurologiquement inefficace. Physiologiquement, l’état de panique et l’état d’enthousiasme partagent les mêmes paramètres : rythme cardiaque élevé, pupilles dilatées, afflux sanguin.',
        'Les neuroscientifiques de Harvard ont démontré qu’au lieu de vous répéter "Je dois rester calme", murmurer mentalement "Je suis curieux et impatient de partager cela" reconfigure l’interprétation cérébrale de la menace en opportunité.',
        'Le trac ne disparaîtra jamais complètement, et c’est une bénédiction : sans lui, votre discours serait terne et dévitalisé. Nous n’allons pas éteindre votre feu, nous allons apprendre à diriger sa flamme.'
      ],
      quote: 'Le trac est le prix que paye l’artiste pour avoir le privilège de toucher le cœur des hommes.',
      practicalExercise: {
        title: 'Exercice : Le souffle au carré en 4x4',
        description: 'À réaliser 2 minutes avant toute intervention délicate :',
        steps: [
          'Inspirez profondément par le nez sur 4 secondes en gonflant le bas du ventre',
          'Retenez votre souffle poumons pleins pendant 4 secondes sans crisper les épaules',
          'Expirez lentement par la bouche entrouverte sur 4 secondes comme à travers une paille',
          'Conservez le vide pendant 4 secondes avant la prochaine inspiration. Répétez 4 cycles.'
        ]
      }
    },
    audioDuration: '5:02 min',
    bonusIncluded: 'Audio-guide de préparation mentale (15 min MP3) + Fiche des 10 ouvertures de discours',
    featured: true,
    bestseller: false
  },
  {
    id: 'estime-1',
    slug: 'le-sanctuaire-interieur',
    title: 'Le Sanctuaire Intérieur',
    subtitle: 'Rebâtir l’estime de soi en 21 jours par la bienveillance radicale',
    category: 'estime',
    categoryLabel: 'Estime & Sérénité',
    price: 17,
    originalPrice: 26,
    coverImage: '/src/assets/images/book_cover_inner_strength_1791068740908.jpg',
    author: 'Éléonore Saint-Germain',
    authorBio: 'Thérapeute psychocorporelle et autrice spécialisée dans la résilience émotionnelle.',
    pages: 184,
    readTime: '3h 15min',
    publicationYear: 2026,
    rating: 4.95,
    reviewCount: 412,
    tagline: 'Devenez enfin la personne la plus sécurisante de votre propre vie.',
    shortDescription: 'Guérissez la blessure du rejet et apprenez à vous estimer inconditionnellement, même quand vous commettez des erreurs ou traversez des tempêtes.',
    fullDescription: 'La confiance en soi concerne ce que vous êtes capable de faire ; l’estime de soi concerne la valeur intrinsèque que vous vous accordez lorsque vous ne faites rien. Si votre valeur dépend de vos performances, vous vivrez toujours sur un siège éjectable. Ce livre vous accompagne pas à pas à travers 21 rituels quotidiens d’auto-compassion pour cesser la comparaison compulsive et bâtir un socle intérieur inviolable.',
    keyTakeaways: [
      'Différencier confiance en ses compétences et valeur d’être humain',
      'Désamorcer le réflexe de comparaison sur les réseaux sociaux',
      'Le rituel du pardon à soi-même après un échec cuisant',
      'Créer une routine matinale d’ancrage émotionnel en 7 minutes'
    ],
    tableOfContents: [
      { number: 'Semaine 1', title: 'Déblayer les ruines : repérer les blessures d’enfance', page: 10 },
      { number: 'Semaine 2', title: 'La bienveillance radicale envers ses propres fragilités', page: 68 },
      { number: 'Semaine 3', title: 'Construire son sanctuaire : l’autonomie affective', page: 128 },
      { number: 'Épilogue', title: 'Vivre au monde sans se dissoudre dans l’attente d’autrui', page: 172 }
    ],
    sampleChapter: {
      chapterNumber: 'Chapitre 1',
      chapterTitle: 'La conditionnelle de l’amour de soi',
      intro: 'La plupart d’entre nous ont été éduqués avec une clause secrète : "Je m’aimerai quand j’aurai perdu 5 kilos, quand j’aurai décroché ce poste, quand mon compte en banque sera rassurant."',
      paragraphs: [
        'Cette estime sous condition est une imposture affective. Elle transforme votre relation à vous-même en contrat commercial impitoyable où vous n’êtes jamais assez rentable.',
        'Quand nous observons un nouveau-né, personne ne lui demande d’avoir un CV impressionnant ou une silhouette athlétique pour mériter l’attention et le respect. Sa valeur est absolue, sacrée, indiscutable. À quel moment précis avez-vous décidé que vous aviez perdu ce droit de naissance ?',
        'Le sanctuaire intérieur n’est pas un château fort hostile érigé contre le monde : c’est un espace de clarté où même vos doutes, vos maladresses et vos larmes ont le droit de s’asseoir à votre table sans être jugés.'
      ],
      quote: 'Vous traitez-vous avec la tendresse et la patience que vous accorderiez à votre meilleur ami en larmes ? Si la réponse est non, tout commence ici.',
      practicalExercise: {
        title: 'Exercice : La lettre du témoin compatissant',
        description: 'Prenez 10 minutes ce soir à l’abri du bruit :',
        steps: [
          'Écrivez un paragraphe sur l’erreur récente qui vous ronge le plus',
          'Réécrivez la réponse que vous feriez à un enfant de 8 ans qui viendrait vous confier cette même faute',
          'Lisez cette réponse à voix haute en posant une main sur votre sternum'
        ]
      }
    },
    audioDuration: '3:50 min',
    bonusIncluded: 'Journal de bord guidé 21 jours (PDF imprimable) + 3 méditations guidées audio',
    featured: true,
    bestseller: true
  },
  {
    id: 'limites-1',
    slug: 'dire-non-sans-culpabilite',
    title: 'Dire Non Sans Culpabilité',
    subtitle: 'L’art de poser des limites saines et se faire respecter sans devenir agressif',
    category: 'affirmation',
    categoryLabel: 'Affirmation & Limites',
    price: 16,
    originalPrice: 24,
    coverImage: '/src/assets/images/book_cover_assertiveness_1791068768869.jpg',
    author: 'Clara Delamare',
    authorBio: 'Médiatrice certifiée en communication non violente et consultante en dynamiques relationnelles.',
    pages: 172,
    readTime: '3h 05min',
    publicationYear: 2026,
    rating: 4.88,
    reviewCount: 198,
    tagline: 'Chaque "oui" arraché contre votre gré est une trahison envers vous-même.',
    shortDescription: 'Débarrassez-vous de la peur de décevoir. 35 scripts verbaux élégants et fermes pour refuser les demandes toxiques sans vous justifier à l’infini.',
    fullDescription: 'Dire "oui" par politesse, par lâcheté ou par crainte du conflit est l’un des poisons les plus destructeurs de l’assurance personnelle. En cherchant à plaire à tout le monde, vous finissez par ne plus exister pour personne, et surtout pas pour vous-même. Clara Delamare livre un manuel chirurgical d’affirmation tranquille : comment poser une limite nette avec un sourire calme, sans agressivité mais sans concession.',
    keyTakeaways: [
      'La différence fondamentale entre gentillesse authentique et servilité anxieuse',
      'Les 7 formules passe-partout pour refuser sans se justifier ni s’excuser',
      'Désamorcer le chantage affectif des proches sans rompre le lien',
      'Protéger son temps et son énergie au travail face aux collègues envahissants'
    ],
    tableOfContents: [
      { number: 'Chapitre 1', title: 'L’esclavage de la bonne poire : pourquoi voulons-nous plaire ?', page: 12 },
      { number: 'Chapitre 2', title: 'La géométrie des frontières personnelles', page: 46 },
      { number: 'Chapitre 3', title: 'Le répertoire des refus gracieux mais inflexibles', page: 88 },
      { number: 'Chapitre 4', title: 'Faire face à la colère et à la culpabilité d’autrui', page: 130 }
    ],
    sampleChapter: {
      chapterNumber: 'Chapitre 1',
      chapterTitle: 'L’esclavage de la bonne poire',
      intro: 'Un collègue vous demande de terminer son dossier à 18h30. Une amie vous sollicite pour un déménagement alors que vous êtes épuisé(e). Votre bouche s’ouvre et, contre votre volonté la plus intime, vous dites : "Oui, bien sûr, avec plaisir !"',
      paragraphs: [
        'À l’instant où ce "oui" s’échappe, votre estomac se serre. Vous vous en voulez. Vous éprouvez de la rancœur envers la personne qui a demandé, alors qu’en réalité, votre colère s’adresse à votre propre impuissance.',
        'La peur de décevoir est enracinée dans notre héritage tribal ancestral : être rejeté du clan signifiait la mort. Mais aujourd’hui, dire non à une sollicitation ne vous exclut pas de la société. Bien au contraire : les personnes incapables de refuser ne sont pas respectées, elles sont exploitées.',
        'Un "non" clair est un acte de respect mutuel : il donne toute sa valeur à vos futurs "oui".'
      ],
      quote: 'Si vous ne décidez pas de la manière dont votre temps est dépensé, quelqu’un d’autre s’en chargera avec beaucoup d’enthousiasme.',
      practicalExercise: {
        title: 'Exercice : Le refus en deux phrases sans justificatif',
        description: 'Règle d’or : moins vous justifiez votre refus, plus il est respecté.',
        steps: [
          'Remerciez pour l’invitation ou la proposition',
          'Formulez votre indisponibilité de façon définitive sans inventer de faux alibi : "Je ne pourrai pas m’en charger cette fois-ci."',
          'Gardez le silence. Ne comblez pas le vide par un bavardage coupable.'
        ]
      }
    },
    audioDuration: '3:30 min',
    bonusIncluded: 'Guide mémo PDF : "Les 35 phrases d’or pour refuser avec grâce"',
    featured: false,
    bestseller: false
  },
  {
    id: 'action-1',
    slug: 'l-audace-du-premier-pas',
    title: 'L’Audace du Premier Pas',
    subtitle: 'Passer de la sur-réflexion paralysante à l’action audacieuse et répétée',
    category: 'action',
    categoryLabel: 'Passage à l’Action',
    price: 18,
    originalPrice: 27,
    coverImage: '/src/assets/images/book_cover_courage_action_1791068778340.jpg',
    author: 'Julien Kervadec',
    authorBio: 'Entrepreneur, navigateur solitaire et coach en prise de décision en environnement incertain.',
    pages: 204,
    readTime: '3h 50min',
    publicationYear: 2026,
    rating: 4.92,
    reviewCount: 265,
    tagline: 'La confiance ne précède pas l’action, elle en est la conséquence.',
    shortDescription: 'Arrêtez d’attendre le "bon moment". Une méthode éprouvée pour briser la procrastination paralyseante et oser lancer vos projets les plus chers.',
    fullDescription: 'Attendre d’avoir confiance pour agir est le piège le plus pernicieux de l’esprit humain. Le courage n’attend pas la certitude ; il compose avec le tremblement. Julien Kervadec, après des années de navigation en solitaire et d’entrepreneuriat à haut risque, partage les lois de la dynamique d’action : comment réduire la friction du départ, apprivoiser la honte du premier essai imparfait et transformer l’inconfort en combustible.',
    keyTakeaways: [
      'La loi des 5 secondes appliquée aux décisions de rupture',
      'Réduire la voilure : transformer un projet intimidant en micro-actes de 12 minutes',
      'Comment banaliser le regard des autres et la peur du ridicule',
      'Le tableau d’immunité contre le regret à 10 ans'
    ],
    tableOfContents: [
      { number: 'Chapitre 1', title: 'Le mythe du moment idéal et l’anesthésie du confort', page: 16 },
      { number: 'Chapitre 2', title: 'La mécanique de la friction cognitive initiale', page: 58 },
      { number: 'Chapitre 3', title: 'La permission d’être médiocre avant d’être brillant', page: 104 },
      { number: 'Chapitre 4', title: 'Créer une spirale vertueuse de micro-triomphes', page: 152 }
    ],
    sampleChapter: {
      chapterNumber: 'Chapitre 1',
      chapterTitle: 'Le mythe du moment idéal',
      intro: 'Vous vous dites souvent : "Quand j’aurai fini cette formation...", "Quand les enfants seront plus grands...", "Quand j’aurai plus d’économies..." Reconnaissez-vous cette voix ?',
      paragraphs: [
        'C’est la voix de la prudence apparente, mais c’est en réalité la voix de la lâcheté confortable. Le monde est peuplé de génies inachevés qui attendent toujours que tous les feux de circulation de la ville soient passés au vert avant de démarrer leur voiture.',
        'La vérité inconfortable est que les conditions parfaites n’arriveront jamais. Il y aura toujours un imprévu, un concurrent, un doute, une fatigue. Les personnes qui accomplissent leurs rêves n’ont pas moins de doutes : elles ont simplement cessé de négocier avec leur cerveau une fois la décision prise.',
        'L’action est le seul solvant connu contre l’angoisse. Dès l’instant où vos mains bougent, la boucle de rumination mentale s’éteint.'
      ],
      quote: 'Dans dix ans, vous serez infiniment plus déçu par les initiatives que vous n’avez pas osé prendre que par celles qui ont échoué.',
      practicalExercise: {
        title: 'Exercice : L’engagement irréversible de 24h',
        description: 'Prenez ce projet qui dort dans vos tiroirs depuis des mois :',
        steps: [
          'Définissez la plus petite action concrète et irréversible (envoyer un email, acheter un nom de domaine, réserver un créneau)',
          'Fixez un compte à rebours de 15 minutes et exécutez-la sans relire votre texte 10 fois',
          'Savourez la libération mentale immédiate qui suit le geste'
        ]
      }
    },
    audioDuration: '4:40 min',
    bonusIncluded: 'Matrice de décision rapide (Notion template & PDF) + Tracker d’habitudes audacieuses',
    featured: false,
    bestseller: true
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'rev-1',
    author: 'Sophie Lemoine',
    role: 'Directrice de Projet Tech, Lyon',
    rating: 5,
    date: '18 septembre 2026',
    title: 'Une délivrance après 8 ans de doute permanent',
    comment: 'J’ai acheté "Vaincre le Syndrome de l’Imposteur" sur recommandation d’une amie. En 3 semaines d’application du journal des preuves, j’ai enfin osé postuler à la direction technique sans trembler. Le bonus Notion est un bijou d’ergonomie.',
    outcome: '+35% d’augmentation et promotion obtenue',
    verified: true
  },
  {
    id: 'rev-2',
    author: 'Antoine Moreau',
    role: 'Consultant Stratégie & Enseignant vacataire, Paris',
    rating: 5,
    date: '2 octobre 2026',
    title: 'Le meilleur investissement de ma carrière',
    comment: 'La Voix Rayonnante m’a littéralement sauvé la mise avant ma première conférence de 400 personnes. L’exercice du souffle au carré et la technique des silences ont transformé mon trac paralysant en force calme.',
    outcome: 'Conférence TEDx délivrée avec standing ovation',
    verified: true
  },
  {
    id: 'rev-3',
    author: 'Mathilde Guérin',
    role: 'Architecte d’intérieur, Bordeaux',
    rating: 5,
    date: '24 août 2026',
    title: 'Apprendre à dire non a sauvé ma santé mentale',
    comment: 'J’étais incapable de refuser des révisions gratuites à mes clients, travaillant jusqu’à minuit. Le livre de Clara Delamare m’a donné des mots précis, polis mais intraitables. Mes clients me respectent bien plus aujourd’hui.',
    outcome: 'Horaires maîtrisés et rentabilité multipliée par deux',
    verified: true
  }
];
