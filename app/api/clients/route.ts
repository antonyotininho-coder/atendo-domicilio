import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET() {
  const clients = await prisma.client.findMany({ orderBy: { createdAt: 'desc' } });
  return NextResponse.json({ clients });
}

export async function POST(request: Request) {
  const body = await request.json();

  const client = await prisma.client.create({
    data: {
      name: body.name,
      email: body.email,
      phone: body.phone,
      location: body.location,
      service: body.service,
      status: body.status ?? 'Premium'
    }
  });

  return NextResponse.json({ client }, { status: 201 });
}
