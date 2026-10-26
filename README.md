Markdown
# 🛒 VISIOCART — Sistema Inteligente de Gestión de Compras para Supermercados

> **Proyecto de Software — SENA (Análisis y Desarrollo de Software - Ficha 3336163)**  
> **Evidencias:** GA6-220501096-AA3-EV01 / GA7-220501096-AA4-EV01  
> **Autor:** Ramses Arnold Meneses Gonzalez  
> **Fecha:** Octubre de 2026  

---

## 📌 Descripción del Proyecto

**VISIOCART** es una solución tecnológica integral diseñada para optimizar la experiencia de compra en el sector retail (supermercados de grandes superficies) mediante el uso de inteligencia artificial, visión artificial y telemetría IoT integrada en carritos de compra inteligentes.

El sistema resuelve la problemática recurrente de los tiempos excesivos de espera en las cajas de pago, permitiendo la automatización del registro de productos en tiempo real, el control continuo de presupuesto para el usuario y la simplificación del checkout en punto de venta a menos de 30 segundos.

---

## 🛠️ Arquitectura del Ecosistema de Software

El repositorio está organizado en una arquitectura monorepo limpia que alberga los dos entornos principales de la aplicación:

```text
visiocart-app-react/
├── 🌐 visiocart-web/        # Plataforma Web React + Vite (Tablet Carrito + POS + Dashboard)
└── 📱 visiocart-mobile/     # Aplicación Móvil React Native Expo (App Cliente)
```

1. 🌐 Módulos Web (visiocart-web)
Desarrollado con React, Vite, Tailwind CSS v4 y React Router:

T02 Tablet Embebida del Carrito (Modo Kiosk): Interfaz táctil para el carrito inteligente. Muestra en tiempo real la detección visual por IA con bounding box, lista interactiva de productos, cálculo dinámico de subtotal/total, mapa de pasillos y generador de código QR para pago.
<img width="1850" height="945" alt="image" src="https://github.com/user-attachments/assets/d0b4b4ba-37aa-44cc-8a35-80fecd133ae6" />


C02/C03 Terminal POS del Cajero: Consola de caja de alta eficiencia para importación automática de la orden vía QR, verificación cruzada instantánea por báscula de peso e IA, y procesamiento de pago.
<img width="1845" height="942" alt="image" src="https://github.com/user-attachments/assets/96fbc794-fc7d-4aa1-8a03-dccc645b06f8" />


A02 Dashboard Administrativo & Telemetría: Panel de control centralizado para la supervisión del estado operativo de la flota de carritos (batería, ubicación en mapa, alertas técnicas de hardware) y métricas de ventas.
<img width="1841" height="941" alt="image" src="https://github.com/user-attachments/assets/1be372e8-2c9f-4b5b-9963-e027bd838e43" />


2. 📱 Aplicación Móvil (visiocart-mobile)
Desarrollada con React Native y Expo (SDK 58):

M02 App del Cliente (Mobile First): Interfaz vertical para el usuario final que permite la autenticación, la generación del código QR único de vinculación con la tablet del carrito (Scan to Bind with Cart #402), la consulta del historial de compras recientes (Purchase History RF-11) y el acceso a cupones promocionales.
<img width="360" height="800" alt="image" src="https://github.com/user-attachments/assets/b56ca26e-3a04-49c1-a297-3f3c01eb346c" />


🎨 Paleta de Colores Corporativa & Diseño Visual
El prototipo cumple con las guías de usabilidad táctil y accesibilidad WCAG 2.1 AA:

Color	Código Hex	Uso en la Interfaz
Azul Corporativo	#1A4171	Encabezados, botones primarios, identidad institucional
Gris Técnico	#545859	Textos secundarios, estructuras y barras laterales
Verde Éxito	#16A34A	Detección de productos, validaciones correctas, checkout
Rojo Alerta	#DC2626	Cancelación de carrito, alertas de falla técnica o batería
🚀 Instrucciones de Ejecución Local
Prerrequisitos
Node.js (versión 18 o superior)

npm o yarn

Aplicación Expo Go instalada en tu dispositivo móvil (Android o iOS)

💻 1. Ejecutar el Proyecto Web (visiocart-web)
Bash
# 1. Entrar a la carpeta del proyecto web
cd visiocart-web

# 2. Instalar dependencias
npm install

# 3. Iniciar el servidor de desarrollo Vite
npm run dev
Abre la URL local indicada en la consola (http://localhost:5173/). Utiliza el selector de módulos de la barra superior para navegar entre la Tablet T02, la Terminal POS C02 y el Dashboard A02.

📱 2. Ejecutar la Aplicación Móvil (visiocart-mobile)
Bash
# 1. Entrar a la carpeta del proyecto móvil
cd visiocart-mobile

# 2. Instalar dependencias con compatibilidad
npm install --legacy-peer-deps

# 3. Iniciar el servidor de desarrollo Expo
npx expo start -c
Escanea el código QR generado en la terminal utilizando la aplicación Expo Go desde tu teléfono para previsualizar la interfaz móvil en vivo.

📄 Requerimientos Cubiertos (IEEE 830)
RF-01: Vinculación mediante código QR dinámico entre el usuario y la tablet del carrito.

RF-02: Reconocimiento y registro visual en vivo de productos introducidos.

RF-03: Transmisión e importación automática de la lista de compras hacia la terminal POS del cajero.

RF-04: Eliminación manual de artículos desde la pantalla táctil.

RF-06: Generación de comprobante y QR resumen de cobro para caja.

RF-11: Consulta detallada de historial de compras en la aplicación móvil.

RF-12: Telemetría y diagnóstico de estado técnico/batería de la flota de carritos.

🏫 Información Académica
Institución: Servicio Nacional de Aprendizaje (SENA)

Centro de Formación: Centro de Electricidad, Electrónica y Telecomunicaciones (CEET) / Distrito Capital

Programa: Tecnología en Análisis y Desarrollo de Software (ADSO)

Ficha: 3336163
