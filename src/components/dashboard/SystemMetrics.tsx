type MetricBarProps = {
  label: string;
  value: number;
  color: string;
  bg: string;
};

function MetricBar({ label, value, color, bg }: MetricBarProps) {
  return (
    <div>
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-xs text-slate-400">{label}</span>
        <span className="text-xs font-semibold text-slate-200">{value}%</span>
      </div>
      <div className="h-1.5 bg-[#0d1117] rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full transition-all duration-700 ${color}`}
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}

const metrics = [
  { label: 'CPU Usage', value: 42, color: 'bg-sky-400', bg: 'bg-sky-400/10' },
  { label: 'Memory', value: 67, color: 'bg-emerald-400', bg: 'bg-emerald-400/10' },
  { label: 'Disk I/O', value: 28, color: 'bg-amber-400', bg: 'bg-amber-400/10' },
  { label: 'Network', value: 55, color: 'bg-rose-400', bg: 'bg-rose-400/10' },
];

const nodes = [
  { name: 'prod-server-01', status: 'healthy', ping: '12ms' },
  { name: 'prod-server-02', status: 'warning', ping: '148ms' },
  { name: 'prod-server-03', status: 'healthy', ping: '9ms' },
  { name: 'staging-01', status: 'healthy', ping: '22ms' },
];

export default function SystemMetrics() {
  return (
    <div className="bg-[#161b22] border border-[#21262d] rounded-xl p-5">
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-sm font-semibold text-white">System Resources</h3>
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[11px] text-emerald-400">Live</span>
        </div>
      </div>
      <div className="space-y-4 mb-6">
        {metrics.map((m) => (
          <MetricBar key={m.label} {...m} />
        ))}
      </div>
      <div className="border-t border-[#21262d] pt-4">
        <p className="text-xs text-slate-500 font-medium mb-3">Node Status</p>
        <div className="space-y-2">
          {nodes.map((node) => (
            <div key={node.name} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span
                  className={`w-1.5 h-1.5 rounded-full ${
                    node.status === 'healthy' ? 'bg-emerald-400' : 'bg-amber-400'
                  }`}
                />
                <span className="text-xs text-slate-400 font-mono">{node.name}</span>
              </div>
              <span className="text-[11px] text-slate-600 font-mono">{node.ping}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
