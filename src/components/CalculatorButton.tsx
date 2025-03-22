
import React from 'react';
import { cn } from '@/lib/utils';

interface CalculatorButtonProps {
  onClick: () => void;
  label: string | React.ReactNode;
  type?: 'default' | 'function' | 'operator' | 'equal';
  className?: string;
  wide?: boolean;
}

const CalculatorButton: React.FC<CalculatorButtonProps> = ({
  onClick,
  label,
  type = 'default',
  className,
  wide = false,
}) => {
  const buttonClasses = {
    default: 'calculator-button',
    function: 'calculator-button function-button',
    operator: 'calculator-button operator-button',
    equal: 'calculator-button equal-button',
  };

  return (
    <button
      onClick={onClick}
      className={cn(
        buttonClasses[type],
        'h-14 flex items-center justify-center font-medium text-lg',
        wide ? 'col-span-2' : 'aspect-square',
        className
      )}
    >
      {label}
    </button>
  );
};

export default CalculatorButton;
