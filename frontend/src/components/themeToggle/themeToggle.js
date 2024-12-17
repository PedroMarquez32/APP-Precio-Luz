//author: Pedro Javier Marquez Lizana
export const createThemeToggle = () => {
    const toggleButton = document.createElement('button');
    toggleButton.className = 'theme-toggle';
    

    const currentTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);
    toggleButton.innerHTML = currentTheme === 'dark' ? '☀️' : '🌙';

    toggleButton.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        toggleButton.innerHTML = newTheme === 'dark' ? '☀️' : '🌙';
        
        localStorage.setItem('theme', newTheme);
    });

    return toggleButton;
};