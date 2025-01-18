import ButtonSignout from "@/app/_components/button-signout";
import {
  HeaderComponent,
  HeaderLogoRight,
  HeaderLogoText,
  HeaderUserContainer,
  HeaderUserImageContainer,
  HeaderUserInfo,
} from "@/app/_components/header";
import { getUser } from "@/app/_data-access/user/get-user";
import { Metadata } from "next";

interface LayoutProps {
  params: { id: string };
  children: React.ReactNode;
}
export const metadata: Metadata = {
  title: "Banho & Tosa ",
};
export default async function ClientLayout({
  params,
  children,
}: Readonly<LayoutProps>) {
  const user = await getUser(params.id);

  return (
    <div className="w-full h-full">
      <HeaderComponent>
        <HeaderUserContainer>
          <HeaderUserImageContainer image={user.image} name={user.image} />
          <HeaderUserInfo name={user.name} />
        </HeaderUserContainer>
        <ButtonSignout />
      </HeaderComponent>
      <main>{children}</main>
    </div>
  );
}
