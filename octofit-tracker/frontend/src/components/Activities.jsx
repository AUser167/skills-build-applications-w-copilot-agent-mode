import { API_ENDPOINTS } from '../api'
import { useResource } from '../hooks/useResource'

function Activities() {
  const { items, loading, error } = useResource(API_ENDPOINTS.activities)

  return (
    <section className="page-section">
      <div className="section-heading"><div><p className="eyebrow">Movement log</p><h1>Activities</h1><p className="section-copy">Recent sessions, captured and ready to celebrate.</p></div><span className="count-badge">{items.length} sessions</span></div>
      <div className="data-panel">
        {loading && <p className="state-message">Loading activities...</p>}
        {error && <p className="state-message error-message">Could not load activities: {error}</p>}
        {!loading && !error && <div className="table-responsive"><table className="table align-middle mb-0"><thead><tr><th>Activity</th><th>User</th><th>Duration</th><th>Distance</th><th className="text-end">Calories</th></tr></thead><tbody>{items.map((activity) => <tr key={activity.id || activity._id}><td><span className="activity-dot" />{activity.type}</td><td>{activity.userId}</td><td>{activity.durationMinutes} min</td><td>{activity.distanceKm ?? 0} km</td><td className="text-end points-cell">{activity.calories ?? 0}</td></tr>)}</tbody></table></div>}
      </div>
    </section>
  )
}

export default Activities
