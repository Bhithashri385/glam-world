import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import Sidebar from "@/components/dashboard/Sidebar";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  if (!session) redirect("/login?callbackUrl=/dashboard");

  return (
    <div data-dashboard className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 lg:ml-0">{children}</div>
    </div>
  );
}
