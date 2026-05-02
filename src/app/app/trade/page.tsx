import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { StatCard } from "@/components/ui/StatCard";

export default function TradePage() {
  return (
    <div className="flex flex-col gap-8">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-foreground mb-1">Swap Console</h1>
        <p className="text-sm text-foreground-muted">Exchange developer assets on Base instantly.</p>
      </div>

      {/* Main Content Layout */}
      <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 items-start">
        {/* Left Column: Form */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          <Card className="p-6">
            <h2 className="text-lg font-semibold text-foreground mb-4">Trade Tokens</h2>

            {/* From Token */}
            <div className="flex flex-col gap-2 p-4 bg-surface-elevated/40 border border-border-subtle rounded-xl mb-4">
              <div className="flex justify-between items-center text-xs font-semibold uppercase tracking-wider text-foreground-muted select-none">
                <span>From</span>
                <span>Balance: 0.00</span>
              </div>
              <div className="flex justify-between items-center gap-4">
                <input
                  type="text"
                  placeholder="0.0"
                  className="bg-transparent text-xl font-bold text-foreground focus:outline-none placeholder:text-foreground-muted/40 w-full disabled:opacity-50"
                  disabled
                />
                <div className="bg-surface border border-border-subtle rounded-lg px-3 py-1.5 flex items-center gap-2 select-none">
                  <span className="w-4 h-4 bg-base-blue rounded-full"></span>
                  <span className="text-sm font-semibold text-foreground">ETH</span>
                </div>
              </div>
            </div>

            {/* To Token */}
            <div className="flex flex-col gap-2 p-4 bg-surface-elevated/40 border border-border-subtle rounded-xl mb-6">
              <div className="flex justify-between items-center text-xs font-semibold uppercase tracking-wider text-foreground-muted select-none">
                <span>To (Estimated)</span>
                <span>Balance: 0.00</span>
              </div>
              <div className="flex justify-between items-center gap-4">
                <input
                  type="text"
                  placeholder="0.0"
                  className="bg-transparent text-xl font-bold text-foreground focus:outline-none placeholder:text-foreground-muted/40 w-full disabled:opacity-50"
                  disabled
                />
                <div className="bg-surface border border-border-subtle rounded-lg px-3 py-1.5 flex items-center gap-2 select-none">
                  <span className="w-4 h-4 bg-purple-500 rounded-full"></span>
                  <span className="text-sm font-semibold text-foreground">USDC</span>
                </div>
              </div>
            </div>

            <Button variant="primary" className="w-full h-11" disabled>
              Swap
            </Button>
          </Card>
        </div>

        {/* Right Column: History/Warning */}
        <div className="lg:col-span-1 flex flex-col gap-6">
          <Card className="flex flex-col flex-1 min-h-[180px]">
            <h2 className="text-base font-semibold text-foreground mb-4">
              Recent Swaps
            </h2>
            <div className="flex-grow flex flex-col items-center justify-center text-center px-4">
              <div className="text-xs text-foreground-muted leading-relaxed max-w-[200px]">
                No swap transactions detected for this account.
              </div>
            </div>
          </Card>

          <div className="bg-surface border border-border-subtle rounded-xl p-5 text-sm">
            <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-4 h-4 text-base-blue">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Utility Mode
            </h3>
            <p className="text-foreground-muted leading-relaxed text-xs">
              This module operates on testnet rates and simulates execution. Real DEX transactions are disabled in the console preview.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
