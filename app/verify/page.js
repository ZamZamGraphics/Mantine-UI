import { Alert, Button, Card, Divider, Flex } from "@mantine/core";
import {
  IconExclamationCircleFilled,
  IconRosetteDiscountCheckFilled,
} from "@tabler/icons-react";
import Link from "next/link";

function VerifyPage() {
  const successIcon = <IconRosetteDiscountCheckFilled />;
  const errorIcon = <IconExclamationCircleFilled />;
  return (
    <Flex
      mih={800}
      gap="md"
      justify="center"
      align="center"
      direction="row"
      wrap="wrap"
    >
      <Card w="450" shadow="sm" padding="lg" radius="md">
        <Alert
          color="red"
          icon={errorIcon}
          title="The Verification Token Has Expired or is invalid!"
        />
        <Divider my="md" />
        <Alert
          color="green"
          icon={successIcon}
          title="Verification successful"
        />

        <Button component={Link} href="/login" fullWidth mt="md">
          Go Login Page
        </Button>
      </Card>
    </Flex>
  );
}

export default VerifyPage;
