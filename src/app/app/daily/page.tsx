import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { StatCard } from "@/components/ui/StatCard";

export default function DailyPage() {
  return (
    <div className="flex flex-col gap-8">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-foreground mb-1">Daily Action Check-In</h1>
        <p className="text-sm text-foreground-muted">Build consistency and track your daily transactions on Base.</p>
      </div>

      {/* Grid Layout */}
      <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 items-start">
        {/* Left Column: GM/GN check-in */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          <Card className="flex flex-col gap-6 p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-lg font-semibold text-foreground mb-1">Check-In Today</h2>
                <p className="text-sm text-foreground-muted">Register your daily GM/GN on-chain transaction.</p>
              </div>
              <div className="px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-xs font-semibold text-green-500 text-center sm:text-left self-start">
                Ready for Check-In
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <Card className="hover:border-base-blue/40 transition-all flex flex-col justify-between p-4 bg-surface/50 border-border-subtle cursor-pointer select-none">
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-foreground">GM Action</span>
                    <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></span>
                  </div>
                  <p className="text-xs text-foreground-muted leading-relaxed">
                    Check in for the day before 12:00 PM local time to maximize streaks.
                  </p>
                </div>
                <Button variant="primary" size="sm" className="w-full">
                  Submit GM Check-In
                </Button>
              </Card>

              <Card className="hover:border-base-blue/40 transition-all flex flex-col justify-between p-4 bg-surface/50 border-border-subtle cursor-pointer select-none">
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-foreground">GN Action</span>
                    <span className="w-2.5 h-2.5 bg-orange-400 rounded-full"></span>
                  </div>
                  <p className="text-xs text-foreground-muted leading-relaxed">
                    Log off for the day and wrap up your daily Base transactions.
                  </p>
                </div>
                <Button variant="secondary" size="sm" className="w-full">
                  Submit GN Check-In
                </Button>
              </Card>
            </div>
          </Card>

          {/* Quick TX snapshot */}
          <Card className="p-6">
            <h3 className="text-base font-semibold text-foreground mb-4">Daily Transaction Snapshot</h3>
            <div className="flex flex-col gap-3">
              <div className="flex justify-between items-center text-xs p-3 bg-surface/30 rounded-lg border border-border-subtle">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-foreground-muted bg-surface-elevated px-1.5 py-0.5 rounded">TX #19482</span>
                  <span className="text-foreground">GM Register</span>
                </div>
                <span className="font-mono text-foreground-muted">0x8ef4...89df</span>
              </div>
              <div className="text-center text-xs text-foreground-muted py-2">
                No other transactions recorded today.
              </div>
            </div>
          </Card>
        </div>

        {/* Right Column: Streak & History */}
        <div className="lg:col-span-1 flex flex-col gap-6">
          <Card className="p-5 flex flex-col gap-4">
            <h3 className="text-base font-semibold text-foreground mb-1">Consistency Tracker</h3>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-foreground-muted">Current Streak</span>
              <span className="text-xl font-bold text-base-blue">3 Days</span>
            </div>

            <div className="grid grid-cols-7 gap-1">
              {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, idx) => {
                const checkedIn = idx < 3;
                return (
                  <div key={idx} className="flex flex-col items-center gap-1.5">
                    <span className="text-[10px] text-foreground-muted font-medium select-none">{day}</span>
                    <div className={`w-7 h-7 rounded-lg flex items-center justify-center border transition-all ${
                      checkedIn 
                        ? 'bg-base-blue border-base-blue text-white shadow-[0_0_8px_rgba(0,82,255,0.4)]' 
                        : 'bg-surface border-border-subtle text-foreground-muted opacity-50'
                    }`}>
                      {checkedIn ? (
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-4 h-4">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                      ) : (
                        <span className="text-[10px]">-</span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
            <p className="text-xs text-foreground-muted leading-relaxed mt-2 border-t border-border-subtle pt-3">
              Maintain your daily check-in streak to gain eligibility for premium console modules and NFT mints.
            </p>
          </Card>

          <div className="bg-surface border border-border-subtle rounded-xl p-5 text-sm">
            <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-4 h-4 text-base-blue">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Daily Modules Helper
            </h3>
            <p className="text-foreground-muted leading-relaxed text-xs">
              This acts as a high-fidelity shell. Full smart contract hookups and on-chain check-in registrations are scheduled for future development passes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
