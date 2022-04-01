function openService(idBtn,idTxt) {
    
    // recolhe serviços abertos
    let servicos = document.getElementsByClassName("servico-expand");
    for(let servico of servicos){
        if(servico.id != idTxt){
            servico.classList.toggle("servico-expand");
        }
    }

    document.getElementById(idTxt).classList.toggle('servico-expand');
    
    // altera o icone dos botões expandir/recolher
    let btns = document.getElementsByClassName('arrow-more');
    for(let btn of btns){
        if(btn.id == idBtn){
            if(btn.innerHTML == 'expand_more'){
                btn.innerHTML = 'expand_less';
            }else{
                btn.innerHTML = 'expand_more';
            }
        }else{
            btn.innerHTML = 'expand_more';
        }
    }
}