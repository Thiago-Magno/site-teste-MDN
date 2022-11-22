let minhaImagem = document.querySelector('img')
minhaImagem.onclick = function () {

    let meuScr = minhaImagem.getAttribute('src');
    if(meuScr === 'image/firefox-logo.png'){
        minhaImagem.setAttribute('src','image/firefox-logo-2.png');
    }
    else{
        minhaImagem.setAttribute('src','image/firefox-logo.png') 
    }

    
}
/* let sorvete = 'chocolate';
 if (sorvete == 'chocolate') {
     alert('Opa, eu amo sorvete de chocolate');
 }
 else{
     alert('Ah, eu prefiria o de chocolate...');
 }
*/

/*function multiplica(num1,num2) {
    let resultado = num1 * num2;
    return resultado;
}*/
// faz com que se o usuario clique no site ele fale para
// parar de cutuca-lo
/*document.querySelector('html').onclick = function() {
    alert('Ai! Pare de me cutucar!');
}*/

let meuBotao = document.querySelector('button');
let meuCabecalho = document.querySelector('h1');

function defineUserName() {
    let userName = prompt('Por favor insira seu nome');
    localStorage.setItem('nome', userName);
    meuCabecalho.textContent = `Bem vindo a Mozzila ${userName}`;

    if (!localStorage.getItem('nome')) {
        defineUserName
    } else {
        let savedName = localStorage.getItem('nome')
        meuCabecalho.textContent = `Bem cindo a Mozzila ${savedName}`
    }
    
}
