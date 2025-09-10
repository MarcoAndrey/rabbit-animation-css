// Aumenta el conteo al atrapar los bunnys
// let score = 0;
// const scoreElement = document.getElementById("score");
// const bunnies = document.querySelectorAll(".bunny");

// bunnies.forEach((bunny) => {
//   bunny.addEventListener("click", () => {
//     score++;
//     scoreElement.textContent = "Score: " + score;
//   });
// });

let score = 0;
const scoreElement = document.getElementById("score");
const bunnies = document.querySelectorAll(".bunny");
let difficulty = "easy"; // nivel inicial

function mostrarModal(mensaje) {
    document.getElementById("modal-text").textContent = mensaje;
    document.getElementById("modal").classList.add("show");
}

function cerrarModal() {
    document.getElementById("modal").classList.remove("show");
}

bunnies.forEach((bunny) => {
    bunny.addEventListener("click", () => {
        if (!bunny.checked) {
            // evita contar varias veces el mismo bunny
            score++;
            scoreElement.textContent = "Score: " + score;

            // Cada 6 puntos mostrar mensaje
            if (score % 6 === 0) {
                if (score === 6) {
                    setTimeout(() => {
                        mostrarModal("🎉 ¡Has atrapado 6 bunnys!");
                        nextLevel();
                    }, 100);
                } else if (score === 12) {
                    setTimeout(() => {
                        mostrarModal("⚡ Muy bien, ahora nivel MEDIO!");
                        nextLevel();
                    }, 100);
                } else if (score === 18) {
                    setTimeout(() => {
                        mostrarModal(
                            "🏆 ¡Has completado todos los niveles, eres un maestro cazador de bunnys!"
                        );
                    }, 100);
                }
            }
        }
    });
});

function nextLevel() {
    if (difficulty === "easy") {
        difficulty = "medium";
        changeSpeed(0.7); // conejos más rápidos
    } else if (difficulty === "medium") {
        difficulty = "hard";
        changeSpeed(0.4); // aún más rápidos
    }
}

// Cambiar velocidad de animación de los conejos
function changeSpeed(multiplier) {
    bunnies.forEach((bunny) => {
        let parent = bunny.parentElement;
        bunny.style.animationDuration =
            parseFloat(getComputedStyle(bunny).animationDuration) * multiplier + "s";
        parent.style.animationDuration =
            parseFloat(getComputedStyle(parent).animationDuration) * multiplier + "s";
    });
}