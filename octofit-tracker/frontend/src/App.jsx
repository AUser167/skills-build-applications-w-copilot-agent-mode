import { NavLink, Route, Routes, useLocation } from 'react-router-dom'
import { API_BASE_URL } from './api'
import Activities from './components/Activities'
import Leaderboard from './components/Leaderboard'
import Teams from './components/Teams'
import Users from './components/Users'
import Workouts from './components/Workouts'
import './App.css'

const navigation = [
  { label: 'Overview', path: '/' },
  { label: 'Activities', path: '/activities' },
  { label: 'Leaderboard', path: '/leaderboard' },
  { label: 'Teams', path: '/teams' },
  { label: 'Users', path: '/users' },
  { label: 'Workouts', path: '/workouts' },
]

function Dashboard() {
  return (
    <section className="dashboard-section">
      <div className="dashboard-hero">
        <div>
          <p className="eyebrow">Thursday, 25 September</p>
          <h1>Make your next move count.</h1>
          <p className="hero-copy">OctoFit keeps the whole community moving with simple goals, visible progress, and a little friendly pressure.</p>
          <NavLink className="primary-action" to="/activities">Log an activity <span aria-hidden="true">→</span></NavLink>
        </div>
        <div className="hero-mark" aria-hidden="true"><span>O</span><small>FIT</small></div>
      </div>
      <div className="stat-strip">
        <div><span className="stat-label">Today&apos;s focus</span><strong>Consistency</strong></div>
        <div><span className="stat-label">Team energy</span><strong>+18% <small>this week</small></strong></div>
        <div><span className="stat-label">Next challenge</span><strong>5K Friday</strong></div>
      </div>
      <div className="quick-links">
        <div><p className="eyebrow">Explore the tracker</p><h2>What are you working on?</h2></div>
        <div className="quick-link-grid">{navigation.slice(1).map((item) => <NavLink className="quick-link" to={item.path} key={item.path}><span>{item.label}</span><span aria-hidden="true">↗</span></NavLink>)}</div>
      </div>
    </section>
  )
}

function App() {
  const location = useLocation()
  const currentPage = navigation.find((item) => item.path === location.pathname)?.label || 'Overview'

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <NavLink className="brand" to="/"><span className="brand-badge">O</span><span>octofit<small>TRACKER</small></span></NavLink>
        <div className="sidebar-label">Workspace</div>
        <nav className="main-nav" aria-label="Main navigation">
          {navigation.map((item) => <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} end={item.path === '/'} to={item.path} key={item.path}><span className="nav-marker" aria-hidden="true" />{item.label}</NavLink>)}
        </nav>
        <div className="sidebar-footer"><span className="status-dot" />API connected<p>{API_BASE_URL.replace('http://', '').replace('https://', '')}</p></div>
      </aside>
      <main className="main-content">
        <header className="topbar"><div><span className="mobile-brand">OCTOFIT</span><span className="breadcrumb">Workspace / <strong>{currentPage}</strong></span></div><div className="profile-chip"><span className="avatar avatar-small">P</span><span>Paul Octo</span></div></header>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/users" element={<Users />} />
          <Route path="/workouts" element={<Workouts />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
