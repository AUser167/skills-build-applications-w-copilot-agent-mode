const codespaceName = import.meta.env.VITE_CODESPACE_NAME?.trim()

export const API_BASE_URL = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev`
  : 'http://localhost:8000'

export const API_ENDPOINTS = {
  users: `${API_BASE_URL}/api/users/`,
  teams: `${API_BASE_URL}/api/teams/`,
  activities: `${API_BASE_URL}/api/activities/`,
  leaderboard: `${API_BASE_URL}/api/leaderboard/`,
  workouts: `${API_BASE_URL}/api/workouts/`,
}

export const normalizeCollection = (payload) => {
  if (Array.isArray(payload)) return payload
  if (Array.isArray(payload?.results)) return payload.results
  if (Array.isArray(payload?.data)) return payload.data
  return []
}

export const fetchCollection = async (endpoint, signal) => {
  const response = await fetch(endpoint, { signal })
  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`)
  }
  return normalizeCollection(await response.json())
}
