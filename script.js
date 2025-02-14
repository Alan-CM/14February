const messages = [
    "¿Estás segura? 😞",
    "¿Realmente segura? 🫣",
    "¿Estás bien? 😫",
    "Por favoooor 😓",
    "¡Piénsalo bien!🤔",
    "Si dices que no, me pondré mal 😭",
    "Estaré muy triste 😭",
    "Está bien, dejaré de preguntar...🙂‍↔️",
    "Es broma, ¡di que sí por favor! 😍"
];

let messageIndex = 0;

function handleNoClick() {
    const noBtn = document.querySelector(".no-btn");
    const yesBtn = document.querySelector(".yes-btn");

    // Cambia el texto del botón "No"
    noBtn.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;

    // Aumenta el tamaño del botón "Sí"
    const currentSize = parseFloat(window.getComputedStyle(yesBtn).fontSize);
    const newSize = currentSize * 1.5;
    yesBtn.style.fontSize = `${newSize}px`;

    // Animación de crecimiento
    yesBtn.style.transform = "scale(1.2)";
    yesBtn.style.transition = "transform 0.3s ease";

    // Reset de animación
    setTimeout(() => {
        yesBtn.style.transform = "scale(1)";
    }, 100);
}

function handleYesClick() {
    window.location.href = "./yes.html";
}

// ------------------ Corazones Animados ------------------
document.addEventListener("DOMContentLoaded", () => {
    function createHeart() {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = Math.random() * 3 + 2 + 's';
        document.getElementById('hearts').appendChild(heart);
        
        setTimeout(() => {
            heart.remove();
        }, 5000);
    }

    // Crear corazones cada 300ms
    setInterval(createHeart, 300);
});
