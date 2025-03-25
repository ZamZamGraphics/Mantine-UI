import { NavLink } from "@mantine/core";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import SidebarItems from "./SidebarItems";

function SidebarItemCollapse({ item }) {
  const pathname = usePathname();
  const checkOpen = pathname.includes(item.path) ? true : false;
  const [open, setOpen] = useState(checkOpen);
  return item ? (
    <NavLink
      component={Link}
      href={item.path}
      label={item.title}
      leftSection={item.icon && item.icon}
      childrenOffset={item.icon && 28}
      opened={open}
      onChange={() => setOpen(true)}
    >
      {item.child?.map((route, index) =>
        route ? (
          route.child ? (
            <SidebarItemCollapse item={route} key={index} />
          ) : (
            <SidebarItems item={route} key={index} />
          )
        ) : null
      )}
    </NavLink>
  ) : null;
}

export default SidebarItemCollapse;
