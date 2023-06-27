import {
  ApplicationsIcon,
  CatalogIcon,
  DashboardIcon,
  TenantsIcon,
  UsersIcon,
  VendorsIcon,
  ViewsIcon,
} from "../Icons";
import { IconProps } from "../interface/Icon";

export const SidebarSections = [
  {
    sectionTitle: "",
    items: [
      {
        icon: (props: IconProps) => <DashboardIcon {...props} />,
        label: "Dashboard",
        route: "/",
      },
    ],
  },
  {
    sectionTitle: "Content",
    items: [
      {
        icon: (props: IconProps) => <CatalogIcon {...props} />,
        label: "Catalogs",
        route: "/catalogs",
      },
      {
        icon: (props: IconProps) => <VendorsIcon {...props} />,
        label: "Vendors",
        route: "/vendors",
      },
    ],
  },
  {
    sectionTitle: "User Management",
    items: [
      {
        icon: (props: IconProps) => <UsersIcon {...props} />,
        label: "Users",
        route: "/users",
      },
      {
        icon: (props: IconProps) => <ViewsIcon {...props} />,
        label: "Views",
        route: "/views",
      },
    ],
  },
  {
    sectionTitle: "Other",
    items: [
      {
        icon: (props: IconProps) => <TenantsIcon {...props} />,
        label: "Tenants",
        route: "/tenants",
      },
      {
        icon: (props: IconProps) => <ApplicationsIcon {...props} />,
        label: "Applications",
        route: "/applications",
      },
    ],
  },
];
