// Theme Toggle Functionality
class ThemeToggle {
    constructor() {
        // Select DOM elements
        this.themeSwitch = document.querySelector('.theme-switch-wrapper');
        this.themeCheckbox = this.themeSwitch.querySelector('.theme-switch-checkbox');
        this.moonIcon = this.themeSwitch.querySelector('.fa-moon');
        this.sunIcon = this.themeSwitch.querySelector('.fa-sun');

        // Theme configuration
        this.themes = {
            light: {
                '--main-color': '#121212',
                '--light-color': '#000000',
                '--orange-color': '#F88973'
            },
            dark: {
                '--main-color': '#ffffff',
                '--light-color': '#000000',
                '--orange-color': '#F88973'
            }
        };

        // Initialize event listeners
        this.initializeEventListeners();

        // Load saved theme on page load
        this.loadSavedTheme();
    }

    // Set theme colors
    setThemeColors(themeName) {
        const themeColors = this.themes[themeName];
        
        // Apply color variables
        Object.entries(themeColors).forEach(([variable, value]) => {
            document.documentElement.style.setProperty(variable, value);
        });
    }

    // Toggle theme
    toggleTheme() {
        const currentTheme = document.body.classList.contains('dark-theme') ? 'light' : 'dark';
        
        // Toggle body class
        document.body.classList.toggle('dark-theme');
        
        // Set theme colors
        this.setThemeColors(currentTheme);
        
        // Update checkbox and icons
        this.updateThemeUI(currentTheme);
        
        // Save theme preference
        this.saveThemePreference(currentTheme);
    }

    // Update UI elements based on current theme
    updateThemeUI(themeName) {
        // Update checkbox state
        this.themeCheckbox.checked = (themeName === 'dark');

        // Toggle icon visibility
        if (themeName === 'dark') {
            this.moonIcon.style.display = 'none';
            this.sunIcon.style.display = 'block';
        } else {
            this.moonIcon.style.display = 'block';
            this.sunIcon.style.display = 'none';
        }
    }

    // Save theme preference to localStorage
    saveThemePreference(themeName) {
        localStorage.setItem('site-theme', themeName);
    }

    // Load saved theme from localStorage
    loadSavedTheme() {
        const savedTheme = localStorage.getItem('site-theme') || 'light';
        
        // Apply saved theme
        this.setThemeColors(savedTheme);
        this.updateThemeUI(savedTheme);
        
        // Add or remove dark theme class
        if (savedTheme === 'dark') {
            document.body.classList.add('dark-theme');
        } else {
            document.body.classList.remove('dark-theme');
        }
    }

    // Initialize event listeners
    initializeEventListeners() {
        // Toggle on switch wrapper click
        this.themeSwitch.addEventListener('click', () => {
            this.toggleTheme();
        });

        // Toggle on checkbox change
        this.themeCheckbox.addEventListener('change', () => {
            this.toggleTheme();
        });
    }
}

// Initialize theme toggle when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new ThemeToggle();
});