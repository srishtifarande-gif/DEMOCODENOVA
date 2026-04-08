import { FileText, Download, Calendar, CheckCircle2, Clock } from 'lucide-react';

const reports = [
  { name: 'System Performance Q1 2026', type: 'PDF', size: '2.4 MB', date: 'Apr 1, 2026', status: 'ready' },
  { name: 'Security Audit — March 2026', type: 'PDF', size: '1.8 MB', date: 'Mar 31, 2026', status: 'ready' },
  { name: 'Network Traffic Analysis', type: 'CSV', size: '5.1 MB', date: 'Mar 28, 2026', status: 'ready' },
  { name: 'User Activity Summary', type: 'XLSX', size: '840 KB', date: 'Mar 25, 2026', status: 'ready' },
  { name: 'Infrastructure Cost Report', type: 'PDF', size: '1.1 MB', date: 'Apr 8, 2026', status: 'generating' },
];

const typeColor: Record<string, string> = {
  PDF: 'text-rose-400 bg-rose-400/10',
  CSV: 'text-emerald-400 bg-emerald-400/10',
  XLSX: 'text-sky-400 bg-sky-400/10',
};

export default function ReportsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-white mb-1">Reports</h2>
          <p className="text-sm text-slate-500">Generated system and compliance reports.</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-sky-500 hover:bg-sky-400 text-white text-sm font-medium transition-colors">
          <FileText size={14} />
          Generate Report
        </button>
      </div>

      <div className="bg-[#161b22] border border-[#21262d] rounded-xl overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-[#21262d]">
              <th className="text-left text-[11px] font-semibold text-slate-500 uppercase tracking-wider px-5 py-3">Report Name</th>
              <th className="text-left text-[11px] font-semibold text-slate-500 uppercase tracking-wider px-5 py-3 hidden md:table-cell">Type</th>
              <th className="text-left text-[11px] font-semibold text-slate-500 uppercase tracking-wider px-5 py-3 hidden lg:table-cell">Size</th>
              <th className="text-left text-[11px] font-semibold text-slate-500 uppercase tracking-wider px-5 py-3 hidden md:table-cell">Date</th>
              <th className="text-left text-[11px] font-semibold text-slate-500 uppercase tracking-wider px-5 py-3">Status</th>
              <th className="px-5 py-3" />
            </tr>
          </thead>
          <tbody className="divide-y divide-[#21262d]">
            {reports.map((r) => (
              <tr key={r.name} className="hover:bg-[#0d1117]/50 transition-colors group">
                <td className="px-5 py-3.5">
                  <div className="flex items-center gap-2.5">
                    <FileText size={14} className="text-slate-500 shrink-0" />
                    <span className="text-sm text-slate-300 font-medium">{r.name}</span>
                  </div>
                </td>
                <td className="px-5 py-3.5 hidden md:table-cell">
                  <span className={`text-[11px] font-semibold px-2 py-0.5 rounded ${typeColor[r.type]}`}>{r.type}</span>
                </td>
                <td className="px-5 py-3.5 hidden lg:table-cell">
                  <span className="text-xs text-slate-500">{r.size}</span>
                </td>
                <td className="px-5 py-3.5 hidden md:table-cell">
                  <div className="flex items-center gap-1.5 text-xs text-slate-500">
                    <Calendar size={11} />
                    {r.date}
                  </div>
                </td>
                <td className="px-5 py-3.5">
                  {r.status === 'ready' ? (
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 size={12} className="text-emerald-400" />
                      <span className="text-xs text-emerald-400">Ready</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-1.5">
                      <Clock size={12} className="text-amber-400 animate-spin" />
                      <span className="text-xs text-amber-400">Generating</span>
                    </div>
                  )}
                </td>
                <td className="px-5 py-3.5">
                  {r.status === 'ready' && (
                    <button className="opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1.5 text-xs text-sky-400 hover:text-sky-300">
                      <Download size={12} />
                      Download
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
