const colors = ["green", "red", "rgba(133,122,200)", "#f15025"]; //cores base
const btn = document.getElementById("btn"); //botão
const color = document.querySelector(".color"); //cores

// evento de click no botão
// todas as vezes que o usuário clicar no botão, o fundo troca de cor
btn.addEventListener("click", function () {
    // pega um numero aleatório entre 0 e 3
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

function getRandomNumber() {
    // arredonda o número
    return Math.floor(Math.random() * colors.length);
}