const loveCard = document.getElementById('loveCard');

loveCard.addEventListener('click', () => {
    if (!loveCard.classList.contains('open')) { // Verifica si NO tiene la clase 'open'
        loveCard.classList.add('open'); // Solo agrega la clase 'open' una vez
    }
});

