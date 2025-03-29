import { ActionIcon, useMantineColorScheme } from "@mantine/core";
import { IconMoon, IconSun } from "@tabler/icons-react";
import cx from "clsx";
import { useEffect, useState } from "react";
import classes from "./Style.module.css";

function ThemeSwitch() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch by ensuring rendering happens only on the client
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Avoid rendering until after hydration

  return (
    <ActionIcon
      onClick={() => toggleColorScheme()}
      variant="default"
      size="xl"
      aria-label="Toggle color scheme"
    >
      {colorScheme === "dark" ? (
        <IconSun className={cx(classes.icon, classes.light)} stroke={1} />
      ) : (
        <IconMoon className={cx(classes.icon, classes.dark)} stroke={1} />
      )}
    </ActionIcon>
  );
}

export default ThemeSwitch;
