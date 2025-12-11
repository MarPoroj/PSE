<!-- src/views/HomeView.vue -->
<template>
  <main class="home-page">
    <!-- HERO / BANNER PRINCIPAL -->
    <section class="hero">
      <div class="hero-inner">
        <div class="hero-text">
          <p class="hero-kicker">
            Acuerdo Gubernativo 36-2024 y Acuerdo Ministerial 815-2024
          </p>

          <h1 class="hero-title">Portal de Salud Escolar (PSE)</h1>

          <p class="hero-description">
            Plataforma del Ministerio de Educación para centralizar atenciones médicas,
            llamadas, suministro de medicamentos, promoción de la salud y apoyos
            funerarios para estudiantes del sistema educativo nacional.
          </p>

          <form class="hero-search" @submit.prevent>
            <input
              class="hero-search-input"
              type="search"
              placeholder="Buscar información del programa..."
            />
            <button class="hero-search-button" type="submit">
              Buscar
            </button>
          </form>
        </div>

        <div class="hero-logos">
          <img
            :src="logoMinSalud"
            alt="Ministerio de Educación y Ministerio de Salud Pública"
          />
        </div>
      </div>
    </section>

    <!-- MÓDULOS PRINCIPALES (CARDS GRANDES) -->
    <section class="modules-section">
      <div class="modules-inner">
        <h1 class="modules-title">Beneficios del PSE</h1>

        <div class="modules-grid">
          <RouterLink
            v-for="mod in modules"
            :key="mod.id"
            class="module-card-link"
            :to="mod.link"
          >
            <article
              class="module-card"
              :style="{ backgroundImage: `url(${mod.img})` }"
            >
              <div class="module-overlay">
                <p class="module-number">{{ mod.numero }}</p>
                <h3 class="module-title">{{ mod.titulo }}</h3>

                <p class="module-description">
                  {{ mod.descripcion }}
                </p>

                <button class="module-button">
                  MÁS INFORMACIÓN
                </button>
              </div>
            </article>
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- TARJETAS DE DATOS (5 TARJETAS, UNA POR MÓDULO) -->
    <section class="summary-section">
      <div class="summary-inner">
        <div class="summary-row-top">
          <!-- Módulo 2: Atención a enfermedades -->
          <article class="summary-card-kpi">
            <h3 class="kpi-title">Atención a enfermedades</h3>

            <div class="kpi-item">
              <div class="kpi-icon">🧑‍⚕️</div>
              <div>
                <p class="kpi-label">Consultas atendidas</p>
                <p class="kpi-value">{{ statsAtencion.consultas }}</p>
              </div>
            </div>

            <div class="kpi-item">
              <div class="kpi-icon">🎒</div>
              <div>
                <p class="kpi-label">Estudiantes atendidos</p>
                <p class="kpi-value">{{ statsAtencion.estudiantes }}</p>
              </div>
            </div>

            <div class="kpi-gender">
              <span class="kpi-dot kpi-dot-male"></span>
              Hombres {{ statsAtencion.hombres }}
              <span class="kpi-separator">·</span>
              <span class="kpi-dot kpi-dot-female"></span>
              Mujeres {{ statsAtencion.mujeres }}
            </div>
          </article>

          <!-- Módulo 3: Suministro de medicamentos -->
          <article class="summary-card-kpi">
            <h3 class="kpi-title">Suministro de medicamentos</h3>

            <div class="kpi-item">
              <div class="kpi-icon">💊</div>
              <div>
                <p class="kpi-label">Unidades entregadas</p>
                <p class="kpi-value">{{ statsMedicamentos.unidades }}</p>
              </div>
            </div>

            <div class="kpi-item">
              <div class="kpi-icon">🏥</div>
              <div>
                <p class="kpi-label">Establecimientos con suministro</p>
                <p class="kpi-value">{{ statsMedicamentos.establecimientos }}</p>
              </div>
            </div>

            <p class="kpi-footnote">
              Periodo de referencia: {{ statsMedicamentos.periodo }}
            </p>
          </article>

          <!-- Módulo 4: Centro de llamadas 1528 -->
          <article class="summary-card-kpi">
            <h3 class="kpi-title">Centro de llamadas 1528</h3>

            <div class="kpi-item">
              <div class="kpi-icon">🎧</div>
              <div>
                <p class="kpi-label">Llamadas al 1528</p>
                <p class="kpi-value">{{ statsLlamadas.llamadas }}</p>
              </div>
            </div>

            <p class="kpi-footnote">
              Dato de ejemplo para el prototipo. En la versión final se alimentará con los
              registros reales del sistema de llamadas.
            </p>
          </article>

          <!-- Módulo 5: Apoyo económico (servicios funerarios) -->
          <article class="summary-card-kpi">
            <h3 class="kpi-title">Apoyo económico funerario</h3>

            <div class="kpi-item">
              <div class="kpi-icon">👨‍👩‍👧‍👦</div>
              <div>
                <p class="kpi-label">Familias beneficiadas</p>
                <p class="kpi-value">{{ statsApoyoFunerario.familias }}</p>
              </div>
            </div>

            <div class="kpi-item">
              <div class="kpi-icon">💰</div>
              <div>
                <p class="kpi-label">Monto total entregado (ejemplo)</p>
                <p class="kpi-value">{{ statsApoyoFunerario.montoTotal }}</p>
              </div>
            </div>

            <div class="kpi-item">
              <div class="kpi-icon">⚖️</div>
              <div>
                <p class="kpi-label">Monto máximo por estudiante</p>
                <p class="kpi-value">{{ statsApoyoFunerario.montoMaximo }}</p>
              </div>
            </div>
          </article>

          <!-- Resumen de aportes económicos (casos, hombres, mujeres) -->
          <article class="summary-card-kpi">
            <h3 class="kpi-title">Aportes a familias</h3>

            <div class="kpi-item">
              <div class="kpi-icon">📊</div>
              <div>
                <p class="kpi-label">Casos atendidos</p>
                <p class="kpi-value">{{ statsAportes.casos }}</p>
              </div>
            </div>

            <div class="kpi-item">
              <div class="kpi-icon">👦</div>
              <div>
                <p class="kpi-label">Masculinos</p>
                <p class="kpi-value">{{ statsAportes.masculinos }}</p>
              </div>
            </div>

            <div class="kpi-item">
              <div class="kpi-icon">👧</div>
              <div>
                <p class="kpi-label">Femeninos</p>
                <p class="kpi-value">{{ statsAportes.femeninos }}</p>
              </div>
            </div>

            <p class="kpi-footnote">
              Monto total entregado: {{ statsAportes.montoTotal }}
            </p>
          </article>
        </div>
      </div>
    </section>

    <!-- NOTICIAS Y ACTIVIDADES (CARRUSEL) -->
    <section class="news-section">
      <div class="news-inner">
        <header class="news-header">
          <h2>Noticias y actividades</h2>
          <p>
            Hechos destacados de los módulos del Programa de Salud Escolar en los centros educativos.
          </p>
        </header>

        <div class="news-card">
          <div
            class="news-image"
            :style="{ backgroundImage: `url(${currentNews.imagen})` }"
          >
            <div class="news-gradient"></div>

            <div class="news-content">
              <p class="news-tag">{{ currentNews.modulo }}</p>
              <p class="news-date">{{ currentNews.fecha }}</p>
              <h3 class="news-title">{{ currentNews.titulo }}</h3>
              <p class="news-text">
                {{ currentNews.descripcion }}
              </p>
            </div>
          </div>

          <!-- Controles -->
          <div class="news-controls">
            <button class="news-btn" @click="prevSlide">◀ Anterior</button>

            <div class="news-dots">
              <button
                v-for="(item, index) in newsItems"
                :key="item.id"
                class="news-dot"
                :class="{ 'news-dot-active': index === currentIndex }"
                @click="goToSlide(index)"
              />
            </div>

            <button class="news-btn" @click="nextSlide">Siguiente ▶</button>
          </div>
        </div>
      </div>
    </section>

    <!-- PIE DE PÁGINA -->
    <footer class="site-footer">
      <img
        :src="franjaMinSalud"
        alt="Franja institucional MINEDUC / MSPAS"
        class="footer-stripe"
      />

      <div class="footer-inner">
        <div class="footer-column">
          <h3 class="footer-title">Programa de Salud Escolar (PSE)</h3>
          <p class="footer-text">
            Iniciativa del Ministerio de Educación para acompañar la salud
            integral de las y los estudiantes del sistema educativo nacional.
          </p>
        </div>

        <div class="footer-column">
          <h4 class="footer-subtitle">Secciones</h4>
          <ul class="footer-list">
            <li>Promoción y prevención</li>
            <li>Atención a enfermedades</li>
            <li>Suministro de medicamentos</li>
            <li>Centro de llamadas 1528</li>
            <li>Apoyo de servicios funerarios</li>
          </ul>
        </div>

        <div class="footer-column">
          <h4 class="footer-subtitle">Contacto</h4>
          <p class="footer-text">
            Ministerio de Educación de Guatemala<br />
            Dirección General de Gestión de la Calidad Educativa (DIGECADE)
          </p>
          <p class="footer-text">
            Correo: <span>saludescolar@mineduc.gob.gt</span>
          </p>
        </div>
      </div>

      <div class="footer-bottom">
        <p>© 2025 Ministerio de Educación de Guatemala. Todos los derechos reservados.</p>
        <p class="footer-version">Versión prototipo frontend PSE</p>
      </div>
    </footer>
  </main>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'

import imgPromocion from '@/assets/mod-promocion.jpg'
import imgAtencion from '@/assets/mod-atencion.jpg'
import imgMedicamentos from '@/assets/mod-medicamentos.jpg'
import imgLlamadas from '@/assets/mod-llamadas.jpg'
import imgFunerario from '@/assets/mod-funerario.jpg'

import logoMinSalud from '@/assets/logo-mineduc-mspas.png'
import franjaMinSalud from '@/assets/franja-mineduc-mspas.png'

/* ===== CARDS GRANDES (ARRIBA) ===== */
const modules = [
  {
    id: 1,
    numero: 'Módulo 1',
    titulo: 'Promoción y prevención',
    descripcion:
      'Acciones para promover la salud y prevenir enfermedades en los centros educativos.',
    img: imgPromocion,
    link: '/promocion'
  },
  {
    id: 2,
    numero: 'Módulo 2',
    titulo: 'Atención a enfermedades',
    descripcion:
      'Registro de atenciones médicas y seguimiento de casos de las y los estudiantes.',
    img: imgAtencion,
    link: '/atencion'
  },
  {
    id: 3,
    numero: 'Módulo 3',
    titulo: 'Suministro de medicamentos',
    descripcion:
      'Inventario y distribución de medicamentos del programa a los establecimientos.',
    img: imgMedicamentos,
    link: '/medicamentos'
  },
  {
    id: 4,
    numero: 'Módulo 4',
    titulo: 'Centro de llamadas 1528',
    descripcion:
      'Llamadas recibidas, derivaciones y seguimiento de casos relacionados con PSE.',
    img: imgLlamadas,
    link: '/llamadas'
  },
  {
    id: 5,
    numero: 'Módulo 5',
    titulo: 'Apoyo de servicios funerarios',
    descripcion:
      'Gestión del aporte económico para gastos funerarios de estudiantes.',
    img: imgFunerario,
    link: '/funerarios'
  }
]

/* ===== NOTICIAS (CARRUSEL) ===== */
const newsItems = [
  {
    id: 1,
    modulo: 'Promoción y prevención',
    fecha: '3 FEBRERO 2025',
    titulo: 'Jornada de vacunación en escuela rural',
    descripcion:
      'Se realizó una jornada de vacunación, desparasitación y control de crecimiento para niñas y niños de preprimaria y primaria.',
    imagen: imgPromocion
  },
  {
    id: 2,
    modulo: 'Atención a enfermedades',
    fecha: '15 FEBRERO 2025',
    titulo: 'Jornada integral de salud en establecimientos rurales',
    descripcion:
      'Equipos de salud realizaron consultas médicas, controles de crecimiento y consejería en hábitos saludables.',
    imagen: imgAtencion
  },
  {
    id: 3,
    modulo: 'Centro de llamadas 1528',
    fecha: '28 ENERO 2025',
    titulo: 'Aumento de consultas telefónicas por infecciones respiratorias',
    descripcion:
      'El centro 1528 reporta un incremento de llamadas relacionadas con cuadros respiratorios en la población escolar.',
    imagen: imgLlamadas
  }
]

const currentIndex = ref(0)
const currentNews = computed(() => newsItems[currentIndex.value])

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % newsItems.length
}

const prevSlide = () => {
  currentIndex.value =
    (currentIndex.value - 1 + newsItems.length) % newsItems.length
}

const goToSlide = (index) => {
  currentIndex.value = index
}

let intervalId

onMounted(() => {
  intervalId = setInterval(nextSlide, 8000) // 8 segundos
})

onBeforeUnmount(() => {
  if (intervalId) clearInterval(intervalId)
})

/* ===== DATOS DE LAS 5 TARJETAS ===== */
const statsAtencion = {
  consultas: '674,656',
  estudiantes: '222,704',
  hombres: '52%',
  mujeres: '48%'
}

const statsMedicamentos = {
  unidades: '800,000',
  establecimientos: '1,350',
  periodo: 'enero – julio 2025'
}

const statsLlamadas = {
  llamadas: '24,221'
}

const statsApoyoFunerario = {
  familias: '329',
  montoTotal: 'Q2,467,000',
  montoMaximo: 'Q7,500.00'
}

const statsAportes = {
  casos: '329',
  masculinos: '193',
  femeninos: '136',
  montoTotal: 'Q2,467,000'
}
</script>

<style scoped>
.home-page {
  background: #020617;
  color: #f9fafb;
}

/* ========= HERO / BANNER ========= */

.hero {
  background: #020617;
  padding: 32px 48px 40px;
}

.hero-inner {
  max-width: 1600px;
  margin: 0 auto;
  display: flex;
  gap: 32px;
  align-items: center;
  justify-content: space-between;
}

.hero-text {
  flex: 1 1 60%;
}

.hero-kicker {
  font-size: 0.75rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #a5b4fc;
  margin-bottom: 6px;
}

.hero-title {
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 10px;
}

.hero-description {
  font-size: 0.9rem;
  max-width: 620px;
  color: #e5e7eb;
  line-height: 1.5;
  margin-bottom: 18px;
}

.hero-search {
  display: flex;
  gap: 8px;
  max-width: 480px;
}

.hero-search-input {
  flex: 1;
  padding: 10px 14px;
  border-radius: 999px;
  border: 1px solid rgba(148, 163, 184, 0.6);
  font-size: 0.85rem;
  background: #0f172a;
  color: #e5e7eb;
}

.hero-search-input::placeholder {
  color: #9ca3af;
}

.hero-search-button {
  padding: 10px 18px;
  border-radius: 999px;
  border: none;
  background: #2563eb;
  color: white;
  font-size: 0.85rem;
  cursor: pointer;
}

.hero-search-button:hover {
  background: #1d4ed8;
}

.hero-logos {
  flex: 1 1 40%;
  display: flex;
  justify-content: flex-end;
}

.hero-logos img {
  max-width: 360px;
  height: auto;
}

/* ========= MÓDULOS PRINCIPALES ========= */

.modules-section {
  background: #f5f5f7;
  padding: 24px 40px 40px;
}

.modules-inner {
  max-width: 100%;
  margin: 0 auto;
}

.modules-title {
  font-size: 0.95rem;
  font-weight: 600;
  margin-bottom: 18px;
  color: #020617;
}

.modules-grid {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 24px;
}

.module-card-link {
  text-decoration: none;
  color: inherit;
  display: block;
}

.module-card {
  position: relative;
  height: 260px;
  border-radius: 18px;
  overflow: hidden;
  background-size: cover;
  background-position: center;
  box-shadow: 0 16px 40px rgba(15, 23, 42, 0.35);
  cursor: pointer;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
}

.module-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 50px rgba(15, 23, 42, 0.45);
}

.module-overlay {
  position: absolute;
  inset: 0;
  padding: 14px 16px 18px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background: linear-gradient(to top, rgba(15, 23, 42, 0.9), transparent);
  color: #f9fafb;
}

.module-number {
  font-size: 0.75rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #bfdbfe;
  margin-bottom: 4px;
}

.module-title {
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 6px;
}

.module-description {
  font-size: 0.8rem;
  line-height: 1.4;
  opacity: 0.92;
  margin-bottom: 10px;
}

.module-button {
  align-self: flex-start;
  padding: 6px 14px;
  border-radius: 999px;
  border: 1px solid #93c5fd;
  background: rgba(15, 23, 42, 0.75);
  color: #e5e7eb;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  cursor: pointer;
  transition: background 0.15s ease, color 0.15s ease;
}

.module-card:hover .module-button {
  background: #3b82f6;
  color: #0b1120;
}

/* ========= TARJETAS DE DATOS (5) ========= */

.summary-section {
  background: #f9fafb; /* fondo blanco para esa franja */
  padding: 28px 40px 36px;
}

.summary-inner {
  max-width: 1600px;
  margin: 0 auto;
}

.summary-row-top {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 18px;
}

.summary-card-kpi {
  background: radial-gradient(circle at top left, #2563eb, #0b1120);
  border-radius: 20px;
  padding: 16px 18px;
  box-shadow: 0 22px 50px rgba(15, 23, 42, 0.35);
}

.kpi-title {
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 10px;
}

.kpi-item {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 6px;
}

.kpi-icon {
  width: 32px;
  height: 32px;
  border-radius: 999px;
  background: rgba(15, 23, 42, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
}

.kpi-label {
  font-size: 0.78rem;
  color: #c7d2fe;
}

.kpi-value {
  font-size: 1.05rem;
  font-weight: 700;
}

.kpi-gender {
  margin-top: 4px;
  font-size: 0.75rem;
  color: #e5e7eb;
  display: flex;
  align-items: center;
  gap: 6px;
}

.kpi-dot {
  width: 7px;
  height: 7px;
  border-radius: 999px;
  display: inline-block;
}

.kpi-dot-male {
  background: #60a5fa;
}

.kpi-dot-female {
  background: #fb7185;
}

.kpi-separator {
  opacity: 0.7;
}

.kpi-footnote {
  font-size: 0.72rem;
  color: #d1d5db;
  margin-top: 4px;
}

/* ========= NOTICIAS (CARRUSEL) ========= */

.news-section {
  background: #e5e7eb;
  padding: 32px 40px 40px;
}

.news-inner {
  max-width: 1600px;
  margin: 0 auto;
}

.news-header h2 {
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 4px;
  color: #020617;
}

.news-header p {
  font-size: 0.8rem;
  color: #4b5563;
  margin-bottom: 16px;
}

.news-card {
  background: #ffffff;
  border-radius: 24px;
  box-shadow: 0 24px 60px rgba(15, 23, 42, 0.2);
  overflow: hidden;
  padding: 16px 16px 12px;
}

.news-image {
  position: relative;
  border-radius: 18px;
  overflow: hidden;
  height: 360px; /* más alto que antes */
  background-size: cover;
  background-position: center;
}

.news-gradient {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(15, 23, 42, 0.9), transparent 45%);
}

.news-content {
  position: absolute;
  inset: auto 0 18px 0;
  padding-inline: 24px;
  color: #f9fafb;
}

.news-tag {
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  color: #bfdbfe;
  margin-bottom: 4px;
}

.news-date {
  font-size: 0.7rem;
  margin-bottom: 2px;
}

.news-title {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 4px;
}

.news-text {
  font-size: 0.8rem;
  max-width: 780px;
  color: #e5e7eb;
}

.news-controls {
  margin-top: 10px;
  padding-inline: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.news-btn {
  border-radius: 999px;
  border: 1px solid #d1d5db;
  background: #ffffff;
  font-size: 0.75rem;
  padding: 4px 14px;
  cursor: pointer;
  color: #111827;
}

.news-btn:hover {
  background: #e5e7eb;
}

.news-dots {
  display: flex;
  gap: 6px;
}

.news-dot {
  width: 7px;
  height: 7px;
  border-radius: 999px;
  border: none;
  background: #cbd5f5;
  cursor: pointer;
}

.news-dot-active {
  width: 16px;
  background: #2563eb;
}

/* ---------- Responsive ---------- */

@media (max-width: 1600px) {
  .summary-row-top {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
}

@media (max-width: 1400px) {
  .modules-grid {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  .summary-row-top {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

@media (max-width: 1100px) {
  .hero-inner {
    flex-direction: column;
    align-items: flex-start;
  }

  .hero-logos {
    justify-content: flex-start;
  }

  .modules-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .summary-row-top {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 900px) {
  .hero {
    padding-inline: 24px;
  }

  .modules-section {
    padding-inline: 20px;
  }

  .modules-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .summary-section,
  .news-section {
    padding-inline: 24px;
  }
}

@media (max-width: 640px) {
  .hero-inner {
    gap: 20px;
  }

  .hero-title {
    font-size: 1.4rem;
  }

  .modules-grid {
    grid-template-columns: minmax(0, 1fr);
  }

  .module-card {
    height: 220px;
  }

  .summary-row-top {
    grid-template-columns: minmax(0, 1fr);
  }
}

/* ========= FOOTER ========= */

.site-footer {
  background: #020617;
  color: #e5e7eb;
}

.footer-stripe {
  display: block;
  width: 100%;
  height: auto;
}

.footer-inner {
  max-width: 1600px;
  margin: 18px auto 8px;
  padding: 0 40px 16px;
  display: grid;
  grid-template-columns: 2fr 1.3fr 1.3fr;
  gap: 32px;
}

.footer-title {
  font-size: 0.95rem;
  font-weight: 600;
  margin-bottom: 8px;
}

.footer-subtitle {
  font-size: 0.85rem;
  font-weight: 600;
  margin-bottom: 8px;
}

.footer-text {
  font-size: 0.78rem;
  line-height: 1.5;
  color: #d1d5db;
  margin-bottom: 4px;
}

.footer-text span {
  color: #f9fafb;
}

.footer-list {
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: 0.78rem;
  color: #d1d5db;
}

.footer-list li + li {
  margin-top: 3px;
}

.footer-bottom {
  border-top: 1px solid rgba(55, 65, 81, 0.8);
  padding: 8px 40px 10px;
  font-size: 0.7rem;
  color: #9ca3af;
  display: flex;
  justify-content: space-between;
  max-width: 1600px;
  margin: 0 auto 8px;
}

.footer-version {
  opacity: 0.8;
}

@media (max-width: 900px) {
  .footer-inner {
    grid-template-columns: 1fr;
    padding-inline: 24px;
  }

  .footer-bottom {
    flex-direction: column;
    gap: 4px;
    text-align: left;
    padding-inline: 24px;
  }
}
</style>
