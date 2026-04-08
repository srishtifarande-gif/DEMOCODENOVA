import { Shield, RefreshCcw, UserCheck, AlertTriangle, Database } from 'lucide-react';

const activities = [
  { id: 1, icon: UserCheck, color: 'text-sky-400', bg: 'bg-sky-400/10', label: 'New user authenticated', sub: 'admin@system.io', time: '2m ago' },
  { id: 2, icon: Database, color: 'text-emerald-400', bg: 'bg-emerald-400/10', label: 'Database backup completed', sub: 'Shard cluster #3', time: '14m ago' },
  { id: 3, icon: Shield, color: 'text-amber-400', bg: 'bg-amber-400/10', label: 'Security policy updated', sub: 'Firewall rule #47', time: '1h ago' },
  { id: 4, icon: RefreshCcw, color: 'text-slate-400', bg: 'bg-slate-400/10', label: 'System sync completed', sub: 'All nodes synced', time: '2h ago' },
  { id: 5, icon: AlertTriangle, color: 'text-red-400', bg: 'bg-red-400/10', label: 'High memory usage alert', sub: 'Node: prod-server-02', time: '3h ago' },
];

export default function ActivityFeed() {
  return (
    <div className="bg-[#161b22] border border-[#21262d] rounded-xl p-5">
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-sm font-semibold text-white">Recent Activity</h3>
        <button className="text-xs text-sky-400 hover:text-sky-300 transition-colors">View all</button>
      </div>
      <div className="space-y-4">
        {activities.map((item, index) => {
          const Icon = item.icon;
          return (
            <div key={item.id} className="flex items-start gap-3">
              <div className={`p-1.5 rounded-lg ${item.bg} shrink-0 mt-0.5`}>
                <Icon size={13} className={item.color} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-medium text-slate-300 leading-tight">{item.label}</p>
                <p className="text-[11px] text-slate-500 mt-0.5">{item.sub}</p>
              </div>
              <span className="text-[11px] text-slate-600 shrink-0">{item.time}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
