import { API_ENDPOINTS } from '../api'
import { useResource } from '../hooks/useResource'

function Teams() {
  const { items, loading, error } = useResource(API_ENDPOINTS.teams)

  return (
    <section className="page-section">
      <div className="section-heading"><div><p className="eyebrow">Competition</p><h1>Teams</h1><p className="section-copy">Friendly rivalries make consistency easier to see.</p></div><span className="count-badge">{items.length} teams</span></div>
      <div className="resource-grid">
        {loading && <p className="state-message">Loading teams...</p>}
        {error && <p className="state-message error-message">Could not load teams: {error}</p>}
        {!loading && !error && items.map((team, index) => <article className="resource-card" key={team.id || team._id}><div className="card-index">0{index + 1}</div><h2>{team.name}</h2><p>{team.members?.length ?? 0} active members</p><div className="card-metric"><span>Total points</span><strong>{team.totalPoints ?? 0}</strong></div></article>)}
      </div>
    </section>
  )
}

export default Teams
