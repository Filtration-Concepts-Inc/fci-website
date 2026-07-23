import React, { useRef, useState, MouseEvent, ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  glowColor?: string;
  backgroundColor?: string;
  textColor?: string;
  hoverTextColor?: string;
}

const HoverButton: React.FC<ButtonProps> = ({
  children,
  onClick,
  className = '',
  disabled = false,
  glowColor = '#CC0000',
  backgroundColor = '#1a1a1a',
  textColor = '#ffffff',
  hoverTextColor = '#ffffff',
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [glowPosition, setGlowPosition] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: MouseEvent<HTMLButtonElement>) => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setGlowPosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  return (
    <button
      ref={buttonRef}
      onClick={onClick}
      disabled={disabled}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative inline-flex items-center justify-center border-none cursor-pointer overflow-hidden transition-colors duration-300 rounded-lg font-semibold z-10 ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
      style={{
        backgroundColor,
        color: isHovered ? hoverTextColor : textColor,
      }}
    >
      {/* Glow */}
      <div
        className="absolute w-[220px] h-[220px] rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2 transition-all duration-300"
        style={{
          left: `${glowPosition.x}px`,
          top: `${glowPosition.y}px`,
          background: `radial-gradient(circle, ${glowColor} 0%, transparent 70%)`,
          opacity: isHovered ? 0.45 : 0,
          transform: `translate(-50%, -50%) scale(${isHovered ? 1 : 0})`,
          zIndex: 0,
        }}
      />
      <span className="relative z-10">{children}</span>
    </button>
  );
};

export { HoverButton };
