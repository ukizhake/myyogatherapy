// Advanced Sequence Builder for Teacher Tools
// Uses YogaAsanas data to create personalized sequences

class SequenceBuilder {
    constructor() {
        this.asanas = [];
        this.filters = {
            dosha: 'all',
            guna: 'all', 
            level: 'all',
            focus: 'all',
            duration: 45
        };
        this.templates = this.initTemplates();
        this.init();
    }

    async init() {
        await this.loadAsanaData();
    }

    async loadAsanaData() {
        try {
            const response = await fetch('data/YogaAsanas - TherapeuticAsanas.csv');
            const csvText = await response.text();
            this.asanas = this.parseCSV(csvText);
            console.log('Loaded asanas:', this.asanas.length);
        } catch (error) {
            console.error('Error loading asana data:', error);
            this.asanas = this.getFallbackAsanas();
        }
    }

    parseCSV(csvText) {
        const lines = csvText.split('\n');
        const headers = lines[0].split(',');
        const asanas = [];

        for (let i = 1; i < lines.length; i++) {
            if (lines[i].trim()) {
                const values = lines[i].split(',');
                const asana = {};
                headers.forEach((header, index) => {
                    asana[header.trim()] = values[index] ? values[index].trim().replace(/"/g, '') : '';
                });
                
                asana.Doshas = asana.Doshas ? asana.Doshas.split('/') : [];
                asana.Gunas = asana.Gunas ? asana.Gunas.split('/') : [];
                asana.level = this.determineLevel(asana);
                asana.category = this.categorizeAsana(asana);
                
                asanas.push(asana);
            }
        }
        
        return asanas;
    }

    determineLevel(asana) {
        const name = asana.Name.toLowerCase();
        const description = (asana.Description || '').toLowerCase();
        
        if (name.includes('child') || name.includes('mountain') || description.includes('restorative')) {
            return 'beginner';
        }
        if (name.includes('headstand') || name.includes('handstand') || description.includes('advanced')) {
            return 'advanced';
        }
        return 'intermediate';
    }

    categorizeAsana(asana) {
        const name = asana.Name.toLowerCase();
        const benefits = (asana.Benefits || '').toLowerCase();
        
        if (name.includes('twist') || benefits.includes('spinal')) return 'spinal_health';
        if (benefits.includes('hip')) return 'hip_opening';
        if (benefits.includes('calm') || name.includes('child')) return 'calming';
        if (benefits.includes('strength')) return 'strengthening';
        
        return 'general';
    }

    initTemplates() {
        return {
            backPain: {
                name: 'Back Pain Relief Sequence',
                duration: 45,
                description: 'Gentle sequence to alleviate back pain and improve spinal health',
                structure: [
                    { category: 'general', duration: 8, poses: 2 },
                    { category: 'spinal_health', duration: 20, poses: 4 },
                    { category: 'hip_opening', duration: 10, poses: 2 },
                    { category: 'calming', duration: 7, poses: 2 }
                ]
            },
            stressRelief: {
                name: 'Stress Relief & Relaxation',
                duration: 60,
                description: 'Calming sequence to reduce stress and promote relaxation',
                structure: [
                    { category: 'general', duration: 10, poses: 2 },
                    { category: 'calming', duration: 35, poses: 6 },
                    { category: 'hip_opening', duration: 15, poses: 3 }
                ]
            }
        };
    }

    generateSequenceForCondition(condition, userProfile = {}) {
        const template = this.templates[condition];
        if (!template) {
            throw new Error('Template not found: ' + condition);
        }

        const sequence = {
            name: template.name,
            description: template.description,
            duration: template.duration,
            sections: [],
            totalPoses: 0,
            userProfile: userProfile
        };

        template.structure.forEach(section => {
            const sectionPoses = this.generateSectionPoses(section, userProfile);
            sequence.sections.push({
                name: this.getSectionName(section.category),
                category: section.category,
                duration: section.duration,
                poses: sectionPoses,
                instructions: this.getSectionInstructions(section.category)
            });
            sequence.totalPoses += sectionPoses.length;
        });

        return sequence;
    }

    generateSectionPoses(section, userProfile) {
        let availablePoses = this.asanas.filter(asana => 
            asana.category === section.category || section.category === 'general'
        );

        if (availablePoses.length === 0) {
            availablePoses = this.asanas.slice(0, section.poses);
        }

        const selectedPoses = [];
        for (let i = 0; i < Math.min(section.poses, availablePoses.length); i++) {
            selectedPoses.push(this.formatPoseForSequence(availablePoses[i], section));
        }

        return selectedPoses;
    }

    formatPoseForSequence(asana, section) {
        return {
            name: asana.Name || 'Unknown Pose',
            sanskrit: asana['Sanskrit Meaning'] || '',
            description: asana.Description || '',
            benefits: asana.Benefits || '',
            steps: asana['Steps with Breathing'] || '',
            duration: Math.floor(section.duration / section.poses),
            repetitions: this.getRepetitions(section.category),
            modifications: asana['Variations/Modifications'] || ''
        };
    }

    getRepetitions(category) {
        const reps = {
            strengthening: '3-5 rounds',
            spinal_health: '5-8 slow rounds',
            calming: 'Hold 1-3 minutes',
            hip_opening: 'Hold 30-90 seconds'
        };
        return reps[category] || 'Hold 30-60 seconds';
    }

    getSectionName(category) {
        const names = {
            general: 'Warm-up & Preparation',
            spinal_health: 'Spinal Health & Mobility',
            hip_opening: 'Hip Opening & Release',
            calming: 'Calming & Integration',
            strengthening: 'Strengthening & Activation'
        };
        return names[category] || 'Practice';
    }

    getSectionInstructions(category) {
        const instructions = {
            general: 'Move slowly and mindfully. Listen to your body and warm up gradually.',
            spinal_health: 'Focus on smooth, controlled movements. Breathe deeply with each movement.',
            hip_opening: 'Be patient and gentle. Never force the stretch. Breathe into the sensation.',
            calming: 'Allow yourself to slow down. Focus on your breath and let go of tension.',
            strengthening: 'Engage your core. Build heat gradually. Rest when needed.'
        };
        return instructions[category] || 'Practice mindfully with awareness of your breath.';
    }

    getFallbackAsanas() {
        return [
            {
                Name: 'Balasana (Child\'s Pose)',
                Description: 'Restorative, gentle stretch',
                Benefits: 'Relieves back and neck tension, calms mind',
                'Steps with Breathing': 'Inhale lengthen spine, exhale fold forward',
                'Sanskrit Meaning': 'Bal = Child, Asana = Pose',
                level: 'beginner',
                category: 'calming'
            },
            {
                Name: 'Marjaryasana-Bitilasana (Cat-Cow)',
                Description: 'Gentle spine mobilization',
                Benefits: 'Increases spinal flexibility, relieves back pain',
                'Steps with Breathing': 'Inhale arch spine (cow), exhale round (cat)',
                'Sanskrit Meaning': 'Marjari = Cat, Bitilasana = Cow',
                level: 'beginner',
                category: 'spinal_health'
            }
        ];
    }
}

// Global instance
window.sequenceBuilder = new SequenceBuilder();
