// src/helpers/useAuth.js
import { ref } from 'vue'

// Estado global sencillo (sin backend todavía)
const isAuthenticated = ref(false)
const user = ref(null)

function login(email, password) {
  // 💡 Aquí está el usuario "quemado" de ejemplo
  const validEmail = 'admin@pse.mineduc.gt'
  const validPassword = '1234'

  if (email === validEmail && password === validPassword) {
    isAuthenticated.value = true
    user.value = {
      email,
      nombre: 'Administrador PSE'
    }
    return true
  }

  // Si falla
  isAuthenticated.value = false
  user.value = null
  return false
}

function logout() {
  isAuthenticated.value = false
  user.value = null
}

export function useAuth() {
  return {
    isAuthenticated,
    user,
    login,
    logout
  }
}

// Para usar en el router guard
export { isAuthenticated, user }

