import React from "react";
import { Container, Title, Text } from "@mantine/core";
import InstructorCard from "./InstructorCard";
import { SimpleGrid } from "@mantine/core";

const Instructors = () => {
  return (
    <Container size={"xl"} pb={50}>
      <Title size="h1" align="center">
        Instructors
      </Title>

      <Text size="sm" color="dimmed" align="center" mb={70}>
        With Fjord Tours you can explore more of the magical fjord landscapes
        with tours and activities on and around the fjords of Norway
      </Text>

      <SimpleGrid
        justify={"center"}
        cols={3}
        spacing={50}
        breakpoints={[
          { maxWidth: "md", cols: 3, spacing: "md" },
          { maxWidth: "sm", cols: 2, spacing: "sm" },
          { maxWidth: "xs", cols: 1, spacing: "sm" },
        ]}
      >
        <InstructorCard />
        <InstructorCard />
        <InstructorCard />
        <InstructorCard />
        <InstructorCard />
        <InstructorCard />
        <InstructorCard />
        <InstructorCard />
        <InstructorCard />
        <InstructorCard />
      </SimpleGrid>
    </Container>
  );
};

export default Instructors;
