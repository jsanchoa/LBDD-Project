import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "./components/dashboard/app-sidebar";
import { BreadCrumbPage } from "./components/dashboard/breadcrumb";

export default function Layout({ children, data }) {
  return (
    <SidebarProvider>
      {/*  */}
      <AppSidebar />

      <SidebarInset>
        {/* Area del Breadcrumb */}
        <BreadCrumbPage {...data} />

        {/* Componente que recibe para ser mostrado en la pagina  */}
        {children}
      </SidebarInset>
    </SidebarProvider>
  );
}
