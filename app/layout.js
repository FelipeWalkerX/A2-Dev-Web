import "./globals.css";

export const metadata = {
  title: "Plataforma de Roteiros",
  description: "Roteiros de estudo para alunos do 6º ao 9º ano",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}