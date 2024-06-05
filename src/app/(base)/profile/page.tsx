export default async function ProfilePage() {
  const { user } = await fetch('http://localhost:4230/api/profile').then(
    (res) => res.json(),
  );

  return (
    <div>
      <h2>{user.name}'s account</h2>
    </div>
  );
}
