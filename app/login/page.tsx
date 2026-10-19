"use client";

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('atendimento@atendo.com');
  const [password, setPassword] = useState('123456');
  const [loading, setLoading] = useState(false);

  const handleLogin = (event: FormEvent) => {
    event.preventDefault();
    setLoading(true);

    setTimeout(() => {
      const user = { name: 'Maria da Silva', email, role: 'Atendente' };
      localStorage.setItem('atendo-user', JSON.stringify(user));
      router.push('/dashboard');
      setLoading(false);
    }, 600);
  };

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_#fff3f7,_#f6e7ef_35%,_#f0eaf1_100%)] px-4 py-10">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[32px] border border-pink-100 bg-white/80 shadow-soft backdrop-blur-sm">
        <div className="grid min-h-[780px] md:grid-cols-2">
          <section className="relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#fff2f6] via-[#f9dfe9] to-[#f6edf4] p-8">
            <div className="absolute left-6 top-8 h-16 w-16 rounded-full bg-pink-200/50 blur-2xl" />
            <div className="absolute bottom-10 right-10 h-24 w-24 rounded-full bg-rose-200/50 blur-3xl" />
            <div className="relative w-full max-w-xl rounded-[28px] border border-white/60 bg-white/40 p-8 shadow-soft backdrop-blur-xl">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#ff6ca5] to-[#d81b60] text-xl font-black text-white shadow-lg shadow-pink-200">
                  A
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.3em] text-pink-500">Atendo</p>
                  <h1 className="text-3xl font-black italic text-[#d81b60]">à Domicílio</h1>
                </div>
              </div>

              <div className="space-y-4">
                <div className="rounded-2xl bg-white/90 p-4 shadow-md">
                  <p className="text-xs font-bold uppercase tracking-[0.28em] text-pink-500">Serviço</p>
                  <p className="mt-2 text-2xl font-black text-[#2a1d22]">Manicure & Pedicure</p>
                  <p className="mt-2 text-sm text-[#6f5c61]">Atendimento premium em casa com conforto, higiene e praticidade.</p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl bg-[#fff7fb] p-4 ring-1 ring-pink-100">
                    <p className="text-sm font-bold text-[#d81b60]">Agendamentos</p>
                    <p className="mt-2 text-3xl font-black text-[#2f1c22]">128</p>
                    <p className="text-xs text-[#7c5c63]">no mês</p>
                  </div>
                  <div className="rounded-2xl bg-[#fff7fb] p-4 ring-1 ring-pink-100">
                    <p className="text-sm font-bold text-[#d81b60]">Clientes</p>
                    <p className="mt-2 text-3xl font-black text-[#2f1c22]">540</p>
                    <p className="text-xs text-[#7c5c63]">ativos</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="flex items-center justify-center bg-white px-6 py-10 md:px-12">
            <div className="w-full max-w-md">
              <div className="mb-8">
                <p className="text-sm font-bold uppercase tracking-[0.25em] text-pink-500">Bem-vindo</p>
                <h2 className="mt-3 text-4xl font-black text-[#2b1d22]">Entrar</h2>
              </div>

              <form onSubmit={handleLogin} className="space-y-5">
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-semibold text-[#4d3238]">E-mail</label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-2xl border border-pink-100 bg-[#fff8fb] px-4 py-3 text-[#2a1d22] outline-none transition focus:border-pink-400 focus:ring-2 focus:ring-pink-100"
                    placeholder="seu@email.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="password" className="mb-2 block text-sm font-semibold text-[#4d3238]">Senha</label>
                  <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full rounded-2xl border border-pink-100 bg-[#fff8fb] px-4 py-3 text-[#2a1d22] outline-none transition focus:border-pink-400 focus:ring-2 focus:ring-pink-100"
                    placeholder="••••••••"
                    required
                  />
                </div>

                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center gap-2 text-[#5b444b]">
                    <input type="checkbox" className="h-4 w-4 accent-[#d81b60]" /> Lembrar-me
                  </label>
                  <Link href="#" className="font-semibold text-[#d81b60] hover:text-[#b40f4a]">Esqueci a senha</Link>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-2xl bg-gradient-to-r from-[#f86fa0] via-[#de2b73] to-[#b40f4a] px-4 py-3 text-base font-bold text-white shadow-lg shadow-pink-200 transition hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {loading ? 'Entrando...' : 'Entrar'}
                </button>
              </form>

              <div className="mt-6 rounded-2xl border border-pink-100 bg-[#fff7fb] px-4 py-3 text-sm text-[#5c4450]">
                Acesso demo: <span className="font-semibold">atendimento@atendo.com</span> / <span className="font-semibold">123456</span>
              </div>

              <p className="mt-6 text-center text-sm text-[#6a4e56]">
                Ainda não tem conta?{' '}
                <Link href="#" className="font-bold text-[#d81b60]">Solicitar cadastro</Link>
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
