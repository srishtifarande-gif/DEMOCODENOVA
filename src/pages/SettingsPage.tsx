import { Shield, Bell, Database, Key, Monitor } from 'lucide-react';

type ToggleProps = {
  enabled: boolean;
};

function Toggle({ enabled }: ToggleProps) {
  return (
    <div className={`relative w-9 h-5 rounded-full transition-colors ${enabled ? 'bg-sky-500' : 'bg-slate-700'}`}>
      <span className={`absolute top-0.5 left-0.5 w-4 h-4 rounded-full bg-white shadow transition-transform ${enabled ? 'translate-x-4' : ''}`} />
    </div>
  );
}

const sections = [
  {
    title: 'Security',
    icon: Shield,
    settings: [
      { label: 'Two-Factor Authentication', desc: 'Require 2FA for all admin accounts', enabled: true },
      { label: 'IP Allowlist', desc: 'Restrict access to trusted IP ranges only', enabled: false },
      { label: 'Audit Logging', desc: 'Log all admin actions for compliance', enabled: true },
    ],
  },
  {
    title: 'Notifications',
    icon: Bell,
    settings: [
      { label: 'Critical Alerts', desc: 'Get notified for P0 and P1 incidents', enabled: true },
      { label: 'Weekly Digest', desc: 'Receive a weekly performance summary', enabled: true },
      { label: 'Deployment Events', desc: 'Notify on every production deployment', enabled: false },
    ],
  },
  {
    title: 'Data Retention',
    icon: Database,
    settings: [
      { label: 'Auto-Archive Logs', desc: 'Archive logs older than 90 days', enabled: true },
      { label: 'GDPR Purge Mode', desc: 'Automatically purge user data on request', enabled: false },
    ],
  },
];

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-semibold text-white mb-1">Settings</h2>
        <p className="text-sm text-slate-500">Manage system configuration and preferences.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 space-y-4">
          {sections.map((sec) => {
            const Icon = sec.icon;
            return (
              <div key={sec.title} className="bg-[#161b22] border border-[#21262d] rounded-xl p-5">
                <div className="flex items-center gap-2.5 mb-5">
                  <div className="p-1.5 rounded-lg bg-slate-700/50">
                    <Icon size={14} className="text-slate-300" />
                  </div>
                  <h3 className="text-sm font-semibold text-white">{sec.title}</h3>
                </div>
                <div className="space-y-4">
                  {sec.settings.map((s) => (
                    <div key={s.label} className="flex items-center justify-between gap-4">
                      <div>
                        <p className="text-sm text-slate-300 font-medium">{s.label}</p>
                        <p className="text-xs text-slate-500 mt-0.5">{s.desc}</p>
                      </div>
                      <Toggle enabled={s.enabled} />
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="space-y-4">
          <div className="bg-[#161b22] border border-[#21262d] rounded-xl p-5">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="p-1.5 rounded-lg bg-slate-700/50">
                <Key size={14} className="text-slate-300" />
              </div>
              <h3 className="text-sm font-semibold text-white">API Keys</h3>
            </div>
            <div className="space-y-3">
              {['Production Key', 'Staging Key', 'Read-only Key'].map((k) => (
                <div key={k} className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-medium text-slate-300">{k}</p>
                    <p className="text-[11px] text-slate-600 font-mono mt-0.5">sk_••••••••••••••••</p>
                  </div>
                  <button className="text-[11px] text-sky-400 hover:text-sky-300 transition-colors">Reveal</button>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#161b22] border border-[#21262d] rounded-xl p-5">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="p-1.5 rounded-lg bg-slate-700/50">
                <Monitor size={14} className="text-slate-300" />
              </div>
              <h3 className="text-sm font-semibold text-white">Display</h3>
            </div>
            <div className="space-y-3">
              <div>
                <p className="text-xs text-slate-400 mb-1.5">Theme</p>
                <div className="flex gap-2">
                  {['Dark', 'Light', 'System'].map((t) => (
                    <button
                      key={t}
                      className={`flex-1 py-1.5 rounded-lg text-xs font-medium border transition-colors ${
                        t === 'Dark'
                          ? 'bg-sky-500/10 border-sky-500/30 text-sky-400'
                          : 'border-[#21262d] text-slate-500 hover:border-slate-600 hover:text-slate-300'
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-xs text-slate-400 mb-1.5">Time Zone</p>
                <div className="w-full px-3 py-2 bg-[#0d1117] border border-[#21262d] rounded-lg text-xs text-slate-300">
                  UTC+00:00 — London
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
