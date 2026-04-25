import React from 'react';

export const Card = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => {
  return (
    <div className={`bg-surface border border-border-subtle rounded-xl p-6 shadow-sm card-border-glow transition-colors hover:border-border ${className}`}>
      {children}
    </div>
  );
};
