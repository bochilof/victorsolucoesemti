function modalAnyDesk(){
    window.scrollTo(0,0);
    let id = document.getElementById('modal-anydesk');
    id.classList.toggle('modal-anydesk-on-off');
    document.getElementById('body').classList.toggle('scroll-off');
}

function fecharModalForm(){
    // document.getElementById('modal-formulario').style.display = 'none';
    window.location.href = "https://victor.tec.br";
}

function verificaModal(){
    if(window.location.href == "https://victor.tec.br/?form=true"){
        document.getElementById('modal-formulario').style.display = 'flex';
        document.getElementById('body').style.overflow = 'hidden';
    }
    console.log(window.location.href)
}