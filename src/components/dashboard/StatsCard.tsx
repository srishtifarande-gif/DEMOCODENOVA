import { TrendingUp, TrendingDown, Video as LucideIcon } from 'lucide-react';

type StatsCardProps = {
  title: string;
  value: string;
  change: string;
  positive: boolean;
  icon: LucideIcon;
  iconColor: string;
  iconBg: string;
};

export default function StatsCard({
  title,
  value,
  change,
  positive,
  icon: Icon,
  iconColor,
  iconBg,
}: StatsCardProps) {
  return (
    <div className="bg-[#161b22] border border-[#21262d] rounded-xl p-5 hover:border-slate-600/50 transition-colors">
      <div className="flex items-start justify-between mb-4">
        <div className={`p-2 rounded-lg ${iconBg}`}>
          <Icon size={16} className={iconColor} />
        </div>
        <div className={`flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded-full ${
          positive ? 'bg-emerald-500/10 text-emerald-400' : 'bg-red-500/10 text-red-400'
        }`}>
          {positive ? <TrendingUp size={11} /> : <TrendingDown size={11} />}
          {change}
        </div>
      </div>
      <p className="text-2xl font-bold text-white mb-1">{value}</p>
      <p className="text-xs text-slate-500 font-medium">{title}</p>
    </div>
  );
}
