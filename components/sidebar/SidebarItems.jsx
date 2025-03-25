import { NavLink } from "@mantine/core";
import Link from "next/link";
import { usePathname } from "next/navigation";

function SidebarItems({ item }) {
  const pathname = usePathname();
  return item && item.path ? (
    <NavLink
      component={Link}
      href={item.path}
      label={item.title}
      leftSection={item.icon && item.icon}
      childrenOffset={item.icon && 28}
      active={pathname === item.path}
    />
  ) : null;
}

export default SidebarItems;
