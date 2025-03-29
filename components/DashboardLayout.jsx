"use client";
import Logo from "@/components/Logo";
import Dropdown from "@/components/header/Dropdown";
import Sidebar from "@/components/sidebar";
import ThemeSwitch from "@/components/theme/ThemeSwitch";
import { AppShell, Box, Burger, Flex, Group, ScrollArea } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

export function DashboardLayout({ children }) {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 230, breakpoint: "sm", collapsed: { mobile: !opened } }}
      padding="md"
    >
      <AppShell.Header className="bg-white">
        <Group justify="space-between" px="md">
          <Flex align="center">
            <Burger
              opened={opened}
              onClick={toggle}
              hiddenFrom="sm"
              size="sm"
            />
            <Logo />
          </Flex>
          <Box>
            <Dropdown />
          </Box>
        </Group>
      </AppShell.Header>
      <AppShell.Navbar className="bg-white">
        <AppShell.Section grow my="md" component={ScrollArea}>
          <Sidebar />
        </AppShell.Section>
        <AppShell.Section>
          <ThemeSwitch />
        </AppShell.Section>
      </AppShell.Navbar>
      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
}
