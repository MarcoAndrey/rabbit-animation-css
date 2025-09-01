let score = 0;
const scoreElement = document.getElementById("score");
const bunnies = document.querySelectorAll(".bunny");

bunnies.forEach((bunny) => {
  bunny.addEventListener("click", () => {
    score++;
    scoreElement.textContent = "Score: " + score;
  });
});
