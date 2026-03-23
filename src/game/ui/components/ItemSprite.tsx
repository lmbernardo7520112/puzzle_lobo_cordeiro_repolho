import React from 'react';
import type { Item } from '../../domain/types';

interface ItemSpriteProps {
  type: Item | 'Farmer';
  onClick?: (e?: React.MouseEvent) => void;
}

export function ItemSprite({ type, onClick }: ItemSpriteProps) {
  const renderSVG = () => {
    switch (type) {
      case 'Farmer':
        return (
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width: '100%', height: '100%'}}>
            {/* Body */}
            <circle cx="50" cy="50" r="45" fill="#fbc531" />
            {/* Hat bottom */}
            <rect x="10" y="45" width="80" height="12" rx="6" fill="#7158e2" />
            {/* Hat top */}
            <path d="M25 45 C25 10, 75 10, 75 45 Z" fill="#9c88ff" />
            {/* Eyes */}
            <circle cx="35" cy="65" r="5" fill="#2f3640" />
            <circle cx="65" cy="65" r="5" fill="#2f3640" />
            {/* Smile */}
            <path d="M40 80 Q50 90 60 80" stroke="#2f3640" strokeWidth="5" strokeLinecap="round" />
            <path d="M30 60 L40 55 M70 60 L60 55" stroke="#2f3640" strokeWidth="3" strokeLinecap="round" />
          </svg>
        );
      case 'Wolf':
        return (
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width: '100%', height: '100%'}}>
            <path d="M10 50 L40 10 L70 50 L90 30 L80 90 L20 90 Z" fill="#2f3640" />
            <circle cx="45" cy="45" r="5" fill="#e84118" />
            <circle cx="65" cy="45" r="5" fill="#e84118" />
            <path d="M10 50 L30 10 L45 30" fill="#192a56" />
            <path d="M70 50 L90 10 L60 30" fill="#192a56" />
            <path d="M45 75 L65 75 L55 85 Z" fill="#192a56" />
            {/* Teeth */}
            <path d="M50 85 L53 92 L55 85 L57 92 L60 85" fill="#f5f6fa" />
          </svg>
        );
      case 'Sheep':
        return (
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width: '100%', height: '100%'}}>
            {/* Wool */}
            <circle cx="30" cy="50" r="22" fill="#dcdde1" />
            <circle cx="70" cy="50" r="22" fill="#dcdde1" />
            <circle cx="50" cy="30" r="22" fill="#dcdde1" />
            <circle cx="50" cy="70" r="22" fill="#dcdde1" />
            <circle cx="50" cy="50" r="30" fill="#f5f6fa" />
            {/* Face */}
            <ellipse cx="75" cy="50" rx="16" ry="22" fill="#2f3640" />
            {/* Eyes */}
            <circle cx="70" cy="45" r="4" fill="white" />
            <circle cx="82" cy="45" r="4" fill="white" />
            <circle cx="71" cy="45" r="2" fill="black" />
            <circle cx="81" cy="45" r="2" fill="black" />
            {/* Legs */}
            <rect x="35" y="75" width="8" height="20" fill="#2f3640" rx="4" />
            <rect x="55" y="75" width="8" height="20" fill="#2f3640" rx="4" />
          </svg>
        );
      case 'Cabbage':
        return (
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width: '100%', height: '100%'}}>
            {/* Basket */}
            <path d="M20 40 L80 40 L70 90 L30 90 Z" fill="#e1b12c" />
            <rect x="15" y="32" width="70" height="15" fill="#c23616" rx="4" />
            <path d="M25 40 L35 90 M40 40 L45 90 M55 40 L50 90 M75 40 L65 90" stroke="#8c6225" strokeWidth="2" opacity="0.3" />
            {/* Leaves */}
            <circle cx="50" cy="35" r="25" fill="#44bd32" />
            <circle cx="35" cy="30" r="20" fill="#4cd137" />
            <circle cx="65" cy="30" r="20" fill="#4cd137" />
            <circle cx="50" cy="15" r="18" fill="#009432" />
          </svg>
        );
    }
  };

  return (
    <div className={`item ${type}`} onClick={onClick} title={type}>
      {renderSVG()}
    </div>
  );
}
