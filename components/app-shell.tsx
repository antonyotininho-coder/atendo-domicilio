"use client";

import AppShell from '@/components/app-shell';
import { Bell, ShieldCheck, SlidersHorizontal } from 'lucide-react';

const settings = [
  { label: 'Notificações de agendamento', value: 'Ativadas' },
  { label: 'Cobrança automática', value: 'Ativada' },
  { label: 'Confirmação por WhatsApp', value: 'Ativada' },
  { label: 'Modo de atendimento', value: 'Domicílio' }
];

export default function ConfiguracoesPage() {
  return (
    <AppShell>
      <div className="space-y-6">
        <header>
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-pink-500">Configurações</p>
          <h1 className="mt-2 text-3xl font-black text-[#2b1d22]">Preferências da conta</h1>
        </header>

        <section className="grid gap-5 xl:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[28px] border border-pink-100 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#f9dfe9] to-[#fce2ee] text-[#d81b60]">
                <ShieldCheck size={22} />
              </div>
              <div>
                <p className="text-lg font-black text-[#2b1d22]">Segurança</p>
                <p className="text-sm text-[#6d4f56]">Acesso e proteção</p>
              </div>
            </div>

            <div className="mt-5 space-y-3">
              {settings.map((setting) => (
                <div key={setting.label} className="flex items-center justify-between rounded-2xl bg-[#fff7fa] p-3 ring-1 ring-pink-100">
                  <span className="text-sm font-medium text-[#4f3a40]">{setting.label}</span>
                  <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-bold text-emerald-700">{setting.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[28px] border border-pink-100 bg-white p-5 shadow-sm">
            <div className="mb-5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#fff3f8] text-[#d81b60]">
                  <Bell size={20} />
                </div>
                <div>
                  <p className="text-lg font-black text-[#2b1d22]">Notificações</p>
                  <p className="text-sm text-[#6d4f56]">Configuração do canal</p>
                </div>
              </div>
              <button className="rounded-xl bg-[#fff3f8] p-2 text-[#d81b60]">
                <SlidersHorizontal size={18} />
              </button>
            </div>

            <div className="space-y-4 text-sm text-[#5b4249]">
              <div className="rounded-2xl border border-dashed border-pink-200 bg-[#fff9fb] p-4">
                <p className="font-bold text-[#2b1d22]">Notificação de confirmações</p>
                <p className="mt-2">Enviar lembrete de confirmação por WhatsApp 1 hora antes do atendimento.</p>
              </div>
              <div className="rounded-2xl border border-dashed border-pink-200 bg-[#fff9fb] p-4">
                <p className="font-bold text-[#2b1d22]">Campanhas automáticas</p>
                <p className="mt-2">Reenviar ofertas de manicure e pedicure para clientes fiéis a cada 30 dias.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </AppShell>
  );
}
