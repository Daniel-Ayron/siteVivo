
function abrirTexto(modalId) {
    document.getElementById(modalId).style.display = "block";
}

function fecharTexto(modalId) {
    document.getElementById(modalId).style.display = "none";
}


// Fecha o texto (que é um modal) se o usuário clicar fora do conteúdo
window.onclick = function(event) {
    const modals = document.getElementsByClassName("modal");
    for (let i = 0; i < modals.length; i++) {
        if (event.target === modals[i]) {
            modals[i].style.display = "none";
        }
    }
}
