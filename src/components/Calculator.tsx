
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import CalculatorButton from './CalculatorButton';
import CalculatorDisplay from './CalculatorDisplay';
import ThemeSelector from './ThemeSelector';
import { useCalculator } from '@/hooks/useCalculator';
import { 
  Calculator as CalculatorIcon, 
  Power, 
  Delete, 
  Divide, 
  X as Multiply, 
  Minus, 
  Plus, 
  Equal,
  Function, // Replacing SquareRoot with Function icon
  RefreshCw,
  Percent 
} from 'lucide-react';

const Calculator: React.FC = () => {
  const [theme, setTheme] = useState('dark');
  const { display, actions } = useCalculator();

  const handleThemeChange = (newTheme: string) => {
    setTheme(newTheme);
  };

  return (
    <div className={cn("calculator-glass rounded-2xl p-6", `theme-${theme}`)}>
      <div className="flex flex-col items-center">
        <div className="flex justify-between items-center w-full mb-4">
          <div className="flex items-center space-x-2">
            <CalculatorIcon className="h-5 w-5 text-calc-button-text/80" />
            <h1 className="text-calc-button-text text-lg font-medium">Casio Color Dark</h1>
          </div>
          <div className="text-calc-button-text/80 text-xs px-2 py-1 rounded-full bg-calc-button/50 backdrop-blur-sm">
            {display.isInDegreeMode ? 'DEG' : 'RAD'}
          </div>
        </div>

        <ThemeSelector currentTheme={theme} onThemeChange={handleThemeChange} />
        
        <CalculatorDisplay 
          primaryValue={display.primary} 
          secondaryValue={display.secondary}
          error={display.hasError}
        />

        <div className="grid grid-cols-4 gap-3 w-full">
          {/* Row 1 - Memory & Clear functions */}
          <CalculatorButton 
            label="MC" 
            onClick={actions.memoryClear} 
            type="function" 
          />
          <CalculatorButton 
            label="MR" 
            onClick={actions.memoryRecall} 
            type="function" 
          />
          <CalculatorButton 
            label="M+" 
            onClick={actions.memoryAdd} 
            type="function" 
          />
          <CalculatorButton 
            label="M-" 
            onClick={actions.memorySubtract} 
            type="function" 
          />

          {/* Row 2 - Clear & Functions */}
          <CalculatorButton 
            label="C" 
            onClick={actions.clear} 
            type="function" 
          />
          <CalculatorButton 
            label="CE" 
            onClick={actions.clearEntry} 
            type="function" 
          />
          <CalculatorButton 
            label={<Delete size={18} />} 
            onClick={actions.handleBackspace} 
            type="function" 
          />
          <CalculatorButton 
            label={<Divide size={18} />} 
            onClick={() => actions.handleOperator('÷')} 
            type="operator" 
          />

          {/* Row 3 - Numbers & Multiply */}
          <CalculatorButton 
            label="7" 
            onClick={() => actions.appendDigit('7')} 
          />
          <CalculatorButton 
            label="8" 
            onClick={() => actions.appendDigit('8')} 
          />
          <CalculatorButton 
            label="9" 
            onClick={() => actions.appendDigit('9')} 
          />
          <CalculatorButton 
            label={<Multiply size={18} />} 
            onClick={() => actions.handleOperator('×')} 
            type="operator" 
          />

          {/* Row 4 - Numbers & Subtract */}
          <CalculatorButton 
            label="4" 
            onClick={() => actions.appendDigit('4')} 
          />
          <CalculatorButton 
            label="5" 
            onClick={() => actions.appendDigit('5')} 
          />
          <CalculatorButton 
            label="6" 
            onClick={() => actions.appendDigit('6')} 
          />
          <CalculatorButton 
            label={<Minus size={18} />} 
            onClick={() => actions.handleOperator('-')} 
            type="operator" 
          />

          {/* Row 5 - Numbers & Add */}
          <CalculatorButton 
            label="1" 
            onClick={() => actions.appendDigit('1')} 
          />
          <CalculatorButton 
            label="2" 
            onClick={() => actions.appendDigit('2')} 
          />
          <CalculatorButton 
            label="3" 
            onClick={() => actions.appendDigit('3')} 
          />
          <CalculatorButton 
            label={<Plus size={18} />} 
            onClick={() => actions.handleOperator('+')} 
            type="operator" 
          />

          {/* Row 6 - Zero, Decimal, Equals */}
          <CalculatorButton 
            label="±" 
            onClick={actions.toggleSign} 
          />
          <CalculatorButton 
            label="0" 
            onClick={() => actions.appendDigit('0')} 
          />
          <CalculatorButton 
            label="." 
            onClick={() => actions.appendDigit('.')} 
          />
          <CalculatorButton 
            label={<Equal size={18} />} 
            onClick={actions.calculateResult} 
            type="equal" 
          />

          {/* Row 7 - Scientific functions */}
          <CalculatorButton 
            label="x²" 
            onClick={() => actions.handleFunction('square')} 
            type="function" 
          />
          <CalculatorButton 
            label="√x" 
            onClick={() => actions.handleFunction('sqrt')} 
            type="function" 
          />
          <CalculatorButton 
            label="1/x" 
            onClick={() => actions.handleFunction('reciprocal')} 
            type="function" 
          />
          <CalculatorButton 
            label={<Percent size={18} />} 
            onClick={() => actions.handleFunction('percent')} 
            type="function" 
          />

          {/* Row 8 - More scientific functions */}
          <CalculatorButton 
            label="sin" 
            onClick={() => actions.handleFunction('sin')} 
            type="function" 
          />
          <CalculatorButton 
            label="cos" 
            onClick={() => actions.handleFunction('cos')} 
            type="function" 
          />
          <CalculatorButton 
            label="tan" 
            onClick={() => actions.handleFunction('tan')} 
            type="function" 
          />
          <CalculatorButton 
            label="xʸ" 
            onClick={() => actions.handleOperator('xy')} 
            type="operator" 
          />

          {/* Row 9 - Even more scientific functions */}
          <CalculatorButton 
            label="log" 
            onClick={() => actions.handleFunction('log')} 
            type="function" 
          />
          <CalculatorButton 
            label="ln" 
            onClick={() => actions.handleFunction('ln')} 
            type="function" 
          />
          <CalculatorButton 
            label="e" 
            onClick={() => actions.handleFunction('e')} 
            type="function" 
          />
          <CalculatorButton 
            label="π" 
            onClick={() => actions.handleFunction('pi')} 
            type="function" 
          />

          {/* Row 10 - Mode switch */}
          <CalculatorButton 
            label={<RefreshCw size={16} />} 
            onClick={actions.toggleMode} 
            type="function" 
            wide
          />
          <CalculatorButton 
            label="MS" 
            onClick={actions.memoryStore} 
            type="function" 
            wide
          />
        </div>
      </div>
    </div>
  );
};

export default Calculator;
