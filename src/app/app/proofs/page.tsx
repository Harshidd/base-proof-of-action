import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { StatCard } from "@/components/ui/StatCard";

export default function ProofsPage() {
  return (
    <div className="flex flex-col gap-8">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-foreground mb-1">
            Proofs of Action
          </h1>
          <p className="text-sm text-foreground-muted">
            Create on-chain attestations for your off-chain activities.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface border border-border-subtle text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-red-500"></span>
            <span className="text-foreground-muted">Not Connected</span>
          </div>
          <Button variant="primary" size="sm">
            Connect Wallet
          </Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <StatCard label="Total Proofs" value="0" />
        <StatCard label="Verified Actions" value="0" />
        <StatCard label="Network" value="Base Sepolia" />
        <StatCard label="Wallet Status" value="Disconnected" />
      </div>

      {/* Main Content Area: 2 Columns */}
      <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 items-start">
        {/* Left Column: Create Proof (Takes up 2/3) */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          <Card className="flex flex-col gap-6">
            <div>
              <h2 className="text-lg font-semibold text-foreground mb-1">
                Create New Proof
              </h2>
              <p className="text-sm text-foreground-muted">
                Select an action type to generate a verifiable proof.
              </p>
            </div>

            {/* Action Type Selection */}
            <div className="flex flex-col gap-3">
              <label className="text-xs font-semibold uppercase tracking-wider text-foreground-muted">
                Action Type
              </label>
              <div className="grid sm:grid-cols-2 gap-3">
                {/* Active/Selected State */}
                <div className="border-2 border-base-blue bg-base-blue/5 rounded-xl p-4 cursor-pointer transition-all relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-16 h-16 bg-base-blue/10 rounded-bl-full -mr-8 -mt-8 blur-md"></div>
                  <div className="flex items-start gap-3 relative z-10">
                    <div className="w-8 h-8 rounded-lg bg-surface-elevated border border-border-subtle flex items-center justify-center shrink-0 text-foreground">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.285 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-sm text-foreground mb-0.5">
                        GitHub Contribution
                      </div>
                      <div className="text-xs text-foreground-muted leading-relaxed">
                        Prove a PR merge or commit
                      </div>
                    </div>
                  </div>
                </div>

                {/* Inactive State */}
                <div className="border border-border-subtle bg-surface hover:bg-surface-hover hover:border-border rounded-xl p-4 cursor-pointer transition-all opacity-60">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-surface border border-border-subtle flex items-center justify-center shrink-0">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-foreground">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 22.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-sm text-foreground mb-0.5">
                        X (Twitter) Post
                      </div>
                      <div className="text-xs text-foreground-muted leading-relaxed">
                        Coming soon
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Input Form */}
            <div className="flex flex-col gap-3">
              <label className="text-xs font-semibold uppercase tracking-wider text-foreground-muted">
                Action Link
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="e.g., https://github.com/base-org/node/pull/1"
                  className="w-full bg-surface-elevated border border-border-subtle rounded-lg pl-4 pr-24 py-2.5 text-sm text-foreground focus:outline-none focus:border-base-blue focus:ring-1 focus:ring-base-blue transition-all disabled:opacity-50 placeholder:text-foreground-muted/50"
                  disabled
                />
                <div className="absolute right-1.5 top-1.5">
                  <Button variant="secondary" size="sm" className="h-7 px-2 text-xs" disabled>
                    Paste
                  </Button>
                </div>
              </div>
              <p className="text-xs text-foreground-muted">
                Provide the exact public URL of the PR or commit you want to verify.
              </p>
            </div>

            <div className="pt-2">
              <Button variant="primary" className="w-full h-11" disabled>
                Generate Proof
              </Button>
            </div>
          </Card>
        </div>

        {/* Right Column: History & Info (Takes up 1/3) */}
        <div className="lg:col-span-1 flex flex-col gap-6">
          <Card className="flex flex-col h-[400px]">
            <h2 className="text-base font-semibold text-foreground mb-4">
              Recent Proofs
            </h2>

            {/* Empty State */}
            <div className="flex-grow flex flex-col items-center justify-center text-center px-4">
              <div className="w-12 h-12 rounded-full bg-surface-elevated border border-border-subtle flex items-center justify-center mb-4">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 h-5 text-foreground-muted">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-sm font-medium text-foreground mb-1">
                No proofs found
              </h3>
              <p className="text-xs text-foreground-muted leading-relaxed max-w-[200px]">
                You haven't generated any proofs yet. Create one to see it here.
              </p>
            </div>
          </Card>

          {/* Helper Card */}
          <div className="bg-surface border border-border-subtle rounded-xl p-5 text-sm">
            <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-4 h-4 text-base-blue">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              How it works
            </h3>
            <p className="text-foreground-muted leading-relaxed text-xs">
              We check the target URL via its public API, verify your ownership, and mint a permanent attestation to your wallet on Base Sepolia.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
