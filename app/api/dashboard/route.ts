import { NextResponse } from 'next/server';
import prisma, { getDashboardSummary } from '@/lib/prisma';

export async function GET() {
  const summary = await getDashboardSummary();

  return NextResponse.json({
    clientsCount: summary.clientsCount,
    appointmentsCount: summary.appointmentsCount,
    todayAppointments: summary.todayAppointments.map((item) => ({
      id: item.id,
      time: item.time,
      client: item.client.name,
      service: item.service,
      status: item.status,
      local: item.local
    }))
  });
}
