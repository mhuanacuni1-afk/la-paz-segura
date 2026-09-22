// Capturamos los elementos del DOM
const inputLluvia = document.getElementById('inputLluvia');
const valLluvia = document.getElementById('valLluvia');
const inputInclinacion = document.getElementById('inputInclinacion');
const valInclinacion = document.getElementById('valInclinacion');

const cuadroEstado = document.getElementById('cuadroEstado');
const textoRiesgoCuadro = document.getElementById('textoRiesgoCuadro');
const textoRiesgoMapa = document.getElementById('textoRiesgoMapa');

// Función que actualiza los colores y textos en tiempo real al mover los sliders
function actualizarSimulacion() {
    const lluvia = Number(inputLluvia.value);
    const inclinacion = Number(inputInclinacion.value);

    // Actualizamos textos de los rangos
    valLluvia.textContent = lluvia + " mm/h";
    valInclinacion.textContent = inclinacion + "°";

    // Lógica de cambio de estados (Rojo, Amarillo, Verde)
    if (lluvia > 120 || inclinacion > 50) {
        // ZONA CRÍTICA / ROJO
        cuadroEstado.className = "cuadro-dinamico fondo-rojo";
        textoRiesgoCuadro.textContent = "ZONA CRÍTICA";
        textoRiesgoMapa.textContent = "RIESGO ALTO";
    } else if (lluvia > 50 || inclinacion > 25) {
        // ZONA ESTABLE / AMARILLO
        cuadroEstado.className = "cuadro-dinamico fondo-amarillo";
        textoRiesgoCuadro.textContent = "ZONA ESTABLE";
        textoRiesgoMapa.textContent = "RIESGO MEDIO";
    } else {
        // ZONA SEGURA / VERDE
        cuadroEstado.className = "cuadro-dinamico fondo-verde";
        textoRiesgoCuadro.textContent = "ZONA SEGURA";
        textoRiesgoMapa.textContent = "ZONA SEGURA";
    }
}
const alertaFrontal = document.getElementById('alertaFrontal');

// Dentro de las condiciones de lluvia/inclinación en tu función existente:
if (lluvia > 120 || inclinacion > 50) {
    alertaFrontal.className = "tag-alerta texto-rojo";
    alertaFrontal.textContent = "▲ ZONA A CRÍTICA";
} else if (lluvia > 50 || inclinacion > 25) {
    alertaFrontal.className = "tag-alerta texto-amarillo";
    alertaFrontal.textContent = "▲ ZONA A ESTABLE";
} else {
    alertaFrontal.className = "tag-alerta texto-verde";
    alertaFrontal.textContent = "▲ ZONA A SEGURA";
}
// Escuchamos cuando el usuario mueve las barras de desplazamiento
inputLluvia.addEventListener('input', actualizarSimulacion);
inputInclinacion.addEventListener('input', actualizarSimulacion);