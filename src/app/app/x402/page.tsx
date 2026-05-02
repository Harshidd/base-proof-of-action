import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { StatCard } from "@/components/ui/StatCard";

export default function X402LabPage() {
  return (
    <div className="flex flex-col gap-8">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-foreground mb-1">x402 Sandbox Lab</h1>
          <p className="text-sm text-foreground-muted">Experimental tests and scenarios for advanced protocols.</p>
        </div>
        <div className="px-3 py-1.5 bg-purple-500/10 border border-purple-500/20 text-purple-400 font-mono text-xs font-semibold rounded-lg self-start">
          LAB MODE • ACTIVATED
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 items-start">
        {/* Left Column: Form & Scenarios */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          <Card className="p-6">
            <div className="mb-6">
              <h2 className="text-lg font-semibold text-foreground mb-1">Active Scenario Simulation</h2>
              <p className="text-sm text-foreground-muted">Choose an experimental scenario to generate advanced test conditions.</p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              <div className="p-4 border-2 border-purple-500/40 bg-purple-500/5 rounded-xl cursor-pointer select-none transition-all">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-foreground">Scenario #1</span>
                  <span className="text-[10px] bg-purple-500/10 border border-purple-500/20 text-purple-400 px-2 py-0.5 rounded font-mono">
                    ENDPOINT
                  </span>
                </div>
                <p className="text-xs text-foreground-muted leading-relaxed">
                  Generate mock paid-endpoint triggers and observe the system reaction.
                </p>
              </div>

              <div className="p-4 border border-border-subtle hover:border-border hover:bg-surface/50 rounded-xl cursor-pointer select-none transition-all opacity-60">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-foreground">Scenario #2</span>
                  <span className="text-[10px] bg-surface-elevated border border-border-subtle text-foreground-muted px-2 py-0.5 rounded font-mono">
                    GAS LESS
                  </span>
                </div>
                <p className="text-xs text-foreground-muted leading-relaxed">
                  Execute tests without consuming gas, using off-chain signatures.
                </p>
              </div>
            </div>

            {/* Test Area form */}
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold uppercase tracking-wider text-foreground-muted">Payload or Endpoint URL</label>
                <input
                  type="text"
                  placeholder="e.g., https://api.console.x402.test/simulate"
                  className="w-full bg-surface-elevated border border-border-subtle rounded-lg px-3.5 py-2.5 text-sm text-foreground focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all disabled:opacity-50 placeholder:text-foreground-muted/40 font-mono"
                  disabled
                />
              </div>

              <div className="pt-2">
                <Button variant="primary" className="w-full bg-purple-600 hover:bg-purple-500 hover:glow-purple border-transparent" disabled>
                  Run Scenario Tests
                </Button>
              </div>
            </div>
          </Card>
        </div>

        {/* Right Column: Execution Log & Helper */}
        <div className="lg:col-span-1 flex flex-col gap-6">
          <Card className="flex flex-col h-[280px]">
            <h2 className="text-base font-semibold text-foreground mb-4">
              Response / Log Output
            </h2>
            <div className="flex-grow bg-background/50 border border-border-subtle rounded-lg p-3 font-mono text-xs text-foreground-muted overflow-auto select-none leading-relaxed flex flex-col justify-center text-center">
              <div>[Console idle]</div>
              <div>No scenarios executed.</div>
            </div>
          </Card>

          <div className="bg-surface border border-border-subtle rounded-xl p-5 text-sm">
            <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-4 h-4 text-purple-400">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              About the Lab
            </h3>
            <p className="text-foreground-muted leading-relaxed text-xs">
              The x402 sandbox lab is designed for evaluating and executing cutting edge, complex transaction models before they hit full public release. Use with caution.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
