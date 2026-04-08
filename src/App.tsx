import { useState } from 'react';
import Layout from './components/layout/Layout';
import DashboardPage from './pages/DashboardPage';
import AnalyticsPage from './pages/AnalyticsPage';
import ReportsPage from './pages/ReportsPage';
import SettingsPage from './pages/SettingsPage';

type NavId = 'dashboard' | 'analytics' | 'reports' | 'settings';

const pages: Record<NavId, JSX.Element> = {
  dashboard: <DashboardPage />,
  analytics: <AnalyticsPage />,
  reports: <ReportsPage />,
  settings: <SettingsPage />,
};

export default function App() {
  const [activeNav, setActiveNav] = useState<NavId>('dashboard');

  return (
    <Layout activeNav={activeNav} onNavChange={(id) => setActiveNav(id as NavId)}>
      {pages[activeNav]}
    </Layout>
  );
}
