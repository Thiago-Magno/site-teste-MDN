//troca a imagem quando clicado
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

//define o nome de usuario e troca o cabeçalho
let meuBotao = document.querySelector('button');
let meuCabecalho = document.querySelector('h1');

//funcao que define o nome de usuario 
function defineUserName() {
    let userName = prompt('Por favor insira seu nome');
    localStorage.setItem('nome', userName);
    meuCabecalho.textContent = `Bem-git vindo a Mozilla ${userName}`;
    //verifica se o usuario inseriu um nome e troca o cabeçalho   
    if (!userName || userName === null) {
        defineUserName();        
    }else{
        localStorage.setItem('nome', userName)
        meuCabecalho.innerHTML = `Bem-vindo a Mozilla ${userName}`
    }
    //verifica se já tinha sido inserido um nome de usuario
    if (!localStorage.getItem('nome')) {
        defineUserName();
    } else {
        let savedName = localStorage.getItem('nome');
        meuCabecalho.textContent = `Bem-vindo a Mozilla ${savedName}`;
    }
    
}

meuBotao.onclick = function () { defineUserName();
}