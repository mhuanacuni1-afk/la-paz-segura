La Paz Segura 🛡️

**Proyecto académico de 2.º semestre** para el monitoreo de datos IoT mediante un sistema de **Gemelo Digital**.

### Modos de funcionamiento

* **Modo Real:** Conecta una placa Arduino mediante **Web Serial API** y permite visualizar los datos recibidos en tiempo real a través de un dashboard web.
* **Modo Web:** Permite interactuar con una interfaz gráfica, visualizar datos simulados mediante un dashboard dinámico y utilizar un minijuego.

###  Demo en vivo

**Netlify:** https://la-paz-segura.netlify.app

---

##  Objetivos del proyecto

* Visualizar el estado de sensores físicos en una interfaz web en tiempo real.
* Implementar comunicación entre Arduino y el navegador mediante la **Web Serial API**.
* Mantener la coherencia de los datos entre el hardware (Arduino) y el frontend.
* Integrar una representación digital de los datos obtenidos desde el sistema físico.

---

##  Tecnologías utilizadas

* **HTML5**
* **CSS3**
* **JavaScript**
* **Web Serial API**
* **C++ / Arduino**
* **Arduino**
* **Netlify**

---

##  Funcionamiento

El sistema permite conectar un Arduino al navegador mediante USB. La **Web Serial API** permite que la aplicación web reciba los datos enviados por Arduino y los represente visualmente en el dashboard.

**Arduino → USB → Web Serial API → Dashboard Web**

También cuenta con un **Modo Web**, que permite probar la interfaz sin necesidad de conectar físicamente el Arduino.

---

##  Tipo de proyecto

Proyecto académico desarrollado como parte de la formación de **2.º semestre**.
