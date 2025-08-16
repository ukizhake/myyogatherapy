// Practical Implementation Integration
// Connects recommendation engine with existing yoga therapy system

class PracticalYogaTherapy {
    constructor() {
        this.recommendationEngine = new YogaTherapyRecommendationEngine();
        this.initializeSystem();
    }

    initializeSystem() {
        // Integration with existing assessment results
        this.setupRecommendationDisplay();
        this.createProgressTracker();
        this.setupPracticeLibrary();
    }

    // Generate comprehensive recommendations based on existing assessment
    generatePersonalizedPlan(doshaResults, gunaResults, additionalInfo = {}) {
        const assessment = {
            dominantDosha: doshaResults.dominantDosha,
            dominantGuna: gunaResults.dominantGuna,
            doshaPercentages: doshaResults.percentages,
            gunaPercentages: gunaResults.percentages,
            currentConditions: additionalInfo.conditions || [],
            practiceLevel: additionalInfo.level || 'beginner',
            availableTime: additionalInfo.timeAvailable || 'short_practice',
            specificGoals: additionalInfo.goals || ['general_health'],
            kleshaPatterns: additionalInfo.kleshas || {}
        };

        const recommendations = this.recommendationEngine.generateRecommendations(assessment);
        return this.formatRecommendationsForDisplay(recommendations, assessment);
    }

    formatRecommendationsForDisplay(recommendations, assessment) {
        return {
            personal_overview: this.createPersonalOverview(assessment),
            immediate_start: this.createImmediateStart(recommendations.immediate_practices),
            daily_routine: this.formatDailyRoutine(recommendations.daily_routine),
            therapeutic_focus: this.formatTherapeuticProtocols(recommendations.therapeutic_protocols),
            progressive_plan: this.formatProgressivePlan(recommendations.progressive_development),
            lifestyle_integration: this.formatLifestyleGuidance(recommendations.lifestyle_integration),
            practice_library: this.createPracticeLibrary(recommendations),
            progress_tracking: this.createProgressTracker(assessment)
        };
    }

    createPersonalOverview(assessment) {
        return {
            title: "Your Personalized Yoga Therapy Plan",
            constitution_summary: `Your dominant dosha is ${assessment.dominantDosha.charAt(0).toUpperCase() + assessment.dominantDosha.slice(1)} (${assessment.doshaPercentages[assessment.dominantDosha]}%) with ${assessment.dominantGuna.charAt(0).toUpperCase() + assessment.dominantGuna.slice(1)} mental qualities (${assessment.gunaPercentages[assessment.dominantGuna]}%).`,
            key_focus_areas: this.getKeyFocusAreas(assessment),
            practice_approach: this.getPracticeApproach(assessment.dominantDosha, assessment.dominantGuna),
            safety_guidelines: this.getSafetyGuidelines(assessment)
        };
    }

    getKeyFocusAreas(assessment) {
        const areas = [];
        
        if (assessment.dominantDosha === 'vata') {
            areas.push("Grounding and stability");
            areas.push("Nervous system calming");
            areas.push("Regular routine establishment");
        } else if (assessment.dominantDosha === 'pitta') {
            areas.push("Cooling and balancing");
            areas.push("Stress management");
            areas.push("Emotional regulation");
        } else if (assessment.dominantDosha === 'kapha') {
            areas.push("Energy activation");
            areas.push("Metabolic stimulation"); 
            areas.push("Movement and variety");
        }

        if (assessment.dominantGuna === 'rajas') {
            areas.push("Calming mental activity");
        } else if (assessment.dominantGuna === 'tamas') {
            areas.push("Gentle activation");
        } else if (assessment.dominantGuna === 'sattva') {
            areas.push("Maintaining balance");
        }

        return areas;
    }

    createImmediateStart(immediatePractices) {
        return {
            title: "Start Here - Your First Practices",
            morning_practice: {
                duration: "5-10 minutes",
                sequence: [
                    {
                        step: 1,
                        practice: "Centering",
                        instruction: "Sit comfortably and take 3 deep breaths",
                        duration: "1 minute"
                    },
                    {
                        step: 2,
                        practice: immediatePractices.pranayama[0]?.technique || "Natural Breath Awareness",
                        instruction: this.getDetailedInstructions(immediatePractices.pranayama[0]?.technique),
                        duration: immediatePractices.pranayama[0]?.duration || "3-5 minutes"
                    },
                    {
                        step: 3,
                        practice: "Gentle Movement",
                        instruction: this.getMovementInstructions(immediatePractices.asana[0]),
                        duration: "3-5 minutes"
                    },
                    {
                        step: 4,
                        practice: "Integration",
                        instruction: "Sit quietly and observe the effects",
                        duration: "1-2 minutes"
                    }
                ]
            },
            emergency_techniques: this.formatEmergencyTechniques(immediatePractices.immediate_relief)
        };
    }

    getDetailedInstructions(technique) {
        const instructions = {
            "Anulom Vilom (Alternate Nostril)": [
                "Use right hand in Vishnu mudra (fold index and middle fingers)",
                "Close right nostril with thumb, inhale through left",
                "Close both nostrils briefly",
                "Release thumb, exhale through right nostril",
                "Inhale through right nostril",
                "Close both nostrils briefly", 
                "Release ring finger, exhale through left nostril",
                "This completes one round"
            ],
            "Chandra Nadi (Left Nostril)": [
                "Close right nostril with thumb",
                "Inhale slowly and deeply through left nostril",
                "Hold briefly if comfortable",
                "Exhale through left nostril",
                "Keep right nostril closed throughout"
            ],
            "Surya Nadi (Right Nostril)": [
                "Close left nostril with ring finger",
                "Inhale slowly and deeply through right nostril", 
                "Hold briefly if comfortable",
                "Exhale through right nostril",
                "Keep left nostril closed throughout"
            ],
            "Sukha Pranayama": [
                "Breathe naturally through both nostrils",
                "Count inhale to comfortable number (start with 4)",
                "Count exhale to same number (or longer)",
                "Focus on smooth, even breath",
                "No strain or force"
            ]
        };

        return instructions[technique] || ["Focus on natural, comfortable breathing"];
    }

    formatDailyRoutine(dailyRoutine) {
        return {
            title: "Your Daily Practice Routine",
            morning_sequence: this.formatRoutineSection(dailyRoutine.morning, "Morning"),
            evening_sequence: this.formatRoutineSection(dailyRoutine.evening, "Evening"),
            integration_tips: [
                "Start with shorter durations and gradually increase",
                "Consistency is more important than duration",
                "Listen to your body and adjust as needed",
                "Practice at the same time daily when possible"
            ]
        };
    }

    formatRoutineSection(routine, timeOfDay) {
        if (!routine) return null;

        return {
            title: `${timeOfDay} Practice`,
            total_duration: this.calculateTotalDuration(routine),
            sections: Object.keys(routine).map(key => ({
                name: this.formatSectionName(key),
                content: routine[key],
                instructions: this.getInstructionsForSection(key, routine[key])
            }))
        };
    }

    formatTherapeuticProtocols(therapeuticProtocols) {
        if (!therapeuticProtocols || Object.keys(therapeuticProtocols).length === 0) {
            return {
                title: "Therapeutic Focus",
                message: "No specific therapeutic protocols needed at this time. Focus on constitutional balancing practices."
            };
        }

        return {
            title: "Therapeutic Protocols for Your Specific Needs",
            protocols: Object.keys(therapeuticProtocols).map(condition => ({
                condition: condition.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
                protocol: this.formatSingleProtocol(therapeuticProtocols[condition])
            }))
        };
    }

    formatSingleProtocol(protocol) {
        return {
            primary_techniques: protocol.primary_pranayama || [],
            supporting_practices: protocol.supporting_practices || [],
            lifestyle_recommendations: protocol.lifestyle || [],
            progression_timeline: protocol.progression || "Progress gradually over 4-6 weeks",
            contraindications: protocol.contraindications || [],
            additional_notes: protocol.additional_notes || ""
        };
    }

    formatProgressivePlan(progressiveDevelopment) {
        if (!progressiveDevelopment) return null;

        const currentPhase = Object.keys(progressiveDevelopment)[0];
        const phaseContent = progressiveDevelopment[currentPhase];

        return {
            title: "Your Progressive Development Plan",
            current_phase: {
                name: currentPhase.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
                focus: phaseContent.focus,
                duration: this.getPhaseDuration(currentPhase),
                goals: this.getPhaseGoals(phaseContent)
            },
            weekly_progression: this.formatWeeklyProgression(phaseContent),
            next_steps: this.getNextSteps(progressiveDevelopment),
            milestones: this.createMilestones(progressiveDevelopment)
        };
    }

    createPracticeLibrary(recommendations) {
        return {
            title: "Your Personal Practice Library",
            pranayama_techniques: this.createPranayamaLibrary(recommendations),
            asana_sequences: this.createAsanaLibrary(recommendations),
            meditation_practices: this.createMeditationLibrary(recommendations),
            quick_references: this.createQuickReferences(recommendations)
        };
    }

    createPranayamaLibrary(recommendations) {
        const techniques = [];
        
        // Extract all recommended pranayama techniques
        if (recommendations.immediate_practices?.pranayama) {
            techniques.push(...recommendations.immediate_practices.pranayama);
        }
        
        if (recommendations.constitutional_balancing?.daily_pranayama) {
            const dailyPranayama = recommendations.constitutional_balancing.daily_pranayama;
            Object.keys(dailyPranayama).forEach(timeOfDay => {
                techniques.push({
                    technique: dailyPranayama[timeOfDay],
                    timing: timeOfDay,
                    purpose: `Constitutional balancing for ${timeOfDay}`
                });
            });
        }

        return techniques.map(technique => ({
            name: technique.technique || technique,
            instructions: this.getDetailedInstructions(technique.technique || technique),
            benefits: this.getTechniqueBenefits(technique.technique || technique),
            timing: technique.timing || "Anytime",
            duration: technique.duration || "5-10 minutes",
            contraindications: this.getTechniqueContraindications(technique.technique || technique)
        }));
    }

    getTechniqueBenefits(technique) {
        const benefits = {
            "Anulom Vilom": ["Balances nervous system", "Calms anxiety", "Improves concentration", "Balances left-right brain hemispheres"],
            "Chandra Nadi": ["Cooling effect", "Reduces stress", "Lowers blood pressure", "Calms Pitta dosha"],
            "Surya Nadi": ["Energizing effect", "Increases metabolism", "Combats depression", "Activates Kapha dosha"],
            "Sukha Pranayama": ["Immediate stress relief", "Slows metabolism", "Activates rest response", "Improves sleep"],
            "Bhastrika": ["Energizes the body", "Improves circulation", "Removes fatigue", "Enhances lung capacity"],
            "Ujjayi": ["Calms nervous system", "Improves concentration", "Generates internal heat", "Enhances endurance"]
        };

        return benefits[technique] || ["Promotes general well-being", "Balances energy", "Calms the mind"];
    }

    createProgressTracker(assessment) {
        return {
            title: "Track Your Progress",
            weekly_checklist: this.createWeeklyChecklist(assessment),
            progress_markers: this.createProgressMarkers(assessment),
            monthly_review: this.createMonthlyReview(),
            adjustment_guidelines: this.createAdjustmentGuidelines()
        };
    }

    createWeeklyChecklist(assessment) {
        return {
            daily_practices: [
                { practice: "Morning pranayama", target: "Daily", tracking: "✓/✗" },
                { practice: "Constitutional balancing", target: "Daily", tracking: "✓/✗" },
                { practice: "Evening relaxation", target: "Daily", tracking: "✓/✗" },
                { practice: "Therapeutic protocols", target: "As needed", tracking: "✓/✗" }
            ],
            weekly_goals: [
                { goal: "Consistent practice timing", tracking: "Days achieved: ___/7" },
                { goal: "Comfort with techniques", tracking: "Rate 1-10: ___" },
                { goal: "Overall well-being", tracking: "Rate 1-10: ___" }
            ]
        };
    }

    // Helper methods for formatting and organization
    formatSectionName(key) {
        return key.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    }

    calculateTotalDuration(routine) {
        // Simple estimation - would be more sophisticated in real implementation
        return "20-30 minutes";
    }

    getInstructionsForSection(section, content) {
        const instructions = {
            centering: "Find a comfortable seated position and focus on your breath",
            pranayama: "Follow the specific breathing technique instructions",
            asana: "Move mindfully with breath awareness",
            meditation: "Sit quietly and observe without judgment",
            relaxation: "Allow complete rest and letting go"
        };

        return instructions[section] || "Practice with awareness and compassion";
    }

    // Integration with existing UI
    displayRecommendations(recommendations) {
        // This would integrate with the existing results display
        const container = document.getElementById('therapy-recommendations');
        if (container) {
            container.innerHTML = this.generateRecommendationsHTML(recommendations);
        }
    }

    generateRecommendationsHTML(recommendations) {
        return `
            <div class="personalized-recommendations">
                <h3>${recommendations.personal_overview.title}</h3>
                
                <div class="constitution-summary">
                    <p>${recommendations.personal_overview.constitution_summary}</p>
                    <div class="key-focus-areas">
                        <h4>Your Key Focus Areas:</h4>
                        <ul>
                            ${recommendations.personal_overview.key_focus_areas.map(area => `<li>${area}</li>`).join('')}
                        </ul>
                    </div>
                </div>

                <div class="immediate-start">
                    <h4>${recommendations.immediate_start.title}</h4>
                    <div class="morning-practice">
                        <h5>Your First Practice (${recommendations.immediate_start.morning_practice.duration}):</h5>
                        <ol>
                            ${recommendations.immediate_start.morning_practice.sequence.map(step => 
                                `<li><strong>${step.practice}</strong> (${step.duration}): ${Array.isArray(step.instruction) ? step.instruction.join(', ') : step.instruction}</li>`
                            ).join('')}
                        </ol>
                    </div>
                </div>

                <div class="practice-library">
                    <h4>Your Practice Library</h4>
                    <div class="pranayama-techniques">
                        <h5>Pranayama Techniques:</h5>
                        ${recommendations.practice_library.pranayama_techniques.map(technique => `
                            <div class="technique-card">
                                <h6>${technique.name}</h6>
                                <p><strong>Benefits:</strong> ${technique.benefits.join(', ')}</p>
                                <p><strong>Duration:</strong> ${technique.duration}</p>
                                <p><strong>Best Time:</strong> ${technique.timing}</p>
                                <details>
                                    <summary>Instructions</summary>
                                    <ol>
                                        ${technique.instructions.map(instruction => `<li>${instruction}</li>`).join('')}
                                    </ol>
                                </details>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <div class="progress-tracking">
                    <h4>Track Your Progress</h4>
                    <div class="weekly-checklist">
                        <h5>Weekly Practice Checklist:</h5>
                        <div class="checklist-items">
                            ${recommendations.progress_tracking.weekly_checklist.daily_practices.map(item => `
                                <div class="checklist-item">
                                    <span>${item.practice}</span>
                                    <span>${item.target}</span>
                                    <span>${item.tracking}</span>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>

                ${recommendations.therapeutic_focus.protocols ? `
                    <div class="therapeutic-protocols">
                        <h4>${recommendations.therapeutic_focus.title}</h4>
                        ${recommendations.therapeutic_focus.protocols.map(protocol => `
                            <div class="protocol-card">
                                <h5>${protocol.condition}</h5>
                                <div class="protocol-details">
                                    <h6>Primary Techniques:</h6>
                                    <ul>
                                        ${protocol.protocol.primary_techniques.map(technique => `
                                            <li><strong>${technique.technique}</strong> - ${technique.duration} (${technique.notes})</li>
                                        `).join('')}
                                    </ul>
                                    ${protocol.protocol.contraindications.length > 0 ? `
                                        <h6>Important Safety Notes:</h6>
                                        <ul>
                                            ${protocol.protocol.contraindications.map(note => `<li>${note}</li>`).join('')}
                                        </ul>
                                    ` : ''}
                                </div>
                            </div>
                        `).join('')}
                    </div>
                ` : ''}

                <div class="disclaimer">
                    <p><strong>Remember:</strong> This is your personalized plan. Listen to your body, start gently, and progress at your own pace. Consult healthcare providers for any medical conditions.</p>
                </div>
            </div>
        `;
    }
}

// Export for use in main application
window.PracticalYogaTherapy = PracticalYogaTherapy;

