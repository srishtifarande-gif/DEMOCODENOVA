import { Bell, Search, CheckCircle2, User } from 'lucide-react';

type HeaderProps = {
  activeNav: string;
};

const navLabels: Record<string, string> = {
  dashboard: 'Dashboard',
  analytics: 'Analytics',
  reports: 'Reports',
  settings: 'Settings',
};

export default function Header({ activeNav }: HeaderProps) {
  return (
    <header className="flex items-center justify-between h-14 px-6 bg-[#0d1117] border-b border-[#21262d] shrink-0">
      <div className="flex items-center gap-4">
        <div>
          <h1 className="text-sm font-semibold text-white">{navLabels[activeNav] ?? 'Dashboard'}</h1>
        </div>
        <div className="hidden md:flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
          <CheckCircle2 size={12} className="text-emerald-400" />
          <span className="text-[11px] font-medium text-emerald-400 tracking-wide">System Status: Operational</span>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#161b22] border border-[#21262d] text-slate-400 hover:border-slate-600 transition-colors cursor-pointer">
          <Search size={13} />
          <span className="text-xs text-slate-500">Search...</span>
          <kbd className="text-[10px] bg-[#0d1117] border border-[#21262d] rounded px-1.5 py-0.5 text-slate-600">⌘K</kbd>
        </div>

        <button className="relative p-2 rounded-lg text-slate-400 hover:text-slate-200 hover:bg-[#161b22] transition-colors border border-transparent hover:border-[#21262d]">
          <Bell size={15} />
          <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-sky-400" />
        </button>

        <div className="flex items-center gap-2 pl-3 border-l border-[#21262d]">
          <div className="w-7 h-7 rounded-full bg-gradient-to-br from-sky-400 to-sky-600 flex items-center justify-center">
            <User size={13} className="text-white" />
          </div>
          <div className="hidden md:block">
            <p className="text-xs font-medium text-slate-300 leading-tight">Admin</p>
            <p className="text-[10px] text-slate-500 leading-tight">admin@system.io</p>
          </div>
        </div>
      </div>
    </header>
  );
}
