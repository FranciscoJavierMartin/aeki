export default function ThemeSwitch() {
  return (
    <label className='relative inline-block h-8 w-[52px] cursor-pointer rounded-[100px] bg-blue-500'>
      <input
        type='checkbox'
        id='theme-checkbox'
        className='peer hidden'
        onClick={() => {
          const theme = document.documentElement.className;

          if (theme === 'light') {
            document.documentElement.className = 'dark';
            localStorage.setItem('theme', 'dark');
          } else {
            document.documentElement.className = 'light';
            localStorage.setItem('theme', 'light');
          }
        }}
      />
      <span className='relative h-6 w-12 cursor-pointer rounded-3xl bg-gray-400 transition-all before:absolute before:bottom-0 before:left-1 before:top-4 before:m-auto before:size-6 before:rounded-[50%] before:bg-white before:bg-cover before:transition-all peer-checked:bg-[#2196F3] peer-checked:before:left-6' />
    </label>
  );
}
