import React from "react";
import { Container, Title, Text } from "@mantine/core";
import ClassCard from "./Card";
import { SimpleGrid } from "@mantine/core";

const PopularClasses = () => {
  return (
    <Container size={"xl"} py={50}>
      <Title
        size="h1"
        align="center"
       
      >
        Popular Classes
      </Title>

      <Text size="sm" color="dimmed" align="center" mb={50}>
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
      </SimpleGrid>
    </Container>
  );
};

export default PopularClasses;
