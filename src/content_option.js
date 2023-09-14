const logotext = "MARGOT";
const meta = {
    title: "Margot Stevens",
    description: "Je suis Margot Stevens, UX designer actuellement spécialisé dans l'immersive expérience, c'est-à-dire les technologies AR-VR-MR.",
};

const introdata = {
    title: "Bonjour",
    animated: {
        first: "Je suis Margot Stevens",
        second: "UX Designer",
        third: "passionnée de technologie XR",
    },
    description: "Je suis UX designer, dans le milieu des expériences immersives, c'est-à-dire les technologies AR-VR-MR depuis maintenant 2ans.",
    your_img_url: "https://github.com/stevensmt/portfolio/blob/master/src/pages/home/img/4x/03.png?raw=true",
};

const dataabout = {
    title: "About me",
    aboutmeEN: "UX designer, I have specialized through my experiences in immersive technologies such as AR, VR and MR. My various experiences have enabled me to work on the different stages in the production of a solution, i.e. from research, through ideation, level design, right up to production. Personally, I believe that the testing, onboarding and iteration phases are important to ensure the highest quality creation.",
    aboutme: "UX designer, je me suis spécialisé à travers mes expériences dans les technologies immersives telles que l'AR, la VR et la MR. Mes différentes expériences m'ont permis de travailler sur les différentes étapes de production d'une solution, c'est-à-dire, de la recherche, en passant par l'idéation, le Level design, jusqu'à la production. Personnellement, je trouve que les phases de test, d'onboarding et d'itération sont importantes pour permettre la création la plus qualitative.",
};
const worktimeline = [
    {
        jobtitle: "UX Design Immersive Experience",
        where: "Atos - Bezons (95)",
        date: "01/2021 - Aujourd'hui",
    },
    {
        jobtitle: "Contrat Apprentissage UX Design Immersive Experience",
        where: "Atos - Bezons (95)",
        date: "2021-2022",
    },
    {
        jobtitle: "Contrat Apprentissage UX-UI Designer",
        where: "Fanprime - Paris (75)",
        date: "2019-2021",
    },
];
const jobtimeline = [
    {
        jobtitle: "Mastère Spécialisé IDE",
        where: "Gobelins & Cnam-Enjmin - Paris (75)",
        date: "2021-2022",
    },
    {
        jobtitle: "Mastère en alternance interactivité et UX Design",
        where: "IIM - Courbevoie (92)",
        date: "2019-2021",
    },
    {
        jobtitle: "DNA en Design Graphique",
        where: "ESAD - Valence (26)",
        date: "2016-2018",
    },
];
const skills = [{
        name: "Figma - FigJam",
        value: 90,
    },
    {
        name: "Blender",
        value: 60,
    },
    {
        name: "Photoshop",
        value: 80,
    },
    {
        name: "Illustrator",
        value: 70,
    },
    {
        name: "Unity",
        value: 60,
    },
    {
        name: "Unreal Engine",
        value: 50,
    },
    {
        name: "HoloLens",
        value: 90,
    },
];
const learn = [
    {
        jobtitle: "Certification PSPO1",
        date: "2023",
    },
    {
        jobtitle: "Notions de base de Hololens 2 : développer des applications de réalité mixte",
        where: "Trophée Microsoft Learn",
        date: "2022",
    },
    {
        jobtitle: "Utilisé Dynamics 364 Guides",
        where: "Trophée Microsoft Learn",
        date: "2022",
    },
    {
        jobtitle: "Bases de l’accessibilité du gaming",
        where: "Trophée Microsoft Learn",
        date: "2022",
    },{
        jobtitle: "Bases de l’accéssibilité",
        where: "Trophée Microsoft Learn",
        date: "2022",
    },{
        jobtitle: "Formation sur la dyslexie, en partenariat avec Made By Dyslexia",
        where: "Trophée Microsoft Learn",
        date: "2022",
    },
];
const services = [{
        title: "Onboarding",
        description: "Organisation, création de l'emploi du temps en fonction du type de workshop (Discovery workshop, Empathy workshop, Design workshop, Priorization workshop), sélection des ateliers (ice-breaking, idéation… ), compte rendu et itération.",
        descriptionEn: "Organization, creation of the schedule according to the type of workshop (Discovery workshop, Empathy workshop, Design workshop, Priorization workshop), selection of workshops (ice-breaking, ideation... ), reporting and iteration.",
    },
    {
        title: "UX Research",
        description: "Recherche réalisée à partir d'une problématique, d'une entreprise, une situation… Tout d'abord, en commençant par une veille, des interviews, une analyse des données, une synthétisation pour pouvoir présenter la première étape avant d'itérer jusqu'à atteindre l'objectif souhaité en prenant en compte le plus de points de vue possible.",
        descriptionEn: "Research carried out on the basis of a problem, a company, a situation... First of all, starting with a watch, interviews, data analysis, synthesis to be able to present the first step before iterating until the desired objective is reached, taking into account as many points of view as possible.",
    },
    {
        title: "Level Design",
        description: "On retrouve le Level design dans le virtuel et le réel, mais sa construction reprend des étapes qui peuvent être similaires. Tout d'abord, il faut identifier le point de départ, l'utilisateur et l'objectif final. Une fois tout pris en compte, on utilise plusieurs outils (schéma, flowchart ...) pour définir les différentes étapes et le format que cela peut prendre. On essaye de faire tester le niveau le plus possible afin d'avoir un niveau le plus agréable pour l'utilisateur et répondant au mieux à notre objectif.",
        descriptionEn: "Level design can be found in both the virtual and the real world, but its construction takes up stages that can be similar. First of all, we need to identify the starting point, the user and the final objective. Once all this has been taken into account, we use various tools (diagram, flowchart, etc.) to define the different stages and the format they can take. We try to have the level tested as much as possible, to ensure that it's as pleasant as possible for the user and best meets our objective.",
    },
    {
        title: "Prototypage",
        description: "Le prototypage permet d'expérimenter une idée rapidement et d'itérer en fonction des retours. Le format qu'il prend va dépendre de ce que l'on essaye de tester, ainsi, on peut le réaliser en low-fidelity, ou bien en se rapprochant de projet final.",
        descriptionEn: "Prototyping allows you to test an idea quickly and iterate on the feedback. The format it takes will depend on what you're trying to test, so it can be low-fidelity, or closer to the final project. ",
    },
    {
        title: "VR Project",
        description: "Lors de la réalisation de projets en VR, j'ai eu la chance de pouvoir travailler sur les différentes étapes allant jusqu'à la production du Proof of concept. Que ce soit la recherche, la spécification, la création de maquette, la game design, Level design, la production d'assets 3D, leurs intégrations et l'ajout de l'interaction dans l'expérience VR sur Unity principalement. Puis la présentation du projet et la phase de testing.",
        descriptionEn: "When working on a VR project, I was lucky enough to be able to work on the various stages up to the production of the Proof of Concept. This included research, specification, model creation, game design, level design, production of 3D assets, their integration and the addition of interaction to the VR experience, mainly on Unity. Then the project presentation and testing phase.",
    },
    {
        title: "HoloLens",
        description: "Lors de la réalisation de projets HoloLens, j'ai eu la chance de pouvoir travailler sur les différentes étapes allant jusqu'à la production du Proof of concept. Que ce soit la recherche, la spécification, la création de maquette, la game design, Level design, la production d'assets 3D, leurs intégrations et l'ajout de l'interaction dans l'expérience VR sur Unity et Unreal. Puis la présentation du projet et la phase de testing.",
        descriptionEn: "While working on HoloLens projects, I was lucky enough to be able to work on the various stages up to the production of the Proof of Concept. This included research, specification, mock-up creation, game design, level design, production of 3D assets, their integration and the addition of interaction to the VR experience on Unity and Unreal. Then the project presentation and testing phase.",
    },
    {
        title: "Accessibility",
        description: "Je travaille principalement sur le sujet de l'accessibilité des expériences XR, dans l'idée de rendre mes expériences les plus accessibles possible, mais également de produire des expériences permettant de rendre plus accessible certaine situation pouvant être bloquante.",
        descriptionEn: "I'm mainly working on the accessibility of XR experiences, with the idea of making my experiences as accessible as possible, but also of producing experiences that make certain situations that can be blocking more accessible.",
    },
];


const dataportfolio = [    

    {
        img: "https://github.com/stevensmt/portfolio/blob/master/src/pages/portfolio/img/VirtualReality.png?raw=true",
        description: "StayAlive - Projet VR ",
        link: "/portfolio/VirtualReality",
    },

    {
        img: "https://github.com/stevensmt/portfolio/blob/master/src/pages/portfolio/img/Research.png?raw=true",
        description: "UX research - exemple",
        link: "/portfolio/Research",
    },

    {
        img: "https://github.com/stevensmt/portfolio/blob/master/src/pages/portfolio/img/Onboarding.png?raw=true",
        description: "Onboarding - Projet VR",
        link: "/portfolio/Onboarding",
    },
    {
        img: "https://github.com/stevensmt/portfolio/blob/master/src/pages/portfolio/img/MixedReality.png?raw=true",
        description: "HoloDraw - Projet MR",
        link: "/portfolio/MixedReality",
    },
    {
        img: "https://github.com/stevensmt/portfolio/blob/master/src/pages/portfolio/img/These.png?raw=true",
        description: "Thèse - Accessibilité et technologies XR",
        link: "/portfolio/These",
    },

];



const VR = {
    Title01: "Catégories",
    info01: "Projet VR",
    info012: "Learning et sensibilisation",
    Title02: "Rôles",
    info02: "UX-UI Design",
    info022: "Level Design",
    info023: "Développement et intégration",
    Title03: "Années",
    info03: "2022",
    Title04: "Outils",
    info04: "Unity, Blender, Figma, FigJam, ...",
    ResumeTitle: "Présentation",
    ResumeTxt: "StayAlive est un projet VR solo conçu pour simuler une expérience en usine, où l'utilisateur doit choisir les équipements de sécurité essentiels pour éviter les blessures. Ce Proof of Concept (POC) démontre les possibilités de la VR dans l'apprentissage, destiné à être présenté aux clients pour illustrer son impact. Réalisée en environ un mois, cette expérience immersive dure environ 8 minutes et a été le fruit de la collaboration entre deux membres : un développeur polyvalent responsable du sound design, et moi-même, en charge de la modélisation 3D, de l'UX design, du Level design et de l'intégration d'assets 3D externes.",
    GoalsTitle: "Processus",
    GoalsTxt:"Ce projet découle d'une demande client visant à résoudre le problème récurrent des accidents liés à l'oubli ou à la sous-estimation des procédures de sécurité par les employés. Après une réunion avec le client pour comprendre la situation, nous avons initié un processus de brainstorming et de recherche approfondie. En utilisant la méthode des 5W1H, notre objectif était clair : créer une expérience VR impactante pour rappeler l'importance des procédures de sécurité aux employés, lors des formations obligatoires ou en rappel lorsque des comportements à risques sont identifiés sur site. Cette initiative cible d'abord les employés, puis leurs supérieurs pour renforcer la cohésion d'équipe.",
    GoalsTxt2: "Après avoir défini précisément notre solution, nous avons entamé la réflexion sur l'expérience en définissant un user flow comprenant un onboarding une phase de choix, l'événement principal et la conclusion. Le Level design et le game design ont évolué grâce à un processus itératif. Le Level design a été découpé en quatre étapes : l'accueil, l'onboarding la sélection du matériel/choix et l'événement dans l'usine. La production a ensuite débuté, en distinguant les éléments essentiels des éléments optionnels. J'ai sélectionné les assets, créé les scènes 3D et importé la base pour permettre à mon collègue de commencer le développement sur une version de base du niveau, similaire à un projet de Blockout Ensuite, une phase de maquettage pour les HUD, la signalétique et les pop-up a été réalisée. Nous avons effectué des tests avec des personnes non familières avec la VR suite à ses tests, nous avons décidé de simplifier au maximum les contrôles, en prenant en compte leurs retours.",
    DeroulementTxt: "Devlog - Retour",
    DeroulementTxt2: "Rétrospectivement, notre principal défi lors de la production résidait dans la contrainte de temps. Malgré des ressources limitées, nous avons réussi à organiser efficacement notre travail pour livrer un POC fonctionnel qui atteint ses objectifs et met en valeur nos compétences. Cependant, le temps restreint a eu un impact sur le Level design et le Game design. Si je devais recommencer ce projet, j'accorderais davantage de temps au Level design et à l'onboarding Une approche en plusieurs niveaux, avec un focus initial sur l'onboarding aurais pu améliorer le projet. En outre, une collaboration plus étroite avec le développeur pour affiner les maquettes aurait permis de mieux rappeler les points essentiels, notamment en ce qui concerne les contrôles. Au cours de la production, des ajustements significatifs ont été apportés aux contrôles et aux déplacements pour s'adapter à notre publique cible des personnes peu familières avec la VR et les jeux vidéo. Les premiers tests ont révélé la nécessité de simplifier davantage les contrôles pour une expérience plus fluide. Cette solution a été sélectionnée en raison de notre temps restreint.",
    Img1: "https://github.com/stevensmt/portfolio/blob/master/src/pages/portfolio/VirtualReality/img01.png?raw=true",
    Img2: "https://github.com/stevensmt/portfolio/blob/master/src/pages/portfolio/VirtualReality/img04.png?raw=true",
    Img3: "https://github.com/stevensmt/portfolio/blob/master/src/pages/portfolio/VirtualReality/img02.png?raw=true",
    Img4: "https://github.com/stevensmt/portfolio/blob/master/src/pages/portfolio/VirtualReality/img03.png?raw=true",
    Img5: "https://github.com/stevensmt/portfolio/blob/master/src/pages/portfolio/VirtualReality/img05.png?raw=true",
    
    nextLink:"/portfolio/Onboarding",
    backLink:"/portfolio/Research",
};
const onboarding = {
    Title01: "Catégories",
    info01: "Projet VR",
    info012: "Learning",
    info013: "UX design",
    Title02: "Rôles",
    info02: "UX-UI Design",
    info022: "Level Design",
    info023: "Développement et intégration",
    Title03: "Années",
    info03: "2023",
    Title04: "Outils",
    info04: "Unity, Blender, Figma, FigJam, ...",
    ResumeTitle: "Présentation",
    ResumeTxt: "OnboardingVR est une expérience VR en solo conçue pour faciliter la familiarisation avec les contrôleurs VR. Son objectif principal est de démontrer l'importance d'un onboarding efficace pour nos solutions auprès de mes collaborateurs. Réalisé en parallèle de mes responsabilités principales, ce projet secondaire a été développé en solitaire sur une période d'un mois, bien que j'aie pu compter sur le soutien ponctuel d'un collègue développeur.",
    GoalsTitle: "Processus",
    GoalsTxt:"Après le projet StayAlive et les présentations qui ont suivi, l'idée de l'onboarding est restée au centre de mes préoccupations. J'ai eu pour objectif de créer un onboarding interactif en amont du niveau, offrant aux utilisateurs une meilleure compréhension des interactions possibles et de la prise en main de l'outil, tout en intégrant des éléments informatifs et graphiques dans un environnement 3D. J'ai entamé le processus en définissant les interactions essentielles, leur priorité et les contrôles à utiliser, en effectuant une recherche approfondie sur les différents contrôleurs disponibles et leurs applications dans divers jeux et expériences. La scène a été construite pour guider les utilisateurs à travers un onboarding étape par étapes, tout en leur permettant d'explorer et de tester les différentes commandes disponibles. La première étape de production a impliqué la modélisation de la pièce et des éléments nécessaires, en parallèle de la recherche d'assets 3D en raison de contraintes temporelles. Enfin, la production et le développement de l'expérience ont pu démarrer.",
    GoalsTxt2:"",
    DeroulementTxt: "Devlog - Retour",
    DeroulementTxt2: "En regardant en arrière, je pense que la force de ce projet est l'idée de vouloir le rendre modulaire, il a pour objectif de pouvoir évoluer en fonction du thème et des outils utilisés. La faiblesse du projet et son absence de QA test, afin de pouvoir le finaliser et l'améliorer, une étape de test est nécessaire pour savoir si l'introduction des controllers est compréhensible et voir les interactions réalisées par l'utilisateur. Je pense qu'une évolution des panneaux et du déroulement du niveau serait alors observable. Je pense également que la production aurait putt être plus efficace avec un casque VR plus à jour, le développement a été effectué pour un casque VR Dell datant de 2017,certains plugins facilitant la programmation d'interaction n'étaient alors pas accessibles.",
    Img1: "https://github.com/stevensmt/portfolio/blob/master/src/pages/portfolio/Onboarding/img01.png?raw=true",
    Img2: "https://github.com/stevensmt/portfolio/blob/master/src/pages/portfolio/Onboarding/img04.png?raw=true",
    Img3: "https://github.com/stevensmt/portfolio/blob/master/src/pages/portfolio/Onboarding/img02.png?raw=true",
    Img4: "https://github.com/stevensmt/portfolio/blob/master/src/pages/portfolio/Onboarding/img03.png?raw=true",
    Img5: "https://github.com/stevensmt/portfolio/blob/master/src/pages/portfolio/Onboarding/img05.png?raw=true",
    
    nextLink:"/portfolio/MixedReality",
    backLink:"/portfolio/VirtualReality",
};
const MR = {
    Title01: "Catégories",
    info01: "Projet MR",
    info012: "Multijoueur",
    Title02: "Rôles",
    info02: "UX-UI Design",
    info022: "Développement et intégration",
    Title03: "Années",
    info03: "2022-2023",
    Title04: "Outils",
    info04: "Unity, Blender, Figma, ...",
    ResumeTitle: "Présentation",
    ResumeTxt: "HoloDraw est un projet sur HoloLens en Mixte Reality, multijoueur. Il s'agit d'une expérience permettant à plusieurs utilisateurs de se connecter à distance afin de dessiner ensemble. Ce projet est un POC permettant de mettre en avant les possibilités qu'apportent la MR et l'espace collaboratif que cela propose. Le projet a été produit en plusieurs fois, nous en sommes aujourd'hui à sa troisième version sur une période d'environ 6 mois. Chaque version a été développée par une personne différente, j'ai eu toutefois la chance de pouvoir participer à chaque étape.",
    GoalsTitle: "Processus",
    GoalsTxt:"La première version découle de ma thèse professionnelle : les technologies XR peuvent-elles être une source d'aide pour les personnes en situation de handicap cognitif. Lors de la rédaction de la thèse, nous étions invités à réaliser un prototype et de le faire tester. J'avais imaginé un prototype sur HoloLens permettant à plusieurs personnes de communiquer, le prototype avait pour but de faire tester l'HoloLens, les gestes qui en découlent et voir si un support visuel pouvait aides les personnes en situation de handicap cognitif a mieux communiqué. Le manque de temps, de matériel et l'organisation n'ayant pas pu aboutir, ce prototype a été effectué en parallèle et continué en dehors de ma thèse. La première version a servi de POC, la seconde version a été reprise par un collègue pendant mon absence pour nettoyer le code et améliorer les performances. Cette seconde version nous a permis de tester l’expérience sur un large panel d'utilisateur et d'identifier ses limites. La troisième version a été effectuée par un autre collègue développeur qui a repris nos deux codes, et les maquettes que j'avais effectuées pour faciliter les interactions et améliorer les HUD. L'interaction a ainsi évolué pour permettre une meilleure liberté à l'utilisateur.",
    GoalsTxt2: "",
    DeroulementTxt: "Devlog - Retour",
    DeroulementTxt2: "En regardant en arrière, je pense que la force de notre projet est le développement des différentes versions, cela nous a permis de faire évoluer la solution suite aux retours des utilisateurs. Notre faiblesse, elle est liée aux changements des développeurs et la communication. En changeant trois fois de développeur, chacun a dû apprendre le fonctionnement des assets utilisé, reprendre à zéro, ce qui nous a fait perdre du temps. Le second développeur, ayant passé le plus de temps dessus étant parties avec la version 3, une perte de connaissance et de communication a été fortement ressenti, de même que la version 2 ayant commencé pendant mon absence, je n'ai pas pu proprement passer les informations, les points importants et expliquer le processus réalisé, cela a été très visible notamment sur l'interaction du dessin qui a été complètement modifié entre la version 1 et 2 et retrouvé pour la 3. En faisant tester la version 2, nous nous sommes rendus compte qu'en proposant un stylo à déplacer pour dessiner, créer une contrainte pour l'utilisateur, de plus certains utilisateurs perdaient leurs crayons, voir les boutons du panneau principal. En observant ceci, j'ai effectué une veille notamment sur les outils de Microsoft tel que Guide 365 et Remote assist, des outils disponibles sur HoloLens, et est effectué des maquettes des boutons du panneau principal et est écrit comment s'effectuer les interactions en prenant le temps de bien en reparler avec le nouveau développeur pour une version 3.",
    Img1: "https://github.com/stevensmt/portfolio/blob/master/src/pages/portfolio/MixedReality/img01.png?raw=true",
    Img2: "https://github.com/stevensmt/portfolio/blob/master/src/pages/portfolio/MixedReality/img04.png?raw=true",
    Img3: "https://github.com/stevensmt/portfolio/blob/master/src/pages/portfolio/MixedReality/img02.png?raw=true",
    Img4: "https://github.com/stevensmt/portfolio/blob/master/src/pages/portfolio/MixedReality/img03.png?raw=true",
    Img5: "https://github.com/stevensmt/portfolio/blob/master/src/pages/portfolio/MixedReality/img05.png?raw=true",
    
    nextLink:"/portfolio/These",
    backLink:"/portfolio/Onboarding", 
};
const these = {
    Where:"Cnam-Enjmin",
    Where2: "Gobelins - École de l'image",
    Title01: "Catégories",
    info01: "Thèse",
    info012: "Accessibilité et technologie XR",
    Title02: "Rôles",
    info02: "UX Research",
    info022: "Presentation et facilitation",
    Title03: "Années",
    info03: "2022",
    Title04: "Outils",
    info04: "Unity, Blender, Notion, Indesign ...",
    ResumeTitle: "Présentation",
    ResumeTxt: "Ma thèse de fin d'année en Mastère Spécialisé explore le potentiel des technologies XR pour soutenir les personnes en situation de handicap cognitif sur leur lieu de travail. Réalisée au cours de mon contrat d'apprentissage sur une période de six mois, cette étude a bénéficié de la supervision d'un tuteur de thèse. J'ai également eu l'opportunité de dialoguer avec des experts en accessibilité au sein de l'entreprise où j'étais en apprentissage, et j'ai mené trois entretiens avec des personnes en situation de handicap cognitif pour enrichir ma recherche.",
    GoalsTitle: "Processus",
    GoalsTxt:"Après avoir identifié la problématique et consulté mon tuteur de thèse, j'ai entrepris des recherches approfondies sur le croisement de l'handicap et des technologies XR, affinant progressivement le sujet pour répondre à la contrainte temporelle de six mois. Parallèlement à mon contrat d'alternance, j'ai poursuivi mes investigations et sollicité diverses communautés et experts pour recueillir leurs insights. Ces échanges m'ont aidé à cerner les principaux enjeux et à amorcer la recherche de solutions. Étant seule pour le développement du prototype, et le délai étant limité, cela ne m'a pas permis de le finaliser. J'ai plutôt formulé des hypothèses étayées par des recherches scientifiques pour valider ma proposition. En fin de période, j'ai soutenu ma thèse devant un jury de professionnels, exposant ma démarche, mes recherches, et les conclusions que j'en ai tirées. Pour préparer cette présentation, j'ai effectué un travail de facilitation visant à clarifier les concepts impliqués.",
    DeroulementTxt: "Devlog - Retour",
    DeroulementTxt2: "Ma soutenance s'est articulée en plusieurs phases : tout d'abord, la présentation de ma thèse, suivie d'une session de questions-réponses et enfin une discussion. Au cours de cette discussion finale, le jury a formulé de nouvelles pistes de recherche et m'a encouragé à poursuivre cette thèse, considérant que le principe et les recherches menées semblaient prometteurs. À l'époque, j'avais choisi de faire une pause dans cette recherche, aujourd'hui, si le format de thèse ne me paraît pas le plus adéquat, une équipe serait nécessaire pour continuer ses recherches.",
    DeroulementTxt3:"Avec du recul, je considère que le point fort de cette thèse réside dans la précision de la problématique, qui a facilité les recherches et la structure de la thèse. En croisant les domaines de ce handicap, des technologies XR et de l'accessibilité dans les jeux vidéo, j'ai pu apporter une nouvelle perspective sur l'accessibilité en entreprise. Cependant, je regrette de ne pas avoir eu le temps ni la structure adéquate pour tester la solution de Mixed Reality que j'avais imaginée. Idéalement, si je reprenais cette recherche, je me pencherais sur les lois entourant le handicap en milieu professionnel, collaborerais avec des professionnels du corps médical pour les tests, et solliciterais l'aide d'un ou plusieurs développeurs pour la partie technique.",
    DeroulementTxt4: "Aujourd'hui, la première expérience à évoluer et est présentée en tant que POC auprès de clients, toutefois, la démarche accessibilité n'est plus présente. Toutefois, je poursuis mes recherches et m'efforce de parler d'accessibilité lorsqu'un nouveau projet arrive.",
    Img1: "https://github.com/stevensmt/portfolio/blob/master/src/pages/portfolio/these/img01.png?raw=true",
    Img2: "https://github.com/stevensmt/portfolio/blob/master/src/pages/portfolio/these/img04.png?raw=true",
    Img3: "https://github.com/stevensmt/portfolio/blob/master/src/pages/portfolio/these/img02.png?raw=true",
    Img4: "https://github.com/stevensmt/portfolio/blob/master/src/pages/portfolio/these/img03.png?raw=true",
    Img5: "https://github.com/stevensmt/portfolio/blob/master/src/pages/portfolio/these/img05.png?raw=true",
    
    nextLink:"/portfolio/Research",
    backLink:"/portfolio/MixedReality",
};
const research = {
    Title01: "Catégories",
    info01: "Recherche",
    info012: "Design thinking",
    Title02: "Rôles",
    info02: "UX design",
    Title03: "Années",
    info03: "2021 - Aujourd'hui",
    Title04: "Outils",
    info04: "Figma, FigJam, Milanote, Powerpoint, Illustrator...",
    ResumeTitle: "Présentation",
    ResumeTxt: "Cet aparté est là pour présenter le processus de travail effectué lors d'une présentation client. En effet, dans le cadre actuel de mes tâches, il m'est arrivé de prendre le rôle de Consultant UX lors de présentations clients, afin d'identifier comment et est-ce que les expériences immersives peuvent les aider. L'idée était à travers ses recherches de mieux comprendre le client, ses activités, ses employés et ses activités. Une fois identifiée, une phase d'étude est effectuée dans le but de savoir ce qui peut être pertinent de lui montrer, quels sont les user cases et quel ton utilisés.",
    GoalsTitle: "Processus",
    GoalsTxt:"Pour mener à bien ce travail, je traverse plusieurs étapes. Tout commence par des discussions avec le commanditaire, généralement un membre de l'équipe des ventes et mon manager. L'objectif est d'identifier leur vision du client, ainsi que leur intérêt pour les technologies immersives. Cela nous permet de comprendre si la demande vient du client et, le cas échéant, si elle concerne un sujet spécifique. Ensuite, je parcours plusieurs phases : découverte, empathie, design et enfin, priorisation.",
    GoalsTxt2: "Lors de la phase de découverte, je mène des recherches approfondies sur la marque, son image et ses employés. Je surveille également les dernières avancées technologiques et la concurrence pour identifier les tendances du secteur. Une fois cette étape terminée, je passe à la phase d'empathie. Je commence par identifier le public cible, comprendre leurs motivations, problématiques et besoins. Cela me permet de mieux saisir leur situation et de commencer à élaborer leur parcours utilisateur en identifiant les points problématiques.",
    GoalsTxt3:"Cette phase est suivie par la phase de design, où je reprends la méthodologie 5W1H (What, Where, When, Who, Why, How). Cela me permet de synthétiser les étapes précédentes et de commencer l'idéation. Il peut s'agir de proposer des solutions existantes ou de créer de nouvelles solutions selon les besoins du client.",
    GoalsTxt4:"Dans l'étape de priorisation, je prends les solutions identifiées précédemment et les organise autour de deux axes (pouvant évoluer en fonction des objectifs du client). Certaines solutions sont placées dans la partie supérieure droite du schéma, ce que l'on appelle les 'win-win'. Ce sont les solutions les plus susceptibles de plaire au client.",
    GoalsTxt5:"Une fois ces étapes terminées, un travail de facilitation est nécessaire pour partager plus facilement les idées. Une première présentation est effectuée avec l'équipe des ventes pour recueillir leurs retours, puis une présentation est organisée avec le client. Cette première étape permet surtout de présenter nos capacités et de servir d'introduction avant un travail plus approfondi avec le client.",
    DeroulementTxt: "Devlog - Retour",
    DeroulementTxt2: "Rétrospectivement, la force ici est le processus qui peut être effectué de manière modulaire, c'est-à-dire est modifié en fonction du nombre de personnes sur le sujet, le temps à y accorder et le client. Nous gardons les grandes lignes et modifions en fonction des besoins. Cependant, en tant que seuls UX designer au sein de mon équipe, la plupart des ateliers sont actuellement réalisés en solo. Pour améliorer notre fonctionnement, j'aspire à collaborer davantage avec d'autres membres de l'équipe, ce qui nous permettrait de remettre en question certaines idées et de partager nos découvertes. Bien que des discussions informelles aient lieu avec mes collègues, l'introduction de formats d'ateliers pourrait grandement bénéficier à notre processus.",
    Img1: "https://github.com/stevensmt/portfolio/blob/master/src/pages/portfolio/Research/img01.png?raw=true",
    Img2: "https://github.com/stevensmt/portfolio/blob/master/src/pages/portfolio/Research/img04.png?raw=true",
    Img3: "https://github.com/stevensmt/portfolio/blob/master/src/pages/portfolio/Research/img02.png?raw=true",
    Img4: "https://github.com/stevensmt/portfolio/blob/master/src/pages/portfolio/Research/img03.png?raw=true",
    Img5: "https://github.com/stevensmt/portfolio/blob/master/src/pages/portfolio/Research/img05.png?raw=true",

    nextLink:"/portfolio/VirtualReality",
    backLink:"/portfolio/These",
};



const socialprofils = {
    cv: "https://github.com/stevensmt/portfolio/blob/master/src/pages/home/img/cv.png?raw=true",
    linkedin: "https://www.linkedin.com/in/margot-stevens-162303185/",
    email: "m.stevens@protonmail.com",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    jobtimeline,
    skills,
    learn,
    services,
    introdata,
    socialprofils,
    logotext,
    research,
    MR,
    these,
    VR,
    onboarding,
};