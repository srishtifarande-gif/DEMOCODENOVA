import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const trendData = [
  { time: '00:00', heartRate: 72, cpu: 28, network: 15 },
  { time: '04:00', heartRate: 68, cpu: 32, network: 18 },
  { time: '08:00', heartRate: 75, cpu: 42, network: 28 },
  { time: '12:00', heartRate: 82, cpu: 58, network: 42 },
  { time: '16:00', heartRate: 88, cpu: 72, network: 56 },
  { time: '20:00', heartRate: 85, cpu: 65, network: 48 },
  { time: '24:00', heartRate: 78, cpu: 48, network: 32 },
];

type CustomTooltipProps = {
  active?: boolean;
  payload?: Array<{ name: string; value: number; color: string }>;
  label?: string;
};

function CustomTooltip({ active, payload, label }: CustomTooltipProps) {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#0d1117] border border-[#21262d] rounded-lg p-3 shadow-lg">
        <p className="text-xs text-slate-400 font-medium mb-2">{label}</p>
        {payload.map((entry) => (
          <p key={entry.name} className="text-xs font-medium" style={{ color: entry.color }}>
            {entry.name}: {entry.value}
            {entry.name === 'Heart Rate' ? ' bpm' : entry.name === 'CPU' ? '%' : ' Mbps'}
          </p>
        ))}
      </div>
    );
  }
  return null;
}

export default function TrendChart() {
  return (
    <div className="bg-[#161b22] border border-[#21262d] rounded-xl p-5">
      <div className="mb-5">
        <h3 className="text-sm font-semibold text-white mb-1">Real-Time Trends</h3>
        <p className="text-xs text-slate-500">24-hour patient metrics and system performance</p>
      </div>
      <div className="w-full h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={trendData}
            margin={{ top: 5, right: 30, left: 0, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#21262d" />
            <XAxis
              dataKey="time"
              stroke="#64748b"
              style={{ fontSize: '12px' }}
              tick={{ fill: '#94a3b8' }}
            />
            <YAxis
              stroke="#64748b"
              style={{ fontSize: '12px' }}
              tick={{ fill: '#94a3b8' }}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend
              wrapperStyle={{ fontSize: '12px', paddingTop: '20px' }}
              iconType="line"
            />
            <Line
              type="monotone"
              dataKey="heartRate"
              stroke="#0ea5e9"
              strokeWidth={2}
              dot={false}
              name="Heart Rate"
              isAnimationActive={false}
            />
            <Line
              type="monotone"
              dataKey="cpu"
              stroke="#10b981"
              strokeWidth={2}
              dot={false}
              name="CPU"
              isAnimationActive={false}
            />
            <Line
              type="monotone"
              dataKey="network"
              stroke="#f59e0b"
              strokeWidth={2}
              dot={false}
              name="Network"
              isAnimationActive={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
