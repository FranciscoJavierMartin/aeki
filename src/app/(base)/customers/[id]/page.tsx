export default async function CustomerPage({
  params,
}: {
  params: { id: string };
}) {
  const { customer } = await fetch(
    `http://localhost:4230/api/customers/${params.id}`,
  ).then((res) => res.json());

  return (
    <div>
      <h1 className='text-2xl'>{customer.name}</h1>
    </div>
  );
}
