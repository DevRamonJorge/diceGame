// Gera um número aleatório entre 1 e 6
const randomNumber1 = Math.floor(Math.random() * 6) + 1;
const randomNumber2 = Math.floor(Math.random() * 6) + 1;

// Seleciona o h1
const title = document.querySelector('h1');

function setImages(){
    const img1 = document.getElementsByClassName('img1')[0];
    /* Seleciona a pasta images e pega o arquivo com base no número gerado pelo 
    ramdomNumber1*/
    img1.setAttribute('src', `images/dice${randomNumber1}.png`);

    const img2 = document.getElementsByClassName('img2')[0];
    img2.setAttribute('src', `images/dice${randomNumber2}.png`);

    if(randomNumber1 > randomNumber2){
        title.innerHTML = `🚩 Player 1 Wins!`
    }else if (randomNumber2 > randomNumber1){
        title.innerHTML = `Player 2 Wins! 🚩`
    }else{
        title.innerHTML = `Draw!`
    }
}


// Recarrega a página
function loadPage(){

    // Seleciona o botão
    const button = document.getElementById('refreshButton');
        
    //Adiciona evento de clique e recarrega a págiana
        button.addEventListener('click', () => {
            window.location.reload();
        });

        // Chama a função para mudar a imagem
        setImages();
}

loadPage();
