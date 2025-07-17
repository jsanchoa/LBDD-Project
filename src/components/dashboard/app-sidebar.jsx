import {
  BadgeDollarSign,
  Box,
  GalleryVerticalEnd,
  HandCoins,
  Wallet,
} from "lucide-react";

import { NavMain } from "@/components/dashboard/nav-main";
import { NavUser } from "@/components/dashboard/nav-user";
import { TeamSwitcher } from "@/components/dashboard/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { useEffect, useState } from "react";

// This is sample data.
const data = {
  teams: [
    {
      name: "SmartFit",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
  ],
  navMain: [
    {
      title: "Entrenadores",
      url: "#",
      icon: Box,
    },
    {
      title: "Clientes",
      url: "/dashboard/clients",
      icon: BadgeDollarSign,
    },
    {
      title: "Entrenamientos",
      url: "#",
      icon: Wallet,
    },
    {
      title: "Citas",
      url: "#",
      icon: HandCoins,
    },
  ],
};

export function AppSidebar({ ...props }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const UserData = async () => {
      try {
        const res = await api.get("/me", { withCredentials: true });
        setUser(res?.data);
      } catch (error) {}
    };

    UserData();
  }, []);

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>

      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
