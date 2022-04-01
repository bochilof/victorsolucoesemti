function menuOnOff(){
    let menu = document.getElementById('menu');
    menu.classList.toggle('menu-on');
    document.getElementById('body').classList.toggle('scroll-off');
}

function menuOff(){
    let menu =  document.getElementById('menu');
    menu.classList.remove('menu-on');
    bodyScrollOn();
}

function bodyScrollOn(){
    let body = document.getElementById('body');
    body.classList.remove('scroll-off');
}

function bodyScrollOff(){
    let body = document.getElementById('body');
    body.classList.toggle('scroll-off');
}

