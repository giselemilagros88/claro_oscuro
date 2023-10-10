document.addEventListener('DOMContentLoaded', function() {
    const switcherTheme = document.querySelector('.main__check');
    const root = document.documentElement;

    // Verificar si el tema predeterminado del navegador es oscuro
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        root.setAttribute('data-theme', 'dark');
        switcherTheme.checked = true;
    }else{
        root.setAttribute('data-theme', 'light');
        switcherTheme.checked = false;
    }

    // Resto del código para el interruptor de tema
    switcherTheme.addEventListener('click', toggleTheme);

    function toggleTheme() {
        const setTheme = switcherTheme.checked ? 'dark' : 'light';
        root.setAttribute('data-theme', setTheme);
        localStorage.setItem('theme', setTheme);
    }
});

// Resto del contenido del archivo script.js
const storageTheme = localStorage.getItem('theme');
const systemColorScheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

const newTheme = storageTheme ?? systemColorScheme;

document.documentElement.setAttribute('data-theme', newTheme);

