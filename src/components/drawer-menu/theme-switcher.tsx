'use client';
import { useState } from 'react';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';

export default function ThemeSwitcher() {
  const [isDark, setIsDark] = useState<boolean>(false);

  return (
    <div className='ml-2 flex items-center gap-x-4'>
      <Switch
        id='theme-switch'
        checked={isDark}
        onCheckedChange={() => setIsDark((prev) => !prev)}
      />
      <Label htmlFor='theme-switch' className='text-xl'>
        Dark mode
      </Label>
    </div>
  );
}
