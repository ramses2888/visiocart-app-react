# 🛒 VISIOCART — Sistema Inteligente de Gestión de Compras para Supermercados

> **Proyecto de Software — SENA (Análisis y Desarrollo de Software - Ficha 3336163)**  
> **Evidencias:**  GA7-220501096-AA4-EV01  
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

1. 🌐 Módulos Web (visiocart-web)Desarrollado con React, Vite, Tailwind CSS v4 y React Router:T02 Tablet Embebida del Carrito (Modo Kiosk): Interfaz táctil para el carrito inteligente. Muestra en tiempo real la detección visual por IA con bounding box, lista interactiva de productos, cálculo dinámico de subtotal/total, mapa de pasillos y generador de código QR para pago.C02/C03 Terminal POS del Cajero: Consola de caja de alta eficiencia para importación automática de la orden vía QR, verificación cruzada instantánea por báscula de peso e IA, y procesamiento de pago.A02 Dashboard Administrativo & Telemetría: Panel de control centralizado para la supervisión del estado operativo de la flota de carritos (batería, ubicación en mapa, alertas técnicas de hardware) y métricas de ventas.2. 📱 Aplicación Móvil (visiocart-mobile)Desarrollada con React Native y Expo (SDK 58):M02 App del Cliente (Mobile First): Interfaz vertical para el usuario final que permite la autenticación, la generación del código QR único de vinculación con la tablet del carrito (Scan to Bind with Cart #402), la consulta del historial de compras recientes (Purchase History RF-11) y el acceso a cupones promocionales.🎨 Paleta de Colores Corporativa & Diseño VisualEl prototipo cumple con las guías de usabilidad táctil y accesibilidad WCAG 2.1 AA:ColorCódigo HexUso en la InterfazAzul Corporativo#1A4171Encabezados, botones primarios, identidad institucionalGris Técnico#545859Textos secundarios, estructuras y barras lateralesVerde Éxito#16A34ADetección de productos, validaciones correctas, checkoutRojo Alerta#DC2626Cancelación de carrito, alertas de falla técnica o batería🚀 Instrucciones de Ejecución LocalPrerrequisitosNode.js (versión 18 o superior)npm o yarnAplicación Expo Go instalada en tu dispositivo móvil (Android o iOS)💻 1. Ejecutar el Proyecto Web (visiocart-web)Bash# 1. Entrar a la carpeta del proyecto web
cd visiocart-web

# 2. Instalar dependencias
npm install

# 3. Iniciar el servidor de desarrollo Vite
npm run dev
Abre la URL local indicada en la consola (http://localhost:5173/). Utiliza el selector de módulos de la barra superior para navegar entre la Tablet T02, la Terminal POS C02 y el Dashboard A02.📱 2. Ejecutar la Aplicación Móvil (visiocart-mobile)Bash# 1. Entrar a la carpeta del proyecto móvil
cd visiocart-mobile

# 2. Instalar dependencias con compatibilidad
npm install --legacy-peer-deps

# 3. Iniciar el servidor de desarrollo Expo
npx expo start -c
Escanea el código QR generado en la terminal utilizando la aplicación Expo Go desde tu teléfono para previsualizar la interfaz móvil en vivo.📄 Requerimientos Cubiertos (IEEE 830)RF-01: Vinculación mediante código QR dinámico entre el usuario y la tablet del carrito.RF-02: Reconocimiento y registro visual en vivo de productos introducidos.RF-03: Transmisión e importación automática de la lista de compras hacia la terminal POS del cajero.RF-04: Eliminación manual de artículos desde la pantalla táctil.RF-06: Generación de comprobante y QR resumen de cobro para caja.RF-11: Consulta detallada de historial de compras en la aplicación móvil.RF-12: Telemetría y diagnóstico de estado técnico/batería de la flota de carritos.🏫 Información AcadémicaInstitución: Servicio Nacional de Aprendizaje (SENA)Centro de Formación: Centro de Electricidad, Electrónica y Telecomunicaciones (CEET) / Distrito CapitalPrograma: Tecnología en Análisis y Desarrollo de Software (ADSO)Ficha: 3336163
