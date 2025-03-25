import sidebarRoutes from "@/lib/sidebarRoutes";
import SidebarItemCollapse from "./SidebarItemCollapse";
import SidebarItems from "./SidebarItems";

function Sidebar() {
  return (
    <>
      {sidebarRoutes.map((route, index) =>
        route ? (
          route.child ? (
            <SidebarItemCollapse item={route} key={index} />
          ) : (
            <SidebarItems item={route} key={index} />
          )
        ) : null
      )}
    </>
  );
}

export default Sidebar;
