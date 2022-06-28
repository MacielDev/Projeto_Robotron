const robotron = document.querySelector('#robotron');

robotron.addEventListener('click',dizOi);

//Função dizOi
function dizOi(){
    console.log('Olá humano');
}

document.onload = dizOi();