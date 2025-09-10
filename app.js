// Elementos del DOM
const resultado = document.getElementById("resultado");
const cantidadInput = document.getElementById("cantidad");
const historialDiv = document.getElementById("historial");
const btnLimpiar = document.getElementById("btn-limpiar");

// Eventos de botones de dados
document.getElementById("btn-d4").addEventListener("click", () => tirarDados(4));
document.getElementById("btn-d6").addEventListener("click", () => tirarDados(6));
document.getElementById("btn-d8").addEventListener("click", () => tirarDados(8));
document.getElementById("btn-d10").addEventListener("click", () => tirarDados(10));
document.getElementById("btn-d12").addEventListener("click", () => tirarDados(12));
document.getElementById("btn-d20").addEventListener("click", () => tirarDados(20));

// Tirada individual
function tirarUnDado(lados) {
    return Math.floor(Math.random() * lados) + 1;
}

// Varias tiradas
function generarTiradas(cantidad, lados) {
    let tiradas = [];
    for (let i = 0; i < cantidad; i++) {
        tiradas.push(tirarUnDado(lados));
    }
    return tiradas;
}

// Mostrar resultado y guardar en localStorage
function mostrarResultado(cantidad, lados, tiradas) {
    const total = tiradas.reduce((acc, num) => acc + num, 0);
    const mensaje = `Has tirado ${cantidad}d${lados}: [ ${tiradas.join(", ")} ] → Total: ${total}`;

    resultado.textContent = mensaje;

    // Guardar en historial (localStorage)
    guardarHistorial(mensaje);

    // Actualizar historial en pantalla automáticamente
    mostrarHistorial();
}

// Función principal
function tirarDados(lados) {
    const cantidad = parseInt(cantidadInput.value) || 1;
    const tiradas = generarTiradas(cantidad, lados);
    mostrarResultado(cantidad, lados, tiradas);
}

// Guardar tirada en localStorage
function guardarHistorial(mensaje) {
    let historial = JSON.parse(localStorage.getItem("historialDados")) || [];
    historial.push(mensaje);
    localStorage.setItem("historialDados", JSON.stringify(historial));
}

// Mostrar historial en pantalla
function mostrarHistorial() {
    let historial = JSON.parse(localStorage.getItem("historialDados")) || [];

    if (historial.length === 0) {
        historialDiv.textContent = "📭 No hay tiradas registradas.";
        return;
    }

    historialDiv.innerHTML = "<h4>📜 Historial de tiradas:</h4>";
    historial.forEach((t, i) => {
        const p = document.createElement("p");
        p.textContent = `Turno ${i + 1}: ${t}`;
        historialDiv.appendChild(p);
    });
}

//Limpiar historial
btnLimpiar.addEventListener("click", limpiarHistorial)
function limpiarHistorial() {
  localStorage.removeItem("historialDados");
  mostrarHistorial();
}

//Historial al recargar pagina
mostrarHistorial();
