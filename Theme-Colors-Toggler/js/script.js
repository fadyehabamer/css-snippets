let themeToggler = document.querySelector('.theme-toggler');

themeToggler.onclick = () =>{

    themeToggler.classList.toggle('active');

    themeToggler.setAttribute('aria-pressed', themeToggler.classList.contains('active'));

    if(themeToggler.classList.contains('active')){
        document.body.classList.add('active');
    }else{
        document.body.classList.remove('active');
    }

}

document.querySelectorAll('.theme-colors .color').forEach(color =>{
    color.onclick = () => {
        let background = color.style.background;
        document.querySelector(':root').style.setProperty('--main-color', background);
    }
}); 

let theme = document.querySelector('.themes-container');

document.querySelector('#theme-open').onclick = () =>{
    theme.classList.add('active');
    document.body.style.paddingRight = '350px';
}

document.querySelector('#theme-close').onclick = () =>{
    theme.classList.remove('active');
    document.body.style.paddingRight = '0px';
}

// the menu icons, theme switch and colour swatches are <div role="button">:
// let Enter/Space activate them like native buttons
document.addEventListener('keydown', e =>{
    if((e.key === 'Enter' || e.key === ' ') && e.target.matches('[role="button"]')){
        e.preventDefault();
        e.target.click();
    }
});
