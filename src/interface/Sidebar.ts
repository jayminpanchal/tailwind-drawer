import { ReactNode } from "react";
import { IconProps } from "./Icon";

export interface SidebarSection {
  sectionTitle?: string;
  items: SidebarItem[];
  smallSidebar?: boolean;
}

export interface SidebarItem {
  icon?: (props: IconProps) => ReactNode;
  label: string;
  route: string;
  smallSidebar?: boolean;
}
