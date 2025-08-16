// Ayurvedic Integration for Holistic Yoga Therapy
// Based on the three-body system and panchakosha model

// Three Body System (Sharira)
const threeBodies = {
    sthula: {
        name: "Sthula Sharira",
        description: "Gross or Physical Body - The material body we can see and touch",
        components: ["Physical tissues", "Organs", "Body systems"],
        assessment: "Physical symptoms, body structure, constitution"
    },
    sukshma: {
        name: "Sukshma Sharira", 
        description: "Subtle or Astral Body - The energy and mental body",
        components: [
            "Jnanendriyas (5 sense organs)",
            "Karmendriyas (5 organs of action)", 
            "Pancha Prana Vayus (5 energy currents)",
            "Antahkarana (4 inner instruments: manas, buddhi, chitta, ahamkara)"
        ],
        assessment: "Energy levels, mental state, emotional patterns, sensory function"
    },
    karana: {
        name: "Karana Sharira",
        description: "Causal or Karmic Body - The seed body containing all experiences and karma",
        components: ["Past life impressions", "Deep-seated patterns", "Soul blueprint"],
        assessment: "Life patterns, recurring themes, deep-seated tendencies"
    }
};

// Panchakosha Model - Five Sheaths
const panchakosha = {
    annamaya: {
        name: "Annamaya Kosha",
        description: "Food Body - Physical sheath sustained by food",
        element: "Earth (Prithvi)",
        assessment_questions: [
            "How is your physical health and energy?",
            "Do you have any chronic physical conditions?",
            "How is your relationship with food and eating?",
            "Do you experience physical pain or discomfort?"
        ],
        practices: [
            "Asana practice for physical health",
            "Proper nutrition and mindful eating",
            "Adequate rest and sleep",
            "Physical exercise and movement"
        ]
    },
    pranamaya: {
        name: "Pranamaya Kosha", 
        description: "Energy Body - Vital energy sheath governing life force",
        element: "Air (Vayu)",
        assessment_questions: [
            "How are your energy levels throughout the day?",
            "Do you feel vital and alive or drained?",
            "How is your breathing - shallow, deep, irregular?",
            "Do you experience anxiety or restlessness?"
        ],
        practices: [
            "Pranayama (breathing practices)",
            "Energy work and bandhas",
            "Regulation of daily rhythms",
            "Stress management techniques"
        ]
    },
    manomaya: {
        name: "Manomaya Kosha",
        description: "Mental Body - Mind sheath of thoughts and emotions", 
        element: "Fire (Agni)",
        assessment_questions: [
            "How stable is your emotional state?",
            "Do you experience mental restlessness or clarity?",
            "How do you handle stress and challenges?",
            "Are you prone to worry, anger, or depression?"
        ],
        practices: [
            "Meditation and mindfulness",
            "Emotional regulation techniques",
            "Mantra and chanting",
            "Mental discipline practices"
        ]
    },
    vijnanamaya: {
        name: "Vijnanamaya Kosha",
        description: "Wisdom Body - Intellect and higher discernment sheath",
        element: "Water (Jala)",
        assessment_questions: [
            "Do you feel connected to your inner wisdom?",
            "How clear is your decision-making ability?",
            "Do you have a sense of life purpose?",
            "Can you discern between helpful and harmful choices?"
        ],
        practices: [
            "Self-inquiry and contemplation",
            "Study of sacred texts",
            "Dharmic living",
            "Cultivating discernment"
        ]
    },
    anandamaya: {
        name: "Anandamaya Kosha",
        description: "Bliss Body - Spiritual sheath of pure joy and connection",
        element: "Space (Akasha)",
        assessment_questions: [
            "Do you experience moments of deep peace or joy?",
            "Do you feel connected to something greater?",
            "How is your spiritual practice or connection?",
            "Do you feel a sense of unity and oneness?"
        ],
        practices: [
            "Deep meditation and samadhi",
            "Devotional practices",
            "Surrender and letting go",
            "Connection with the Divine"
        ]
    }
};

// Pancha Mahabhuta Assessment
const panchamahabhuta = {
    akasha: {
        name: "Akasha (Space/Ether)",
        quality: "Sound (Shabda)",
        organ: "Ears",
        body_parts: ["All hollow spaces", "Channels", "Vocal system", "Ear system"],
        assessment: "Communication, hearing, sense of space and expansion"
    },
    vayu: {
        name: "Vayu (Air/Wind)", 
        quality: "Touch (Sparsha)",
        organ: "Skin",
        body_parts: ["Breathing", "Movement", "Circulation", "Nervous system"],
        assessment: "Movement, breathing, circulation, nervous system function"
    },
    agni: {
        name: "Agni (Fire/Heat)",
        quality: "Form/Sight (Rupa)",
        organ: "Eyes",
        body_parts: ["Digestive fire", "Body heat", "Vision", "Metabolism"],
        assessment: "Digestion, metabolism, vision, body temperature"
    },
    jala: {
        name: "Jala (Water)",
        quality: "Taste (Rasa)", 
        organ: "Tongue",
        body_parts: ["All body fluids", "Blood", "Lymph", "Saliva"],
        assessment: "Hydration, circulation, taste, emotional flow"
    },
    prithvi: {
        name: "Prithvi (Earth)",
        quality: "Smell (Gandha)",
        organ: "Nose",
        body_parts: ["Bones", "Muscles", "Skin", "Hair", "Nails"],
        assessment: "Physical structure, stability, strength, groundedness"
    }
};

// Digestive Fire (Agni) Assessment
const agniTypes = {
    sama: {
        name: "Sama Agni - Balanced Digestive Fire",
        characteristics: [
            "Healthy digestion, absorption, and elimination",
            "Food is easily digested without weight gain/loss",
            "Full of energy and vitality",
            "Clear, sharp, attentive senses",
            "Easy elimination - not too dry or watery",
            "Pink, soft, smooth tongue with little coating",
            "No gas or flatulence issues"
        ],
        recommendations: [
            "Maintain current balanced lifestyle",
            "Continue regular eating patterns",
            "Moderate yoga practice",
            "Balanced pranayama"
        ]
    },
    vishama: {
        name: "Vishama Agni - Irregular Digestive Fire (Vata excess)",
        characteristics: [
            "Fluctuates between no hunger and excessive hunger",
            "Irregular eating patterns",
            "Cravings for spicy, sweet, salty foods", 
            "Gas, bloating, constipation",
            "Under or overweight",
            "Small, dry, hard stool",
            "Brownish-black tongue coating",
            "Low energy, gets tired easily",
            "Anxious, fearful, insecure"
        ],
        recommendations: [
            "Regular meal times",
            "Warm, cooked, easily digestible foods",
            "Grounding yoga practices",
            "Calming pranayama like Nadi Shodhana",
            "Routine and stability"
        ]
    },
    tikshna: {
        name: "Tikshna Agni - Sharp Digestive Fire (Pitta excess)",
        characteristics: [
            "Sharp, fierce, intense hunger",
            "Anger/irritation when hungry",
            "Hypoglycemic tendencies",
            "Acid reflux, heartburn, hot flashes",
            "Soft, loose stool, tendency to diarrhea", 
            "Rusty/orange colored stool",
            "Yellow tongue coating with red patches",
            "Gets tired, feels hungry often",
            "Critical, judgmental, angry attitude"
        ],
        recommendations: [
            "Cooling foods and drinks",
            "Regular meal times without skipping",
            "Cooling yoga practices",
            "Cooling pranayama like Sheetali, Sheetkari",
            "Stress reduction techniques"
        ]
    },
    manda: {
        name: "Manda Agni - Slow Digestive Fire (Kapha excess)",
        characteristics: [
            "Slow, weak, dull, sluggish digestion",
            "Low hunger, easily feels full",
            "Skips meals or comfort eating",
            "Easily gains weight",
            "Mucous, cough, congestion",
            "Water retention, nausea, allergies",
            "Soft, dense, heavy, dark stool",
            "White tongue coating, excess saliva",
            "Heavy feeling after eating",
            "Depression, attachment, lethargy"
        ],
        recommendations: [
            "Light, warm, spiced foods",
            "Smaller, frequent meals",
            "Energizing yoga practices",
            "Stimulating pranayama like Bhastrika",
            "Regular exercise and movement"
        ]
    }
};

// Four Pillars of Health Assessment
const fourPillars = {
    ahar: {
        name: "Ahar (Diet/Food)",
        description: "Annam Brahma - Food is Divine. We are what we eat and become what we think.",
        assessment_areas: [
            "What do you eat? (Food quality and type)",
            "When do you eat? (Meal timing and regularity)",
            "How do you eat? (Mindful vs rushed eating)",
            "How much do you eat? (Quantity and portions)"
        ],
        food_types: {
            sattvic: {
                description: "Pure, fresh, seasonal, locally grown foods",
                examples: ["Fresh fruits and vegetables", "Whole grains", "Nuts and seeds", "Pure water", "Herbal teas"],
                effects: "Promotes clarity, peace, and spiritual growth"
            },
            rajasic: {
                description: "Stimulating, heating, aggressive foods",
                examples: ["Spicy foods", "Caffeine", "Alcohol", "Processed foods", "Excessive salt/sugar"],
                effects: "Increases activity, passion, sometimes agitation"
            },
            tamasic: {
                description: "Heavy, dull, old, processed foods",
                examples: ["Meat", "Old/stale food", "Overly processed foods", "Excessive oils", "Artificial substances"],
                effects: "Creates lethargy, dullness, resistance to change"
            }
        }
    },
    vihar: {
        name: "Vihar (Recreation/Activities)",
        description: "Activities for relaxation and joy. Do they reduce stress or add to it?",
        healthy_examples: [
            "Yoga and meditation",
            "Nature walks and swimming", 
            "Music and creative arts",
            "Quality time with loved ones",
            "Reading spiritual texts",
            "Peaceful hobbies"
        ],
        niyamas: [
            "Saucha (Cleanliness) - Internal and external purity",
            "Santosha (Contentment) - Practicing gratitude and joy",
            "Tapas (Discipline) - Dedicated practice and self-discipline",
            "Svadhyaya (Self-study) - Study of self and sacred texts",
            "Ishvara Pranidhana (Surrender) - Devotion and faith"
        ]
    },
    achar: {
        name: "Achar (Conduct/Routine)",
        description: "Regularity, Repetition, and Rhythm. Our conduct with ourselves and others.",
        key_aspects: [
            "Daily routines and consistency",
            "Ethical behavior and integrity",
            "Duties and responsibilities",
            "Relationship with time and commitments"
        ],
        yamas: [
            "Ahimsa (Non-violence) - Kindness in thought, word, and action",
            "Satya (Truth) - Honesty and authenticity",
            "Asteya (Non-stealing) - Integrity and respect for others",
            "Brahmacharya (Moderation) - Wise use of energy",
            "Aparigraha (Non-attachment) - Freedom from excessive desires"
        ]
    },
    vichar: {
        name: "Vichar (Thoughts/Mental Attitude)",
        description: "Our thoughts create who we are. Are our thoughts creative or destructive?",
        assessment_questions: [
            "Are your thoughts generally positive or negative?",
            "Do you tend to worry or remain calm?",
            "How do you handle challenges and setbacks?",
            "Do you practice gratitude and appreciation?",
            "Are you judgmental or accepting of others?"
        ],
        practices: [
            "Daily meditation and mindfulness",
            "Positive affirmations and mantras",
            "Gratitude practices",
            "Self-inquiry and reflection",
            "Cultivating compassion and love"
        ]
    }
};

// Agni Assessment Questions
const agniAssessment = [
    {
        id: 1,
        text: "How would you describe your hunger patterns?",
        options: [
            { value: 'sama', text: "Regular, moderate hunger at meal times" },
            { value: 'vishama', text: "Irregular - sometimes very hungry, sometimes no appetite" },
            { value: 'tikshna', text: "Sharp, intense hunger - get angry if meals are delayed" },
            { value: 'manda', text: "Low appetite, rarely feel hungry, easily feel full" }
        ]
    },
    {
        id: 2,
        text: "How do you feel after eating?",
        options: [
            { value: 'sama', text: "Satisfied, energized, comfortable" },
            { value: 'vishama', text: "Sometimes bloated, gassy, or still hungry" },
            { value: 'tikshna', text: "Sometimes heartburn, acid reflux, or overheated" },
            { value: 'manda', text: "Heavy, sluggish, sometimes nauseous" }
        ]
    },
    {
        id: 3,
        text: "What best describes your elimination patterns?",
        options: [
            { value: 'sama', text: "Regular, well-formed, easy elimination" },
            { value: 'vishama', text: "Irregular, sometimes constipated, dry or hard stool" },
            { value: 'tikshna', text: "Loose, frequent, sometimes burning sensation" },
            { value: 'manda', text: "Heavy, sluggish, sometimes mucousy" }
        ]
    },
    {
        id: 4,
        text: "How is your energy after meals?",
        options: [
            { value: 'sama', text: "Steady energy, feel nourished" },
            { value: 'vishama', text: "Energy fluctuates, sometimes tired after eating" },
            { value: 'tikshna', text: "Initially energetic, then may crash or feel overheated" },
            { value: 'manda', text: "Feel heavy, lethargic, want to sleep" }
        ]
    },
    {
        id: 5,
        text: "What does your tongue look like in the morning?",
        options: [
            { value: 'sama', text: "Pink, clean, minimal coating" },
            { value: 'vishama', text: "Dry, brownish coating, possibly cracked" },
            { value: 'tikshna', text: "Red, yellow coating, possibly burning sensation" },
            { value: 'manda', text: "Thick white coating, excess saliva" }
        ]
    }
];

// Four Pillars Assessment Questions
const fourPillarsAssessment = {
    ahar: [
        {
            id: 1,
            text: "How would you describe your typical diet?",
            options: [
                { value: 'sattvic', text: "Fresh, seasonal, home-cooked, mostly vegetarian" },
                { value: 'rajasic', text: "Spicy, stimulating, some processed foods, caffeine" },
                { value: 'tamasic', text: "Heavy, processed, convenience foods, irregular eating" }
            ]
        },
        {
            id: 2,
            text: "How do you typically eat your meals?",
            options: [
                { value: 'mindful', text: "Slowly, mindfully, in peaceful environment" },
                { value: 'rushed', text: "Quickly, while multitasking or stressed" },
                { value: 'irregular', text: "At irregular times, sometimes skipping meals" }
            ]
        }
    ],
    vihar: [
        {
            id: 1,
            text: "How do you typically spend your free time?",
            options: [
                { value: 'balanced', text: "Peaceful activities, nature, creative pursuits" },
                { value: 'active', text: "Social activities, sports, dynamic pursuits" },
                { value: 'passive', text: "TV, sleeping, minimal activity" }
            ]
        }
    ],
    achar: [
        {
            id: 1,
            text: "How consistent are your daily routines?",
            options: [
                { value: 'regular', text: "Very consistent daily routines and habits" },
                { value: 'somewhat', text: "Fairly regular but some variation" },
                { value: 'irregular', text: "Irregular routines, often chaotic schedule" }
            ]
        }
    ],
    vichar: [
        {
            id: 1,
            text: "How would you describe your general mental attitude?",
            options: [
                { value: 'positive', text: "Generally optimistic, grateful, peaceful" },
                { value: 'mixed', text: "Sometimes positive, sometimes negative" },
                { value: 'negative', text: "Often worried, critical, or pessimistic" }
            ]
        }
    ]
};

// Comprehensive therapy recommendations based on all assessments
function generateHolisticRecommendations(dosha, guna, agni, pillars, kosha) {
    return {
        physical_practices: getPhysicalPractices(dosha, agni),
        energy_practices: getEnergyPractices(dosha, guna, kosha.pranamaya),
        mental_practices: getMentalPractices(guna, kosha.manomaya),
        wisdom_practices: getWisdomPractices(kosha.vijnanamaya),
        spiritual_practices: getSpiritualPractices(kosha.anandamaya),
        lifestyle_recommendations: getLifestyleRecommendations(dosha, pillars),
        daily_routine: getDailyRoutine(dosha, agni, pillars),
        dietary_guidelines: getDietaryGuidelines(dosha, agni, pillars.ahar)
    };
}

function getPhysicalPractices(dosha, agni) {
    const practices = doshaInfo[dosha].therapy.practices;
    const agniPractices = agniTypes[agni].recommendations;
    
    return {
        asana: practices,
        agni_support: agniPractices,
        contraindications: doshaInfo[dosha].therapy.contraindications
    };
}

function getEnergyPractices(dosha, guna, pranamaya_assessment) {
    const pranayama = getGunaSpecificPranayama(guna);
    const dosha_pranayama = getDoshaPranayama(dosha);
    
    return {
        primary_pranayama: pranayama,
        dosha_specific: dosha_pranayama,
        energy_regulation: panchakosha.pranamaya.practices
    };
}

function getDoshaPranayama(dosha) {
    switch(dosha) {
        case 'vata':
            return ["Anulom Viloma", "Ujjayi", "Square breathing"];
        case 'pitta':
            return ["Sheetali", "Sheetkari", "Chandra Bhedana"];
        case 'kapha':
            return ["Bhastrika", "Kapalabhati", "Surya Bhedana"];
        default:
            return ["Natural breath awareness"];
    }
}

// Export for use in main application
window.ayurvedaIntegration = {
    threeBodies,
    panchakosha,
    panchamahabhuta,
    agniTypes,
    fourPillars,
    agniAssessment,
    fourPillarsAssessment,
    generateHolisticRecommendations
};

