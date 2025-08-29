// Sound Therapy System for MendonBend
// Integrates with dosha and guna assessments for personalized sound healing

class SoundTherapySystem {
    constructor() {
        this.userProfile = null;
        this.currentSession = null;
        this.soundDatabase = this.initSoundDatabase();
        this.init();
    }

    init() {
        console.log('Sound Therapy System initialized');
        this.loadUserProfile();
    }

    initSoundDatabase() {
        return {
            mantras: {
                vata: {
                    primary: 'LAM',
                    secondary: 'VAM',
                    frequency: '396 Hz',
                    chakra: 'Muladhara (Root)',
                    benefits: ['Grounding', 'Stability', 'Security']
                },
                pitta: {
                    primary: 'RAM',
                    secondary: 'YAM',
                    frequency: '528 Hz',
                    chakra: 'Manipura (Solar Plexus)',
                    benefits: ['Transformation', 'Power', 'Confidence']
                },
                kapha: {
                    primary: 'HAM',
                    secondary: 'OM',
                    frequency: '741 Hz',
                    chakra: 'Vishuddha (Throat)',
                    benefits: ['Expression', 'Communication', 'Purification']
                }
            },
            frequencies: {
                root: { frequency: '396 Hz', note: 'G', effect: 'Grounding' },
                sacral: { frequency: '417 Hz', note: 'G#', effect: 'Stability' },
                solar: { frequency: '528 Hz', note: 'C', effect: 'Transformation' },
                heart: { frequency: '639 Hz', note: 'D#', effect: 'Harmony' },
                throat: { frequency: '741 Hz', note: 'F#', effect: 'Expression' },
                third_eye: { frequency: '852 Hz', note: 'G#', effect: 'Intuition' },
                crown: { frequency: '963 Hz', note: 'A#', effect: 'Awakening' }
            },
            pranayama_sounds: {
                bhramari: {
                    name: 'Bhramari (Bee Breath)',
                    frequency: 'Variable',
                    effect: 'Calming, Stress Relief',
                    technique: 'Humming sound during exhalation'
                },
                ujjayi: {
                    name: 'Ujjayi with Sound',
                    frequency: 'Ocean-like',
                    effect: 'Focus, Energy Regulation',
                    technique: 'Ocean breath with audible sound'
                },
                pranava: {
                    name: 'Pranava (OM)',
                    frequency: '432 Hz',
                    effect: 'Universal Harmony',
                    technique: 'Extended OM chanting'
                }
            },
            gong_therapy: {
                tibetan_gongs: {
                    description: 'Traditional hand-hammered gongs from Tibet and Nepal',
                    material: 'Bronze alloy (copper, tin, zinc)',
                    sound_quality: 'Rich, complex harmonics',
                    benefits: ['Deep meditation', 'Chakra balancing', 'Spiritual awakening', 'Past life regression']
                },
                crystal_gongs: {
                    description: 'Modern gongs made from pure quartz crystal',
                    material: 'Pure quartz crystal',
                    sound_quality: 'Clear, pure tones',
                    benefits: ['Chakra-specific healing', 'DNA activation', 'Energy field clearing', 'Consciousness expansion']
                },
                planet_gongs: {
                    sun_gong: { frequency: '126.22 Hz', benefits: 'Vitality, confidence, leadership' },
                    moon_gong: { frequency: '210.42 Hz', benefits: 'Intuition, emotions, receptivity' },
                    mars_gong: { frequency: '144.72 Hz', benefits: 'Courage, action, transformation' },
                    mercury_gong: { frequency: '141.27 Hz', benefits: 'Communication, learning, adaptability' },
                    jupiter_gong: { frequency: '183.58 Hz', benefits: 'Wisdom, expansion, abundance' },
                    venus_gong: { frequency: '221.23 Hz', benefits: 'Love, beauty, harmony' },
                    saturn_gong: { frequency: '147.85 Hz', benefits: 'Discipline, structure, karma' }
                },
                elemental_gongs: {
                    earth_gong: { frequency: '396 Hz', element: 'Prithvi (Earth)', benefits: 'Grounding, stability, material abundance' },
                    water_gong: { frequency: '417 Hz', element: 'Jala (Water)', benefits: 'Emotional flow, purification, adaptability' },
                    fire_gong: { frequency: '528 Hz', element: 'Agni (Fire)', benefits: 'Transformation, power, purification' },
                    air_gong: { frequency: '741 Hz', element: 'Vayu (Air)', benefits: 'Communication, movement, freedom' },
                    ether_gong: { frequency: '963 Hz', element: 'Akasha (Ether)', benefits: 'Spiritual connection, consciousness, unity' }
                }
            }
        };
    }

    loadUserProfile() {
        if (window.assessmentStorage) {
            const doshaResults = window.assessmentStorage.getAssessmentResults('dosha');
            const gunaResults = window.assessmentStorage.getAssessmentResults('guna');
            
            this.userProfile = {
                dosha: doshaResults ? doshaResults.result : null,
                guna: gunaResults ? gunaResults.result : null,
                timestamp: new Date().toISOString()
            };
            
            console.log('User profile loaded:', this.userProfile);
        }
    }

    generateSoundProfile() {
        if (!this.userProfile) {
            return this.getDefaultSoundProfile();
        }

        const profile = {
            primaryDosha: this.userProfile.dosha?.dominant || 'vata',
            secondaryDosha: this.userProfile.dosha?.secondary || 'pitta',
            gunaBalance: this.userProfile.guna || { sattva: 33, rajas: 33, tamas: 34 },
            recommendations: this.generateRecommendations()
        };

        return profile;
    }

    generateRecommendations() {
        const recommendations = {
            mantras: [],
            frequencies: [],
            pranayama: [],
            sessions: []
        };

        // Dosha-based recommendations
        if (this.userProfile.dosha) {
            const dominant = this.userProfile.dosha.dominant;
            recommendations.mantras.push(this.soundDatabase.mantras[dominant]);
            
            // Add specific frequencies for dosha balance
            if (dominant === 'vata') {
                recommendations.frequencies.push('396 Hz - Root Chakra (Grounding)');
                recommendations.frequencies.push('417 Hz - Sacral Chakra (Stability)');
            } else if (dominant === 'pitta') {
                recommendations.frequencies.push('528 Hz - Solar Plexus (Transformation)');
                recommendations.frequencies.push('639 Hz - Heart Chakra (Harmony)');
            } else if (dominant === 'kapha') {
                recommendations.frequencies.push('741 Hz - Throat Chakra (Expression)');
                recommendations.frequencies.push('963 Hz - Crown Chakra (Awakening)');
            }
        }

        // Guna-based recommendations
        if (this.userProfile.guna) {
            const { sattva, rajas, tamas } = this.userProfile.guna;
            
            if (rajas > 40) {
                recommendations.pranayama.push('Bhramari Pranayama - Calming');
                recommendations.sessions.push('Stress Relief Sound Bath');
            }
            
            if (tamas > 40) {
                recommendations.pranayama.push('Surya Nadi - Energizing');
                recommendations.sessions.push('Morning Sound Ritual');
            }
            
            if (sattva > 40) {
                recommendations.mantras.push('OM Chanting - Spiritual Growth');
                recommendations.sessions.push('Deep Meditation Sound Journey');
            }
        }

        return recommendations;
    }

    getDefaultSoundProfile() {
        return {
            primaryDosha: 'vata',
            secondaryDosha: 'pitta',
            gunaBalance: { sattva: 33, rajas: 33, tamas: 34 },
            recommendations: {
                mantras: [this.soundDatabase.mantras.vata],
                frequencies: ['396 Hz - Root Chakra (Grounding)'],
                pranayama: ['Bhramari Pranayama - Calming'],
                sessions: ['Morning Sound Ritual']
            }
        };
    }

    startSoundSession(sessionType, duration = 15) {
        this.currentSession = {
            type: sessionType,
            startTime: new Date(),
            duration: duration,
            isActive: true
        };

        console.log(`Starting ${sessionType} session for ${duration} minutes`);
        
        // Show session interface
        this.showSessionInterface(sessionType, duration);
    }

    showSessionInterface(sessionType, duration) {
        const sessionContent = this.generateSessionContent(sessionType, duration);
        
        const modal = document.createElement('div');
        modal.className = 'sound-session-modal';
        modal.innerHTML = `
            <div class="modal-overlay">
                <div class="modal-content">
                    <button class="modal-close" onclick="this.closest('.sound-session-modal').remove()">×</button>
                    <div class="session-header">
                        <h2>🎵 ${sessionType}</h2>
                        <div class="session-timer">
                            <span id="session-timer">${duration}:00</span>
                        </div>
                    </div>
                    <div class="session-content">
                        ${sessionContent}
                    </div>
                    <div class="session-controls">
                        <button onclick="soundTherapy.pauseSession()" class="btn btn-secondary">Pause</button>
                        <button onclick="soundTherapy.stopSession()" class="btn btn-primary">Stop Session</button>
                    </div>
                </div>
            </div>
        `;

        // Add styles
        const style = document.createElement('style');
        style.textContent = `
            .sound-session-modal {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                z-index: 10000;
            }
            .sound-session-modal .modal-overlay {
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.9);
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 20px;
            }
            .sound-session-modal .modal-content {
                background: linear-gradient(135deg, #2d5016 0%, #4a7c59 100%);
                color: white;
                border-radius: 20px;
                padding: 40px;
                max-width: 600px;
                width: 100%;
                text-align: center;
                position: relative;
            }
            .session-header h2 {
                margin-bottom: 20px;
                font-size: 2em;
            }
            .session-timer {
                font-size: 3em;
                font-weight: bold;
                margin: 20px 0;
                color: #f8f6f0;
            }
            .session-content {
                margin: 30px 0;
                line-height: 1.6;
            }
            .session-controls {
                display: flex;
                gap: 15px;
                justify-content: center;
                margin-top: 30px;
            }
            .modal-close {
                position: absolute;
                top: 15px;
                right: 20px;
                background: none;
                border: none;
                font-size: 24px;
                cursor: pointer;
                color: white;
            }
        `;
        document.head.appendChild(style);
        document.body.appendChild(modal);

        // Start timer
        this.startSessionTimer(duration);
    }

    generateSessionContent(sessionType, duration) {
        const content = {
            'Vata Sound Session': `
                <h3>🌪️ Grounding Sound Therapy</h3>
                <p>Focus on the root chakra frequency (396 Hz) for stability and grounding.</p>
                <div class="session-instructions">
                    <h4>Instructions:</h4>
                    <ol>
                        <li>Sit comfortably with your spine straight</li>
                        <li>Close your eyes and take 3 deep breaths</li>
                        <li>Chant LAM mantra silently or aloud</li>
                        <li>Feel the grounding energy in your root chakra</li>
                        <li>Continue for ${duration} minutes</li>
                    </ol>
                </div>
            `,
            'Pitta Sound Session': `
                <h3>🔥 Cooling Sound Therapy</h3>
                <p>Focus on the heart chakra frequency (639 Hz) for harmony and balance.</p>
                <div class="session-instructions">
                    <h4>Instructions:</h4>
                    <ol>
                        <li>Sit comfortably with your spine straight</li>
                        <li>Place your hands over your heart center</li>
                        <li>Chant YAM mantra silently or aloud</li>
                        <li>Feel the cooling energy in your heart chakra</li>
                        <li>Continue for ${duration} minutes</li>
                    </ol>
                </div>
            `,
            'Kapha Sound Session': `
                <h3>🌊 Energizing Sound Therapy</h3>
                <p>Focus on the solar plexus frequency (528 Hz) for transformation and energy.</p>
                <div class="session-instructions">
                    <h4>Instructions:</h4>
                    <ol>
                        <li>Sit comfortably with your spine straight</li>
                        <li>Place your hands on your solar plexus</li>
                        <li>Chant RAM mantra silently or aloud</li>
                        <li>Feel the energizing power in your solar plexus</li>
                        <li>Continue for ${duration} minutes</li>
                    </ol>
                </div>
            `,
            'Morning Sound Ritual': `
                <h3>🌅 Morning Sound Ritual</h3>
                <p>Start your day with sacred sounds and mantras for clarity and energy.</p>
                <div class="session-instructions">
                    <h4>Instructions:</h4>
                    <ol>
                        <li>Begin with 3 rounds of OM chanting</li>
                        <li>Practice Bhramari pranayama (5 rounds)</li>
                        <li>Chant Gayatri Mantra (3 times)</li>
                        <li>End with gratitude and intention setting</li>
                    </ol>
                </div>
            `,
            'Stress Relief Sound Bath': `
                <h3>😌 Stress Relief Sound Bath</h3>
                <p>Immerse yourself in healing frequencies for deep relaxation.</p>
                <div class="session-instructions">
                    <h4>Instructions:</h4>
                    <ol>
                        <li>Lie down comfortably with eyes closed</li>
                        <li>Focus on your breath for 2 minutes</li>
                        <li>Practice Bhramari pranayama (10 rounds)</li>
                        <li>Listen to 432 Hz frequency</li>
                        <li>Allow complete relaxation</li>
                    </ol>
                </div>
            `
        };

        return content[sessionType] || `
            <h3>🎵 Sound Therapy Session</h3>
            <p>Focus on your breath and the healing sounds.</p>
            <div class="session-instructions">
                <h4>Instructions:</h4>
                <ol>
                    <li>Find a comfortable seated position</li>
                    <li>Close your eyes and relax</li>
                    <li>Focus on the sound frequencies</li>
                    <li>Allow the healing to take place</li>
                </ol>
            </div>
        `;
    }

    startSessionTimer(duration) {
        let timeLeft = duration * 60; // Convert to seconds
        
        const timer = setInterval(() => {
            const minutes = Math.floor(timeLeft / 60);
            const seconds = timeLeft % 60;
            
            const timerElement = document.getElementById('session-timer');
            if (timerElement) {
                timerElement.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
            }
            
            timeLeft--;
            
            if (timeLeft < 0) {
                clearInterval(timer);
                this.completeSession();
            }
        }, 1000);
    }

    pauseSession() {
        console.log('Session paused');
        // Implement pause functionality
    }

    stopSession() {
        console.log('Session stopped');
        this.currentSession.isActive = false;
        document.querySelector('.sound-session-modal')?.remove();
    }

    completeSession() {
        console.log('Session completed');
        this.currentSession.isActive = false;
        
        const modal = document.querySelector('.sound-session-modal');
        if (modal) {
            modal.innerHTML = `
                <div class="modal-overlay">
                    <div class="modal-content">
                        <h2>🎉 Session Complete!</h2>
                        <p>You've completed your sound therapy session. Take a moment to notice how you feel.</p>
                        <button onclick="this.closest('.sound-session-modal').remove()" class="btn btn-primary">Close</button>
                    </div>
                </div>
            `;
        }
    }
}

// Global sound therapy instance
window.soundTherapy = new SoundTherapySystem();

// Sound Therapy Functions
function loadSoundProfile() {
    const profile = window.soundTherapy.generateSoundProfile();
    const contentDiv = document.getElementById('sound-profile-content');
    const loadingDiv = document.getElementById('sound-profile-loading');
    
    if (contentDiv && loadingDiv) {
        loadingDiv.style.display = 'none';
        contentDiv.style.display = 'block';
        
        contentDiv.innerHTML = `
            <div class="sound-profile">
                <h3>🎯 Your Personalized Sound Profile</h3>
                <div class="profile-details">
                    <div class="profile-section">
                        <h4>🌿 Dosha Constitution</h4>
                        <p><strong>Primary:</strong> ${profile.primaryDosha.toUpperCase()}</p>
                        <p><strong>Secondary:</strong> ${profile.secondaryDosha.toUpperCase()}</p>
                    </div>
                    <div class="profile-section">
                        <h4>⚖️ Guna Balance</h4>
                        <p><strong>Sattva:</strong> ${profile.gunaBalance.sattva}%</p>
                        <p><strong>Rajas:</strong> ${profile.gunaBalance.rajas}%</p>
                        <p><strong>Tamas:</strong> ${profile.gunaBalance.tamas}%</p>
                    </div>
                </div>
                <div class="recommendations">
                    <h4>🎵 Recommended Sound Practices</h4>
                    <div class="recommendation-grid">
                        <div class="recommendation-card">
                            <h5>🕉️ Mantras</h5>
                            <ul>
                                ${profile.recommendations.mantras.map(m => `<li>${m.primary} - ${m.chakra}</li>`).join('')}
                            </ul>
                        </div>
                        <div class="recommendation-card">
                            <h5>🎼 Frequencies</h5>
                            <ul>
                                ${profile.recommendations.frequencies.map(f => `<li>${f}</li>`).join('')}
                            </ul>
                        </div>
                        <div class="recommendation-card">
                            <h5>🌬️ Pranayama</h5>
                            <ul>
                                ${profile.recommendations.pranayama.map(p => `<li>${p}</li>`).join('')}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}

// Session Functions
function startVataSoundSession() {
    window.soundTherapy.startSoundSession('Vata Sound Session', 15);
}

function startPittaSoundSession() {
    window.soundTherapy.startSoundSession('Pitta Sound Session', 15);
}

function startKaphaSoundSession() {
    window.soundTherapy.startSoundSession('Kapha Sound Session', 15);
}

function startSattvaSoundSession() {
    window.soundTherapy.startSoundSession('Sattva Sound Session', 20);
}

function startRajasSoundSession() {
    window.soundTherapy.startSoundSession('Rajas Sound Session', 15);
}

function startTamasSoundSession() {
    window.soundTherapy.startSoundSession('Tamas Sound Session', 15);
}

function startMorningSession() {
    window.soundTherapy.startSoundSession('Morning Sound Ritual', 15);
}

function startStressReliefSession() {
    window.soundTherapy.startSoundSession('Stress Relief Sound Bath', 30);
}

function startChakraSession() {
    window.soundTherapy.startSoundSession('Chakra Balancing Session', 45);
}

function startDeepMeditationSession() {
    window.soundTherapy.startSoundSession('Deep Meditation Sound Journey', 60);
}

// Therapy Category Functions
function showMantraTherapy() {
    alert('Mantra Therapy - Coming Soon! This will include personalized mantras based on your dosha and chakra alignment.');
}

function showPranavaTherapy() {
    alert('Pranava (OM) Therapy - Coming Soon! This will include OM chanting techniques and frequency therapy.');
}

function showSoundBathTherapy() {
    alert('Sound Bath Therapy - Coming Soon! This will include crystal bowls, Tibetan singing bowls, and gong therapy.');
}

function showPranayamaSoundTherapy() {
    alert('Pranayama Sound Therapy - Coming Soon! This will include Bhramari, Ujjayi, and Nada yoga practices.');
}

// Gong Therapy Functions
function showGongTherapy(type) {
    const gongInfo = window.soundTherapy.soundDatabase.gong_therapy;
    let content = '';
    
    switch(type) {
        case 'tibetan':
            content = `
                <h3>🏔️ Tibetan Gongs</h3>
                <p><strong>Description:</strong> ${gongInfo.tibetan_gongs.description}</p>
                <p><strong>Material:</strong> ${gongInfo.tibetan_gongs.material}</p>
                <p><strong>Sound Quality:</strong> ${gongInfo.tibetan_gongs.sound_quality}</p>
                <h4>Benefits:</h4>
                <ul>
                    ${gongInfo.tibetan_gongs.benefits.map(benefit => `<li>${benefit}</li>`).join('')}
                </ul>
                <h4>Dosha Applications:</h4>
                <ul>
                    <li><strong>Vata:</strong> Use smaller gongs with gentle, steady rhythms for grounding</li>
                    <li><strong>Pitta:</strong> Use medium gongs with cooling, flowing techniques</li>
                    <li><strong>Kapha:</strong> Use larger gongs with energizing, awakening techniques</li>
                </ul>
            `;
            break;
        case 'crystal':
            content = `
                <h3>💎 Crystal Gongs</h3>
                <p><strong>Description:</strong> ${gongInfo.crystal_gongs.description}</p>
                <p><strong>Material:</strong> ${gongInfo.crystal_gongs.material}</p>
                <p><strong>Sound Quality:</strong> ${gongInfo.crystal_gongs.sound_quality}</p>
                <h4>Benefits:</h4>
                <ul>
                    ${gongInfo.crystal_gongs.benefits.map(benefit => `<li>${benefit}</li>`).join('')}
                </ul>
            `;
            break;
        case 'planet':
            content = `
                <h3>🌌 Planet Gongs</h3>
                <p>Gongs tuned to planetary frequencies and cosmic energies</p>
                <h4>Planetary Frequencies:</h4>
                <ul>
                    <li><strong>Sun Gong:</strong> ${gongInfo.planet_gongs.sun_gong.frequency} - ${gongInfo.planet_gongs.sun_gong.benefits}</li>
                    <li><strong>Moon Gong:</strong> ${gongInfo.planet_gongs.moon_gong.frequency} - ${gongInfo.planet_gongs.moon_gong.benefits}</li>
                    <li><strong>Mars Gong:</strong> ${gongInfo.planet_gongs.mars_gong.frequency} - ${gongInfo.planet_gongs.mars_gong.benefits}</li>
                    <li><strong>Jupiter Gong:</strong> ${gongInfo.planet_gongs.jupiter_gong.frequency} - ${gongInfo.planet_gongs.jupiter_gong.benefits}</li>
                    <li><strong>Venus Gong:</strong> ${gongInfo.planet_gongs.venus_gong.frequency} - ${gongInfo.planet_gongs.venus_gong.benefits}</li>
                </ul>
            `;
            break;
        case 'elemental':
            content = `
                <h3>🌿 Elemental Gongs</h3>
                <p>Gongs representing the five elements (Pancha Bhutas)</p>
                <h4>Elemental Frequencies:</h4>
                <ul>
                    <li><strong>Earth Gong:</strong> ${gongInfo.elemental_gongs.earth_gong.frequency} - ${gongInfo.elemental_gongs.earth_gong.benefits}</li>
                    <li><strong>Water Gong:</strong> ${gongInfo.elemental_gongs.water_gong.frequency} - ${gongInfo.elemental_gongs.water_gong.benefits}</li>
                    <li><strong>Fire Gong:</strong> ${gongInfo.elemental_gongs.fire_gong.frequency} - ${gongInfo.elemental_gongs.fire_gong.benefits}</li>
                    <li><strong>Air Gong:</strong> ${gongInfo.elemental_gongs.air_gong.frequency} - ${gongInfo.elemental_gongs.air_gong.benefits}</li>
                    <li><strong>Ether Gong:</strong> ${gongInfo.elemental_gongs.ether_gong.frequency} - ${gongInfo.elemental_gongs.ether_gong.benefits}</li>
                </ul>
            `;
            break;
    }
    
    const modal = document.createElement('div');
    modal.className = 'gong-therapy-modal';
    modal.innerHTML = `
        <div class="modal-overlay" onclick="this.parentElement.remove()">
            <div class="modal-content" onclick="event.stopPropagation()">
                <button class="modal-close" onclick="this.closest('.gong-therapy-modal').remove()">×</button>
                <div class="gong-therapy-content">
                    ${content}
                </div>
                <div class="modal-actions">
                    <button onclick="startGongSession('${type}')" class="btn btn-primary">Start Gong Session</button>
                    <button onclick="this.closest('.gong-therapy-modal').remove()" class="btn btn-secondary">Close</button>
                </div>
            </div>
        </div>
    `;
    
    // Add styles
    const style = document.createElement('style');
    style.textContent = `
        .gong-therapy-modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 10000;
        }
        .gong-therapy-modal .modal-overlay {
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.8);
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 20px;
        }
        .gong-therapy-modal .modal-content {
            background: white;
            border-radius: 20px;
            padding: 40px;
            max-width: 600px;
            width: 100%;
            max-height: 90vh;
            overflow-y: auto;
            position: relative;
        }
        .gong-therapy-modal h3 {
            color: #2d5016;
            margin-bottom: 20px;
        }
        .gong-therapy-modal h4 {
            color: #4a7c59;
            margin: 20px 0 10px 0;
        }
        .gong-therapy-modal ul {
            margin: 10px 0;
            padding-left: 20px;
        }
        .gong-therapy-modal li {
            margin: 5px 0;
            color: #4a7c59;
        }
        .modal-actions {
            display: flex;
            gap: 15px;
            justify-content: center;
            margin-top: 30px;
        }
        .modal-close {
            position: absolute;
            top: 15px;
            right: 20px;
            background: none;
            border: none;
            font-size: 24px;
            cursor: pointer;
            color: #8b4513;
        }
    `;
    document.head.appendChild(style);
    document.body.appendChild(modal);
}

function startGongSession(type) {
    const sessionTypes = {
        'tibetan': 'Tibetan Gong Therapy',
        'crystal': 'Crystal Gong Therapy',
        'planet': 'Planet Gong Therapy',
        'elemental': 'Elemental Gong Therapy'
    };
    
    window.soundTherapy.startSoundSession(sessionTypes[type], 30);
    document.querySelector('.gong-therapy-modal')?.remove();
}
