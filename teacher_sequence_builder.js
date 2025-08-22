// Premium Teacher Tools - Sequence Builder
class TeacherSequenceBuilder {
    constructor() {
        this.asanaEngine = null;
        this.sequenceData = null;
        this.currentSequence = [];
        this.sequenceFilters = {
            level: 'all',
            dosha: 'all',
            guna: 'all',
            focus: 'all',
            chakra: 'all',
            duration: 60 // minutes
        };
        this.initializeData();
    }

    async initializeData() {
        // Wait for asana engine to load
        if (window.TherapeuticAsanaEngine) {
            this.asanaEngine = new window.TherapeuticAsanaEngine();
            await this.asanaEngine.loadAsanaData();
        }
        
        // Load sequence templates
        await this.loadSequenceTemplates();
        console.log('Teacher Sequence Builder initialized');
    }

    async loadSequenceTemplates() {
        try {
            const response = await fetch('/knowledge_base/yoga_sequences_comprehensive.json');
            this.sequenceData = await response.json();
        } catch (error) {
            console.error('Error loading sequence templates:', error);
        }
    }

    // Main sequence generation function
    generateSequence(parameters) {
        const {
            level = 'beginner',
            dosha = 'all',
            guna = 'all',
            focus = 'general',
            chakra = 'all',
            duration = 60,
            classSize = 'medium',
            specialNeeds = []
        } = parameters;

        // Calculate time allocation
        const timeAllocation = this.calculateTimeAllocation(duration, level);
        
        // Get base sequence structure
        const sequenceStructure = this.getSequenceStructure(level, focus);
        
        // Filter asanas based on criteria
        const filteredAsanas = this.filterAsanas({
            dosha,
            guna,
            chakra,
            level,
            specialNeeds
        });

        // Build the sequence
        const sequence = this.buildSequenceFromStructure(
            sequenceStructure,
            filteredAsanas,
            timeAllocation,
            focus
        );

        return {
            sequence,
            metadata: {
                totalDuration: duration,
                level,
                dosha,
                guna,
                focus,
                chakra,
                classSize,
                generatedAt: new Date().toISOString()
            },
            teachingNotes: this.generateTeachingNotes(sequence, parameters),
            modifications: this.generateModifications(sequence, specialNeeds),
            musicSuggestions: this.getMusicSuggestions(focus, duration)
        };
    }

    // Calculate time allocation for different parts of class
    calculateTimeAllocation(duration, level) {
        const allocations = {
            beginner: {
                warmup: 0.20,      // 20%
                standing: 0.25,    // 25%
                seated: 0.25,      // 25%
                pranayama: 0.15,   // 15%
                relaxation: 0.15   // 15%
            },
            intermediate: {
                warmup: 0.15,      // 15%
                standing: 0.30,    // 30%
                seated: 0.25,      // 25%
                pranayama: 0.15,   // 15%
                relaxation: 0.15   // 15%
            },
            advanced: {
                warmup: 0.10,      // 10%
                standing: 0.35,    // 35%
                seated: 0.25,      // 25%
                pranayama: 0.20,   // 20%
                relaxation: 0.10   // 10%
            }
        };

        const allocation = allocations[level] || allocations.beginner;
        
        return {
            warmup: Math.round(duration * allocation.warmup),
            standing: Math.round(duration * allocation.standing),
            seated: Math.round(duration * allocation.seated),
            pranayama: Math.round(duration * allocation.pranayama),
            relaxation: Math.round(duration * allocation.relaxation)
        };
    }

    // Get sequence structure based on level and focus
    getSequenceStructure(level, focus) {
        const structures = {
            beginner: {
                warmup: ['joint_movements', 'gentle_stretches', 'breath_awareness'],
                standing: ['basic_standing', 'balance_poses'],
                seated: ['hip_openers', 'gentle_twists', 'forward_folds'],
                pranayama: ['basic_breathing', 'simple_ratios'],
                relaxation: ['guided_relaxation', 'savasana']
            },
            intermediate: {
                warmup: ['sun_salutations', 'dynamic_movements'],
                standing: ['warrior_sequence', 'balance_flow', 'standing_twists'],
                seated: ['hip_openers', 'backbends', 'inversions'],
                pranayama: ['alternate_nostril', 'retention_practices'],
                relaxation: ['yoga_nidra', 'meditation']
            },
            advanced: {
                warmup: ['advanced_sun_salutations', 'arm_balances'],
                standing: ['complex_flows', 'advanced_balances'],
                seated: ['deep_backbends', 'advanced_twists', 'inversions'],
                pranayama: ['advanced_ratios', 'bandha_integration'],
                relaxation: ['self_guided_meditation', 'pranava']
            }
        };

        // Modify structure based on focus
        const baseStructure = structures[level] || structures.beginner;
        return this.adaptStructureForFocus(baseStructure, focus);
    }

    // Adapt structure based on class focus
    adaptStructureForFocus(structure, focus) {
        const focusAdaptations = {
            stress_relief: {
                warmup: ['gentle_movements', 'breath_awareness'],
                standing: ['grounding_poses', 'gentle_balance'],
                seated: ['restorative_poses', 'gentle_twists'],
                pranayama: ['calming_breaths', 'extended_exhale'],
                relaxation: ['yoga_nidra', 'body_scan']
            },
            strength_building: {
                warmup: ['dynamic_warmup', 'activating_movements'],
                standing: ['power_poses', 'challenging_balances'],
                seated: ['core_strengthening', 'arm_balances'],
                pranayama: ['energizing_breaths', 'heating_practices'],
                relaxation: ['active_recovery', 'meditation']
            },
            flexibility: {
                warmup: ['gentle_stretches', 'joint_mobility'],
                standing: ['hip_openers', 'side_stretches'],
                seated: ['deep_stretches', 'forward_folds'],
                pranayama: ['calming_practices'],
                relaxation: ['restorative_poses', 'savasana']
            },
            heart_opening: {
                warmup: ['shoulder_prep', 'spinal_waves'],
                standing: ['heart_opening_flow'],
                seated: ['backbends', 'chest_openers'],
                pranayama: ['heart_chakra_breathing'],
                relaxation: ['heart_meditation']
            }
        };

        return focusAdaptations[focus] || structure;
    }

    // Filter asanas based on criteria
    filterAsanas(criteria) {
        if (!this.asanaEngine || !this.asanaEngine.asanas) {
            return [];
        }

        let filtered = [...this.asanaEngine.asanas];

        // Filter by dosha
        if (criteria.dosha !== 'all') {
            filtered = filtered.filter(asana => 
                asana.doshas.length === 0 || 
                asana.doshas.includes(criteria.dosha.toLowerCase()) ||
                asana.doshas.includes('sattva')
            );
        }

        // Filter by guna
        if (criteria.guna !== 'all') {
            filtered = filtered.filter(asana => 
                asana.gunas.length === 0 || 
                asana.gunas.includes(criteria.guna.toLowerCase())
            );
        }

        // Filter by chakra
        if (criteria.chakra !== 'all') {
            filtered = filtered.filter(asana => 
                asana.chakraFocus.toLowerCase().includes(criteria.chakra.toLowerCase()) ||
                asana.chakraFocus.toLowerCase().includes('all')
            );
        }

        // Filter by level (based on complexity and modifications available)
        if (criteria.level === 'beginner') {
            filtered = filtered.filter(asana => 
                asana.description.toLowerCase().includes('gentle') ||
                asana.description.toLowerCase().includes('restorative') ||
                asana.modifications.length > 0
            );
        } else if (criteria.level === 'advanced') {
            filtered = filtered.filter(asana => 
                !asana.description.toLowerCase().includes('supported') &&
                !asana.description.toLowerCase().includes('gentle')
            );
        }

        return filtered;
    }

    // Build sequence from structure and filtered asanas
    buildSequenceFromStructure(structure, filteredAsanas, timeAllocation, focus) {
        const sequence = {};

        Object.keys(structure).forEach(section => {
            const sectionAsanas = this.selectAsanasForSection(
                section,
                structure[section],
                filteredAsanas,
                timeAllocation[section],
                focus
            );
            sequence[section] = sectionAsanas;
        });

        return sequence;
    }

    // Select appropriate asanas for each section
    selectAsanasForSection(sectionType, sectionRequirements, availableAsanas, timeMinutes, focus) {
        const sectionAsanas = [];
        const timePerPose = this.calculateTimePerPose(sectionType, timeMinutes);

        sectionRequirements.forEach(requirement => {
            const matchingAsanas = this.findMatchingAsanas(requirement, availableAsanas);
            if (matchingAsanas.length > 0) {
                // Select best match
                const selectedAsana = this.selectBestAsana(matchingAsanas, focus, sectionType);
                if (selectedAsana) {
                    sectionAsanas.push({
                        ...selectedAsana,
                        duration: timePerPose,
                        section: sectionType,
                        requirement: requirement,
                        teachingCues: this.generateTeachingCues(selectedAsana, sectionType)
                    });
                }
            }
        });

        return sectionAsanas;
    }

    // Find asanas matching specific requirements
    findMatchingAsanas(requirement, availableAsanas) {
        const requirementKeywords = {
            'joint_movements': ['movement', 'mobility', 'rotation'],
            'gentle_stretches': ['gentle', 'stretch', 'restorative'],
            'breath_awareness': ['breath', 'pranayama', 'awareness'],
            'basic_standing': ['standing', 'mountain', 'tree'],
            'balance_poses': ['balance', 'standing', 'tree'],
            'hip_openers': ['hip', 'baddha', 'pigeon', 'malasana'],
            'gentle_twists': ['twist', 'matsyendrasana', 'rotation'],
            'forward_folds': ['forward', 'fold', 'uttanasana', 'paschimottanasana'],
            'backbends': ['backbend', 'bridge', 'cobra', 'camel'],
            'inversions': ['inversion', 'sarvangasana', 'viparita'],
            'restorative_poses': ['restorative', 'supported', 'gentle'],
            'warrior_sequence': ['warrior', 'virabhadra'],
            'sun_salutations': ['surya', 'namaskar']
        };

        const keywords = requirementKeywords[requirement] || [requirement];
        
        return availableAsanas.filter(asana => 
            keywords.some(keyword => 
                asana.name.toLowerCase().includes(keyword) ||
                asana.description.toLowerCase().includes(keyword) ||
                asana.benefits.toLowerCase().includes(keyword)
            )
        );
    }

    // Select the best asana from matches
    selectBestAsana(matches, focus, sectionType) {
        if (matches.length === 0) return null;
        if (matches.length === 1) return matches[0];

        // Score asanas based on relevance
        const scored = matches.map(asana => ({
            asana,
            score: this.scoreAsanaRelevance(asana, focus, sectionType)
        }));

        // Sort by score and return highest
        scored.sort((a, b) => b.score - a.score);
        return scored[0].asana;
    }

    // Score asana relevance for selection
    scoreAsanaRelevance(asana, focus, sectionType) {
        let score = 0;

        // Base score for having good description and benefits
        if (asana.benefits) score += 1;
        if (asana.modifications) score += 1;
        if (asana.breathingSteps) score += 1;

        // Focus-specific scoring
        const focusKeywords = {
            'stress_relief': ['calm', 'relax', 'gentle', 'restorative'],
            'strength_building': ['strengthen', 'build', 'stability'],
            'flexibility': ['stretch', 'lengthen', 'open'],
            'heart_opening': ['chest', 'heart', 'backbend']
        };

        if (focusKeywords[focus]) {
            focusKeywords[focus].forEach(keyword => {
                if (asana.benefits.toLowerCase().includes(keyword) ||
                    asana.description.toLowerCase().includes(keyword)) {
                    score += 2;
                }
            });
        }

        // Section-specific scoring
        if (sectionType === 'warmup' && asana.description.includes('gentle')) score += 2;
        if (sectionType === 'standing' && asana.name.includes('standing')) score += 2;
        if (sectionType === 'relaxation' && asana.description.includes('restorative')) score += 2;

        return score;
    }

    // Calculate time per pose for section
    calculateTimePerPose(sectionType, totalMinutes) {
        const poseCounts = {
            warmup: 6,
            standing: 4,
            seated: 5,
            pranayama: 3,
            relaxation: 2
        };

        const poseCount = poseCounts[sectionType] || 4;
        return Math.round(totalMinutes / poseCount);
    }

    // Generate teaching cues for asana
    generateTeachingCues(asana, sectionType) {
        const cues = [];

        // Add breath integration
        if (asana.breathingSteps) {
            cues.push(`Breathing: ${asana.breathingSteps}`);
        }

        // Add alignment cues based on section
        if (sectionType === 'standing') {
            cues.push("Ground through feet, lengthen spine");
        } else if (sectionType === 'seated') {
            cues.push("Sit tall, soften shoulders");
        }

        // Add benefits as motivation
        if (asana.benefits) {
            cues.push(`Benefits: ${asana.benefits}`);
        }

        // Add modifications
        if (asana.modifications) {
            cues.push(`Modification: ${asana.modifications}`);
        }

        return cues;
    }

    // Generate teaching notes
    generateTeachingNotes(sequence, parameters) {
        const notes = [];

        notes.push(`Class Level: ${parameters.level}`);
        notes.push(`Duration: ${parameters.duration} minutes`);
        notes.push(`Focus: ${parameters.focus}`);
        
        if (parameters.dosha !== 'all') {
            notes.push(`Dosha Balance: ${parameters.dosha}`);
        }

        notes.push("\nKey Teaching Points:");
        notes.push("- Begin with intention setting");
        notes.push("- Emphasize breath awareness throughout");
        notes.push("- Offer modifications for all levels");
        notes.push("- End with integration time");

        // Add specific notes based on focus
        const focusNotes = {
            'stress_relief': [
                "- Encourage slow, mindful movements",
                "- Use extended exhales for calming effect",
                "- Suggest props for comfort and support"
            ],
            'strength_building': [
                "- Focus on proper alignment in challenging poses",
                "- Encourage steady breathing in holds",
                "- Demonstrate modifications for different strengths"
            ],
            'flexibility': [
                "- Warm up thoroughly before deeper stretches",
                "- Emphasize patience and non-forcing",
                "- Use breath to help students go deeper"
            ]
        };

        if (focusNotes[parameters.focus]) {
            notes.push(...focusNotes[parameters.focus]);
        }

        return notes;
    }

    // Generate modifications for special needs
    generateModifications(sequence, specialNeeds) {
        const modifications = {};

        specialNeeds.forEach(need => {
            switch (need) {
                case 'pregnant':
                    modifications.pregnant = [
                        "Avoid deep twists and backbends",
                        "No prone positions after first trimester",
                        "Wider stance in standing poses",
                        "Support in seated poses"
                    ];
                    break;
                case 'seniors':
                    modifications.seniors = [
                        "Use chair support for standing poses",
                        "Move slowly between positions",
                        "Avoid deep forward folds",
                        "Props for comfortable seating"
                    ];
                    break;
                case 'injuries':
                    modifications.injuries = [
                        "Assess individual limitations",
                        "Offer alternative poses",
                        "Use props for support",
                        "Emphasize pain-free movement"
                    ];
                    break;
                case 'beginners':
                    modifications.beginners = [
                        "Demonstrate each pose clearly",
                        "Hold poses for shorter duration",
                        "Offer simpler variations",
                        "Focus on alignment over depth"
                    ];
                    break;
            }
        });

        return modifications;
    }

    // Get music suggestions
    getMusicSuggestions(focus, duration) {
        const suggestions = {
            'stress_relief': {
                warmup: "Gentle ambient, nature sounds",
                main: "Soft instrumental, 60-70 BPM",
                relaxation: "Deep ambient, binaural beats"
            },
            'strength_building': {
                warmup: "Uplifting instrumental, 80-90 BPM",
                main: "Rhythmic world music, 90-110 BPM",
                relaxation: "Calming instrumental"
            },
            'flexibility': {
                warmup: "Gentle flow music, 70-80 BPM",
                main: "Melodic instrumental, 80-90 BPM",
                relaxation: "Spa/meditation music"
            },
            'heart_opening': {
                warmup: "Inspiring ambient",
                main: "Emotional instrumental, devotional",
                relaxation: "Heart chakra frequencies, 341.3 Hz"
            }
        };

        return suggestions[focus] || suggestions['stress_relief'];
    }

    // Export sequence to different formats
    exportSequence(sequence, format = 'json') {
        switch (format) {
            case 'json':
                return JSON.stringify(sequence, null, 2);
            case 'text':
                return this.formatSequenceAsText(sequence);
            case 'pdf':
                return this.generatePDFSequence(sequence);
            default:
                return sequence;
        }
    }

    // Format sequence as readable text
    formatSequenceAsText(sequence) {
        let text = `YOGA SEQUENCE - ${sequence.metadata.focus.toUpperCase()}\n`;
        text += `Level: ${sequence.metadata.level} | Duration: ${sequence.metadata.totalDuration} minutes\n\n`;

        Object.keys(sequence.sequence).forEach(section => {
            text += `${section.toUpperCase()}:\n`;
            sequence.sequence[section].forEach((asana, index) => {
                text += `${index + 1}. ${asana.name} (${asana.duration} min)\n`;
                if (asana.teachingCues && asana.teachingCues.length > 0) {
                    text += `   ${asana.teachingCues[0]}\n`;
                }
            });
            text += '\n';
        });

        return text;
    }

    // Save sequence to user's library
    saveSequence(sequence, name) {
        const savedSequences = JSON.parse(localStorage.getItem('teacher_sequences') || '[]');
        const newSequence = {
            id: Date.now().toString(),
            name,
            sequence,
            createdAt: new Date().toISOString()
        };
        
        savedSequences.push(newSequence);
        localStorage.setItem('teacher_sequences', JSON.stringify(savedSequences));
        
        return newSequence.id;
    }

    // Load saved sequences
    getSavedSequences() {
        return JSON.parse(localStorage.getItem('teacher_sequences') || '[]');
    }

    // Delete saved sequence
    deleteSequence(sequenceId) {
        const savedSequences = this.getSavedSequences();
        const filtered = savedSequences.filter(seq => seq.id !== sequenceId);
        localStorage.setItem('teacher_sequences', JSON.stringify(filtered));
    }
}

// Export for use in main application
window.TeacherSequenceBuilder = TeacherSequenceBuilder;
