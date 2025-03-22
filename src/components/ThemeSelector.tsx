
import React from 'react';
import { cn } from '@/lib/utils';

interface ThemeSelectorProps {
  currentTheme: string;
  onThemeChange: (theme: string) => void;
}

interface ThemeOption {
  id: string;
  name: string;
  color: string;
}

const themes: ThemeOption[] = [
  { id: 'dark', name: 'Dark', color: 'bg-[#212529]' },
  { id: 'blue', name: 'Blue', color: 'bg-[#1a3a8f]' },
  { id: 'purple', name: 'Purple', color: 'bg-[#6a38b3]' },
  { id: 'green', name: 'Green', color: 'bg-[#1d6d50]' },
  { id: 'red', name: 'Red', color: 'bg-[#a62e2e]' },
];

const ThemeSelector: React.FC<ThemeSelectorProps> = ({ currentTheme, onThemeChange }) => {
  return (
    <div className="flex items-center gap-2 mb-4 opacity-90 animate-fade-in">
      <span className="text-sm font-medium">Theme:</span>
      <div className="flex gap-2">
        {themes.map((theme) => (
          <button
            key={theme.id}
            onClick={() => onThemeChange(theme.id)}
            className={cn(
              'w-8 h-8 rounded-full transition-all duration-300',
              theme.color,
              currentTheme === theme.id ? 'ring-2 ring-white shadow-lg scale-110' : 'opacity-70 hover:opacity-100'
            )}
            aria-label={`Switch to ${theme.name} theme`}
          />
        ))}
      </div>
    </div>
  );
};

export default ThemeSelector;
