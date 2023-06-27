import { FunctionComponent } from "react";
import { SidebarSection as SidebarSectionType } from "../../interface/Sidebar";
import SidebarItem from "../SidebarItem";
import { slugify } from "../../utils/strings";

const SidebarSection: FunctionComponent<SidebarSectionType> = (props) => {
  const { sectionTitle, items, smallSidebar } = props;
  return (
    <div className={`w-full ${smallSidebar ? '' : 'mt-4'}`}>
      {!smallSidebar && (
        <p className="text-xs text-primary font-semibold px-4 mb-1">
          {sectionTitle}
        </p>
      )}
      {items.map((item, index) => (
        <SidebarItem
          key={`SECTION_ITEM_${slugify(sectionTitle || "")}_${index}`}
          smallSidebar={smallSidebar}
          {...item}
        />
      ))}
    </div>
  );
};

export default SidebarSection;
