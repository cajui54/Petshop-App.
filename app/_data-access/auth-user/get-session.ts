"use server";
import { auth } from "auth";
import { redirect } from "next/navigation";
interface SessionDto {
  name: string;
  email: string;
  image: string;
}
export const getSessionAuth = async (): Promise<SessionDto> => {
  const session = await auth();

  if (!session || !session.user || !session.user.image) {
    redirect("/not-found");
  }
  const user: SessionDto = {
    name: session.user.name!,
    email: session.user.email!,
    image: session.user.image,
  };
  return user;
};
