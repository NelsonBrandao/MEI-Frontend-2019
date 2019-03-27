import { API_KEY } from '../config';

const BASE_URL = 'https://allsportsapi.com';
const PT_CODE = '115';
const PT_LEAGUE = '391';

const generateUrl = (path, params = []) => {
  const strParams = Object.entries(params)
    .map(([ key, value ]) => `${key}=${value}`)
    .join('&');

  return `${BASE_URL}${path}&APIkey=${API_KEY}&${strParams}`;
};

const jsonFetch = (...args) => fetch(...args).then(response => response.json())

export const fetchTeams = (leagueId = PT_LEAGUE) => (
  jsonFetch(generateUrl('/api/football/?met=Teams', { leagueId }))
);

export const fetchTeam = (teamId, leagueId = PT_LEAGUE) => (
  jsonFetch(generateUrl('/api/football/?met=Teams', { leagueId }))
    .then(response => (
      (response.result || []).find(team => team.team_key === teamId)
    ))
);

export const fetchFixtures = (from = '2019-01-01', to = '2019-05-01', leagueId = PT_LEAGUE) => (
  jsonFetch(generateUrl('/api/football/?met=Fixtures', { from, to, leagueId }))
);
