
import React from 'react';
import { cn } from '@/lib/utils';

interface CalculatorDisplayProps {
  primaryValue: string;
  secondaryValue?: string;
  error?: boolean;
}

const CalculatorDisplay: React.FC<CalculatorDisplayProps> = ({
  primaryValue,
  secondaryValue,
  error = false,
}) => {
  return (
    <div className="calculator-screen p-4 rounded-xl mb-4 flex flex-col items-end justify-end h-32 w-full overflow-hidden">
      {secondaryValue && (
        <div className="text-calc-display-text/70 text-right mb-1 text-sm truncate w-full font-mono">
          {secondaryValue}
        </div>
      )}
      <div 
        className={cn(
          "calculator-display text-calc-display-text text-right text-3xl sm:text-4xl font-mono truncate w-full transition-all duration-200",
          error && "text-red-500"
        )}
      >
        {primaryValue}
      </div>
    </div>
  );
};

export default CalculatorDisplay;
