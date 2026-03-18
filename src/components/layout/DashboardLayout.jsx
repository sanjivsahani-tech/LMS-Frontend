import { Link, Outlet, useLocation } from 'react-router-dom';
import { routes } from '../../config/routes';

const navItems = [
  { name: 'Dashboard', to: routes.dashboard },
  { name: 'Members', to: routes.members },
  { name: 'Books', to: routes.books },
  { name: 'Circulation', to: routes.circulation },
  { name: 'Reservations', to: routes.reservations },
  { name: 'Fines', to: routes.fines },
  { name: 'Reports', to: routes.reports },
  { name: 'Notifications', to: routes.notifications },
  { name: 'Settings', to: routes.settings }
];

function NavItem({ name, to, active }) {
  return (
    <Link to={to} className={`nav-link ${active ? 'active' : ''}`}>
      {name}
    </Link>
  );
}

export function DashboardLayout() {
  const location = useLocation();

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand">Ap Laypot</div>
        <nav>
          {navItems.map((item) => (
            <NavItem
              key={item.to}
              name={item.name}
              to={item.to}
              active={location.pathname === item.to}
            />
          ))}
        </nav>
      </aside>

      <div className="content-area">
        <header className="topbar">
          <div>
            <h1>Ap Laypot</h1>
            <p>Welcome to your dashboard.</p>
          </div>
          <div className="topbar-actions">
            <button type="button">Profile</button>
            <button type="button">Logout</button>
          </div>
        </header>

        <main className="page-content">
          <Outlet />
        </main>

        <footer className="footer">
          <small>© {new Date().getFullYear()} Ap Laypot. All rights reserved.</small>
        </footer>
      </div>
    </div>
  );
}
