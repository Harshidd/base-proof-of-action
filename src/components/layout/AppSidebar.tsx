"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Overview", href: "/app", exact: true },
  { name: "Daily", href: "/app/daily" },
  { name: "Proofs", href: "/app/proofs" },
  { name: "Deploy", href: "/app/deploy" },
  { name: "Mint", href: "/app/mint" },
  { name: "Trade", href: "/app/trade" },
  { name: "x402 Lab", href: "/app/x402" },
];

export const AppSidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="w-full md:w-64 shrink-0 flex flex-col gap-2">
      <div className="text-xs font-semibold uppercase tracking-wider text-foreground-muted mb-2 px-3">
        Console Modules
      </div>
      <nav className="flex flex-col gap-1">
        {navItems.map((item) => {
          const isActive = item.exact
            ? pathname === item.href
            : pathname.startsWith(item.href);

          return (
            <Link
              key={item.name}
              href={item.href}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-3 ${
                isActive
                  ? "bg-surface-elevated text-foreground border border-border-subtle shadow-sm"
                  : "text-foreground-muted hover:text-foreground hover:bg-surface/50 border border-transparent"
              }`}
            >
              {isActive && (
                <span className="w-1.5 h-1.5 rounded-full bg-base-blue shadow-[0_0_8px_rgba(0,82,255,0.8)]"></span>
              )}
              {!isActive && <span className="w-1.5 h-1.5 rounded-full bg-transparent"></span>}
              {item.name}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};
