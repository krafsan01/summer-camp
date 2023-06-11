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
  Center,
} from "@mantine/core";
import FacebookButton from "../Common/buttons/FacebookButton";
import { Link } from "react-router-dom";
import { useState } from "react";
import { LetterX, Check } from "tabler-icons-react";

export default function SignUp() {
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    console.log(formData)
}


  const checks = requirements.map((requirement, index) => (
    <PasswordRequirement
      key={index}
      label={requirement.label}
      meets={requirement.re.test(formData?.password)}
    />
  ));
  return (
    <Container size={420} my={40}>
      <Title
        align="center"
        sx={(theme) => ({
          fontFamily: `Greycliff CF, ${theme.fontFamily}`,
          fontWeight: 900,
        })}
      >
        Create an account
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
          name="password"
          mt="md"
          onChange={handleChange}
        />
        {formData?.password.length > 0 && (
          <>
            <PasswordRequirement
              label="Less than 6 characters"
              meets={formData?.password.length > 6}
            />
            {checks}
          </>
        )}
        <PasswordInput
          label="Confirm Password"
          placeholder="Your password"
          required
          name="confirmPassword"
          mt="md"
          onChange={handleChange}
        />

        {formData?.confirmPassword.length > 0 && (
          <PasswordRequirement
            label="Password didn't matched"
            meets={formData?.password === formData?.confirmPassword}
          />
        )}

        <TextInput
          label="Photo URL"
          placeholder="http://"
          required
          mt="md"
          name="photoURL"
          onChange={handleChange}
        />
        <TextInput
          label="Phone Number"
          placeholder="+8801"
          type="number"
          required
          name="phoneNumber"
          mt="md"
          onChange={handleChange}
        />

        <Group position="apart" mt="lg">
          <Checkbox label="Remember me" />
        </Group>

        <Button fullWidth mt="xl" onClick={handleSubmit}>
          Sign Up
        </Button>

        <Text color="dimmed" ta="center" size="sm" mt={10}>
          Already have an account ?
          <Link to={"/login"}>
            <Anchor size="sm" component="button" ml={10}>
              Login
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

const requirements = [
  { re: /[A-Z]/, label: "Don't have a capital letter" },
  { re: /[$&+,:;=?@#|'<>.^*()%!-]/, label: "Don't have a special character" },
];
function getStrength(password) {
  let multiplier = password.length > 5 ? 0 : 1;

  requirements.forEach((requirement) => {
    if (!requirement.re.test(password)) {
      multiplier += 1;
    }
  });

  return Math.max(100 - (100 / (requirements.length + 1)) * multiplier, 0);
}

function PasswordRequirement({ meets, label }) {
  return (
    <Text color={meets ? "teal" : "red"} mt={5} size="sm">
      <Center inline>
        {meets ? (
          <Check size="0.9rem" strokeWidth={1.5} />
        ) : (
          <LetterX size="0.9rem" strokeWidth={1.5} />
        )}
        <Box ml={7}>{label}</Box>
      </Center>
    </Text>
  );
}
