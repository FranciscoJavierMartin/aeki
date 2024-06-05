import Header from '@/components/Header';

export default function Home() {
  return (
    <div>
      <Header />
      <div className='flex h-[calc(100vh-64px)] items-center justify-center'>
        <h1>Hello world</h1>
      </div>
    </div>
  );
}
