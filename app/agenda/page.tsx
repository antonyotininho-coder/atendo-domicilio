"use client";

import AppShell from '@/components/app-shell';
import { CalendarCheck2, Clock3, MapPin, Search } from 'lucide-react';

const appointments = [
  { id: 1, date: '25/01', hour: '09:00', client: 'Ana Paula', service: 'Manicure em casa', local: 'Barro Preto', status: 'Confirmado' },
  { id: 2, date: '25/01', hour: '11:15', client: 'Marina Souza', service: 'Pedicure premium', local: 'Centro', status: 'Pendente' },
  { id: 3, date: '26/01', hour: '14:00', client: 'Letícia Nunes', service: 'Alongamento de unha', local: 'Santo Antônio', status: 'Confirmado' },
  { id: 4, date: '27/01', hour: '16:30', client: 'Patrícia Costa', service: 'Pedicure + esmaltação', local: 'Piedade', status: 'Em andamento' }
];

export default function AgendaPage() {
  return (
    <AppShell>
      <div className="space-y-6">
        <header className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-pink-500">Agenda</p>
            <h1 className="mt-2 text-3xl font-black text-[#2b1d22]">Próximos atendimentos</h1>
          </div>

          <div className="flex items-center gap-3 rounded-2xl border border-pink-100 bg-white px-3 py-2 shadow-sm">
            <Search size={18} className="text-pink-500" />
            <input placeholder="Buscar cliente" className="w-40 bg-transparent text-sm outline-none placeholder:text-[#9e8087]" />
          </div>
        </header>

        <section className="rounded-[28px] border border-pink-100 bg-white p-4 shadow-sm">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl font-black text-[#2b1d22]">Janeiro</h2>
            <button className="rounded-xl bg-[#fff3f8] px-3 py-2 text-sm font-bold text-[#d81b60]">+ Adicionar</button>
          </div>

          <div className="grid gap-3">
            {appointments.map((appointment) => (
              <div key={appointment.id} className="flex flex-col gap-4 rounded-2xl bg-[#fff7fa] p-4 ring-1 ring-pink-100 md:flex-row md:items-center md:justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#f9dfe9] to-[#fce2ee] text-pink-700">
                    <CalendarCheck2 size={18} />
                  </div>
                  <div>
                    <p className="font-black text-[#2b1d22]">{appointment.client}</p>
                    <p className="text-sm text-[#6d4f56]">{appointment.service}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 text-sm text-[#5d4850]">
                  <span className="inline-flex items-center gap-1"><CalendarCheck2 size={14} /> {appointment.date}</span>
                  <span className="inline-flex items-center gap-1"><Clock3 size={14} /> {appointment.hour}</span>
                  <span className="inline-flex items-center gap-1"><MapPin size={14} /> {appointment.local}</span>
                </div>

                <span className={`inline-flex rounded-full px-3 py-1 text-xs font-bold ${
                  appointment.status === 'Confirmado'
                    ? 'bg-emerald-100 text-emerald-700'
                    : appointment.status === 'Pendente'
                      ? 'bg-amber-100 text-amber-700'
                      : 'bg-pink-100 text-pink-700'
                }`}>
                  {appointment.status}
                </span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </AppShell>
  );
}
