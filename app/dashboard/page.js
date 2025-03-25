import { Button, Flex } from "@mantine/core";
import Link from "next/link";

export default function DashboardPage() {
  return (
    <Flex
      mih={200}
      gap="md"
      justify="start"
      align="start"
      direction="row"
      wrap="wrap"
    >
      <Button component={Link} href="/">
        Home
      </Button>
      <Button component={Link} href="/login">
        Login
      </Button>
    </Flex>
  );
}
