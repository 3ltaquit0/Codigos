/*
// Redirección al índice si se abre sin referencia
if (document.referrer === "") {
  window.location.href = "../index.html"; // Adjusted path to index in CodigosMain
}
*/

// Evitar copia de URL
document.addEventListener("beforecopy", function (e) {
  e.preventDefault();
  window.location.href = "../index.html"; // Adjusted path to index in CodigosMain
});

// Función para copiar el código
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

// Funciones para regresar al índice
  const backButton1 = document.getElementById("backButton1");
  if (backButton1) {
      backButton1.addEventListener("click", function () {
          window.location.href = "../fundamentosdeprogramacion.html"; // Adjusted path to index in CodigosMain
      });
  }
});

  const backButton2 = document.getElementById("backButton2");
  if (backButton2) {
      backButton2.addEventListener("click", function () {
          window.location.href = "../estructuradedatoscodigos.html"; // Adjusted path to index in CodigosMain
      });
}

  const backButton3 = document.getElementById("backButton3");
  if (backButton3) {
      backButton3.addEventListener("click", function () {
          window.location.href = "../programacionorientadaaobjetos.html"; // Adjusted path to index in CodigosMain
      });
}

  const backButton4 = document.getElementById("backButton4");
  if (backButton4) {
      backButton4.addEventListener("click", function () {
          window.location.href = "../estructuradedatos.html"; // Adjusted path to index in CodigosMain
      });
}

  const backButton5 = document.getElementById("backButton5");
  if (backButton5) {
      backButton5.addEventListener("click", function () {
          window.location.href = "../topicosAP.html"; // Adjusted path to index in CodigosMain
      });
}

// Deshabilitar clic derecho
document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
});

// Deshabilitar teclas de acceso directo como F12, Ctrl+Shift+I, etc.
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


// Funciones para redirigir a una página específica
function goToWebsite(page) {
  if (page) {
      window.location.href = page;
  }
}

function goToWebsite1(page) {
  if (page) {
      window.location.href = 'FundamentosDeProgramacion/' + page;
  }
}

function goToWebsite2(page) {
  if (page) {
      window.location.href = 'EstructuraDeDatos/' + page;
  }
}

function goToWebsite3(page) {
  if (page) {
      window.location.href = 'ProgramacionOrientadaAObjetos/' + page;
  }
}
