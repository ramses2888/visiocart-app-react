# 🛒 VISIOCART — Sistema Inteligente de Gestión de Compras para Supermercados

> **Proyecto de Software — SENA (Análisis y Desarrollo de Software - Ficha 3336163)**  
> **Evidencia:** GA6-220501096-AA3-EV01 / GA7-220501096-AA4-EV01  
> **Autor:** Ramses Arnold Meneses Gonzalez  
> **Fecha:** Octubre de 2026  

---

## 📌 Descripción del Proyecto

**VISIOCART** es una solución tecnológica integral diseñada para optimizar la experiencia de compra en el sector retail (supermercados de grandes superficies) mediante el uso de inteligencia artificial, visión artificial y telemetría IoT integrada en carritos de compra inteligentes.

El sistema resuelve la problemática recurrente de los tiempos excesivos de espera en las cajas de pago, permitiendo la automatización del registro de productos en tiempo real, el control continuo de presupuesto para el usuario y la simplificación del checkout en punto de venta a menos de 30 segundos.

---

## 🛠️ Arquitectura del Ecosistema de Software

El proyecto comprende una arquitectura de software compuesta por dos entornos principales:

```text
visiocart-app/
├── 🌐 visiocart-web/        # Plataforma Web React (Tablet Carrito + POS + Dashboard)
└── 📱 visiocart-mobile/     # Aplicación Móvil React Native Expo (App Cliente)
