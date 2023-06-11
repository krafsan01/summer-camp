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

const SelectedTable = () => {
  const { classes, cx } = useStyles();
  const [scrolled, setScrolled] = useState(false);
  return (
    <div>
      <Text variant="text" size={25} fw="bold" mb={10}>
        My Selected Classes
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
              <th>Class Name</th>
              <th>Instructor Name</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Javascript Advanced</td>
              <td>Jhankar Mahbub</td>
              <td>$349</td>
              <td style={{ display: "flex", gap: "1rem" }}>
                <Button>Pay</Button>
                <Button styles={{ root: { backgroundColor: "red" } }}>
                  Delete
                </Button>
              </td>
            </tr>
            <tr>
              <td>Javascript Advanced</td>
              <td>Jhankar Mahbub</td>
              <td>$349</td>
              <td style={{ display: "flex", gap: "1rem" }}>
                <Button>Pay</Button>
                <Button styles={{ root: { backgroundColor: "red" } }}>
                  Delete
                </Button>
              </td>
            </tr>
            <tr>
              <td>Javascript Advanced</td>
              <td>Jhankar Mahbub</td>
              <td>$349</td>
              <td style={{ display: "flex", gap: "1rem" }}>
                <Button>Pay</Button>
                <Button styles={{ root: { backgroundColor: "red" } }}>
                  Delete
                </Button>
              </td>
            </tr>
            <tr>
              <td>Javascript Advanced</td>
              <td>Jhankar Mahbub</td>
              <td>$349</td>
              <td style={{ display: "flex", gap: "1rem" }}>
                <Button>Pay</Button>
                <Button styles={{ root: { backgroundColor: "red" } }}>
                  Delete
                </Button>
              </td>
            </tr>
            <tr>
              <td>Javascript Advanced</td>
              <td>Jhankar Mahbub</td>
              <td>$349</td>
              <td style={{ display: "flex", gap: "1rem" }}>
                <Button>Pay</Button>
                <Button styles={{ root: { backgroundColor: "red" } }}>
                  Delete
                </Button>
              </td>
            </tr>
            <tr>
              <td>Javascript Advanced</td>
              <td>Jhankar Mahbub</td>
              <td>$349</td>
              <td style={{ display: "flex", gap: "1rem" }}>
                <Button>Pay</Button>
                <Button styles={{ root: { backgroundColor: "red" } }}>
                  Delete
                </Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </ScrollArea>
    </div>
  );
};

export default SelectedTable;
