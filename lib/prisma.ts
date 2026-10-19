import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function getDashboardSummary() {
  const [clientsCount, appointmentsCount, todayAppointments] = await Promise.all([
    prisma.client.count(),
    prisma.appointment.count(),
    prisma.appointment.findMany({
      take: 5,
      orderBy: { date: 'asc' },
      include: { client: true }
    })
  ]);

  return {
    clientsCount,
    appointmentsCount,
    todayAppointments
  };
}

export async function getClients() {
  return prisma.client.findMany({
    orderBy: { createdAt: 'desc' }
  });
}

export async function getAppointments() {
  return prisma.appointment.findMany({
    orderBy: { date: 'asc' },
    include: { client: true }
  });
}

export default prisma;
