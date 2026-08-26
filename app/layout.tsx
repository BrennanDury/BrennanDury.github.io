import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Brennan Dury — Mathematics Researcher & ML Engineer',
  description: 'Research and engineering across singular learning theory, interpretable machine learning, and scientific deep learning.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
