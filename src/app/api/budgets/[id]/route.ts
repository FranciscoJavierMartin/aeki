import { NextRequest, NextResponse } from 'next/server';
import { prismaClient } from '@/lib/utils/prisma-client';
import addDays from '@/lib/utils/add-days';

export async function GET(
  request: Request,
  { params }: { params: { id: string } },
) {
  const data = await prismaClient.budget.findUnique({
    where: { id: params.id },
    include: {
      Customer: true,
      products: {
        include: {
          Product: true,
        },
      },
    },
  });

  const productsMapped =
    data?.products.map(({ Product, pricePerUnit, quantity }) => ({
      pricePerUnit,
      quantity,
      name: Product.name,
      productId: Product.id,
      photoURL: Product.photoURL,
      totalPrice: pricePerUnit * quantity,
    })) || [];

  return NextResponse.json({
    budget: {
      discountAppliedPercentage: data?.discountAppliedPercentage,
      dueDate: data?.dueDate,
      totalPrice: data?.totalPrice,
      id: data?.id,
    },
    products: productsMapped,
    customer: data?.Customer,
  });
}

/*export async function DELETE(
  request: Request,
  { params }: { params: { id: string } },
) {
  console.log('DELETE');
  const { productId } = await request.json();

  const budget = await prismaClient.budget.findUnique({
    where: { id: params.id },
    include: { products: true },
  });

  if (budget) {
    const newProductList = budget.products.filter(
      (p) => p.productId !== productId,
    );
    const newTotalPrice = newProductList.reduce(
      (acc, p) => p.quantity * p.pricePerUnit + acc,
      0,
    );

    // await prismaClient.budget.update({
    //   where: {
    //     id: params.id,
    //   },
    //   data: {
    //     dueDate: addDays(new Date(), 15),
    //     totalPrice: newTotalPrice,
    //   },
    // });

    // await prismaClient.productsOnBudgets.deleteMany({
    //   where: {
    //     productId,
    //     budgetId: params.id,
    //   },
    // });
  }

  return Response.json({ message: 'Success' });
}*/

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  // requesting data from the front-end
  const body = (await request.json()) || '{}';
  console.log(body, params);
  console.log(typeof body);
  // storing user_id in the id var
  //     const id=req.user_id;
  // // creating a db client
  //     const client = await db.connect();
  //     try{
  //         if(id){
  // // deleting user based on its id
  //             const resp = await client.sql`DELETE FROM users WHERE id = ${id};`;
  //             return NextResponse.json({resp:resp},{status:200})
  //         }
  //         else{
  //         throw new Error("Error Deletion Record!")
  //         }
  //     }
  //     catch(error){
  //         return  NextResponse.json({"message":(error as {message:string}).message},{status:404})
  //     }

  return NextResponse.json({ message: 'Success', body });
}
