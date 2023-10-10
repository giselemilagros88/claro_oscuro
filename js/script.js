const storageTheme = localStorage.getItem('theme');
const systemColorScheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

const newTheme = storageTheme ?? systemColorScheme;

document.documentElement.setAttribute('data-theme', newTheme);

/*document.addEventListener('DOMContentLoaded',function() {
    const switcherTheme = document.querySelector('.main__check');
    const root = document.documentElement;
    if(root.getAttribute('data-theme') === 'dark'){
        switcherTheme.checked = true;      
    } 
    switcherTheme.addEventListener('click', toggleTheme);
    switcherTheme.addEventListener('touchstart', toggleTheme);
  
    function toggleTheme() {
        const setTheme = switcherTheme.checked ? 'dark' : 'light';
        root.setAttribute('data-theme',setTheme);
        localStorage.setItem('theme',setTheme);
    };

});*/