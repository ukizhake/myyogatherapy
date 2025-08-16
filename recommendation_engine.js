// Comprehensive Yoga Therapy Recommendation Engine
// Integrates constitutional assessment with therapeutic protocols and progressive development

class YogaTherapyRecommendationEngine {
    constructor() {
        this.loadKnowledgeBase();
    }

    // Load all knowledge base data
    loadKnowledgeBase() {
        // This would load from our JSON files in a real implementation
        // For now, we'll include the core recommendation logic
    }

    // Main recommendation function
    generateRecommendations(assessment) {
        const {
            dominantDosha,
            dominantGuna,
            kleshaPatterns,
            currentConditions,
            practiceLevel,
            availableTime,
            specificGoals
        } = assessment;

        return {
            immediate_practices: this.getImmediatePractices(dominantDosha, dominantGuna, currentConditions),
            daily_routine: this.createDailyRoutine(assessment),
            therapeutic_protocols: this.getTherapeuticProtocols(currentConditions, dominantDosha, dominantGuna),
            progressive_development: this.createProgressivePlan(practiceLevel, specificGoals),
            constitutional_balancing: this.getConstitutionalPractices(dominantDosha, dominantGuna),
            klesha_healing: this.getKleshaHealing(kleshaPatterns),
            seasonal_adaptations: this.getSeasonalGuidance(dominantDosha),
            lifestyle_integration: this.getLifestyleRecommendations(assessment)
        };
    }

    // Immediate practices based on current state
    getImmediatePractices(dosha, guna, conditions) {
        const recommendations = {
            pranayama: [],
            asana: [],
            meditation: [],
            immediate_relief: []
        };

        // Dosha-specific immediate practices
        if (dosha === 'vata') {
            recommendations.pranayama.push({
                technique: "Anulom Vilom (Alternate Nostril)",
                duration: "5-10 minutes",
                ratio: "Natural rhythm, progress to 4:4:4:4",
                purpose: "Ground scattered energy and calm nervous system"
            });
            recommendations.asana.push({
                sequence: "Grounding poses",
                poses: ["Vrkshasana (Tree)", "Warrior poses held", "Meru asana"],
                duration: "Hold each 30-60 seconds",
                purpose: "Stabilize and ground Vata energy"
            });
        }

        if (dosha === 'pitta') {
            recommendations.pranayama.push({
                technique: "Chandra Nadi (Left Nostril)",
                duration: "9 rounds, up to 27",
                ratio: "4:8 (inhale:exhale)",
                purpose: "Cool excess heat and calm competitive nature"
            });
            recommendations.pranayama.push({
                technique: "Sheetali (Cooling Breath)",
                duration: "5-10 rounds", 
                ratio: "8:4:8:4",
                purpose: "Immediate cooling and heat reduction"
            });
        }

        if (dosha === 'kapha') {
            recommendations.pranayama.push({
                technique: "Surya Nadi (Right Nostril)",
                duration: "9 rounds, up to 27",
                ratio: "4:8 (inhale:exhale)",
                purpose: "Activate metabolism and energize"
            });
            recommendations.pranayama.push({
                technique: "Bhastrika (Bellows Breath)",
                duration: "20-30 rounds",
                ratio: "Equal in:out, rapid",
                purpose: "Stimulate energy and remove lethargy"
            });
        }

        // Guna-specific modifications
        if (guna === 'rajas' && conditions.includes('stress')) {
            recommendations.immediate_relief.push({
                practice: "Sukha Pranayama",
                technique: "6:6 gentle breathing",
                duration: "5 rounds",
                purpose: "Immediate stress relief and nervous system calming"
            });
        }

        if (guna === 'tamas' && conditions.includes('lethargy')) {
            recommendations.immediate_relief.push({
                practice: "Energizing Breath",
                technique: "Kapalabhati (Skull Shining)",
                duration: "30-50 pumps, 3 rounds",
                purpose: "Immediate energy activation"
            });
        }

        return recommendations;
    }

    // Create comprehensive daily routine
    createDailyRoutine(assessment) {
        const { dominantDosha, dominantGuna, availableTime, practiceLevel } = assessment;
        
        const routines = {
            short_practice: { // 15-20 minutes
                morning: this.getMorningPractice(dominantDosha, 'short'),
                evening: this.getEveningPractice(dominantDosha, 'short')
            },
            medium_practice: { // 30-45 minutes
                morning: this.getMorningPractice(dominantDosha, 'medium'),
                evening: this.getEveningPractice(dominantDosha, 'medium')
            },
            long_practice: { // 60+ minutes
                morning: this.getMorningPractice(dominantDosha, 'long'),
                evening: this.getEveningPractice(dominantDosha, 'long')
            }
        };

        return routines[availableTime] || routines.short_practice;
    }

    getMorningPractice(dosha, duration) {
        const practices = {
            vata: {
                short: {
                    centering: "5 minutes quiet sitting",
                    pranayama: "Sukha Purvaka 6:6, 5 rounds",
                    asana: "Gentle sun salutation, 3 rounds",
                    meditation: "5 minutes witness awareness"
                },
                medium: {
                    centering: "5 minutes quiet sitting",
                    warm_up: "Joint movements and gentle stretches",
                    pranayama: "Anulom Vilom 10 rounds, Sukha Purvaka 8:4:8:4",
                    asana: "Grounding sequence: Warriors, Tree, Standing poses",
                    meditation: "10 minutes concentration practice"
                },
                long: {
                    centering: "10 minutes quiet sitting",
                    warm_up: "Complete joint mobility sequence",
                    pranayama: "Progressive Anulom Vilom, Savitri 6:3:6:3",
                    asana: "Full Hatha sequence with holds",
                    meditation: "15-20 minutes witness awareness"
                }
            },
            pitta: {
                short: {
                    centering: "5 minutes quiet sitting",
                    pranayama: "Chandra Nadi 9 rounds",
                    asana: "Cooling sequence: Forward folds, twists",
                    meditation: "5 minutes loving-kindness"
                },
                medium: {
                    centering: "5 minutes quiet sitting",
                    warm_up: "Gentle movements avoiding heat buildup",
                    pranayama: "Chandra Nadi, Sheetali, moderate pace",
                    asana: "Balanced flow avoiding overheating",
                    meditation: "10 minutes compassion practice"
                },
                long: {
                    centering: "10 minutes quiet sitting",
                    warm_up: "Slow, mindful warm-up",
                    pranayama: "Cooling pranayama sequence",
                    asana: "Complete cooling sequence with longer holds",
                    meditation: "15-20 minutes equanimity practice"
                }
            },
            kapha: {
                short: {
                    centering: "3 minutes dynamic movement",
                    pranayama: "Surya Nadi 9 rounds",
                    asana: "Energizing sun salutations, 5 rounds",
                    meditation: "5 minutes active awareness"
                },
                medium: {
                    centering: "5 minutes movement-based centering",
                    warm_up: "Dynamic joint movements",
                    pranayama: "Surya Nadi, Bhastrika energizing sequence",
                    asana: "Dynamic flow with backbends",
                    meditation: "10 minutes mindful movement"
                },
                long: {
                    centering: "5 minutes vigorous warm-up",
                    warm_up: "Complete energizing sequence",
                    pranayama: "Full energizing pranayama series",
                    asana: "Dynamic flow with challenging poses",
                    meditation: "15-20 minutes walking meditation"
                }
            }
        };

        return practices[dosha][duration];
    }

    getEveningPractice(dosha, duration) {
        // All doshas benefit from calming evening practices
        const practices = {
            short: {
                pranayama: "Gentle Ujjayi or natural breath, 5 minutes",
                asana: "Restorative poses: Child's pose, gentle twists",
                relaxation: "10 minutes Yoga Nidra or Savasana"
            },
            medium: {
                pranayama: "Chandra Nadi or cooling breaths, 10 minutes",
                asana: "Gentle yin sequence: hip openers, forward folds",
                relaxation: "15-20 minutes Yoga Nidra"
            },
            long: {
                pranayama: "Complete evening pranayama sequence",
                asana: "Full restorative practice",
                relaxation: "20-30 minutes deep Yoga Nidra"
            }
        };

        return practices[duration];
    }

    // Therapeutic protocols for specific conditions
    getTherapeuticProtocols(conditions, dosha, guna) {
        const protocols = {};

        conditions.forEach(condition => {
            protocols[condition] = this.getConditionProtocol(condition, dosha, guna);
        });

        return protocols;
    }

    getConditionProtocol(condition, dosha, guna) {
        const conditionProtocols = {
            anxiety: {
                primary_pranayama: [
                    {
                        technique: "Anulom Vilom",
                        duration: "10-15 minutes",
                        frequency: "2-3 times daily",
                        notes: "Focus on longer exhale for parasympathetic activation"
                    },
                    {
                        technique: "Chandra Nadi", 
                        duration: "27 rounds",
                        frequency: "Evening practice",
                        notes: "Cooling and calming for nervous system"
                    }
                ],
                supporting_practices: [
                    "Grounding asanas (Tree, Mountain, Child's pose)",
                    "Yoga Nidra for deep nervous system reset",
                    "Maitri meditation for self-compassion"
                ],
                lifestyle: [
                    "Regular sleep schedule",
                    "Warm, nourishing foods",
                    "Limit stimulants and media"
                ],
                progression: "Start with 5 minutes, build to 20 minutes over 4 weeks"
            },

            depression: {
                primary_pranayama: [
                    {
                        technique: "Surya Nadi",
                        duration: "27 rounds",
                        frequency: "Morning and noon",
                        notes: "Activates sympathetic nervous system and combats lethargy"
                    },
                    {
                        technique: "Bhastrika",
                        duration: "30-60 rounds",
                        frequency: "Morning practice",
                        notes: "Energizing and mood-lifting"
                    }
                ],
                supporting_practices: [
                    "Dynamic sun salutations",
                    "Backbends for heart opening",
                    "Community practice (satsang)",
                    "Mantra chanting for mood elevation"
                ],
                lifestyle: [
                    "Morning sunlight exposure",
                    "Regular exercise",
                    "Social connection",
                    "Creative expression"
                ],
                progression: "Begin gently, increase intensity as energy improves"
            },

            insomnia: {
                primary_pranayama: [
                    {
                        technique: "Chandra Nadi",
                        duration: "27 rounds",
                        frequency: "1-2 hours before bed",
                        notes: "Cooling and calming for sleep preparation"
                    },
                    {
                        technique: "Savitri with extended exhale",
                        duration: "6:12 ratio",
                        frequency: "Bedtime",
                        notes: "Longer exhale activates rest response"
                    }
                ],
                supporting_practices: [
                    "Gentle yin yoga sequence",
                    "Progressive muscle relaxation",
                    "Yoga Nidra practice",
                    "Legs up the wall pose"
                ],
                lifestyle: [
                    "No screens 1 hour before bed",
                    "Cool, dark sleeping environment",
                    "Regular bedtime routine",
                    "Light dinner 3 hours before sleep"
                ],
                progression: "Establish routine first, then deepen practices"
            },

            hypertension: {
                primary_pranayama: [
                    {
                        technique: "Sukha Pranayama",
                        duration: "5 rounds, 5 times daily",
                        frequency: "Throughout day",
                        notes: "Relaxes arterial constriction (from gunas system)"
                    },
                    {
                        technique: "Chandra Nadi",
                        duration: "27 rounds",
                        frequency: "Morning and evening",
                        notes: "Cooling and blood pressure reducing"
                    }
                ],
                supporting_practices: [
                    "Mula Bandha to break dorso-vagal patterns",
                    "Restorative yoga poses",
                    "Walking meditation",
                    "Stress management techniques"
                ],
                lifestyle: [
                    "Reduce sodium intake",
                    "Regular gentle exercise",
                    "Stress reduction",
                    "Weight management if needed"
                ],
                medical_note: "Work with healthcare provider for monitoring"
            },

            digestive_issues: {
                primary_pranayama: [
                    {
                        technique: "Agni Sara (Fire Essence)",
                        duration: "10-20 pumps, 3 rounds",
                        frequency: "Before meals",
                        notes: "Stimulates digestive fire"
                    },
                    {
                        technique: "Manipura Chakra breathing",
                        duration: "10 minutes",
                        frequency: "Daily",
                        notes: "Focus on solar plexus region"
                    }
                ],
                supporting_practices: [
                    "Twisting asanas after meals",
                    "Core strengthening practices",
                    "Mindful eating meditation",
                    "Abdominal massage"
                ],
                lifestyle: [
                    "Regular meal times",
                    "Proper food combining",
                    "Chew thoroughly",
                    "Eat largest meal at midday"
                ],
                progression: "Start gently, increase intensity as digestion improves"
            }
        };

        let protocol = conditionProtocols[condition];
        
        // Modify based on dosha
        if (protocol) {
            protocol = this.adaptProtocolForDosha(protocol, dosha, condition);
        }

        return protocol;
    }

    adaptProtocolForDosha(protocol, dosha, condition) {
        // Dosha-specific modifications to base protocols
        if (dosha === 'vata' && condition === 'anxiety') {
            protocol.additional_notes = "Extra emphasis on grounding and warming practices";
            protocol.contraindications = ["Avoid rapid breathing", "Keep warm during practice"];
        }
        
        if (dosha === 'pitta' && condition === 'hypertension') {
            protocol.additional_notes = "Avoid heating practices, focus on cooling";
            protocol.contraindications = ["No intense breathing", "Practice in cool environment"];
        }
        
        if (dosha === 'kapha' && condition === 'depression') {
            protocol.additional_notes = "Increase intensity gradually, focus on activation";
            protocol.modifications = ["More dynamic practices", "Shorter holds", "Energizing variations"];
        }

        return protocol;
    }

    // Progressive development plans
    createProgressivePlan(currentLevel, goals) {
        const plans = {
            beginner: this.getBeginnerProgression(goals),
            intermediate: this.getIntermediateProgression(goals),
            advanced: this.getAdvancedProgression(goals)
        };

        return plans[currentLevel];
    }

    getBeginnerProgression(goals) {
        return {
            week_1_2: {
                focus: "Foundation building",
                pranayama: [
                    "Natural breath awareness (5 min daily)",
                    "Simple counting breath 4:4"
                ],
                asana: [
                    "Basic joint movements",
                    "Simple standing poses",
                    "Basic relaxation"
                ],
                meditation: "3-5 minutes daily sitting"
            },
            week_3_4: {
                focus: "Introducing retention",
                pranayama: [
                    "Extend counting breath to 6:6",
                    "Introduction to Anulom Vilom (without retention)"
                ],
                asana: [
                    "Sun salutation (3 rounds)",
                    "Basic standing sequence",
                    "Introduction to seated poses"
                ],
                meditation: "5-10 minutes daily"
            },
            week_5_8: {
                focus: "Building consistency",
                pranayama: [
                    "Anulom Vilom with brief retention",
                    "Introduction to Ujjayi"
                ],
                asana: [
                    "Complete beginner sequences",
                    "Hold poses for longer",
                    "Basic inversions"
                ],
                meditation: "10-15 minutes daily"
            },
            month_2_3: {
                focus: "Deepening practice",
                pranayama: [
                    "Savitri pranayama basic ratios",
                    "Constitutional pranayama introduction"
                ],
                asana: [
                    "Intermediate poses",
                    "Longer sequences",
                    "Bandha introduction"
                ],
                meditation: "15-20 minutes daily"
            }
        };
    }

    getIntermediateProgression(goals) {
        return {
            month_1: {
                focus: "Refinement of techniques",
                pranayama: [
                    "Master constitutional pranayamas",
                    "Introduce therapeutic ratios",
                    "Savitri with progressive ratios"
                ],
                asana: [
                    "Intermediate sequences",
                    "Backbend preparation",
                    "Hip opening series"
                ],
                meditation: "20-30 minutes daily"
            },
            month_2_3: {
                focus: "Therapeutic applications",
                pranayama: [
                    "Condition-specific protocols",
                    "Pancha Bhuta pranayamas",
                    "Advanced breath retention"
                ],
                asana: [
                    "Therapeutic sequences",
                    "Advanced poses preparation",
                    "Bandha integration"
                ],
                meditation: "30 minutes daily, different techniques"
            },
            month_4_6: {
                focus: "Teaching preparation",
                pranayama: [
                    "Master all basic techniques",
                    "Understand contraindications",
                    "Personal practice refinement"
                ],
                asana: [
                    "Advanced pose practice",
                    "Adjustment techniques",
                    "Sequence creation"
                ],
                meditation: "Daily practice plus teaching preparation"
            }
        };
    }

    getAdvancedProgression(goals) {
        return {
            ongoing: {
                focus: "Mastery and service",
                pranayama: [
                    "Pancha Sahita 45-day program",
                    "Advanced kumbhaka practices",
                    "Spontaneous pranayama"
                ],
                asana: [
                    "Advanced pose mastery",
                    "Therapeutic applications",
                    "Teaching advanced students"
                ],
                meditation: [
                    "Extended sitting (45+ minutes)",
                    "Advanced dharana practices",
                    "Samadhi cultivation"
                ],
                service: [
                    "Teaching beginners",
                    "Therapeutic applications",
                    "Community building"
                ]
            }
        };
    }

    // Constitutional balancing practices
    getConstitutionalPractices(dosha, guna) {
        return {
            daily_pranayama: this.getDailyPranayamaForConstitution(dosha, guna),
            seasonal_adjustments: this.getSeasonalAdjustments(dosha),
            lifestyle_practices: this.getLifestylePractices(dosha, guna),
            long_term_development: this.getLongTermDevelopment(dosha, guna)
        };
    }

    getDailyPranayamaForConstitution(dosha, guna) {
        const practices = {
            vata: {
                morning: "Anulom Vilom 10 rounds + Surya Nadi 9 rounds (if cold)",
                midday: "Sukha Purvaka 8:4:8:4",
                evening: "Chandra Nadi 9 rounds",
                bedtime: "Natural breath awareness"
            },
            pitta: {
                morning: "Chandra Nadi 9 rounds",
                midday: "Sheetali 5 rounds",
                evening: "Chandra Nadi 27 rounds",
                bedtime: "Cooling breath or natural awareness"
            },
            kapha: {
                morning: "Surya Nadi 27 rounds + Bhastrika 30 rounds",
                midday: "Kapalabhati 3 rounds of 30",
                evening: "Gentle Surya Nadi 9 rounds",
                bedtime: "Natural breath (avoid heavy practices)"
            }
        };

        return practices[dosha];
    }

    // Klesha healing practices
    getKleshaHealing(kleshaPatterns) {
        const healing = {};
        
        Object.keys(kleshaPatterns).forEach(klesha => {
            if (kleshaPatterns[klesha].level === 'high') {
                healing[klesha] = this.getKleshaSpecificPractices(klesha);
            }
        });

        return healing;
    }

    getKleshaSpecificPractices(klesha) {
        const practices = {
            avidya: {
                pranayama: ["Self-inquiry breathing", "Witness awareness with breath"],
                meditation: ["Who am I? contemplation", "Atma Vichara"],
                study: ["Sacred text study", "Self-reflection practices"],
                daily_integration: ["Moment-to-moment awareness", "Questioning beliefs"]
            },
            asmita: {
                pranayama: ["Humility breathing", "Surrender pranayama"],
                practices: ["Prostration practices", "Selfless service"],
                meditation: ["Ego dissolution practices", "Gratitude meditation"],
                daily_integration: ["Anonymous good deeds", "Accepting criticism gracefully"]
            },
            raga: {
                pranayama: ["Letting go breath", "Non-attachment breathing"],
                practices: ["Twisting poses for release", "Impermanence meditation"],
                meditation: ["Contentment cultivation", "Desire observation"],
                daily_integration: ["Gratitude for what is", "Releasing outcomes"]
            },
            dvesha: {
                pranayama: ["Heart-opening breath", "Compassion breathing"],
                practices: ["Heart-opening asanas", "Loving-kindness meditation"],
                meditation: ["Forgiveness practices", "Metta meditation"],
                daily_integration: ["Finding good in difficulties", "Compassion cultivation"]
            },
            abhinivesha: {
                pranayama: ["Courage breathing", "Trust cultivation breath"],
                practices: ["Challenging poses for courage", "Death contemplation"],
                meditation: ["Impermanence meditation", "Faith cultivation"],
                daily_integration: ["Taking healthy risks", "Trusting life's process"]
            }
        };

        return practices[klesha];
    }

    // Seasonal guidance
    getSeasonalGuidance(dosha) {
        return {
            spring: this.getSpringPractices(dosha),
            summer: this.getSummerPractices(dosha),
            autumn: this.getAutumnPractices(dosha),
            winter: this.getWinterPractices(dosha)
        };
    }

    getSpringPractices(dosha) {
        // Spring is Kapha season - focus on energizing
        return {
            all_doshas: {
                focus: "Cleansing and energizing",
                pranayama: ["Kapalabhati", "Bhastrika", "Energizing practices"],
                asana: ["Dynamic flows", "Twists for cleansing", "Backbends"],
                lifestyle: ["Light foods", "Increased activity", "Early rising"]
            },
            dosha_specific: {
                vata: "Gentle energizing, avoid overexertion",
                pitta: "Moderate energizing, avoid overheating",
                kapha: "Maximum energizing, dynamic practices"
            }
        };
    }

    // Lifestyle integration recommendations
    getLifestyleRecommendations(assessment) {
        const { dominantDosha, dominantGuna, currentConditions, practiceLevel } = assessment;
        
        return {
            daily_routine: this.getDailyLifestyleRoutine(dominantDosha),
            dietary_guidelines: this.getDietaryGuidelines(dominantDosha, currentConditions),
            exercise_recommendations: this.getExerciseGuidance(dominantDosha, dominantGuna),
            stress_management: this.getStressManagement(dominantGuna, currentConditions),
            sleep_optimization: this.getSleepGuidance(dominantDosha),
            relationship_guidance: this.getRelationshipGuidance(dominantGuna),
            work_life_integration: this.getWorkLifeIntegration(dominantDosha, dominantGuna)
        };
    }

    getDailyLifestyleRoutine(dosha) {
        const routines = {
            vata: {
                wake_time: "6:00-7:00 AM (consistent timing crucial)",
                morning_routine: "Warm water, oil massage, gentle movement",
                meal_times: "Regular times - 7 AM, 12 PM, 6 PM",
                work_style: "Regular breaks, avoid multitasking",
                evening_routine: "Calming activities, warm bath, early bed",
                sleep_time: "9:30-10:00 PM"
            },
            pitta: {
                wake_time: "5:30-6:30 AM (natural early risers)",
                morning_routine: "Cool water, moderate exercise",
                meal_times: "Don't skip meals - 7 AM, 12 PM, 7 PM",
                work_style: "Focused work periods, avoid overworking",
                evening_routine: "Cooling activities, avoid heated discussions",
                sleep_time: "10:00-10:30 PM"
            },
            kapha: {
                wake_time: "5:00-6:00 AM (earlier is better)",
                morning_routine: "Energizing practices, dynamic movement",
                meal_times: "Light breakfast, main meal at noon, light dinner",
                work_style: "Variety and stimulation, avoid routine stagnation",
                evening_routine: "Social activities, gentle exercise",
                sleep_time: "10:00-11:00 PM"
            }
        };

        return routines[dosha];
    }
}

// Export the recommendation engine
window.YogaTherapyRecommendationEngine = YogaTherapyRecommendationEngine;

