<template>
  <div class="app-shell">
    <!-- HEADER / MENÚ SUPERIOR -->
    <header class="topbar">
      <div class="topbar-inner">
        <!-- Izquierda: texto institucional -->
        <div class="topbar-left">
          MINISTERIO DE EDUCACIÓN
        </div>

        <!-- Centro: navegación a las vistas -->
        <nav class="topbar-nav">
          <RouterLink to="/" exact-active-class="is-active">Inicio</RouterLink>
          <RouterLink to="/promocion" exact-active-class="is-active">
            Promoción y prevención
          </RouterLink>
          <RouterLink to="/atencion" exact-active-class="is-active">
            Atención a enfermedades
          </RouterLink>
          <RouterLink to="/medicamentos" exact-active-class="is-active">
            Suministro de medicamentos
          </RouterLink>
          <RouterLink to="/llamadas" exact-active-class="is-active">
            Centro de llamadas 1528
          </RouterLink>
          <RouterLink to="/funerarios" exact-active-class="is-active">
            Apoyo funerario
          </RouterLink>
        </nav>

        <!-- Derecha: botón de inicio de sesión -->
        <RouterLink to="/login" class="login-btn">
          Iniciar sesión
        </RouterLink>
      </div>
    </header>

    <!-- Aquí se carga HomeView y las demás vistas -->
    <RouterView />
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<style>
*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, sans-serif;
  background: #020715;
}

/* ====== HEADER ====== */

.topbar {
  background: #040918;
  border-bottom: 2px solid #0052cc;
}

.topbar-inner {
  max-width: 1600px;
  margin: 0 auto;
  padding: 0 32px;
  height: 56px;
  display: flex;
  align-items: center;
}

/* “MINISTERIO DE EDUCACIÓN” a la izquierda */
.topbar-left {
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #8b9ac5;
  white-space: nowrap;
  margin-right: 32px;
}

/* Menú centrado pero tirado hacia la izquierda */
.topbar-nav {
  display: flex;
  gap: 20px;
  margin-right: auto;
}

.topbar-nav a {
  font-size: 0.8rem;
  text-decoration: none;
  color: #e0e6ff;
  padding: 6px 10px;
  border-radius: 999px;
  transition: background 0.2s ease, color 0.2s ease;
  white-space: nowrap;
}

.topbar-nav a:hover {
  background: rgba(255, 255, 255, 0.06);
}

.topbar-nav a.is-active {
  background: #0052cc;
  color: #ffffff;
}

/* Botón Iniciar sesión a la derecha */
.login-btn {
  border-radius: 999px;
  border: 1px solid #6b9bff;
  background: transparent;
  padding: 6px 16px;
  font-size: 0.8rem;
  color: #e0e6ff;
  cursor: pointer;
  text-decoration: none;
  transition: background 0.2s ease, color 0.2s ease, border-color 0.2s ease;
}

.login-btn:hover {
  background: #6b9bff;
  color: #041022;
  border-color: #6b9bff;
}

/* Contenedor general de las vistas */
.app-shell {
  min-height: 100vh;
}
</style>
