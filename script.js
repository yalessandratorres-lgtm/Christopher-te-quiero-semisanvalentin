let intentos = 0;

function abrirSobre() {
    document.getElementById('musica').play();
    document.getElementById('pantalla-sobre').classList.add('oculto');
    document.getElementById('pantalla-pregunta').classList.remove('oculto');
}

function rechazar() {
    intentos++;
    const msj = document.getElementById('mensaje-gatito');
    const img = document.getElementById('img-gatito');
    
    if (intentos === 1) {
        msj.innerText = "No seas malo, yo te quiero mucho... 😿";
        img.src = "https://media.tenor.com/X9S7vV6p7mAAAAAi/sad-mochi.gif";
    } else if (intentos === 2) {
        msj.innerText = "Juro que no te arrepentirás si me das el sí, te voy a querer muy bonito ✨";
        img.src = "https://media.tenor.com/H5T0K6T53_MAAAAi/peach-cat-cry.gif";
    } else {
        msj.innerText = "Ni modo, ¡ya no te zafas de mí! 😂❤️";
        setTimeout(aceptar, 2000);
    }
}

function aceptar() {
    document.getElementById('pantalla-pregunta').classList.add('oculto');
    document.getElementById('pantalla-postal').classList.remove('oculto');
    iniciarContador();
    crearPetalos();
}

function iniciarContador() {
    const fechaInicio = new Date('October 11, 2025 00:00:00').getTime();
    setInterval(() => {
        const ahora = new Date().getTime();
        const diff = ahora - fechaInicio;
        const d = Math.floor(diff / (1000 * 60 * 60 * 24));
        const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((diff % (1000 * 60)) / 1000);
        document.getElementById("contador").innerHTML = `${d}d ${h}h ${m}m ${s}s`;
    }, 1000);
}

function crearPetalos() {
    const container = document.getElementById('petalos-container');
    setInterval(() => {
        const petalo = document.createElement('div');
        petalo.classList.add('petalo');
        petalo.innerHTML = '❤️';
        petalo.style.left = Math.random() * 100 + 'px';
        petalo.style.top = Math.random() * 200 + 'px';
        container.appendChild(petalo);
        setTimeout(() => petalo.remove(), 4000);
    }, 300);
}
