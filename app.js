//contador inicial
let count = 0;

//selecionar valor e botões
const valor = document.querySelector('#valor');
const botões = document.querySelectorAll('.botao');

//identificar classe, clique e IF's
botões.forEach(function (botao) {
    botao.addEventListener('click', function(e){
        const classe = e.currentTarget.classList;
        if(classe.contains('diminuir')){
            count--;
        }
        else if(classe.contains('aumentar')){
            count++;
        }
        else if (classe.contains('reset')){
            count = 0;
        }
        if (count > 0){
            valor.style.color = 'green';
        }
        if (count < 0){
            valor.style.color = 'red';
        }
        if (count === 0){
            valor.style.color = 'black';
        }
        valor.textContent = count;
    })
});
