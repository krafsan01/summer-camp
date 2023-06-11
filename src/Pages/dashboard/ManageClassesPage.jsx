import { Text } from "@mantine/core";
import ManageClassesTable from "../../Components/dashboard/ManageClassesTable";

const ManageClassesPage = () => {
  return (
    <div>
      <Text size={25} fw="bold" mb={10}>
        Manage Classes
      </Text>
      <ManageClassesTable />
    </div>
  );
};

export default ManageClassesPage;
