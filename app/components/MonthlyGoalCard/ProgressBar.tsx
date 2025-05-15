import React from 'react';

export default function ProgressBar({ progress }:{progress:number}) {
  return (
    <div className="stats shadow stats-vertical mb-4 bg-[#202d46] text-white text-center ">
      <div className="stat">
        <div className="stat-title ">התקדמות</div>
        <div className="stat-value text-white">{progress}%</div>
        <div className="stat-desc">
          <progress className="progress progress-primary w-full mt-2  text-white" value={progress} max="100"></progress>
        </div>
      </div>
    </div>
  );
}
