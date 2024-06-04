import InputForm from '@/components/InputForm';

export default function LoginPage() {
  return (
    <div className='grid min-h-screen w-full grid-cols-[2fr_1fr]'>
      <div className='bg-blue-400'></div>
      <div className='flex flex-col items-center justify-center'>
        <h2 className='text-3xl'>Login</h2>
        <form className='flex flex-col gap-2'>
          <InputForm id='username' name='username' placeholder='Username' />
          <InputForm
            id='password'
            name='password'
            placeholder='Password'
            type='password'
          />
          <button>Login</button>
        </form>
      </div>
    </div>
  );
}
