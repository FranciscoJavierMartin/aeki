'use client';
import { useState } from 'react';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { useTheme } from 'next-themes';

export default function ThemeSwitcher() {
  const [isDark, setIsDark] = useState<boolean>(false);
  const { theme, setTheme } = useTheme();

  function handleTheme(): void {
    setIsDark((prev) => !prev);

    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }

  return (
    <div className='ml-2 flex items-center gap-x-4'>
      <Switch
        id='theme-switch'
        checked={isDark}
        onCheckedChange={handleTheme}
      />
      <Label htmlFor='theme-switch' className='text-xl md:hidden'>
        Dark mode
      </Label>
    </div>
  );
}
