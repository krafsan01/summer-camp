import { Card, Image, Text, Badge, Button, Box } from "@mantine/core";

function InstructorCard() {
  return (
    <Card padding="lg" radius="md" bg={"transparent"}>
      <Card.Section>
        <Image
          src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
          height={200}
          width={200}
          alt="Norway"
          radius="50%"
          mx={"auto"}
        />
      </Card.Section>

      <Box ta="center" mt="md">
        <Text weight={500} size="lg" mb={0}>
          Norway Fjord Adventures
        </Text>
        <Text weight={500} size="md">
          Instructor@gmail.com
        </Text>
      </Box>

      <Text size="sm" color="dimmed" align="center">
        With Fjord Tours you can explore more of the magical fjord landscapes
        with tours and activities on and around the fjords of Norway
      </Text>
    </Card>
  );
}

export default InstructorCard;
