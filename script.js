// constante para referência ao endpoint de fotos de gatinhos
const API_URL = "https://thatcopy.pw/catapi/rest";
const catImg = document.getElementById("cat-photo");
const catBtn = document.getElementById("btn-change-cat");

// função para buscar as imagens
// function expression em conjunto com arrow function
const buscaGatinhos = async () => {
    try{
        const dados = await fetch(API_URL);
        const vjson = await dados.json();

        return vjson.webpurl;
    }
    catch(e){
        console.log(e.message);
    }
};

// função para mostrar a imagem na página
// function expression em conjunto com arrow function
const carregaImagemGatinho = async () => {
    try {
        catImg.src = await buscaGatinhos();
    }
    catch(e){
        console.log(e.message);
    }
};

// quando o DOM da página estiver carregado
document.addEventListener("DOMContentLoaded", function(){
    // puxo uma imagem
    carregaImagemGatinho();
    
    // e toda vez que o botão for clicado, puxo uma imagem
    catBtn.addEventListener("click", carregaImagemGatinho());
});