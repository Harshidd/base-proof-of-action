import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      {/* Hero Section */}
      <section className="w-full max-w-[1200px] px-6 pt-24 pb-16 text-left md:text-center flex flex-col items-start md:items-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-border-subtle text-xs font-medium text-foreground-muted mb-6 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-base-blue shadow-[0_0_8px_rgba(0,82,255,0.8)]"></span>
          Base Action Console • MVP
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6 leading-tight max-w-3xl">
          A premium modular utility console for Base.
        </h1>
        <p className="text-lg text-foreground-muted mb-8 max-w-2xl leading-relaxed">
          Verify actions, deploy contracts, mint assets, and test advanced x402 sandbox protocols from one unified, high-performance interface.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <Button href="/app" variant="primary" size="lg" className="w-full sm:w-auto">
            Open Console
          </Button>
          <Button href="https://github.com" target="_blank" variant="secondary" size="lg" className="w-full sm:w-auto">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.285 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            View Source
          </Button>
        </div>

        {/* Product Visual Preview - Split View */}
        <div className="mt-16 w-full border border-border-subtle rounded-xl bg-surface-elevated shadow-2xl card-border-glow overflow-hidden grid md:grid-cols-2 text-left">
          {/* Left Pane: Payload */}
          <div className="border-b md:border-b-0 md:border-r border-border-subtle bg-[#0a0b0e]">
            <div className="flex items-center gap-2 px-4 py-2.5 border-b border-border-subtle bg-surface">
              <div className="w-2.5 h-2.5 rounded-full bg-border-subtle"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-border-subtle"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-border-subtle"></div>
              <span className="ml-2 text-[11px] font-mono uppercase tracking-wider text-foreground-muted">payload.json</span>
            </div>
            <div className="p-5 overflow-x-auto text-xs font-mono leading-loose text-foreground-muted">
              <span className="text-base-blue">{"{"}</span>
              <br />
              &nbsp;&nbsp;<span className="text-foreground">"action"</span>: <span className="text-green-400">"GITHUB_PR"</span>,
              <br />
              &nbsp;&nbsp;<span className="text-foreground">"target"</span>: <span className="text-green-400">"github.com/base-org/node/pull/1"</span>,
              <br />
              &nbsp;&nbsp;<span className="text-foreground">"actor"</span>: <span className="text-green-400">"0x742...f44e"</span>,
              <br />
              &nbsp;&nbsp;<span className="text-foreground">"time"</span>: <span className="text-orange-300">1715423891</span>,
              <br />
              &nbsp;&nbsp;<span className="text-foreground">"sig"</span>: <span className="text-green-400">"0x12a9c...f84b"</span>
              <br />
              <span className="text-base-blue">{"}"}</span>
            </div>
          </div>
          
          {/* Right Pane: Rendered Proof */}
          <div className="bg-surface flex items-center justify-center p-8">
            <div className="w-full max-w-sm bg-background border border-border-subtle rounded-xl p-5 shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-base-blue/10 rounded-bl-full blur-xl pointer-events-none"></div>
              
              <div className="flex justify-between items-start mb-4 relative z-10">
                <div className="w-10 h-10 rounded-full bg-surface-elevated border border-border-subtle flex items-center justify-center text-foreground">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <div className="px-2.5 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-[10px] uppercase tracking-wider font-semibold text-green-500">
                  Verified
                </div>
              </div>
              
              <div className="mb-4 relative z-10">
                <h3 className="text-sm font-semibold text-foreground">Merged Pull Request</h3>
                <p className="text-xs text-foreground-muted mt-1 truncate">base-org/node#1</p>
              </div>
              
              <div className="flex items-center justify-between pt-4 border-t border-border-subtle relative z-10">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-gradient-to-br from-base-blue to-purple-500"></div>
                  <span className="text-xs font-mono text-foreground-muted">0x742...f44e</span>
                </div>
                <div className="w-4 h-4 rounded-full bg-base-blue/20 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-base-blue"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="w-full max-w-5xl px-6 py-20 border-t border-border-subtle">
        <div className="mb-12">
          <h2 className="text-2xl font-bold tracking-tight text-foreground mb-3">How it works</h2>
          <p className="text-foreground-muted max-w-xl">
            A simple 3-step utility flow. No complex setup or underlying infrastructure knowledge required.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="flex flex-col gap-4">
            <div className="w-8 h-8 rounded-full bg-surface-elevated border border-border-subtle flex items-center justify-center text-sm font-bold text-base-blue">
              1
            </div>
            <h3 className="font-semibold text-foreground">Select an Action</h3>
            <p className="text-sm text-foreground-muted leading-relaxed">
              Choose the type of off-chain action you want to verify. Currently supporting GitHub PRs and commits.
            </p>
          </div>
          
          <div className="flex flex-col gap-4">
            <div className="w-8 h-8 rounded-full bg-surface-elevated border border-border-subtle flex items-center justify-center text-sm font-bold text-base-blue">
              2
            </div>
            <h3 className="font-semibold text-foreground">Provide the Link</h3>
            <p className="text-sm text-foreground-muted leading-relaxed">
              Paste the public URL of the action. We check the platform API to confirm the action exists and belongs to you.
            </p>
          </div>
          
          <div className="flex flex-col gap-4">
            <div className="w-8 h-8 rounded-full bg-surface-elevated border border-border-subtle flex items-center justify-center text-sm font-bold text-base-blue">
              3
            </div>
            <h3 className="font-semibold text-foreground">Mint the Proof</h3>
            <p className="text-sm text-foreground-muted leading-relaxed">
              Generate an on-chain attestation. The proof is permanently stored on Base Sepolia, tied to your wallet address.
            </p>
          </div>
        </div>
      </section>

      {/* Why Use This (Practical Value) */}
      <section className="w-full px-6 py-24 border-t border-border-subtle bg-surface/50">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12 text-center md:text-left">
            <h2 className="text-2xl font-bold tracking-tight text-foreground mb-3">Why create proofs?</h2>
            <p className="text-foreground-muted max-w-xl mx-auto md:mx-0">
              On-chain attestations turn invisible off-chain work into verifiable, composable reputation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-background">
              <h3 className="text-base font-semibold text-foreground mb-2">Build a Verifiable Resume</h3>
              <p className="text-sm text-foreground-muted leading-relaxed">
                Stop relying on centralized platforms to host your accomplishments. Mint proofs of your code contributions and carry them in your wallet.
              </p>
            </Card>
            <Card className="bg-background">
              <h3 className="text-base font-semibold text-foreground mb-2">Sybil Resistance</h3>
              <p className="text-sm text-foreground-muted leading-relaxed">
                Protocols can use Proof of Action to ensure users are real humans with actual github histories before granting airdrops or access.
              </p>
            </Card>
            <Card className="bg-background">
              <h3 className="text-base font-semibold text-foreground mb-2">Unlock On-Chain Rewards</h3>
              <p className="text-sm text-foreground-muted leading-relaxed">
                Smart contracts can automatically read your attestations to grant you specific roles, tokens, or permissions based on your proven activity.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Supported Types Section */}
      <section className="w-full max-w-5xl px-6 py-20 border-t border-border-subtle">
         <div className="mb-12">
          <h2 className="text-2xl font-bold tracking-tight text-foreground mb-3">Supported Actions</h2>
          <p className="text-foreground-muted max-w-xl">
            What you can currently verify and mint as a proof.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <Card className="flex items-start gap-4 p-5 bg-surface border-border transition-colors group">
            <div className="w-12 h-12 rounded-lg bg-background border border-border-subtle flex items-center justify-center shrink-0 group-hover:border-base-blue/50 transition-colors">
               <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-foreground">
                 <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.285 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
               </svg>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <h3 className="font-semibold text-foreground">GitHub Contribution</h3>
                <span className="text-[10px] uppercase tracking-wider font-semibold bg-green-500/10 text-green-500 px-1.5 py-0.5 rounded">Active</span>
              </div>
              <p className="text-xs text-foreground-muted leading-relaxed">Verify merged pull requests or direct commits to public repositories. Proves you contributed code.</p>
            </div>
          </Card>

          <Card className="flex items-start gap-4 p-5 bg-background border-border-subtle opacity-70">
            <div className="w-12 h-12 rounded-lg bg-surface border border-border-subtle flex items-center justify-center shrink-0">
               <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-foreground">
                 <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 22.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
               </svg>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <h3 className="font-semibold text-foreground">X (Twitter) Post</h3>
                <span className="text-[10px] uppercase tracking-wider font-semibold bg-surface border border-border-subtle text-foreground-muted px-1.5 py-0.5 rounded">Coming Soon</span>
              </div>
              <p className="text-xs text-foreground-muted leading-relaxed">Verify ownership and publication of specific tweets. Proves you made a public statement.</p>
            </div>
          </Card>
        </div>
      </section>

      {/* Final Utility CTA */}
      <section className="w-full max-w-5xl px-6 py-24 border-t border-border-subtle mb-10">
        <div className="bg-surface border border-border-subtle rounded-2xl p-8 sm:p-12 flex flex-col sm:flex-row items-center justify-between gap-8 card-border-glow shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-base-blue/10 blur-[80px] pointer-events-none rounded-full"></div>
          
          <div className="relative z-10 flex-grow max-w-xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-base-blue animate-pulse"></span>
              <span className="text-xs font-semibold uppercase tracking-wider text-base-blue">Currently in MVP</span>
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-foreground mb-2">Start proving your actions.</h2>
            <p className="text-sm text-foreground-muted leading-relaxed">
              Connect your wallet on the <strong className="text-foreground font-medium">Base Sepolia</strong> testnet. The app will guide you through pasting a GitHub link and minting your first on-chain proof.
            </p>
          </div>
          
          <div className="relative z-10 shrink-0">
            <Button href="/app" variant="primary" size="lg" className="w-full sm:w-auto shadow-[0_0_20px_rgba(0,82,255,0.3)]">
              Open Console
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
