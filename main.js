const darkmodeBtn = document.querySelector('.darkmode__btn');
const body=document.querySelector('body');

//1. проверяем темную тему в системных настройках браузера,если есть возможность просматривать системные настройки и в системных настройках стоит prefers-color-shceme:dark,то ставим темную тему на сайте
if(window.matchMedia && window.matchMedia('(prefers-color-scheme:dark)').matches){
    darkmodeBtn.classList.add('darkmode__btn--active');
    body.classList.add('dark');
}

//2. проверяем если есть значение dark у item по ключу darkMode в localStorage
if(localStorage.getItem('darkMode')==='dark'){
    darkmodeBtn.classList.add('darkmode__btn--active');
    body.classList.add('dark');
}else if(localStorage.getItem('darkMode')==='light'){
    darkmodeBtn.classList.remove('darkmode__btn--active');
    body.classList.remove('dark');
}



// если меняются системные настройки,меняем тему,если меняется эта тема,то запускаем функцию
window.matchMedia('(prefers-color-scheme:dark)').addEventListener('change',(event)=>{
    // если тема соотвествует темной теме,то вернем dark,в другом случае вернем light
    const newScheme=event.matches ? 'dark' : 'light';

    //если новая тема dark,то добавляем классы,в другом случае удаляем
    if(newScheme==='dark'){
        darkmodeBtn.classList.add('darkmode__btn--active');
        body.classList.add('dark');
        localStorage.setItem('darkMode','dark');
    }else{
        darkmodeBtn.classList.remove('darkmode__btn--active');
        body.classList.remove('dark');
        localStorage.setItem('darkMode','light');
    }
});

darkmodeBtn.onclick=function(){
    darkmodeBtn.classList.toggle('darkmode__btn--active');
    const isDark=body.classList.toggle('dark');
    if(isDark){
        localStorage.setItem('darkMode','dark'); // добавляем в localstorage item с название darkMode,и значение dark
    }else{
        localStorage.setItem('darkMode','light');
    }
}