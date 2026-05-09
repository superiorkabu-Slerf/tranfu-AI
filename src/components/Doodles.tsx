import React from 'react';

export const Star = ({ className }: { className?: string }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M12 2L14.5 9.5H22L16 14L18.5 21.5L12 17L5.5 21.5L8 14L2 9.5H9.5L12 2Z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const PaperPlane = ({ className }: { className?: string }) => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const ScribbleLine = ({ className }: { className?: string }) => (
  <svg width="120" height="18" viewBox="0 0 120 18" fill="none" className={className}>
    <path d="M2 12C18 2 32 16 48 8C64 0 75 16 92 8C104 3 112 7 118 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const HandArrow = ({ className }: { className?: string }) => (
  <svg width="54" height="42" viewBox="0 0 54 42" fill="none" className={className}>
    <path d="M3 23C9 11 19 5 31 7C39 8 43 13 50 18M50 18L42 14M50 18L46 27" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const Sparkle = ({ className }: { className?: string }) => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className={className}>
    <path d="M8 0L10 6L16 8L10 10L8 16L6 10L0 8L6 6L8 0Z" fill="currentColor" opacity="0.65" />
  </svg>
);

export const DottedCluster = ({ className }: { className?: string }) => (
  <svg width="84" height="36" viewBox="0 0 84 36" fill="none" className={className}>
    {Array.from({ length: 18 }).map((_, index) => {
      const x = 6 + (index % 6) * 14;
      const y = 8 + Math.floor(index / 6) * 10;
      return <circle key={index} cx={x} cy={y} r="1.6" fill="currentColor" opacity="0.45" />;
    })}
  </svg>
);

export const PlusCross = ({ className }: { className?: string }) => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className={className}>
    <path d="M9 3V15M3 9H15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

export const LoopArrow = ({ className }: { className?: string }) => (
  <svg width="72" height="28" viewBox="0 0 72 28" fill="none" className={className}>
    <path d="M4 20C12 7 28 5 42 10C50 13 55 18 66 18M66 18L58 12M66 18L58 24" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
