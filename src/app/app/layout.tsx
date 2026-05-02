import { AppSidebar } from "@/components/layout/AppSidebar";

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 py-8 flex flex-col md:flex-row gap-8 lg:gap-12">
      <AppSidebar />
      <div className="flex-grow min-w-0">
        {children}
      </div>
    </div>
  );
}
