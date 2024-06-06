import { diffYears } from '@/lib/utils/diff-years';

export default async function ProfilePage() {
  const { user } = await fetch('http://localhost:4230/api/profile').then(
    (res) => res.json(),
  );

  return (
    <div>
      <h2 className='text-3xl'>{user.name}&apos;s account</h2>
      <h4 className='text-2xl'>Personal info</h4>
      <div className='grid w-96 grid-cols-2 gap-y-2'>
        <div>
          <div>Name</div>
          <div>{user.name}</div>
        </div>
        <div>
          <div>Last name</div>
          <div>{user.lastname}</div>
        </div>
        <div>
          <div>Email</div>
          <div>{user.emai}</div>
        </div>
        <div>
          <div>DNI</div>
          <div>{user.dni}</div>
        </div>
        <div>
          <div>Phone</div>
          <div>{user.phone}</div>
        </div>
        <div>
          <div>Age</div>
          <div>{diffYears(new Date(), new Date(user.dateOfBirth))}</div>
        </div>
      </div>

      <h4 className='text-2xl'>Address info</h4>
      <div className='grid w-96 grid-cols-2 gap-y-2'>
        <div>
          <div>Street</div>
          <div>{user.address.street}</div>
        </div>
        <div>
          <div>Town</div>
          <div>{user.address.town}</div>
        </div>
        <div>
          <div>Number</div>
          <div>{user.address.no}</div>
        </div>
      </div>
    </div>
  );
}
