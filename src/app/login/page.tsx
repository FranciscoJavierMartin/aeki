import InputForm from '@/components/InputForm';

export default function LoginPage() {
  return (
    <div className='grid min-h-screen w-full grid-cols-[2fr_1fr]'>
      <div className='bg-blue-400'></div>
      <div className='flex flex-col items-center justify-center'>
        <h2 className='text-3xl'>Login</h2>
        <form className='flex w-[300px] flex-col gap-2 mt-4'>
          <InputForm id='username' name='username' placeholder='Username' />
          <InputForm
            id='password'
            name='password'
            placeholder='Password'
            type='password'
          />
          <button className='mt-6 w-full rounded-md bg-purple-500 px-3 py-2 text-white outline-none hover:bg-purple-600'>
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
