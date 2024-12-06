// Theme Toggle Functionality
const themeSwitch = document.querySelector('.theme-switch-wrapper');
const themeCheckbox = themeSwitch.querySelector('.theme-switch-checkbox');
const moonIcon = themeSwitch.querySelector('.fa-moon');
const sunIcon = themeSwitch.querySelector('.fa-sun');

// Function to toggle theme
function toggleTheme() {
    document.body.classList.toggle('dark-theme');
    
    // Update icon visibility based on theme
    if (document.body.classList.contains('dark-theme')) {
        // Dark theme colors
        document.documentElement.style.setProperty('--main-color', '#121212');
        document.documentElement.style.setProperty('--light-color', '#ffffff');
        
        moonIcon.style.display = 'block';
        sunIcon.style.display = 'block';
    } else {
        // Light theme colors (assuming you have these defined in your root CSS)
        document.documentElement.style.setProperty('--main-color', '#ffffff');
        document.documentElement.style.setProperty('--light-color', '#000000');
        
        moonIcon.style.display = 'block';
        sunIcon.style.display = 'block';
    }
}

// Add event listeners
themeSwitch.addEventListener('click', () => {
    themeCheckbox.checked = !themeCheckbox.checked;
    toggleTheme();
});

themeCheckbox.addEventListener('change', toggleTheme);

// Optional: Persist theme preference in localStorage
document.addEventListener('DOMContentLoaded', () => {
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark-theme') {
        document.body.classList.add('dark-theme');
        themeCheckbox.checked = true;
        
        // Set dark theme colors
        document.documentElement.style.setProperty('--main-color', '#121212');
        document.documentElement.style.setProperty('--light-color', '#ffffff');
        
        moonIcon.style.display = 'none';
        sunIcon.style.display = 'block';
    }
});

// Save theme preference when changed
themeSwitch.addEventListener('click', () => {
    const isDarkTheme = document.body.classList.contains('dark-theme');
    localStorage.setItem('theme', isDarkTheme ? 'dark-theme' : 'light-theme');
});