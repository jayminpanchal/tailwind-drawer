import { useEffect } from "react";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  CloseIcon,
  DrawerIcon,
  ThemeDarkIcon,
  ThemeLightIcon,
} from "../../Icons";
import { SidebarSections } from "../../utils/sidebar";
import SidebarSection from "../SidebarSection";
import { useLocalStorage } from "usehooks-ts";

const Sidebar = () => {
  const [drawerOpen, setDrawerOpen] = useLocalStorage("drawer", false);
  const [smallSize, setSmallSize] = useLocalStorage("smallSize", false);
  const [isDarkTheme, setIsDarkTheme] = useLocalStorage("darkTheme", false);

  const onToggleSmallSidebar = () => {
    setDrawerOpen(false);
    setSmallSize((smallSize) => !smallSize);
  };

  const onToggleDrawer = () => {
    setSmallSize(false);
    setDrawerOpen((drawerOpen) => !drawerOpen);
  };

  const onSetDarkTheme = () => {
    setIsDarkTheme((isDarkTheme) => !isDarkTheme);
  };

  useEffect(() => {
    if (isDarkTheme) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  }, [isDarkTheme]);

  const renderSidebarContent = () => {
    return (
      <aside
        className={`${
          smallSize ? "w-16" : "w-64"
        } shadow h-full bg-sidebar flex flex-col overflow-auto`}
      >
        <div className="flex items-center justify-center py-5 bg-sidebar-header relative">
          <div className="absolute sm:block top-5 left-3 md:hidden lg:hidden xl:hidden 2xl:hidden">
            <button className="p-1" onClick={onToggleDrawer}>
              <CloseIcon />
            </button>
          </div>
          {smallSize ? (
            <>
              <img
                className="block dark:hidden"
                src="/logo/small_light.svg"
                alt="webridge"
              />
              <img
                className="hidden dark:block"
                src="/logo/small_dark.svg"
                alt="webridge"
              />
            </>
          ) : (
            <>
              <img
                className="block dark:hidden"
                src="/logo/light.svg"
                alt="webridge"
              />
              <img
                className="hidden dark:block"
                src="/logo/dark.svg"
                alt="webridge"
              />
            </>
          )}
        </div>
        <div className="flex px-2 flex-col flex-1">
          {SidebarSections.map((section, index) => (
            <SidebarSection
              key={`SIDEBAR_SECTION_${index}`}
              items={section.items}
              sectionTitle={section.sectionTitle}
              smallSidebar={smallSize}
            />
          ))}

          <button className="px-4 py-3" onClick={onSetDarkTheme}>
            <div className={`flex flex-1 items-center `}>
              <div className="w-5">
                {isDarkTheme ? <ThemeLightIcon /> : <ThemeDarkIcon />}
              </div>
              {!smallSize && (
                <p className="ml-2 font-semibold text-sm text-default">
                  {isDarkTheme ? "Light" : "Dark"}
                </p>
              )}
            </div>
          </button>
        </div>

        <div
          className={`w-full hidden lg:flex xl:flex 2xl:flex ${
            smallSize ? "justify-center" : "justify-end"
          }`}
        >
          <button className="p-3" onClick={onToggleSmallSidebar}>
            {smallSize ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </button>
        </div>
      </aside>
    );
  };

  return (
    <>
      <div className="hidden md:block h-full">{renderSidebarContent()}</div>
      <div className="block md:hidden mt-1 ml-1">
        <button className="p-3" onClick={onToggleDrawer}>
          <DrawerIcon />
        </button>
      </div>
      {drawerOpen && (
        <div className="md:hidden fixed w-full h-full z-10">
          {renderSidebarContent()}
        </div>
      )}
    </>
  );
};

export default Sidebar;
