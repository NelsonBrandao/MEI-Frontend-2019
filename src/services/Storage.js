const sessionKey = 'SESSION';

export const getSession = () => {
  try {
    return JSON.parse(localStorage.getItem(sessionKey));
  } catch (e) {
    return;
  }
}

export const setSession = (token) => {
  return localStorage.setItem(sessionKey, JSON.stringify(token));
}
