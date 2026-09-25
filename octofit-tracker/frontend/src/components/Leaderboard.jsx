import { API_ENDPOINTS } from '../api'
import { useResource } from '../hooks/useResource'

function Leaderboard() {
  const { items, loading, error } = useResource(API_ENDPOINTS.leaderboard)

  return (
    <section className="page-section">
      <div className="section-heading"><div><p className="eyebrow">Standings</p><h1>Leaderboard</h1><p className="section-copy">A little visibility for every hard-earned point.</p></div><span className="count-badge">This week</span></div>
      <div className="leaderboard-list">
        {loading && <p className="state-message">Loading leaderboard...</p>}
        {error && <p className="state-message error-message">Could not load leaderboard: {error}</p>}
        {!loading && !error && items.map((entry, index) => <article className={`leader-row ${index === 0 ? 'leader-row-top' : ''}`} key={entry.userId || entry.id || entry._id}><span className="rank">{entry.rank ?? index + 1}</span><span className="leader-name"><strong>{entry.name}</strong><small>{entry.userId}</small></span><strong className="leader-points">{entry.points ?? 0}<small> pts</small></strong></article>)}
      </div>
    </section>
  )
}

export default Leaderboard
