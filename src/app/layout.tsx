import type { Metadata } from "next";
import '../styles/globals.scss';

export const metadata: Metadata = {
  title: "Gerenciar estados no React.js",
  description: "Aprenda a gerenciar estados no React.js de forma eficiente.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body>
        {children}
      </body>
    </html>
  );
}
