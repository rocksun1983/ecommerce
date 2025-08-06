import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import CheckoutClient from "./CheckoutClient";

export default async function CheckoutPage() {
  const session = await getServerSession(authOptions);

  return (
    <CheckoutClient
      userEmail={session?.user?.email || ""}
    />
  );
}