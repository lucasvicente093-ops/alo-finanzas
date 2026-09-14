import { AUTH_USER, verifyCredentials } from './auth-core.js';

const SESSION_KEY = 'alo.finanzas.authenticated.v1';
const ATTEMPTS_KEY = 'alo.finanzas.auth.attempts.v1';
const MAX_ATTEMPTS = 5;
const LOCK_TIME_MS = 60_000;
const gate = document.querySelector('#auth-gate');
const form = document.querySelector('#auth-form');
const error = document.querySelector('#auth-error');
const submit = document.querySelector('#auth-submit');
const logout = document.querySelector('#auth-logout');
let countdownTimer;

function readAttempts() {
  try {
    const value = JSON.parse(localStorage.getItem(ATTEMPTS_KEY) || '{}');
    return {
      count: Number.isInteger(value.count) && value.count >= 0 ? value.count : 0,
      lockedUntil: Number.isFinite(value.lockedUntil) ? value.lockedUntil : 0
    };
  } catch {
    return { count: 0, lockedUntil: 0 };
  }
}

function writeAttempts(value) {
  try { localStorage.setItem(ATTEMPTS_KEY, JSON.stringify(value)); } catch { /* El acceso sigue funcionando sin persistir intentos. */ }
}

function unlock() {
  document.body.classList.remove('auth-locked');
  gate.hidden = true;
  document.querySelector('#content')?.focus({ preventScroll: true });
}

function updateLockMessage() {
  const attempts = readAttempts();
  const seconds = Math.ceil((attempts.lockedUntil - Date.now()) / 1000);
  if (seconds <= 0) {
    clearInterval(countdownTimer);
    writeAttempts({ count: 0, lockedUntil: 0 });
    submit.disabled = false;
    error.textContent = '';
    return;
  }
  submit.disabled = true;
  error.textContent = `Demasiados intentos. Probá de nuevo en ${seconds} segundos.`;
}

function startLockCountdown() {
  updateLockMessage();
  clearInterval(countdownTimer);
  countdownTimer = setInterval(updateLockMessage, 1000);
}

try {
  if (sessionStorage.getItem(SESSION_KEY) === '1') unlock();
} catch { /* Si la sesión no está disponible, se muestra el acceso. */ }

document.querySelector('#auth-username').value = AUTH_USER;
if (readAttempts().lockedUntil > Date.now()) startLockCountdown();

form.addEventListener('submit', async event => {
  event.preventDefault();
  const attempts = readAttempts();
  if (attempts.lockedUntil > Date.now()) {
    startLockCountdown();
    return;
  }
  submit.disabled = true;
  error.textContent = 'Verificando acceso…';
  const data = new FormData(form);
  try {
    if (await verifyCredentials(data.get('username'), data.get('password'))) {
      writeAttempts({ count: 0, lockedUntil: 0 });
      sessionStorage.setItem(SESSION_KEY, '1');
      form.reset();
      unlock();
      return;
    }
    const count = attempts.count + 1;
    if (count >= MAX_ATTEMPTS) {
      writeAttempts({ count: 0, lockedUntil: Date.now() + LOCK_TIME_MS });
      startLockCountdown();
    } else {
      writeAttempts({ count, lockedUntil: 0 });
      error.textContent = `Usuario o contraseña incorrectos. Quedan ${MAX_ATTEMPTS - count} intentos.`;
      submit.disabled = false;
      document.querySelector('#auth-password').select();
    }
  } catch {
    error.textContent = 'No se pudo verificar el acceso en este navegador.';
    submit.disabled = false;
  }
});

logout.addEventListener('click', () => {
  try { sessionStorage.removeItem(SESSION_KEY); } catch { /* La recarga vuelve a mostrar el acceso. */ }
  location.reload();
});
