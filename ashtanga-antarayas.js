// Patanjali's Ashtanga (Eight Limbs) and Nine Obstacles (Antarayas)
// Complete framework for spiritual development and obstacle resolution

// Eight Limbs of Yoga (Ashtanga) Information
const ashtangaLimbs = {
    yamas: {
        name: "Yamas - Ethical Restraints",
        description: "Universal practices dealing with one's ethical standards and sense of integrity, focusing on our behavior and how we conduct ourselves in life.",
        limbs: {
            ahimsa: {
                name: "Ahimsa - Non-violence",
                description: "Kindness and compassion in thought, word, and action towards all beings",
                practice_areas: ["Physical non-violence", "Mental non-violence", "Environmental consciousness", "Compassionate communication"],
                daily_applications: ["Speak kindly to yourself", "Choose compassionate responses", "Practice forgiveness", "Consider impact of choices"],
                assessment_questions: [
                    "How do you respond when angry or frustrated?",
                    "Do you practice self-compassion?",
                    "How do you treat animals and environment?"
                ]
            },
            satya: {
                name: "Satya - Truthfulness", 
                description: "Living and speaking truth while considering the impact of our words",
                practice_areas: ["Honest communication", "Authentic living", "Self-honesty", "Truthful expression"],
                daily_applications: ["Speak your truth kindly", "Live authentically", "Practice self-reflection", "Honor commitments"],
                assessment_questions: [
                    "Do you feel comfortable expressing your authentic self?",
                    "How often do you say things you don't mean?",
                    "Do you honor your commitments to yourself and others?"
                ]
            },
            asteya: {
                name: "Asteya - Non-stealing",
                description: "Not taking what is not ours, including time, energy, credit, and resources",
                practice_areas: ["Respecting others' time", "Not taking credit", "Being punctual", "Gratitude practice"],
                daily_applications: ["Arrive on time", "Give proper credit", "Use resources mindfully", "Practice gratitude"],
                assessment_questions: [
                    "Do you respect others' time and energy?",
                    "How do you handle envy or wanting what others have?",
                    "Do you take credit for others' work or ideas?"
                ]
            },
            brahmacharya: {
                name: "Brahmacharya - Energy Management",
                description: "Wise use of energy, moderation in all things, moving toward the Divine",
                practice_areas: ["Sexual energy management", "Moderation in pleasures", "Energy conservation", "Spiritual focus"],
                daily_applications: ["Practice moderation", "Direct energy wisely", "Avoid excess", "Cultivate spiritual practices"],
                assessment_questions: [
                    "Do you feel in control of your desires and impulses?",
                    "How do you manage your energy throughout the day?",
                    "Do you practice moderation in pleasures?"
                ]
            },
            aparigraha: {
                name: "Aparigraha - Non-possessiveness",
                description: "Freedom from excessive desires, greed, and attachment to material possessions",
                practice_areas: ["Letting go of excess", "Contentment with what you have", "Generosity", "Non-attachment"],
                daily_applications: ["Practice contentment", "Give generously", "Avoid hoarding", "Let go gracefully"],
                assessment_questions: [
                    "How attached are you to your possessions?",
                    "Do you feel envious of what others have?",
                    "Can you give generously without expecting return?"
                ]
            }
        }
    },

    niyamas: {
        name: "Niyamas - Spiritual Observances", 
        description: "Self-discipline and spiritual observances that support inner growth and connection",
        limbs: {
            saucha: {
                name: "Saucha - Cleanliness",
                description: "Purity of body, mind, and environment to support spiritual practice",
                practice_areas: ["Physical cleanliness", "Mental purity", "Environmental cleanliness", "Energetic clearing"],
                daily_applications: ["Maintain personal hygiene", "Keep living space clean", "Practice mental clarity", "Clear negative thoughts"],
                assessment_questions: [
                    "How do you maintain physical and mental cleanliness?",
                    "Does your environment support your well-being?",
                    "Do you regularly clear negative thoughts and emotions?"
                ]
            },
            santosha: {
                name: "Santosha - Contentment",
                description: "Finding joy and satisfaction in the present moment, regardless of circumstances",
                practice_areas: ["Gratitude practice", "Present moment awareness", "Acceptance", "Inner joy cultivation"],
                daily_applications: ["Practice daily gratitude", "Find joy in simple things", "Accept what is", "Celebrate small victories"],
                assessment_questions: [
                    "Do you feel generally content with your life?",
                    "How often do you practice gratitude?",
                    "Can you find joy in challenging circumstances?"
                ]
            },
            tapas: {
                name: "Tapas - Disciplined Practice",
                description: "Burning desire and dedication to spiritual practice, self-discipline",
                practice_areas: ["Consistent practice", "Self-discipline", "Commitment", "Spiritual dedication"],
                daily_applications: ["Maintain regular practice", "Keep commitments", "Push through resistance", "Stay dedicated"],
                assessment_questions: [
                    "How consistent are you with your spiritual practices?",
                    "Do you maintain commitments even when difficult?",
                    "How do you handle resistance to practice?"
                ]
            },
            svadhyaya: {
                name: "Svadhyaya - Self-study",
                description: "Study of sacred texts and self-inquiry to understand one's true nature",
                practice_areas: ["Sacred text study", "Self-reflection", "Learning", "Inner inquiry"],
                daily_applications: ["Read spiritual texts", "Practice self-reflection", "Learn continuously", "Question beliefs"],
                assessment_questions: [
                    "Do you regularly study spiritual or philosophical texts?",
                    "How often do you engage in self-reflection?",
                    "Are you curious about your deeper nature?"
                ]
            },
            ishvara_pranidhana: {
                name: "Ishvara Pranidhana - Surrender to the Divine",
                description: "Devotion and surrender to something greater than the individual self",
                practice_areas: ["Devotional practice", "Surrender", "Faith", "Service"],
                daily_applications: ["Practice devotion", "Surrender outcomes", "Serve others", "Trust life's process"],
                assessment_questions: [
                    "Do you feel connected to something greater than yourself?",
                    "How easily can you surrender control?",
                    "Do you practice any form of devotion or service?"
                ]
            }
        }
    },

    asana: {
        name: "Asana - Physical Postures",
        description: "Physical practices that prepare the body for meditation and develop discipline",
        assessment_areas: ["Physical practice consistency", "Body awareness", "Comfort in stillness", "Discipline development"]
    },

    pranayama: {
        name: "Pranayama - Breath Control",
        description: "Practices to gain mastery over the respiratory process and life force energy",
        assessment_areas: ["Breath awareness", "Energy regulation", "Emotional stability", "Life force cultivation"]
    },

    pratyahara: {
        name: "Pratyahara - Withdrawal of Senses",
        description: "Drawing awareness away from external stimuli toward inner observation",
        assessment_areas: ["Sensory awareness", "Inner focus", "Detachment from external", "Self-observation"]
    },

    dharana: {
        name: "Dharana - Concentration",
        description: "Focused attention on a single point to develop mental discipline",
        assessment_areas: ["Concentration ability", "Mental focus", "Single-pointed attention", "Mind training"]
    },

    dhyana: {
        name: "Dhyana - Meditation",
        description: "Uninterrupted flow of awareness, sustained attention without effort",
        assessment_areas: ["Meditation practice", "Sustained awareness", "Mental stillness", "Effortless attention"]
    },

    samadhi: {
        name: "Samadhi - Union/Absorption",
        description: "State of unity consciousness, transcendence of individual self",
        assessment_areas: ["Transcendent experiences", "Unity consciousness", "Spiritual realization", "Self-transcendence"]
    }
};

// Nine Obstacles (Antarayas) Information
const nineObstacles = {
    vyadhi: {
        name: "Vyadhi - Illness/Disease",
        description: "Physical illness or mental negativity that creates dis-ease in body and mind",
        manifestations: [
            "Physical pain or chronic conditions",
            "Mental negativity and pessimism", 
            "Emotional imbalances",
            "Lack of self-care practices",
            "Energy depletion"
        ],
        therapeutic_approaches: [
            "Proper medical care and treatment",
            "Mental health support",
            "Consistent self-care practices",
            "Stress reduction techniques",
            "Positive mindset cultivation"
        ],
        yoga_practices: [
            "Gentle, therapeutic asana",
            "Healing pranayama",
            "Restorative practices",
            "Meditation for healing",
            "Yoga Nidra for recovery"
        ]
    },

    styana: {
        name: "Styana - Mental Stagnation",
        description: "Apathy, mental dullness, 'so what, who cares' attitude that prevents growth",
        manifestations: [
            "Lack of motivation",
            "Mental fog and confusion",
            "Apathetic attitude",
            "Resistance to change",
            "Procrastination"
        ],
        therapeutic_approaches: [
            "Take action despite feelings",
            "Start with small steps",
            "Create momentum through movement",
            "Find meaning and purpose",
            "Seek inspiration and community"
        ],
        yoga_practices: [
            "Energizing asana sequences",
            "Stimulating pranayama",
            "Sun salutations",
            "Backbends for energy",
            "Mantra for motivation"
        ]
    },

    samshaya: {
        name: "Samshaya - Self-doubt",
        description: "Lack of confidence in one's own power and potential, questioning self-worth",
        manifestations: [
            "Chronic self-doubt",
            "Imposter syndrome",
            "Fear of failure",
            "Comparing to others",
            "Lack of self-trust"
        ],
        therapeutic_approaches: [
            "Affirmation and self-validation",
            "Celebrate small victories",
            "Develop self-awareness",
            "Seek supportive community",
            "Practice self-compassion"
        ],
        yoga_practices: [
            "Strength-building poses",
            "Heart-opening practices",
            "Confidence-building sequences",
            "Warrior poses",
            "Positive affirmation with movement"
        ]
    },

    pramada: {
        name: "Pramada - Carelessness",
        description: "Negligence, lack of mindfulness that takes us off track from our goals",
        manifestations: [
            "Distracted behavior",
            "Careless mistakes",
            "Lack of foresight",
            "Mindless actions",
            "Poor planning"
        ],
        therapeutic_approaches: [
            "Develop mindfulness practices",
            "Create clear intentions",
            "Plan and prepare",
            "Practice present moment awareness",
            "Reduce distractions"
        ],
        yoga_practices: [
            "Mindful movement",
            "Balance poses for focus",
            "Meditation practices",
            "Slow, conscious breathing",
            "Present moment awareness"
        ]
    },

    alasya: {
        name: "Alasya - Fatigue/Laziness",
        description: "Physical and mental exhaustion, burnout from lack of self-care",
        manifestations: [
            "Chronic fatigue",
            "Burnout symptoms",
            "Difficulty getting started",
            "Energy depletion",
            "Overwhelming lethargy"
        ],
        therapeutic_approaches: [
            "Prioritize rest and recovery",
            "Practice self-care rituals",
            "Address burnout causes",
            "Create sustainable routines",
            "Seek support when needed"
        ],
        yoga_practices: [
            "Restorative yoga",
            "Gentle energizing practices",
            "Yoga Nidra for restoration",
            "Breathing for energy",
            "Self-massage and nurturing"
        ]
    },

    avirati: {
        name: "Avirati - Non-abstinence",
        description: "Overindulgence driven by cravings, inability to practice moderation",
        manifestations: [
            "Addictive behaviors",
            "Overindulgence in food, media, etc.",
            "Driven by cravings",
            "Lack of self-control",
            "Using substances to avoid feelings"
        ],
        therapeutic_approaches: [
            "Practice moderation",
            "Develop healthy coping strategies",
            "Address underlying causes",
            "Seek professional help if needed",
            "Cultivate awareness of triggers"
        ],
        yoga_practices: [
            "Practices for self-control",
            "Pranayama for craving management",
            "Meditation for awareness",
            "Grounding practices",
            "Hip openers for emotional release"
        ]
    },

    bhrantidarshana: {
        name: "Bhrantidarshana - False Perception",
        description: "Erroneous views and stories we tell ourselves that lead us off course",
        manifestations: [
            "Limiting beliefs about self",
            "Distorted perceptions of reality",
            "False stories and narratives",
            "Misinterpretation of events",
            "Outdated mental maps"
        ],
        therapeutic_approaches: [
            "Question beliefs and assumptions",
            "Seek different perspectives",
            "Practice discernment",
            "Update mental models",
            "Cultivate beginner's mind"
        ],
        yoga_practices: [
            "Self-inquiry practices",
            "Twisting poses for new perspectives",
            "Meditation for clarity",
            "Pranayama for mental clearing",
            "Contemplative practices"
        ]
    },

    alabdhabhumikatva: {
        name: "Alabdhabhumikatva - Lack of Perseverance",
        description: "Inability to maintain effort when progress seems slow or difficult",
        manifestations: [
            "Giving up too easily",
            "Lack of persistence",
            "Impatience with progress",
            "Changing directions frequently",
            "Loss of resolve under pressure"
        ],
        therapeutic_approaches: [
            "Set realistic expectations",
            "Celebrate small progress",
            "Develop patience",
            "Create support systems",
            "Remember your why"
        ],
        yoga_practices: [
            "Challenging holds in poses",
            "Endurance-building sequences",
            "Meditation for patience",
            "Steady breathing practices",
            "Practices that build inner strength"
        ]
    },

    anavasthitatva: {
        name: "Anavasthitatva - Instability",
        description: "Inability to maintain gains, regression and backward movement",
        manifestations: [
            "Inconsistent practice",
            "Losing progress made",
            "Emotional instability",
            "Lack of grounding",
            "Wavering commitment"
        ],
        therapeutic_approaches: [
            "Create stable routines",
            "Develop grounding practices",
            "Build consistency gradually",
            "Practice stability in daily life",
            "Seek community support"
        ],
        yoga_practices: [
            "Grounding poses",
            "Balance practices",
            "Consistent daily practice",
            "Root chakra work",
            "Stability-building sequences"
        ]
    }
};

// Assessment Questions for Eight Limbs
const ashtangaAssessment = [
    // Yamas Assessment
    {
        id: 1,
        limb: 'yamas',
        sublimb: 'ahimsa',
        text: "How do you typically respond when you feel angry or frustrated?",
        options: [
            { value: 'strong', text: "I respond with kindness and seek understanding" },
            { value: 'developing', text: "I sometimes react harshly but try to be compassionate" },
            { value: 'needs_work', text: "I often react with anger or harsh words" }
        ]
    },
    {
        id: 2,
        limb: 'yamas',
        sublimb: 'satya',
        text: "How comfortable are you expressing your authentic truth?",
        options: [
            { value: 'strong', text: "I feel comfortable being authentic and honest" },
            { value: 'developing', text: "I'm sometimes authentic but often hold back" },
            { value: 'needs_work', text: "I rarely express my authentic self" }
        ]
    },
    {
        id: 3,
        limb: 'niyamas',
        sublimb: 'santosha',
        text: "How content do you feel with your current life circumstances?",
        options: [
            { value: 'strong', text: "I feel generally content and grateful" },
            { value: 'developing', text: "I have moments of contentment but often want more" },
            { value: 'needs_work', text: "I rarely feel satisfied or content" }
        ]
    },
    {
        id: 4,
        limb: 'niyamas',
        sublimb: 'tapas',
        text: "How consistent are you with your spiritual or personal development practices?",
        options: [
            { value: 'strong', text: "Very consistent - I rarely miss my practices" },
            { value: 'developing', text: "Somewhat consistent but sometimes skip" },
            { value: 'needs_work', text: "Inconsistent or don't have regular practices" }
        ]
    },
    {
        id: 5,
        limb: 'pratyahara',
        sublimb: 'sensory_withdrawal',
        text: "How easily can you withdraw your attention from external distractions?",
        options: [
            { value: 'strong', text: "I can easily focus inward despite external stimuli" },
            { value: 'developing', text: "I can focus inward sometimes but get distracted" },
            { value: 'needs_work', text: "I'm very easily distracted by external things" }
        ]
    },
    {
        id: 6,
        limb: 'dharana',
        sublimb: 'concentration',
        text: "How well can you maintain focus on a single point of attention?",
        options: [
            { value: 'strong', text: "I can maintain focus for extended periods" },
            { value: 'developing', text: "I can focus for short periods but mind wanders" },
            { value: 'needs_work', text: "My mind is constantly scattered and unfocused" }
        ]
    }
];

// Assessment Questions for Nine Obstacles
const obstaclesAssessment = [
    {
        id: 1,
        obstacle: 'vyadhi',
        text: "How often do physical illness or mental negativity interfere with your practice?",
        options: [
            { value: 'low', text: "Rarely - I maintain good physical and mental health" },
            { value: 'medium', text: "Sometimes - occasional illness or negative thinking" },
            { value: 'high', text: "Often - chronic health issues or persistent negativity" }
        ]
    },
    {
        id: 2,
        obstacle: 'styana',
        text: "How often do you experience mental dullness or apathy?",
        options: [
            { value: 'low', text: "Rarely - I generally feel motivated and clear" },
            { value: 'medium', text: "Sometimes - occasional lack of motivation" },
            { value: 'high', text: "Often - frequently feel apathetic or mentally foggy" }
        ]
    },
    {
        id: 3,
        obstacle: 'samshaya',
        text: "How often do you doubt your abilities or worthiness?",
        options: [
            { value: 'low', text: "Rarely - I generally trust my capabilities" },
            { value: 'medium', text: "Sometimes - occasional self-doubt" },
            { value: 'high', text: "Often - frequently question my worth and abilities" }
        ]
    },
    {
        id: 4,
        obstacle: 'pramada',
        text: "How often do carelessness or lack of mindfulness create problems?",
        options: [
            { value: 'low', text: "Rarely - I'm generally mindful and careful" },
            { value: 'medium', text: "Sometimes - occasional careless mistakes" },
            { value: 'high', text: "Often - frequently distracted or careless" }
        ]
    },
    {
        id: 5,
        obstacle: 'alasya',
        text: "How often do fatigue or laziness prevent you from taking action?",
        options: [
            { value: 'low', text: "Rarely - I generally have good energy" },
            { value: 'medium', text: "Sometimes - occasional fatigue or procrastination" },
            { value: 'high', text: "Often - frequently too tired or unmotivated to act" }
        ]
    }
];

// Therapeutic Integration Functions
const ashtangaTherapeutics = {
    assessLimbs: function(answers) {
        const limbScores = {};
        
        answers.forEach(answer => {
            const question = ashtangaAssessment.find(q => q.id === answer.questionId);
            if (question) {
                if (!limbScores[question.limb]) {
                    limbScores[question.limb] = { strong: 0, developing: 0, needs_work: 0 };
                }
                limbScores[question.limb][answer.value]++;
            }
        });
        
        return limbScores;
    },

    assessObstacles: function(answers) {
        const obstacleScores = {};
        
        answers.forEach(answer => {
            const question = obstaclesAssessment.find(q => q.id === answer.questionId);
            if (question) {
                obstacleScores[question.obstacle] = answer.value;
            }
        });
        
        return obstacleScores;
    },

    generateIntegratedRecommendations: function(limbScores, obstacleScores, dosha, guna) {
        return {
            focus_areas: this.identifyFocusAreas(limbScores),
            obstacles_to_address: this.identifyKeyObstacles(obstacleScores),
            daily_practices: this.createDailyPractices(limbScores, obstacleScores, dosha),
            constitutional_integration: this.integrateWithConstitution(dosha, guna),
            progressive_development: this.createProgressivePlan(limbScores, obstacleScores)
        };
    },

    identifyFocusAreas: function(limbScores) {
        const needsWork = [];
        Object.keys(limbScores).forEach(limb => {
            if (limbScores[limb].needs_work > limbScores[limb].strong) {
                needsWork.push(limb);
            }
        });
        return needsWork;
    },

    identifyKeyObstacles: function(obstacleScores) {
        const highObstacles = [];
        Object.keys(obstacleScores).forEach(obstacle => {
            if (obstacleScores[obstacle] === 'high') {
                highObstacles.push(obstacle);
            }
        });
        return highObstacles;
    }
};

// Export for integration
window.ashtangaAntarayas = {
    ashtangaLimbs,
    nineObstacles,
    ashtangaAssessment,
    obstaclesAssessment,
    ashtangaTherapeutics
};

