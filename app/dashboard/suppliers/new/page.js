import { Card, Center, Container, Title } from "@mantine/core";

function NewSupplier() {
  return (
    <Container>
      <Card shadow="sm" padding="lg" radius="lg" withBorder>
        <Title order={3}>Add New Supplier</Title>
      </Card>
    </Container>
  );
}

export default NewSupplier;
