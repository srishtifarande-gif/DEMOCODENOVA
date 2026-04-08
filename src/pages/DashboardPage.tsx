import { Users, Activity, Server, Zap } from 'lucide-react';
import StatsCard from '../components/dashboard/StatsCard';
import StatusCard from '../components/dashboard/StatusCard';
import TrendChart from '../components/dashboard/TrendChart';
import ActivityFeed from '../components/dashboard/ActivityFeed';
import SystemMetrics from '../components/dashboard/SystemMetrics';

const stats = [
  { title: 'Active Users', value: '4,821', change: '+12.4%', positive: true, icon: Users, iconColor: 'text-sky-400', iconBg: 'bg-sky-400/10' },
  { title: 'API Requests / min', value: '23,094', change: '+8.1%', positive: true, icon: Activity, iconColor: 'text-emerald-400', iconBg: 'bg-emerald-400/10' },
  { title: 'Servers Online', value: '148 / 150', change: '-1.3%', positive: false, icon: Server, iconColor: 'text-amber-400', iconBg: 'bg-amber-400/10' },
  { title: 'Avg. Response Time', value: '38ms', change: '+2ms', positive: false, icon: Zap, iconColor: 'text-rose-400', iconBg: 'bg-rose-400/10' },
];

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-semibold text-white mb-1">Overview</h2>
        <p className="text-sm text-slate-500">Real-time system performance and activity summary.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {stats.map((s) => (
          <StatsCard key={s.title} {...s} />
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <StatusCard title="Heart Rate" value="78" unit="bpm" trend={3.2} positive={true} />
        <StatusCard title="O2 Saturation" value="98" unit="%" trend={1.1} positive={true} />
        <StatusCard title="Blood Pressure" value="120/80" unit="mmHg" trend={-0.5} positive={false} />
      </div>

      <TrendChart />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2">
          <ActivityFeed />
        </div>
        <div>
          <SystemMetrics />
        </div>
      </div>

      <div className="bg-[#161b22] border border-[#21262d] rounded-xl p-5">
        <div className="flex items-center justify-between mb-5">
          <h3 className="text-sm font-semibold text-white">Request Volume (Last 7 Days)</h3>
          <div className="flex items-center gap-2">
            <span className="flex items-center gap-1.5 text-[11px] text-slate-500"><span className="w-2 h-2 rounded-sm bg-sky-500 inline-block" />Requests</span>
            <span className="flex items-center gap-1.5 text-[11px] text-slate-500"><span className="w-2 h-2 rounded-sm bg-slate-600 inline-block" />Errors</span>
          </div>
        </div>
        <div className="flex items-end gap-2 h-32">
          {[62, 78, 55, 90, 84, 72, 96].map((h, i) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-1">
              <div className="w-full flex flex-col items-center gap-0.5" style={{ height: '100%', justifyContent: 'flex-end' }}>
                <div
                  className="w-full rounded-t-sm bg-sky-500/70 hover:bg-sky-500 transition-colors cursor-pointer"
                  style={{ height: `${h}%` }}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="flex gap-2 mt-2">
          {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((d) => (
            <div key={d} className="flex-1 text-center text-[10px] text-slate-600">{d}</div>
          ))}
        </div>
      </div>
    </div>
  );
}
