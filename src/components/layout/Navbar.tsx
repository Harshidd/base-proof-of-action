import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border-subtle bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-6 h-14 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-6 h-6 rounded-md bg-base-blue flex items-center justify-center shadow-[0_0_12px_rgba(0,82,255,0.4)] group-hover:shadow-[0_0_16px_rgba(0,82,255,0.6)] transition-all">
              <div className="w-2 h-2 rounded-sm bg-white" />
            </div>
            <span className="font-semibold text-sm tracking-tight text-foreground group-hover:text-base-blue transition-colors">
              Proof of Action
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/app" className="text-sm font-medium text-foreground-muted hover:text-foreground transition-colors">
              Dashboard
            </Link>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-foreground-muted hover:text-foreground transition-colors">
              GitHub
            </a>
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <Button href="/app" variant="primary" size="sm">
            Launch App
          </Button>
        </div>
      </div>
    </header>
  );
};
