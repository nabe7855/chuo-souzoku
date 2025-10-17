
import React from 'react';

type BadgeProps = {
  children: React.ReactNode;
  className?: string;
};

const Badge: React.FC<BadgeProps> = ({ children, className = '' }) => {
  return (
    <span
      className={`bg-gold text-navy font-bold text-sm sm:text-base px-4 py-2 rounded-full shadow-lg ${className}`}
    >
      {children}
    </span>
  );
};

export default Badge;
