const botaoEnviar = document.querySelector('#calcular');
const resposta = document.querySelector('.resultado');
botaoEnviar.addEventListener('click',(evento)=>{
    resposta.innerHTML = "Fui clicado";
});
