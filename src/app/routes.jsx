import { lazy } from 'react';

export const DashboardPage = lazy(() => import('../features/dashboard/DashboardPage'));
export const MembersPage = lazy(() => import('../features/members/MembersPage'));
export const BooksPage = lazy(() => import('../features/books/BooksPage'));
export const CirculationPage = lazy(() => import('../features/circulation/CirculationPage'));
export const ReservationsPage = lazy(() => import('../features/reservations/ReservationsPage'));
export const FinesPage = lazy(() => import('../features/fines/FinesPage'));
export const ReportsPage = lazy(() => import('../features/reports/ReportsPage'));
export const NotificationsPage = lazy(() => import('../features/notifications/NotificationsPage'));
export const SettingsPage = lazy(() => import('../features/settings/SettingsPage'));
export const LoginPage = lazy(() => import('../features/auth/LoginPage'));
