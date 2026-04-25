import React from 'react';

interface StatCardProps {
  label: string;
  value: string | React.ReactNode;
  icon?: React.ReactNode;
  trend?: {
    value: string;
    positive: boolean;
  };
}

export const StatCard = ({ label, value, icon, trend }: StatCardProps) => {
  return (
    <div className="bg-surface border border-border-subtle rounded-xl p-5 flex flex-col transition-colors hover:bg-surface-hover">
      <div className="flex items-center justify-between mb-3">
        <span className="text-sm font-medium text-foreground-muted">{label}</span>
        {icon && <span className="text-foreground-muted opacity-80">{icon}</span>}
      </div>
      <div className="flex items-end gap-2">
        <span className="text-2xl font-bold tracking-tight text-foreground">{value}</span>
        {trend && (
          <span className={`text-xs font-medium mb-1 ${trend.positive ? 'text-green-500' : 'text-red-500'}`}>
            {trend.positive ? '↑' : '↓'} {trend.value}
          </span>
        )}
      </div>
    </div>
  );
};
