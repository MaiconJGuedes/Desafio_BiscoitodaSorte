const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const minhaImagem = document.getElementById("biscoito1");

const botaoDesfazer = document.getElementById("botao-desfazer");
let classeOriginalDivAnterior = screen1.className;

minhaImagem.addEventListener("click", function() {
  console.log("A imagem foi clicada!");
  screen2.classList.remove("hide");
  screen1.classList.add("hide");
  botaoDesfazer.classList.remove("hide");
});

botaoDesfazer.addEventListener("click", function() {
  console.log("O botão foi clicado!");
  screen1.className = classeOriginalDivAnterior; 
  screen2.classList.add("hide");
  botaoDesfazer.classList.add("hide");
});

