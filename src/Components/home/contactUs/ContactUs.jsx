import {
  Container,
  TextInput,
  Textarea,
  SimpleGrid,
  Group,
  Title,
  Text,
  Button,
  Grid,
  Col,
} from "@mantine/core";
import { useForm } from "@mantine/form";

export default function ContactUs() {
  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    validate: {
      name: (value) => value.trim().length < 2,
      email: (value) => !/^\S+@\S+$/.test(value),
      subject: (value) => value.trim().length === 0,
    },
  });

  return (
    <Container size={"xl"} py={50}>
      <Grid id="faq-grid" gutter={50} justify="center">
        <Col span={12} md={6} lg={10}>
          {" "}
          <form onSubmit={form.onSubmit(() => {})}>
            <Title size="h1" align="center">
              Contact Us
            </Title>

            <Text size="sm" color="dimmed" align="center" mb={60}>
              With Fjord Tours you can explore more of the magical fjord
              landscapes with tours and activities on and around the fjords of
              Norway
            </Text>

            <SimpleGrid
              cols={2}
              mt="xl"
              breakpoints={[{ maxWidth: "sm", cols: 1 }]}
            >
              <TextInput
                label="Name"
                placeholder="Your name"
                name="name"
                variant="filled"
                {...form.getInputProps("name")}
              />
              <TextInput
                label="Email"
                placeholder="Your email"
                name="email"
                variant="filled"
                {...form.getInputProps("email")}
              />
            </SimpleGrid>

            <TextInput
              label="Subject"
              placeholder="Subject"
              mt="md"
              name="subject"
              variant="filled"
              {...form.getInputProps("subject")}
            />
            <Textarea
              mt="md"
              label="Message"
              placeholder="Your message"
              maxRows={10}
              minRows={5}
              autosize
              name="message"
              variant="filled"
              {...form.getInputProps("message")}
            />

            <Group position="center" mt="xl">
              <Button type="submit" color="dark" size="md">
                Send message
              </Button>
            </Group>
          </form>
        </Col>
      </Grid>
    </Container>
  );
}
