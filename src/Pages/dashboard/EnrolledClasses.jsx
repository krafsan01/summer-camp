import { Grid, SimpleGrid, Text } from "@mantine/core";
import ClassCard from "../../Components/classes/ClassCard";

const EnrolledClasses = () => {
  return (
    <div>
      <Text variant="text" size={25} fw="bold" mb={10}>
        My Enrolled Classes
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
    </div>
  );
};

export default EnrolledClasses;
