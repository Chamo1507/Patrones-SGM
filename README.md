# Plan de Implementacion: Modulo de Invitaciones y Notificaciones Omnicanal

**Autor:** Samuel Ramirez Bueno

**Proyecto:** Sistema de Gestion de Madero

**Objetivo:** Desarrollar un componente desacoplado y escalable en TypeScript para construir invitaciones complejas (basadas en formularios web) y transmitirlas a multiples proveedores externos utilizando los patrones de diseno **Builder** y **Adapter**.

---

## Fase 1: Arquitectura y Definicion de Contratos (Dia 1)

El objetivo de esta fase es aislar las reglas de negocio de las herramientas de terceros.

* **Paso 1.1:** Crear el modelo de datos unificado (`Invitacion.ts`). Este reflejara fielmente las tres secciones de los formularios del software de gestion (Datos del solicitante, Informacion del evento, Lugar y horarios).
* **Paso 1.2:** Disenar la interfaz del adaptador (`TargetNotificationService`). Esta interfaz define el contrato unico (`enviarInvitacion`) que la aplicacion consumira, bloqueando la dependencia directa con APIs externas.

**Entregables:**

* Archivo de interfaz y entidades base en el repositorio.

---

## Fase 2: Desarrollo del Componente de Construccion (Dias 2 - 3)

Implementacion del patron **Builder** para segmentar el guardado progresivo de los formularios.

* **Paso 2.1:** Desarrollar `InvitacionBuilder.ts` con una interfaz fluida (metodos que retornan `this`).
* **Paso 2.2:** Dividir los metodos de construccion segun la UI:
  * `setDatosSolicitante()` (Mapea el formulario 1).
  * `setInfoEvento()` (Mapea el formulario 2).
  * `setLogistica()` (Mapea el formulario 3).
* **Paso 2.3:** Anadir logica de empaquetado en el metodo `build()` para asegurar que no se generen invitaciones con datos obligatorios vacios.

**Entregables:**

* Clase Builder completamente probada de forma aislada.

---

## Fase 3: Integracion de Adaptadores de Mensajeria (Dias 4 - 5)

Implementacion del patron **Adapter** para traducir las solicitudes del sistema hacia los SDKs de terceros.

* **Paso 3.1:** Crear `SendGridAdapter`. Encapsulara la logica para formatear la estructura de la invitacion a un cuerpo HTML compatible con correos electronicos transaccionales.
* **Paso 3.2:** Crear `TwilioWhatsAppAdapter`. Encapsulara la logica para limpiar cadenas, manejar prefijos telefonicos nacionales (`+52`) y reducir el texto al limite de caracteres de plantillas de WhatsApp.

**Entregables:**

* Modulo de adaptadores con soporte inicial para correo y mensajeria instantanea.
