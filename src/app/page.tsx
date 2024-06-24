import Header from '@/components/Header';
import TypeEffect from '@/components/TypeEffect';
import { Button } from '@/components/ui/button';
import { SheetTrigger } from '@/components/ui/sheet';

const textCompleted =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia doloribus, debitis, aperiam perferendis quod molestiae nisi officia similique odio labore dolor vitae reprehenderit facere excepturi, animi maxime ab nulla repellat.';

export default function Home() {
  return (
    <div>
      <Header />
      <div className='flex h-[calc(100vh-64px)] items-center justify-center bg-blue-400'>
        <SheetTrigger asChild>
          <Button variant='outline'>Open</Button>
        </SheetTrigger>
        <TypeEffect textCompleted={textCompleted} />
      </div>
      {/* <SheetSide /> */}
    </div>
  );
}
