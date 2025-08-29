// Prana Vayu Assessment - Five Vital Airs Evaluation
// Based on Ayurvedic principles of the five vital airs (Prana, Apana, Vyana, Udana, Samana)

const pranaVayuQuestions = [
    {
        id: 1,
        text: "How do you typically experience your breathing pattern?",
        options: [
            { value: 'a', text: "Deep, steady, and rhythmic", vayu: 'prana' },
            { value: 'b', text: "Shallow or irregular, especially when stressed", vayu: 'udana' },
            { value: 'c', text: "Normal, but can become heavy during physical activity", vayu: 'vyana' },
            { value: 'd', text: "Sometimes feels stuck or constricted in chest", vayu: 'prana' },
            { value: 'e', text: "Breathing feels natural and balanced", vayu: 'samana' }
        ]
    },
    {
        id: 2,
        text: "How do you experience your energy levels throughout the day?",
        options: [
            { value: 'a', text: "High energy in morning, gradually declining", vayu: 'prana' },
            { value: 'b', text: "Variable energy, peaks and valleys", vayu: 'udana' },
            { value: 'c', text: "Steady energy, good for physical activities", vayu: 'vyana' },
            { value: 'd', text: "Low energy, especially in morning", vayu: 'apana' },
            { value: 'e', text: "Balanced energy, consistent throughout day", vayu: 'samana' }
        ]
    },
    {
        id: 3,
        text: "How do you experience your digestive system?",
        options: [
            { value: 'a', text: "Good appetite, but can be irregular", vayu: 'prana' },
            { value: 'b', text: "Variable appetite, sometimes no hunger", vayu: 'udana' },
            { value: 'c', text: "Strong appetite, good metabolism", vayu: 'vyana' },
            { value: 'd', text: "Slow digestion, tendency to constipation", vayu: 'apana' },
            { value: 'e', text: "Balanced digestion, regular elimination", vayu: 'samana' }
        ]
    },
    {
        id: 4,
        text: "How do you experience your speech and communication?",
        options: [
            { value: 'a', text: "Clear, articulate, good voice projection", vayu: 'prana' },
            { value: 'b', text: "Variable speech, sometimes rushed or unclear", vayu: 'udana' },
            { value: 'c', text: "Confident speech, good expression", vayu: 'vyana' },
            { value: 'd', text: "Quiet voice, prefers listening", vayu: 'apana' },
            { value: 'e', text: "Balanced communication, thoughtful speech", vayu: 'samana' }
        ]
    },
    {
        id: 5,
        text: "How do you experience your circulation and body temperature?",
        options: [
            { value: 'a', text: "Good circulation, warm hands and feet", vayu: 'prana' },
            { value: 'b', text: "Variable temperature, can feel hot or cold", vayu: 'udana' },
            { value: 'c', text: "Strong circulation, good body warmth", vayu: 'vyana' },
            { value: 'd', text: "Poor circulation, cold extremities", vayu: 'apana' },
            { value: 'e', text: "Balanced circulation, comfortable temperature", vayu: 'samana' }
        ]
    },
    {
        id: 6,
        text: "How do you experience your mental focus and concentration?",
        options: [
            { value: 'a', text: "Sharp focus, good mental clarity", vayu: 'prana' },
            { value: 'b', text: "Variable focus, can be scattered", vayu: 'udana' },
            { value: 'c', text: "Strong concentration, good mental stamina", vayu: 'vyana' },
            { value: 'd', text: "Slow to focus, needs time to process", vayu: 'apana' },
            { value: 'e', text: "Balanced focus, steady mental state", vayu: 'samana' }
        ]
    },
    {
        id: 7,
        text: "How do you experience your sleep patterns?",
        options: [
            { value: 'a', text: "Light sleep, easily awakened", vayu: 'prana' },
            { value: 'b', text: "Variable sleep, sometimes restless", vayu: 'udana' },
            { value: 'c', text: "Sound sleep, good recovery", vayu: 'vyana' },
            { value: 'd', text: "Deep sleep, hard to wake up", vayu: 'apana' },
            { value: 'e', text: "Balanced sleep, restful nights", vayu: 'samana' }
        ]
    },
    {
        id: 8,
        text: "How do you experience your emotional state?",
        options: [
            { value: 'a', text: "Generally positive, optimistic outlook", vayu: 'prana' },
            { value: 'b', text: "Variable emotions, can be moody", vayu: 'udana' },
            { value: 'c', text: "Stable emotions, good emotional strength", vayu: 'vyana' },
            { value: 'd', text: "Calm emotions, sometimes withdrawn", vayu: 'apana' },
            { value: 'e', text: "Balanced emotions, equanimous", vayu: 'samana' }
        ]
    },
    {
        id: 9,
        text: "How do you experience your physical movement and coordination?",
        options: [
            { value: 'a', text: "Graceful movement, good coordination", vayu: 'prana' },
            { value: 'b', text: "Variable movement, sometimes clumsy", vayu: 'udana' },
            { value: 'c', text: "Strong movement, good physical control", vayu: 'vyana' },
            { value: 'd', text: "Slow movement, prefers stability", vayu: 'apana' },
            { value: 'e', text: "Balanced movement, natural coordination", vayu: 'samana' }
        ]
    },
    {
        id: 10,
        text: "How do you experience your relationship with food and eating?",
        options: [
            { value: 'a', text: "Enjoys food, good appetite control", vayu: 'prana' },
            { value: 'b', text: "Variable relationship with food", vayu: 'udana' },
            { value: 'c', text: "Strong appetite, enjoys eating", vayu: 'vyana' },
            { value: 'd', text: "Slow eater, prefers simple foods", vayu: 'apana' },
            { value: 'e', text: "Balanced relationship with food", vayu: 'samana' }
        ]
    }
];

// Prana Vayu Assessment Class
class PranaVayuAssessment {
    constructor() {
        this.currentQuestion = 0;
        this.answers = {};
        this.results = {
            prana: 0,
            apana: 0,
            vyana: 0,
            udana: 0,
            samana: 0
        };
    }

    // Start the assessment
    startAssessment() {
        this.currentQuestion = 0;
        this.answers = {};
        this.results = {
            prana: 0,
            apana: 0,
            vyana: 0,
            udana: 0,
            samana: 0
        };
        this.showAssessmentScreen();
        this.displayQuestion();
    }

    // Show assessment screen
    showAssessmentScreen() {
        // Hide other screens
        document.querySelectorAll('.screen').forEach(screen => {
            screen.classList.remove('active');
        });
        
        // Show prana vayu assessment screen
        const assessmentScreen = document.getElementById('prana-vayu-screen');
        if (assessmentScreen) {
            assessmentScreen.classList.add('active');
        } else {
            console.error('Prana Vayu assessment screen not found');
        }
    }

    // Display current question
    displayQuestion() {
        const question = pranaVayuQuestions[this.currentQuestion];
        const progress = ((this.currentQuestion + 1) / pranaVayuQuestions.length) * 100;
        
        // Update progress bar
        const progressElement = document.getElementById('prana-vayu-progress');
        if (progressElement) {
            progressElement.style.width = progress + '%';
        }
        
        // Update question number
        const questionNumberElement = document.getElementById('prana-vayu-question-number');
        if (questionNumberElement) {
            questionNumberElement.textContent = `Question ${this.currentQuestion + 1} of ${pranaVayuQuestions.length}`;
        }
        
        // Update question text
        const questionTextElement = document.getElementById('prana-vayu-question-text');
        if (questionTextElement) {
            questionTextElement.textContent = question.text;
        }
        
        // Update options
        const optionsContainer = document.getElementById('prana-vayu-options-container');
        if (optionsContainer) {
            optionsContainer.innerHTML = '';
            
            question.options.forEach(option => {
                const optionElement = document.createElement('div');
                optionElement.className = 'option';
                optionElement.innerHTML = `
                    <div class="option-label">${option.value.toUpperCase()}.</div>
                    <div>${option.text}</div>
                `;
                
                optionElement.addEventListener('click', () => this.selectOption(option.value, optionElement));
                optionsContainer.appendChild(optionElement);
            });
        }
        
        this.updateNavigationButtons();
    }

    // Select an option
    selectOption(value, element) {
        // Remove previous selection
        document.querySelectorAll('#prana-vayu-options-container .option').forEach(opt => {
            opt.classList.remove('selected');
        });
        
        // Add selection to clicked option
        element.classList.add('selected');
        
        // Store answer
        this.answers[this.currentQuestion] = value;
        
        this.updateNavigationButtons();
    }

    // Update navigation buttons
    updateNavigationButtons() {
        const prevBtn = document.getElementById('prana-vayu-prev-btn');
        const nextBtn = document.getElementById('prana-vayu-next-btn');
        
        if (prevBtn) {
            prevBtn.disabled = this.currentQuestion === 0;
        }
        
        if (nextBtn) {
            nextBtn.disabled = !this.answers.hasOwnProperty(this.currentQuestion);
            
            if (this.currentQuestion === pranaVayuQuestions.length - 1 && this.answers.hasOwnProperty(this.currentQuestion)) {
                nextBtn.textContent = 'Get Results';
            } else {
                nextBtn.textContent = 'Next';
            }
        }
    }

    // Go to previous question
    previousQuestion() {
        if (this.currentQuestion > 0) {
            this.currentQuestion--;
            this.displayQuestion();
            
            // Restore previous selection
            if (this.answers.hasOwnProperty(this.currentQuestion)) {
                const selectedValue = this.answers[this.currentQuestion];
                const options = document.querySelectorAll('#prana-vayu-options-container .option');
                options.forEach((option, index) => {
                    if (pranaVayuQuestions[this.currentQuestion].options[index].value === selectedValue) {
                        option.classList.add('selected');
                    }
                });
            }
        }
    }

    // Go to next question or finish assessment
    nextQuestion() {
        if (this.currentQuestion < pranaVayuQuestions.length - 1) {
            this.currentQuestion++;
            this.displayQuestion();
            
            // Restore selection if exists
            if (this.answers.hasOwnProperty(this.currentQuestion)) {
                const selectedValue = this.answers[this.currentQuestion];
                const options = document.querySelectorAll('#prana-vayu-options-container .option');
                options.forEach((option, index) => {
                    if (pranaVayuQuestions[this.currentQuestion].options[index].value === selectedValue) {
                        option.classList.add('selected');
                    }
                });
            }
        } else {
            this.calculateResults();
        }
    }

    // Calculate assessment results
    calculateResults() {
        // Reset results
        this.results = {
            prana: 0,
            apana: 0,
            vyana: 0,
            udana: 0,
            samana: 0
        };
        
        // Calculate scores
        Object.keys(this.answers).forEach(questionIndex => {
            const answer = this.answers[questionIndex];
            const question = pranaVayuQuestions[questionIndex];
            
            question.options.forEach(option => {
                if (option.value === answer) {
                    this.results[option.vayu]++;
                }
            });
        });
        
        // Save results
        if (window.assessmentStorage) {
            window.assessmentStorage.saveAssessment('pranaVayu', {
                results: this.results,
                answers: this.answers,
                timestamp: new Date().toISOString()
            });
        }
        
        // Display results
        this.displayResults();
    }

    // Display assessment results
    displayResults() {
        // Hide assessment screen
        document.querySelectorAll('.screen').forEach(screen => {
            screen.classList.remove('active');
        });
        
        // Show results screen
        const resultsScreen = document.getElementById('results-screen');
        if (resultsScreen) {
            resultsScreen.classList.add('active');
        }
        
        // Add prana vayu results to the existing results display
        this.addPranaVayuResults();
    }

    // Add prana vayu results to the results screen
    addPranaVayuResults() {
        const resultsContainer = document.getElementById('prana-vayu-results');
        if (!resultsContainer) {
            console.error('Prana Vayu results container not found');
            return;
        }
        
        // Find dominant vayu
        const dominantVayu = Object.keys(this.results).reduce((a, b) => 
            this.results[a] > this.results[b] ? a : b
        );
        
        // Create results HTML
        const resultsHTML = `
            <div class="prana-vayu-section">
                <h3>🌬️ Prana Vayu Assessment Results</h3>
                <p class="assessment-description">
                    The five vital airs (Prana Vayus) govern different functions in your body and mind. 
                    Understanding your vayu balance helps optimize your yoga practice and lifestyle.
                </p>
                
                <div class="vayu-scores">
                    <div class="vayu-score ${dominantVayu === 'prana' ? 'dominant' : ''}">
                        <h4>🫁 Prana Vayu: ${this.results.prana}/10</h4>
                        <p>Governs breathing, heart function, and mental clarity</p>
                        <div class="score-bar">
                            <div class="score-fill" style="width: ${(this.results.prana/10)*100}%"></div>
                        </div>
                    </div>
                    
                    <div class="vayu-score ${dominantVayu === 'apana' ? 'dominant' : ''}">
                        <h4>⬇️ Apana Vayu: ${this.results.apana}/10</h4>
                        <p>Governs elimination, reproduction, and grounding</p>
                        <div class="score-bar">
                            <div class="score-fill" style="width: ${(this.results.apana/10)*100}%"></div>
                        </div>
                    </div>
                    
                    <div class="vayu-score ${dominantVayu === 'vyana' ? 'dominant' : ''}">
                        <h4>🔄 Vyana Vayu: ${this.results.vyana}/10</h4>
                        <p>Governs circulation, movement, and coordination</p>
                        <div class="score-bar">
                            <div class="score-fill" style="width: ${(this.results.vyana/10)*100}%"></div>
                        </div>
                    </div>
                    
                    <div class="vayu-score ${dominantVayu === 'udana' ? 'dominant' : ''}">
                        <h4>⬆️ Udana Vayu: ${this.results.udana}/10</h4>
                        <p>Governs speech, expression, and upward movement</p>
                        <div class="score-bar">
                            <div class="score-fill" style="width: ${(this.results.udana/10)*100}%"></div>
                        </div>
                    </div>
                    
                    <div class="vayu-score ${dominantVayu === 'samana' ? 'dominant' : ''}">
                        <h4>⚖️ Samana Vayu: ${this.results.samana}/10</h4>
                        <p>Governs digestion, assimilation, and balance</p>
                        <div class="score-bar">
                            <div class="score-fill" style="width: ${(this.results.samana/10)*100}%"></div>
                        </div>
                    </div>
                </div>
                
                <div class="vayu-analysis">
                    <h4>Your Prana Vayu Profile</h4>
                    <p><strong>Dominant Vayu:</strong> ${this.getVayuDescription(dominantVayu)}</p>
                    <p>${this.getVayuRecommendations(dominantVayu)}</p>
                </div>
            </div>
        `;
        
        resultsContainer.innerHTML = resultsHTML;
    }

    // Get vayu description
    getVayuDescription(vayu) {
        const descriptions = {
            prana: "Prana Vayu - You have strong life force energy, good mental clarity, and natural leadership qualities.",
            apana: "Apana Vayu - You are grounded, stable, and have good elimination and reproductive health.",
            vyana: "Vyana Vayu - You have strong circulation, good physical coordination, and natural movement abilities.",
            udana: "Udana Vayu - You have good communication skills, creative expression, and upward energy flow.",
            samana: "Samana Vayu - You have balanced digestion, good assimilation, and natural harmony in body and mind."
        };
        return descriptions[vayu] || "Balanced Vayu - You have good balance across all vital airs.";
    }

    // Get vayu recommendations
    getVayuRecommendations(vayu) {
        const recommendations = {
            prana: "Focus on pranayama practices like Nadi Shodhana and Bhramari. Practice heart-opening asanas and meditation for mental clarity.",
            apana: "Practice grounding asanas like Tadasana and Virabhadrasana. Focus on Mula Bandha and pelvic floor exercises.",
            vyana: "Practice flowing sequences like Surya Namaskar. Focus on coordination and balance in your practice.",
            udana: "Practice throat-opening asanas and chanting. Focus on upward energy practices and creative expression.",
            samana: "Practice balanced sequences and focus on digestive health. Practice Agni Sara and abdominal strengthening."
        };
        return recommendations[vayu] || "Maintain balance with regular yoga practice and pranayama.";
    }
}

// Global instance
window.pranaVayuAssessment = new PranaVayuAssessment();

// Functions for HTML integration
function startPranaVayuAssessment() {
    window.pranaVayuAssessment.startAssessment();
}

function previousPranaVayuQuestion() {
    window.pranaVayuAssessment.previousQuestion();
}

function nextPranaVayuQuestion() {
    window.pranaVayuAssessment.nextQuestion();
}
