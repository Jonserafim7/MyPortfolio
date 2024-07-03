// PROJECTS DATA
const projectsData = []

// object constructor for projects
function Project(title, type, scope, badges, description, img, github, live) {
    this.title = title
    this.type = type
    this.scope = scope
    this.badges = badges
    this.description = description
    this.img = img
    this.github = github
    this.live = live
}

// create new project
const vanlife = new Project(
    'Vanlife',
    'Website',
    'React Router',
    ['HTML', 'CSS', 'JS', 'React'],
    'VANLIFE is a website for people to rent out camper vans for their next road trip adventure. This is a learnining-focused project and is part of the Frontend Developer Career Path on Scrimba.',
    '/imgs/vanlife.png',
    'https://github.com/Jonserafim7/VANLIFE-Learning-React-Router',
    'https://vanslifereactrouter.netlify.app/'
)

// push project to projectsData array
projectsData.push(vanlife)

// create new project
const quizzical = new Project(
    'Quizzical',
    'Trivia App',
    'State Management / API Fetching',
    ['HTML', 'CSS', 'JS', 'React'],
    'QUIZZICAL is a trivia app that fetches questions from the Open Trivia Database API. This is a learnining-focused project and is part of the Frontend Developer Career Path on Scrimba.',
    '/imgs/quizzical.jpeg',
    'https://github.com/Jonserafim7/SoloProject-Quizzical',
    ''
)

// push project to projectsData array
projectsData.push(quizzical)

// create new project
const movieWachlist = new Project(
    'Watchlist',
    'Web App',
    'Local Storage / Data fetching',
    ['HTML', 'CSS', 'JS', 'React'],
    'MOVIE WATCHLIST is a website for people to add movies to their watchlist. This is a learnining-focused project and is part of the Frontend Developer Career Path on Scrimba.',
    '/imgs/movie-list.jpeg',
    '',
    ''
)

// push project to projectsData array
projectsData.push(movieWachlist)

// create new project
const airbnbClone = new Project(
    'Airbnb Clone',
    'Website',
    'React props / Reusable components',
    ['HTML', 'CSS', 'JS', 'React'],
    'AIRBNB CLONE is a website that mimics the Airbnb website. This is a learnining-focused project and is part of the Frontend Developer Career Path on Scrimba.',
    '/imgs/airbnb.jpeg',
    'https://github.com/Jonserafim7/AirBnb-clone',
    ''
)

// push project to projectsData array
projectsData.push(airbnbClone)

export { projectsData }
