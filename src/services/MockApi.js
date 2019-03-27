const BASE_URL = 'http://localhost:8000';
const PT_LEAGUE = '391';

const generateUrl = (path, params = []) => {
  return `${BASE_URL}${path}`;
};

const jsonFetch = (...args) => fetch(...args).then(response => response.json())

export const fetchTeams = (leagueId = PT_LEAGUE) => (
  jsonFetch(generateUrl('/teams.json', { leagueId }))
);

export const fetchTeam = (teamId, leagueId = PT_LEAGUE) => (
  jsonFetch(generateUrl('/teams.json', { leagueId }))
    .then(response => (
      (response.result || []).find(team => team.team_key === teamId)
    ))
);

export const fetchFixtures = (from = '2019-01-01', to = '2019-05-01', leagueId = PT_LEAGUE) => (
  jsonFetch(generateUrl('/fixtures.json', { from, to, leagueId }))
);
