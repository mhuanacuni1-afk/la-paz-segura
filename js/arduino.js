const btnConnect = document.getElementById('btnConnect');
const hwStatus = document.getElementById('hwStatus');

btnConnect.addEventListener('click', async () => {
  if ('serial' in navigator) {
    try {
      // Solicita puerto serie al usuario (Arduino)
      const port = await navigator.serial.requestPort();
      await port.open({ baudRate: 9600 });
      
      btnConnect.innerText = "● CONECTADO";
      btnConnect.style.background = "#15803d";
      btnConnect.style.borderColor = "#22c55e";

      hwStatus.innerHTML = `● CONECTADO <span class="hw-port" style="color:#34d399;">Puerto Activo</span>`;
      hwStatus.style.color = "#34d399";

      const textDecoder = new TextDecoderStream();
      port.readable.pipeTo(textDecoder.writable);
      const reader = textDecoder.readable.getReader();

      // Lectura de flujo de datos continuo desde Arduino
      while (true) {
        const { value, done } = await reader.read();
        if (done) break;
        if (value) {
          const parts = value.trim().split(',');
          if (parts.length >= 2) {
            document.getElementById('sliderRain').value = parts[0];
            document.getElementById('sliderAngle').value = parts[1];
            if (parts[2]) {
              document.getElementById('sliderDensity').value = parts[2];
            }
            updateAll(); // Sincroniza la simulación gráfica
          }
        }
      }
    } catch (err) {
      alert('Error o cancelación al conectar con el Puerto Serial.');
    }
  } else {
    alert('Navegador no compatible. Utiliza Google Chrome o Microsoft Edge para habilitar la Web Serial API.');
  }
});