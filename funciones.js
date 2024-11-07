
// Redirección al índice si se abre sin referencia
if (document.referrer === "") {
  window.location.href = "index.html";
}

// Evitar copia de URL
document.addEventListener("beforecopy", function (e) {
  e.preventDefault();
  window.location.href = "index.html";
});

// Función para copiar el código
document.getElementById("copyButton").addEventListener("click", function () {
  const codeContent = document.getElementById("codigoJava").innerText;
  navigator.clipboard.writeText(codeContent).then(
    function () {
      alert("Código copiado al portapapeles");
    },
    function (err) {
      alert("Error al copiar el código: ", err);
    }
  );
});

// Función para regresar
document.getElementById("backButton").addEventListener("click", function () {
  window.location.href = "index.html";
});

// Deshabilitar clic derecho
document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
});

// Deshabilitar teclas de acceso directo como F12, Ctrl+Shift+I, etc.
document.addEventListener("keydown", function (e) {
  // F12
  if (e.key === "F12") {
    e.preventDefault();
  }

  // Ctrl+Shift+I
  if (e.ctrlKey && e.shiftKey && e.key === "I") {
    e.preventDefault();
  }

  // Ctrl+Shift+C
  if (e.ctrlKey && e.shiftKey && e.key === "C") {
    e.preventDefault();
  }

  // Ctrl+Shift+J
  if (e.ctrlKey && e.shiftKey && e.key === "J") {
    e.preventDefault();
  }

  // Ctrl+U (ver fuente)
  if (e.ctrlKey && e.key === "u") {
    e.preventDefault();
  }
});

// Desactivar arrastre de elementos
document.addEventListener("dragstart", function (e) {
  e.preventDefault();
});

// Función para redirigir a un sitio web específico
function goToWebsite(website) {
    if (website) {
        window.location.href = website; // Redirige al sitio seleccionado
    }
}