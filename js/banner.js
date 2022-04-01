function banner1() {
    document.getElementById('imgc').classList.remove('banner-view');
    document.getElementById('textc').classList.remove('banner-view');
    document.getElementById('imga').classList.toggle('banner-view');
    document.getElementById('texta').classList.toggle('banner-view');
    setTimeout("banner2()", 5000);
}

function banner2() {
    document.getElementById('imga').classList.remove('banner-view');
    document.getElementById('texta').classList.remove('banner-view');
    document.getElementById('imgb').classList.toggle('banner-view');
    document.getElementById('textb').classList.toggle('banner-view');
    setTimeout("banner3()", 5000);
}

function banner3() {
    document.getElementById('imgb').classList.remove('banner-view');
    document.getElementById('textb').classList.remove('banner-view');
    document.getElementById('imgc').classList.toggle('banner-view');
    document.getElementById('textc').classList.toggle('banner-view');
    setTimeout("banner1()", 5000);
}