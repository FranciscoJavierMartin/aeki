import { NextResponse } from 'next/server';

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

export async function GET(request: Request) {
  return NextResponse.json({ customers });
}
