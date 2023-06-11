import {
  Box,
  Header as HeaderCom,
  rem,
  Group,
  ActionIcon,
  Avatar,
  useMantineColorScheme,
} from "@mantine/core";
import { Settings, Logout, Moon, SunLow } from "tabler-icons-react";

const Navbar = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <HeaderCom height={rem(70)} px={30}>
      <Group spacing={5} h={"100%"} position="right" noWrap>
        <Avatar
          src="https://avatars.githubusercontent.com/u/10353856?s=460&u=88394dfd67727327c1f7670a1764dc38a8a24831&v=4"
          alt="it's me"
          size="1.7rem"
        />
        <ActionIcon size="lg" onClick={toggleColorScheme}>
          {colorScheme === "dark" ? (
            <SunLow size="1.7rem" strokeWidth={1.5} />
          ) : (
            <Moon size="1.7rem" strokeWidth={1.5} />
          )}
        </ActionIcon>
        <ActionIcon size="lg">
          <Settings size="1.7rem" strokeWidth={1.5} />
        </ActionIcon>
        <ActionIcon size="lg">
          <Logout size="1.7rem" strokeWidth={1.5} />
        </ActionIcon>
      </Group>
    </HeaderCom>
  );
};

export default Navbar;
