
// Basic arithmetic operations
export const add = (a: number, b: number): number => a + b;
export const subtract = (a: number, b: number): number => a - b;
export const multiply = (a: number, b: number): number => a * b;
export const divide = (a: number, b: number): number => {
  if (b === 0) throw new Error("Division by zero");
  return a / b;
};

// Scientific functions
export const square = (a: number): number => Math.pow(a, 2);
export const cube = (a: number): number => Math.pow(a, 3);
export const sqrt = (a: number): number => {
  if (a < 0) throw new Error("Invalid input for square root");
  return Math.sqrt(a);
};
export const cubeRoot = (a: number): number => Math.cbrt(a);
export const reciprocal = (a: number): number => {
  if (a === 0) throw new Error("Division by zero");
  return 1 / a;
};
export const toPercent = (a: number): number => a / 100;
export const sin = (a: number): number => Math.sin(a);
export const cos = (a: number): number => Math.cos(a);
export const tan = (a: number): number => Math.tan(a);
export const log = (a: number): number => {
  if (a <= 0) throw new Error("Invalid input for logarithm");
  return Math.log10(a);
};
export const ln = (a: number): number => {
  if (a <= 0) throw new Error("Invalid input for natural logarithm");
  return Math.log(a);
};
export const exp = (a: number): number => Math.exp(a);
export const powerOf = (base: number, exponent: number): number => Math.pow(base, exponent);

// Helper for parsing and formatting numbers
export const parseNumber = (value: string): number => {
  const parsed = parseFloat(value);
  if (isNaN(parsed)) throw new Error("Invalid number");
  return parsed;
};

export const formatNumber = (value: number): string => {
  // Handle special cases
  if (isNaN(value)) return "Error";
  if (!isFinite(value)) return value > 0 ? "Infinity" : "-Infinity";
  
  // Convert to string with appropriate precision
  const valueStr = value.toString();
  
  // If the number is an integer or has few decimal places, display as is
  if (Number.isInteger(value) || valueStr.length <= 15) {
    return valueStr;
  }
  
  // For numbers with many decimal places, use scientific notation
  return value.toPrecision(10);
};

// Memory management
export const memoryStore = (memory: number, value: number): number => value;
export const memoryRecall = (memory: number): number => memory;
export const memoryClear = (): number => 0;
export const memoryAdd = (memory: number, value: number): number => memory + value;
export const memorySubtract = (memory: number, value: number): number => memory - value;

// Constants
export const PI = Math.PI;
export const E = Math.E;
