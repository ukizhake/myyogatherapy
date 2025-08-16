// Comprehensive Therapeutic Protocols Database
// Specific protocols for common conditions with constitutional adaptations

const TherapeuticProtocols = {
    
    // Mental Health Conditions
    mental_health: {
        anxiety_disorders: {
            primary_approach: "Nervous system regulation through pranayama and grounding",
            constitutional_adaptations: {
                vata_anxiety: {
                    focus: "Grounding and warming practices",
                    pranayama: [
                        {
                            technique: "Anulom Vilom",
                            timing: "Morning and evening",
                            duration: "10-15 minutes",
                            ratio: "Start natural, progress to 4:4:4:4",
                            benefits: "Balances nervous system, reduces Vata agitation"
                        },
                        {
                            technique: "Sukha Purvaka",
                            timing: "When anxiety peaks",
                            duration: "5-10 minutes", 
                            ratio: "6:6 or 8:4:8:4",
                            benefits: "Immediate calming, metabolic slowing"
                        }
                    ],
                    asana_sequence: [
                        "Warm-up with joint movements",
                        "Standing poses held for stability (Tree, Mountain, Warrior)",
                        "Seated forward folds for introspection",
                        "Gentle twists for release",
                        "Supported backbends for heart opening",
                        "Long Savasana with weighted blanket"
                    ],
                    lifestyle: [
                        "Regular routine (same times daily)",
                        "Warm, cooked foods",
                        "Oil massage (Abhyanga)",
                        "Early bedtime",
                        "Limit caffeine and stimulants"
                    ]
                },
                pitta_anxiety: {
                    focus: "Cooling and softening practices",
                    pranayama: [
                        {
                            technique: "Chandra Nadi",
                            timing: "Morning and evening",
                            duration: "27 rounds",
                            ratio: "4:8 (longer exhale)",
                            benefits: "Cools system, reduces intensity"
                        },
                        {
                            technique: "Sheetali/Sitkari",
                            timing: "Midday or when overheated",
                            duration: "5-10 rounds",
                            ratio: "8:4:8:4",
                            benefits: "Immediate cooling, reduces agitation"
                        }
                    ],
                    asana_sequence: [
                        "Gentle warm-up avoiding heat buildup",
                        "Moon salutations",
                        "Forward folds for cooling",
                        "Gentle twists",
                        "Hip openers for emotional release", 
                        "Restorative poses with cooling props"
                    ],
                    lifestyle: [
                        "Cool environment",
                        "Avoid competitive situations",
                        "Cool, sweet foods",
                        "Moonlight walks",
                        "Swimming or water activities"
                    ]
                },
                kapha_anxiety: {
                    focus: "Gentle activation and movement",
                    pranayama: [
                        {
                            technique: "Gentle Bhastrika",
                            timing: "Morning",
                            duration: "20-30 rounds",
                            ratio: "Equal in:out, moderate pace",
                            benefits: "Energizes without overwhelming"
                        },
                        {
                            technique: "Surya Nadi",
                            timing: "Morning and afternoon",
                            duration: "9-27 rounds",
                            ratio: "4:8",
                            benefits: "Activates without creating heat"
                        }
                    ],
                    asana_sequence: [
                        "Dynamic warm-up",
                        "Sun salutations (3-5 rounds)",
                        "Standing flow sequence",
                        "Gentle backbends",
                        "Energizing inversions",
                        "Active relaxation"
                    ],
                    lifestyle: [
                        "Regular exercise",
                        "Social activities", 
                        "Light, spiced foods",
                        "Variety in routine",
                        "Creative expression"
                    ]
                }
            },
            progression_timeline: {
                week_1_2: "Establish basic breathing practices, gentle movement",
                week_3_4: "Introduce constitutional specific techniques",
                week_5_8: "Deepen practices, extend duration",
                month_2_3: "Integrate advanced techniques, lifestyle changes",
                month_4_6: "Maintenance practice, self-regulation mastery"
            }
        },

        depression: {
            primary_approach: "Energy activation and mood elevation through targeted practices",
            constitutional_adaptations: {
                vata_depression: {
                    focus: "Grounding with gentle activation",
                    morning_routine: [
                        "Surya Nadi 9 rounds (warming)",
                        "Gentle sun salutations",
                        "Standing poses for stability",
                        "Pranava (Om chanting) for vibration"
                    ],
                    daily_support: [
                        "Consistent routine",
                        "Nourishing foods",
                        "Social connection",
                        "Creative expression"
                    ]
                },
                pitta_depression: {
                    focus: "Balanced activation without overheating",
                    morning_routine: [
                        "Moderate Bhastrika (30 rounds)",
                        "Balanced sun salutations",
                        "Heart-opening poses",
                        "Mantra practice for mood"
                    ],
                    daily_support: [
                        "Purposeful activity",
                        "Service to others",
                        "Cooling foods",
                        "Nature connection"
                    ]
                },
                kapha_depression: {
                    focus: "Strong activation and energy building",
                    morning_routine: [
                        "Surya Nadi 27 rounds",
                        "Vigorous Bhastrika (60+ rounds)",
                        "Dynamic sun salutations (5-10 rounds)",
                        "Energizing backbends",
                        "Kapalabhati (3 rounds of 50)"
                    ],
                    daily_support: [
                        "Regular vigorous exercise",
                        "Light, stimulating foods",
                        "Social engagement",
                        "Goal-oriented activities"
                    ]
                }
            }
        }
    },

    // Cardiovascular Conditions
    cardiovascular: {
        hypertension: {
            primary_approach: "Nervous system regulation and stress reduction",
            core_protocol: {
                immediate_intervention: [
                    {
                        technique: "Sukha Pranayama",
                        frequency: "5 times daily",
                        duration: "5 rounds each",
                        mechanism: "Relaxes arterial constriction (dorso-vagal response)",
                        clinical_note: "Alternative to medical nerve ablation"
                    }
                ],
                daily_practices: [
                    {
                        technique: "Chandra Nadi",
                        timing: "Morning and evening",
                        duration: "27 rounds",
                        benefits: "Lowers sympathetic activity, reduces BP"
                    },
                    {
                        technique: "Mula Bandha",
                        frequency: "3 times daily",
                        duration: "10 contractions",
                        purpose: "Break dorso-vagal holding patterns"
                    }
                ],
                supportive_asanas: [
                    "Gentle forward folds",
                    "Supported child's pose", 
                    "Legs up the wall",
                    "Gentle twists",
                    "Extended Savasana"
                ],
                contraindications: [
                    "No inversions without supervision",
                    "Avoid breath retention",
                    "No rapid breathing techniques",
                    "Avoid competitive yoga"
                ]
            },
            lifestyle_modifications: [
                "DASH diet principles",
                "Regular gentle exercise",
                "Stress management techniques",
                "Adequate sleep (7-8 hours)",
                "Limit sodium and alcohol"
            ],
            monitoring: "Work with healthcare provider for medication adjustment"
        },

        heart_conditions: {
            post_cardiac_event: {
                phase_1_hospital: {
                    practices: [
                        "Natural breath awareness",
                        "Gentle finger/toe movements",
                        "Basic relaxation techniques"
                    ]
                },
                phase_2_early_recovery: {
                    practices: [
                        "Gentle Ujjayi breathing",
                        "Seated gentle movements",
                        "Progressive muscle relaxation",
                        "Meditation 5-10 minutes"
                    ]
                },
                phase_3_outpatient: {
                    practices: [
                        "Chandra Nadi (if approved by physician)",
                        "Gentle Hatha sequences",
                        "Heart-rate monitored asana",
                        "Stress reduction techniques"
                    ]
                }
            }
        }
    },

    // Respiratory Conditions
    respiratory: {
        asthma: {
            primary_approach: "Breath retraining and respiratory muscle strengthening",
            constitutional_adaptations: {
                vata_asthma: {
                    triggers: "Cold, dry air, anxiety, irregular routine",
                    practices: [
                        "Gentle Ujjayi (warming breath)",
                        "Anulom Vilom without retention",
                        "Humidified air practices",
                        "Stress reduction techniques"
                    ],
                    emergency_protocol: "Pursed lip breathing, calm environment"
                },
                pitta_asthma: {
                    triggers: "Heat, pollution, anger, competitive stress",
                    practices: [
                        "Chandra Nadi for cooling",
                        "Sheetali for immediate cooling",
                        "Anti-inflammatory diet",
                        "Stress management"
                    ],
                    emergency_protocol: "Cooling breath, reduce heat exposure"
                },
                kapha_asthma: {
                    triggers: "Cold, damp weather, allergens, dairy, inactivity",
                    practices: [
                        "Gentle Bhastrika for mucus clearing",
                        "Kapalabhati (when stable)",
                        "Chest-opening asanas",
                        "Regular movement"
                    ],
                    emergency_protocol: "Upright position, gentle chest expansion"
                }
            },
            contraindications: [
                "No breath retention during acute episodes",
                "Avoid rapid breathing techniques",
                "Stop if wheeze increases",
                "Always have rescue medication available"
            ]
        },

        copd: {
            primary_approach: "Breath efficiency and energy conservation",
            core_practices: [
                "Pursed lip breathing",
                "Diaphragmatic breathing training",
                "Gentle Ujjayi for breath control",
                "Energy conservation techniques"
            ],
            supportive_asanas: [
                "Supported seated poses",
                "Gentle backbends for chest opening",
                "Chair-based sequences",
                "Relaxation with oxygen support if needed"
            ]
        }
    },

    // Digestive Conditions
    digestive: {
        irritable_bowel_syndrome: {
            primary_approach: "Nervous system regulation and digestive fire balancing",
            assessment: {
                agni_type: "Determine Vishama, Tikshna, or Manda Agni",
                constitutional_factors: "Vata IBS most common",
                stress_triggers: "Identify emotional/stress patterns"
            },
            protocols_by_agni: {
                vishama_agni_vata_ibs: {
                    pranayama: [
                        "Regular Anulom Vilom for nervous system",
                        "Gentle Agni Sara before meals",
                        "Sukha Purvaka for stress"
                    ],
                    asana: [
                        "Gentle twists after meals",
                        "Forward folds for calming",
                        "Supported backbends",
                        "Knee-to-chest variations"
                    ],
                    lifestyle: [
                        "Regular meal times",
                        "Warm, cooked foods",
                        "Stress management",
                        "Adequate sleep"
                    ]
                },
                tikshna_agni_pitta_ibs: {
                    pranayama: [
                        "Chandra Nadi for cooling",
                        "Gentle Sheetali after meals",
                        "Avoid heating breaths"
                    ],
                    asana: [
                        "Cooling forward folds",
                        "Gentle twists",
                        "Avoid hot room practice",
                        "Extended Savasana"
                    ],
                    lifestyle: [
                        "Cool, sweet foods",
                        "Avoid spicy foods",
                        "Stress reduction",
                        "Cool environment"
                    ]
                }
            }
        },

        gerd_acid_reflux: {
            primary_approach: "Cooling practices and stress reduction",
            immediate_relief: [
                "Chandra Nadi 9 rounds",
                "Gentle forward fold",
                "Left side lying",
                "Cool water sipping"
            ],
            prevention_practices: [
                "Regular Sheetali practice",
                "Stress management",
                "Gentle twists before meals",
                "Proper meal timing"
            ],
            contraindications: [
                "No inversions after meals",
                "Avoid deep backbends",
                "No rapid breathing",
                "Avoid hot room practice"
            ]
        }
    },

    // Musculoskeletal Conditions
    musculoskeletal: {
        chronic_back_pain: {
            assessment_phase: {
                postural_analysis: "Identify muscular imbalances",
                movement_patterns: "Assess functional movement",
                constitutional_factors: "Determine dosha involvement",
                stress_factors: "Evaluate emotional holding patterns"
            },
            therapeutic_approach: {
                acute_phase: [
                    "Gentle breath awareness",
                    "Supported positions",
                    "Micro-movements",
                    "Relaxation techniques"
                ],
                recovery_phase: [
                    "Gentle pranayama",
                    "Therapeutic asana sequence",
                    "Core strengthening",
                    "Flexibility improvement"
                ],
                maintenance_phase: [
                    "Constitutional practices",
                    "Preventive sequences",
                    "Stress management",
                    "Lifestyle modifications"
                ]
            }
        },

        arthritis: {
            inflammatory_type: {
                approach: "Anti-inflammatory practices",
                pranayama: [
                    "Chandra Nadi for cooling",
                    "Sheetali for inflammation reduction",
                    "Gentle Ujjayi for pain management"
                ],
                asana: [
                    "Gentle range of motion",
                    "Supported poses",
                    "Water-based movements if available",
                    "Heat therapy integration"
                ]
            },
            degenerative_type: {
                approach: "Mobility maintenance and strength building",
                pranayama: [
                    "Constitutional breathing",
                    "Energizing techniques for motivation",
                    "Pain management breathing"
                ],
                asana: [
                    "Gentle weight-bearing poses",
                    "Range of motion sequences",
                    "Strength-building variations",
                    "Balance training"
                ]
            }
        }
    },

    // Women's Health
    womens_health: {
        menstrual_disorders: {
            pms_syndrome: {
                luteal_phase_practices: [
                    "Chandra Nadi for emotional balance",
                    "Gentle backbends for mood",
                    "Hip openers for physical relief",
                    "Stress reduction techniques"
                ],
                menstrual_phase_practices: [
                    "Restorative poses",
                    "Gentle forward folds",
                    "Breath practices for pain relief",
                    "Supported relaxation"
                ]
            },
            menopause_support: {
                cooling_practices: [
                    "Chandra Nadi for hot flashes",
                    "Sheetali for immediate cooling",
                    "Moon salutations",
                    "Restorative sequences"
                ],
                hormone_balancing: [
                    "Hip-opening sequences",
                    "Gentle inversions",
                    "Stress reduction",
                    "Adequate rest"
                ]
            }
        },

        pregnancy_modifications: {
            first_trimester: [
                "Gentle pranayama only",
                "Avoid breath retention",
                "Fatigue-appropriate practices",
                "Nausea management techniques"
            ],
            second_trimester: [
                "Modified standing poses",
                "Avoid supine positions",
                "Gentle prenatal sequences",
                "Pelvic floor awareness"
            ],
            third_trimester: [
                "Supported positions only",
                "Breathing for labor preparation",
                "Gentle movements",
                "Relaxation techniques"
            ]
        }
    },

    // Sleep Disorders
    sleep_disorders: {
        insomnia: {
            sleep_hygiene_yoga: {
                evening_routine: [
                    "Chandra Nadi 27 rounds (1-2 hours before bed)",
                    "Gentle yin sequence",
                    "Legs up the wall pose",
                    "Progressive relaxation"
                ],
                bedtime_practice: [
                    "Savitri with extended exhale (6:12 ratio)",
                    "Body scan relaxation",
                    "Yoga Nidra practice",
                    "Natural breath awareness"
                ]
            },
            constitutional_approaches: {
                vata_insomnia: "Grounding, warming, routine",
                pitta_insomnia: "Cooling, releasing, surrendering", 
                kapha_insomnia: "Gentle activation earlier, complete rest later"
            }
        },

        sleep_apnea: {
            supportive_practices: [
                "Tongue and throat exercises",
                "Gentle neck stretches",
                "Weight management support",
                "Stress reduction techniques"
            ],
            contraindications: [
                "No supine pranayama",
                "Avoid breath retention",
                "Medical supervision required"
            ]
        }
    },

    // Addiction Recovery
    addiction_recovery: {
        substance_recovery: {
            detox_support: [
                "Gentle breathing for anxiety",
                "Supported restorative poses",
                "Nervous system calming",
                "Basic relaxation techniques"
            ],
            early_recovery: [
                "Stress management techniques",
                "Community-based practice",
                "Emotional regulation practices",
                "Physical healing support"
            ],
            long_term_recovery: [
                "Constitutional practices",
                "Spiritual development",
                "Service-oriented practice",
                "Life purpose exploration"
            ]
        },

        behavioral_addictions: {
            assessment: "Identify underlying dosha/guna imbalances",
            substitute_practices: "Healthy alternatives to addictive behaviors",
            community_support: "Group practice and accountability"
        }
    }
};

// Progressive Development Framework
const ProgressiveDevelopment = {
    
    beginners_pathway: {
        month_1: {
            week_1: {
                focus: "Breath awareness foundation",
                daily_practice: "10 minutes",
                techniques: ["Natural breath observation", "Simple counting breath"],
                goals: "Establish consistency"
            },
            week_2: {
                focus: "Basic breath control",
                daily_practice: "15 minutes", 
                techniques: ["4:4 breathing", "Gentle Ujjayi introduction"],
                goals: "Develop breath awareness"
            },
            week_3: {
                focus: "Introduction to retention",
                daily_practice: "15 minutes",
                techniques: ["4:2:4 breathing", "Brief comfortable retention"],
                goals: "Build lung capacity safely"
            },
            week_4: {
                focus: "Constitutional breathing introduction",
                daily_practice: "20 minutes",
                techniques: ["Simple Anulom Vilom", "Constitutional assessment"],
                goals: "Understand individual needs"
            }
        },
        
        month_2: {
            focus: "Building foundation practices",
            weekly_progression: "Gradually increase duration and complexity",
            techniques: ["Extended Anulom Vilom", "Basic Savitri", "Ujjayi mastery"],
            integration: "Combine with gentle asana practice"
        },
        
        month_3: {
            focus: "Constitutional specialization",
            approach: "Focus on dosha-specific techniques",
            techniques: ["Surya/Chandra Nadi", "Constitutional ratios", "Therapeutic applications"],
            goals: "Develop personal practice"
        }
    },
    
    intermediate_pathway: {
        months_1_3: {
            focus: "Technique mastery and therapeutic applications",
            advanced_techniques: ["Complex ratios", "Extended retention", "Bandha integration"],
            therapeutic_training: "Learn condition-specific protocols",
            goals: "Develop teaching capability"
        },
        
        months_4_6: {
            focus: "Advanced practice and specialization",
            techniques: ["Pancha Bhuta pranayamas", "Advanced kumbhaka", "Spontaneous breath"],
            specialization: "Choose area of focus (therapeutic, spiritual, teaching)",
            goals: "Develop expertise"
        }
    },
    
    advanced_pathway: {
        ongoing_development: {
            personal_practice: "2+ hours daily",
            service: "Teaching and serving others",
            study: "Continuous learning and refinement",
            specializations: ["Therapy", "Meditation", "Teacher training", "Research"]
        }
    }
};

// Integration functions
const TherapeuticIntegration = {
    
    createCustomProtocol(assessment, condition) {
        const baseProtocol = TherapeuticProtocols[condition.category][condition.specific];
        const constitutional = assessment.dominantDosha;
        const mental = assessment.dominantGuna;
        
        return this.adaptProtocolForConstitution(baseProtocol, constitutional, mental);
    },
    
    adaptProtocolForConstitution(protocol, dosha, guna) {
        // Apply constitutional modifications to base protocol
        if (protocol.constitutional_adaptations && protocol.constitutional_adaptations[`${dosha}_${protocol.name}`]) {
            return {
                ...protocol,
                ...protocol.constitutional_adaptations[`${dosha}_${protocol.name}`]
            };
        }
        
        return protocol;
    },
    
    getProgressionPlan(currentLevel, goals, timeframe) {
        const developmentPath = ProgressiveDevelopment[`${currentLevel}_pathway`];
        return this.customizeProgression(developmentPath, goals, timeframe);
    },
    
    customizeProgression(basePath, goals, timeframe) {
        // Customize progression based on individual goals and available time
        return {
            ...basePath,
            customizations: this.applyGoalSpecificModifications(basePath, goals),
            timeline: this.adjustForTimeframe(basePath, timeframe)
        };
    }
};

// Export modules
window.TherapeuticProtocols = TherapeuticProtocols;
window.ProgressiveDevelopment = ProgressiveDevelopment;
window.TherapeuticIntegration = TherapeuticIntegration;

