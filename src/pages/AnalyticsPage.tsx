import { BarChart3, TrendingUp, Globe, Clock } from 'lucide-react';

const topRegions = [
  { region: 'North America', requests: '1.2M', pct: 84 },
  { region: 'Europe', requests: '890K', pct: 62 },
  { region: 'Asia Pacific', requests: '640K', pct: 45 },
  { region: 'Latin America', requests: '210K', pct: 15 },
  { region: 'Middle East', requests: '98K', pct: 7 },
];

const metrics = [
  { label: 'Total Sessions', value: '1.08M', sub: 'Last 30 days', icon: Globe, color: 'text-sky-400', bg: 'bg-sky-400/10' },
  { label: 'Avg. Session Duration', value: '4m 37s', sub: 'Per user', icon: Clock, color: 'text-emerald-400', bg: 'bg-emerald-400/10' },
  { label: 'Growth Rate', value: '+18.4%', sub: 'Month over month', icon: TrendingUp, color: 'text-amber-400', bg: 'bg-amber-400/10' },
  { label: 'Events Tracked', value: '48.2M', sub: 'All time', icon: BarChart3, color: 'text-rose-400', bg: 'bg-rose-400/10' },
];

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-semibold text-white mb-1">Analytics</h2>
        <p className="text-sm text-slate-500">Traffic, engagement, and growth metrics.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {metrics.map((m) => {
          const Icon = m.icon;
          return (
            <div key={m.label} className="bg-[#161b22] border border-[#21262d] rounded-xl p-5 hover:border-slate-600/50 transition-colors">
              <div className={`w-8 h-8 rounded-lg ${m.bg} flex items-center justify-center mb-4`}>
                <Icon size={15} className={m.color} />
              </div>
              <p className="text-2xl font-bold text-white mb-1">{m.value}</p>
              <p className="text-xs font-medium text-slate-400 mb-0.5">{m.label}</p>
              <p className="text-[11px] text-slate-600">{m.sub}</p>
            </div>
          );
        })}
      </div>

      <div className="bg-[#161b22] border border-[#21262d] rounded-xl p-5">
        <h3 className="text-sm font-semibold text-white mb-5">Traffic by Region</h3>
        <div className="space-y-4">
          {topRegions.map((r) => (
            <div key={r.region}>
              <div className="flex justify-between items-center mb-1.5">
                <span className="text-xs text-slate-300">{r.region}</span>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold text-slate-200">{r.requests}</span>
                  <span className="text-[11px] text-slate-600 w-8 text-right">{r.pct}%</span>
                </div>
              </div>
              <div className="h-2 bg-[#0d1117] rounded-full overflow-hidden">
                <div className="h-full bg-sky-500/60 rounded-full" style={{ width: `${r.pct}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
