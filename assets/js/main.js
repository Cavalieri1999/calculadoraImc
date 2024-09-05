const form = document.querySelector('#formulario')

form.addEventListener('submit', function (e) {
    e.preventDefault(); 
    const inputPeso =e.target.querySelector('#peso');
    const inputAltura =e.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if(!peso){
        setResultado('Peso Invalido', false);
        console.log("Ta errado o peso ai chefe");
        return;
    }
    if(!altura){
        setResultado('Altura Invalida', false);
        console.log("Ta errado a altura ai chefe");
        return;
    }

    const imc =getImc(peso, altura)
    setResultado(imc, true)
    
})
function getImc(peso, altura){
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}

function criaP (){
    const p = document.createElement('p');
    return p;
}

function setResultado (msg, isValid, nivel){
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML='';

    const p = criaP();
    p.innerHTML=msg
    resultado.appendChild(p);
}