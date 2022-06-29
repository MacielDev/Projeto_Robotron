const robotron = document.querySelector('#robotron');
const saldacoes = document.querySelector('#saldacoes');

robotron.addEventListener('mouseenter',saldacaoRobotron);

/*FUNÇÃO RESPONSÁVEL POR DAR BOAS VINDAS AOS USUÁRIOS*/ 
function saldacaoRobotron(evento){
    saldacoes.innerHTML = "Olá humano!!!";
}

/*FUNÇÃO RESPONSÁVEL POR FAZER A MONTAGEM DOS BRAÇOS DO ROBOTRON*/ 

/************************** Meu código ****************************************/
function controleForca(equipamento,ajuste){
    
    if(ajuste.id =='diminuir' && forca <= 0){
        return
    }
    else{
        if(ajuste.id == 'diminuir'){
            equipamento.value -=1;
            return;
        }
        equipamento.value+=1;
    }
    
}









