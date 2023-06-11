import React from "react";
import { Container, Title, Text } from "@mantine/core";
import ClassCard from "./ClassCard";
import { SimpleGrid } from "@mantine/core";

const Classes = () => {
  return (
    <Container size={"xl"} pb={50}>
      <Title size="h1" align="center">
        Classes
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
        <ClassCard />
        <ClassCard />
        <ClassCard />
        <ClassCard />
        <ClassCard />
        <ClassCard />
        <ClassCard />
        <ClassCard />
        <ClassCard />
        <ClassCard />
      </SimpleGrid>
    </Container>
  );
};

export default Classes;
