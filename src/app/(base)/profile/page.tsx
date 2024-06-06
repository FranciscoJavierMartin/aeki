import { diffYears } from '@/lib/utils/diff-years';

export default async function ProfilePage() {
  const { user } = await fetch('http://localhost:4230/api/profile').then(
    (res) => res.json(),
  );

  return (
    <div>
      <h2 className='text-3xl'>{user.name}&apos;s account</h2>
      <h4 className='text-2xl'>Personal info</h4>
      <div className='grid w-96 grid-cols-2'>
        <div>Name</div>
        <div>{user.name}</div>

        <div>Last name</div>
        <div>{user.lastname}</div>

        <div>Email</div>
        <div>{user.emai}</div>

        <div>DNI</div>
        <div>{user.dni}</div>

        <div>Phone</div>
        <div>{user.phone}</div>

        <div>Age</div>
        <div>{diffYears(new Date(), new Date(user.dateOfBirth))}</div>
      </div>

      <h4 className='text-2xl'>Address info</h4>
      <div className='grid w-96 grid-cols-2'>
        <div>
          
        </div>
        </div>

    </div>
  );
}
