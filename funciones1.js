
// Función para redirigir a una página específica en su respectiva subcarpeta
function goToWebsite(page, folder = '') {
    if (page) {
        const path = folder ? `${folder}/${page}` : page;
        window.location.href = path;
    }
}


// Evitar copiar contenido
document.addEventListener("copy", function (e) {
    e.preventDefault();
    alert("No está permitido copiar contenido.");
});

// Evitar clic derecho
document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
});

// Evitar teclas como F12, Ctrl+Shift+I, Ctrl+U, etc.
document.addEventListener("keydown", function (e) {
    if (e.key === "F12" || 
        (e.ctrlKey && e.shiftKey && ["I", "C", "J"].includes(e.key)) || 
        (e.ctrlKey && e.key === "u")) {
        e.preventDefault();
    }
});


// Desactivar arrastre de elementos
document.addEventListener("dragstart", function (e) {
    e.preventDefault();
});

// Función para copiar código al portapapeles
document.addEventListener("DOMContentLoaded", function () {
    const copyButton = document.getElementById("copyButton");
    const codeContent = document.getElementById("codigoJava");

    if (copyButton && codeContent) {
        copyButton.addEventListener("click", function () {
            navigator.clipboard.writeText(codeContent.innerText)
                .then(() => alert("Código copiado al portapapeles"))
                .catch(err => alert("Error al copiar el código: " + err));
        });
    }
});