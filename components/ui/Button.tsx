
import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
};

const Button: React.FC<ButtonProps> = ({ children, onClick, variant = 'primary', size = 'md', className = '', type = 'button' }) => {
  const baseStyles = 'font-sans font-bold rounded-lg shadow-md transition-transform transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-opacity-50 flex items-center justify-center gap-2';

  const variantStyles = {
    primary: 'bg-gold-dark text-white hover:bg-gold focus:ring-gold',
    secondary: 'bg-navy text-white hover:bg-navy-light focus:ring-navy',
    outline: 'bg-white text-navy border-2 border-navy hover:bg-navy hover:text-white focus:ring-navy',
  };

  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-8 py-3 text-lg',
    lg: 'px-10 py-4 text-xl md:text-2xl',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
