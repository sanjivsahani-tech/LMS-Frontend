import { Outlet } from 'react-router-dom';

export function AuthLayout() {
  return (
    <div style={{ display: 'grid', placeItems: 'center', minHeight: '100vh' }}>
      <div style={{ width: 400, border: '1px solid #ccc', padding: 24, borderRadius: 12 }}>
        <Outlet />
      </div>
    </div>
  );
}
