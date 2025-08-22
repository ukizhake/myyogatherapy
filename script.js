// Dosha Assessment Questions
const questions = [
    {
        id: 1,
        text: "How do you describe your skin?",
        options: [
            { value: 'a', text: "Dry, rough and cold", dosha: 'vata' },
            { value: 'b', text: "Fair, soft and warm", dosha: 'pitta' },
            { value: 'c', text: "Pale, cold, and oily", dosha: 'kapha' }
        ]
    },
    {
        id: 2,
        text: "Generally your hair is:",
        options: [
            { value: 'a', text: "Dry, coarse, fine to medium thickness", dosha: 'vata' },
            { value: 'b', text: "Fine, fair or reddish", dosha: 'pitta' },
            { value: 'c', text: "Thick, oily, lustrous", dosha: 'kapha' }
        ]
    },
    {
        id: 3,
        text: "Which one of the following skin problems are you more prone to?",
        options: [
            { value: 'a', text: "Dry and rough patches", dosha: 'vata' },
            { value: 'b', text: "Heat rashes, spots", dosha: 'pitta' },
            { value: 'c', text: "Excessive oiliness", dosha: 'kapha' }
        ]
    },
    {
        id: 4,
        text: "How would you describe your body structure?",
        options: [
            { value: 'a', text: "Thin and tall", dosha: 'vata' },
            { value: 'b', text: "Medium height and built", dosha: 'pitta' },
            { value: 'c', text: "Plump, stocky, large chest", dosha: 'kapha' }
        ]
    },
    {
        id: 5,
        text: "Which one of the following describes you best?",
        options: [
            { value: 'a', text: "Hard to gain weight", dosha: 'vata' },
            { value: 'b', text: "Easy to lose and gain weight", dosha: 'pitta' },
            { value: 'c', text: "Hard to lose weight", dosha: 'kapha' }
        ]
    },
    {
        id: 6,
        text: "How do you describe yourself in reference to heat tolerance?",
        options: [
            { value: 'a', text: "High, enjoy the heat", dosha: 'vata' },
            { value: 'b', text: "Poor, prefer moderate or cool temperatures", dosha: 'pitta' },
            { value: 'c', text: "High, prefer hot and dry weather", dosha: 'kapha' }
        ]
    },
    {
        id: 7,
        text: "Which one of the following describes your perspiration levels?",
        options: [
            { value: 'a', text: "Minimum", dosha: 'vata' },
            { value: 'b', text: "Freely, especially when exercising", dosha: 'pitta' },
            { value: 'c', text: "Moderate, clammy", dosha: 'kapha' }
        ]
    },
    {
        id: 8,
        text: "How do you describe your body temperature?",
        options: [
            { value: 'a', text: "Low, cold hands and feet", dosha: 'vata' },
            { value: 'b', text: "High, feel warm or hot", dosha: 'pitta' },
            { value: 'c', text: "Low, body feels cold", dosha: 'kapha' }
        ]
    },
    {
        id: 9,
        text: "Which type of weather do you prefer most?",
        options: [
            { value: 'a', text: "Hot, humid, sunny", dosha: 'vata' },
            { value: 'b', text: "Moderate to cool", dosha: 'pitta' },
            { value: 'c', text: "Hot, sunny, dry and a breeze", dosha: 'kapha' }
        ]
    },
    {
        id: 10,
        text: "How would you describe your sleeping pattern?",
        options: [
            { value: 'a', text: "Light and disturbed", dosha: 'vata' },
            { value: 'b', text: "Sound sleep", dosha: 'pitta' },
            { value: 'c', text: "Heavy, deep and prolonged", dosha: 'kapha' }
        ]
    },
    {
        id: 11,
        text: "How do you describe your physical activities?",
        options: [
            { value: 'a', text: "Quick, erratic, hyperactive", dosha: 'vata' },
            { value: 'b', text: "Moderate, motivated, purposeful", dosha: 'pitta' },
            { value: 'c', text: "Slow, steady, graceful", dosha: 'kapha' }
        ]
    },
    {
        id: 12,
        text: "How would you describe yourself generally?",
        options: [
            { value: 'a', text: "Clumsy, uncoordinated", dosha: 'vata' },
            { value: 'b', text: "Regimented, forceful", dosha: 'pitta' },
            { value: 'c', text: "Lethargic, lack of lustre", dosha: 'kapha' }
        ]
    },
    {
        id: 13,
        text: "Which one of following describes your usual mental state?",
        options: [
            { value: 'a', text: "Restless, quick thinker, imaginative", dosha: 'vata' },
            { value: 'b', text: "Intellectual, organised, perfectionist", dosha: 'pitta' },
            { value: 'c', text: "Steady, calm, not easily disturbed", dosha: 'kapha' }
        ]
    },
    {
        id: 14,
        text: "Do you easily feel?",
        options: [
            { value: 'a', text: "Ungrounded and disconnected", dosha: 'vata' },
            { value: 'b', text: "Impatient, irritable and angry", dosha: 'pitta' },
            { value: 'c', text: "Slow, dull and uninspired", dosha: 'kapha' }
        ]
    },
    {
        id: 15,
        text: "Have you recently felt?",
        options: [
            { value: 'a', text: "Anxious and confused", dosha: 'vata' },
            { value: 'b', text: "Critical and fanatical", dosha: 'pitta' },
            { value: 'c', text: "Lethargic, and resistant to change", dosha: 'kapha' }
        ]
    },
    {
        id: 16,
        text: "You generally describe your mental attitude as:",
        options: [
            { value: 'a', text: "Creative, expressive", dosha: 'vata' },
            { value: 'b', text: "Determined and passionate", dosha: 'pitta' },
            { value: 'c', text: "Contented and methodical", dosha: 'kapha' }
        ]
    },
    {
        id: 17,
        text: "How would you describe your memory?",
        options: [
            { value: 'a', text: "Good short term memory", dosha: 'vata' },
            { value: 'b', text: "Generally good", dosha: 'pitta' },
            { value: 'c', text: "Slow to retain, good long term memory", dosha: 'kapha' }
        ]
    },
    {
        id: 18,
        text: "How do you describe your response to stress?",
        options: [
            { value: 'a', text: "Anxious, fearful", dosha: 'vata' },
            { value: 'b', text: "Confrontational", dosha: 'pitta' },
            { value: 'c', text: "Quiet, introverted", dosha: 'kapha' }
        ]
    },
    {
        id: 19,
        text: "How do you describe your beliefs?",
        options: [
            { value: 'a', text: "Changeable, rebellious", dosha: 'vata' },
            { value: 'b', text: "Strongly held", dosha: 'pitta' },
            { value: 'c', text: "Constant and conservative", dosha: 'kapha' }
        ]
    },
    {
        id: 20,
        text: "How would you describe yourself on a good day?",
        options: [
            { value: 'a', text: "Secure, grounded, settled", dosha: 'vata' },
            { value: 'b', text: "Confident, friendly, content", dosha: 'pitta' },
            { value: 'c', text: "Warm hearted, loving, active", dosha: 'kapha' }
        ]
    }
];

// Dosha Information
const doshaInfo = {
    vata: {
        name: "Vata - The Mobility That Brings Action and Life Creation",
        description: "Vata is responsible for all movement, breathing, transport of material within the body, and all elimination and secretions. Vata regulates the heartbeat and nerve impulses. Vata is the mobility that brings action and life creation.",
        elements: "Vayu (Air) and Akasha (Space)",
        qualities: "Light, cool, dry and mobile",
        body_characteristics: "Light bones are thin, and dry skin and hair",
        personality: "Talkative, enthusiastic, creative, flexible and energetic",
        characteristics: "Vata quality predominant people have a light bone structure and low weight. They don't put on weight easily and have an irregular appetite. Vata people are sensitive to noise and react sharply to sounds. They enjoy hot temperatures and like warm foods and drinks. They are flexible, enthusiastic, imaginative and talkative.",
        imbalance_issues: "Worry, fear, anxiety, constipation, instability, nervous system disorders, arthritis",
        imbalance: "If Vata energy is out of balance, the person may suffer with nervousness, anxiety, worries and sleep problems. Other signs of disturbed Vata are dry skin, constipation, and cold hands and feet.",
        balancing: "Balancing Vata: Vrkshasana (tree pose) - hold, warrior poses hold, Meru asana, Anulom Viloma (alternate nostril), balances all elements, Sukha Purvakka - square breath 4:4:4:4. If Vata is underactive: Vritti-Viloma Vritti (active exhalation), passive inhalation, Kapalabhati.",
        therapy: {
            contraindications: "Avoid quick transitions, overstimulation, and cold environments. If you feel anxious or ungrounded during practice, please slow down or rest.",
            practices: [
                "Hatha Yoga recommendations for Vata Balance: Asanas engaging lower body (lower back, hips and legs) in gentle and static approach (Isometric)",
                "Grounding poses: Vrkshasana (Tree pose), Meru-Asana, Veera-Asana Variations",
                "Veera-Bhadra-Asana Series can help us grounding our feet and stabilising our energies",
                "Holding poses for stability and grounding",
                "Pranayama for Vata Balance - Over Active Vata: Anuloma-Viloma and Sukha Purvaka Pranayama",
                "Underactive Vata: Viloma Vritti Pranayama",
                "Square breathing (4:4:4:4)",
                "Gentle, slow movements",
                "Warm environment preferred"
            ],
            gunas: "Focus on Sattvic practices to bring balance. Avoid excessive Rajasic activities that can increase restlessness."
        }
    },
    pitta: {
        name: "Pitta - Our Metabolism",
        description: "Pitta is the principle of metabolism. It is responsible for digestion, absorption of nutrients in the intestines, regulation of body temperature, sharpness of vision and intellect.",
        elements: "Agni (Fire) and Jala (Water)",
        qualities: "Hot, sharp and penetrating",
        body_characteristics: "Moderate weight and good physique",
        personality: "Focused, competitive, courageous, energetic",
        characteristics: "People with a predominance of Pitta quality eat a lot and generally are able to tolerate any type of food. They have regular bowel movement and get easily upset if they delay a meal. Pitta type people have an average body build and are good speakers, organizers who like order and resourcefulness. They are ambitious and decisive.",
        imbalance_issues: "Diarrhea, infections, skin rashes and problems related to liver, spleen and blood, anger, short temper",
        imbalance: "If Pitta quality is out of balance, they tend to suffer with perfectionism, outbursts of anger, irritability, skin rashes and inflammations.",
        balancing: "Cooling practices, moderate intensity, avoid overheating. Focus on surrender and letting go of perfectionism.",
        therapy: {
            contraindications: "Avoid overheating, intense competition, and overly challenging poses. If you feel irritated or overheated, please cool down and rest.",
            practices: [
                "Cooling pranayama (Sheetali, Sheetkari)",
                "Moderate intensity poses",
                "Forward folds for cooling",
                "Avoid hot yoga or overly heated rooms",
                "Practice in cooler times of day",
                "Focus on patience and acceptance"
            ],
            gunas: "Channel Rajasic energy positively while cultivating Sattvic qualities of patience and compassion."
        }
    },
    kapha: {
        name: "Kapha - Our Structure",
        description: "Kapha holds together different parts of the body and promotes mass, immunity, and fertility.",
        elements: "Jala (Water) and Prithvi (Earth)",
        qualities: "Cool, moist, stable and heavy",
        body_characteristics: "Dense, heavy bones, lustrous, supple skin, low metabolism with large stocky physique",
        personality: "Heaviness, stable nature, resilience to quick fluctuations",
        characteristics: "People with predominance of Kapha quality have a strong body-build, prominent muscles, and are prone to being overweight. These people have a strong immune system, great stamina, and physical exercise and movement are good for them. The Kapha personality is characterised by patience, fortitude, and gentleness.",
        imbalance_issues: "Depression, obesity, lethargy and diabetes",
        imbalance: "If Kapha is out of harmony, the person tends to suffer with overweight, experiencing dullness, depression or nausea, feeling full or heavy in the stomach, and prone to colds and breathing disorders.",
        balancing: "Energizing practices, movement, stimulation. Avoid lethargy and stagnation.",
        therapy: {
            contraindications: "Avoid overly sedentary practices or long holds that increase lethargy. If you feel heavy or sluggish, please energize with gentle movement.",
            practices: [
                "Energizing pranayama (Bhastrika, Kapalabhati)",
                "Dynamic movements and flows",
                "Sun salutations",
                "Backbends for energy",
                "Shorter holds with more movement",
                "Morning practice preferred"
            ],
            gunas: "Activate Rajasic energy to overcome Tamasic tendencies, while maintaining Sattvic awareness."
        }
    }
};

// Class Structure Template
const classStructure = {
    opening: {
        title: "Opening - Creating Sacred Space",
        content: [
            "Welcome everyone to this sacred space",
            "This is YOUR space. Do your best and leave the rest",
            "Begin with quiet sitting - finding your center",
            "Set intention for practice"
        ],
        guidelines: [
            "No competition - everyone's journey is unique",
            "Listen to your body at all times",
            "Modify or rest whenever needed",
            "Non-judgmental awareness"
        ]
    },
    contraindications: {
        title: "Important Safety Guidelines",
        general: [
            "If you have any injuries or medical conditions, please inform the instructor",
            "Avoid any pose that causes pain or discomfort",
            "Pregnancy modifications available - please let us know",
            "If you feel dizzy, nauseous, or unwell, please rest",
            "Never force or strain - yoga should feel good"
        ],
        language: "Remember, any point you feel it is too much, don't do it. Your body is your best teacher."
    },
    structure: [
        {
            phase: "Jattis Kriyas",
            description: "Gentle warm-up movements and cleansing practices",
            duration: "10-15 minutes"
        },
        {
            phase: "Core Practice",
            description: "Main theme focus (e.g., heart opening, hip opening, grounding)",
            duration: "30-40 minutes"
        },
        {
            phase: "Counter-balancing",
            description: "Balancing poses for the rest of the body",
            duration: "10-15 minutes"
        },
        {
            phase: "Pranayama",
            description: "Breathing practices suited to dosha type",
            duration: "5-10 minutes"
        },
        {
            phase: "Relaxation",
            description: "Long relaxation and integration",
            duration: "15-20 minutes"
        },
        {
            phase: "Closing Satsang",
            description: "Community sharing with tea and light refreshments",
            duration: "15-20 minutes"
        }
    ],
    motivationalLanguage: [
        "You are exactly where you need to be",
        "Every breath is a gift",
        "Your practice is perfect as it is",
        "Trust your inner wisdom",
        "You are stronger than you know",
        "This is your journey - honor it",
        "Breathe into your beautiful potential"
    ]
};

// Application State
let currentQuestion = 0;
let answers = {};
let currentScreen = 'welcome';

// Extended assessment state
let currentGunaQuestion = 0;
let gunaAnswers = {};
let currentAgniQuestion = 0;
let agniAnswers = {};
let currentPillarAssessment = 'ahar';
let currentPillarQuestion = 0;
let pillarAnswers = {
    ahar: {},
    vihar: {},
    achar: {},
    vichar: {}
};

// Initialize Application
function startAssessment() {
    currentScreen = 'assessment';
    currentQuestion = 0;
    answers = {};
    showScreen('assessment-screen');
    displayQuestion();
}

function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
}

function displayQuestion() {
    const question = questions[currentQuestion];
    const progress = ((currentQuestion + 1) / questions.length) * 100;
    
    document.getElementById('progress').style.width = progress + '%';
    document.getElementById('question-number').textContent = `Question ${currentQuestion + 1} of ${questions.length}`;
    document.getElementById('question-text').textContent = question.text;
    
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';
    
    question.options.forEach(option => {
        const optionElement = document.createElement('div');
        optionElement.className = 'option';
        optionElement.innerHTML = `
            <div class="option-label">${option.value.toUpperCase()}.</div>
            <div>${option.text}</div>
        `;
        
        optionElement.addEventListener('click', () => selectOption(option.value, optionElement));
        optionsContainer.appendChild(optionElement);
    });
    
    updateNavigationButtons();
}

function selectOption(value, element) {
    // Remove previous selection
    document.querySelectorAll('.option').forEach(opt => opt.classList.remove('selected'));
    
    // Add selection to clicked option
    element.classList.add('selected');
    
    // Store answer
    answers[currentQuestion] = value;
    
    updateNavigationButtons();
}

function updateNavigationButtons() {
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    
    prevBtn.disabled = currentQuestion === 0;
    nextBtn.disabled = !answers.hasOwnProperty(currentQuestion);
    
    if (currentQuestion === questions.length - 1 && answers.hasOwnProperty(currentQuestion)) {
        nextBtn.textContent = 'Get Results';
    } else {
        nextBtn.textContent = 'Next';
    }
}

function previousQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        displayQuestion();
        
        // Restore previous selection
        if (answers.hasOwnProperty(currentQuestion)) {
            const selectedValue = answers[currentQuestion];
            const options = document.querySelectorAll('.option');
            options.forEach((option, index) => {
                if (questions[currentQuestion].options[index].value === selectedValue) {
                    option.classList.add('selected');
                }
            });
        }
    }
}

function nextQuestion() {
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        displayQuestion();
        
        // Restore selection if exists
        if (answers.hasOwnProperty(currentQuestion)) {
            const selectedValue = answers[currentQuestion];
            const options = document.querySelectorAll('.option');
            options.forEach((option, index) => {
                if (questions[currentQuestion].options[index].value === selectedValue) {
                    option.classList.add('selected');
                }
            });
        }
    } else {
        startGunaAssessment();
    }
}

function calculateResults() {
    const scores = { vata: 0, pitta: 0, kapha: 0 };
    
    Object.values(answers).forEach(answer => {
        const questionIndex = Object.keys(answers).find(key => answers[key] === answer);
        const question = questions[parseInt(questionIndex)];
        const selectedOption = question.options.find(opt => opt.value === answer);
        
        if (selectedOption) {
            scores[selectedOption.dosha]++;
        }
    });
    
    const total = Object.values(scores).reduce((sum, score) => sum + score, 0);
    const percentages = {
        vata: Math.round((scores.vata / total) * 100),
        pitta: Math.round((scores.pitta / total) * 100),
        kapha: Math.round((scores.kapha / total) * 100)
    };
    
    // Find dominant dosha
    const dominantDosha = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);
    
    return { scores, percentages, dominantDosha };
}

function showResults() {
    const results = calculateResults();
    showScreen('results-screen');
    
    const resultsContainer = document.getElementById('dosha-results');
    const descriptionContainer = document.getElementById('dosha-description');
    const therapyContainer = document.getElementById('therapy-recommendations');
    
    // Display dosha scores
    resultsContainer.innerHTML = `
        <div class="dosha-result dosha-vata">
            <div class="dosha-name">Vata</div>
            <div class="dosha-percentage">${results.percentages.vata}%</div>
        </div>
        <div class="dosha-result dosha-pitta">
            <div class="dosha-name">Pitta</div>
            <div class="dosha-percentage">${results.percentages.pitta}%</div>
        </div>
        <div class="dosha-result dosha-kapha">
            <div class="dosha-name">Kapha</div>
            <div class="dosha-percentage">${results.percentages.kapha}%</div>
        </div>
    `;
    
    // Display dominant dosha description
    const dominant = doshaInfo[results.dominantDosha];
    descriptionContainer.innerHTML = `
        <div class="dosha-description">
            <h3>Your Dominant Dosha: ${dominant.name}</h3>
            <p><strong>Description:</strong> ${dominant.description}</p>
            <p><strong>Characteristics:</strong> ${dominant.characteristics}</p>
            <p><strong>When Imbalanced:</strong> ${dominant.imbalance}</p>
            <p><strong>Balancing Approach:</strong> ${dominant.balancing}</p>
        </div>
    `;
    
    // Display therapy recommendations
    therapyContainer.innerHTML = generateTherapyRecommendations(results.dominantDosha);
}

function generateTherapyRecommendations(dominantDosha) {
    const therapy = doshaInfo[dominantDosha].therapy;
    
    return `
        <div class="therapy-section">
            <h3>🕉️ Personalized Yoga Therapy Recommendations</h3>
            
            <div class="disclaimer">
                <strong>Important Guidelines for Your Practice:</strong><br>
                ${therapy.contraindications}
            </div>
            
            <div class="therapy-format">
                <h4>Recommended Practices for ${doshaInfo[dominantDosha].name} Balance:</h4>
                <ul class="practice-list">
                    ${therapy.practices.map(practice => `<li>• ${practice}</li>`).join('')}
                </ul>
            </div>
            
            <div class="therapy-format">
                <h4>Class Structure Template</h4>
                <p><strong>Opening:</strong> ${classStructure.opening.content.join(', ')}</p>
                <p><strong>Guidelines:</strong> ${classStructure.opening.guidelines.join(', ')}</p>
                
                <h5>Class Flow:</h5>
                ${classStructure.structure.map(phase => `
                    <p><strong>${phase.phase}</strong> (${phase.duration}): ${phase.description}</p>
                `).join('')}
            </div>
            
            <div class="quote">
                "This is your space. Do your best and leave the rest."<br>
                <small>Remember: Problems are opportunities in disguise. Pain we cannot choose, but suffering is our choice.</small>
            </div>
            
            <div class="therapy-format">
                <h4>Motivational Reminders for Your Journey:</h4>
                <ul class="practice-list">
                    ${classStructure.motivationalLanguage.slice(0, 4).map(phrase => `<li>• ${phrase}</li>`).join('')}
                </ul>
            </div>
        </div>
    `;
}

// Guna Assessment Functions
function startGunaAssessment() {
    currentScreen = 'guna';
    currentGunaQuestion = 0;
    gunaAnswers = {};
    showScreen('guna-screen');
    displayGunaQuestion();
}

function displayGunaQuestion() {
    const question = gunaQuestions[currentGunaQuestion];
    const progress = ((currentGunaQuestion + 1) / gunaQuestions.length) * 100;
    
    document.getElementById('guna-progress').style.width = progress + '%';
    document.getElementById('guna-question-number').textContent = `Question ${currentGunaQuestion + 1} of ${gunaQuestions.length}`;
    document.getElementById('guna-question-text').textContent = question.text;
    
    const optionsContainer = document.getElementById('guna-options-container');
    optionsContainer.innerHTML = '';
    
    question.options.forEach(option => {
        const optionElement = document.createElement('div');
        optionElement.className = 'option';
        optionElement.innerHTML = `
            <div class="option-label">${option.value.charAt(0).toUpperCase() + option.value.slice(1)}</div>
            <div>${option.text}</div>
        `;
        
        optionElement.addEventListener('click', () => selectGunaOption(option.value, optionElement));
        optionsContainer.appendChild(optionElement);
    });
    
    updateGunaNavigationButtons();
}

function selectGunaOption(value, element) {
    document.querySelectorAll('.option').forEach(opt => opt.classList.remove('selected'));
    element.classList.add('selected');
    gunaAnswers[currentGunaQuestion] = value;
    updateGunaNavigationButtons();
}

function updateGunaNavigationButtons() {
    const prevBtn = document.getElementById('guna-prev-btn');
    const nextBtn = document.getElementById('guna-next-btn');
    
    prevBtn.disabled = currentGunaQuestion === 0;
    nextBtn.disabled = !gunaAnswers.hasOwnProperty(currentGunaQuestion);
    
    if (currentGunaQuestion === gunaQuestions.length - 1 && gunaAnswers.hasOwnProperty(currentGunaQuestion)) {
        nextBtn.textContent = 'Continue to Results';
    } else {
        nextBtn.textContent = 'Next';
    }
}

function previousGunaQuestion() {
    if (currentGunaQuestion > 0) {
        currentGunaQuestion--;
        displayGunaQuestion();
        
        if (gunaAnswers.hasOwnProperty(currentGunaQuestion)) {
            const selectedValue = gunaAnswers[currentGunaQuestion];
            const options = document.querySelectorAll('.option');
            options.forEach((option, index) => {
                if (gunaQuestions[currentGunaQuestion].options[index].value === selectedValue) {
                    option.classList.add('selected');
                }
            });
        }
    }
}

function nextGunaQuestion() {
    if (currentGunaQuestion < gunaQuestions.length - 1) {
        currentGunaQuestion++;
        displayGunaQuestion();
        
        if (gunaAnswers.hasOwnProperty(currentGunaQuestion)) {
            const selectedValue = gunaAnswers[currentGunaQuestion];
            const options = document.querySelectorAll('.option');
            options.forEach((option, index) => {
                if (gunaQuestions[currentGunaQuestion].options[index].value === selectedValue) {
                    option.classList.add('selected');
                }
            });
        }
    } else {
        showIntegratedResults();
    }
}

function calculateGunaResults() {
    const scores = { sattva: 0, rajas: 0, tamas: 0 };
    
    Object.values(gunaAnswers).forEach(answer => {
        scores[answer]++;
    });
    
    const total = Object.values(scores).reduce((sum, score) => sum + score, 0);
    const percentages = {
        sattva: Math.round((scores.sattva / total) * 100),
        rajas: Math.round((scores.rajas / total) * 100),
        tamas: Math.round((scores.tamas / total) * 100)
    };
    
    const dominantGuna = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);
    
    return { scores, percentages, dominantGuna };
}

function showIntegratedResults() {
    const doshaResults = calculateResults();
    const gunaResults = calculateGunaResults();
    
    // Get DOM elements first
    showScreen('results-screen');
    
    const doshaContainer = document.getElementById('dosha-results');
    const gunaContainer = document.getElementById('guna-results');
    const integratedContainer = document.getElementById('integrated-description');
    const therapyContainer = document.getElementById('therapy-recommendations');
    const classGuidanceContainer = document.getElementById('class-guidance');
    
    // Check if required classes are available
    if (typeof PracticalYogaTherapy === 'undefined') {
        console.error('PracticalYogaTherapy class not loaded');
        // Fallback to basic display
        showBasicResults(doshaResults, gunaResults);
        return;
    }
    
    try {
        // Initialize the practical therapy system
        const practicalTherapy = new PracticalYogaTherapy();
        
        // Generate personalized recommendations
        const personalizedPlan = practicalTherapy.generatePersonalizedPlan(
            doshaResults, 
            gunaResults,
            {
                conditions: [], // Could be expanded with user input
                level: 'beginner', // Could be determined from assessment
                timeAvailable: 'medium_practice',
                goals: ['general_health', 'stress_reduction']
            }
        );
        
        // Display dosha scores
        doshaContainer.innerHTML = `
        <h3>Your Dosha Constitution</h3>
        <div class="dosha-result dosha-vata">
            <div class="dosha-name">Vata</div>
            <div class="dosha-percentage">${doshaResults.percentages.vata}%</div>
        </div>
        <div class="dosha-result dosha-pitta">
            <div class="dosha-name">Pitta</div>
            <div class="dosha-percentage">${doshaResults.percentages.pitta}%</div>
        </div>
        <div class="dosha-result dosha-kapha">
            <div class="dosha-name">Kapha</div>
            <div class="dosha-percentage">${doshaResults.percentages.kapha}%</div>
        </div>
    `;
    
    // Display guna scores
    gunaContainer.innerHTML = `
        <h3>Your Guna Constitution</h3>
        <div class="guna-results">
            <div class="guna-result guna-sattva">
                <div class="guna-name">Sattva</div>
                <div class="guna-percentage">${gunaResults.percentages.sattva}%</div>
            </div>
            <div class="guna-result guna-rajas">
                <div class="guna-name">Rajas</div>
                <div class="guna-percentage">${gunaResults.percentages.rajas}%</div>
            </div>
            <div class="guna-result guna-tamas">
                <div class="guna-name">Tamas</div>
                <div class="guna-percentage">${gunaResults.percentages.tamas}%</div>
            </div>
        </div>
    `;
    
    // Display integrated description
    const dominantDosha = doshaInfo[doshaResults.dominantDosha];
    const dominantGunaInfo = window.gunaTherapeutics ? 
        window.gunaTherapeutics.advancedGunaInfo[gunaResults.dominantGuna] : 
        gunaInfo[gunaResults.dominantGuna];
    
    integratedContainer.innerHTML = `
        <div class="integrated-description">
            <h3>Your Holistic Constitution</h3>
            <p><strong>Dominant Dosha:</strong> ${dominantDosha.name}</p>
            <p>${dominantDosha.description}</p>
            <p><strong>Elements:</strong> ${dominantDosha.elements}</p>
            <p><strong>Qualities:</strong> ${dominantDosha.qualities}</p>
            <p><strong>Dominant Guna:</strong> ${dominantGunaInfo.name}</p>
            <p>${dominantGunaInfo.description}</p>
            
            <div class="constitution-insights">
                <h4>Key Insights for Your Practice:</h4>
                <ul>
                    <li><strong>Physical Body:</strong> ${dominantDosha.body_characteristics}</li>
                    <li><strong>Personality:</strong> ${dominantDosha.personality}</li>
                    <li><strong>Mental-Emotional (Guna):</strong> ${dominantGunaInfo.essence || dominantGunaInfo.description}</li>
                    <li><strong>When Imbalanced:</strong> ${dominantDosha.imbalance_issues}</li>
                    <li><strong>Balancing Approach:</strong> ${dominantDosha.balancing}</li>
                </ul>
            </div>
            
            <div class="quote">
                "Disease is the result of living out of harmony with one's constitution. Our constitution is the inherited balance of energies within our body, mind and pranic energy system which makes us the unique individual."
            </div>
        </div>
    `;
    
        // Display personalized therapy recommendations
        therapyContainer.innerHTML = practicalTherapy.generateRecommendationsHTML(personalizedPlan);
        
        // Display class guidance with proper teaching principles
        classGuidanceContainer.innerHTML = generateClassGuidance(
            doshaResults.dominantDosha, 
            gunaResults.dominantGuna
        );
        
        // Save assessment results if user is logged in
        if (typeof userManager !== 'undefined' && userManager.currentUser) {
            userManager.saveAssessment(doshaResults, gunaResults);
        }
    } catch (error) {
        console.error('Error displaying recommendations:', error);
        // Fallback to basic recommendations
        therapyContainer.innerHTML = generateIntegratedTherapyRecommendations(
            doshaResults.dominantDosha, 
            gunaResults.dominantGuna,
            doshaResults.percentages,
            gunaResults.percentages
        );
        
        classGuidanceContainer.innerHTML = generateClassGuidance(
            doshaResults.dominantDosha, 
            gunaResults.dominantGuna
        );
    }
}

function showBasicResults(doshaResults, gunaResults) {
    showScreen('results-screen');
    
    const doshaContainer = document.getElementById('dosha-results');
    const gunaContainer = document.getElementById('guna-results');
    const integratedContainer = document.getElementById('integrated-description');
    const therapyContainer = document.getElementById('therapy-recommendations');
    const classGuidanceContainer = document.getElementById('class-guidance');
    
    // Display dosha scores
    doshaContainer.innerHTML = `
        <h3>Your Dosha Constitution</h3>
        <div class="dosha-result dosha-vata">
            <div class="dosha-name">Vata</div>
            <div class="dosha-percentage">${doshaResults.percentages.vata}%</div>
        </div>
        <div class="dosha-result dosha-pitta">
            <div class="dosha-name">Pitta</div>
            <div class="dosha-percentage">${doshaResults.percentages.pitta}%</div>
        </div>
        <div class="dosha-result dosha-kapha">
            <div class="dosha-name">Kapha</div>
            <div class="dosha-percentage">${doshaResults.percentages.kapha}%</div>
        </div>
    `;
    
    // Display guna scores
    gunaContainer.innerHTML = `
        <h3>Your Guna Constitution</h3>
        <div class="guna-results">
            <div class="guna-result guna-sattva">
                <div class="guna-name">Sattva</div>
                <div class="guna-percentage">${gunaResults.percentages.sattva}%</div>
            </div>
            <div class="guna-result guna-rajas">
                <div class="guna-name">Rajas</div>
                <div class="guna-percentage">${gunaResults.percentages.rajas}%</div>
            </div>
            <div class="guna-result guna-tamas">
                <div class="guna-name">Tamas</div>
                <div class="guna-percentage">${gunaResults.percentages.tamas}%</div>
            </div>
        </div>
    `;
    
    // Display basic integrated description
    const dominantDosha = doshaInfo[doshaResults.dominantDosha];
    const dominantGunaInfo = window.gunaTherapeutics ? 
        window.gunaTherapeutics.advancedGunaInfo[gunaResults.dominantGuna] : 
        gunaInfo[gunaResults.dominantGuna];
    
    integratedContainer.innerHTML = `
        <div class="integrated-description">
            <h3>Your Holistic Constitution</h3>
            <p><strong>Dominant Dosha:</strong> ${dominantDosha.name}</p>
            <p>${dominantDosha.description}</p>
            <p><strong>Elements:</strong> ${dominantDosha.elements}</p>
            <p><strong>Qualities:</strong> ${dominantDosha.qualities}</p>
            <p><strong>Dominant Guna:</strong> ${dominantGunaInfo.name}</p>
            <p>${dominantGunaInfo.description}</p>
            
            <div class="constitution-insights">
                <h4>Key Insights for Your Practice:</h4>
                <ul>
                    <li><strong>Physical Body:</strong> ${dominantDosha.body_characteristics}</li>
                    <li><strong>Personality:</strong> ${dominantDosha.personality}</li>
                    <li><strong>Mental-Emotional (Guna):</strong> ${dominantGunaInfo.essence || dominantGunaInfo.description}</li>
                    <li><strong>When Imbalanced:</strong> ${dominantDosha.imbalance_issues}</li>
                    <li><strong>Balancing Approach:</strong> ${dominantDosha.balancing}</li>
                </ul>
            </div>
            
            <div class="quote">
                "Disease is the result of living out of harmony with one's constitution. Our constitution is the inherited balance of energies within our body, mind and pranic energy system which makes us the unique individual."
            </div>
        </div>
    `;
    
    // Display basic therapy recommendations
    therapyContainer.innerHTML = generateIntegratedTherapyRecommendations(
        doshaResults.dominantDosha, 
        gunaResults.dominantGuna,
        doshaResults.percentages,
        gunaResults.percentages
    );
    
    // Display class guidance
    classGuidanceContainer.innerHTML = generateClassGuidance(
        doshaResults.dominantDosha, 
        gunaResults.dominantGuna
    );
}

function generateIntegratedTherapyRecommendations(dominantDosha, dominantGuna, doshaPercentages, gunaPercentages) {
    const doshaTherapy = doshaInfo[dominantDosha].therapy;
    const gunaGuidance = window.gunaTherapeutics ? 
        window.gunaTherapeutics.advancedGunaInfo[dominantGuna] : 
        gunaInfo[dominantGuna];
    
    return `
        <div class="therapy-section">
            <h3>🕉️ Integrated Yoga Therapy Protocol</h3>
            
            <div class="disclaimer">
                <strong>Essential Safety Guidelines:</strong><br>
                ${doshaTherapy.contraindications}<br><br>
                <em>Remember: At any point you feel it is too much, don't do it. This is your space - do your best and leave the rest.</em>
            </div>
            
            <div class="therapy-format">
                <h4>Personalized Practice Recommendations</h4>
                <div class="practice-section">
                    <h5>For Your ${dominantDosha.charAt(0).toUpperCase() + dominantDosha.slice(1)} Constitution:</h5>
                    <ul class="practice-list">
                        ${doshaTherapy.practices.map(practice => `<li>• ${practice}</li>`).join('')}
                    </ul>
                </div>
                
                <div class="practice-section">
                    <h5>For Your ${dominantGuna.charAt(0).toUpperCase() + dominantGuna.slice(1)} Mental State:</h5>
                    <ul class="practice-list">
                        ${gunaGuidance.cultivation_practices ? 
                            gunaGuidance.cultivation_practices.map(practice => `<li>• ${practice}</li>`).join('') :
                            gunaGuidance.practices.map(practice => `<li>• ${practice}</li>`).join('')
                        }
                    </ul>
                </div>
            </div>
            
            <div class="therapy-format">
                <h4>Daily Routine Recommendations</h4>
                <p><strong>Morning (6-10 AM):</strong> ${getDailyRecommendations('morning', dominantDosha, dominantGuna)}</p>
                <p><strong>Afternoon (10 AM-6 PM):</strong> ${getDailyRecommendations('afternoon', dominantDosha, dominantGuna)}</p>
                <p><strong>Evening (6-10 PM):</strong> ${getDailyRecommendations('evening', dominantDosha, dominantGuna)}</p>
                <p><strong>Night (10 PM-6 AM):</strong> ${getDailyRecommendations('night', dominantDosha, dominantGuna)}</p>
            </div>
            
            <div class="quote">
                "Problems are opportunities in disguise. Pain we cannot choose, but suffering is our choice."<br>
                <small>Remember: 60% of healing comes from positive mindset and faith. Align with natural biorhythms and eat light.</small>
            </div>
        </div>
    `;
}

function generateClassGuidance(dominantDosha, dominantGuna) {
    return `
        <div class="therapy-section">
            <h3>🌟 Class Teaching Guidance</h3>
            
            <div class="therapy-format">
                <h4>Opening Script (Always Begin Here)</h4>
                <div class="class-script">
                    <p><em>"Welcome, beautiful souls, to this sacred space we create together.</em></p>
                    <p><em>This is YOUR space. Do your best and leave the rest.</em></p>
                    <p><em>Let's begin with quiet sitting, finding our center, our home within.</em></p>
                    <p><em>Remember: There is no competition here. Everyone's body is different, everyone's journey is unique.</em></p>
                    <p><em>We don't mention names or compare - we simply honor each person's practice.</em></p>
                </div>
            </div>
            
            <div class="therapy-format">
                <h4>Essential Teaching Guidelines</h4>
                <ul class="practice-list">
                    <li>• <strong>Contraindications First:</strong> Always mention safety guidelines at the beginning</li>
                    <li>• <strong>Motivational Language:</strong> Use encouraging, non-judgmental words</li>
                    <li>• <strong>No Competition:</strong> Never mention names or create comparison</li>
                    <li>• <strong>Individual Pace:</strong> "At any point you feel it is too much, don't do it"</li>
                    <li>• <strong>Start with Sitting:</strong> Always begin with quiet, centering practice</li>
                </ul>
            </div>
            
            <div class="therapy-format">
                <h4>Class Structure Template</h4>
                ${classStructure.structure.map(phase => `
                    <div class="class-phase">
                        <strong>${phase.phase}</strong> (${phase.duration}): ${phase.description}
                    </div>
                `).join('')}
            </div>
            
            <div class="therapy-format">
                <h4>Motivational Phrases to Use</h4>
                <ul class="practice-list">
                    ${classStructure.motivationalLanguage.map(phrase => `<li>• "${phrase}"</li>`).join('')}
                </ul>
            </div>
        </div>
    `;
}

function getDailyRecommendations(timeOfDay, dosha, guna) {
    const doshaRec = {
        vata: {
            morning: "Grounding practices, warm foods, gentle movement",
            afternoon: "Regular meals, stability, routine activities", 
            evening: "Calming practices, warm dinner, quiet activities",
            night: "Early rest, warm environment, relaxation"
        },
        pitta: {
            morning: "Moderate activity, cooling foods, balanced practice",
            afternoon: "Avoid overheating, main meal, focused work",
            evening: "Cooling practices, light dinner, peaceful activities", 
            night: "Cool environment, relaxation, adequate rest"
        },
        kapha: {
            morning: "Energizing practices, light foods, dynamic movement",
            afternoon: "Active pursuits, light lunch, stimulating activities",
            evening: "Moderate activity, early light dinner, movement",
            night: "Earlier bedtime, avoid heavy foods, light environment"
        }
    };
    
    return doshaRec[dosha][timeOfDay];
}

function restartAssessment() {
    currentQuestion = 0;
    answers = {};
    currentGunaQuestion = 0;
    gunaAnswers = {};
    currentAgniQuestion = 0;
    agniAnswers = {};
    pillarAnswers = { ahar: {}, vihar: {}, achar: {}, vichar: {} };
    startAssessment();
}

// Advice Section Functions
let adviceEngine = null;

function initializeAdviceEngine() {
    if (!adviceEngine && typeof EnhancedTherapeuticAdviceEngine !== 'undefined') {
        adviceEngine = new EnhancedTherapeuticAdviceEngine();
        
        // Set current constitution if available
        if (typeof calculateResults === 'function' && typeof calculateGunaResults === 'function') {
            try {
                const doshaResults = calculateResults();
                const gunaResults = calculateGunaResults();
                adviceEngine.setConstitution(doshaResults, gunaResults);
            } catch (e) {
                console.log('Constitution not yet available for advice engine');
            }
        }
    }
}

function showAdviceSection() {
    initializeAdviceEngine();
    showScreen('advice-screen');
    
    // Reset the advice form
    document.getElementById('condition-select').value = '';
    document.getElementById('custom-condition').value = '';
    document.getElementById('severity-level').value = 'mild';
    document.getElementById('experience-level').value = 'beginner';
    document.getElementById('custom-condition-group').style.display = 'none';
    document.getElementById('advice-results').style.display = 'none';
}

function updateConditionAdvice() {
    const conditionSelect = document.getElementById('condition-select');
    const customGroup = document.getElementById('custom-condition-group');
    
    if (conditionSelect.value === 'custom') {
        customGroup.style.display = 'block';
    } else {
        customGroup.style.display = 'none';
    }
}

async function generateAdvice() {
    initializeAdviceEngine();
    
    if (!adviceEngine) {
        alert('Please complete the constitutional assessment first');
        return;
    }
    
    const condition = document.getElementById('condition-select').value;
    const customCondition = document.getElementById('custom-condition').value;
    const severity = document.getElementById('severity-level').value;
    const experienceLevel = document.getElementById('experience-level').value;
    
    if (!condition) {
        alert('Please select a condition or concern');
        return;
    }
    
    if (condition === 'custom' && !customCondition.trim()) {
        alert('Please describe your specific concern');
        return;
    }
    
    try {
        const advice = await adviceEngine.generateAdvice(
            condition, 
            severity, 
            experienceLevel, 
            customCondition
        );
        
        displayAdviceResults(advice);
    } catch (error) {
        console.error('Error generating advice:', error);
        alert('Please complete the constitutional assessment before seeking advice');
        showScreen('welcome-screen');
    }
}

function displayAdviceResults(advice) {
    const resultsContainer = document.getElementById('advice-results');
    const contextContainer = document.getElementById('constitutional-context');
    const recommendationsContainer = document.getElementById('specific-recommendations');
    const protocolContainer = document.getElementById('practice-protocol');
    const lifestyleContainer = document.getElementById('lifestyle-adjustments');
    const precautionsContainer = document.getElementById('precautions-warnings');
    
    // Constitutional Context
    contextContainer.innerHTML = `
        <div class="constitutional-context">
            <h4>🔍 Constitutional Analysis for ${advice.condition.name}</h4>
            <div class="constitutional-match">
                <strong>Constitutional Relevance:</strong> ${advice.constitutionalContext.constitutionalRelevance}
            </div>
            <div class="doshas-analysis">
                <h5>Your ${advice.constitutionalContext.dominantDosha.charAt(0).toUpperCase() + advice.constitutionalContext.dominantDosha.slice(1)} Constitution & This Condition:</h5>
                <p>${advice.constitutionalContext.doshaAnalysis}</p>
            </div>
            <div class="guna-analysis">
                <h5>Your ${advice.constitutionalContext.dominantGuna.charAt(0).toUpperCase() + advice.constitutionalContext.dominantGuna.slice(1)} Mental Nature:</h5>
                <p>${advice.constitutionalContext.gunaAnalysis}</p>
            </div>
        </div>
    `;
    
    // Specific Recommendations
    recommendationsContainer.innerHTML = `
        <div class="specific-recommendations">
            <h4>🎯 Personalized Practice Recommendations</h4>
            
            <div class="technique-detail">
                <h5>🫁 Primary Pranayama</h5>
                <strong>${advice.specificRecommendations.pranayama.primary}</strong>
                <p><strong>Breathing Ratio:</strong> ${advice.specificRecommendations.pranayama.ratios}</p>
                
                ${advice.specificRecommendations.pranayama.primaryDetails ? `
                <div class="technique-benefits">
                    <h6>Benefits:</h6>
                    <ul>
                        ${advice.specificRecommendations.pranayama.primaryDetails.benefits.map(benefit => `<li>${benefit}</li>`).join('')}
                    </ul>
                </div>
                
                <div class="technique-setup">
                    <h6>Setup:</h6>
                    <p>${advice.specificRecommendations.pranayama.primaryDetails.setup}</p>
                </div>
                
                <div class="technique-steps">
                    <h6>Steps:</h6>
                    <ol>
                        ${advice.specificRecommendations.pranayama.primaryDetails.steps.map(step => `<li>${step}</li>`).join('')}
                    </ol>
                </div>
                
                <div class="constitutional-note">
                    <h6>For Your Constitution:</h6>
                    <p>${advice.specificRecommendations.pranayama.constitutionalNote}</p>
                </div>
                
                ${advice.specificRecommendations.pranayama.primaryDetails.contraindications.length > 0 ? `
                <div class="contraindications">
                    <h6 class="warning-text">Contraindications:</h6>
                    <ul>
                        ${advice.specificRecommendations.pranayama.primaryDetails.contraindications.map(item => `<li class="warning-text">${item}</li>`).join('')}
                    </ul>
                </div>` : ''}
                ` : ''}
                
                <div class="secondary-techniques">
                    <h6>Additional Techniques:</h6>
                    ${advice.specificRecommendations.pranayama.secondary.map(tech => `
                        <div class="secondary-tech">
                            <strong>${tech.name}</strong>
                            ${tech.benefits.length > 0 ? `
                            <ul class="tech-benefits">
                                ${tech.benefits.map(benefit => `<li>${benefit}</li>`).join('')}
                            </ul>` : ''}
                        </div>
                    `).join('')}
                </div>
            </div>
            
            <div class="technique-detail">
                <h5>🧘‍♀️ Recommended Asanas</h5>
                ${advice.asanaSequence ? `
                    <div class="asana-recommendations">
                        <div class="primary-asanas">
                            <h6>Primary Therapeutic Asanas:</h6>
                            ${advice.asanaSequence.primary.map(asana => `
                                <div class="asana-item">
                                    <strong>${asana.name}</strong>
                                    <p><em>${asana.description}</em></p>
                                    <p><strong>Benefits:</strong> ${asana.benefits}</p>
                                    <p><strong>Breathing:</strong> ${asana.breathingSteps}</p>
                                    ${asana.modifications ? `<p><strong>Modifications:</strong> ${asana.modifications}</p>` : ''}
                                </div>
                            `).join('')}
                        </div>
                        
                        <div class="practice-sequence">
                            <h6>🎯 Practice Sequence (${advice.asanaSequence.practiceGuidance.duration.total} minutes):</h6>
                            <div class="sequence-flow">
                                <div class="sequence-phase">
                                    <strong>Warmup (${advice.asanaSequence.practiceGuidance.duration.warmup} min):</strong>
                                    ${advice.asanaSequence.sequence.sequence.warmup.map(asana => `<span class="sequence-pose">${asana.name}</span>`).join(' → ')}
                                </div>
                                <div class="sequence-phase">
                                    <strong>Main Practice (${advice.asanaSequence.practiceGuidance.duration.main} min):</strong>
                                    ${advice.asanaSequence.sequence.sequence.main.map(asana => `<span class="sequence-pose">${asana.name}</span>`).join(' → ')}
                                </div>
                                <div class="sequence-phase">
                                    <strong>Cooldown (${advice.asanaSequence.practiceGuidance.duration.cooldown} min):</strong>
                                    ${advice.asanaSequence.sequence.sequence.cooldown.map(asana => `<span class="sequence-pose">${asana.name}</span>`).join(' → ')}
                                </div>
                            </div>
                        </div>
                        
                        <div class="integration-guidance">
                            <h6>🌊 Pranayama + Asana Integration:</h6>
                            <p><strong>Sequence:</strong> ${advice.asanaSequence.practiceGuidance.integration.sequence}</p>
                            <p><strong>Timing:</strong> ${advice.asanaSequence.practiceGuidance.integration.timing}</p>
                            <p><strong>Breath in Poses:</strong> ${advice.asanaSequence.practiceGuidance.integration.breath_in_poses}</p>
                        </div>
                    </div>
                ` : `
                    <ul>
                        ${advice.specificRecommendations.asana.map(pose => `<li>${pose}</li>`).join('')}
                    </ul>
                `}
            </div>
            
            <div class="technique-detail">
                <h5>🧠 Meditation Practices</h5>
                <ul>
                    ${advice.specificRecommendations.meditation.map(practice => `<li>${practice}</li>`).join('')}
                </ul>
            </div>
            
            <div class="technique-detail">
                <h5>⚡ Immediate Relief Techniques</h5>
                <ul>
                    ${advice.specificRecommendations.immediateRelief.map(technique => `<li class="benefit-text">${technique}</li>`).join('')}
                </ul>
            </div>
        </div>
    `;
    
    // Practice Protocol
    protocolContainer.innerHTML = `
        <div class="practice-protocol">
            <h4>📋 Your Practice Protocol</h4>
            
            <div class="advice-protocol">
                <h5>⏱️ Duration & Frequency</h5>
                <p><strong>Session Length:</strong> ${advice.practiceProtocol.duration}</p>
                <p><strong>Frequency:</strong> ${advice.practiceProtocol.frequency}</p>
                <span class="severity-indicator severity-${advice.severity}">${advice.severity.toUpperCase()} CONDITION</span>
            </div>
            
            <div class="advice-protocol">
                <h5>🏗️ Practice Structure</h5>
                <ul>
                    <li><strong>Warm-up:</strong> ${advice.practiceProtocol.structure.warmUp}</li>
                    <li><strong>Main Practice:</strong> ${advice.practiceProtocol.structure.mainPractice}</li>
                    <li><strong>Cool-down:</strong> ${advice.practiceProtocol.structure.coolDown}</li>
                </ul>
                <p><em>${advice.practiceProtocol.structure.notes}</em></p>
            </div>
            
            <div class="advice-protocol">
                <h5>📈 Progression Plan</h5>
                <ul>
                    <li><strong>Weeks 1-2:</strong> ${advice.practiceProtocol.progressionPlan.week1_2}</li>
                    <li><strong>Weeks 3-4:</strong> ${advice.practiceProtocol.progressionPlan.week3_4}</li>
                    <li><strong>Months 2-3:</strong> ${advice.practiceProtocol.progressionPlan.month2_3}</li>
                    <li><strong>Long-term:</strong> ${advice.practiceProtocol.progressionPlan.longTerm}</li>
                </ul>
            </div>
            
            ${advice.practiceProtocol.adaptations.length > 0 ? `
            <div class="advice-protocol">
                <h5>🔧 Adaptations for You</h5>
                <ul>
                    ${advice.practiceProtocol.adaptations.map(adaptation => `<li>${adaptation}</li>`).join('')}
                </ul>
            </div>` : ''}
        </div>
    `;
    
    // Lifestyle Adjustments
    lifestyleContainer.innerHTML = `
        <div class="lifestyle-adjustments">
            <h4>🌱 Lifestyle Support for Healing</h4>
            
            <div class="advice-protocol">
                <h5>🍽️ Dietary Recommendations</h5>
                <ul>
                    ${advice.lifestyleAdjustments.diet.map(item => `<li>${item}</li>`).join('')}
                </ul>
            </div>
            
            <div class="advice-protocol">
                <h5>😴 Sleep Guidance</h5>
                <ul>
                    ${advice.lifestyleAdjustments.sleep.map(item => `<li>${item}</li>`).join('')}
                </ul>
            </div>
            
            <div class="advice-protocol">
                <h5>⏰ Daily Routine</h5>
                <ul>
                    ${advice.lifestyleAdjustments.dailyRoutine.map(item => `<li>${item}</li>`).join('')}
                </ul>
            </div>
            
            <div class="advice-protocol">
                <h5>🧘 Stress Management</h5>
                <ul>
                    ${advice.lifestyleAdjustments.stressManagement.map(item => `<li>${item}</li>`).join('')}
                </ul>
            </div>
            
            <div class="advice-protocol">
                <h5>🏡 Environmental Factors</h5>
                <ul>
                    ${advice.lifestyleAdjustments.environmentalFactors.map(item => `<li>${item}</li>`).join('')}
                </ul>
            </div>
        </div>
    `;
    
    // Precautions and Warnings
    precautionsContainer.innerHTML = `
        <div class="precautions-warnings">
            <h4>⚠️ Important Safety Guidelines</h4>
            
            <div class="advice-protocol">
                <h5>General Precautions</h5>
                <ul>
                    ${advice.precautions.general.map(item => `<li>${item}</li>`).join('')}
                </ul>
            </div>
            
            <div class="advice-protocol">
                <h5>For Your Condition Severity</h5>
                <ul>
                    ${advice.precautions.severitySpecific.map(item => `<li class="warning-text">${item}</li>`).join('')}
                </ul>
            </div>
            
            <div class="advice-protocol">
                <h5>Constitutional Considerations</h5>
                <ul>
                    ${advice.precautions.constitutional.map(item => `<li>${item}</li>`).join('')}
                </ul>
            </div>
            
            <div class="advice-protocol">
                <h5>When to Seek Professional Help</h5>
                <ul>
                    ${advice.precautions.whenToSeekHelp.map(item => `<li class="warning-text">${item}</li>`).join('')}
                </ul>
            </div>
        </div>
    `;
    
    // Show the results
    resultsContainer.style.display = 'block';
    
    // Scroll to results
    resultsContainer.scrollIntoView({ behavior: 'smooth' });
}

// Home page quick advice functions
function showQuickAdvice(condition) {
    // Create and show modal with quick advice
    const modal = createQuickAdviceModal(condition);
    document.body.appendChild(modal);
    
    // Generate quick advice without needing full assessment
    const quickAdvice = generateQuickAdviceForCondition(condition);
    displayQuickAdviceContent(modal, quickAdvice);
}

function createQuickAdviceModal(condition) {
    const overlay = document.createElement('div');
    overlay.className = 'quick-advice-overlay';
    overlay.onclick = (e) => {
        if (e.target === overlay) {
            closeQuickAdvice();
        }
    };
    
    const modal = document.createElement('div');
    modal.className = 'quick-advice-modal';
    modal.innerHTML = `
        <button class="quick-advice-close" onclick="closeQuickAdvice()">×</button>
        <h3>Quick Relief for ${getConditionDisplayName(condition)}</h3>
        <div id="quick-advice-content">
            <p>Loading personalized recommendations...</p>
        </div>
        <div style="text-align: center; margin-top: 20px;">
            <button onclick="closeQuickAdvice(); startAssessment();" class="btn btn-primary">
                Take Full Assessment for Personalized Advice
            </button>
        </div>
    `;
    
    overlay.appendChild(modal);
    return overlay;
}

function closeQuickAdvice() {
    const overlay = document.querySelector('.quick-advice-overlay');
    if (overlay) {
        overlay.remove();
    }
}

function getConditionDisplayName(condition) {
    const names = {
        anxiety: 'Anxiety & Stress',
        back_pain: 'Back Pain',
        insomnia: 'Sleep Issues',
        digestive_issues: 'Digestive Problems',
        headaches: 'Headaches',
        stress: 'General Stress'
    };
    return names[condition] || condition;
}

function generateQuickAdviceForCondition(condition) {
    // Create a basic advice engine for quick recommendations
            const quickAdviceEngine = new EnhancedTherapeuticAdviceEngine();
    
    // Generate basic advice without constitutional assessment
    const quickTechniques = {
        anxiety: {
            primary: "4-7-8 Breathing",
            immediate: ["Take 3 deep breaths", "Focus on lengthening exhale", "Place hand on heart"],
            benefits: ["Rapidly calms nervous system", "Reduces cortisol levels", "Activates relaxation response"]
        },
        back_pain: {
            primary: "Gentle Spinal Breathing",
            immediate: ["Cat-cow stretches", "Knee to chest", "Gentle twisting"],
            benefits: ["Releases muscle tension", "Improves spinal mobility", "Reduces inflammation"]
        },
        insomnia: {
            primary: "Left Nostril Breathing",
            immediate: ["Progressive muscle relaxation", "Body scan", "Gentle neck rolls"],
            benefits: ["Activates parasympathetic nervous system", "Reduces cortisol", "Promotes melatonin production"]
        },
        digestive_issues: {
            primary: "Belly Breathing",
            immediate: ["Circular belly massage", "Knees to chest", "Gentle twisting"],
            benefits: ["Stimulates vagus nerve", "Improves digestion", "Reduces bloating"]
        },
        headaches: {
            primary: "Cooling Breath",
            immediate: ["Temple massage", "Neck stretches", "Eye palming"],
            benefits: ["Reduces tension", "Improves circulation", "Calms nervous system"]
        },
        stress: {
            primary: "Alternate Nostril Breathing",
            immediate: ["Shoulder rolls", "Deep sighing", "Gentle stretching"],
            benefits: ["Balances nervous system", "Reduces stress hormones", "Improves focus"]
        }
    };
    
    return quickTechniques[condition] || quickTechniques.stress;
}

function displayQuickAdviceContent(modal, advice) {
    const contentDiv = modal.querySelector('#quick-advice-content');
    contentDiv.innerHTML = `
        <div class="quick-technique">
            <h5>🫁 Primary Technique: ${advice.primary}</h5>
            <div class="technique-benefits">
                <h6>Benefits:</h6>
                <ul>
                    ${advice.benefits.map(benefit => `<li>${benefit}</li>`).join('')}
                </ul>
            </div>
        </div>
        
        <div class="quick-technique">
            <h5>⚡ Immediate Relief Actions:</h5>
            <ul>
                ${advice.immediate.map(action => `<li>${action}</li>`).join('')}
            </ul>
        </div>
        
        <div class="quick-technique">
            <h5>📝 Quick Instructions:</h5>
            <ol>
                <li>Find a comfortable position</li>
                <li>Close your eyes and focus on your breath</li>
                <li>Follow the technique slowly and gently</li>
                <li>Practice for 3-5 minutes initially</li>
                <li>Stop if you feel uncomfortable</li>
            </ol>
        </div>
        
        <div style="background: #fff3cd; padding: 15px; border-radius: 8px; margin: 15px 0;">
            <strong>💡 Note:</strong> These are general recommendations. For personalized advice based on your unique constitution, complete the full assessment.
        </div>
    `;
}

function showAllConditions() {
    // Navigate directly to advice section
    showAdviceSection();
}

// Enhanced authentication functions (now implemented with Firebase)
function showLoginOptions() {
    if (typeof userManager !== 'undefined') {
        userManager.showLoginModal();
    } else {
        // Fallback if userManager isn't ready
        if (window.premiumManager) {
            window.premiumManager.showUpgradePrompt('cloudSync');
        } else {
            alert('Authentication features are temporarily unavailable. All core yoga therapy features work without an account!');
        }
    }
}

async function loadUserAssessments() {
    if (typeof userManager !== 'undefined' && userManager.currentUser) {
        const assessments = await userManager.getUserAssessments();
        showUserAssessmentsModal(assessments);
    } else {
        alert('Please sign in to view your assessment history.');
    }
}

function showUserAssessmentsModal(assessments) {
    const modal = createAssessmentsModal(assessments);
    document.body.appendChild(modal);
}

function createAssessmentsModal(assessments) {
    const overlay = document.createElement('div');
    overlay.className = 'quick-advice-overlay';
    overlay.onclick = (e) => {
        if (e.target === overlay) {
            closeAssessmentsModal();
        }
    };

    const modal = document.createElement('div');
    modal.className = 'quick-advice-modal';
    modal.style.maxWidth = '700px';
    
    let content = `
        <button class="quick-advice-close" onclick="closeAssessmentsModal()">×</button>
        <h3>📊 Your Assessment History</h3>
    `;

    if (assessments.length === 0) {
        content += `
            <div class="empty-state">
                <h4>No Assessments Yet</h4>
                <p>Take your first assessment to start tracking your wellness journey!</p>
                <button onclick="closeAssessmentsModal(); startAssessment();" class="btn btn-primary">
                    Take Assessment Now
                </button>
            </div>
        `;
    } else {
        content += '<div class="assessment-history">';
        
        assessments.reverse().forEach((assessment, index) => {
            const date = new Date(assessment.timestamp.seconds * 1000).toLocaleDateString();
            content += `
                <div class="assessment-item">
                    <div class="assessment-date">Assessment ${index + 1} - ${date}</div>
                    <div class="assessment-summary">
                        <div class="dosha-guna-summary">
                            <strong>Dominant Dosha:</strong> ${assessment.doshaResults.dominantDosha}
                            <br><small>Vata: ${assessment.doshaResults.percentages.vata}%, 
                            Pitta: ${assessment.doshaResults.percentages.pitta}%, 
                            Kapha: ${assessment.doshaResults.percentages.kapha}%</small>
                        </div>
                        <div class="dosha-guna-summary">
                            <strong>Dominant Guna:</strong> ${assessment.gunaResults.dominantGuna}
                            <br><small>Sattva: ${assessment.gunaResults.percentages.sattva}%, 
                            Rajas: ${assessment.gunaResults.percentages.rajas}%, 
                            Tamas: ${assessment.gunaResults.percentages.tamas}%</small>
                        </div>
                    </div>
                    <div class="dashboard-actions">
                        <button onclick="loadAssessmentResults('${assessment.id}')" class="btn btn-outline btn-small">
                            View Full Results
                        </button>
                        <button onclick="getAdviceForAssessment('${assessment.id}')" class="btn btn-outline btn-small">
                            Get New Advice
                        </button>
                    </div>
                </div>
            `;
        });
        
        content += '</div>';
    }

    modal.innerHTML = content;
    overlay.appendChild(modal);
    return overlay;
}

function closeAssessmentsModal() {
    const overlay = document.querySelector('.quick-advice-overlay');
    if (overlay) {
        overlay.remove();
    }
}

async function showPersonalizedDashboard() {
    if (typeof userManager !== 'undefined' && userManager.currentUser) {
        const assessments = await userManager.getUserAssessments();
        showDashboardModal(assessments);
    } else {
        alert('Please sign in to view your personalized dashboard.');
    }
}

function showDashboardModal(assessments) {
    const modal = createDashboardModal(assessments);
    document.body.appendChild(modal);
}

function createDashboardModal(assessments) {
    const overlay = document.createElement('div');
    overlay.className = 'quick-advice-overlay';
    overlay.onclick = (e) => {
        if (e.target === overlay) {
            closeDashboardModal();
        }
    };

    const modal = document.createElement('div');
    modal.className = 'quick-advice-modal';
    modal.style.maxWidth = '800px';
    
    let content = `
        <button class="quick-advice-close" onclick="closeDashboardModal()">×</button>
        <h3>🎯 Your Personalized Dashboard</h3>
    `;

    if (assessments.length === 0) {
        content += `
            <div class="empty-state">
                <h4>Welcome to Your Yoga Therapy Journey!</h4>
                <p>Complete your first assessment to get personalized recommendations.</p>
                <button onclick="closeDashboardModal(); startAssessment();" class="btn btn-primary">
                    Take Assessment Now
                </button>
            </div>
        `;
    } else {
        const latestAssessment = assessments[assessments.length - 1];
        const progressTrend = assessments.length > 1 ? analyzeProgress(assessments) : null;
        
        content += `
            <div class="user-dashboard">
                <h4>Latest Constitutional Analysis</h4>
                <div class="assessment-summary">
                    <div class="dosha-guna-summary">
                        <strong>Your Primary Dosha:</strong> ${latestAssessment.doshaResults.dominantDosha}
                        <br><small>This influences your physical and mental tendencies</small>
                    </div>
                    <div class="dosha-guna-summary">
                        <strong>Your Primary Guna:</strong> ${latestAssessment.gunaResults.dominantGuna}
                        <br><small>This affects your mental and emotional patterns</small>
                    </div>
                </div>
                
                ${progressTrend ? `
                <div class="progress-trend">
                    <h4>Progress Insights</h4>
                    <p>${progressTrend}</p>
                </div>` : ''}
                
                <div class="dashboard-actions">
                    <button onclick="closeDashboardModal(); showAdviceSection();" class="btn btn-primary">
                        Get Condition-Specific Advice
                    </button>
                    <button onclick="closeDashboardModal(); startAssessment();" class="btn btn-outline">
                        Retake Assessment
                    </button>
                    <button onclick="closeDashboardModal(); loadUserAssessments();" class="btn btn-outline">
                        View All History
                    </button>
                </div>
            </div>
        `;
    }

    modal.innerHTML = content;
    overlay.appendChild(modal);
    return overlay;
}

function closeDashboardModal() {
    const overlay = document.querySelector('.quick-advice-overlay');
    if (overlay) {
        overlay.remove();
    }
}

function analyzeProgress(assessments) {
    // Simple progress analysis
    const first = assessments[0];
    const latest = assessments[assessments.length - 1];
    
    let insights = [];
    
    if (first.doshaResults.dominantDosha === latest.doshaResults.dominantDosha) {
        insights.push(`Your primary dosha has remained consistently ${latest.doshaResults.dominantDosha}`);
    } else {
        insights.push(`Your dominant dosha has shifted from ${first.doshaResults.dominantDosha} to ${latest.doshaResults.dominantDosha}`);
    }
    
    insights.push(`You've completed ${assessments.length} assessments, showing commitment to your wellness journey`);
    
    return insights.join('. ') + '.';
}

function signOut() {
    if (typeof userManager !== 'undefined') {
        userManager.signOut();
    } else {
        alert('No user currently signed in.');
    }
}

// Initialize app when page loads
// Initialize premium manager
window.premiumManager = new PremiumManager();

document.addEventListener('DOMContentLoaded', function() {
    showScreen('welcome-screen');
});
