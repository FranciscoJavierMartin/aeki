const customers = [
  {
    name: 'John Doe',
    dni: '12345678A',
    email: 'john@doe.com',
  },
  {
    name: 'Jane Doe',
    dni: '12345678B',
    email: 'john@doe.com',
  },
  {
    name: 'Isaac Clarke',
    dni: '12345678C',
    email: 'isaac@clarke.com',
  },
  {
    name: 'Agatha Christie',
    dni: '12345678D',
    email: 'agatha@christie.com',
  },
];

export default function CustomersPage() {
  return (
    <div>
      <h1>Customers</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>DNI</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr key={customer.dni}>
              <td>{customer.name}</td>
              <td>{customer.dni}</td>
              <td>{customer.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
