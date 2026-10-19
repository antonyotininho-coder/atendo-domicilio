import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Atendo à Domicílio',
  description: 'Gestão de manicure e pedicure em domicílio'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
