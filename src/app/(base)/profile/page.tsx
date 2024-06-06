import { diffYears } from '@/lib/utils/diff-years';

export default async function ProfilePage() {
  const { user } = await fetch('http://localhost:4230/api/profile').then(
    (res) => res.json(),
  );

  return (
    <div className='mt-10 flex flex-col items-center'>
      <img
        src={user.photoURL}
        className='size-48 rounded-full'
        alt='User photo'
        height={192}
        width={192}
      />
      <h2 className='mt-5 text-3xl'>{user.name}&apos;s account</h2>
      <h4 className='mt-6 text-2xl'>Personal info</h4>
      <main className='mt-5 grid grid-cols-[2fr_4fr] gap-x-4 gap-y-2'>
        <div className='font-semibold'>Name</div>
        <div className='text-right'>{user.name}</div>

        <div className='font-semibold'>Last name</div>
        <div className='text-right'>{user.lastname}</div>

        <div className='font-semibold'>Email</div>
        <div className='text-right'>{user.email}</div>

        <div className='font-semibold'>DNI</div>
        <div className='text-right'>{user.dni}</div>

        <div className='font-semibold'>Phone</div>
        <div className='text-right'>{user.phone}</div>

        <div className='font-semibold'>Age</div>
        <div className='text-right'>
          {diffYears(new Date(), new Date(user.dateOfBirth))}
        </div>
      </main>
    </div>
  );
}
