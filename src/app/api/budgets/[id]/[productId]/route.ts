import { NextRequest, NextResponse } from 'next/server';

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string; productId: string } },
) {
  console.log(params)
  return NextResponse.json({ message: 'Success', params });
}
