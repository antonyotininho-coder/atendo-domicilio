import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  const existing = await prisma.user.findUnique({ where: { email: 'atendimento@atendo.com' } });

  if (!existing) {
    const passwordHash = await bcrypt.hash('123456', 10);

    const user = await prisma.user.create({
      data: {
        name: 'Maria da Silva',
        email: 'atendimento@atendo.com',
        passwordHash
      }
    });

    const clients = await prisma.client.createMany({
      data: [
        { name: 'Ana Paula', email: 'ana@email.com', phone: '(73) 98815-2005', location: 'Barro Preto', service: 'Manicure em casa', status: 'Premium' },
        { name: 'Marina Souza', email: 'marina@email.com', phone: '(73) 99112-4433', location: 'Centro', service: 'Pedicure premium', status: 'Fidelizada' },
        { name: 'Letícia Nunes', email: 'leticia@email.com', phone: '(73) 98800-7711', location: 'Santo Antônio', service: 'Alongamento de unha', status: 'Nova' },
        { name: 'Patrícia Costa', email: 'patricia@email.com', phone: '(73) 98123-4455', location: 'Piedade', service: 'Pedicure + esmaltação', status: 'Premium' }
      ]
    });

    const clientList = await prisma.client.findMany();

    await prisma.appointment.createMany({
      data: [
        { userId: user.id, clientId: clientList[0].id, date: new Date('2026-10-20T09:00:00'), time: '09:00', service: 'Manicure em casa', status: 'Confirmado', local: 'Barro Preto' },
        { userId: user.id, clientId: clientList[1].id, date: new Date('2026-10-20T10:30:00'), time: '10:30', service: 'Pedicure premium', status: 'Pendente', local: 'Centro' },
        { userId: user.id, clientId: clientList[2].id, date: new Date('2026-10-21T14:00:00'), time: '14:00', service: 'Alongamento de unha', status: 'Confirmado', local: 'Santo Antônio' },
        { userId: user.id, clientId: clientList[3].id, date: new Date('2026-10-22T16:30:00'), time: '16:30', service: 'Pedicure + esmaltação', status: 'Em andamento', local: 'Piedade' }
      ]
    });

    console.log('Seed concluído com usuário demo e dados iniciais.');
  } else {
    console.log('Seed ignorado porque o usuário demo já existe.');
  }
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
