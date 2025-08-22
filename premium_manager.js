// Premium Feature Management for Yoga Therapy App
class PremiumManager {
    constructor() {
        this.isPremium = false;
        this.premiumFeatures = {
            aiAdvice: false,
            advancedConditions: false,
            progressTracking: false,
            cloudSync: false,
            exportReports: false,
            customAnalysis: false
        };
        this.loadPremiumStatus();
    }

    // Load premium status from localStorage
    loadPremiumStatus() {
        const stored = localStorage.getItem('yogaTherapy_premium');
        if (stored) {
            const data = JSON.parse(stored);
            this.isPremium = data.isPremium || false;
            this.premiumFeatures = { ...this.premiumFeatures, ...data.features };
        }
    }

    // Save premium status
    savePremiumStatus() {
        localStorage.setItem('yogaTherapy_premium', JSON.stringify({
            isPremium: this.isPremium,
            features: this.premiumFeatures,
            activatedAt: new Date().toISOString()
        }));
    }

    // Check if user has premium
    hasPremium() {
        return this.isPremium;
    }

    // Check specific feature access
    hasFeature(featureName) {
        if (this.isPremium) return true;
        return this.premiumFeatures[featureName] || false;
    }

    // Get free tier limitations
    getFreeLimitations() {
        return {
            conditions: ['anxiety', 'back_pain', 'insomnia', 'digestive_issues', 'focus_concentration'],
            pranayamaCount: 4,
            asanaCount: 8,
            aiAdvice: false,
            progressTracking: false,
            cloudSync: false,
            exportReports: false
        };
    }

    // Show premium upgrade prompt
    showUpgradePrompt(feature) {
        const modal = this.createUpgradeModal(feature);
        document.body.appendChild(modal);
    }

    // Create upgrade modal
    createUpgradeModal(feature) {
        const overlay = document.createElement('div');
        overlay.className = 'premium-overlay';
        overlay.onclick = (e) => {
            if (e.target === overlay) {
                this.closeUpgradeModal();
            }
        };

        const modal = document.createElement('div');
        modal.className = 'premium-modal';
        modal.innerHTML = `
            <button class="premium-close" onclick="premiumManager.closeUpgradeModal()">×</button>
            <div class="premium-content">
                <h2>🌟 Upgrade to Premium</h2>
                <p>Unlock ${this.getFeatureDescription(feature)} and many more advanced features!</p>
                
                <div class="premium-benefits">
                    <div class="benefit-item">
                        <span class="benefit-icon">🤖</span>
                        <div>
                            <h4>AI-Enhanced Advice</h4>
                            <p>Personalized recommendations using advanced AI</p>
                        </div>
                    </div>
                    <div class="benefit-item">
                        <span class="benefit-icon">📊</span>
                        <div>
                            <h4>Progress Tracking</h4>
                            <p>Monitor your wellness journey with detailed analytics</p>
                        </div>
                    </div>
                    <div class="benefit-item">
                        <span class="benefit-icon">☁️</span>
                        <div>
                            <h4>Cloud Sync</h4>
                            <p>Access your data across all devices</p>
                        </div>
                    </div>
                    <div class="benefit-item">
                        <span class="benefit-icon">🩺</span>
                        <div>
                            <h4>All Conditions</h4>
                            <p>Complete therapeutic protocol library</p>
                        </div>
                    </div>
                </div>

                <div class="premium-pricing">
                    <div class="pricing-option">
                        <h3>Premium Monthly</h3>
                        <div class="price">$9.99<span>/month</span></div>
                        <ul class="feature-list">
                            <li>✅ AI-Enhanced Advice</li>
                            <li>✅ All Conditions</li>
                            <li>✅ Progress Tracking</li>
                        </ul>
                        <button class="btn btn-outline" onclick="premiumManager.purchasePremium('monthly')">
                            Start Monthly
                        </button>
                    </div>
                    <div class="pricing-option recommended">
                        <div class="pricing-badge">Most Popular</div>
                        <h3>Premium Annual</h3>
                        <div class="price">$79.99<span>/year</span></div>
                        <div class="savings">Save 33%</div>
                        <ul class="feature-list">
                            <li>✅ Everything in Monthly</li>
                            <li>✅ Cloud Sync</li>
                            <li>✅ PDF Reports</li>
                            <li>✅ Priority Support</li>
                        </ul>
                        <button class="btn btn-primary" onclick="premiumManager.purchasePremium('annual')">
                            Start Annual
                        </button>
                    </div>
                    <div class="pricing-option professional">
                        <div class="pricing-badge">For Professionals</div>
                        <h3>Professional</h3>
                        <div class="price">$19.99<span>/month</span></div>
                        <ul class="feature-list">
                            <li>✅ Everything in Annual</li>
                            <li>✅ Client Management</li>
                            <li>✅ Bulk Assessments</li>
                            <li>✅ White-label Reports</li>
                        </ul>
                        <button class="btn btn-primary" onclick="premiumManager.purchasePremium('professional')">
                            Start Professional
                        </button>
                    </div>
                </div>

                <div class="premium-guarantee">
                    <small>✅ 30-day money-back guarantee • Cancel anytime</small>
                </div>
            </div>
        `;

        // Add styles
        this.addPremiumStyles();
        
        overlay.appendChild(modal);
        return overlay;
    }

    // Get feature description
    getFeatureDescription(feature) {
        const descriptions = {
            aiAdvice: 'AI-powered personalized yoga therapy advice',
            advancedConditions: 'access to all therapeutic conditions',
            progressTracking: 'detailed progress tracking and analytics',
            cloudSync: 'cloud synchronization across devices',
            exportReports: 'PDF report generation',
            customAnalysis: 'custom health condition analysis'
        };
        return descriptions[feature] || 'premium features';
    }

    // Add premium modal styles
    addPremiumStyles() {
        if (document.getElementById('premium-styles')) return;

        const style = document.createElement('style');
        style.id = 'premium-styles';
        style.textContent = `
            .premium-overlay {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.8);
                z-index: 10000;
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 20px;
            }
            .premium-modal {
                background: white;
                border-radius: 15px;
                max-width: 600px;
                width: 100%;
                max-height: 90vh;
                overflow-y: auto;
                position: relative;
                box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
            }
            .premium-close {
                position: absolute;
                top: 15px;
                right: 20px;
                background: none;
                border: none;
                font-size: 24px;
                cursor: pointer;
                color: #666;
                z-index: 1;
            }
            .premium-content {
                padding: 30px;
                text-align: center;
            }
            .premium-content h2 {
                margin: 0 0 15px 0;
                color: #6c5ce7;
                font-size: 2em;
            }
            .premium-benefits {
                margin: 30px 0;
                text-align: left;
            }
            .benefit-item {
                display: flex;
                align-items: center;
                margin: 20px 0;
                padding: 15px;
                background: #f8f9fa;
                border-radius: 10px;
            }
            .benefit-icon {
                font-size: 24px;
                margin-right: 15px;
                width: 40px;
                text-align: center;
            }
            .benefit-item h4 {
                margin: 0 0 5px 0;
                color: #333;
            }
            .benefit-item p {
                margin: 0;
                color: #666;
                font-size: 14px;
            }
            .premium-pricing {
                display: flex;
                gap: 20px;
                justify-content: center;
                margin: 30px 0;
            }
            .pricing-option {
                flex: 1;
                max-width: 200px;
                border: 2px solid #e9ecef;
                border-radius: 15px;
                padding: 25px 20px;
                position: relative;
                background: white;
                transition: all 0.3s ease;
            }
            .pricing-option.recommended {
                border-color: #6c5ce7;
                transform: scale(1.05);
            }
            .pricing-badge {
                position: absolute;
                top: -10px;
                left: 50%;
                transform: translateX(-50%);
                background: #6c5ce7;
                color: white;
                padding: 5px 15px;
                border-radius: 15px;
                font-size: 12px;
                font-weight: 600;
            }
            .pricing-option h3 {
                margin: 10px 0;
                color: #333;
            }
            .price {
                font-size: 2em;
                font-weight: bold;
                color: #6c5ce7;
                margin: 10px 0;
            }
            .price span {
                font-size: 0.5em;
                color: #666;
            }
            .savings {
                color: #00b894;
                font-weight: 600;
                margin: 10px 0;
            }
            .premium-guarantee {
                margin-top: 30px;
                padding-top: 20px;
                border-top: 1px solid #e9ecef;
                color: #666;
            }
        `;
        document.head.appendChild(style);
    }

    // Close upgrade modal
    closeUpgradeModal() {
        const modal = document.querySelector('.premium-overlay');
        if (modal) {
            modal.remove();
        }
    }

    // Purchase premium (demo - would integrate with payment system)
    purchasePremium(plan) {
        // In a real app, this would integrate with Stripe, PayPal, etc.
        alert(`Demo: ${plan} plan selected. In production, this would redirect to payment processing.`);
        
        // For demo purposes, activate premium
        this.activatePremium();
    }

    // Activate premium (for demo)
    activatePremium() {
        this.isPremium = true;
        this.premiumFeatures = {
            aiAdvice: true,
            advancedConditions: true,
            progressTracking: true,
            cloudSync: true,
            exportReports: true,
            customAnalysis: true
        };
        this.savePremiumStatus();
        this.closeUpgradeModal();
        
        // Show success message
        this.showSuccessMessage();
        
        // Refresh the page to show premium features
        setTimeout(() => {
            window.location.reload();
        }, 2000);
    }

    // Show success message
    showSuccessMessage() {
        const success = document.createElement('div');
        success.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: linear-gradient(135deg, #00b894, #00cec9);
            color: white;
            padding: 20px;
            border-radius: 10px;
            z-index: 10001;
            font-weight: 600;
            box-shadow: 0 4px 15px rgba(0, 184, 148, 0.3);
        `;
        success.innerHTML = '🎉 Premium activated! Refreshing...';
        document.body.appendChild(success);
        
        setTimeout(() => success.remove(), 3000);
    }

    // Check if condition is available in free tier
    isConditionFree(condition) {
        const freeLimitations = this.getFreeLimitations();
        return freeLimitations.conditions.includes(condition);
    }

    // Filter conditions based on tier
    filterConditionsForTier(conditions) {
        if (this.isPremium) return conditions;
        
        const freeLimitations = this.getFreeLimitations();
        return conditions.filter(condition => 
            freeLimitations.conditions.includes(condition.value || condition)
        );
    }
}

// Export for use in main application
window.PremiumManager = PremiumManager;
