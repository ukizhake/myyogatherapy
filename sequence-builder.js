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
        this.premiumManager = window.premiumManager || new PremiumManager();
        this.init();
    }

    async init() {
        await this.loadAsanaData();
        this.checkPremiumAccess();
    }

    checkPremiumAccess() {
        if (!this.premiumManager.hasPremium()) {
            this.showPremiumGate();
        }
    }

    showPremiumGate() {
        const mainContent = document.querySelector('.sequence-builder');
        if (mainContent) {
            const premiumGate = document.createElement('div');
            premiumGate.className = 'premium-gate';
            premiumGate.innerHTML = `
                <div class="premium-gate-content">
                    <div class="premium-icon">🌟</div>
                    <h2>Premium Feature</h2>
                    <p>The Advanced Sequence Builder is available exclusively for premium users.</p>
                    <div class="premium-benefits">
                        <div class="benefit">
                            <span class="benefit-icon">🧘‍♀️</span>
                            <span>Advanced sequence customization</span>
                        </div>
                        <div class="benefit">
                            <span class="benefit-icon">📊</span>
                            <span>Detailed therapeutic analysis</span>
                        </div>
                        <div class="benefit">
                            <span class="benefit-icon">🎯</span>
                            <span>Personalized recommendations</span>
                        </div>
                    </div>
                    <button class="upgrade-btn" onclick="sequenceBuilder.upgradeToPremium()">
                        Upgrade to Premium
                    </button>
                    <button class="demo-btn" onclick="sequenceBuilder.showDemo()">
                        View Demo
                    </button>
                </div>
            `;
            
            // Hide the main content and show premium gate
            const existingContent = mainContent.querySelector('.builder-header, .filter-panel, .condition-templates, .sequence-output');
            if (existingContent) {
                existingContent.style.display = 'none';
            }
            mainContent.appendChild(premiumGate);
        }
    }

    upgradeToPremium() {
        if (this.premiumManager.showUpgradePrompt) {
            this.premiumManager.showUpgradePrompt('sequenceBuilder');
        } else {
            // Fallback upgrade prompt
            alert('Please upgrade to premium to access the Advanced Sequence Builder!');
        }
    }

    showDemo() {
        // Show a limited demo of the sequence builder
        const demoContent = `
            <div class="demo-sequence">
                <h3>Back Pain Relief Demo Sequence</h3>
                <p class="demo-subtitle">A therapeutic sequence designed to alleviate back pain and improve spinal health</p>
                <div class="demo-info">
                    <span class="demo-duration">45 minutes</span>
                    <span class="demo-poses">8 poses</span>
                    <span class="demo-level">intermediate</span>
                </div>
                <div class="demo-steps">
                    <div class="step">
                        <span class="step-number">1</span>
                        <span class="step-name">Cat-Cow Stretch (Marjaryasana-Bitilasana)</span>
                        <span class="step-duration">3 min</span>
                    </div>
                    <div class="step">
                        <span class="step-number">2</span>
                        <span class="step-name">Child's Pose (Balasana)</span>
                        <span class="step-duration">3 min</span>
                    </div>
                    <div class="step">
                        <span class="step-number">3</span>
                        <span class="step-name">Gentle Spinal Twist (Supta Matsyendrasana)</span>
                        <span class="step-duration">3 min</span>
                    </div>
                    <div class="step">
                        <span class="step-number">4</span>
                        <span class="step-name">Bridge Pose (Setu Bandhasana)</span>
                        <span class="step-duration">3 min</span>
                    </div>
                    <div class="step">
                        <span class="step-number">5</span>
                        <span class="step-name">Cobra Pose (Bhujangasana)</span>
                        <span class="step-duration">3 min</span>
                    </div>
                    <div class="step">
                        <span class="step-number">6</span>
                        <span class="step-name">Locust Pose (Salabhasana)</span>
                        <span class="step-duration">3 min</span>
                    </div>
                    <div class="step">
                        <span class="step-number">7</span>
                        <span class="step-name">Seated Forward Bend (Paschimottanasana)</span>
                        <span class="step-duration">3 min</span>
                    </div>
                    <div class="step">
                        <span class="step-number">8</span>
                        <span class="step-name">Corpse Pose (Savasana)</span>
                        <span class="step-duration">5 min</span>
                    </div>
                </div>
                <p class="demo-note">Upgrade to premium for full access to all sequences and customization options.</p>
            </div>
        `;
        
        const premiumGate = document.querySelector('.premium-gate-content');
        if (premiumGate) {
            premiumGate.innerHTML = demoContent;
        }
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
        const muscles = (asana['Muscles Affected'] || '').toLowerCase();
        const description = (asana.Description || '').toLowerCase();
        
        // Therapeutic Focus
        if (name.includes('twist') || benefits.includes('spinal') || benefits.includes('spine')) return 'spinal_health';
        if (benefits.includes('hip') || muscles.includes('hip') || name.includes('hip')) return 'hip_opening';
        if (benefits.includes('calm') || name.includes('child') || description.includes('restorative') || name.includes('savasana')) return 'calming';
        if (muscles.includes('shoulder') || benefits.includes('shoulder') || name.includes('shoulder')) return 'shoulder_release';
        if (muscles.includes('neck') || benefits.includes('neck') || name.includes('neck')) return 'neck_mobility';
        
        // Strength Categories
        if (benefits.includes('core') || muscles.includes('core') || name.includes('plank') || name.includes('navasana')) return 'core_strength';
        if (benefits.includes('arm') || muscles.includes('arm') || name.includes('arm') || name.includes('chaturanga')) return 'arm_strength';
        if (benefits.includes('leg') || muscles.includes('leg') || muscles.includes('quadriceps') || muscles.includes('glutes')) return 'leg_strength';
        if (benefits.includes('strength') || benefits.includes('build') || name.includes('warrior')) return 'strengthening';
        if (benefits.includes('balance') || name.includes('tree') || name.includes('eagle') || description.includes('balance')) return 'balance';
        if (benefits.includes('energy') || benefits.includes('energi') || name.includes('sun')) return 'energizing';
        
        // Flexibility Categories  
        if (benefits.includes('hamstring') || muscles.includes('hamstring') || name.includes('forward')) return 'hamstring_stretch';
        if (name.includes('backbend') || benefits.includes('chest') || benefits.includes('heart')) return 'spinal_mobility';
        if (muscles.includes('wrist') || benefits.includes('wrist') || name.includes('wrist')) return 'wrist_stretch';
        if (muscles.includes('forearm') || name.includes('forearm')) return 'wrist_strength';
        
        // Warm-up indicators
        if (description.includes('gentle') || name.includes('cat') || name.includes('cow') || benefits.includes('warm')) return 'wrist_warmup';
        
        return 'general';
    }

    initTemplates() {
        return {
            // Therapeutic Focus
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
            },
            neckShoulders: {
                name: 'Neck & Shoulder Relief',
                duration: 40,
                description: 'Release tension in neck, shoulders, and upper back',
                structure: [
                    { category: 'general', duration: 8, poses: 2 },
                    { category: 'shoulder_release', duration: 20, poses: 4 },
                    { category: 'neck_mobility', duration: 8, poses: 2 },
                    { category: 'calming', duration: 4, poses: 1 }
                ]
            },
            hipOpening: {
                name: 'Hip Opening Sequence',
                duration: 60,
                description: 'Focused sequence to release hip tension and improve flexibility',
                structure: [
                    { category: 'general', duration: 10, poses: 2 },
                    { category: 'hip_opening', duration: 35, poses: 6 },
                    { category: 'calming', duration: 15, poses: 3 }
                ]
            },
            
            // Strength & Conditioning
            coreStrength: {
                name: 'Core Strength Builder',
                duration: 50,
                description: 'Build deep core stability and strength',
                structure: [
                    { category: 'general', duration: 10, poses: 3 },
                    { category: 'core_strength', duration: 25, poses: 5 },
                    { category: 'strengthening', duration: 10, poses: 2 },
                    { category: 'calming', duration: 5, poses: 1 }
                ]
            },
            armBalance: {
                name: 'Arm Strength & Balance',
                duration: 65,
                description: 'Develop upper body strength and arm balances',
                structure: [
                    { category: 'general', duration: 12, poses: 3 },
                    { category: 'arm_strength', duration: 30, poses: 6 },
                    { category: 'balance', duration: 15, poses: 3 },
                    { category: 'calming', duration: 8, poses: 2 }
                ]
            },
            legStrength: {
                name: 'Leg Strength & Stability',
                duration: 55,
                description: 'Build lower body power and stability',
                structure: [
                    { category: 'general', duration: 10, poses: 2 },
                    { category: 'leg_strength', duration: 30, poses: 6 },
                    { category: 'balance', duration: 10, poses: 2 },
                    { category: 'calming', duration: 5, poses: 1 }
                ]
            },
            energizing: {
                name: 'Energizing Flow',
                duration: 50,
                description: 'Dynamic sequence to boost energy and circulation',
                structure: [
                    { category: 'general', duration: 8, poses: 2 },
                    { category: 'strengthening', duration: 25, poses: 5 },
                    { category: 'energizing', duration: 12, poses: 3 },
                    { category: 'calming', duration: 5, poses: 1 }
                ]
            },
            
            // Flexibility & Mobility
            hamstrings: {
                name: 'Hamstring Flexibility',
                duration: 45,
                description: 'Safely lengthen and release tight hamstrings',
                structure: [
                    { category: 'general', duration: 8, poses: 2 },
                    { category: 'hamstring_stretch', duration: 25, poses: 5 },
                    { category: 'hip_opening', duration: 8, poses: 2 },
                    { category: 'calming', duration: 4, poses: 1 }
                ]
            },
            spinalMobility: {
                name: 'Spinal Mobility Flow',
                duration: 60,
                description: 'Improve spinal flexibility through movement',
                structure: [
                    { category: 'general', duration: 10, poses: 2 },
                    { category: 'spinal_health', duration: 20, poses: 4 },
                    { category: 'spinal_mobility', duration: 20, poses: 4 },
                    { category: 'calming', duration: 10, poses: 2 }
                ]
            },
            wristCare: {
                name: 'Wrist & Forearm Care',
                duration: 30,
                description: 'Gentle mobilization for healthy wrists',
                structure: [
                    { category: 'wrist_warmup', duration: 8, poses: 2 },
                    { category: 'wrist_strength', duration: 12, poses: 3 },
                    { category: 'wrist_stretch', duration: 8, poses: 2 },
                    { category: 'calming', duration: 2, poses: 1 }
                ]
            },
            fullBodyFlow: {
                name: 'Full Body Flow',
                duration: 80,
                description: 'Complete mobility for all muscle groups',
                structure: [
                    { category: 'general', duration: 12, poses: 3 },
                    { category: 'strengthening', duration: 25, poses: 5 },
                    { category: 'hip_opening', duration: 20, poses: 4 },
                    { category: 'spinal_health', duration: 15, poses: 3 },
                    { category: 'calming', duration: 8, poses: 2 }
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
            strengthening: 'Strengthening & Activation',
            shoulder_release: 'Shoulder Release & Mobility',
            neck_mobility: 'Neck Mobility & Relief',
            core_strength: 'Core Strengthening',
            arm_strength: 'Arm & Upper Body Strength',
            leg_strength: 'Leg Strengthening',
            balance: 'Balance & Stability',
            energizing: 'Energizing Flow',
            hamstring_stretch: 'Hamstring Lengthening',
            spinal_mobility: 'Spinal Mobility & Backbends',
            wrist_stretch: 'Wrist Stretching',
            wrist_strength: 'Wrist Strengthening',
            wrist_warmup: 'Wrist Warm-up'
        };
        return names[category] || category.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase());
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
