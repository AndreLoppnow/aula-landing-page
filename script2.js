const botao = document.getElementById('botao');
let contador = 0;

function atualizarCorDoBotao() {
    if (contador >= 5) {
        botao.style.backgroundColor = "green";
        botao.style.color = "white";
    }
    if (contador >= 15) {
        botao.style.backgroundColor = "yellow";
        botao.style.color = "orange";
    }
    if (contador >= 25) {
        botao.style.backgroundColor = "orange";
        botao.style.color = "red";
    }
    if (contador >= 50) {
        botao.style.backgroundColor = "red";
        botao.style.color = "white";
    }
}

botao.addEventListener("click", ()=>{
    contador++;
    botao.textContent = contador;
    atualizarCorDoBotao();
});