import { ReactNode } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

type LayoutProps = {
  children: ReactNode;
  activeNav: string;
  onNavChange: (id: string) => void;
};

export default function Layout({ children, activeNav, onNavChange }: LayoutProps) {
  return (
    <div className="flex h-screen bg-[#0d1117] overflow-hidden">
      <Sidebar activeNav={activeNav} onNavChange={onNavChange} />
      <div className="flex flex-col flex-1 min-w-0">
        <Header activeNav={activeNav} />
        <main className="flex-1 overflow-y-auto p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
