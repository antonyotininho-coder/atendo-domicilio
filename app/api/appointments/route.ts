import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET() {
  const appointments = await prisma.appointment.findMany({
    include: { client: true },
    orderBy: { date: 'asc' }
  });

  return NextResponse.json({ appointments });
}

export async function POST(request: Request) {
  const body = await request.json();

  const appointment = await prisma.appointment.create({
    data: {
      userId: body.userId,
      clientId: body.clientId,
      date: new Date(body.date),
      time: body.time,
      service: body.service,
      status: body.status ?? 'Confirmado',
      local: body.local
    },
    include: { client: true }
  });

  return NextResponse.json({ appointment }, { status: 201 });
}
