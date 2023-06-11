import { SimpleGrid } from "@mantine/core";
import MyClassesCard from "../../Components/dashboard/MyClassesCard";

const MyClassesPage = () => {
  return (
    <div>
      <SimpleGrid
        cols={4}
        breakpoints={[
          { maxWidth: "md", cols: 3, spacing: "md" },
          { maxWidth: "sm", cols: 2, spacing: "sm" },
          { maxWidth: "xs", cols: 1, spacing: "sm" },
        ]}
      >
        <MyClassesCard />
        <MyClassesCard />
        <MyClassesCard />
        <MyClassesCard />
        <MyClassesCard />
      </SimpleGrid>
    </div>
  );
};

export default MyClassesPage;
