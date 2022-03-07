const body = document.body
const toggleTheme = document.querySelector('#dropdown');
const defaultTheme = localStorage.getItem('theme') || 'light'

toggleTheme.addEventListener('click', (e)=>{
    console.log(e.target.id);
    setTheme(e.target.id);
})

const setTheme = (theme)=>{
    body.className = theme;
    localStorage.setItem('theme', theme);
   
    if(theme === 'dropdown')
        body.className = 'light';
}

setTheme(defaultTheme);
