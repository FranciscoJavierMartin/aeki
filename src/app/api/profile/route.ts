import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const user = {
    name: 'John',
    lastname: 'Doe',
    dateOfBirth: new Date('1975-08-12'),
    email: 'john@doe.com',
    dni: '12345678A',
    photoURL:
      'https://png.pngtree.com/png-vector/20190710/ourlarge/pngtree-user-vector-avatar-png-image_1541962.jpg',
    phone: '912345678',
    address: {
      street: 'Evegreen Terrace',
      state: 'CA',
      town: 'Springfield',
      no: '123',
      zip: '12345',
    },
  };

  return NextResponse.json({ user });
}
