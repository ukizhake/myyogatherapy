// Patanjali's Five Kleshas - Spiritual Psychology Assessment
// Based on Yoga Sutras for understanding root causes of suffering

// Five Kleshas Information and Therapeutic Applications
const kleshasInfo = {
    avidya: {
        name: "Avidya - Ignorance",
        description: "The most potent klesha. When we are ignorant of our true nature, we experience pain and suffering. This is the root of all other kleshas.",
        manifestations: [
            "Lack of self-awareness and spiritual understanding",
            "Identification with the ego-mind rather than true Self",
            "Belief in separation from the Divine/Universal consciousness",
            "Ignorance of the impermanent nature of reality",
            "Mistaking the temporary for the eternal",
            "Lack of understanding of karma and dharma"
        ],
        symptoms: [
            "Feeling lost or without purpose",
            "Spiritual disconnection",
            "Confusion about life's meaning",
            "Materialistic worldview",
            "Lack of inner wisdom",
            "Reactive patterns without understanding"
        ],
        therapeutic_practices: [
            "Self-inquiry (Svadhyaya) and study of sacred texts",
            "Meditation and contemplative practices",
            "Mindfulness and awareness cultivation",
            "Guru/teacher relationship for guidance",
            "Regular spiritual study and reflection",
            "Pranayama for mental clarity"
        ],
        yoga_practices: [
            "Meditation and Dhyana practices",
            "Study and chanting of sacred texts",
            "Self-inquiry during asana practice",
            "Witness consciousness cultivation",
            "Contemplative movement",
            "Silent retreats and inner reflection"
        ]
    },

    asmita: {
        name: "Asmita - Egoism",
        description: "The false identification with the ego-self. Mistaking the temporary personality for our true eternal nature.",
        manifestations: [
            "Strong ego identification and self-importance",
            "Pride and arrogance",
            "Need for recognition and validation",
            "Competitive and comparative thinking",
            "Attachment to personal achievements",
            "Inability to surrender or let go"
        ],
        symptoms: [
            "Constant need for attention or praise",
            "Difficulty accepting criticism",
            "Comparing oneself to others",
            "Pride in accomplishments or status",
            "Difficulty with humility",
            "Resistance to guidance or correction"
        ],
        therapeutic_practices: [
            "Humility and surrender practices",
            "Selfless service (Seva) without recognition",
            "Ishvara Pranidhana (surrender to the Divine)",
            "Gratitude practices",
            "Anonymous acts of kindness",
            "Ego dissolution practices"
        ],
        yoga_practices: [
            "Surrendering poses (child's pose, forward folds)",
            "Heart-opening practices to soften pride",
            "Group practices without individual recognition",
            "Karma yoga (selfless action)",
            "Prostration practices",
            "Chanting and devotional practices"
        ]
    },

    raga: {
        name: "Raga - Attachments",
        description: "Excessive attachment to pleasures, people, outcomes, or experiences that we want to continue or repeat.",
        manifestations: [
            "Clinging to pleasant experiences",
            "Addiction to sensory pleasures",
            "Attachment to people, objects, or outcomes",
            "Inability to let go or move on",
            "Craving for more of what brings pleasure",
            "Fear of losing what we have"
        ],
        symptoms: [
            "Difficulty letting go of relationships or situations",
            "Addiction to substances, behaviors, or experiences",
            "Constantly seeking pleasure or gratification",
            "Hoarding or collecting behaviors",
            "Jealousy or possessiveness",
            "Depression when separated from desired objects"
        ],
        therapeutic_practices: [
            "Non-attachment (Vairagya) cultivation",
            "Letting go meditation and practices",
            "Gratitude for what is present now",
            "Impermanence contemplation",
            "Contentment (Santosha) practices",
            "Simplicity and minimalism"
        ],
        yoga_practices: [
            "Twisting poses for release and letting go",
            "Flow practices emphasizing transition",
            "Breath practices for detachment",
            "Meditation on impermanence",
            "Restorative practices for contentment",
            "Aparigraha (non-possessiveness) in practice"
        ]
    },

    dvesa: {
        name: "Dvesa - Aversions",
        description: "Strong aversion, hatred, or resistance to experiences, people, or situations that cause discomfort or pain.",
        manifestations: [
            "Hatred or strong dislike toward people or situations",
            "Avoidance of difficult or uncomfortable experiences",
            "Resistance to change or challenging circumstances",
            "Holding grudges or resentments",
            "Prejudice and discrimination",
            "Pushing away what we don't want to face"
        ],
        symptoms: [
            "Chronic anger or resentment",
            "Avoidance behaviors",
            "Intolerance and judgment of others",
            "Resistance to necessary changes",
            "Holding onto past hurts",
            "Inability to forgive"
        ],
        therapeutic_practices: [
            "Forgiveness practices and compassion cultivation",
            "Loving-kindness meditation",
            "Acceptance and equanimity practices",
            "Shadow work and integration",
            "Therapeutic processing of trauma",
            "Ahimsa (non-violence) in thought and action"
        ],
        yoga_practices: [
            "Heart-opening poses for compassion",
            "Hip-opening practices for emotional release",
            "Gentle backbends to open the heart",
            "Metta (loving-kindness) meditation",
            "Restorative practices for healing",
            "Pranayama for emotional regulation"
        ]
    },

    abhinivesha: {
        name: "Abhinivesha - Fear of Death/Clinging to Life",
        description: "The fundamental fear of death and clinging to physical existence. This includes all forms of fear and insecurity.",
        manifestations: [
            "Fear of death and mortality",
            "Clinging to youth, health, or vitality",
            "General anxiety and fearfulness",
            "Insecurity about the future",
            "Fear of the unknown",
            "Resistance to aging or change"
        ],
        symptoms: [
            "Chronic anxiety and worry",
            "Fear-based decision making",
            "Obsession with health, safety, or security",
            "Difficulty taking risks or embracing change",
            "Fear of failure or rejection",
            "Existential anxiety about meaning and purpose"
        ],
        therapeutic_practices: [
            "Death contemplation and acceptance",
            "Trust and faith cultivation",
            "Present moment awareness",
            "Courage-building practices",
            "Spiritual connection and surrender",
            "Life purpose exploration"
        ],
        yoga_practices: [
            "Grounding practices for security",
            "Backbends for courage and fearlessness",
            "Balancing poses for confidence",
            "Savasana (corpse pose) for death practice",
            "Pranayama for nervous system regulation",
            "Meditation on the eternal nature of consciousness"
        ]
    }
};

// Kleshas Assessment Questions
const kleshasAssessment = [
    {
        id: 1,
        klesha: 'avidya',
        text: "How often do you feel confused about your life's purpose or meaning?",
        options: [
            { value: 'low', text: "Rarely - I have a clear sense of purpose and spiritual understanding" },
            { value: 'medium', text: "Sometimes - I have moments of clarity but also confusion" },
            { value: 'high', text: "Often - I frequently feel lost or without direction" }
        ]
    },
    {
        id: 2,
        klesha: 'asmita',
        text: "How important is it for you to receive recognition or praise for your accomplishments?",
        options: [
            { value: 'low', text: "Not very important - I find fulfillment in the action itself" },
            { value: 'medium', text: "Somewhat important - I appreciate recognition but don't depend on it" },
            { value: 'high', text: "Very important - I feel unfulfilled without recognition or praise" }
        ]
    },
    {
        id: 3,
        klesha: 'raga',
        text: "How difficult is it for you to let go of pleasant experiences or relationships?",
        options: [
            { value: 'low', text: "Easy - I appreciate experiences but don't cling to them" },
            { value: 'medium', text: "Moderately difficult - I sometimes struggle with letting go" },
            { value: 'high', text: "Very difficult - I often feel attached and have trouble moving on" }
        ]
    },
    {
        id: 4,
        klesha: 'dvesa',
        text: "How do you typically respond to people or situations you dislike?",
        options: [
            { value: 'low', text: "With acceptance and compassion, looking for understanding" },
            { value: 'medium', text: "With some resistance but try to be understanding" },
            { value: 'high', text: "With strong aversion, anger, or avoidance" }
        ]
    },
    {
        id: 5,
        klesha: 'abhinivesha',
        text: "How much do fears about the future or uncertainty affect your daily life?",
        options: [
            { value: 'low', text: "Minimally - I generally feel secure and trust life's process" },
            { value: 'medium', text: "Moderately - I have some worries but manage them well" },
            { value: 'high', text: "Significantly - I often feel anxious or worried about what might happen" }
        ]
    },
    {
        id: 6,
        klesha: 'avidya',
        text: "How connected do you feel to your authentic Self beyond your personality and roles?",
        options: [
            { value: 'low', text: "Very connected - I have a strong sense of my true nature" },
            { value: 'medium', text: "Somewhat connected - I have glimpses but it's not consistent" },
            { value: 'high', text: "Disconnected - I mostly identify with my personality and external roles" }
        ]
    },
    {
        id: 7,
        klesha: 'asmita',
        text: "How often do you compare yourself to others or feel competitive?",
        options: [
            { value: 'low', text: "Rarely - I focus on my own journey and growth" },
            { value: 'medium', text: "Sometimes - I notice comparisons but don't dwell on them" },
            { value: 'high', text: "Often - I frequently compare myself and feel competitive" }
        ]
    },
    {
        id: 8,
        klesha: 'raga',
        text: "How do you feel when you can't have something you really want?",
        options: [
            { value: 'low', text: "Accepting - I understand that not getting what I want is part of life" },
            { value: 'medium', text: "Disappointed but able to move on relatively quickly" },
            { value: 'high', text: "Very upset, frustrated, or obsessive about getting it" }
        ]
    },
    {
        id: 9,
        klesha: 'dvesa',
        text: "How easily can you forgive people who have hurt you?",
        options: [
            { value: 'low', text: "Easily - I understand that holding resentment hurts me more" },
            { value: 'medium', text: "With some effort - I eventually forgive but it takes time" },
            { value: 'high', text: "Very difficult - I tend to hold grudges and feel resentful" }
        ]
    },
    {
        id: 10,
        klesha: 'abhinivesha',
        text: "How comfortable are you with the idea of aging, change, and mortality?",
        options: [
            { value: 'low', text: "Very comfortable - I see them as natural parts of existence" },
            { value: 'medium', text: "Somewhat comfortable - I accept them intellectually but have some resistance" },
            { value: 'high', text: "Very uncomfortable - I prefer not to think about these topics" }
        ]
    }
];

// Kleshas Therapeutic Protocols
const kleshasTherapeuticProtocols = {
    assessment_scoring: function(answers) {
        const scores = {
            avidya: { low: 0, medium: 0, high: 0 },
            asmita: { low: 0, medium: 0, high: 0 },
            raga: { low: 0, medium: 0, high: 0 },
            dvesa: { low: 0, medium: 0, high: 0 },
            abhinivesha: { low: 0, medium: 0, high: 0 }
        };

        answers.forEach((answer, index) => {
            const question = kleshasAssessment[index];
            const klesha = question.klesha;
            scores[klesha][answer]++;
        });

        // Calculate predominant patterns
        const patterns = {};
        Object.keys(scores).forEach(klesha => {
            const kleshascores = scores[klesha];
            patterns[klesha] = {
                level: kleshascores.high > kleshascores.medium && kleshascores.high > kleshascores.low ? 'high' :
                       kleshascores.medium > kleshascores.low ? 'medium' : 'low',
                score: kleshascores.high * 3 + kleshascores.medium * 2 + kleshascores.low * 1
            };
        });

        return patterns;
    },

    generateRecommendations: function(kleshaPatterns, dosha, guna) {
        const recommendations = {
            primary_focus: [],
            daily_practices: [],
            yoga_therapy: [],
            lifestyle_adjustments: [],
            spiritual_practices: []
        };

        Object.keys(kleshaPatterns).forEach(klesha => {
            if (kleshaPatterns[klesha].level === 'high') {
                const info = kleshasInfo[klesha];
                recommendations.primary_focus.push({
                    klesha: klesha,
                    name: info.name,
                    practices: info.therapeutic_practices,
                    yoga: info.yoga_practices
                });
            }
        });

        return recommendations;
    },

    integrateWithDosha: function(klesha, dosha) {
        const combinations = {
            avidya: {
                vata: "Use grounding practices with self-inquiry. Vata's mobility can scatter awareness - emphasize stability in spiritual practice.",
                pitta: "Channel Pitta's intensity toward spiritual study and discrimination. Use cooling practices to prevent spiritual ego.",
                kapha: "Activate Kapha's natural wisdom through gentle stimulation. Use energizing practices to overcome spiritual lethargy."
            },
            asmita: {
                vata: "Ground the scattered ego through consistent practice. Use calming techniques to reduce ego-driven anxiety.",
                pitta: "Cool the fiery ego through surrender practices. Channel competitive nature toward self-improvement rather than comparison.",
                kapha: "Gently activate movement to prevent ego stagnation. Use warming practices to energize beyond comfort zones."
            },
            raga: {
                vata: "Create stability to reduce attachment-driven anxiety. Use grounding to find security within rather than external objects.",
                pitta: "Cool the passionate attachments through detachment practices. Transform intensity into spiritual dedication.",
                kapha: "Energize to prevent attachment from becoming stagnation. Use movement to release heavy emotional holding."
            },
            dvesa: {
                vata: "Ground fear-based aversions through stability. Use calming practices to reduce reactive patterns.",
                pitta: "Cool anger and hatred through compassion practices. Transform intensity into understanding and forgiveness.",
                kapha: "Energize to prevent aversion from becoming depression. Use warming practices to open the heart."
            },
            abhinivesha: {
                vata: "Ground fear and anxiety through stability practices. Use calming techniques for nervous system regulation.",
                pitta: "Cool fear-based intensity through trust practices. Channel protective instincts toward spiritual courage.",
                kapha: "Energize to overcome fear-based inertia. Use warming practices to build confidence and courage."
            }
        };

        return combinations[klesha][dosha];
    }
};

// Integration with Class Teaching
const kleshasInYogaTherapy = {
    class_integration: {
        opening_awareness: [
            "Begin each class acknowledging that we all carry patterns of suffering",
            "Create safe space for students to observe their own kleshas without judgment",
            "Emphasize that awareness is the first step toward liberation",
            "Remind students that everyone is on their own journey of awakening"
        ],
        
        during_practice: [
            "Notice attachment (raga) to 'getting the pose right'",
            "Observe aversion (dvesa) to challenging poses or discomfort",
            "Watch ego (asmita) comparing to others or seeking praise",
            "Recognize fear (abhinivesha) of falling or not being good enough",
            "Cultivate witness consciousness to observe ignorance (avidya) patterns"
        ],
        
        closing_integration: [
            "Reflect on what patterns arose during practice",
            "Practice gratitude for the opportunity to observe and grow",
            "Set intention to carry awareness into daily life",
            "Dedicate practice to liberation from suffering for all beings"
        ]
    },

    therapeutic_sequencing: {
        for_avidya: "Self-inquiry poses, meditation, study integration",
        for_asmita: "Surrendering poses, heart openers, group harmony",
        for_raga: "Letting go sequences, twists, impermanence meditation",
        for_dvesa: "Heart opening, compassion practices, acceptance poses",
        for_abhinivesha: "Grounding poses, courage-building, trust practices"
    }
};

// Export for integration
window.kleshasAssessment = {
    kleshasInfo,
    kleshasAssessment,
    kleshasTherapeuticProtocols,
    kleshasInYogaTherapy
};

