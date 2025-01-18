import { Metadata } from "next";

interface LayoutProps {
  params: { id: string };
  children: React.ReactNode;
}
export const metadata: Metadata = {
  title: {
    absolute: "Home | Administrador",
  },
};
export default async function AdminLayout({ params, children }: LayoutProps) {
  return (
    <div>
      <h2>Hello Admin!</h2>
      {children}
    </div>
  );
}
