// Enhanced Therapeutic Advice Engine with Ollama Integration
class EnhancedTherapeuticAdviceEngine {
    constructor() {
        this.originalEngine = new TherapeuticAdviceEngine();
        this.ollama = new OllamaIntegration();
        this.asanaEngine = new TherapeuticAsanaEngine();
        this.useAI = false;
        this.aiEnabled = false;
        this.initializeAI();
    }

    // Initialize AI capabilities
    async initializeAI() {
        try {
            this.aiEnabled = await this.ollama.checkAvailability();
            if (this.aiEnabled) {
                console.log('🤖 AI-enhanced advice available');
                this.showAIToggle();
            } else {
                console.log('📚 Using rule-based advice system');
            }
        } catch (error) {
            console.log('📚 AI not available, using rule-based system');
        }
    }

    // Show AI toggle in the UI
    showAIToggle() {
        const adviceSection = document.querySelector('.condition-input-section');
        if (adviceSection) {
            const aiToggle = document.createElement('div');
            aiToggle.className = 'ai-toggle-section';
            aiToggle.innerHTML = `
                <div class="input-group">
                    <label class="ai-toggle-label">
                        <input type="checkbox" id="ai-toggle" ${this.useAI ? 'checked' : ''}>
                        <span class="toggle-slider"></span>
                        🤖 Enable AI-Enhanced Advice
                    </label>
                    <small class="ai-status">${this.aiEnabled ? 'AI Available' : 'AI Unavailable'}</small>
                </div>
            `;
            
            // Add styles
            const style = document.createElement('style');
            style.textContent = `
                .ai-toggle-section {
                    margin: 15px 0;
                    padding: 15px;
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    border-radius: 10px;
                    color: white;
                }
                .ai-toggle-label {
                    display: flex;
                    align-items: center;
                    cursor: pointer;
                    font-weight: 600;
                }
                .ai-toggle-label input[type="checkbox"] {
                    display: none;
                }
                .toggle-slider {
                    width: 50px;
                    height: 24px;
                    background: rgba(255,255,255,0.3);
                    border-radius: 12px;
                    margin-right: 10px;
                    position: relative;
                    transition: 0.3s;
                }
                .toggle-slider:before {
                    content: '';
                    position: absolute;
                    width: 20px;
                    height: 20px;
                    background: white;
                    border-radius: 50%;
                    top: 2px;
                    left: 2px;
                    transition: 0.3s;
                }
                .ai-toggle-label input:checked + .toggle-slider {
                    background: #00b894;
                }
                .ai-toggle-label input:checked + .toggle-slider:before {
                    transform: translateX(26px);
                }
                .ai-status {
                    display: block;
                    margin-top: 5px;
                    opacity: 0.8;
                    font-size: 12px;
                }
                .ai-loading {
                    display: inline-block;
                    margin-left: 10px;
                    animation: spin 1s linear infinite;
                }
                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
            `;
            document.head.appendChild(style);
            
            adviceSection.appendChild(aiToggle);
            
            // Add event listener
            document.getElementById('ai-toggle').addEventListener('change', (e) => {
                this.useAI = e.target.checked;
                console.log(`AI advice ${this.useAI ? 'enabled' : 'disabled'}`);
            });
        }
    }

    // Set user's constitutional assessment results
    setConstitution(doshaResults, gunaResults) {
        this.originalEngine.setConstitution(doshaResults, gunaResults);
    }

    // Generate comprehensive advice with AI enhancement
    async generateAdvice(condition, severity, experienceLevel, customDescription = '') {
        if (!this.originalEngine.currentDoshaResults || !this.originalEngine.currentGunaResults) {
            throw new Error('Please complete the constitutional assessment first');
        }

        // Check premium status
        const premiumManager = window.premiumManager || new PremiumManager();
        
        // Check if condition is available in free tier
        if (!premiumManager.hasPremium() && !premiumManager.isConditionFree(condition)) {
            premiumManager.showUpgradePrompt('advancedConditions');
            throw new Error('This condition requires premium access');
        }

        // Check if AI advice is available
        const canUseAI = this.useAI && this.aiEnabled && premiumManager.hasFeature('aiAdvice');
        
        // Show loading indicator if using AI
        if (canUseAI) {
            this.showAILoading();
        }

        try {
            let advice;
            
            if (canUseAI) {
                // Use AI-enhanced advice (premium feature)
                advice = await this.generateAIAdvice(condition, severity, experienceLevel, customDescription);
            } else {
                // Use rule-based advice
                advice = this.originalEngine.generateAdvice(condition, severity, experienceLevel, customDescription);
                
                // Add premium upsell note for free users
                if (!premiumManager.hasPremium()) {
                    advice.premiumNote = {
                        message: "🌟 Get AI-enhanced personalized advice with Premium",
                        features: ["Dynamic recommendations", "Custom analysis", "Advanced insights"],
                        action: "upgrade"
                    };
                }
            }

            this.hideAILoading();
            // Enhance with asana recommendations
            advice.asanaSequence = await this.generateAsanaSequence(condition, severity, experienceLevel, customDescription);
            
            return advice;
        } catch (error) {
            this.hideAILoading();
            console.error('Error generating advice:', error);
            
            // Fallback to rule-based system
            console.log('Falling back to rule-based advice');
            const fallbackAdvice = this.originalEngine.generateAdvice(condition, severity, experienceLevel, customDescription);
            
            // Still add asana recommendations to fallback
            fallbackAdvice.asanaSequence = await this.generateAsanaSequence(condition, severity, experienceLevel, customDescription);
            
            return fallbackAdvice;
        }
    }

    // Generate comprehensive asana sequence
    async generateAsanaSequence(condition, severity, experienceLevel, customDescription) {
        const dominantDosha = this.originalEngine.currentDoshaResults.dominantDosha;
        
        // Get therapeutic asana sequence
        const therapeuticSequence = this.asanaEngine.createTherapeuticSequence(
            condition, 
            dominantDosha, 
            experienceLevel, 
            severity
        );

        // Get specific asanas for the condition
        const conditionAsanas = this.asanaEngine.getAsanasForCondition(
            condition, 
            dominantDosha, 
            severity
        );

        return {
            primary: conditionAsanas.slice(0, 3), // Top 3 most relevant
            sequence: therapeuticSequence,
            doshaSpecific: this.asanaEngine.getAsanasByDosha(dominantDosha, 2),
            restorative: this.asanaEngine.getRestorativeAsanas(2),
            practiceGuidance: {
                duration: therapeuticSequence.totalDuration,
                instructions: therapeuticSequence.instructions,
                modifications: therapeuticSequence.modifications,
                integration: this.getAsanaPranayamaIntegration(condition, dominantDosha)
            }
        };
    }

    // Integrate asanas with pranayama recommendations
    getAsanaPranayamaIntegration(condition, dominantDosha) {
        const integrationMap = {
            anxiety: {
                sequence: "Begin with 5 minutes of Nadi Shodhana → Practice gentle asanas → End with Bhramari pranayama",
                timing: "Pranayama before asanas calms the nervous system, pranayama after integrates the benefits",
                breath_in_poses: "Maintain slow, deep ujjayi breathing throughout asana practice"
            },
            back_pain: {
                sequence: "Start with gentle breath awareness → Cat-cow with breath → Twists with pranayama → Final relaxation",
                timing: "Breath awareness prepares the spine, coordinated movement with breath prevents strain",
                breath_in_poses: "Inhale to lengthen spine, exhale to deepen poses safely"
            },
            insomnia: {
                sequence: "Evening practice: Gentle asanas → Progressive relaxation → Extended pranayama → Rest",
                timing: "Physical release first, then nervous system calming through breath",
                breath_in_poses: "Focus on extended exhalations to activate parasympathetic nervous system"
            },
            digestive_issues: {
                sequence: "Warm-up breathing → Twisting poses → Belly massage → Kapalabhati pranayama",
                timing: "Gentle movement stimulates digestion, specific breathing techniques enhance gastric fire",
                breath_in_poses: "Breathe into belly during poses to massage internal organs"
            },
            stress: {
                sequence: "Stress-relief breathing → Gentle flow → Heart-opening poses → Extended savasana with pranayama",
                timing: "Multi-layered approach: immediate relief, physical release, emotional opening, deep integration",
                breath_in_poses: "Let breath be your anchor throughout the practice"
            }
        };

        return integrationMap[condition] || {
            sequence: "Combine breath awareness with gentle movement for holistic healing",
            timing: "Pranayama and asanas work together to balance body, mind, and spirit",
            breath_in_poses: "Maintain conscious breathing throughout your practice"
        };
    }

    // Generate AI-enhanced advice
    async generateAIAdvice(condition, severity, experienceLevel, customDescription) {
        const context = {
            condition,
            severity,
            experienceLevel,
            customDescription,
            doshaResults: this.originalEngine.currentDoshaResults,
            gunaResults: this.originalEngine.currentGunaResults
        };

        const aiResponse = await this.ollama.generateYogaAdvice(context);
        
        // Combine AI response with rule-based structure
        return {
            condition: this.originalEngine.getConditionInfo(condition, customDescription),
            constitutionalContext: {
                dominantDosha: this.originalEngine.currentDoshaResults.dominantDosha,
                dominantGuna: this.originalEngine.currentGunaResults.dominantGuna,
                doshaAnalysis: aiResponse.constitutional_analysis || "AI-generated constitutional analysis",
                gunaAnalysis: "AI-enhanced guna analysis",
                constitutionalRelevance: "AI-analyzed relevance"
            },
            specificRecommendations: {
                pranayama: aiResponse.pranayama_recommendations || [],
                asana: aiResponse.asana_recommendations || [],
                meditation: [aiResponse.meditation_guidance || "AI-generated meditation guidance"],
                immediateRelief: aiResponse.immediate_relief || []
            },
            practiceProtocol: {
                duration: aiResponse.daily_practice?.duration || "15-30 minutes",
                frequency: aiResponse.daily_practice?.frequency || "Daily",
                structure: aiResponse.daily_practice?.techniques || [],
                progressionPlan: aiResponse.progression_plan || "AI-generated progression plan",
                adaptations: []
            },
            lifestyleAdjustments: aiResponse.lifestyle_adjustments || [],
            precautions: aiResponse.precautions || [],
            severity,
            experienceLevel,
            source: 'ai_enhanced',
            aiModel: this.ollama.model,
            timestamp: new Date().toISOString()
        };
    }

    // Show AI loading indicator
    showAILoading() {
        const button = document.querySelector('button[onclick="generateAdvice()"]');
        if (button) {
            button.innerHTML = '🤖 Generating AI Advice... <span class="ai-loading">⚡</span>';
            button.disabled = true;
        }
    }

    // Hide AI loading indicator
    hideAILoading() {
        const button = document.querySelector('button[onclick="generateAdvice()"]');
        if (button) {
            button.innerHTML = 'Get Personalized Advice';
            button.disabled = false;
        }
    }

    // Get AI model information
    async getAIModelInfo() {
        if (this.aiEnabled) {
            try {
                return await this.ollama.getModelInfo();
            } catch (error) {
                console.error('Error getting model info:', error);
                return null;
            }
        }
        return null;
    }

    // Get available AI models
    async getAvailableModels() {
        if (this.aiEnabled) {
            return await this.ollama.getAvailableModels();
        }
        return [];
    }

    // Set AI model
    setAIModel(modelName) {
        if (this.aiEnabled) {
            this.ollama.setModel(modelName);
        }
    }

    // Health check for AI
    async checkAIHealth() {
        if (this.aiEnabled) {
            return await this.ollama.healthCheck();
        }
        return { available: false, error: 'AI not enabled' };
    }

    // Generate enhanced pranayama advice
    async generateEnhancedPranayamaAdvice(doshaType, condition, experienceLevel) {
        if (this.useAI && this.aiEnabled) {
            try {
                return await this.ollama.generatePranayamaAdvice(doshaType, condition, experienceLevel);
            } catch (error) {
                console.error('Error generating enhanced pranayama advice:', error);
                // Fallback to original method
            }
        }
        
        // Use original pranayama recommendations
        return this.originalEngine.getPranayamaForCondition(
            { name: condition, category: 'general' },
            doshaType,
            'moderate',
            experienceLevel
        );
    }

    // Generate enhanced meditation guidance
    async generateEnhancedMeditationGuidance(gunaType, condition, experienceLevel) {
        if (this.useAI && this.aiEnabled) {
            try {
                return await this.ollama.generateMeditationGuidance(gunaType, condition, experienceLevel);
            } catch (error) {
                console.error('Error generating enhanced meditation guidance:', error);
                // Fallback to original method
            }
        }
        
        // Use original meditation recommendations
        return this.originalEngine.getMeditationForCondition(
            { name: condition, category: 'general' },
            gunaType,
            experienceLevel
        );
    }

    // Get advice source information
    getAdviceSource() {
        if (this.useAI && this.aiEnabled) {
            return {
                type: 'ai_enhanced',
                model: this.ollama.model,
                provider: 'Ollama',
                features: ['Constitutional Analysis', 'Personalized Recommendations', 'Dynamic Content']
            };
        } else {
            return {
                type: 'rule_based',
                provider: 'Traditional Yoga Therapy',
                features: ['Proven Techniques', 'Structured Protocols', 'Safety-First Approach']
            };
        }
    }
}

// Export for use in main application
window.EnhancedTherapeuticAdviceEngine = EnhancedTherapeuticAdviceEngine;
