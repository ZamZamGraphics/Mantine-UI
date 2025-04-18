import { Button, Flex } from "@mantine/core";
import Link from "next/link";

export default function Home() {
  return (
    <Flex
      mih={800}
      gap="md"
      justify="center"
      align="center"
      direction="row"
      wrap="wrap"
    >
      <Button component={Link} href="/login">
        Login
      </Button>
      <Button component={Link} href="/dashboard">
        Dashboard
      </Button>
    </Flex>
  );
}
