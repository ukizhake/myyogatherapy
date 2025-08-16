// Guna Assessment Questions and Information
const gunaInfo = {
    sattva: {
        name: "Sattva",
        description: "Pure potentiality, virtuous and right living. Sattva is pure essence - Atman pure consciousness. Prana exists in Sattva.",
        characteristics: [
            "Pure consciousness and awareness",
            "Virtuous and ethical living", 
            "Balanced and harmonious",
            "Compassionate and loving",
            "Peaceful and content",
            "Clear thinking and wisdom"
        ],
        practices: [
            "Meditation and mindfulness",
            "Gentle, flowing yoga practices",
            "Pranayama for balance",
            "Seva (selfless service)",
            "Sattvic diet (fresh, light foods)",
            "Regular sleep patterns"
        ],
        lifestyle: "Live in harmony with natural rhythms, practice non-violence, cultivate gratitude and contentment"
    },
    rajas: {
        name: "Rajas", 
        description: "Rajas is action, momentum, kinetic energy in motion. Accomplished, full of fire. Like momentum - material in motion till something stops it.",
        characteristics: [
            "Active and energetic",
            "Ambitious and driven", 
            "Passionate and intense",
            "Goal-oriented",
            "Sometimes restless or agitated",
            "Strong leadership qualities"
        ],
        practices: [
            "Dynamic yoga flows",
            "Challenging asanas",
            "Vigorous pranayama",
            "Physical exercise",
            "Competitive sports",
            "Goal-setting and achievement"
        ],
        balance: "Channel Rajasic energy positively through purposeful action while cultivating Sattvic awareness to avoid burnout"
    },
    tamas: {
        name: "Tamas",
        description: "Tamas represents inertia, stability, and rest. Like Newton's law - without external force will stay in same position. Necessary for sleep and stability.",
        characteristics: [
            "Stable and grounded",
            "Good for rest and recovery",
            "Sometimes lethargic or dull",
            "Resistant to change", 
            "Can be self-focused",
            "Provides necessary stability"
        ],
        practices: [
            "Gentle, restorative yoga",
            "Long relaxation sessions",
            "Yin yoga and supported poses",
            "Deep breathing practices",
            "Sleep and rest",
            "Grounding activities"
        ],
        balance: "Activate Rajasic energy when Tamas becomes excessive, but honor the need for rest and stability"
    }
};

const gunaQuestions = [
    {
        id: 1,
        text: "How do you typically respond to stress?",
        options: [
            { value: 'sattva', text: "I remain calm and seek balanced solutions" },
            { value: 'rajas', text: "I take immediate action to solve the problem" },
            { value: 'tamas', text: "I tend to withdraw and avoid dealing with it" }
        ]
    },
    {
        id: 2,
        text: "What describes your typical energy levels?",
        options: [
            { value: 'sattva', text: "Steady, balanced energy throughout the day" },
            { value: 'rajas', text: "High energy with peaks and valleys" },
            { value: 'tamas', text: "Generally low energy, prefer rest" }
        ]
    },
    {
        id: 3,
        text: "How do you approach relationships?",
        options: [
            { value: 'sattva', text: "With compassion, understanding, and patience" },
            { value: 'rajas', text: "Passionately, sometimes intensely" },
            { value: 'tamas', text: "I tend to be more self-focused" }
        ]
    },
    {
        id: 4,
        text: "What motivates you most?",
        options: [
            { value: 'sattva', text: "Service to others and spiritual growth" },
            { value: 'rajas', text: "Achievement, success, and recognition" },
            { value: 'tamas', text: "Comfort, security, and stability" }
        ]
    },
    {
        id: 5,
        text: "How do you prefer to spend your free time?",
        options: [
            { value: 'sattva', text: "Meditation, reading, nature walks" },
            { value: 'rajas', text: "Active pursuits, sports, socializing" },
            { value: 'tamas', text: "Resting, watching TV, sleeping" }
        ]
    },
    {
        id: 6,
        text: "How do you handle change?",
        options: [
            { value: 'sattva', text: "I adapt with grace and acceptance" },
            { value: 'rajas', text: "I embrace change and see opportunities" },
            { value: 'tamas', text: "I resist change and prefer stability" }
        ]
    },
    {
        id: 7,
        text: "What best describes your thinking patterns?",
        options: [
            { value: 'sattva', text: "Clear, balanced, and wise" },
            { value: 'rajas', text: "Quick, active, sometimes scattered" },
            { value: 'tamas', text: "Slow, sometimes clouded or dull" }
        ]
    },
    {
        id: 8,
        text: "How do you approach physical exercise?",
        options: [
            { value: 'sattva', text: "Moderate, mindful movement" },
            { value: 'rajas', text: "Vigorous, challenging workouts" },
            { value: 'tamas', text: "Prefer gentle or minimal activity" }
        ]
    }
];

// Teaching Guidelines Implementation
const teachingGuidelines = {
    contraindications: {
        general: [
            "Listen to your body - if something doesn't feel right, stop immediately",
            "Avoid any pose that causes pain, dizziness, or shortness of breath", 
            "Pregnancy modifications are available - please inform the instructor",
            "If you have injuries or medical conditions, please let us know before class",
            "Never compete or compare yourself to others"
        ],
        language: "At any point you feel it is too much, don't do it. Your body is your wisest teacher."
    },
    
    motivationalLanguage: [
        "You are exactly where you need to be in this moment",
        "Every breath is a gift - receive it with gratitude", 
        "Your practice is perfect just as it is",
        "Trust the wisdom of your body",
        "You are stronger and more resilient than you know",
        "This is your sacred time - honor your journey",
        "Breathe into your infinite potential",
        "You are whole and complete as you are"
    ],
    
    classStructure: {
        opening: {
            script: `
                Welcome, beautiful souls, to this sacred space we create together.
                
                This is YOUR space. Do your best and leave the rest.
                
                Let's begin with quiet sitting, finding our center, our home within.
                
                Close your eyes gently and take three deep breaths with me...
                
                Remember: There is no competition here. Everyone's body is different, everyone's journey is unique.
                We don't mention names or compare - we simply honor each person's practice.
                
                Set an intention for your practice today - what do you want to cultivate or release?
            `
        },
        
        contraindications: {
            script: `
                Before we begin, let's honor the wisdom of safety:
                
                Please listen to your body throughout our practice.
                If you have any injuries or medical conditions, please let me know.
                If you're pregnant, I have wonderful modifications for you.
                At any point you feel it is too much - don't do it. Rest, breathe, be gentle.
                
                Remember: Yoga should feel good. Never force, never strain.
                Your body is your best teacher - trust it completely.
            `
        },
        
        classFlow: [
            {
                phase: "Quiet Sitting & Centering",
                duration: "5 minutes",
                description: "Establishing presence and connection",
                guidance: "Find your seat, your breath, your center. This is where we begin - in stillness."
            },
            {
                phase: "Jattis & Kriyas", 
                duration: "10-15 minutes",
                description: "Gentle warm-up and cleansing practices",
                guidance: "We warm the body gently, preparing for deeper practice."
            },
            {
                phase: "Core Practice",
                duration: "30-40 minutes", 
                description: "Main asana practice based on dosha needs",
                guidance: "This is our main exploration. Move at your own pace, rest when needed."
            },
            {
                phase: "Counter-balancing",
                duration: "10-15 minutes",
                description: "Balancing the body, neutralizing",
                guidance: "We balance what we've done, honoring the body's wisdom."
            },
            {
                phase: "Pranayama",
                duration: "5-10 minutes", 
                description: "Breathing practices suited to constitution",
                guidance: "The breath is our teacher, our healer, our guide home."
            },
            {
                phase: "Deep Relaxation",
                duration: "15-20 minutes",
                description: "Complete rest and integration", 
                guidance: "This is sacred time. Allow yourself to receive completely."
            },
            {
                phase: "Closing & Satsang",
                duration: "15-20 minutes",
                description: "Community sharing with tea",
                guidance: "We close in gratitude and community, sharing light refreshments."
            }
        ]
    }
};

// Integrated therapy recommendations based on dosha and guna
function generateIntegratedTherapy(dosha, dominantGuna) {
    const doshaTherapy = doshaInfo[dosha].therapy;
    const gunaGuidance = gunaInfo[dominantGuna];
    
    return {
        assessment: `Your dominant dosha is ${dosha.charAt(0).toUpperCase() + dosha.slice(1)} with ${dominantGuna.charAt(0).toUpperCase() + dominantGuna.slice(1)} guna predominance.`,
        
        practiceRecommendations: {
            asana: doshaTherapy.practices,
            pranayama: getGunaSpecificPranayama(dominantGuna),
            lifestyle: gunaGuidance.practices
        },
        
        classGuidance: generateClassScript(dosha, dominantGuna),
        
        dailyPractice: generateDailyPractice(dosha, dominantGuna)
    };
}

function getGunaSpecificPranayama(guna) {
    switch(guna) {
        case 'sattva':
            return ["Nadi Shodhana (alternate nostril)", "Ujjayi breathing", "Natural breath awareness"];
        case 'rajas': 
            return ["Bhastrika (bellows breath)", "Kapalabhati (skull shining)", "Surya Bhedana (right nostril)"];
        case 'tamas':
            return ["Gentle Ujjayi", "Simple counting breath", "Chandra Bhedana (left nostril)"];
        default:
            return ["Natural breath awareness"];
    }
}

function generateClassScript(dosha, guna) {
    return `
        Class Opening Script for ${dosha.charAt(0).toUpperCase() + dosha.slice(1)}-${guna.charAt(0).toUpperCase() + guna.slice(1)} Constitution:
        
        "${teachingGuidelines.classStructure.opening.script}"
        
        Contraindications: "${doshaInfo[dosha].therapy.contraindications}"
        
        Today's Focus: We'll work with practices that support your ${dosha} constitution while honoring your ${guna} nature.
        
        Remember: ${teachingGuidelines.motivationalLanguage[Math.floor(Math.random() * teachingGuidelines.motivationalLanguage.length)]}
    `;
}

function generateDailyPractice(dosha, guna) {
    const morning = getGunaSpecificMorning(guna);
    const evening = getGunaSpecificEvening(guna);
    
    return {
        morning: {
            duration: "15-20 minutes",
            practices: morning.concat(doshaInfo[dosha].therapy.practices.slice(0, 2))
        },
        evening: {
            duration: "10-15 minutes", 
            practices: evening.concat(["Gentle forward folds", "Supported relaxation"])
        }
    };
}

function getGunaSpecificMorning(guna) {
    switch(guna) {
        case 'sattva':
            return ["Gentle sun salutations", "Meditation", "Gratitude practice"];
        case 'rajas':
            return ["Dynamic sun salutations", "Energizing poses", "Goal setting"];
        case 'tamas':
            return ["Gentle movement", "Energizing breath", "Light activation"];
        default:
            return ["Gentle movement"];
    }
}

function getGunaSpecificEvening(guna) {
    switch(guna) {
        case 'sattva':
            return ["Peaceful meditation", "Gentle stretching", "Reflection"];
        case 'rajas':
            return ["Cooling practices", "Surrender poses", "Letting go"];
        case 'tamas':
            return ["Restorative poses", "Deep relaxation", "Early rest"];
        default:
            return ["Gentle relaxation"];
    }
}

