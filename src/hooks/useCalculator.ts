
import { useState, useCallback } from 'react';
import * as calculatorUtils from '@/utils/calculatorUtils';

type OperatorType = '+' | '-' | '×' | '÷' | 'xy' | null;

interface CalculatorState {
  primaryDisplay: string;
  secondaryDisplay: string;
  currentValue: string;
  storedValue: number | null;
  operator: OperatorType;
  isNewInput: boolean;
  memory: number;
  isInDegreeMode: boolean;
  hasError: boolean;
}

export const useCalculator = () => {
  const [state, setState] = useState<CalculatorState>({
    primaryDisplay: '0',
    secondaryDisplay: '',
    currentValue: '0',
    storedValue: null,
    operator: null,
    isNewInput: true,
    memory: 0,
    isInDegreeMode: true,
    hasError: false,
  });

  const clearError = useCallback(() => {
    if (state.hasError) {
      setState(prev => ({
        ...prev,
        primaryDisplay: '0',
        currentValue: '0',
        isNewInput: true,
        hasError: false,
      }));
    }
  }, [state.hasError]);

  const handleError = useCallback((errorMessage: string) => {
    console.error(errorMessage);
    setState(prev => ({
      ...prev,
      primaryDisplay: errorMessage,
      hasError: true,
    }));
  }, []);

  const clear = useCallback(() => {
    setState({
      primaryDisplay: '0',
      secondaryDisplay: '',
      currentValue: '0',
      storedValue: null,
      operator: null,
      isNewInput: true,
      memory: state.memory,
      isInDegreeMode: state.isInDegreeMode,
      hasError: false,
    });
  }, [state.memory, state.isInDegreeMode]);

  const clearEntry = useCallback(() => {
    setState(prev => ({
      ...prev,
      primaryDisplay: '0',
      currentValue: '0',
      isNewInput: true,
      hasError: false,
    }));
  }, []);

  const toggleSign = useCallback(() => {
    if (state.hasError) return;

    setState(prev => {
      const currentValue = prev.currentValue === '0' ? '0' : prev.currentValue;
      const newValue = currentValue.startsWith('-') 
        ? currentValue.substring(1) 
        : '-' + currentValue;
      
      return {
        ...prev,
        primaryDisplay: newValue,
        currentValue: newValue,
      };
    });
  }, [state.hasError]);

  const appendDigit = useCallback((digit: string) => {
    if (state.hasError) {
      clearError();
    }

    setState(prev => {
      if (prev.isNewInput) {
        return {
          ...prev,
          primaryDisplay: digit,
          currentValue: digit,
          isNewInput: false,
        };
      } else {
        // Don't allow multiple zeros at the start
        if (prev.currentValue === '0' && digit === '0') {
          return prev;
        }
        
        // Replace the initial zero
        if (prev.currentValue === '0' && digit !== '.') {
          return {
            ...prev,
            primaryDisplay: digit,
            currentValue: digit,
          };
        }
        
        // Don't allow multiple decimal points
        if (digit === '.' && prev.currentValue.includes('.')) {
          return prev;
        }
        
        const newValue = prev.currentValue + digit;
        return {
          ...prev,
          primaryDisplay: newValue,
          currentValue: newValue,
        };
      }
    });
  }, [state.hasError, clearError]);

  const handleBackspace = useCallback(() => {
    if (state.hasError) {
      clearError();
      return;
    }

    setState(prev => {
      if (prev.isNewInput || prev.currentValue.length <= 1) {
        return {
          ...prev,
          primaryDisplay: '0',
          currentValue: '0',
          isNewInput: true,
        };
      } else {
        const newValue = prev.currentValue.slice(0, -1);
        return {
          ...prev,
          primaryDisplay: newValue,
          currentValue: newValue,
        };
      }
    });
  }, [state.hasError, clearError]);

  const handleOperator = useCallback((op: OperatorType) => {
    if (state.hasError) {
      clearError();
      return;
    }

    try {
      setState(prev => {
        const currentValueNum = calculatorUtils.parseNumber(prev.currentValue);
        
        // If there's already an operation in progress, calculate result first
        if (prev.operator && prev.storedValue !== null && !prev.isNewInput) {
          let result;
          switch (prev.operator) {
            case '+': result = calculatorUtils.add(prev.storedValue, currentValueNum); break;
            case '-': result = calculatorUtils.subtract(prev.storedValue, currentValueNum); break;
            case '×': result = calculatorUtils.multiply(prev.storedValue, currentValueNum); break;
            case '÷': result = calculatorUtils.divide(prev.storedValue, currentValueNum); break;
            case 'xy': result = calculatorUtils.powerOf(prev.storedValue, currentValueNum); break;
            default: result = currentValueNum;
          }
          
          const formattedResult = calculatorUtils.formatNumber(result);
          const secondaryText = op 
            ? `${formattedResult} ${op}` 
            : '';
          
          return {
            ...prev,
            primaryDisplay: formattedResult,
            secondaryDisplay: secondaryText,
            currentValue: formattedResult,
            storedValue: result,
            operator: op,
            isNewInput: true,
          };
        } 
        // Starting a new operation
        else {
          const secondaryText = op 
            ? `${prev.currentValue} ${op}` 
            : '';
          
          return {
            ...prev,
            secondaryDisplay: secondaryText,
            storedValue: currentValueNum,
            operator: op,
            isNewInput: true,
          };
        }
      });
    } catch (error) {
      if (error instanceof Error) {
        handleError(error.message);
      }
    }
  }, [state.hasError, clearError, handleError]);

  const calculateResult = useCallback(() => {
    if (state.hasError) {
      clearError();
      return;
    }

    try {
      setState(prev => {
        // If there's no operation or we're waiting for second operand, do nothing
        if (prev.operator === null || prev.isNewInput) {
          return prev;
        }

        const currentValueNum = calculatorUtils.parseNumber(prev.currentValue);
        
        if (prev.storedValue === null) {
          return prev;
        }

        let result;
        switch (prev.operator) {
          case '+': result = calculatorUtils.add(prev.storedValue, currentValueNum); break;
          case '-': result = calculatorUtils.subtract(prev.storedValue, currentValueNum); break;
          case '×': result = calculatorUtils.multiply(prev.storedValue, currentValueNum); break;
          case '÷': result = calculatorUtils.divide(prev.storedValue, currentValueNum); break;
          case 'xy': result = calculatorUtils.powerOf(prev.storedValue, currentValueNum); break;
          default: result = currentValueNum;
        }

        const formattedResult = calculatorUtils.formatNumber(result);
        const secondaryText = `${prev.storedValue} ${prev.operator} ${currentValueNum} =`;
        
        return {
          ...prev,
          primaryDisplay: formattedResult,
          secondaryDisplay: secondaryText,
          currentValue: formattedResult,
          storedValue: null,
          operator: null,
          isNewInput: true,
        };
      });
    } catch (error) {
      if (error instanceof Error) {
        handleError(error.message);
      }
    }
  }, [state.hasError, clearError, handleError]);

  const handleFunction = useCallback((funcName: string) => {
    if (state.hasError) {
      clearError();
      return;
    }

    try {
      setState(prev => {
        const currentValueNum = calculatorUtils.parseNumber(prev.currentValue);
        let result: number;
        let secondaryText = '';

        // Perform the calculation based on the function name
        switch (funcName) {
          case 'square':
            result = calculatorUtils.square(currentValueNum);
            secondaryText = `sqr(${currentValueNum})`;
            break;
          case 'sqrt':
            result = calculatorUtils.sqrt(currentValueNum);
            secondaryText = `√(${currentValueNum})`;
            break;
          case 'reciprocal':
            result = calculatorUtils.reciprocal(currentValueNum);
            secondaryText = `1/(${currentValueNum})`;
            break;
          case 'percent':
            result = calculatorUtils.toPercent(currentValueNum);
            secondaryText = `${currentValueNum}%`;
            break;
          case 'sin':
            const angleForSin = prev.isInDegreeMode 
              ? (currentValueNum * Math.PI / 180) 
              : currentValueNum;
            result = calculatorUtils.sin(angleForSin);
            secondaryText = `sin(${currentValueNum})`;
            break;
          case 'cos':
            const angleForCos = prev.isInDegreeMode 
              ? (currentValueNum * Math.PI / 180) 
              : currentValueNum;
            result = calculatorUtils.cos(angleForCos);
            secondaryText = `cos(${currentValueNum})`;
            break;
          case 'tan':
            const angleForTan = prev.isInDegreeMode 
              ? (currentValueNum * Math.PI / 180) 
              : currentValueNum;
            result = calculatorUtils.tan(angleForTan);
            secondaryText = `tan(${currentValueNum})`;
            break;
          case 'log':
            result = calculatorUtils.log(currentValueNum);
            secondaryText = `log(${currentValueNum})`;
            break;
          case 'ln':
            result = calculatorUtils.ln(currentValueNum);
            secondaryText = `ln(${currentValueNum})`;
            break;
          case 'exp':
            result = calculatorUtils.exp(currentValueNum);
            secondaryText = `e^(${currentValueNum})`;
            break;
          case 'pi':
            result = calculatorUtils.PI;
            secondaryText = 'π';
            break;
          case 'e':
            result = calculatorUtils.E;
            secondaryText = 'e';
            break;
          default:
            return prev;
        }

        const formattedResult = calculatorUtils.formatNumber(result);
        return {
          ...prev,
          primaryDisplay: formattedResult,
          secondaryDisplay: secondaryText,
          currentValue: formattedResult,
          isNewInput: true,
        };
      });
    } catch (error) {
      if (error instanceof Error) {
        handleError(error.message);
      }
    }
  }, [state.hasError, clearError, handleError]);

  const toggleMode = useCallback(() => {
    setState(prev => ({
      ...prev,
      isInDegreeMode: !prev.isInDegreeMode
    }));
  }, []);

  // Memory functions
  const memoryStore = useCallback(() => {
    if (state.hasError) return;
    
    try {
      const value = calculatorUtils.parseNumber(state.currentValue);
      setState(prev => ({
        ...prev,
        memory: value,
      }));
    } catch (error) {
      if (error instanceof Error) {
        handleError(error.message);
      }
    }
  }, [state.currentValue, state.hasError, handleError]);

  const memoryRecall = useCallback(() => {
    if (state.hasError) {
      clearError();
    }

    const formattedMemory = calculatorUtils.formatNumber(state.memory);
    setState(prev => ({
      ...prev,
      primaryDisplay: formattedMemory,
      currentValue: formattedMemory,
      isNewInput: true,
      hasError: false,
    }));
  }, [state.memory, state.hasError, clearError]);

  const memoryClear = useCallback(() => {
    setState(prev => ({
      ...prev,
      memory: 0,
    }));
  }, []);

  const memoryAdd = useCallback(() => {
    if (state.hasError) return;
    
    try {
      const value = calculatorUtils.parseNumber(state.currentValue);
      setState(prev => ({
        ...prev,
        memory: calculatorUtils.memoryAdd(prev.memory, value),
      }));
    } catch (error) {
      if (error instanceof Error) {
        handleError(error.message);
      }
    }
  }, [state.currentValue, state.hasError, handleError]);

  const memorySubtract = useCallback(() => {
    if (state.hasError) return;
    
    try {
      const value = calculatorUtils.parseNumber(state.currentValue);
      setState(prev => ({
        ...prev,
        memory: calculatorUtils.memorySubtract(prev.memory, value),
      }));
    } catch (error) {
      if (error instanceof Error) {
        handleError(error.message);
      }
    }
  }, [state.currentValue, state.hasError, handleError]);

  return {
    display: {
      primary: state.primaryDisplay,
      secondary: state.secondaryDisplay,
      hasError: state.hasError,
      isInDegreeMode: state.isInDegreeMode,
    },
    actions: {
      appendDigit,
      handleBackspace,
      toggleSign,
      clear,
      clearEntry,
      handleOperator,
      calculateResult,
      handleFunction,
      toggleMode,
      memoryStore,
      memoryRecall,
      memoryClear,
      memoryAdd,
      memorySubtract,
    }
  };
};
