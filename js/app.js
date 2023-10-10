document.addEventListener('DOMContentLoaded',function() {
    const switcherTheme = document.querySelector('.main__check');
    const root = document.documentElement;
    switcherTheme.addEventListener('click', toggleTheme);
    if(root.getAttribute('data-theme') === 'dark'){
        swictherTheme.checked = true;      
    } 
    function toggleTheme() {
        const setTheme = switcherTheme.checked ? 'dark' : 'light';
        root.setAttribute('data-theme',setTheme);
        localStorage.setItem('theme',setTheme);
    };

});