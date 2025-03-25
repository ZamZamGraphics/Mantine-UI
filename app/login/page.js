import { Button, Flex } from "@mantine/core";
import Link from "next/link";

export default function LoginPage() {
  return (
    <Flex
      mih={800}
      gap="md"
      justify="center"
      align="center"
      direction="row"
      wrap="wrap"
    >
      <Button component={Link} href="/">
        Home
      </Button>
      <Button component={Link} href="/dashboard">
        Dashboard
      </Button>
    </Flex>
  );
}
