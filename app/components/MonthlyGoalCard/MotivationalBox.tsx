import React from 'react';

export default function MotivationalBox({ text }:{text:string}) {
  return (
    <div className="alert alert-info shadow-lg mt-4 bg-[#202d46] text-white">
      <div>
        <span>{text}</span>
      </div>
    </div>
  );
}