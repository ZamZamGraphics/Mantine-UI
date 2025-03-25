import {
  ActionIcon,
  useComputedColorScheme,
  useMantineColorScheme,
} from "@mantine/core";
import { IconMoon, IconSun } from "@tabler/icons-react";
import cx from "clsx";
import classes from "./Style.module.css";

function ThemeSwitch() {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });

  return (
    <ActionIcon
      onClick={() =>
        setColorScheme(computedColorScheme === "light" ? "dark" : "light")
      }
      variant="default"
      size="xl"
      aria-label="Toggle color scheme"
    >
      {computedColorScheme === "dark" ? (
        <IconSun className={cx(classes.icon, classes.light)} stroke={1} />
      ) : (
        <IconMoon className={cx(classes.icon, classes.dark)} stroke={1} />
      )}
    </ActionIcon>
  );
}

export default ThemeSwitch;
