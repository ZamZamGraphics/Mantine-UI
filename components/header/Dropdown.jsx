import { Avatar, Menu, UnstyledButton } from "@mantine/core";
import { IconLogout, IconSettings, IconUser } from "@tabler/icons-react";

function Dropdown() {
  return (
    <Menu shadow="md" width={200}>
      <Menu.Target>
        <Avatar component={UnstyledButton} name="Sultan Mahmud" />
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Label>My Account</Menu.Label>
        <Menu.Item leftSection={<IconUser size={14} />}>My Account</Menu.Item>
        <Menu.Item leftSection={<IconSettings size={14} />}>Settings</Menu.Item>
        <Menu.Divider />
        <Menu.Label>Logout</Menu.Label>
        <Menu.Item color="red" leftSection={<IconLogout size={14} />}>
          Logout
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}

export default Dropdown;
