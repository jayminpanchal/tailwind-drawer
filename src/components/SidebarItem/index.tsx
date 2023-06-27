import { FunctionComponent } from "react";
import { SidebarItem as SidebarItemType } from "../../interface/Sidebar";
import { Link, useLocation } from "react-router-dom";

const SidebarItem: FunctionComponent<SidebarItemType> = (props) => {
  const { icon, label, route, smallSidebar } = props;

  const location = useLocation();
  const isSelected =
    route === "/"
      ? location.pathname === route
      : location.pathname.includes(route);

  return (
    <div className="flex flex-1 w-full items-center">
      {!smallSidebar && (
        <div
          className={`flex h-10 w-1 h-10 rounded ${
            isSelected ? "bg-primary" : ""
          }`}
        />
      )}
      <Link
        to={route}
        className={`flex flex-1 w-full d-block rounded ml-1 px-2 py-3 ${
          isSelected ? "bg-sidebar-selected" : ""
        } ${smallSidebar ? "ml-0" : "ml-1"}`}
      >
        <div
          className={`flex flex-1 items-center ${
            smallSidebar ? "justify-center" : ""
          }`}
        >
          {icon?.({ selected: isSelected })}
          {!smallSidebar && (
            <p className="ml-2 font-semibold text-sm text-default">{label}</p>
          )}
        </div>
      </Link>
    </div>
  );
};

export default SidebarItem;
