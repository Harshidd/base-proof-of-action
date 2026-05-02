import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { StatCard } from "@/components/ui/StatCard";

export default function MintPage() {
  return (
    <div className="flex flex-col gap-8">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-foreground mb-1">Mint Console</h1>
        <p className="text-sm text-foreground-muted">Mint NFTs or claim developer tokens directly on Base.</p>
      </div>

      {/* Main Content Layout: 2 Columns */}
      <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 items-start">
        {/* Left Column: Form & Selector */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          <Card className="p-6">
            <h2 className="text-lg font-semibold text-foreground mb-4">Mint Assets</h2>
            
            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              <div className="p-4 border-2 border-base-blue bg-base-blue/5 rounded-xl cursor-pointer select-none transition-all">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-foreground">NFT Mint</span>
                  <span className="text-[10px] bg-base-blue/20 border border-base-blue/30 text-base-blue px-2 py-0.5 rounded font-mono uppercase">721</span>
                </div>
                <p className="text-xs text-foreground-muted leading-relaxed">
                  Mint a custom testnet NFT using arbitrary metadata or media URIs.
                </p>
              </div>

              <div className="p-4 border border-border-subtle hover:border-border-subtle/80 bg-surface rounded-xl cursor-pointer select-none transition-all opacity-60">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-foreground">Faucet Token Claim</span>
                  <span className="text-[10px] bg-surface-elevated border border-border-subtle text-foreground-muted px-2 py-0.5 rounded font-mono uppercase">ERC20</span>
                </div>
                <p className="text-xs text-foreground-muted leading-relaxed">
                  Claim faucet tokens directly to your connected wallet.
                </p>
              </div>
            </div>

            {/* Mint Form Inputs */}
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold uppercase tracking-wider text-foreground-muted">Asset Name / Metadata URI</label>
                <input
                  type="text"
                  placeholder="e.g., ipfs://bafybeic7... / Rare Action NFT"
                  className="w-full bg-surface-elevated border border-border-subtle rounded-lg px-3.5 py-2.5 text-sm text-foreground focus:outline-none focus:border-base-blue transition-all disabled:opacity-50 placeholder:text-foreground-muted/40"
                  disabled
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold uppercase tracking-wider text-foreground-muted">Recipient Wallet Address</label>
                <input
                  type="text"
                  placeholder="e.g., 0x8ef4...89df"
                  className="w-full bg-surface-elevated border border-border-subtle rounded-lg px-3.5 py-2.5 text-sm text-foreground focus:outline-none focus:border-base-blue transition-all disabled:opacity-50 placeholder:text-foreground-muted/40"
                  disabled
                />
              </div>

              <div className="pt-2">
                <Button variant="primary" className="w-full" disabled>
                  Mint Now
                </Button>
              </div>
            </div>
          </Card>
        </div>

        {/* Right Column: Preview & History */}
        <div className="lg:col-span-1 flex flex-col gap-6">
          <Card className="flex flex-col p-5">
            <h3 className="text-base font-semibold text-foreground mb-4">Preview</h3>
            <div className="border border-border-subtle border-dashed rounded-xl p-6 flex flex-col items-center justify-center min-h-[160px] text-center select-none bg-surface/20">
              <span className="text-xs text-foreground-muted mb-1 leading-relaxed">
                Provide metadata/URI above to render a live NFT preview.
              </span>
            </div>
          </Card>

          <div className="bg-surface border border-border-subtle rounded-xl p-5 text-sm">
            <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-4 h-4 text-base-blue">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Guidance Text
            </h3>
            <p className="text-foreground-muted leading-relaxed text-xs">
              Minted assets will appear directly in your wallet when viewing the Base Sepolia testnet explorer. Please wait a few seconds for confirmations after sending a transaction.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
