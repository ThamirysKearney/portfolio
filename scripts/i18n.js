class I18nEngine {
    constructor() {
        this.currentLang = localStorage.getItem('lang') || 'en';
        this.translations = {};
    }

    async init() {
        if (window.PORTFOLIO_TRANSLATIONS) {
            this.translations = window.PORTFOLIO_TRANSLATIONS;
            this.updateUI();
            this.setupSelector();
            return;
        }

        try {
            const response = await fetch('data/translations.json');
            this.translations = await response.json();
            this.updateUI();
            this.setupSelector();
        } catch (err) {
            console.error('Failed to load translations', err);
        }
    }

    updateUI() {
        const langData = this.translations[this.currentLang];
        if (!langData) return;

        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (langData[key]) {
                el.innerText = langData[key];
            }
        });

        document.documentElement.lang = this.currentLang;
        const select = document.getElementById('lang-select');
        if (select) select.value = this.currentLang;
    }

    setupSelector() {
        const select = document.getElementById('lang-select');
        if (select) {
            select.addEventListener('change', (e) => {
                this.currentLang = e.target.value;
                localStorage.setItem('lang', this.currentLang);
                this.updateUI();
            });
        }
    }
}

const i18n = new I18nEngine();
document.addEventListener('DOMContentLoaded', () => i18n.init());
