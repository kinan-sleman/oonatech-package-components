import React, { ReactNode } from "react";
import SideBarWithPreview from "../components/sidebarView/SideBarWithPreview";

interface IconFunction {
  (hovered: boolean): ReactNode;
}

interface pathData {
  id: string;
  title: string;
  link: string;
}
// Define the Route interface
interface Route {
  id: number;
  title: string;
  icon: IconFunction;
  width: number;
  link: string;
}

const routes: Route[] = [
  {
    id: 1,
    title: "Dashboard",
    icon: (hovered: boolean) => (hovered ? "📊" : "📈"),
    width: 39,
    link: "/fake-dashboard",
  },
  {
    id: 2,
    title: "User Management",
    icon: (hovered: boolean) => (hovered ? "👥" : "🧑‍💻"),
    width: 39,
    link: "/fake-users",
  },
  {
    id: 3,
    title: "Reports",
    icon: (hovered: boolean) => (hovered ? "📄" : "📑"),
    width: 39,
    link: "/fake-reports",
  },
  {
    id: 4,
    title: "Notifications",
    icon: (hovered: boolean) => (hovered ? "🔔" : "📩"),
    width: 39,
    link: "/fake-notifications",
  },
  {
    id: 5,
    title: "Settings",
    icon: (hovered: boolean) => (hovered ? "⚙️" : "🔧"),
    width: 39,
    link: "/fake-settings",
  },
  {
    id: 6,
    title: "Integrations",
    icon: (hovered: boolean) => (hovered ? "🔗" : "🌐"),
    width: 39,
    link: "/fake-integrations",
  },
  {
    id: 7,
    title: "Permissions",
    icon: (hovered: boolean) => (hovered ? "🔑" : "🛡️"),
    width: 39,
    link: "/fake-permissions",
  },
  {
    id: 8,
    title: "Audit Logs",
    icon: (hovered: boolean) => (hovered ? "📜" : "🗄️"),
    width: 39,
    link: "/fake-audit-logs",
  },
  {
    id: 9,
    title: "Custom Fields",
    icon: (hovered: boolean) => (hovered ? "🏷️" : "📌"),
    width: 39,
    link: "/fake-custom-fields",
  },
  {
    id: 10,
    title: "API Keys",
    icon: (hovered: boolean) => (hovered ? "🔑" : "🔐"),
    width: 39,
    link: "/fake-api-keys",
  },
  {
    id: 11,
    title: "User Roles",
    icon: (hovered: boolean) => (hovered ? "👮‍♂️" : "🎭"),
    width: 39,
    link: "/fake-user-roles",
  },
  {
    id: 12,
    title: "Authentication",
    icon: (hovered: boolean) => (hovered ? "🔒" : "🔓"),
    width: 39,
    link: "/fake-authentication",
  },
  {
    id: 13,
    title: "Data Management",
    icon: (hovered: boolean) => (hovered ? "💾" : "📊"),
    width: 39,
    subLinks: [
      {
        id: 131,
        title: "Import Data",
        link: "/fake-data/import",
      },
      {
        id: 132,
        title: "Export Data",
        link: "/fake-data/export",
      },
    ],
  },
];

function SidebarComponent({
  title= "system settings",
  section="admin",
  pageTitle="admin",
  paths=[],
  children,
}: {
  title: string;
  section: string;
  pageTitle: string;
  paths: pathData[];
  children: ReactNode;
}) {
  return (
    <SideBarWithPreview
      title={title}
      section={section}
      pageTitle={pageTitle}
      paths={paths}
      routes={routes}
      // backInHistory
    >
      {children}
    </SideBarWithPreview>
  );
}

export default SidebarComponent;
