import { TrendingUp, TrendingDown } from 'lucide-react';

type StatusCardProps = {
  title: string;
  value: string;
  unit: string;
  trend: number;
  positive: boolean;
};

export default function StatusCard({
  title,
  value,
  unit,
  trend,
  positive,
}: StatusCardProps) {
  return (
    <div className="bg-[#161b22] border border-[#21262d] rounded-xl p-6 hover:border-slate-600/50 transition-colors">
      <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
        {title}
      </p>
      <div className="flex items-end gap-4 mb-4">
        <div>
          <p className="text-3xl font-bold text-white">
            {value}
            <span className="text-base text-slate-400 ml-1 font-normal">{unit}</span>
          </p>
        </div>
      </div>
      <div className={`flex items-center gap-1.5 text-sm font-semibold px-2.5 py-1 rounded-lg w-fit ${
        positive
          ? 'bg-emerald-500/10 text-emerald-400'
          : 'bg-red-500/10 text-red-400'
      }`}>
        {positive ? (
          <TrendingUp size={14} />
        ) : (
          <TrendingDown size={14} />
        )}
        {Math.abs(trend)}% {positive ? 'increase' : 'decrease'}
      </div>
    </div>
  );
}
