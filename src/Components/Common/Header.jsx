import { useState } from "react";
import {
  createStyles,
  Header,
  Container,
  Group,
  Burger,
  Paper,
  Transition,
  rem,
  Avatar,
  ActionIcon,
  useMantineColorScheme,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Link } from "react-router-dom";
import { Moon, SunLow } from "tabler-icons-react";

const HEADER_HEIGHT = rem(60);

const useStyles = createStyles((theme) => ({
  root: {
    position: "relative",
    zIndex: 1,
  },

  dropdown: {
    position: "absolute",
    top: HEADER_HEIGHT,
    left: 0,
    right: 0,
    zIndex: 0,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopWidth: 0,
    overflow: "hidden",

    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
  },

  links: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  burger: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  link: {
    display: "block",
    lineHeight: 1,
    padding: `${rem(8)} ${rem(12)}`,
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },

    [theme.fn.smallerThan("sm")]: {
      borderRadius: 0,
      padding: theme.spacing.md,
    },
  },

  linkActive: {
    "&, &:hover": {
      backgroundColor: theme.fn.variant({
        variant: "light",
        color: theme.primaryColor,
      }).background,
      color: theme.fn.variant({ variant: "light", color: theme.primaryColor })
        .color,
    },
  },
}));

const Navbar = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  const links = [
    { label: "Home", link: "/" },
    { label: "Instructors", link: "/instructors" },
    { label: "Classes", link: "/classes" },
  ];

  const [opened, { toggle, close }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);
  const { classes, cx } = useStyles();

  const items = links.map((link) => (
    <Link
      key={link.label}
      to={link.link}
      className={cx(classes.link)}
      onClick={(event) => {
        // event.preventDefault();
        setActive(link.link);
        close();
      }}
    >
      {link.label}
    </Link>
  ));

  return (
    <Header height={HEADER_HEIGHT} mb={50} className={classes.root}>
      <Container className={classes.header} size={"xl"}>
        <h1>LOGO</h1>

        <Group spacing={5} className={classes.links}>
          {items}
          <Link to="/signup" className={cx(classes.link)}>
            Sign Up
          </Link>
          <Link to="/login" className={cx(classes.link)}>
            Login
          </Link>
          <Link to="/dashboard" className={cx(classes.link)}>
            Dashboard
          </Link>

          <Avatar
            src="https://avatars.githubusercontent.com/u/10353856?s=460&u=88394dfd67727327c1f7670a1764dc38a8a24831&v=4"
            alt="it's me"
          />

          <ActionIcon size="lg" onClick={toggleColorScheme}>
            {colorScheme === "dark" ? (
              <SunLow size="1.7rem" strokeWidth={1.5} />
            ) : (
              <Moon size="1.7rem" strokeWidth={1.5} />
            )}
          </ActionIcon>
        </Group>

        <Burger
          opened={opened}
          onClick={toggle}
          className={classes.burger}
          size="sm"
        />

        <Transition transition="pop-top-right" duration={200} mounted={opened}>
          {(styles) => (
            <Paper className={classes.dropdown} withBorder style={styles}>
              {items}
              <Link to="/login" className={cx(classes.link)}>
                Sign Up
              </Link>
              <Link to="/login" className={cx(classes.link)}>
                Login
              </Link>
              <Link to="/dashboard" className={cx(classes.link)}>
                Dashboard
              </Link>

              <Avatar
                src="https://avatars.githubusercontent.com/u/10353856?s=460&u=88394dfd67727327c1f7670a1764dc38a8a24831&v=4"
                alt="it's me"
              />
            </Paper>
          )}
        </Transition>
      </Container>
    </Header>
  );
};

export default Navbar;
