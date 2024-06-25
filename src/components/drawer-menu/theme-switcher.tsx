import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';

export default function ThemeSwitcher() {
  return (
    <div className='ml-2 flex items-center gap-x-4'>
      <Switch id='airplane-mode' />
      <Label htmlFor='airplane-mode' className='text-xl'>
        Dark mode
      </Label>
    </div>
  );
}
