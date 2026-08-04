---
title: "En que estoy trabajando."
author: "Rodrigo Poblete"
description: "Que es lo que me encuentro haciendo actualmente."
pubDate: "2026-06-20"
tags: ["Proyecto actual", "Automatización de docker"]
repos: ["https://github.com/rodrigoDev0n/Docker_auto_arquitecture"]
---

## Bienvenido a este post en donde te contare en que me encuentro trabajando actualmente y su repositorio.

Actualmente me encuentro refactorizando mi proyecto utilizado para mi tesís en la universidad.



## ¿De que trata el proyecto?

El proyecto nace de un problema que viví en una experiencia laboral anterior. En ese momento, el proveedor de VPS que utilizábamos sufrió un hackeo y nos vimos obligados a migrar todos nuestros servicios a un servidor nuevo.

Eso, en teoría, no era un gran problema de hecho, aproechamos la migración para integrar Docker, ya que nos facilitaba las actualizaciones y mejoraba bastante nuestro flujo de trabajo. El problema apareció con uno de los servicios que habíamos desarrollado internamente.

Se trataba de un servicio en **Node.js** encargado de realizar **scrapping** sobre el SII (Servicio de impuestos internos) para emitir y extraer boletas de un e-commerce de uso interno de la empresa.

Entonces, ¿cuál es el problema?

Eramos un equipo pequeño. Además de desarrollar, también nos encargábamos de mantener la infraestructura del servidor. Si bien conocía herrmientas como **Nginx**, gran parte del proceso seguía siendo bastante manual, y a medida que aumentaba la cantidad de servicios que desplegábamos, mantener todo se volvía cada vez más complejo.

El servicio de scraping utilizaba **Puppeteer**, que necesita un navegador headless para funcionar. Esto significa que dentro del contenedor era necesario instalar **Chromium**-

Aquí fue donde apareció el verdadero dolor de cabeza.

Estabamos intentando estandarizar todas las imágenes de Docker utilizando una misma base para todos los servicios, pero la imagen que elegimos no era compatible con varios de los paquetes necesarios para instalar Chromium.

Recuerdo haber estado hasta las cuatro o cinco de la mañana intentando encontrar el problema. Al principio pensé en un error en el código, pero después de varias pruebas decidí revisar los logs del contenedor. Ahí fue cuando me di cuenta que varios de los paquetes simplemente no podían instalarse con la imagen que estábamos utilizando.

Después de leer los logs durante un buen rato y probar varias soluciones que no funcionaron, llegué a la conclusión de que la mejor opción era cambiar completamente la imagen de Docker por una que sí soportara todos los paquetes necesarios para ejecutar Chromium.

Hice el cambio, levanté nuevamente el servicio.... y volvimos a estar en linea.

Fue relativamente simple la solución, pero encontrarla tomó bastante tiempo.

### Entonces, ¿qué hace el proyecto?

La idea principal de mi tesis era reducir esa brecha de complejidad que existe al trabajar con contenedores sobretodo en equipos pequeños donde toca tocar muchas tecnologías.

La aplicación permite diseñar de forma visual la arquitectura de un proyecto mediante un lienzo. A partir de ese diseño puedes configurar un VPS y desplegar automáticamente toda la aplicación utilizando Docker y Docker Compose, sin depender de un proveedor de nube específico.

La idea es que puedas concentrarte en construir tu aplicación y no perder tiempo configurando manualmente la infraestructura cada vez que necesites desplegar un proyecto.

### ¿Por que lo estoy refactorizando?

Principalmente porque, desde que terminé la tesis, he aprendido muchisimo más sobre arquitectrura de software, buenas prácticas y desarrollo en general.

Además, estoy agregando un pipeline que funciona completamente en local. La idea es que puedas levantar y probar tus proyectos directamente en tu computador sin tener que configurar Docker desde el prmer momento. Si más adelante quieres desplegar la aplicación en un VPS, el proyecto se encargará de generar automáticamente toda la configuración necesaria tambien se ha agregado la posibilidad de utilizar modelos de ollama para ejecutar el pipeline pero aún no lo modifico para utilizar el que el usuario quiera.




