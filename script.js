let btnFistView = document.getElementById('btnContinueMain');
let seccWelcome = document.getElementById('seccWelcome');
let seccA = document.getElementById('seccA');
btnFistView.addEventListener('click', changeView);

function changeView() {
        btnFistView.classList.add('slide-bottom');
        seccWelcome.style.backgroundImage  = "url('img/Fondo2.png')";
        seccA.style.display = 'flex';
}
