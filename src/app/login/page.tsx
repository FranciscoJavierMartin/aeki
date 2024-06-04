export default function LoginPage() {
  return (
    <div className='grid min-h-screen w-full grid-cols-[2fr_1fr]'>
      <div className='bg-blue-400'></div>
      <div className='flex flex-col justify-center items-center'>
        <h2 className='text-3xl'>Login</h2>
        <form>
          <button>Login</button>
        </form>
      </div>
    </div>
  );
}
