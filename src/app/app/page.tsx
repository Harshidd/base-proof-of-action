import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { StatCard } from "@/components/ui/StatCard";

export default function OverviewPage() {
  return (
    <div className="flex flex-col gap-8">
      {/* Overview Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-foreground mb-1">
            Console Overview
          </h1>
          <p className="text-sm text-foreground-muted">
            The command center for your on-chain Base actions.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface border border-border-subtle text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-foreground-muted">Base Sepolia</span>
          </div>
          <Button variant="outline" size="sm">
            Refresh
          </Button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <StatCard label="Today TXs" value="12" trend={{ value: "+2", positive: true }} />
        <StatCard label="Proofs Created" value="4" />
        <StatCard label="Active Module" value="Proofs" />
        <StatCard
          label="Network Status"
          value="Healthy"
          icon={
            <span className="w-2 h-2 rounded-full bg-green-500 inline-block shadow-[0_0_8px_rgba(34,197,94,0.6)]"></span>
          }
        />
      </div>

      {/* Main Content Layout: 2 Columns */}
      <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 items-start">
        {/* Left column: Quick Actions to Modules */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          <Card className="flex flex-col gap-4">
            <div>
              <h2 className="text-lg font-semibold text-foreground mb-1">
                Quick Action Center
              </h2>
              <p className="text-sm text-foreground-muted">
                Navigate directly to any module to trigger the desired on-chain flow.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-3 mt-2">
              <Card className="hover:border-base-blue/40 hover:bg-surface-hover/30 transition-all flex flex-col justify-between p-4 cursor-pointer">
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-sm font-bold text-foreground">Daily Check-In</span>
                    <span className="text-[10px] bg-base-blue/10 border border-base-blue/20 text-base-blue px-2 py-0.5 rounded font-mono">
                      DAILY
                    </span>
                  </div>
                  <p className="text-xs text-foreground-muted leading-relaxed mb-4">
                    GM/GN check-in, build streaks and daily transaction records.
                  </p>
                </div>
                <Button href="/app/daily" variant="secondary" size="sm" className="w-full">
                  Open Module
                </Button>
              </Card>

              <Card className="hover:border-base-blue/40 hover:bg-surface-hover/30 transition-all flex flex-col justify-between p-4 cursor-pointer">
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-sm font-bold text-foreground">Proofs of Action</span>
                    <span className="text-[10px] bg-base-blue/10 border border-base-blue/20 text-base-blue px-2 py-0.5 rounded font-mono">
                      CORE
                    </span>
                  </div>
                  <p className="text-xs text-foreground-muted leading-relaxed mb-4">
                    Verify off-chain actions like GitHub PRs/commits and mint them.
                  </p>
                </div>
                <Button href="/app/proofs" variant="secondary" size="sm" className="w-full">
                  Open Module
                </Button>
              </Card>

              <Card className="hover:border-base-blue/40 hover:bg-surface-hover/30 transition-all flex flex-col justify-between p-4 cursor-pointer">
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-sm font-bold text-foreground">Contract Deployer</span>
                    <span className="text-[10px] bg-base-blue/10 border border-base-blue/20 text-base-blue px-2 py-0.5 rounded font-mono">
                      INFRA
                    </span>
                  </div>
                  <p className="text-xs text-foreground-muted leading-relaxed mb-4">
                    Deploy standard ERC20 tokens or NFT collections in seconds.
                  </p>
                </div>
                <Button href="/app/deploy" variant="secondary" size="sm" className="w-full">
                  Open Module
                </Button>
              </Card>

              <Card className="hover:border-base-blue/40 hover:bg-surface-hover/30 transition-all flex flex-col justify-between p-4 cursor-pointer">
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-sm font-bold text-foreground">x402 Sandbox</span>
                    <span className="text-[10px] bg-purple-500/10 border border-purple-500/20 text-purple-400 px-2 py-0.5 rounded font-mono">
                      LAB
                    </span>
                  </div>
                  <p className="text-xs text-foreground-muted leading-relaxed mb-4">
                    Experimental paid endpoint tests and on-chain scenarios.
                  </p>
                </div>
                <Button href="/app/x402" variant="secondary" size="sm" className="w-full">
                  Open Lab
                </Button>
              </Card>
            </div>
          </Card>
        </div>

        {/* Right column: Recent activity & System panel */}
        <div className="lg:col-span-1 flex flex-col gap-6">
          <Card className="flex flex-col flex-1 min-h-[280px]">
            <h2 className="text-base font-semibold text-foreground mb-4">
              Recent Activity
            </h2>
            <div className="flex flex-col gap-3">
              <div className="flex justify-between items-center text-xs py-2 border-b border-border-subtle last:border-0">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span className="text-foreground">Daily GM Check-In</span>
                </div>
                <span className="text-foreground-muted">2 hrs ago</span>
              </div>
              <div className="flex justify-between items-center text-xs py-2 border-b border-border-subtle last:border-0">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-base-blue rounded-full"></span>
                  <span className="text-foreground">GitHub Proof Minted</span>
                </div>
                <span className="text-foreground-muted">5 hrs ago</span>
              </div>
              <div className="flex justify-between items-center text-xs py-2 border-b border-border-subtle last:border-0">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-gray-600 rounded-full"></span>
                  <span className="text-foreground">Connected Wallet</span>
                </div>
                <span className="text-foreground-muted">Yesterday</span>
              </div>
            </div>
          </Card>

          <div className="bg-surface border border-border-subtle rounded-xl p-5 text-sm">
            <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
              <span className="text-xs font-mono bg-base-blue/10 border border-base-blue/20 text-base-blue px-1.5 py-0.5 rounded font-bold uppercase">
                System MVP
              </span>
              Current Status
            </h3>
            <p className="text-foreground-muted leading-relaxed text-xs">
              System is running in non-custodial testnet sandbox mode. High latency may occur due to RPC congestion.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
