import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { StatCard } from "@/components/ui/StatCard";

export default function DeployPage() {
  return (
    <div className="flex flex-col gap-8">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-foreground mb-1">Contract Deployer</h1>
        <p className="text-sm text-foreground-muted">Deploy standard tokens or NFTs directly to Base Sepolia.</p>
      </div>

      {/* Main Content Layout: 2 Columns */}
      <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 items-start">
        {/* Left Column: Form & Selector */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          <Card className="p-6">
            <h2 className="text-lg font-semibold text-foreground mb-4">Launch New Contract</h2>
            
            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              <div className="p-4 border-2 border-base-blue bg-base-blue/5 rounded-xl cursor-pointer select-none transition-all">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-foreground">Launch Token</span>
                  <span className="text-[10px] bg-base-blue/20 border border-base-blue/30 text-base-blue px-2 py-0.5 rounded font-mono uppercase">ERC-20</span>
                </div>
                <p className="text-xs text-foreground-muted leading-relaxed">
                  Deploy a standard fungible token with custom name, symbol, and total supply.
                </p>
              </div>

              <div className="p-4 border border-border-subtle hover:border-border-subtle/80 bg-surface rounded-xl cursor-pointer select-none transition-all opacity-60">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-foreground">Deploy NFT</span>
                  <span className="text-[10px] bg-surface-elevated border border-border-subtle text-foreground-muted px-2 py-0.5 rounded font-mono uppercase">ERC-721</span>
                </div>
                <p className="text-xs text-foreground-muted leading-relaxed">
                  Deploy a basic non-fungible token contract with custom collection name and symbol.
                </p>
              </div>
            </div>

            {/* Token Inputs */}
            <div className="flex flex-col gap-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold uppercase tracking-wider text-foreground-muted">Token Name</label>
                  <input
                    type="text"
                    placeholder="e.g., Base Utility"
                    className="w-full bg-surface-elevated border border-border-subtle rounded-lg px-3.5 py-2.5 text-sm text-foreground focus:outline-none focus:border-base-blue transition-all disabled:opacity-50 placeholder:text-foreground-muted/40"
                    disabled
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold uppercase tracking-wider text-foreground-muted">Token Symbol</label>
                  <input
                    type="text"
                    placeholder="e.g., BUTIL"
                    className="w-full bg-surface-elevated border border-border-subtle rounded-lg px-3.5 py-2.5 text-sm text-foreground focus:outline-none focus:border-base-blue transition-all disabled:opacity-50 placeholder:text-foreground-muted/40"
                    disabled
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold uppercase tracking-wider text-foreground-muted">Initial Supply</label>
                <input
                  type="text"
                  placeholder="e.g., 1000000"
                  className="w-full bg-surface-elevated border border-border-subtle rounded-lg px-3.5 py-2.5 text-sm text-foreground focus:outline-none focus:border-base-blue transition-all disabled:opacity-50 placeholder:text-foreground-muted/40"
                  disabled
                />
              </div>

              <div className="pt-2">
                <Button variant="primary" className="w-full" disabled>
                  Deploy to Base Sepolia
                </Button>
              </div>
            </div>
          </Card>
        </div>

        {/* Right Column: Information & History */}
        <div className="lg:col-span-1 flex flex-col gap-6">
          <Card className="flex flex-col flex-1 min-h-[220px]">
            <h2 className="text-base font-semibold text-foreground mb-4">
              Recent Deployments
            </h2>
            <div className="flex-grow flex flex-col items-center justify-center text-center px-4">
              <div className="w-10 h-10 rounded-full bg-surface-elevated border border-border-subtle flex items-center justify-center mb-3">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-4 h-4 text-foreground-muted">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1H9L8 4zm.5 6a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                </svg>
              </div>
              <h3 className="text-xs font-medium text-foreground mb-1">
                No deployments found
              </h3>
              <p className="text-[11px] text-foreground-muted leading-relaxed max-w-[220px]">
                You haven't deployed any contracts yet. Choose an asset type and fill out the details above to launch.
              </p>
            </div>
          </Card>

          <div className="bg-surface border border-border-subtle rounded-xl p-5 text-sm">
            <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-4 h-4 text-orange-400">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              Standard Disclaimer
            </h3>
            <p className="text-foreground-muted leading-relaxed text-xs">
              This deployment tool launches basic contracts on Base Sepolia for testing and exploration. These contracts are not audited or intended for high-value production use.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
