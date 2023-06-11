import { Box, Card, Image, Text, Badge, Group } from "@mantine/core";

const MyClassesCard = () => {
  const clsData = {
    availableSeats: 1,
  };
  return (
    <Card
      shadow="sm"
      bg={clsData.availableSeats === 0 ? "red" : ""}
      padding="lg"
      radius="md"
      withBorder
    >
      <Card.Section>
        <Image
          src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
          height={160}
          alt="Norway"
        />
      </Card.Section>

      <Group position="apart" mt="md" mb="xs">
        <Box>
          <Text weight={500}>Class Name</Text>
          <Text weight={500} size="md">
            Instructor name
          </Text>
        </Box>
        <Text component="h1" size="xl" variant="dark">
          $349
        </Text>
      </Group>
      <Group position="apart" mt="md" mb="xs">
        <Box>
          <Text fw="bold">Approved</Text>
        </Box>

        <Box ta={"center"}>
          <Badge color="green" variant="light">
            349
          </Badge>

          <Text weight={500} size="sm">
            Available seats
          </Text>
        </Box>
      </Group>

      {/* <Text size="sm" color="dimmed">
        With Fjord Tours you can explore more of the magical fjord landscapes
        with tours and activities on and around the fjords of Norway
      </Text> */}
    </Card>
  );
};

export default MyClassesCard;
