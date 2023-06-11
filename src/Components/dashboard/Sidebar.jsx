import { useState } from "react";
import {
  createStyles,
  Navbar,
  Group,
  getStylesRef,
  rem,
  useMantineColorScheme,
} from "@mantine/core";
import {
  Fingerprint,
  Key,
  Settings,
  DatabaseImport,
  Logout,
  Books,
  Notebook,
} from "tabler-icons-react";
import { Link } from "react-router-dom";

const useStyles = createStyles((theme) => ({
  sideBar: {
    borderRight: `${rem(2)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[2]
    } !important`,
  },
  header: {
    borderBottom: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[2]
    }`,
  },

  footer: {
    paddingTop: theme.spacing.md,
    marginTop: theme.spacing.md,
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[2]
    }`,
  },

  link: {
    ...theme.fn.focusStyles(),
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
    fontSize: theme.fontSizes.sm,
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[1]
        : theme.colors.gray[7],
    padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
    borderRadius: theme.radius.sm,
    fontWeight: 500,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
      color: theme.colorScheme === "dark" ? theme.white : theme.black,

      [`& .${getStylesRef("icon")}`]: {
        color: theme.colorScheme === "dark" ? theme.white : theme.black,
      },
    },
  },
  linkLabel: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
    transition: "all 0.3s",
  },
  linkIcon: {
    [theme.fn.smallerThan("sm")]: {
      margin: "auto",
    },
    transition: "all 0.3s",
    ref: getStylesRef("icon"),
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[2]
        : theme.colors.gray[6],
    marginRight: theme.spacing.sm,
  },

  linkActive: {
    "&, &:hover": {
      backgroundColor: theme.fn.variant({
        variant: "light",
        color: theme.primaryColor,
      }).background,
      color: theme.fn.variant({ variant: "light", color: theme.primaryColor })
        .color,
      [`& .${getStylesRef("icon")}`]: {
        color: theme.fn.variant({ variant: "light", color: theme.primaryColor })
          .color,
      },
    },
  },
}));

const data = [
  { link: "/selected-classes", label: "My Selected Classes", icon: Books },
  { link: "/enrolled-classes", label: "My Enrolled Classes", icon: Notebook },
  { link: "/add-class", label: "Add a Class", icon: Fingerprint },
  { link: "/my-classes", label: "My Classes", icon: Key },
  { link: "/manage-classes", label: "Manage Classes", icon: DatabaseImport },
  { link: "/manage-user", label: "Manage Users", icon: Settings },
];
// const data = [
//   { link: "", label: "Notifications", icon: BellRinging },
//   { link: "", label: "Billing", icon: Receipt2 },
//   { link: "", label: "Security", icon: Fingerprint },
//   { link: "", label: "SSH Keys", icon: Key },
//   { link: "", label: "Databases", icon: DatabaseImport },
//   { link: "", label: "Other Settings", icon: Settings },
// ];

export default function SideBar() {
  const { classes, cx } = useStyles();
  const [active, setActive] = useState("Billing");

  const links = data.map((item) => (
    <Link
      className={cx(classes.link, {
        [classes.linkActive]: item.label === active,
      })}
      to={item.link}
      key={item.label}
      onClick={(event) => {
        // event.preventDefault();
        setActive(item.label);
      }}
    >
      <item.icon className={classes.linkIcon} strokeWidth={1.5} />
      <span className={classes.linkLabel}>{item.label}</span>
    </Link>
  ));

  return (
    <Navbar
      height={"100vh"}
      width={{ sm: 300 }}
      sx={{
        width: "130px",
      }}
      p="md"
      className={classes.sideBar}
    >
      <Navbar.Section grow>
        <Group className={classes.header} position="center">
          <h1>LOGO</h1>
        </Group>
        {links}
      </Navbar.Section>

      <Navbar.Section className={classes.footer}>
        <a
          href="#"
          className={classes.link}
          onClick={(event) => event.preventDefault()}
        >
          <Logout className={classes.linkIcon} strokeWidth={1.5} />
          <span>Logout</span>
        </a>
      </Navbar.Section>
    </Navbar>
  );
}
