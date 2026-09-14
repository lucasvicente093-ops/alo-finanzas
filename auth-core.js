export const AUTH_USER = 'Aloha';
const AUTH_SALT = 'T10nqme8JWm1wMt56DLwzA==';
const AUTH_HASH = 'at9bGnkHgnnN57fesdNux90JZ/fGg6exEavxvZYLeV0=';
const AUTH_ITERATIONS = 310000;

function fromBase64(value) {
  return Uint8Array.from(atob(value), character => character.charCodeAt(0));
}

function constantTimeEqual(left, right) {
  if (left.length !== right.length) return false;
  let difference = 0;
  for (let index = 0; index < left.length; index += 1) difference |= left[index] ^ right[index];
  return difference === 0;
}

async function derivePassword(password) {
  const material = await crypto.subtle.importKey(
    'raw',
    new TextEncoder().encode(password),
    'PBKDF2',
    false,
    ['deriveBits']
  );
  const bits = await crypto.subtle.deriveBits(
    { name: 'PBKDF2', hash: 'SHA-256', salt: fromBase64(AUTH_SALT), iterations: AUTH_ITERATIONS },
    material,
    256
  );
  return new Uint8Array(bits);
}

export async function verifyCredentials(username, password) {
  const derived = await derivePassword(String(password));
  const passwordMatches = constantTimeEqual(derived, fromBase64(AUTH_HASH));
  const userMatches = String(username).trim().toLocaleLowerCase('es') === AUTH_USER.toLocaleLowerCase('es');
  return userMatches && passwordMatches;
}
