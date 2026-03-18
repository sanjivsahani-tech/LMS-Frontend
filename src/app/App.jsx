import { Routes, Route, Navigate } from 'react-router-dom';
import { Suspense } from 'react';
import { QueryProvider } from './providers/QueryProvider';
import { ThemeProvider } from './providers/ThemeProvider';
import { AuthProvider } from './providers/AuthProvider';
import { DashboardLayout } from '../components/layout/DashboardLayout';
import { AuthLayout } from '../components/layout/AuthLayout';
import { Loader } from '../components/shared/Loader';
import { DashboardPage } from '../features/dashboard/DashboardPage';
import { MembersPage } from '../features/members/MembersPage';
import { BooksPage } from '../features/books/BooksPage';
import { CirculationPage } from '../features/circulation/CirculationPage';
import { ReservationsPage } from '../features/reservations/ReservationsPage';
import { FinesPage } from '../features/fines/FinesPage';
import { ReportsPage } from '../features/reports/ReportsPage';
import { NotificationsPage } from '../features/notifications/NotificationsPage';
import { SettingsPage } from '../features/settings/SettingsPage';
import { LoginPage } from '../features/auth/LoginPage';
import { routes } from '../config/routes';

export default function App() {
  return (
    <ThemeProvider>
      <QueryProvider>
        <AuthProvider>
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route element={<DashboardLayout />}>
                <Route path={routes.dashboard} element={<DashboardPage />} />
                <Route path={routes.members} element={<MembersPage />} />
                <Route path={routes.books} element={<BooksPage />} />
                <Route path={routes.circulation} element={<CirculationPage />} />
                <Route path={routes.reservations} element={<ReservationsPage />} />
                <Route path={routes.fines} element={<FinesPage />} />
                <Route path={routes.reports} element={<ReportsPage />} />
                <Route path={routes.notifications} element={<NotificationsPage />} />
                <Route path={routes.settings} element={<SettingsPage />} />
              </Route>
              <Route element={<AuthLayout />}>
                <Route path={routes.login} element={<LoginPage />} />
              </Route>
              <Route path="*" element={<Navigate to={routes.dashboard} replace />} />
            </Routes>
          </Suspense>
        </AuthProvider>
      </QueryProvider>
    </ThemeProvider>
  );
}
