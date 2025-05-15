import { Progress } from '@/components/ui/progress';
import { cn } from '@/lib/utils';
import React from 'react';

export default function ProgressBar({ progress }: { progress: number }) {
  return (
    <div className="stats shadow stats-vertical mb-4 bg-[#1f2a37] text-white text-center ">
      <div className="stat">
        <div className="stat-title ">התקדמות</div>
        <div className="stat-value text-[#3a88f9]">{progress}%</div>
        <div className="stat-desc">
          <Progress
            value={100-26}
            className={cn("h-2 rounded-full bg-[#3a88f9]")}
          />
        </div>
      </div>
    </div>
  );
}
