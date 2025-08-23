// Sequence Builder - Premium Feature for Yoga Teachers
class YogaSequenceBuilder {
    constructor() {
        this.asanasData = [];
        this.therapeuticConditions = {
            'back_pain': {
                name: 'Back Pain Relief',
                description: 'Gentle sequence to alleviate back pain and strengthen supporting muscles',
                primaryAsanas: ['Balasana', 'Marjaryasana-Bitilasana', 'Supta Matsyendrasana', 'Ananda Balasana'],
                focus: ['Spine', 'Core strength', 'Gentle stretching'],
                doshas: ['Vata'],
                gunas: ['Sattva'],
                level: 'Beginner to Intermediate'
            },
            'stress_relief': {
                name: 'Stress & Anxiety Relief',
                description: 'Calming sequence to reduce stress and promote relaxation',
                primaryAsanas: ['Balasana', 'Viparita Karani', 'Supta Baddha Konasana', 'Savasana'],
                focus: ['Nervous system', 'Relaxation', 'Breath awareness'],
                doshas: ['Vata', 'Pitta'],
                gunas: ['Sattva'],
                level: 'All levels'
            },
            'hip_opening': {
                name: 'Hip Opening Sequence',
                description: 'Progressive hip opening to release tension and improve mobility',
                primaryAsanas: ['Baddha Konasana', 'Supta Baddha Konasana', 'Ananda Balasana', 'Malasana'],
                focus: ['Hip flexibility', 'Inner thighs', 'Pelvic mobility'],
                doshas: ['Vata'],
                gunas: ['Sattva', 'Rajas'],
                level: 'Beginner to Advanced'
            },
            'digestive_health': {
                name: 'Digestive Health',
                description: 'Twisting and core-engaging poses to support digestive function',
                primaryAsanas: ['Supta Matsyendrasana', 'Ardha Matsyendrasana', 'Pavana Muktasana'],
                focus: ['Digestion', 'Core strength', 'Spinal mobility'],
                doshas: ['Pitta', 'Kapha'],
                gunas: ['Sattva', 'Rajas'],
                level: 'Beginner to Intermediate'
            },
            'energy_boost': {
                name: 'Energy & Vitality',
                description: 'Invigorating sequence to increase energy and mental clarity',
                primaryAsanas: ['Surya Namaskara', 'Utkatasana', 'Warrior sequences', 'Backbends'],
                focus: ['Strength building', 'Heart opening', 'Mental clarity'],
                doshas: ['Kapha'],
                gunas: ['Rajas', 'Sattva'],
                level: 'Intermediate to Advanced'
            }
        };
        this.init();
    }

    async init() {
        await this.loadAsanasData();
        this.setupEventListeners();
    }

    async loadAsanasData() {
        // In a real implementation, this would load from your CSV file
        // For now, I'll create a structured version based on your data
        this.asanasData = [
            {
                name: "Balasana",
                englishName: "Child's Pose",
                description: "Restorative, gentle stretch",
                benefits: "Relieves back and neck tension, calms mind",
                steps: "Inhale lengthen spine, exhale fold forward",
                companionAsanas: ["Adho Mukha Svanasana", "Supta Baddha Konasana"],
                musclesAffected: ["Spine", "hips", "shoulders"],
                contraindications: ["Knee injury"],
                doshas: ["Vata"],
                gunas: ["Sattva"],
                chakra: "Root",
                sanskritMeaning: "Bal=Child, Asana=Pose",
                variations: "Use blanket under knees or chest",
                level: "Beginner",
                duration: "30-60 seconds",
                category: "Restorative"
            },
            {
                name: "Supta Baddha Konasana",
                englishName: "Reclined Bound Angle",
                description: "Restorative hip opener",
                benefits: "Opens hips, relieves lower back tension",
                steps: "Inhale lift chest, exhale relax hips",
                companionAsanas: ["Balasana", "Supta Matsyendrasana"],
                musclesAffected: ["Hips", "inner thighs"],
                contraindications: ["Severe hip injury"],
                doshas: ["Vata"],
                gunas: ["Sattva"],
                chakra: "Sacral",
                sanskritMeaning: "Supta=Reclined, Baddha=Bound, Konasana=Angle",
                variations: "Use bolster under back or knees",
                level: "Beginner",
                duration: "1-3 minutes",
                category: "Hip opener"
            },
            {
                name: "Viparita Karani",
                englishName: "Legs Up the Wall",
                description: "Restorative inversion",
                benefits: "Calms nervous system, relieves leg fatigue",
                steps: "Inhale lengthen spine, exhale elevate legs",
                companionAsanas: ["Savasana", "Supta Baddha Konasana"],
                musclesAffected: ["Legs", "lower back"],
                contraindications: ["Glaucoma", "severe heart issues"],
                doshas: ["Vata"],
                gunas: ["Sattva"],
                chakra: "Sacral/Root",
                sanskritMeaning: "Viparita=Inverted, Karani=Action",
                variations: "Use folded blanket under hips",
                level: "Beginner",
                duration: "5-10 minutes",
                category: "Restorative inversion"
            },
            {
                name: "Marjaryasana-Bitilasana",
                englishName: "Cat-Cow",
                description: "Gentle spine mobilization",
                benefits: "Increases spinal flexibility, relieves back pain",
                steps: "Inhale arch spine (cow), exhale round (cat)",
                companionAsanas: ["Balasana", "Supta Matsyendrasana"],
                musclesAffected: ["Spine", "shoulders", "core"],
                contraindications: ["Severe back injury"],
                doshas: ["Vata"],
                gunas: ["Sattva"],
                chakra: "Root",
                sanskritMeaning: "Marjari=Cat, Bitilasana=Cow",
                variations: "Move slowly with breath",
                level: "Beginner",
                duration: "5-10 breaths",
                category: "Spinal mobility"
            },
            {
                name: "Supta Matsyendrasana",
                englishName: "Supine Spinal Twist",
                description: "Restorative twist",
                benefits: "Releases spinal tension, improves digestion",
                steps: "Inhale lengthen spine, exhale twist to side",
                companionAsanas: ["Balasana", "Ananda Balasana"],
                musclesAffected: ["Spine", "obliques"],
                contraindications: ["Spinal injury"],
                doshas: ["Pitta"],
                gunas: ["Sattva"],
                chakra: "Solar Plexus",
                sanskritMeaning: "Supta=Reclined, Matsyendrasana=Lord of Fishes",
                variations: "Use blanket under knees",
                level: "Beginner",
                duration: "30-60 seconds each side",
                category: "Twist"
            },
            {
                name: "Ananda Balasana",
                englishName: "Happy Baby",
                description: "Gentle hip and spine opener",
                benefits: "Stretches hips, relieves lower back tension",
                steps: "Inhale grab feet, exhale draw knees toward armpits",
                companionAsanas: ["Supta Baddha Konasana", "Supta Matsyendrasana"],
                musclesAffected: ["Hips", "lower back"],
                contraindications: ["Knee or hip issues"],
                doshas: ["Vata"],
                gunas: ["Sattva"],
                chakra: "Sacral",
                sanskritMeaning: "Ananda=Bliss, Balasana=Child Pose",
                variations: "Use strap around feet for support",
                level: "Beginner",
                duration: "30-60 seconds",
                category: "Hip opener"
            }
        ];
    }

    showSequenceBuilder() {
        const modal = document.createElement('div');
        modal.className = 'sequence-builder-modal';
        modal.innerHTML = `
            <div class="modal-overlay" onclick="this.parentElement.remove()">
                <div class="modal-content sequence-builder-content" onclick="event.stopPropagation()">
                    <button class="modal-close" onclick="this.closest('.sequence-builder-modal').remove()">×</button>
                    
                    <header class="builder-header">
                        <h2>🧘‍♀️ Yoga Sequence Builder</h2>
                        <p class="builder-subtitle">Create personalized sequences based on constitution, level, and therapeutic needs</p>
                    </header>

                    <div class="builder-content">
                        <div class="builder-sidebar">
                            <div class="filter-section">
                                <h3>🎯 Therapeutic Focus</h3>
                                <div class="therapeutic-conditions">
                                    ${Object.keys(this.therapeuticConditions).map(key => `
                                        <button class="condition-btn" data-condition="${key}">
                                            ${this.therapeuticConditions[key].name}
                                        </button>
                                    `).join('')}
                                </div>
                            </div>

                            <div class="filter-section">
                                <h3>🌟 Constitutional Filters</h3>
                                
                                <div class="filter-group">
                                    <label>Dosha:</label>
                                    <select id="doshaFilter" class="filter-select">
                                        <option value="">All Doshas</option>
                                        <option value="Vata">Vata (Air/Space)</option>
                                        <option value="Pitta">Pitta (Fire/Water)</option>
                                        <option value="Kapha">Kapha (Earth/Water)</option>
                                    </select>
                                </div>

                                <div class="filter-group">
                                    <label>Guna:</label>
                                    <select id="gunaFilter" class="filter-select">
                                        <option value="">All Gunas</option>
                                        <option value="Sattva">Sattva (Balance/Clarity)</option>
                                        <option value="Rajas">Rajas (Activity/Passion)</option>
                                        <option value="Tamas">Tamas (Inertia/Rest)</option>
                                    </select>
                                </div>

                                <div class="filter-group">
                                    <label>Level:</label>
                                    <select id="levelFilter" class="filter-select">
                                        <option value="">All Levels</option>
                                        <option value="Beginner">Beginner</option>
                                        <option value="Intermediate">Intermediate</option>
                                        <option value="Advanced">Advanced</option>
                                    </select>
                                </div>

                                <div class="filter-group">
                                    <label>Duration:</label>
                                    <select id="durationFilter" class="filter-select">
                                        <option value="">Any Duration</option>
                                        <option value="15">15 minutes</option>
                                        <option value="30">30 minutes</option>
                                        <option value="45">45 minutes</option>
                                        <option value="60">60 minutes</option>
                                        <option value="90">90 minutes</option>
                                    </select>
                                </div>

                                <button onclick="sequenceBuilder.generateSequence()" class="btn btn-primary">
                                    ✨ Generate Sequence
                                </button>
                            </div>
                        </div>

                        <div class="builder-main">
                            <div id="sequenceDisplay" class="sequence-display">
                                <div class="welcome-message">
                                    <h3>🙏 Welcome to the Sequence Builder</h3>
                                    <p>Select a therapeutic focus or use the filters to create a personalized yoga sequence.</p>
                                    <div class="feature-highlights">
                                        <div class="highlight">
                                            <strong>🎯 Therapeutic Focus:</strong> Choose from conditions like back pain, stress relief, hip opening
                                        </div>
                                        <div class="highlight">
                                            <strong>🌟 Constitutional Matching:</strong> Filter by doshas and gunas for personalized practice
                                        </div>
                                        <div class="highlight">
                                            <strong>📚 Detailed Instructions:</strong> Get step-by-step guidance with breath awareness
                                        </div>
                                        <div class="highlight">
                                            <strong>⚠️ Safety First:</strong> Includes contraindications and modifications
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;

        // Add comprehensive styles
        const style = document.createElement('style');
        style.textContent = `
            .sequence-builder-modal {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                z-index: 10000;
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            }
            
            .sequence-builder-modal .modal-overlay {
                width: 100%;
                height: 100%;
                background: rgba(45, 80, 22, 0.9);
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 20px;
            }
            
            .sequence-builder-content {
                background: #f8f6f0;
                border-radius: 20px;
                max-width: 1200px;
                width: 100%;
                height: 90vh;
                overflow: hidden;
                position: relative;
                display: flex;
                flex-direction: column;
            }
            
            .builder-header {
                background: linear-gradient(135deg, #2d5016 0%, #4a7c59 100%);
                color: #f8f6f0;
                padding: 20px 30px;
                text-align: center;
            }
            
            .builder-header h2 {
                margin: 0 0 5px 0;
                font-size: 1.8em;
            }
            
            .builder-subtitle {
                margin: 0;
                opacity: 0.9;
                font-size: 1em;
            }
            
            .builder-content {
                display: flex;
                flex: 1;
                overflow: hidden;
            }
            
            .builder-sidebar {
                width: 350px;
                background: rgba(74, 124, 89, 0.1);
                padding: 20px;
                overflow-y: auto;
                border-right: 1px solid rgba(74, 124, 89, 0.2);
            }
            
            .filter-section {
                margin-bottom: 30px;
            }
            
            .filter-section h3 {
                color: #2d5016;
                margin: 0 0 15px 0;
                font-size: 1.2em;
            }
            
            .therapeutic-conditions {
                display: flex;
                flex-direction: column;
                gap: 10px;
            }
            
            .condition-btn {
                background: white;
                border: 2px solid #4a7c59;
                color: #4a7c59;
                padding: 12px 15px;
                border-radius: 10px;
                cursor: pointer;
                text-align: left;
                font-weight: 500;
                transition: all 0.3s ease;
            }
            
            .condition-btn:hover, .condition-btn.active {
                background: #4a7c59;
                color: white;
            }
            
            .filter-group {
                margin: 15px 0;
            }
            
            .filter-group label {
                display: block;
                margin-bottom: 5px;
                font-weight: 500;
                color: #2d5016;
            }
            
            .filter-select {
                width: 100%;
                padding: 10px;
                border: 2px solid #e0e0e0;
                border-radius: 8px;
                font-size: 14px;
                background: white;
            }
            
            .filter-select:focus {
                outline: none;
                border-color: #4a7c59;
            }
            
            .builder-main {
                flex: 1;
                padding: 20px;
                overflow-y: auto;
            }
            
            .sequence-display {
                height: 100%;
            }
            
            .welcome-message {
                text-align: center;
                padding: 40px 20px;
                color: #333;
            }
            
            .welcome-message h3 {
                color: #2d5016;
                margin-bottom: 15px;
                font-size: 1.5em;
            }
            
            .feature-highlights {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                gap: 20px;
                margin-top: 30px;
                text-align: left;
            }
            
            .highlight {
                background: white;
                padding: 20px;
                border-radius: 15px;
                border-left: 4px solid #4a7c59;
                box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            }
            
            .sequence-card {
                background: white;
                border-radius: 15px;
                padding: 20px;
                margin: 20px 0;
                box-shadow: 0 4px 15px rgba(0,0,0,0.1);
                border-left: 5px solid #4a7c59;
            }
            
            .sequence-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 20px;
                padding-bottom: 15px;
                border-bottom: 2px solid rgba(74, 124, 89, 0.2);
            }
            
            .sequence-title {
                color: #2d5016;
                font-size: 1.4em;
                margin: 0;
            }
            
            .sequence-meta {
                text-align: right;
                font-size: 0.9em;
                color: #666;
            }
            
            .asana-step {
                display: flex;
                align-items: flex-start;
                gap: 15px;
                margin: 20px 0;
                padding: 20px;
                background: rgba(74, 124, 89, 0.05);
                border-radius: 12px;
            }
            
            .step-number {
                background: #4a7c59;
                color: white;
                width: 30px;
                height: 30px;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                font-weight: bold;
                flex-shrink: 0;
            }
            
            .asana-info {
                flex: 1;
            }
            
            .asana-name {
                font-weight: bold;
                color: #2d5016;
                font-size: 1.1em;
                margin-bottom: 5px;
            }
            
            .asana-details {
                color: #555;
                line-height: 1.6;
            }
            
            .asana-benefits {
                background: rgba(45, 80, 22, 0.1);
                padding: 10px;
                border-radius: 8px;
                margin: 10px 0;
                font-style: italic;
            }
            
            .modal-close {
                position: absolute;
                top: 15px;
                right: 20px;
                background: none;
                border: none;
                font-size: 24px;
                cursor: pointer;
                color: #f8f6f0;
                z-index: 1;
            }
            
            @media (max-width: 768px) {
                .builder-content {
                    flex-direction: column;
                }
                
                .builder-sidebar {
                    width: 100%;
                    max-height: 300px;
                }
                
                .feature-highlights {
                    grid-template-columns: 1fr;
                }
            }
        `;
        document.head.appendChild(style);
        document.body.appendChild(modal);

        // Add event listeners for condition buttons
        modal.querySelectorAll('.condition-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                // Remove active class from all buttons
                modal.querySelectorAll('.condition-btn').forEach(b => b.classList.remove('active'));
                // Add active class to clicked button
                e.target.classList.add('active');
                // Generate sequence for this condition
                this.generateSequenceForCondition(e.target.dataset.condition);
            });
        });
    }

    generateSequenceForCondition(conditionKey) {
        const condition = this.therapeuticConditions[conditionKey];
        if (!condition) return;

        // Filter asanas based on condition requirements
        const relevantAsanas = this.asanasData.filter(asana => {
            return condition.primaryAsanas.some(primary => 
                asana.name.includes(primary) || asana.englishName.includes(primary)
            ) || condition.doshas.some(dosha => asana.doshas.includes(dosha));
        });

        this.displaySequence(condition, relevantAsanas);
    }

    generateSequence() {
        const doshaFilter = document.getElementById('doshaFilter').value;
        const gunaFilter = document.getElementById('gunaFilter').value;
        const levelFilter = document.getElementById('levelFilter').value;
        const durationFilter = document.getElementById('durationFilter').value;

        let filteredAsanas = this.asanasData.filter(asana => {
            return (!doshaFilter || asana.doshas.includes(doshaFilter)) &&
                   (!gunaFilter || asana.gunas.includes(gunaFilter)) &&
                   (!levelFilter || asana.level === levelFilter);
        });

        if (filteredAsanas.length === 0) {
            filteredAsanas = this.asanasData.slice(0, 4); // Fallback to first 4 asanas
        }

        const customCondition = {
            name: 'Custom Sequence',
            description: 'Personalized sequence based on your selected filters',
            level: levelFilter || 'All levels',
            focus: ['Custom practice', 'Constitutional balance']
        };

        this.displaySequence(customCondition, filteredAsanas);
    }

    displaySequence(condition, asanas) {
        const sequenceDisplay = document.getElementById('sequenceDisplay');
        
        const estimatedDuration = asanas.length * 2; // Rough estimate: 2 minutes per asana
        
        sequenceDisplay.innerHTML = `
            <div class="sequence-card">
                <div class="sequence-header">
                    <h3 class="sequence-title">${condition.name}</h3>
                    <div class="sequence-meta">
                        <div><strong>Duration:</strong> ~${estimatedDuration} minutes</div>
                        <div><strong>Level:</strong> ${condition.level}</div>
                        <div><strong>Asanas:</strong> ${asanas.length}</div>
                    </div>
                </div>
                
                <div class="sequence-description">
                    <p><strong>Focus:</strong> ${condition.description}</p>
                    ${condition.focus ? `<p><strong>Benefits:</strong> ${condition.focus.join(', ')}</p>` : ''}
                </div>

                <div class="sequence-steps">
                    ${asanas.map((asana, index) => `
                        <div class="asana-step">
                            <div class="step-number">${index + 1}</div>
                            <div class="asana-info">
                                <div class="asana-name">${asana.name} (${asana.englishName})</div>
                                <div class="asana-details">
                                    <strong>Instruction:</strong> ${asana.steps}<br>
                                    <strong>Duration:</strong> ${asana.duration}<br>
                                    <strong>Focus:</strong> ${asana.musclesAffected.join(', ')}
                                </div>
                                <div class="asana-benefits">
                                    💚 <strong>Benefits:</strong> ${asana.benefits}
                                </div>
                                ${asana.contraindications.length > 0 ? `
                                    <div style="color: #d63031; margin-top: 8px;">
                                        ⚠️ <strong>Avoid if:</strong> ${asana.contraindications.join(', ')}
                                    </div>
                                ` : ''}
                                ${asana.variations ? `
                                    <div style="color: #0984e3; margin-top: 8px;">
                                        🔧 <strong>Modifications:</strong> ${asana.variations}
                                    </div>
                                ` : ''}
                            </div>
                        </div>
                    `).join('')}
                </div>

                <div class="sequence-footer" style="margin-top: 30px; padding: 20px; background: rgba(45, 80, 22, 0.1); border-radius: 10px;">
                    <h4 style="color: #2d5016; margin: 0 0 10px 0;">🧘‍♀️ Practice Notes:</h4>
                    <ul style="margin: 0; padding-left: 20px; line-height: 1.6;">
                        <li>Begin with 3-5 minutes of breath awareness</li>
                        <li>Move slowly and mindfully between poses</li>
                        <li>Hold each pose for the suggested duration, breathing deeply</li>
                        <li>Listen to your body and modify as needed</li>
                        <li>End with 5-10 minutes in Savasana</li>
                    </ul>
                </div>

                <div class="sequence-actions" style="margin-top: 20px; text-align: center;">
                    <button onclick="sequenceBuilder.exportSequence('${condition.name}')" class="btn btn-outline">
                        📄 Export Sequence
                    </button>
                    <button onclick="sequenceBuilder.shareSequence('${condition.name}')" class="btn btn-outline">
                        📤 Share Sequence
                    </button>
                </div>
            </div>
        `;
    }

    exportSequence(sequenceName) {
        // Create a text version for export
        const sequenceText = document.querySelector('.sequence-card').innerText;
        const blob = new Blob([sequenceText], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        
        const a = document.createElement('a');
        a.href = url;
        a.download = `${sequenceName.replace(/[^a-z0-9]/gi, '_')}_sequence.txt`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        
        alert('📄 Sequence exported successfully!');
    }

    shareSequence(sequenceName) {
        const sequenceText = `${sequenceName} - Yoga Sequence\n\nGenerated by MendOnBend Sequence Builder\nVisit: ${window.location.origin}`;
        
        if (navigator.share) {
            navigator.share({
                title: `${sequenceName} - Yoga Sequence`,
                text: sequenceText,
                url: window.location.href
            });
        } else {
            navigator.clipboard.writeText(sequenceText).then(() => {
                alert('📋 Sequence copied to clipboard!');
            });
        }
    }

    setupEventListeners() {
        // Any additional event listeners can be added here
    }
}

// Global instance
window.sequenceBuilder = new YogaSequenceBuilder();

// Function to show sequence builder (called from premium features)
function showSequenceBuilder() {
    window.sequenceBuilder.showSequenceBuilder();
}
