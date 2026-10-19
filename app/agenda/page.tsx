"use client";

import { useEffect, useState } from 'react';
import { CalendarDays, Clock3, Sparkles, Users } from 'lucide-react';
import AppShell from '@/components/app-shell';

type Summary = {
  clientsCount: number;
  appointmentsCount: number;
  todayAppointments: Array<{
    id: string;
    time: string;
    client: string;
    service: string;
    status: string;
    local: string | null;
  }>;
};

export default function DashboardPage() {
  const [summary, setSummary] = useState<Summary | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadSummary = async () => {
      try {
        const response = await fetch('/api/dashboard');
        const data = await response.json();
        setSummary(data);
      } catch (error) {
        console.error('Erro ao carregar dashboard', error);
      } finally {
        setLoading(false);
      }
    };

    loadSummary();
  }, []);

  if (loading) {
    return (
      <AppShell>
        <div className="py-12 text-center text-[#5a3b44]">Carregando painel...</div>
      </AppShell>
    );
  }

  return (
    <AppShell>
      <div className="space-y-8">
        <header className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-pink-500">Dashboard</p>
            <h1 className="mt-2 text-3xl font-black text-[#2b1d22]">Visão geral</h1>
          </div>
          <button className="rounded-2xl bg-gradient-to-r from-[#f86fa0] to-[#d81b60] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-pink-200 transition hover:brightness-105">
            + Novo agendamento
          </button>
        </header>

        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <StatCard label="Agendamentos" value={summary?.appointmentsCount ?? 0} icon={CalendarDays} color="rose" />
          <StatCard label="Clientes ativos" value={summary?.clientsCount ?? 0} icon={Users} color="pink" />
          <StatCard label="Tempo médio" value="45 min" icon={Clock3} color="amber" />
          <StatCard label="Avaliação" value="4.9/5" icon={Sparkles} color="purple" />
        </section>

        <section className="grid gap-6 xl:grid-cols-[1.3fr_0.7fr]">
          <div className="rounded-[28px] border border-pink-100 bg-white p-5 shadow-sm">
            <div className="mb-5 flex items-center justify-between">
              <h2 className="text-xl font-black text-[#2b1d22]">Agenda de hoje</h2>
              <span className="text-sm font-semibold text-pink-600">{summary?.todayAppointments.length ?? 0} compromissos</span>
            </div>

            <div className="space-y-3">
              {(summary?.todayAppointments ?? []).map((item) => (
                <div key={item.id} className="flex items-center justify-between rounded-2xl bg-[#fff7fa] p-4 ring-1 ring-pink-100">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#f9dfe9] to-[#fce2ee] text-pink-700">
                      <CalendarDays size={18} />
                    </div>
                    <div>
                      <p className="font-bold text-[#2b1d22]">{item.client}</p>
                      <p className="text-sm text-[#6a4a52]">{item.service}</p>
                    </div>
                  </div>

                  <div className="text-right">
                    <p className="font-bold text-[#2b1d22]">{item.time}</p>
                    <span className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${
                      item.status === 'Confirmado' ? 'bg-emerald-100 text-emerald-700' :
                      item.status === 'Pendente' ? 'bg-amber-100 text-amber-700' : 'bg-pink-100 text-pink-700'
                    }`}>
                      {item.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[28px] border border-pink-100 bg-gradient-to-br from-[#fff3f7] to-[#fffdfd] p-5 shadow-sm">
            <h2 className="text-xl font-black text-[#2b1d22]">Resumo</h2>
            <div className="mt-5 space-y-4">
              <div className="rounded-2xl bg-white p-4 ring-1 ring-pink-100">
                <p className="text-sm text-[#6d4f56]">Receita do mês</p>
                <p className="mt-2 text-3xl font-black text-[#2b1d22]">R$ 18.450</p>
              </div>
              <div className="rounded-2xl bg-white p-4 ring-1 ring-pink-100">
                <p className="text-sm text-[#6d4f56]">Retorno</p>
                <p className="mt-2 text-3xl font-black text-[#2b1d22]">76%</p>
              </div>
              <div className="rounded-2xl bg-white p-4 ring-1 ring-pink-100">
                <p className="text-sm text-[#6d4f56]">Domicílio</p>
                <p className="mt-2 text-3xl font-black text-[#2b1d22]">85%</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </AppShell>
  );
}

function StatCard({
  label,
  value,
  icon: Icon,
  color
}: {
  label: string;
  value: string | number;
  icon: typeof CalendarDays;
  color: 'rose' | 'pink' | 'amber' | 'purple';
}) {
  const colorClass =
    color === 'rose'
      ? 'bg-pink-100 text-pink-600'
      : color === 'pink'
        ? 'bg-rose-100 text-rose-600'
        : color === 'amber'
          ? 'bg-amber-100 text-amber-600'
          : 'bg-violet-100 text-violet-600';

  return (
    <div className="rounded-[24px] border border-pink-100 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-[#6b4d56]">{label}</p>
          <p className="mt-3 text-3xl font-black text-[#2b1d22]">{value}</p>
        </div>
        <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${colorClass}`}>
          <Icon size={20} />
        </div>
      </div>
    </div>
  );
}
