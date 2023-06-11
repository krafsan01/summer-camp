import { useState } from "react";
import {
  createStyles,
  Table,
  ScrollArea,
  rem,
  Button,
  Text,
} from "@mantine/core";

const useStyles = createStyles((theme) => ({
  header: {
    position: "sticky",
    top: 0,
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
    transition: "box-shadow 150ms ease",

    "&::after": {
      content: '""',
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 0,
      borderBottom: `${rem(1)} solid ${
        theme.colorScheme === "dark"
          ? theme.colors.dark[3]
          : theme.colors.gray[2]
      }`,
    },
  },

  scrolled: {
    boxShadow: theme.shadows.sm,
  },
}));

const ManageUserTable = () => {
  const { classes, cx } = useStyles();
  const [scrolled, setScrolled] = useState(false);
  return (
    <div>
      <Text mb={10} size={25} fw="bold">
        Manage Users
      </Text>
      <ScrollArea
        h={1200}
        onScrollPositionChange={({ y }) => setScrolled(y !== 0)}
      >
        <Table miw={900}>
          <thead
            className={cx(classes.header, { [classes.scrolled]: scrolled })}
          >
            <tr>
              <th>User Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Jhankar Mahbub</td>
              <td>jhankarmahbub@gmail.com</td>
              <td>Admin</td>
              <td style={{ display: "flex", gap: "1rem" }}>
                <Button>Make Instructor</Button>
                <Button>Make Admin</Button>
              </td>
            </tr>
            <tr>
              <td>Jhankar Mahbub</td>
              <td>jhankarmahbub@gmail.com</td>
              <td>Instructor</td>
              <td style={{ display: "flex", gap: "1rem" }}>
                <Button>Make Instructor</Button>
                <Button>Make Admin</Button>
              </td>
            </tr>
            <tr>
              <td>Jhankar Mahbub</td>
              <td>jhankarmahbub@gmail.com</td>
              <td>Student</td>
              <td style={{ display: "flex", gap: "1rem" }}>
                <Button>Make Instructor</Button>
                <Button>Make Admin</Button>
              </td>
            </tr>
            <tr>
              <td>Jhankar Mahbub</td>
              <td>jhankarmahbub@gmail.com</td>
              <td>Student</td>
              <td style={{ display: "flex", gap: "1rem" }}>
                <Button>Make Instructor</Button>
                <Button>Make Admin</Button>
              </td>
            </tr>
            <tr>
              <td>Jhankar Mahbub</td>
              <td>jhankarmahbub@gmail.com</td>
              <td>Student</td>
              <td style={{ display: "flex", gap: "1rem" }}>
                <Button>Make Instructor</Button>
                <Button>Make Admin</Button>
              </td>
            </tr>
            <tr>
              <td>Jhankar Mahbub</td>
              <td>jhankarmahbub@gmail.com</td>
              <td>Student</td>
              <td style={{ display: "flex", gap: "1rem" }}>
                <Button>Make Instructor</Button>
                <Button>Make Admin</Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </ScrollArea>
    </div>
  );
};

export default ManageUserTable;
