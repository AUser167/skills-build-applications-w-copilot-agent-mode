import { API_ENDPOINTS } from '../api'
import { useResource } from '../hooks/useResource'

function Users() {
  const { items, loading, error } = useResource(API_ENDPOINTS.users)

  return (
    <section className="page-section">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Community</p>
          <h1>Users</h1>
          <p className="section-copy">Keep an eye on the people making progress across OctoFit.</p>
        </div>
        <span className="count-badge">{items.length} members</span>
      </div>
      <div className="data-panel">
        {loading && <p className="state-message">Loading users...</p>}
        {error && <p className="state-message error-message">Could not load users: {error}</p>}
        {!loading && !error && (
          <div className="table-responsive">
            <table className="table align-middle mb-0">
              <thead><tr><th>Name</th><th>Email</th><th>Team</th><th className="text-end">Points</th></tr></thead>
              <tbody>{items.map((user) => <tr key={user.id || user._id}><td className="person-cell"><span className="avatar">{user.name?.charAt(0) || '?'}</span>{user.name}</td><td>{user.email}</td><td><span className="soft-tag">{user.team || 'Unassigned'}</span></td><td className="text-end points-cell">{user.points ?? 0}</td></tr>)}</tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  )
}

export default Users
