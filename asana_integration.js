// Therapeutic Asana Integration for Yoga Therapy App
class TherapeuticAsanaEngine {
    constructor() {
        this.asanas = [];
        this.loadAsanaData();
    }

    // Load asana data from CSV
    async loadAsanaData() {
        try {
            const response = await fetch('/data/YogaAsanas - TherapeuticAsanas.csv');
            const csvText = await response.text();
            this.asanas = this.parseAsanaCSV(csvText);
            console.log(`Loaded ${this.asanas.length} therapeutic asanas`);
        } catch (error) {
            console.error('Error loading asana data:', error);
        }
    }

    // Parse CSV data into structured asana objects
    parseAsanaCSV(csvText) {
        const lines = csvText.split('\n');
        const headers = lines[0].split(',').map(h => h.trim());
        const asanas = [];

        for (let i = 1; i < lines.length; i++) {
            if (lines[i].trim()) {
                const values = this.parseCSVLine(lines[i]);
                const asana = {
                    name: values[0] || '',
                    description: values[1] || '',
                    benefits: values[2] || '',
                    breathingSteps: values[3] || '',
                    companionAsanas: values[4] ? values[4].split(',').map(a => a.trim()) : [],
                    musclesAffected: values[5] || '',
                    contraindications: values[6] || '',
                    doshas: values[7] ? values[7].split('/').map(d => d.trim().toLowerCase()) : [],
                    gunas: values[8] ? values[8].split('/').map(g => g.trim().toLowerCase()) : [],
                    chakraFocus: values[9] || '',
                    sanskritMeaning: values[10] || '',
                    modifications: values[11] || ''
                };
                asanas.push(asana);
            }
        }
        return asanas;
    }

    // Parse CSV line handling quotes and commas
    parseCSVLine(line) {
        const result = [];
        let current = '';
        let inQuotes = false;
        
        for (let i = 0; i < line.length; i++) {
            const char = line[i];
            if (char === '"') {
                inQuotes = !inQuotes;
            } else if (char === ',' && !inQuotes) {
                result.push(current.trim());
                current = '';
            } else {
                current += char;
            }
        }
        result.push(current.trim());
        return result;
    }

    // Get asanas for specific condition
    getAsanasForCondition(condition, dominantDosha, severity = 'moderate') {
        const conditionMap = {
            'anxiety': ['balasana', 'supta baddha konasana', 'viparita karani', 'savasana'],
            'back_pain': ['balasana', 'marjaryasana-bitilasana', 'supta matsyendrasana', 'ananda balasana'],
            'insomnia': ['viparita karani', 'supta baddha konasana', 'savasana', 'balasana'],
            'digestive_issues': ['supta matsyendrasana', 'ardha matsyendrasana', 'malasana', 'parighasana'],
            'stress': ['balasana', 'savasana', 'viparita karani', 'supta baddha konasana'],
            'depression': ['setu bandha sarvangasana', 'matsyasana supported', 'ardha supta virasana'],
            'headaches': ['balasana', 'supta padangusthasana', 'savasana', 'viparita karani'],
            'hypertension': ['savasana', 'viparita karani', 'supta baddha konasana', 'balasana'],
            'focus_concentration': ['balasana', 'ardha matsyendrasana', 'savasana']
        };

        const relevantAsanaNames = conditionMap[condition] || [];
        const matchingAsanas = [];

        // Find asanas by partial name match
        relevantAsanaNames.forEach(asanaName => {
            const found = this.asanas.find(asana => 
                asana.name.toLowerCase().includes(asanaName.toLowerCase())
            );
            if (found) {
                matchingAsanas.push(found);
            }
        });

        // Filter by dosha compatibility if possible
        const doshaCompatible = matchingAsanas.filter(asana => 
            asana.doshas.length === 0 || 
            asana.doshas.includes(dominantDosha.toLowerCase()) ||
            asana.doshas.includes('sattva') // Generally balancing
        );

        // Return dosha-compatible asanas or fallback to general matches
        const finalAsanas = doshaCompatible.length > 0 ? doshaCompatible : matchingAsanas;

        // Limit based on severity
        const limits = { mild: 3, moderate: 5, severe: 3 };
        return finalAsanas.slice(0, limits[severity] || 5);
    }

    // Get asanas by dosha
    getAsanasByDosha(dosha, count = 5) {
        return this.asanas
            .filter(asana => 
                asana.doshas.includes(dosha.toLowerCase()) ||
                asana.doshas.includes('sattva')
            )
            .slice(0, count);
    }

    // Get restorative asanas
    getRestorativeAsanas(count = 4) {
        const restorativeKeywords = ['restorative', 'gentle', 'supported', 'reclined'];
        return this.asanas
            .filter(asana => 
                restorativeKeywords.some(keyword => 
                    asana.description.toLowerCase().includes(keyword)
                )
            )
            .slice(0, count);
    }

    // Get energizing asanas
    getEnergizingAsanas(count = 4) {
        const energizingKeywords = ['strengthen', 'backbend', 'standing', 'balance'];
        return this.asanas
            .filter(asana => 
                energizingKeywords.some(keyword => 
                    asana.description.toLowerCase().includes(keyword) ||
                    asana.benefits.toLowerCase().includes(keyword)
                )
            )
            .slice(0, count);
    }

    // Create complete therapeutic sequence
    createTherapeuticSequence(condition, dominantDosha, experienceLevel, severity) {
        const primaryAsanas = this.getAsanasForCondition(condition, dominantDosha, severity);
        
        // Always include foundational poses
        const foundationalPoses = this.asanas.filter(asana => 
            ['balasana', 'savasana'].some(foundation => 
                asana.name.toLowerCase().includes(foundation)
            )
        );

        // Create sequence structure
        const sequence = {
            warmup: foundationalPoses.slice(0, 1), // Start with child's pose or similar
            main: primaryAsanas,
            cooldown: foundationalPoses.filter(asana => 
                asana.name.toLowerCase().includes('savasana')
            ).slice(0, 1)
        };

        return {
            sequence,
            totalDuration: this.calculateSequenceDuration(sequence, experienceLevel),
            instructions: this.generateSequenceInstructions(sequence, experienceLevel),
            modifications: this.getSequenceModifications(sequence, experienceLevel, severity)
        };
    }

    // Calculate sequence duration
    calculateSequenceDuration(sequence, experienceLevel) {
        const baseTimes = {
            beginner: { warmup: 2, main: 3, cooldown: 5 },
            intermediate: { warmup: 1.5, main: 4, cooldown: 7 },
            advanced: { warmup: 1, main: 5, cooldown: 10 }
        };

        const times = baseTimes[experienceLevel] || baseTimes.beginner;
        const totalAsanas = sequence.warmup.length + sequence.main.length + sequence.cooldown.length;
        
        return {
            warmup: sequence.warmup.length * times.warmup,
            main: sequence.main.length * times.main,
            cooldown: sequence.cooldown.length * times.cooldown,
            total: (sequence.warmup.length * times.warmup) + 
                   (sequence.main.length * times.main) + 
                   (sequence.cooldown.length * times.cooldown)
        };
    }

    // Generate sequence instructions
    generateSequenceInstructions(sequence, experienceLevel) {
        const instructions = {
            general: [
                "Begin in a comfortable seated position or lying down",
                "Connect with your breath before starting movement",
                "Move slowly and mindfully between poses",
                "Honor your body's limits and modify as needed",
                "Focus on the breath throughout the practice"
            ],
            sequencing: [
                "Start with gentle warmup poses to prepare the body",
                "Move into the main therapeutic poses for your condition",
                "End with restorative poses for integration and relaxation",
                "Rest in final relaxation for at least 5 minutes"
            ]
        };

        if (experienceLevel === 'beginner') {
            instructions.general.unshift("This is a gentle, beginner-friendly sequence");
            instructions.general.push("Hold each pose for 3-5 breaths or as comfortable");
        }

        return instructions;
    }

    // Get sequence modifications
    getSequenceModifications(sequence, experienceLevel, severity) {
        const modifications = [];

        if (severity === 'severe') {
            modifications.push("Practice very gently, focusing on breath awareness");
            modifications.push("Use props (bolsters, blankets, blocks) for support");
            modifications.push("Hold poses for shorter durations");
        }

        if (experienceLevel === 'beginner') {
            modifications.push("Use wall support for standing poses");
            modifications.push("Keep a blanket nearby for warmth in restorative poses");
            modifications.push("Don't force any movements - comfort is key");
        }

        return modifications;
    }

    // Get asana details for display
    getAsanaDetails(asanaName) {
        return this.asanas.find(asana => 
            asana.name.toLowerCase().includes(asanaName.toLowerCase())
        );
    }

    // Search asanas by keyword
    searchAsanas(keyword) {
        return this.asanas.filter(asana => 
            asana.name.toLowerCase().includes(keyword.toLowerCase()) ||
            asana.benefits.toLowerCase().includes(keyword.toLowerCase()) ||
            asana.description.toLowerCase().includes(keyword.toLowerCase())
        );
    }
}

// Export for use in main application
window.TherapeuticAsanaEngine = TherapeuticAsanaEngine;
