const STATS_BASE_URL = 'http://localhost:4000';
const USER_BASE_URL = 'http://localhost:4001';

const generateUrl = (base, path, params = []) => {
  const strParams = Object.entries(params)
    .map(([ key, value ]) => `${key}=${value}`)
    .join('&');

  return [
    `${base}${path}`,
    strParams
  ]
    .filter(value => value)
    .join('?');
};

const jsonFetch = (url, options = {}) => (
  fetch(
    url,
    {
      ...options,
      headers: {
        ...(options.headers || {}),
        'Content-Type': 'application/json'
      },
      body: options.body ? JSON.stringify(options.body) : options.body,
    }
  )
    .then(response => response.json())
)

export const fetchTeams = () => jsonFetch(generateUrl(STATS_BASE_URL, '/teams'));
export const fetchTeam = (teamId) => jsonFetch(generateUrl(STATS_BASE_URL, `/teams/${teamId}`));
export const fetchFixtures = () => jsonFetch(generateUrl(STATS_BASE_URL, '/fixtures'));

export const login = (body) => (
  jsonFetch(generateUrl(USER_BASE_URL, '/login'), { method: 'post', body })
);
export const signup = (body) => (
  jsonFetch(generateUrl(USER_BASE_URL, '/signup'), { method: 'post', body })
);
export const fetchFavoriteTeams = (token) => (
  jsonFetch(
    generateUrl(USER_BASE_URL, `/favorite`),
    {
      method: 'get',
      headers: { authorization: token ? `Bearer ${token}` : undefined }
    }
  )
);
export const setFavoriteTeam = (teamId, token) => (
  jsonFetch(
    generateUrl(USER_BASE_URL, `/favorite/${teamId}`),
    {
      method: 'post',
      headers: { authorization: token ? `Bearer ${token}` : undefined }
    }
  )
);
