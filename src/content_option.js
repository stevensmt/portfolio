const logotext = "MARGOT";
const meta = {
    title: "Margot Stevens",
    description: "I’m Margot Stevens UX Designer Currently specialised on Immersive Experience, such as AR-VR-MR.",
};

const introdata = {
    title: "I’m Margot Stevens",
    animated: {
        first: "I love UX design",
        second: "I design cool immersive experiences",
        third: "I imagine UserJourney and Level Design",
    },
    description: "Hello, I'm an UX Designer currently specialised on Immersive Experience, such as AR-VR-MR.",
    your_img_url: "https://images.unsplash.com/photo-1514790193030-c89d266d5a9d",
};

const dataabout = {
    title: "About me",
    aboutmeEN: "UX designer, I have specialized through my experiences in immersive technologies such as AR, VR and MR. My various experiences have enabled me to work on the different stages in the production of a solution, i.e. from research, through ideation, level design, right up to production. Personally, I believe that the testing, onboarding and iteration phases are important to ensure the highest quality creation.",
    aboutme: "UX designer, je me suis spécialisé à travers mes expériences dans les technologies immersives telles que l'AR, la VR et la MR. Mes différentes expériences m'ont permis de travailler sur les différentes étapes de productions d'une solution, c'est-à-dire, de la recherche, en passant par l'idéation, le Level design, jusqu'à la production. Personnellement, je trouve que les phases de test, d'onboarding et d'itération sont importantes pour permettre la création la plus qualitative.",
};
const worktimeline = [
    {
        jobtitle: "UX Design Immersive Experience",
        where: "Atos - Bezons (95)",
        date: "01/2021 - Aujourd'hui",
    },
    {
        jobtitle: "Apprenticeship UX Design Immersive Experience",
        where: "Atos - Bezons (95)",
        date: "2021-2022",
    },
    {
        jobtitle: "UX-UI Designer",
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
        value: 60,
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
        title: "Workshop",
        description: "Un workshop est un moment ou un groupe d’individu se regroupe pour atteindre un même objectif. Cela peut être la rédaction d’une problématique, trouver sa réponse ou même travailler sur la cohésion d’équipe.",
        descriptionEn: "A workshop is a time when a group of people come together to achieve a common goal. This can be writing a problem, finding an answer or even working on team building.",
    },
    {
        title: "UX Research",
        description: "Chaque projet commence par une recherche, celle-ci continu pendant la phase d’idéation et de production.",
        descriptionEn: "Each project starts with research, which continues during the ideation and production phase.",
    },
    {
        title: "Level Design",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
        descriptionEn: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
    },
    {
        title: "Prototypage",
        description: "Le processus de prototypage permet de réaliser et tester des fonctionnalités et/ou outils pour définir le potentiel qu’il présente. Cela permet également de fonctionner par itération en testant et en modifiant le prototype. ",
        descriptionEn: "The prototyping process allows for the development and testing of features and/or tools to define their potential. It also allows for iteration by testing and modifying the prototype.",
    },
    {
        title: "VR Project",
        description: "Production de projet en VR, présentation, démonstration et mise en place pour expliquer la prise en main de contrôler.",
        descriptionEn: "Production of VR projects, presentation, demonstration and set-up to explain the handling of the controls.",
    },
    {
        title: "HoloLens",
        description: "Production de projet en MR, présentation, démonstration et mise en place pour expliquer la prise en main de contrôler.",
        descriptionEn: "Production of MR projects, presentation, demonstration and set-up to explain the handling of the controls.",
    },
    {
        title: "Accessibility",
        description: "L’accessibilité et les technologies XR sont des sujets que j’ai à plusieurs reprise rencontrées et sur lequel je travaille encore actuellement. A la base, cette étude a commencé avec ma thèse de fin d’étude, thèse de mastère spécialisé réalisé en 6 mois pendant notre alternance.",
        descriptionEn: "The accessibility in XR technologies is a subject that I have encountered several times and on which I am still working. Basically, this study started with my end-of-study thesis, a specialised master's thesis carried out in 6 months during our apprenticeship. ",
    },
];
const dataportfolio = [{
        img: "https://github.com/stevensmt/portfolio/blob/master/src/assets/images/these.png?raw=true",
        description: "Accessibility",
        link: "/accessibility",
    },
    {
        img: "https://github.com/stevensmt/portfolio/blob/master/src/assets/images/prototype.png?raw=true",
        description: "Prototypage",
        link: "/prototype",
    },
    {
        img: "https://github.com/stevensmt/portfolio/blob/master/src/assets/images/research.png?raw=true",
        description: "Research",
        link: "/research",
    },

    {
        img: "https://github.com/stevensmt/portfolio/blob/master/src/assets/images/MR.png?raw=true",
        description: "Mixed Reality",
        link: "/MR",
    },
    {
        img: "https://github.com/stevensmt/portfolio/blob/master/src/assets/images/IceCube.png?raw=true",
        description: "Ice Cube",
        link: "/IceCube",
    },
    {
        img: "https://github.com/stevensmt/portfolio/blob/master/src/assets/images/workshop01.png?raw=true",
        description: "Workshop",
        link: "/workshop",
    },

    {
        img: "https://github.com/stevensmt/portfolio/blob/master/src/assets/images/VR.png?raw=true",
        description: "Virtual Reality",
        link: "/VR",
    },

];
const icecube = {
    title: "Resume",
    resume: "Projet étudiant consistant en la production du onboarding d’un jeu. Notre groupe de quatre étudiants a produit Ice Cube - Ad memoriam, un jeu narratif en 2D réalisé en moins de 6 mois en parallèle de notre alternance.",
    resumeEN: "Student project consisting of the production of an onboarding game. Our group of four students produced Ice Cube - Ad memoriam, a 2D narrative game achieved in less than 6 months in parallel to our apprenticeship.",
    description: "here",
    link_game: "https://shynis.itch.io/ice-cubes",
    titleObj: "Goals",
    objectif: "Ice Cube est un projet de fin d'étude réalisé en parallèle de notre alternance. Nous étions un groupe de quatre et devions réaliser en moins de 6 mois une première expérience du jeu permettant de comprendre son principe. Nous avons réalisé un onboarding d'un plateformer narratif. Pendant la phase de production, j’ai tenu le rôle de Directrice Artistique, Lead Art et ai également tenu le rôle de Level Designer, UX & Motion Designer.",
    objectifEN: "Ice Cube is an end-of-study project carried out in parallel with our work-study program. We were a group of four, and in less than 6 months we had to create a first experience of the game, enabling us to understand its principle. We carried out onboarding for a narrative platformer. During the production phase, I took on the role of Art Director, Lead Art and also Level Designer, UX & Motion Designer.",
    img_link01: "https://images.unsplash.com/photo-1514790193030-c89d266d5a9d",   
    img_link02: "https://github.com/stevensmt/portfolio/blob/master/src/pages/portfolio/IceCube/uiux.png?raw=true",
    title03: "UX-UI design",
    ENtext02: "- Sign", 
    ENtxt23: "- Graphic charter", 
    ENtxt24: "- Design system", 
    ENtxt25: "- Mockup and wireframe", 
    ENtxt26: "- HUD for the dialog box and the choice", 
    text02: "- Signe", 
    txt23: "- Charte graphique", 
    txt24: "- Design system", 
    txt25: "- Mockup et wireframe", 
    txt26: "- HUD des boîtes de dialogues et des choix", 
    img_link03: "https://github.com/stevensmt/portfolio/blob/master/src/pages/portfolio/IceCube/level.png?raw=true",
    title02: "Level design",
    ENtext03: "- Level pacing", 
    ENtxt33: "- Design of the environment and placement of the elements needed for the puzzle", 
    ENtxt34: "- Prioritization of tasks", 
    ENtxt35: "- Flow of the levels to guide the players", 
    ENtxt36: "- Schematization of the placement of set elements", 
    text03: "- Rythme des niveaux", 
    txt33: "- Conception de l'environnement et placement des éléments nécessaire pour l'énigme", 
    txt34: "- Priorisation des tâches", 
    txt35: "- Cheminement des niveaux pour guider les joueurs", 
    txt36: "- Schématisation de la mise en place des éléments de décors",
    none: "-   ", 
};


const contactConfig = {
    YOUR_EMAIL: "name@domain.com",
    YOUR_FONE: "(555)123-4567",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vehicula eu nunc et sollicitudin. Cras pulvinar, nisi at imperdiet pharetra. ",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_id",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};

const socialprofils = {
    github: "https://github.com",
    facebook: "https://facebook.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
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
    contactConfig,
    socialprofils,
    logotext,
    icecube,
};