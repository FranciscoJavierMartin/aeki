import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';

export default function ThemeSwitcher() {
  return (
    <div className='flex items-center gap-x-4 ml-2'>
      <Switch id='airplane-mode' className='text-red-400' color='#123456'/>
      <Label htmlFor='airplane-mode' className='text-xl'>
        Dark mode
      </Label>
    </div>
  );
}
