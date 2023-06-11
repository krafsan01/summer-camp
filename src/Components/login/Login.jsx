import {
  TextInput,
  PasswordInput,
  Checkbox,
  Anchor,
  Paper,
  Title,
  Text,
  Container,
  Group,
  Button,
  Divider,
  Box,
} from "@mantine/core";
import FacebookButton from "../Common/buttons/FacebookButton";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Login() {
  const [formData, setFormData] = useState({});
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    console.log(formData);
  };

  return (
    <Container size={420} my={40}>
      <Title
        align="center"
        sx={(theme) => ({
          fontFamily: `Greycliff CF, ${theme.fontFamily}`,
          fontWeight: 900,
        })}
      >
        Welcome back!
      </Title>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <TextInput
          label="Email"
          placeholder="you@gmail.com"
          required
          name="email"
          onChange={handleChange}
        />
        <PasswordInput
          label="Password"
          placeholder="Your password"
          required
          mt="md"
          name="password"
          onChange={handleChange}
        />
        <Group position="apart" mt="lg">
          <Checkbox label="Remember me" />
        </Group>

        <Button fullWidth mt="xl" onClick={handleSubmit}>
          Login
        </Button>

        <Text color="dimmed" ta="center" size="sm" mt={10}>
          Do not have an account yet?
          <Link to={"/signup"}>
            <Anchor size="sm" component="button" ml={10}>
              Create account
            </Anchor>
          </Link>
        </Text>

        <Divider
          label="Or continue with Facebook"
          labelPosition="center"
          my="lg"
        />
        <Group position="center" mt={10}>
          <FacebookButton radius="xl">Facebook</FacebookButton>
        </Group>
      </Paper>
    </Container>
  );
}
