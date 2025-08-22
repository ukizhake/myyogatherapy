// Ollama Integration for Yoga Therapy
class OllamaIntegration {
    constructor() {
        this.baseUrl = 'http://localhost:11434'; // Default Ollama server URL
        this.model = 'llama3.2:latest'; // Default model - fast and private
        this.isAvailable = false;
        this.checkAvailability();
    }

    // Check if Ollama is available
    async checkAvailability() {
        try {
            const response = await fetch(`${this.baseUrl}/api/tags`);
            if (response.ok) {
                this.isAvailable = true;
                console.log('✅ Ollama is available');
                return true;
            }
        } catch (error) {
            console.log('❌ Ollama not available:', error.message);
            this.isAvailable = false;
        }
        return false;
    }

    // Get available models
    async getAvailableModels() {
        try {
            const response = await fetch(`${this.baseUrl}/api/tags`);
            const data = await response.json();
            return data.models || [];
        } catch (error) {
            console.error('Error fetching models:', error);
            return [];
        }
    }

    // Set the model to use
    setModel(modelName) {
        this.model = modelName;
        console.log(`Model set to: ${modelName}`);
    }

    // Set custom Ollama server URL
    setServerUrl(url) {
        this.baseUrl = url;
        console.log(`Ollama server URL set to: ${url}`);
    }

    // Generate yoga therapy advice using Ollama
    async generateYogaAdvice(context) {
        if (!this.isAvailable) {
            throw new Error('Ollama is not available. Please ensure Ollama is running.');
        }

        const prompt = this.buildYogaPrompt(context);
        
        try {
            const response = await fetch(`${this.baseUrl}/api/generate`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    model: this.model,
                    prompt: prompt,
                    stream: false,
                    options: {
                        temperature: 0.7,
                        top_p: 0.9,
                        max_tokens: 1000
                    }
                })
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            return this.parseYogaResponse(data.response, context);
        } catch (error) {
            console.error('Error generating advice:', error);
            throw error;
        }
    }

    // Build comprehensive prompt for yoga therapy advice
    buildYogaPrompt(context) {
        const {
            condition,
            severity,
            experienceLevel,
            doshaResults,
            gunaResults,
            customDescription
        } = context;

        return `You are an expert yoga therapist with deep knowledge of Ayurveda, traditional yoga practices, and modern therapeutic applications. 

Please provide personalized yoga therapy advice for the following situation:

**Patient Profile:**
- Dominant Dosha: ${doshaResults?.dominantDosha || 'Not specified'}
- Dosha Scores: Vata: ${doshaResults?.scores?.vata || 0}, Pitta: ${doshaResults?.scores?.pitta || 0}, Kapha: ${doshaResults?.scores?.kapha || 0}
- Dominant Guna: ${gunaResults?.dominantGuna || 'Not specified'}
- Guna Scores: Sattva: ${gunaResults?.scores?.sattva || 0}, Rajas: ${gunaResults?.scores?.rajas || 0}, Tamas: ${gunaResults?.scores?.tamas || 0}

**Condition:**
- Primary Concern: ${condition}
- Severity: ${severity}
- Experience Level: ${experienceLevel}
- Custom Description: ${customDescription || 'N/A'}

**Please provide advice in the following JSON format:**
{
  "constitutional_analysis": "Brief analysis of how the condition relates to their dosha and guna constitution",
  "immediate_relief": ["3-5 immediate techniques for relief"],
  "daily_practice": {
    "duration": "Recommended practice duration",
    "frequency": "How often to practice",
    "techniques": ["List of specific techniques"]
  },
  "pranayama_recommendations": ["Specific breathing techniques with brief explanations"],
  "asana_recommendations": ["Specific poses with modifications for their constitution"],
  "meditation_guidance": "Meditation approach suitable for their guna constitution",
  "lifestyle_adjustments": ["Diet, sleep, and daily routine recommendations"],
  "precautions": ["Important safety considerations"],
  "progression_plan": "How to advance their practice over time",
  "when_to_seek_help": ["Warning signs to watch for"]
}

**Important Guidelines:**
- Always prioritize safety and contraindications
- Consider their dosha constitution in recommendations
- Adapt practices to their experience level
- Include both immediate relief and long-term healing approaches
- Respect traditional yoga and Ayurvedic principles
- Be specific and actionable in recommendations

Please provide the response in valid JSON format only.`;
    }

    // Parse and structure the Ollama response
    parseYogaResponse(response, context) {
        try {
            // Try to extract JSON from the response
            const jsonMatch = response.match(/\{[\s\S]*\}/);
            if (jsonMatch) {
                const parsed = JSON.parse(jsonMatch[0]);
                return {
                    ...parsed,
                    source: 'ollama',
                    model: this.model,
                    timestamp: new Date().toISOString()
                };
            } else {
                // If no JSON found, structure the text response
                return {
                    constitutional_analysis: response,
                    immediate_relief: ["Practice gentle breathing", "Take a short walk", "Drink warm water"],
                    daily_practice: {
                        duration: "15-30 minutes",
                        frequency: "Daily",
                        techniques: ["Gentle stretching", "Basic pranayama"]
                    },
                    pranayama_recommendations: ["Nadi Shodhana", "Ujjayi"],
                    asana_recommendations: ["Gentle poses suitable for your level"],
                    meditation_guidance: "Start with 5-10 minutes of focused breathing",
                    lifestyle_adjustments: ["Maintain regular routine", "Get adequate sleep"],
                    precautions: ["Listen to your body", "Stop if you feel pain"],
                    progression_plan: "Gradually increase duration and complexity",
                    when_to_seek_help: ["If symptoms worsen", "If you experience severe pain"],
                    source: 'ollama',
                    model: this.model,
                    timestamp: new Date().toISOString(),
                    raw_response: response
                };
            }
        } catch (error) {
            console.error('Error parsing Ollama response:', error);
            return {
                constitutional_analysis: "Unable to parse AI response",
                immediate_relief: ["Practice gentle breathing", "Take a short walk"],
                daily_practice: {
                    duration: "15-30 minutes",
                    frequency: "Daily",
                    techniques: ["Gentle stretching", "Basic pranayama"]
                },
                pranayama_recommendations: ["Nadi Shodhana", "Ujjayi"],
                asana_recommendations: ["Gentle poses suitable for your level"],
                meditation_guidance: "Start with 5-10 minutes of focused breathing",
                lifestyle_adjustments: ["Maintain regular routine", "Get adequate sleep"],
                precautions: ["Listen to your body", "Stop if you feel pain"],
                progression_plan: "Gradually increase duration and complexity",
                when_to_seek_help: ["If symptoms worsen", "If you experience severe pain"],
                source: 'ollama_fallback',
                model: this.model,
                timestamp: new Date().toISOString(),
                raw_response: response,
                parse_error: error.message
            };
        }
    }

    // Generate enhanced pranayama recommendations
    async generatePranayamaAdvice(doshaType, condition, experienceLevel) {
        const prompt = `As a yoga therapy expert, provide specific pranayama recommendations for a ${doshaType} constitution dealing with ${condition}. Experience level: ${experienceLevel}.

Include:
1. Specific breathing techniques
2. Duration and frequency
3. Modifications for their constitution
4. Precautions
5. Expected benefits

Format as JSON with keys: techniques, duration, frequency, modifications, precautions, benefits.`;

        try {
            const response = await fetch(`${this.baseUrl}/api/generate`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    model: this.model,
                    prompt: prompt,
                    stream: false,
                    options: { temperature: 0.7, max_tokens: 500 }
                })
            });

            const data = await response.json();
            return this.parseYogaResponse(data.response, { doshaType, condition, experienceLevel });
        } catch (error) {
            console.error('Error generating pranayama advice:', error);
            throw error;
        }
    }

    // Generate meditation guidance
    async generateMeditationGuidance(gunaType, condition, experienceLevel) {
        const prompt = `As a meditation expert, provide guidance for a person with dominant ${gunaType} guna dealing with ${condition}. Experience level: ${experienceLevel}.

Include:
1. Meditation technique recommendations
2. Duration and timing
3. Environment setup
4. Common challenges and solutions
5. Progression tips

Format as JSON with keys: techniques, duration, environment, challenges, progression.`;

        try {
            const response = await fetch(`${this.baseUrl}/api/generate`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    model: this.model,
                    prompt: prompt,
                    stream: false,
                    options: { temperature: 0.7, max_tokens: 500 }
                })
            });

            const data = await response.json();
            return this.parseYogaResponse(data.response, { gunaType, condition, experienceLevel });
        } catch (error) {
            console.error('Error generating meditation guidance:', error);
            throw error;
        }
    }

    // Health check for Ollama
    async healthCheck() {
        try {
            const response = await fetch(`${this.baseUrl}/api/tags`);
            return {
                available: response.ok,
                status: response.status,
                models: response.ok ? await response.json() : null
            };
        } catch (error) {
            return {
                available: false,
                error: error.message
            };
        }
    }

    // Get model information
    async getModelInfo(modelName = null) {
        const model = modelName || this.model;
        try {
            const response = await fetch(`${this.baseUrl}/api/show`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name: model })
            });
            
            if (response.ok) {
                return await response.json();
            } else {
                throw new Error(`Model ${model} not found`);
            }
        } catch (error) {
            console.error('Error getting model info:', error);
            throw error;
        }
    }
}

// Export for use in main application
window.OllamaIntegration = OllamaIntegration;
