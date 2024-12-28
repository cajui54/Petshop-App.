import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PetShop App.",
  description: "Gerenciador de agendamento de petshop.",
  icons: {
    icon: ["./footDog_logo.png"],
    apple: ["./footDog_logo.png"],
    shortcut: ["./footDog_logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
