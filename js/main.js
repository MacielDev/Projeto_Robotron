/*FUNÇÕES RESPONSÁVEIS POR FAZER A MONTAGEM DOS EQUIPAMENTOS DO ROBOTRON*/

/*PRIMEIRA ABORDAGEM DESENVOLVIDA
// function manipulaForca(equipamento,ajuste) {

// }


// function somaForca(equipamento){
//     let forca = Number(equipamento.value);
//     equipamento.value = forca + 1;
// }


// function subtraiForca(equipamento){
//     let forca = Number(equipamento.value);
//     if(forca > 0){
//         equipamento.value = forca - 1;
//     }
// }


// /*AJUSTES DOS EQUIPAMENTOS*/
// const subtrair = document.querySelector('#subtrair');
// const somar = document.querySelector('#somar');



// /*EQUIPAMENTOS ROBOTRON*/

// /*BRAÇOS*/
// const braco = document.querySelector('#braco #forca');



// somar.addEventListener("click",()=> {
//     somaForca(braco);
// });

// subtrair.addEventListener('click',()=> {
//     subtraiForca(braco);
// });



/******************************************************************** *******************************************************************************************************************************************/


/******************************************************************
    MINHA IMPLEMENTAÇÃO PARA AJUSTAR NÍVEIS DE FORÇA DO ROBOTRON
 ******************************************************************/




//FUNÇÕES UTILIZADAS PARA AJUSTAR OS NÍVEIS DE FORÇA DOS EQUIPAMENTOS

/** 
 * FUNÇAO RESPONSÁVEL POR CAPTURAR OS BOTÕES DE AJUSTE DOS SEUS 
 * RESPECTIVOS EQUIPAMENTOS.
 */
// function pegaBotoesAjustes(peca) {
//     const botoesAjustes = peca.querySelectorAll('.controle-ajuste');
//     return botoesAjustes;
// }

// /**
//  * FUNÇÃO RESPONSÁVEL POR CAPTURAR O VALOR DA FORÇA DE SEU RESPECTIVO EQUIPAMENTO
//  */
// function pegaValorForcaPeca(peca) {
//     let valorForcaPeca = peca.childNodes[3].childNodes[3].value;
//     console.log(valorForcaPeca);
//     return valorForcaPeca;
// }

// /**
//  * FUNÇÃO RESPONSÁVEL POR AJUSTAR (SOMAR OU SUBTRAIR) A FORÇA DE UM EQUIPAMENTO
//  */
// function ajustaForcaPeca(botoesAjustes, valorForcaPeca) {
//     botoesAjustes.forEach((botao) => {
//         botao.addEventListener('click', (event) => {
//             const controles = event.target
//             const operacao = controles.textContent;
//             if (operacao === '+') {
//                 valorForcaPeca = Number(valorForcaPeca) + 1;
//                 exibeForca(controles, valorForcaPeca)
//             } else if (operacao === '-' && Number(valorForcaPeca) > 0) {
//                 valorForcaPeca = Number(valorForcaPeca) - 1;
//                 exibeForca(controles, valorForcaPeca)
//             }
//         });
//     });
// }

// /**
//  * FUNÇÃO RESPONSÁVEL POR EXIBIR A FORÇA DE UM EQUIPAMENTO
//  */
// function exibeForca(controles, valorForcaPeca) {
//     controles.parentNode.childNodes[3].value = valorForcaPeca;
// }


// // BUSCANDO OS EQUIPAMENTOS DO ROBOTRON
// const listaPecas = document.querySelectorAll('.peca');
// console.log(listaPecas);

// // REALIZANDO OS AJUSTES DE FORÇA EM CADA EQUIPAMENTO DO ROBOTRON
// const pecas = listaPecas.forEach((peca) => {
//     const botoesAjustes = pegaBotoesAjustes(peca);
//     const valorForcaPeca = pegaValorForcaPeca(peca);
//     ajustaForcaPeca(botoesAjustes, valorForcaPeca);
// });

const controle = document.querySelectorAll("[data-controle]");


controle.forEach((elemento) => {
    elemento.addEventListener('click',(evento) => {
        manipulaDados(evento.target.dataset.controle,evento.target.parentNode);
    });
});

function manipulaDados(operacao,controle){
    const peca = controle.querySelector("[data-contador]");
    if(operacao == "-"){
        peca.value = parseInt(peca.value)-1;
    }else{
        peca.value = parseInt(peca.value)+1;
    }
}