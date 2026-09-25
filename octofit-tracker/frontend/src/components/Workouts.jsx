import { API_ENDPOINTS } from '../api'
import { useResource } from '../hooks/useResource'

const codespaceName = import.meta.env.VITE_CODESPACE_NAME?.trim()
const workoutsEndpoint = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev/api/workouts/`
  : API_ENDPOINTS.workouts

function Workouts() {
  const { items, loading, error } = useResource(workoutsEndpoint)

  return (
    <section className="page-section">
      <div className="section-heading"><div><p className="eyebrow">Suggestions</p><h1>Workouts</h1><p className="section-copy">Small, practical plans for the next good decision.</p></div><span className="count-badge">{items.length} plans</span></div>
      <div className="resource-grid workout-grid">
        {loading && <p className="state-message">Loading workouts...</p>}
        {error && <p className="state-message error-message">Could not load workouts: {error}</p>}
        {!loading && !error && items.map((workout) => <article className="resource-card workout-card" key={workout.id || workout._id}><span className="soft-tag">{workout.focus}</span><h2>{workout.title}</h2><div className="card-metric"><span>{workout.difficulty}</span><strong>{workout.durationMinutes} min</strong></div></article>)}
      </div>
    </section>
  )
}

export default Workouts
