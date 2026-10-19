"use client";

import { useEffect, useState } from 'react';
import { MapPin, Phone, Search, Star } from 'lucide-react';
import AppShell from '@/components/app-shell';

type Client = {
  id: string;
  name: string;
  service: string | null;
  status: string;
  phone: string | null;
  location: string | null;
};

export default function ClientesPage() {
  const [clients, setClients] = useState<Client[]>([]);

  useEffect(() => {
    const load = async () => {
      const response = await fetch('/api/clients');
      const data = await response.json();
      setClients(data.clients);
    };

    load();
  }, []);

  return (
    <AppShell>
      <div className="space-y-6">
        <header className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-pink-500">Clientes</p>
            <h1 className="mt-2 text-3xl font-black text-[#2b1d22]">Base de clientes</h1>
          </div>

          <div className="flex items-center gap-3 rounded-2xl border border-pink-100 bg-white px-3 py-2 shadow-sm">
            <Search size={18} className="text-pink-500" />
            <input placeholder="Pesquisar cliente" className="w-40 bg-transparent text-sm outline-none placeholder:text-[#9e8087]" />
          </div>
        </header>

        <section className="grid gap-4">
          {clients.map((client) => (
            <div key={client.id} className="rounded-[24px] border border-pink-100 bg-white p-4 shadow-sm">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#f9dfe9] to-[#f9edf2] text-lg font-black text-[#d81b60]">
                    {client.name[0]}
                  </div>
                  <div>
                    <p className="text-lg font-black text-[#2b1d22]">{client.name}</p>
                    <p className="text-sm text-[#6d4f56]">{client.service ?? 'Atendimento geral'}</p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 text-sm text-[#5d4850]">
                  <span className="inline-flex items-center gap-1 rounded-full bg-[#fff3f8] px-2.5 py-1 font-semibold text-[#d81b60]">
                    <Star size={14} /> {client.status}
                  </span>
                  <span className="inline-flex items-center gap-1"><Phone size={14} /> {client.phone ?? '(73) 00000-0000'}</span>
                  <span className="inline-flex items-center gap-1"><MapPin size={14} /> {client.location ?? 'Domicílio'}</span>
                </div>
              </div>
            </div>
          ))}
        </section>
      </div>
    </AppShell>
  );
}
