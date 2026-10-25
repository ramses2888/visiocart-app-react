import React from "react";
import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false, // Oculta la cabecera predeterminada de navegación
      }}
    />
  );
}
