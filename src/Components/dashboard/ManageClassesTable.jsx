import { useState } from "react";
import {
  createStyles,
  Table,
  ScrollArea,
  rem,
  Menu,
  UnstyledButton,
} from "@mantine/core";
import { ChevronDown } from "tabler-icons-react";

const useStyles = createStyles((theme, { opened }) => ({
  control: {
    width: rem(200),
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: `${theme.spacing.xs} ${theme.spacing.md}`,
    borderRadius: theme.radius.md,
    border: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[2]
    }`,
    transition: "background-color 150ms ease",
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[opened ? 5 : 6]
        : opened
        ? theme.colors.gray[0]
        : theme.white,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[5]
          : theme.colors.gray[0],
    },
  },

  label: {
    fontWeight: 500,
    fontSize: theme.fontSizes.sm,
  },

  icon: {
    transition: "transform 150ms ease",
    transform: opened ? "rotate(180deg)" : "rotate(0deg)",
  },
}));

const data = [
  { label: "Approve" },
  { label: "Deny" },
  { label: "Send Feedback" },
];

const ManageClassesTable = () => {
  const [scrolled, setScrolled] = useState(false);
  const [opened, setOpened] = useState(false);
  const { classes, cx } = useStyles({ opened });
  const [selected, setSelected] = useState(data[0]);

  const items = data.map((item) => (
    <Menu.Item key={item.label} onClick={() => setSelected(item)}>
      {item.label}
    </Menu.Item>
  ));

  return (
    <div>
      <ScrollArea
        h={1200}
        onScrollPositionChange={({ y }) => setScrolled(y !== 0)}
      >
        <Table miw={900}>
          <thead
            className={cx(classes.header, { [classes.scrolled]: scrolled })}
          >
            <tr>
              <th>Class image</th>
              <th>Class name</th>
              <th>Instructor name</th>
              <th>Instructor email</th>
              <th>Available seats</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <img src="#" alt="class image" />
              </td>
              <td>Javascript Advanced</td>
              <td>Jhankar Mahbub</td>
              <td>jhankar.mahbub@gmail.com</td>
              <td>200</td>
              <td>$250</td>
              <td>
                <Menu
                  width="target"
                  radius="md"
                  withinPortal
                  onOpen={() => setOpened(true)}
                  onClose={() => setOpened(false)}
                >
                  <Menu.Target>
                    <UnstyledButton className={classes.control}>
                      <span className={classes.label}>{selected.label}</span>
                      <ChevronDown
                        size={16}
                        className={classes.icon}
                        stroke={1.5}
                        color="black"
                      />
                    </UnstyledButton>
                  </Menu.Target>
                  <Menu.Dropdown>{items}</Menu.Dropdown>
                </Menu>
              </td>
            </tr>
          </tbody>
        </Table>
      </ScrollArea>
    </div>
  );
};

export default ManageClassesTable;
