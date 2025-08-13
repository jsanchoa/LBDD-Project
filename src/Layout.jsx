import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "./components/dashboard/app-sidebar";
import { BreadCrumbPage } from "./components/dashboard/breadcrumb";
import { Toaster } from "sonner";

export default function Layout({ children, data }) {
  return (
    <SidebarProvider>
      {/*  */}
      <AppSidebar />

      <SidebarInset>
        {/* Area del Breadcrumb */}
        <BreadCrumbPage {...data} />
        <Toaster richColors position="bottom-right" />

        {/* Componente que recibe para ser mostrado en la pagina  */}
        {children}
      </SidebarInset>
    </SidebarProvider>
  );
}
