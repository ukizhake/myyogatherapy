// Therapeutic Advice Engine
class TherapeuticAdviceEngine {
    constructor() {
        this.conditionDatabase = this.initializeConditionDatabase();
        this.currentDoshaResults = null;
        this.currentGunaResults = null;
        this.pranayamaTechniques = this.loadPranayamaTechniques();
    }

    // Load pranayama techniques with benefits from the JSON database
    loadPranayamaTechniques() {
        // This would normally load from the all-pranayama-techniques.json file
        // For now, we'll include key techniques with their benefits
        return {
            "Nadi Shodhana": {
                name: "Nadi Shodhana (Alternate Nostril Breathing)",
                benefits: [
                    "Balances the nervous system",
                    "Reduces anxiety and stress",
                    "Improves concentration and focus",
                    "Harmonizes left and right brain hemispheres",
                    "Calms the mind and emotions"
                ],
                setup: "Sit comfortably with spine straight, use right hand to control nostrils",
                steps: [
                    "Close right nostril with thumb, inhale through left",
                    "Close left nostril with ring finger, release thumb, exhale right",
                    "Inhale right nostril",
                    "Close right nostril, release left, exhale left",
                    "This completes one round"
                ],
                contraindications: ["Severe nasal congestion", "Recent nasal surgery"],
                dosha_information: "Excellent for all doshas, especially Vata imbalance",
                guna_information: "Increases Sattva, reduces Rajas"
            },
            "Ujjayi": {
                name: "Ujjayi Pranayama (Ocean Breath)",
                benefits: [
                    "Calms the nervous system",
                    "Reduces blood pressure",
                    "Improves concentration",
                    "Generates internal heat",
                    "Releases tension and stress"
                ],
                setup: "Breathe through nose only, slight constriction in throat",
                steps: [
                    "Inhale slowly through nose with slight throat constriction",
                    "Create soft 'ocean' sound",
                    "Exhale slowly maintaining the sound",
                    "Keep mouth closed throughout"
                ],
                contraindications: ["Severe asthma during acute episodes"],
                dosha_information: "Balancing for Vata, cooling for Pitta, energizing for Kapha",
                guna_information: "Promotes Sattva, calms Rajas"
            },
            "Bhramari": {
                name: "Bhramari Pranayama (Humming Bee Breath)",
                benefits: [
                    "Deeply calms the nervous system",
                    "Reduces stress and anxiety",
                    "Improves concentration and memory",
                    "Relieves stress and mental tension",
                    "Helps with insomnia and sleep disorders"
                ],
                setup: "Block ears with thumbs, index fingers above eyebrows",
                steps: [
                    "Place thumbs in ears, close eyes",
                    "Inhale normally",
                    "Exhale making humming sound like a bee",
                    "Focus on the internal sound vibration"
                ],
                contraindications: ["Severe ear infections"],
                dosha_information: "Excellent for Vata, calming for Pitta",
                guna_information: "Strongly promotes Sattva"
            },
            "Surya Bhedana": {
                name: "Surya Bhedana (Right Nostril Breathing)",
                benefits: [
                    "Increases energy and vitality",
                    "Stimulates digestive fire",
                    "Combats depression and lethargy",
                    "Warms the body",
                    "Activates the sympathetic nervous system"
                ],
                setup: "Close left nostril, breathe only through right",
                steps: [
                    "Close left nostril with ring finger",
                    "Inhale slowly through right nostril",
                    "Close both nostrils briefly",
                    "Exhale through right nostril",
                    "Repeat for desired duration"
                ],
                contraindications: ["High blood pressure", "Heart conditions", "Hyperthyroidism"],
                dosha_information: "Excellent for Kapha, moderate for Vata, avoid if Pitta is high",
                guna_information: "Reduces Tamas, can increase Rajas"
            },
            "Chandra Bhedana": {
                name: "Chandra Bhedana (Left Nostril Breathing)",
                benefits: [
                    "Cools and calms the system",
                    "Reduces stress and anxiety",
                    "Improves sleep quality",
                    "Balances emotions",
                    "Activates the parasympathetic nervous system"
                ],
                setup: "Close right nostril, breathe only through left",
                steps: [
                    "Close right nostril with thumb",
                    "Inhale slowly through left nostril",
                    "Close both nostrils briefly",
                    "Exhale through left nostril",
                    "Repeat for desired duration"
                ],
                contraindications: ["Low blood pressure", "Depression (use mindfully)"],
                dosha_information: "Excellent for Pitta, calming for Vata, may increase Kapha",
                guna_information: "Promotes Sattva, reduces Rajas"
            },
            "4-7-8 Breathing": {
                name: "4-7-8 Breathing (Relaxing Breath)",
                benefits: [
                    "Rapidly reduces anxiety",
                    "Promotes deep relaxation",
                    "Improves sleep onset",
                    "Calms the nervous system",
                    "Reduces blood pressure"
                ],
                setup: "Comfortable seated position, tip of tongue behind upper teeth",
                steps: [
                    "Exhale completely through mouth",
                    "Inhale through nose for 4 counts",
                    "Hold breath for 7 counts",
                    "Exhale through mouth for 8 counts",
                    "Repeat 3-4 cycles maximum"
                ],
                contraindications: ["Pregnancy", "Severe heart conditions"],
                dosha_information: "Excellent for Vata and Pitta",
                guna_information: "Strongly promotes Sattva"
            }
        };
    }

    // Set user's constitutional assessment results
    setConstitution(doshaResults, gunaResults) {
        this.currentDoshaResults = doshaResults;
        this.currentGunaResults = gunaResults;
    }

    // Generate comprehensive advice for a specific condition
    generateAdvice(condition, severity, experienceLevel, customDescription = '') {
        if (!this.currentDoshaResults || !this.currentGunaResults) {
            throw new Error('Please complete the constitutional assessment first');
        }

        const conditionInfo = this.getConditionInfo(condition, customDescription);
        const constitutionalContext = this.analyzeConstitutionalContext(conditionInfo);
        const specificRecommendations = this.generateSpecificRecommendations(conditionInfo, severity, experienceLevel);
        const practiceProtocol = this.createPracticeProtocol(conditionInfo, severity, experienceLevel);
        const lifestyleAdjustments = this.generateLifestyleAdjustments(conditionInfo);
        const precautions = this.generatePrecautions(conditionInfo, severity);

        return {
            condition: conditionInfo,
            constitutionalContext,
            specificRecommendations,
            practiceProtocol,
            lifestyleAdjustments,
            precautions,
            severity,
            experienceLevel
        };
    }

    // Get detailed information about the condition
    getConditionInfo(condition, customDescription) {
        if (condition === 'custom') {
            return {
                name: 'Custom Condition',
                description: customDescription,
                category: 'general',
                doshaConnection: 'varies',
                gunaConnection: 'varies'
            };
        }

        return this.conditionDatabase[condition] || {
            name: 'General Wellness',
            description: 'General health and wellness support',
            category: 'general',
            doshaConnection: 'all',
            gunaConnection: 'all'
        };
    }

    // Analyze how the condition relates to user's constitution
    analyzeConstitutionalContext(conditionInfo) {
        const dominantDosha = this.currentDoshaResults.dominantDosha;
        const dominantGuna = this.currentGunaResults.dominantGuna;
        
        const doshaAnalysis = this.getDoshaConnectionAnalysis(conditionInfo, dominantDosha);
        const gunaAnalysis = this.getGunaConnectionAnalysis(conditionInfo, dominantGuna);

        return {
            dominantDosha,
            dominantGuna,
            doshaAnalysis,
            gunaAnalysis,
            constitutionalRelevance: this.getConstitutionalRelevance(conditionInfo, dominantDosha, dominantGuna)
        };
    }

    // Generate specific yoga/pranayama recommendations
    generateSpecificRecommendations(conditionInfo, severity, experienceLevel) {
        const dominantDosha = this.currentDoshaResults.dominantDosha;
        const dominantGuna = this.currentGunaResults.dominantGuna;

        const pranayamaRecommendations = this.getPranayamaForCondition(conditionInfo, dominantDosha, severity, experienceLevel);
        const asanaRecommendations = this.getAsanaForCondition(conditionInfo, dominantDosha, severity, experienceLevel);
        const meditationRecommendations = this.getMeditationForCondition(conditionInfo, dominantGuna, experienceLevel);

        return {
            pranayama: pranayamaRecommendations,
            asana: asanaRecommendations,
            meditation: meditationRecommendations,
            immediateRelief: this.getImmediateReliefTechniques(conditionInfo, severity)
        };
    }

    // Create structured practice protocol
    createPracticeProtocol(conditionInfo, severity, experienceLevel) {
        const duration = this.getRecommendedDuration(severity, experienceLevel);
        const frequency = this.getRecommendedFrequency(severity, experienceLevel);
        const structure = this.getPracticeStructure(conditionInfo, experienceLevel);

        return {
            duration,
            frequency,
            structure,
            progressionPlan: this.getProgressionPlan(conditionInfo, experienceLevel),
            adaptations: this.getAdaptations(conditionInfo, severity)
        };
    }

    // Generate lifestyle adjustment recommendations
    generateLifestyleAdjustments(conditionInfo) {
        const dominantDosha = this.currentDoshaResults.dominantDosha;

        return {
            diet: this.getDietaryRecommendations(conditionInfo, dominantDosha),
            sleep: this.getSleepRecommendations(conditionInfo, dominantDosha),
            dailyRoutine: this.getDailyRoutineAdjustments(conditionInfo, dominantDosha),
            stressManagement: this.getStressManagementTips(conditionInfo),
            environmentalFactors: this.getEnvironmentalRecommendations(conditionInfo, dominantDosha)
        };
    }

    // Generate safety precautions and warnings
    generatePrecautions(conditionInfo, severity) {
        const generalPrecautions = this.getGeneralPrecautions(conditionInfo);
        const severitySpecificPrecautions = this.getSeveritySpecificPrecautions(severity);
        const constitutionalPrecautions = this.getConstitutionalPrecautions(conditionInfo, this.currentDoshaResults.dominantDosha);

        return {
            general: generalPrecautions,
            severitySpecific: severitySpecificPrecautions,
            constitutional: constitutionalPrecautions,
            whenToSeekHelp: this.getWhenToSeekHelp(conditionInfo, severity)
        };
    }

    // Initialize comprehensive condition database
    initializeConditionDatabase() {
        return {
            anxiety: {
                name: 'Anxiety & Stress',
                description: 'Nervous system imbalance causing worry, restlessness, and tension',
                category: 'mental_health',
                doshaConnection: 'vata',
                gunaConnection: 'rajas',
                affectedSystems: ['nervous', 'respiratory', 'digestive'],
                keySymptoms: ['racing thoughts', 'shallow breathing', 'muscle tension', 'sleep disturbance']
            },
            depression: {
                name: 'Depression & Low Mood',
                description: 'Persistent low mood, loss of interest, and emotional heaviness',
                category: 'mental_health',
                doshaConnection: 'kapha',
                gunaConnection: 'tamas',
                affectedSystems: ['nervous', 'endocrine', 'immune'],
                keySymptoms: ['low energy', 'loss of motivation', 'social withdrawal', 'sleep changes']
            },
            insomnia: {
                name: 'Sleep Issues & Insomnia',
                description: 'Difficulty falling asleep, staying asleep, or poor sleep quality',
                category: 'sleep_disorders',
                doshaConnection: 'vata',
                gunaConnection: 'rajas',
                affectedSystems: ['nervous', 'endocrine'],
                keySymptoms: ['difficulty falling asleep', 'frequent awakening', 'early morning waking', 'fatigue']
            },
            digestive_issues: {
                name: 'Digestive Problems',
                description: 'Irregular digestion, bloating, and gastrointestinal discomfort',
                category: 'digestive_health',
                doshaConnection: 'all',
                gunaConnection: 'varies',
                affectedSystems: ['digestive', 'nervous'],
                keySymptoms: ['bloating', 'irregular bowel movements', 'gas', 'stomach discomfort']
            },
            back_pain: {
                name: 'Back Pain & Tension',
                description: 'Muscular tension, stiffness, and pain in the back and spine',
                category: 'musculoskeletal',
                doshaConnection: 'vata',
                gunaConnection: 'varies',
                affectedSystems: ['musculoskeletal', 'nervous'],
                keySymptoms: ['muscle stiffness', 'pain', 'limited mobility', 'tension']
            },
            headaches: {
                name: 'Headaches & Migraines',
                description: 'Recurring head pain, tension, and associated symptoms',
                category: 'neurological',
                doshaConnection: 'varies',
                gunaConnection: 'rajas',
                affectedSystems: ['nervous', 'circulatory'],
                keySymptoms: ['head pain', 'sensitivity to light', 'nausea', 'tension']
            },
            hypertension: {
                name: 'High Blood Pressure',
                description: 'Elevated blood pressure and cardiovascular stress',
                category: 'cardiovascular',
                doshaConnection: 'pitta',
                gunaConnection: 'rajas',
                affectedSystems: ['cardiovascular', 'nervous'],
                keySymptoms: ['elevated blood pressure', 'stress', 'tension', 'fatigue']
            },
            arthritis: {
                name: 'Joint Pain & Arthritis',
                description: 'Joint inflammation, stiffness, and reduced mobility',
                category: 'musculoskeletal',
                doshaConnection: 'vata',
                gunaConnection: 'varies',
                affectedSystems: ['musculoskeletal', 'immune'],
                keySymptoms: ['joint pain', 'stiffness', 'swelling', 'reduced range of motion']
            },
            fatigue: {
                name: 'Chronic Fatigue',
                description: 'Persistent tiredness, low energy, and lack of vitality',
                category: 'energy_disorders',
                doshaConnection: 'kapha',
                gunaConnection: 'tamas',
                affectedSystems: ['nervous', 'endocrine', 'immune'],
                keySymptoms: ['persistent tiredness', 'low motivation', 'brain fog', 'weak immunity']
            },
            weight_management: {
                name: 'Weight Management',
                description: 'Difficulty maintaining healthy weight and metabolism',
                category: 'metabolic',
                doshaConnection: 'kapha',
                gunaConnection: 'tamas',
                affectedSystems: ['digestive', 'endocrine', 'musculoskeletal'],
                keySymptoms: ['slow metabolism', 'weight gain', 'low energy', 'food cravings']
            },
            hormonal_imbalance: {
                name: 'Hormonal Imbalances',
                description: 'Disrupted hormonal cycles and endocrine function',
                category: 'endocrine',
                doshaConnection: 'varies',
                gunaConnection: 'rajas',
                affectedSystems: ['endocrine', 'reproductive', 'nervous'],
                keySymptoms: ['irregular cycles', 'mood swings', 'energy fluctuations', 'sleep disturbance']
            },
            respiratory_issues: {
                name: 'Breathing Problems',
                description: 'Difficulty breathing, asthma, and respiratory challenges',
                category: 'respiratory',
                doshaConnection: 'vata_kapha',
                gunaConnection: 'varies',
                affectedSystems: ['respiratory', 'nervous'],
                keySymptoms: ['shortness of breath', 'wheezing', 'chest tightness', 'cough']
            },
            immune_support: {
                name: 'Immune System Support',
                description: 'Strengthening natural immunity and resistance to illness',
                category: 'immune_health',
                doshaConnection: 'all',
                gunaConnection: 'sattva',
                affectedSystems: ['immune', 'digestive', 'respiratory'],
                keySymptoms: ['frequent illness', 'slow recovery', 'low energy', 'poor digestion']
            },
            focus_concentration: {
                name: 'Focus & Concentration',
                description: 'Difficulty maintaining attention and mental clarity',
                category: 'cognitive',
                doshaConnection: 'vata',
                gunaConnection: 'rajas',
                affectedSystems: ['nervous', 'cognitive'],
                keySymptoms: ['scattered attention', 'mental fog', 'forgetfulness', 'restlessness']
            },
            emotional_balance: {
                name: 'Emotional Balance',
                description: 'Mood swings, emotional reactivity, and instability',
                category: 'emotional_health',
                doshaConnection: 'varies',
                gunaConnection: 'rajas',
                affectedSystems: ['nervous', 'endocrine'],
                keySymptoms: ['mood swings', 'emotional reactivity', 'irritability', 'sensitivity']
            },
            addiction_recovery: {
                name: 'Addiction Recovery',
                description: 'Support for overcoming addictive behaviors and patterns',
                category: 'behavioral_health',
                doshaConnection: 'varies',
                gunaConnection: 'rajas_tamas',
                affectedSystems: ['nervous', 'endocrine', 'digestive'],
                keySymptoms: ['cravings', 'mood instability', 'anxiety', 'sleep disturbance']
            },
            pregnancy_support: {
                name: 'Pregnancy Support',
                description: 'Gentle practices for maternal health and well-being',
                category: 'reproductive_health',
                doshaConnection: 'varies',
                gunaConnection: 'sattva',
                affectedSystems: ['reproductive', 'digestive', 'musculoskeletal'],
                keySymptoms: ['physical discomfort', 'emotional changes', 'fatigue', 'stress']
            },
            seniors_wellness: {
                name: 'Senior Wellness',
                description: 'Age-appropriate practices for healthy aging',
                category: 'geriatric_health',
                doshaConnection: 'vata',
                gunaConnection: 'varies',
                affectedSystems: ['musculoskeletal', 'nervous', 'cardiovascular'],
                keySymptoms: ['reduced mobility', 'joint stiffness', 'balance issues', 'cognitive changes']
            }
        };
    }

    // Helper methods for generating specific recommendations
    getDoshaConnectionAnalysis(conditionInfo, dominantDosha) {
        const connections = {
            vata: {
                anxiety: "Your Vata constitution may make you more prone to anxiety due to the mobile, changeable nature of Vata. Focus on grounding and stabilizing practices.",
                insomnia: "Vata governs the nervous system, and imbalance can lead to restless mind and sleep disturbance. Calming routines are essential.",
                back_pain: "Vata controls movement and when imbalanced can cause stiffness and pain. Gentle, warming practices will help.",
                default: "Your Vata constitution tends toward movement and change. This condition may be related to excess movement or dryness in the system."
            },
            pitta: {
                hypertension: "Pitta's fiery nature can manifest as elevated blood pressure when out of balance. Cooling practices are essential.",
                headaches: "Pitta imbalance often shows up as heat-related symptoms like headaches. Focus on cooling and calming practices.",
                default: "Your Pitta constitution has a strong digestive fire and goal-oriented nature. This condition may be related to excess heat or intensity."
            },
            kapha: {
                depression: "Kapha imbalance can manifest as heaviness, lethargy, and low mood. Energizing and warming practices will help.",
                fatigue: "Your Kapha constitution may tend toward heaviness and sluggishness when imbalanced. Stimulating practices are beneficial.",
                weight_management: "Kapha governs structure and when imbalanced can lead to sluggish metabolism. Activating practices will support healthy weight.",
                default: "Your Kapha constitution provides stability and strength. This condition may be related to excess heaviness or stagnation."
            }
        };

        return connections[dominantDosha][conditionInfo.name.toLowerCase().replace(/[^a-z]/g, '_')] || 
               connections[dominantDosha].default;
    }

    getGunaConnectionAnalysis(conditionInfo, dominantGuna) {
        const connections = {
            sattva: "Your Sattvic nature supports healing and balance. Use meditation and gentle practices to maintain clarity and peace.",
            rajas: "Your Rajasic nature may contribute to this condition through over-activity or intensity. Balancing practices that calm without suppressing are ideal.",
            tamas: "Your Tamasic predominance may contribute to this condition through stagnation or inertia. Gentle activating practices will help without overwhelming the system."
        };

        return connections[dominantGuna];
    }

    getConstitutionalRelevance(conditionInfo, dominantDosha, dominantGuna) {
        const doshaMatch = conditionInfo.doshaConnection === dominantDosha || 
                          conditionInfo.doshaConnection === 'all' ||
                          conditionInfo.doshaConnection.includes(dominantDosha);
        
        const gunaMatch = conditionInfo.gunaConnection === dominantGuna || 
                         conditionInfo.gunaConnection === 'varies' ||
                         conditionInfo.gunaConnection.includes(dominantGuna);

        if (doshaMatch && gunaMatch) {
            return "HIGH - This condition strongly aligns with your constitution";
        } else if (doshaMatch || gunaMatch) {
            return "MODERATE - This condition has some constitutional relevance";
        } else {
            return "GENERAL - Standard therapeutic approach recommended";
        }
    }

    // Specific recommendation methods with detailed benefits
    getPranayamaForCondition(conditionInfo, dominantDosha, severity, experienceLevel) {
        const conditionName = conditionInfo.name.toLowerCase().replace(/[^a-z]/g, '_');
        
        // Map conditions to primary techniques
        const conditionTechniqueMap = {
            anxiety: "Nadi Shodhana",
            stress: "Nadi Shodhana", 
            depression: "Surya Bhedana",
            fatigue: "Surya Bhedana",
            insomnia: "Chandra Bhedana",
            sleep_issues: "Chandra Bhedana",
            hypertension: "Chandra Bhedana",
            headaches: "Ujjayi",
            focus_concentration: "Nadi Shodhana",
            emotional_balance: "Bhramari"
        };

        const primaryTechniqueName = conditionTechniqueMap[conditionName] || "Nadi Shodhana";
        const primaryTechnique = this.pranayamaTechniques[primaryTechniqueName];
        
        // Get secondary techniques based on condition and constitution
        const secondaryTechniques = this.getSecondaryTechniques(conditionName, dominantDosha);
        
        // Determine breathing ratio based on experience level
        let ratios = "Natural breath rhythm";
        if (experienceLevel === 'intermediate') {
            ratios = "4:4:4:4 (inhale:hold:exhale:hold)";
        } else if (experienceLevel === 'advanced') {
            ratios = "6:2:8:2 or as comfortable";
        }
        
        return {
            primary: primaryTechnique.name,
            primaryDetails: {
                benefits: primaryTechnique.benefits,
                setup: primaryTechnique.setup,
                steps: primaryTechnique.steps,
                contraindications: primaryTechnique.contraindications,
                doshaInfo: primaryTechnique.dosha_information,
                gunaInfo: primaryTechnique.guna_information
            },
            secondary: secondaryTechniques,
            ratios: ratios,
            constitutionalNote: this.getConstitutionalPranayamaNote(dominantDosha, primaryTechniqueName)
        };
    }

    getSecondaryTechniques(conditionName, dominantDosha) {
        const secondaryMap = {
            anxiety: ["Ujjayi", "Bhramari", "4-7-8 Breathing"],
            depression: ["Ujjayi", "Nadi Shodhana"],
            insomnia: ["4-7-8 Breathing", "Bhramari"],
            hypertension: ["Ujjayi", "Bhramari"],
            stress: ["Bhramari", "4-7-8 Breathing"]
        };

        const techniques = secondaryMap[conditionName] || ["Ujjayi", "Bhramari"];
        
        return techniques.map(techName => ({
            name: this.pranayamaTechniques[techName]?.name || techName,
            benefits: this.pranayamaTechniques[techName]?.benefits || []
        }));
    }

    getConstitutionalPranayamaNote(dominantDosha, techniqueName) {
        const technique = this.pranayamaTechniques[techniqueName];
        if (!technique) return "";
        
        const doshaSpecific = {
            vata: "As a Vata constitution, this technique will help ground and stabilize your naturally mobile energy.",
            pitta: "As a Pitta constitution, this practice will help cool and balance your natural intensity.",
            kapha: "As a Kapha constitution, this technique will help energize while maintaining stability."
        };
        
        return `${doshaSpecific[dominantDosha]} ${technique.dosha_information}`;
    }

    getAsanaForCondition(conditionInfo, dominantDosha, severity, experienceLevel) {
        // Return appropriate asana recommendations based on condition and constitution
        const recommendations = {
            anxiety: ["Child's Pose", "Forward Folds", "Legs up the Wall", "Gentle Twists"],
            depression: ["Heart Opening Poses", "Sun Salutations", "Standing Poses", "Backbends"],
            back_pain: ["Cat-Cow", "Gentle Backbends", "Hip Openers", "Supported Bridge"],
            default: ["Gentle Stretching", "Joint Mobility", "Relaxation Poses"]
        };

        const condition = conditionInfo.name.toLowerCase().replace(/[^a-z]/g, '_');
        return recommendations[condition] || recommendations.default;
    }

    getMeditationForCondition(conditionInfo, dominantGuna, experienceLevel) {
        const techniques = {
            anxiety: ["Body Scan", "Mindfulness of Breath", "Loving-Kindness"],
            depression: ["Gratitude Meditation", "Visualization", "Movement Meditation"],
            focus_concentration: ["Single-Point Focus", "Counting Meditation", "Mantra Repetition"],
            default: ["Breath Awareness", "Body Awareness", "Open Monitoring"]
        };

        const condition = conditionInfo.name.toLowerCase().replace(/[^a-z]/g, '_');
        return techniques[condition] || techniques.default;
    }

    getImmediateReliefTechniques(conditionInfo, severity) {
        const techniques = {
            anxiety: ["5-4-3-2-1 Grounding", "Deep Belly Breathing", "Progressive Muscle Relaxation"],
            depression: ["Gentle Movement", "Sunlight Exposure", "Gratitude Practice"],
            pain: ["Gentle Stretching", "Breath Awareness", "Heat/Cold Therapy"],
            default: ["Deep Breathing", "Mindful Awareness", "Gentle Movement"]
        };

        // Determine category based on condition
        let category = 'default';
        if (conditionInfo.category === 'mental_health') {
            category = conditionInfo.name.toLowerCase().includes('anxiety') ? 'anxiety' : 'depression';
        } else if (conditionInfo.category === 'musculoskeletal') {
            category = 'pain';
        }

        return techniques[category];
    }

    // Duration and frequency recommendations
    getRecommendedDuration(severity, experienceLevel) {
        const durations = {
            beginner: { mild: '10-15 min', moderate: '15-20 min', severe: '20-25 min' },
            intermediate: { mild: '15-25 min', moderate: '25-35 min', severe: '35-45 min' },
            advanced: { mild: '20-30 min', moderate: '30-45 min', severe: '45-60 min' }
        };

        return durations[experienceLevel][severity];
    }

    getRecommendedFrequency(severity, experienceLevel) {
        if (severity === 'severe') return 'Daily, possibly twice daily';
        if (severity === 'moderate') return 'Daily or 5-6 times per week';
        return '4-5 times per week';
    }

    // Additional helper methods for comprehensive advice generation
    getPracticeStructure(conditionInfo, experienceLevel) {
        return {
            warmUp: "5 minutes gentle movement and breath awareness",
            mainPractice: "15-30 minutes specific techniques",
            coolDown: "5-10 minutes relaxation and integration",
            notes: "Always listen to your body and modify as needed"
        };
    }

    getProgressionPlan(conditionInfo, experienceLevel) {
        return {
            week1_2: "Establish routine, focus on basic techniques",
            week3_4: "Increase duration slightly, add variations",
            month2_3: "Deepen practice, explore advanced modifications",
            longTerm: "Maintain consistent practice, seasonal adjustments"
        };
    }

    getAdaptations(conditionInfo, severity) {
        const adaptations = [];
        
        if (severity === 'severe') {
            adaptations.push("Start with shorter sessions and build gradually");
            adaptations.push("Use props and support as needed");
            adaptations.push("Consider working with a qualified instructor");
        }
        
        adaptations.push("Modify poses for comfort and safety");
        adaptations.push("Rest when needed - consistency over intensity");
        
        return adaptations;
    }

    // Lifestyle recommendations
    getDietaryRecommendations(conditionInfo, dominantDosha) {
        const dietary = {
            vata: ["Warm, cooked foods", "Regular meal times", "Nourishing soups and stews", "Healthy fats"],
            pitta: ["Cool, fresh foods", "Avoid spicy and acidic foods", "Sweet fruits", "Cooling herbs"],
            kapha: ["Light, warm foods", "Spices and herbs", "Reduce dairy and sweets", "Eat largest meal at lunch"]
        };

        return dietary[dominantDosha];
    }

    getSleepRecommendations(conditionInfo, dominantDosha) {
        const sleep = {
            vata: ["Regular bedtime routine", "Warm oil massage", "Calming environment", "Avoid screens before bed"],
            pitta: ["Cool sleeping environment", "Avoid late night activities", "Moon gazing or gentle reading", "Early bedtime"],
            kapha: ["Rise early", "Avoid daytime naps", "Active day to promote sleep", "Light evening meal"]
        };

        return sleep[dominantDosha];
    }

    getDailyRoutineAdjustments(conditionInfo, dominantDosha) {
        return [
            "Establish consistent daily schedule",
            "Include time for practice and relaxation",
            "Balance activity with rest",
            "Spend time in nature when possible"
        ];
    }

    getStressManagementTips(conditionInfo) {
        return [
            "Practice regular stress-reduction techniques",
            "Set realistic expectations and boundaries",
            "Cultivate supportive relationships",
            "Engage in enjoyable, relaxing activities"
        ];
    }

    getEnvironmentalRecommendations(conditionInfo, dominantDosha) {
        const environment = {
            vata: ["Warm, stable environments", "Minimize excessive noise", "Soft, natural lighting", "Comfortable textures"],
            pitta: ["Cool, well-ventilated spaces", "Natural lighting", "Calming colors", "Avoid overheating"],
            kapha: ["Bright, airy spaces", "Good ventilation", "Stimulating colors", "Minimize clutter"]
        };

        return environment[dominantDosha];
    }

    // Safety and precautions
    getGeneralPrecautions(conditionInfo) {
        return [
            "Start slowly and build gradually",
            "Listen to your body and never force",
            "Stop if you experience pain or discomfort",
            "Stay hydrated and practice on an empty stomach"
        ];
    }

    getSeveritySpecificPrecautions(severity) {
        const precautions = {
            mild: ["Gentle approach, modify as needed"],
            moderate: ["Work with awareness, consider professional guidance"],
            severe: ["Consult healthcare providers before starting", "Work with qualified yoga therapist", "Start very gently"]
        };

        return precautions[severity];
    }

    getConstitutionalPrecautions(conditionInfo, dominantDosha) {
        const precautions = {
            vata: ["Avoid overexertion", "Keep warm", "Practice regularly but gently"],
            pitta: ["Avoid overheating", "Practice with moderation", "Stay cool and calm"],
            kapha: ["Avoid stagnation", "Keep active but don't overwhelm", "Practice consistently"]
        };

        return precautions[dominantDosha];
    }

    getWhenToSeekHelp(conditionInfo, severity) {
        const warnings = [
            "If symptoms worsen or persist",
            "If you experience severe pain or discomfort",
            "If condition interferes significantly with daily life"
        ];

        if (severity === 'severe') {
            warnings.push("Consider professional medical evaluation");
            warnings.push("Work with qualified yoga therapist or healthcare provider");
        }

        return warnings;
    }
}

// Export for use in main application
window.TherapeuticAdviceEngine = TherapeuticAdviceEngine;
