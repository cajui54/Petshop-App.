import ButtonSignout from "@/app/_components/button-signout";
import {
  HeaderComponent,
  HeaderUserContainer,
  HeaderUserImageContainer,
  HeaderUserInfo,
} from "@/app/_components/header";
import { getUser } from "@/app/_data-access/user/get-user";
import { LayoutProps } from "@/app/client/[id]/layout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Home | Administrador",
  },
};
export default async function AdminLayout({ params, children }: LayoutProps) {
  const user = await getUser(params.id);

  return (
    <main>
      <HeaderComponent>
        <HeaderUserContainer>
          <HeaderUserImageContainer image={user.image} name={user.image} />
          <HeaderUserInfo name={user.name} />
        </HeaderUserContainer>
        <ButtonSignout />
      </HeaderComponent>
      {children}
    </main>
  );
}
