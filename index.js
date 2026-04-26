const domains = {
    software_engineering: { title: "Software Engineering", desc: "You have a logical mind and love building systems." },
    data_science: { title: "Data Science", desc: "You love patterns, numbers, and uncovering hidden truths." },
    design: { title: "UI/UX Design", desc: "You have an eye for aesthetics and care deeply about user experience." },
    business: { title: "Business & Management", desc: "You are a natural leader with a strategic mindset." },
    healthcare: { title: "Medical & Healthcare", desc: "You possess deep empathy and a desire to help others." },
    environmental: { title: "Environmental Science", desc: "You are passionate about nature and sustainability." },
    law: { title: "Law & Advocacy", desc: "You value justice, debate, and defending what is right." },
    mechanical: { title: "Mechanical Engineering", desc: "You love taking things apart and building physical machines." },
    psychology: { title: "Psychology & Counseling", desc: "You are deeply fascinated by human behavior and the mind." },
    creative: { title: "Creative Arts & Writing", desc: "You have a rich imagination and express yourself beautifully." }
};

let quizCounter = 0;
const genericQuizzes = [
    (task, domain) => [
        { q: `What is the primary objective of: "${task}"?`, opts: ["To practice core skills", "To waste time", "To memorize facts", "To buy software"], a: "To practice core skills" },
        { q: `How does this task help you in ${domain}?`, opts: ["It builds foundational knowledge", "It makes you instantly rich", "It is legally required", "It looks cool"], a: "It builds foundational knowledge" },
        { q: `What mindset is needed to succeed in this task?`, opts: ["Patience and curiosity", "Anger and speed", "Ignoring details", "Copying others"], a: "Patience and curiosity" }
    ],
    (task, domain) => [
        { q: `Why is "${task}" essential for ${domain}?`, opts: ["It lays a strong foundation", "It's just for fun", "To impress friends", "No specific reason"], a: "It lays a strong foundation" },
        { q: "What's the best approach to complete this?", opts: ["Focus and consistency", "Rushing through", "Doing it while watching TV", "Skipping the hard parts"], a: "Focus and consistency" },
        { q: "What should you do if you get stuck?", opts: ["Ask for help or research", "Give up completely", "Cry", "Pretend it's finished"], a: "Ask for help or research" }
    ],
    (task, domain) => [
        { q: `What skill does "${task}" primarily develop?`, opts: ["Problem-solving and critical thinking", "Typing speed", "Sleeping", "Eating fast"], a: "Problem-solving and critical thinking" },
        { q: `How does this relate to real-world ${domain} work?`, opts: ["It simulates actual tasks professionals do", "It doesn't at all", "It's a rare scenario", "Only bosses do this"], a: "It simulates actual tasks professionals do" },
        { q: "What is a common mistake when doing this?", opts: ["Ignoring the core principles", "Drinking too much water", "Using a mouse", "Blinking"], a: "Ignoring the core principles" }
    ],
    (task, domain) => [
        { q: `What is the first step when starting "${task}"?`, opts: ["Understanding the requirements", "Guessing the answer", "Taking a nap", "Complaining"], a: "Understanding the requirements" },
        { q: "How can you measure success in this task?", opts: ["By how much you learn and improve", "By how fast you finish", "By the colors used", "By the noise made"], a: "By how much you learn and improve" },
        { q: `Why do professionals in ${domain} value this?`, opts: ["It's a core competency", "They don't value it", "It's a secret", "It pays the most"], a: "It's a core competency" }
    ],
    (task, domain) => [
        { q: `What mindset is ideal for "${task}"?`, opts: ["Curiosity and perseverance", "Apathy", "Frustration", "Boredom"], a: "Curiosity and perseverance" },
        { q: "What resource would be most helpful?", opts: ["Tutorials and documentation", "A cooking book", "A broken compass", "A dictionary from 1990"], a: "Tutorials and documentation" },
        { q: `How does mastering this help your ${domain} career?`, opts: ["It opens up advanced opportunities", "It makes you look taller", "It guarantees fame", "It does nothing"], a: "It opens up advanced opportunities" }
    ]
];

// Generic quiz generator to ensure every task has 3 relevant questions
function generateQuiz(taskText, domainId) {
    const dTitle = domains[domainId].title;
    const set = genericQuizzes[quizCounter % genericQuizzes.length];
    quizCounter++;
    return set(taskText, dTitle);
}

const tasksMap = {
    software_engineering: [
        { text: "Write a 'Hello World' program in Python", quiz: [
            { q: "What does 'print()' do in Python?", opts: ["Outputs text to screen", "Prints to a printer", "Deletes files", "Closes the app"], a: "Outputs text to screen" },
            { q: "Why start with 'Hello World'?", opts: ["To verify the setup works", "Because Python demands it", "To hack a mainframe", "It's a secret code"], a: "To verify the setup works" },
            { q: "What is a string in programming?", opts: ["A sequence of characters", "A piece of yarn", "A number", "A boolean"], a: "A sequence of characters" }
        ]},
        { text: "Complete a basic HTML/CSS tutorial", quiz: generateQuiz("Complete a basic HTML/CSS tutorial", "software_engineering") },
        { text: "Solve 5 beginner logic puzzles", quiz: generateQuiz("Solve 5 beginner logic puzzles", "software_engineering") },
        { text: "Build a simple calculator app", quiz: generateQuiz("Build a simple calculator app", "software_engineering") },
        { text: "Create a GitHub account and push code", quiz: generateQuiz("Create a GitHub account and push code", "software_engineering") }
    ],
    data_science: [
        { text: "Learn basic Statistics concepts (Mean, Median, Mode)", quiz: generateQuiz("Learn basic Statistics concepts", "data_science") },
        { text: "Create a spreadsheet tracking a daily habit", quiz: generateQuiz("Create a spreadsheet tracking a daily habit", "data_science") },
        { text: "Learn basic SQL SELECT queries", quiz: generateQuiz("Learn basic SQL SELECT queries", "data_science") },
        { text: "Read an article about Machine Learning", quiz: generateQuiz("Read an article about Machine Learning", "data_science") },
        { text: "Analyze a public dataset on Kaggle", quiz: generateQuiz("Analyze a public dataset on Kaggle", "data_science") }
    ],
    design: [
        { text: "Redesign the UI of a simple login page", quiz: generateQuiz("Redesign the UI of a simple login page", "design") },
        { text: "Learn the basics of color theory", quiz: generateQuiz("Learn the basics of color theory", "design") },
        { text: "Create a wireframe for a mobile app", quiz: generateQuiz("Create a wireframe for a mobile app", "design") },
        { text: "Analyze a popular website's UX flaws", quiz: generateQuiz("Analyze a popular website's UX flaws", "design") },
        { text: "Design a logo for a fictional brand", quiz: generateQuiz("Design a logo for a fictional brand", "design") }
    ],
    business: [
        { text: "Draft a 1-page business plan", quiz: generateQuiz("Draft a 1-page business plan", "business") },
        { text: "Learn to read a basic balance sheet", quiz: generateQuiz("Learn to read a basic balance sheet", "business") },
        { text: "Analyze a successful marketing campaign", quiz: generateQuiz("Analyze a successful marketing campaign", "business") },
        { text: "Pitch a product idea to a friend", quiz: generateQuiz("Pitch a product idea to a friend", "business") },
        { text: "Read about the Lean Startup methodology", quiz: generateQuiz("Read about the Lean Startup methodology", "business") }
    ],
    healthcare: [
        { text: "Learn basic First Aid and CPR principles", quiz: generateQuiz("Learn basic First Aid and CPR principles", "healthcare") },
        { text: "Study human anatomy basics (Skeletal system)", quiz: generateQuiz("Study human anatomy basics (Skeletal system)", "healthcare") },
        { text: "Read a case study on patient empathy", quiz: generateQuiz("Read a case study on patient empathy", "healthcare") },
        { text: "Understand the basics of vital signs", quiz: generateQuiz("Understand the basics of vital signs", "healthcare") },
        { text: "Research public health challenges in your area", quiz: generateQuiz("Research public health challenges in your area", "healthcare") }
    ],
    environmental: [
        { text: "Calculate your personal carbon footprint", quiz: generateQuiz("Calculate your personal carbon footprint", "environmental") },
        { text: "Learn about local recycling guidelines", quiz: generateQuiz("Learn about local recycling guidelines", "environmental") },
        { text: "Research renewable energy sources", quiz: generateQuiz("Research renewable energy sources", "environmental") },
        { text: "Start a small indoor plant or compost bin", quiz: generateQuiz("Start a small indoor plant or compost bin", "environmental") },
        { text: "Read about an ongoing conservation effort", quiz: generateQuiz("Read about an ongoing conservation effort", "environmental") }
    ],
    law: [
        { text: "Read the basics of your local Constitution", quiz: generateQuiz("Read the basics of your local Constitution", "law") },
        { text: "Watch a famous mock trial or debate", quiz: generateQuiz("Watch a famous mock trial or debate", "law") },
        { text: "Analyze a landmark Supreme Court case", quiz: generateQuiz("Analyze a landmark Supreme Court case", "law") },
        { text: "Draft a simple mock contract", quiz: generateQuiz("Draft a simple mock contract", "law") },
        { text: "Learn about the differences between civil and criminal law", quiz: generateQuiz("Learn about the differences between civil and criminal law", "law") }
    ],
    mechanical: [
        { text: "Learn how a 4-stroke engine works", quiz: generateQuiz("Learn how a 4-stroke engine works", "mechanical") },
        { text: "Design a simple gear system on paper", quiz: generateQuiz("Design a simple gear system on paper", "mechanical") },
        { text: "Take apart a broken appliance and identify parts", quiz: generateQuiz("Take apart a broken appliance and identify parts", "mechanical") },
        { text: "Learn the basics of CAD software", quiz: generateQuiz("Learn the basics of CAD software", "mechanical") },
        { text: "Study basic thermodynamics principles", quiz: generateQuiz("Study basic thermodynamics principles", "mechanical") }
    ],
    psychology: [
        { text: "Read about the 'Big Five' personality traits", quiz: generateQuiz("Read about the 'Big Five' personality traits", "psychology") },
        { text: "Learn the basics of cognitive behavioral therapy", quiz: generateQuiz("Learn the basics of cognitive behavioral therapy", "psychology") },
        { text: "Observe and document human interactions in a public space", quiz: generateQuiz("Observe and document human interactions in a public space", "psychology") },
        { text: "Research a common psychological bias", quiz: generateQuiz("Research a common psychological bias", "psychology") },
        { text: "Keep a daily emotion journal for 3 days", quiz: generateQuiz("Keep a daily emotion journal for 3 days", "psychology") }
    ],
    creative: [
        { text: "Write a short 500-word story", quiz: generateQuiz("Write a short 500-word story", "creative") },
        { text: "Sketch a portrait or a landscape", quiz: generateQuiz("Sketch a portrait or a landscape", "creative") },
        { text: "Analyze the composition of a famous painting", quiz: generateQuiz("Analyze the composition of a famous painting", "creative") },
        { text: "Learn the basics of digital illustration", quiz: generateQuiz("Learn the basics of digital illustration", "creative") },
        { text: "Create a mood board for a fictional character", quiz: generateQuiz("Create a mood board for a fictional character", "creative") }
    ]
};

const questions = [
    {
        title: "If you had a free weekend and $1000 to start a project, what would you do?",
        options: [
            { text: "Buy parts to build a robot or custom PC", domains: ["mechanical", "software_engineering"] },
            { text: "Invest it to grow the money or start a side hustle", domains: ["business", "law"] },
            { text: "Buy premium art supplies or digital design software", domains: ["design", "creative"] },
            { text: "Donate to a charity or buy medical kits for the needy", domains: ["healthcare", "psychology"] },
            { text: "Fund a local community garden or clean-up effort", domains: ["environmental", "data_science"] }
        ]
    },
    {
        title: "When a complex crisis happens in your friend group, you usually:",
        options: [
            { text: "Analyze the facts and figure out who is logically right", domains: ["law", "data_science"] },
            { text: "Listen deeply to everyone's feelings and mediate", domains: ["psychology", "healthcare"] },
            { text: "Take charge, delegate tasks, and solve the issue fast", domains: ["business", "software_engineering"] },
            { text: "Suggest a fun creative activity to distract them", domains: ["creative", "design"] },
            { text: "Suggest a hike or outdoor retreat to calm down", domains: ["environmental", "mechanical"] }
        ]
    },
    {
        title: "What type of puzzle or game do you enjoy the most?",
        options: [
            { text: "Strategy board games or complex resource management", domains: ["business", "data_science"] },
            { text: "Logic puzzles like Sudoku or coding challenges", domains: ["software_engineering", "mechanical"] },
            { text: "Story-driven roleplaying games with deep lore", domains: ["creative", "psychology"] },
            { text: "Games involving quick reflexes and physical coordination", domains: ["healthcare", "environmental"] },
            { text: "Debate games, trivia, or argumentative games", domains: ["law", "design"] }
        ]
    },
    {
        title: "What kind of documentary would you binge-watch?",
        options: [
            { text: "How massive bridges and skyscrapers are built", domains: ["mechanical", "design"] },
            { text: "The psychology of criminals and true crime", domains: ["psychology", "law"] },
            { text: "Breakthroughs in artificial intelligence and tech", domains: ["software_engineering", "data_science"] },
            { text: "The daily lives of ER doctors and surgeons", domains: ["healthcare", "creative"] },
            { text: "Climate change and exploring deep oceans", domains: ["environmental", "business"] }
        ]
    },
    {
        title: "If you could instantly master one skill, it would be:",
        options: [
            { text: "Speaking perfectly in public and persuading anyone", domains: ["law", "business"] },
            { text: "Understanding exactly how the human body works", domains: ["healthcare", "environmental"] },
            { text: "Writing code in any programming language instantly", domains: ["software_engineering", "data_science"] },
            { text: "Painting masterpieces or writing best-selling novels", domains: ["creative", "design"] },
            { text: "Reading people's true emotions just by looking at them", domains: ["psychology", "mechanical"] }
        ]
    },
    {
        title: "Which sentence describes your core motivation?",
        options: [
            { text: "I want to invent things that change how the world works.", domains: ["software_engineering", "mechanical"] },
            { text: "I want to seek truth, justice, and uncover hidden facts.", domains: ["law", "data_science"] },
            { text: "I want to build an empire and lead others to success.", domains: ["business", "design"] },
            { text: "I want to deeply understand and heal human suffering.", domains: ["healthcare", "psychology"] },
            { text: "I want to express my soul and preserve the beauty of our planet.", domains: ["creative", "environmental"] }
        ]
    }
];

let currentQuestion = 0;
let scores = {};
let spaceInterval;

let viewHistory = [];

// DOM Elements
const views = document.querySelectorAll('.view');
function switchView(viewId, isBack = false) {
    const currentActive = document.querySelector('.view.active');
    
    // Add to history if valid
    if (currentActive && !isBack) {
        if (!['space-travel-view', 'thinking-view'].includes(currentActive.id)) {
            viewHistory.push(currentActive.id);
        }
    }

    views.forEach(v => v.classList.remove('active'));
    document.getElementById(viewId).classList.add('active');

    // Handle Global Back Button visibility
    const backBtn = document.getElementById('global-back-btn');
    if (viewId === 'auth-view' || viewId === 'landing-view') {
        backBtn.style.display = 'none';
        if (viewId === 'auth-view') viewHistory = []; // Reset history on auth view
        if (viewId === 'landing-view') viewHistory = ['auth-view']; // Make auth view the root
    } else if (viewId === 'space-travel-view' || viewId === 'thinking-view') {
        backBtn.style.display = 'none';
    } else {
        backBtn.style.display = 'block';
    }
}

function goBack() {
    if (viewHistory.length > 0) {
        const prevView = viewHistory.pop();
        switchView(prevView, true);
    }
}

// Result Elements
const resultDomain = document.getElementById('result-domain');
const resultDesc = document.getElementById('result-description');

// Roadmap Elements
const roadmapDomainName = document.getElementById('roadmap-domain-name');
const closenessPercent = document.getElementById('closeness-percent');
const closenessFill = document.getElementById('closeness-fill');
const tasksContainer = document.getElementById('tasks-container');
const completionPopup = document.getElementById('completion-popup');

// Quiz Elements
const quizPopup = document.getElementById('quiz-popup');
const quizTitle = document.getElementById('quiz-title');
const quizQuestionText = document.getElementById('quiz-question-text');
const quizOptionsContainer = document.getElementById('quiz-options-container');
const quizCurrentQ = document.getElementById('quiz-current-q');
const btnQuizCancel = document.getElementById('btn-quiz-cancel');

// Victory Overlay
const victoryOverlay = document.getElementById('victory-overlay');

// 1. Space Travel
function startSpaceTravel() {
    switchView('space-travel-view');
    const studyingEquipments = ['📚', '🖊️', '✏️', '🧮', '📱', '💻', '🎒', '🔬', '🎨', '🌍', '⚖️', '🛠️'];
    const container = document.getElementById('space-container');
    container.innerHTML = '';
    
    function createObj() {
        const el = document.createElement('div');
        el.className = 'space-object';
        el.innerText = studyingEquipments[Math.floor(Math.random() * studyingEquipments.length)];
        const angle = Math.random() * Math.PI * 2;
        const dist = 100 + Math.random() * 800; 
        el.style.setProperty('--tx', Math.cos(angle) * dist + 'px');
        el.style.setProperty('--ty', Math.sin(angle) * dist + 'px');
        const dur = 2 + Math.random() * 3;
        el.style.setProperty('--rot-start', Math.random() * 360 + 'deg');
        el.style.setProperty('--rot-end', Math.random() * 360 + 360 + 'deg');
        el.style.animation = `flyPast ${dur}s linear forwards`;
        container.appendChild(el);
        setTimeout(() => { if (el.parentNode) el.remove(); }, dur * 1000);
    }
    
    for(let i=0; i<20; i++) setTimeout(createObj, Math.random() * 2000);
    spaceInterval = setInterval(createObj, 150);
    
    // Stop spawning random objects
    setTimeout(() => { clearInterval(spaceInterval); }, 2500);

    // Transition to questionnaire directly
    setTimeout(() => { startQuestionnaire(); }, 3200);
}

// 2. Questionnaire
function startQuestionnaire() {
    currentQuestion = 0;
    Object.keys(domains).forEach(k => scores[k] = 0);
    switchView('questionnaire-view');
    renderQuestion();
}

function renderQuestion() {
    if (currentQuestion >= questions.length) {
        switchView('thinking-view');
        setTimeout(showResult, 3500);
        return;
    }
    const q = questions[currentQuestion];
    document.getElementById('question-title').innerText = q.title;
    const optsCont = document.getElementById('options-container');
    optsCont.innerHTML = '';
    document.getElementById('progress-fill').style.width = `${(currentQuestion / questions.length) * 100}%`;

    q.options.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerText = opt.text;
        btn.onclick = () => {
            opt.domains.forEach(d => scores[d]++);
            currentQuestion++;
            renderQuestion();
        };
        optsCont.appendChild(btn);
    });
}

let finalDomainKey = '';

function showResult() {
    let max = -1;
    for (const [k, v] of Object.entries(scores)) {
        if (v > max) { max = v; finalDomainKey = k; }
    }
    resultDomain.innerText = domains[finalDomainKey].title;
    resultDesc.innerText = domains[finalDomainKey].desc;
    
    const users = loadUsers();
    users[currentUser].domain = finalDomainKey;
    
    // Add to history immediately upon getting the result
    let history = users[currentUser].history || [];
    if (!history.includes(finalDomainKey)) {
        history.push(finalDomainKey);
    }
    users[currentUser].history = history;
    
    saveUsers(users);
    switchView('result-view');
}

// Roadmap & Quiz State
let activeDomain = '';
let activeTasks = [];
let savedProgress = [];
let currentQuizTaskIndex = -1;
let currentQuizQuestionIndex = 0;

function startRoadmap() {
    const users = loadUsers();
    activeDomain = users[currentUser].domain || finalDomainKey || 'software_engineering';
    roadmapDomainName.innerText = domains[activeDomain].title;
    activeTasks = tasksMap[activeDomain];
    if (!users[currentUser].progress) users[currentUser].progress = {};
    savedProgress = users[currentUser].progress[activeDomain] || [];
    
    renderTasks();
    switchView('roadmap-view');
}

function renderTasks() {
    tasksContainer.innerHTML = '';
    let completedCount = 0;

    activeTasks.forEach((taskObj, index) => {
        const isCompleted = savedProgress.includes(index);
        if(isCompleted) completedCount++;

        const taskEl = document.createElement('div');
        taskEl.className = `task-item ${isCompleted ? 'completed' : ''}`;
        taskEl.innerHTML = `
            <span class="task-text">${taskObj.text}</span>
            <button class="btn-complete">${isCompleted ? 'Done' : 'Complete'}</button>
        `;

        const btn = taskEl.querySelector('.btn-complete');
        btn.onclick = () => {
            if(!isCompleted) startTaskQuiz(index);
        };
        tasksContainer.appendChild(taskEl);
    });

    const percent = Math.round((completedCount / activeTasks.length) * 100);
    closenessPercent.innerText = percent === 100 ? `${percent}% ✨✨✨` : `${percent}%`;
    closenessFill.style.width = `${percent}%`;

    // Victory Check
    if (completedCount === activeTasks.length && completedCount > 0) {
        triggerVictory();
    }
}

function startTaskQuiz(taskIndex) {
    currentQuizTaskIndex = taskIndex;
    currentQuizQuestionIndex = 0;
    quizPopup.classList.remove('hidden');
    renderQuizQuestion();
}

function renderQuizQuestion() {
    const taskObj = activeTasks[currentQuizTaskIndex];
    const quizData = taskObj.quiz;
    
    if (currentQuizQuestionIndex >= quizData.length) {
        // Quiz Passed!
        quizPopup.classList.add('hidden');
        savedProgress.push(currentQuizTaskIndex);
        const users = loadUsers();
        if (!users[currentUser].progress) users[currentUser].progress = {};
        users[currentUser].progress[activeDomain] = savedProgress;
        saveUsers(users);
        
        completionPopup.classList.remove('hidden');
        setTimeout(() => completionPopup.classList.add('hidden'), 2000);
        
        renderTasks();
        return;
    }

    const q = quizData[currentQuizQuestionIndex];
    quizCurrentQ.innerText = currentQuizQuestionIndex + 1;
    quizQuestionText.innerText = q.q;
    quizOptionsContainer.innerHTML = '';

    // Shuffle options
    const shuffledOpts = [...q.opts].sort(() => Math.random() - 0.5);

    shuffledOpts.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerText = opt;
        btn.onclick = () => {
            if (opt === q.a) {
                btn.style.borderColor = 'green';
                btn.style.background = '#e8f5e9';
                setTimeout(() => {
                    currentQuizQuestionIndex++;
                    renderQuizQuestion();
                }, 500);
            } else {
                btn.style.borderColor = 'red';
                btn.style.background = '#ffebee';
                btn.innerText = "Try Again!";
                setTimeout(() => {
                    btn.style.borderColor = 'transparent';
                    btn.style.background = 'rgba(255, 255, 255, 0.8)';
                    btn.innerText = opt;
                }, 1000);
            }
        };
        quizOptionsContainer.appendChild(btn);
    });
}

function triggerVictory() {
    // Save to history
    const users = loadUsers();
    let history = users[currentUser].history || [];
    if (!history.includes(activeDomain)) {
        history.push(activeDomain);
        users[currentUser].history = history;
        saveUsers(users);
    }
    victoryOverlay.classList.remove('hidden');
}

function renderHistory() {
    const container = document.getElementById('history-container');
    container.innerHTML = '';
    const users = loadUsers();
    let history = users[currentUser].history || [];
    let progress = users[currentUser].progress || {};
    
    if (history.length === 0) {
        container.innerHTML = '<p>No domain history yet. Start your journey!</p>';
    } else {
        history.forEach(domainKey => {
            const d = domains[domainKey];
            const tasks = tasksMap[domainKey] || [];
            const isMastered = progress[domainKey] && progress[domainKey].length === tasks.length && tasks.length > 0;
            const statusText = isMastered ? '🏆 Mastery Achieved' : '⭐ Journey Started';
            
            const div = document.createElement('div');
            div.className = `task-item ${isMastered ? 'completed' : ''}`;
            div.innerHTML = `<span class="task-text"><b>${d.title}</b> - ${statusText}</span>`;
            container.appendChild(div);
        });
    }
    switchView('history-view');
}

// Auth Logic
let currentUser = null;
let isLoginMode = true;
const authTitle = document.getElementById('auth-title');
const btnAuthSubmit = document.getElementById('btn-auth-submit');
const authToggleLink = document.getElementById('auth-toggle-link');
const authUsername = document.getElementById('auth-username');
const authPassword = document.getElementById('auth-password');
const authError = document.getElementById('auth-error');

function loadUsers() { return JSON.parse(localStorage.getItem('kyp_users')) || {}; }
function saveUsers(users) { localStorage.setItem('kyp_users', JSON.stringify(users)); }

authToggleLink.addEventListener('click', (e) => {
    e.preventDefault();
    isLoginMode = !isLoginMode;
    authError.style.display = 'none';
    if (isLoginMode) {
        authTitle.innerText = 'Login';
        btnAuthSubmit.innerText = 'Login';
        authToggleLink.innerText = "Don't have an account? Create new account";
    } else {
        authTitle.innerText = 'Create Account';
        btnAuthSubmit.innerText = 'Sign Up';
        authToggleLink.innerText = "Already have an account? Login";
    }
});

btnAuthSubmit.addEventListener('click', () => {
    const un = authUsername.value.trim();
    const pw = authPassword.value;
    if (!un || !pw) {
        authError.innerText = "Please enter both username and password.";
        authError.style.display = 'block';
        return;
    }
    const users = loadUsers();
    if (isLoginMode) {
        if (users[un] && users[un].password === pw) {
            currentUser = un;
            authError.style.display = 'none';
            switchView('landing-view');
        } else {
            authError.innerText = "Invalid username or password.";
            authError.style.display = 'block';
        }
    } else {
        if (pw.length < 5) {
            authError.innerText = "Password must be at least 5 characters.";
            authError.style.display = 'block';
            return;
        }
        if (!/[A-Z]/.test(pw)) {
            authError.innerText = "Password must contain at least one capital letter.";
            authError.style.display = 'block';
            return;
        }
        if (!/[@_~\/;:\"]/.test(pw)) {
            authError.innerText = 'Password must contain a special character (@, _, ~, /, ;, :, ").';
            authError.style.display = 'block';
            return;
        }

        if (users[un]) {
            authError.innerText = "Username already exists.";
            authError.style.display = 'block';
        } else {
            users[un] = { password: pw, domain: null, history: [], progress: {} };
            saveUsers(users);
            currentUser = un;
            authError.style.display = 'none';
            switchView('landing-view');
        }
    }
});

// Events
document.getElementById('global-back-btn').addEventListener('click', goBack);
document.getElementById('btn-start').addEventListener('click', startSpaceTravel);
document.getElementById('btn-restart').addEventListener('click', () => switchView('landing-view'));
document.getElementById('btn-journey').addEventListener('click', startRoadmap);
document.getElementById('btn-back-home').addEventListener('click', () => switchView('landing-view'));
document.getElementById('btn-history').addEventListener('click', renderHistory);
document.getElementById('btn-history-roadmap').addEventListener('click', renderHistory);
document.getElementById('btn-history-back').addEventListener('click', () => switchView('landing-view'));
document.getElementById('btn-victory-close').addEventListener('click', () => {
    victoryOverlay.classList.add('hidden');
});
btnQuizCancel.addEventListener('click', () => quizPopup.classList.add('hidden'));
