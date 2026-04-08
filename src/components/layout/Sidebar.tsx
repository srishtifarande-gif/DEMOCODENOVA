import { useState } from 'react';
import {
  LayoutDashboard,
  BarChart3,
  FileText,
  Settings,
  ChevronLeft,
  ChevronRight,
  Cpu,
} from 'lucide-react';

type NavItem = {
  label: string;
  icon: React.ElementType;
  id: string;
};

const navItems: NavItem[] = [
  { label: 'Dashboard', icon: LayoutDashboard, id: 'dashboard' },
  { label: 'Analytics', icon: BarChart3, id: 'analytics' },
  { label: 'Reports', icon: FileText, id: 'reports' },
  { label: 'Settings', icon: Settings, id: 'settings' },
];

type SidebarProps = {
  activeNav: string;
  onNavChange: (id: string) => void;
};

export default function Sidebar({ activeNav, onNavChange }: SidebarProps) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={`relative flex flex-col bg-[#0d1117] border-r border-[#21262d] transition-all duration-300 ease-in-out ${
        collapsed ? 'w-16' : 'w-60'
      }`}
    >
      <div className={`flex items-center gap-3 px-4 py-5 border-b border-[#21262d] ${collapsed ? 'justify-center' : ''}`}>
        <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-500/20 shrink-0">
          <Cpu size={16} className="text-sky-400" />
        </div>
        {!collapsed && (
          <div className="overflow-hidden">
            <p className="text-sm font-semibold text-white leading-tight whitespace-nowrap">System Name</p>
            <p className="text-[10px] text-slate-500 uppercase tracking-widest whitespace-nowrap">Enterprise</p>
          </div>
        )}
      </div>

      <nav className="flex-1 py-4 space-y-1 px-2">
        {navItems.map(({ label, icon: Icon, id }) => {
          const isActive = activeNav === id;
          return (
            <button
              key={id}
              onClick={() => onNavChange(id)}
              className={`group w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-150 ${
                isActive
                  ? 'bg-sky-500/10 text-sky-400 border border-sky-500/20'
                  : 'text-slate-400 hover:bg-[#161b22] hover:text-slate-200 border border-transparent'
              } ${collapsed ? 'justify-center' : ''}`}
            >
              <Icon size={16} className={`shrink-0 ${isActive ? 'text-sky-400' : 'text-slate-500 group-hover:text-slate-300'}`} />
              {!collapsed && <span className="whitespace-nowrap">{label}</span>}
              {!collapsed && isActive && (
                <span className="ml-auto w-1.5 h-1.5 rounded-full bg-sky-400" />
              )}
            </button>
          );
        })}
      </nav>

      <div className="p-2 border-t border-[#21262d]">
        <button
          onClick={() => setCollapsed(!collapsed)}
          className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-500 hover:text-slate-300 hover:bg-[#161b22] transition-all text-sm ${collapsed ? 'justify-center' : ''}`}
        >
          {collapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
          {!collapsed && <span>Collapse</span>}
        </button>
      </div>
    </aside>
  );
}
