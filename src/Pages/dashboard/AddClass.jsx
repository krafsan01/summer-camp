import { Button, Input, NumberInput, Space, Text } from "@mantine/core";

const AddClass = () => {
  return (
    <div>
      <Text variant="text" size={25} mb={10} fw={600}>
        Add Class
      </Text>
      <form method="#">
        <Input.Wrapper label="Class Name" required withAsterisk>
          <Input placeholder="Class Name" />
        </Input.Wrapper>
        <Space h={"sm"} />
        <Input.Wrapper label="Class Image" required withAsterisk>
          <Input placeholder="Class Image" type="file" />
        </Input.Wrapper>
        <Space h={"sm"} />
        <Input.Wrapper label="Instructor Name" required withAsterisk>
          <Input placeholder="Instructor Name" />
        </Input.Wrapper>
        <Space h={"sm"} />
        <Input.Wrapper label="Instructor Email" required withAsterisk>
          <Input placeholder="Instructor Email" />
        </Input.Wrapper>
        <Space h={"sm"} />
        <Input.Wrapper label="Available Seats" required withAsterisk>
          <NumberInput placeholder="Available Seats" />
        </Input.Wrapper>
        <Space h={"sm"} />
        <Input.Wrapper label="Price" required withAsterisk>
          <NumberInput placeholder="Price" />
        </Input.Wrapper>
        <Space h={"sm"} />
        <Button type="submit">Add Class</Button>
      </form>
    </div>
  );
};

export default AddClass;
