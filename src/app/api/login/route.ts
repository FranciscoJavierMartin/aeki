export async function POST(request: Request) {
  const body = await request.json();

  console.log(body);

  return Response.json({ message: 'Test from route' });
}
