import { DashboardLayout } from "@/components/DashboardLayout";

export const metadata = {
  title: "Dashboard",
};

export default function RootLayout({ children }) {
  return <DashboardLayout>{children}</DashboardLayout>;
}
