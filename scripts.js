document.getElementById('drawButton').addEventListener('click', function() {
    const count = parseInt(document.getElementById('participantCount').value);
    if (isNaN(count) || count < 1) {
        alert("Por favor, insira um número válido de participantes.");
        return;
    }

    const winnerNumber = Math.floor(Math.random() * count) + 1; // Sorteia um número do ganhador

    // Adiciona o efeito de suspense
    let suspenseText = document.getElementById('result');
    suspenseText.style.display = 'none';
    suspenseText.textContent = 'Sorteando...';
    suspenseText.style.display = 'block';

    let countdown = 3; // Tempo da contagem regressiva
    const countdownInterval = setInterval(() => {
        suspenseText.textContent = `Ganhador em ${countdown}...`;
        countdown--;
        if (countdown < 0) {
            clearInterval(countdownInterval);
            suspenseText.textContent = `Ganhador número: ${winnerNumber}`;
        }
    }, 1000);
});