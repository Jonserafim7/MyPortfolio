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
    '/imgs/quizzical2.jpeg',
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
    '/imgs/movie-list2.jpg',
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
    '/imgs/airbnb2.jpg',
    'https://github.com/Jonserafim7/AirBnb-clone',
    ''
)

// push project to projectsData array
projectsData.push(airbnbClone)

// create new project
const addToCart = new Project(
    'Add to Cart',
    'Web App',
    'Real-Time Data Handling',
    ['HTML', 'CSS', 'JavaScript', 'Firebase'],
    'Add to Cart is a real-time shopping list application that allows users to add, display, and remove items from a list. Built using HTML, CSS, JavaScript, and Firebase, this project demonstrates dynamic data management with a modern web stack.',
    '/imgs/add-to-cart3.jpg',
    'https://github.com/Jonserafim7/Add-to-Cart---Shopping-List-App',
    'https://shopping-cart-jonas.netlify.app/'
)

// push project to projectsData array
projectsData.push(addToCart)

// create new project
const blackjackGame = new Project(
    'Blackjack Game',
    'Web App',
    'Interactive Game Development',
    ['HTML', 'CSS', 'JavaScript'],
    'A simple web-based Blackjack game to practice DOM manipulation, event handling, and game logic implementation using HTML, CSS, and JavaScript. Key learnings include dynamic content updates, user interaction management, and conditional logic for game states.',
    '/imgs/blackjack2.jpg',
    'https://github.com/Jonserafim7/Blackjack-Game',
    'https://black-jack-jonas.netlify.app/'
)

// push project to projectsData array
projectsData.push(blackjackGame)

// create new project
const passwordGenerator = new Project(
    'Password Generator',
    'Web App',
    'Customizable Secure Passwords',
    ['HTML', 'CSS', 'JavaScript'],
    'A web-based application to generate secure, random passwords with customizable preferences. Key takeaways include DOM manipulation, event handling, form input synchronization, random character generation, conditional logic, and responsive CSS styling.',
    '/imgs/passwrod-generator2.jpg', // Ensure this path is correct and the image is available
    'https://github.com/Jonserafim7/Random-Password-Generator',
    'https://random-password-jonas.netlify.app/'
)

// push project to projectsData array
projectsData.push(passwordGenerator)

// create new project
const unitConverter = new Project(
    'Unit Conversion',
    'Web App',
    'Unit Conversion',
    ['HTML', 'CSS', 'JavaScript'],
    'Metric/Imperial Unit Conversion is a web-based tool that allows users to convert units between metric and imperial systems. The application supports conversions for length (meters/feet), volume (liters/gallons), and mass (kilograms/pounds). Key takeaways include DOM manipulation, event handling, and unit conversion logic using JavaScript.',
    '/imgs/unit-converter2.jpg', // Ensure this path is correct and the image is available
    'https://github.com/Jonserafim7/Imperial-Metric-Unit-Converter',
    'https://imperial-unit-converter-jonas.netlify.app/'
)

// push project to projectsData array
projectsData.push(unitConverter)

// create new project
const cssFundamentals = new Project(
    'CSS Fundamentals',
    'Web Page',
    'CSS Fundamentals',
    ['HTML', 'CSS'],
    'CSS Fundamentals is a personal portfolio webpage demonstrating essential CSS skills. It showcases responsive layout, typography styling, reusable utility classes, hover effects, and semantic HTML. Key takeaways include mastering basic CSS techniques for layout and styling.',
    '/imgs/css-fundamentals2.jpg', // Ensure this path is correct and the image is available
    'https://github.com/Jonserafim7/Css-fundamentals-chalenge',
    'https://css-fundamentals-one-jonas.netlify.app/'
)

// push project to projectsData array
projectsData.push(cssFundamentals)

// create new project
const memePicker = new Project(
    'Meme Picker',
    'Web App',
    'Emotion-Based Meme Selection',
    ['HTML', 'CSS', 'JavaScript'],
    "Pumpkin's Purrfect Meme Picker is a web-based tool that lets users select their current emotion and receive a matching cat meme. Features include emotion selection, GIF filter, and random meme display. Key takeaways include DOM manipulation, event handling, and array methods using JavaScript.",
    '/imgs/meme-picker2.jpg', // Ensure this path is correct and the image is available
    'https://github.com/Jonserafim7/Meme-Picker',
    'https://meme-picker-jonas.netlify.app/'
)

// push project to projectsData array
projectsData.push(memePicker)

// create new project
const restaurantOrderingApp = new Project(
    'Restaurant App',
    'Web App',
    'Online Food Ordering System',
    ['HTML', 'CSS', 'JavaScript'],
    'Restaurant Ordering App is a web-based tool that allows users to browse a menu, add items to their cart, and complete an order with payment details. Key takeaways include DOM manipulation, event handling, and form processing using JavaScript.',
    '/imgs/ordering-app2.jpg', // Ensure this path is correct and the image is available
    'https://github.com/Jonserafim7/Restaurant-ordering-app',
    'https://restaurant-ordering-jonas.netlify.app/'
)

// push project to projectsData array
projectsData.push(restaurantOrderingApp)

// create new project
const multiStepForm = new Project(
    'Multi-Step Form',
    'Web App',
    'Form Navigation / Firebase Integration',
    ['React', 'SCSS', 'Firebase'],
    'Multi-Step Form is a React-based web application that guides users through a series of steps to complete a form. Users can input personal information, select a subscription plan, choose add-ons, and confirm their selections. Key takeaways include React component development, form validation, and Firebase Firestore integration.',
    '/imgs/multi-step-form.jpg', // Ensure this path is correct and the image is available
    'https://github.com/Jonserafim7/multi-step-form-main',
    'https://multi-step-form-jonas.netlify.app/'
)

// push project to projectsData array
projectsData.push(multiStepForm)

// create new project
const componentLibrary = new Project(
    'Component Library',
    'Web App',
    'Reusable Component Design',
    ['React', 'SCSS'],
    'Component Library is a React-based web application that showcases a collection of reusable UI components. Users can view, copy, and customize components for use in their own projects. Key takeaways include React component design, SCSS styling, and component documentation.',
    '/imgs/component-library.png', // Ensure this path is correct and the image is available
    'https://github.com/Jonserafim7/Component-Library',
    ''
)

// push project to projectsData array
projectsData.push(componentLibrary)

export { projectsData }
