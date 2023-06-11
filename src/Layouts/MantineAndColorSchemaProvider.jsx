import { MantineProvider, ColorSchemeProvider } from "@mantine/core";
import { useLocalStorage } from "@mantine/hooks";

const MantineAndColorSchemaProvider = ({ children }) => {
  const [colorScheme, setColorScheme] = useLocalStorage({
    key: "COLOR_MODE",
    defaultValue: "light",
    getInitialValueInEffect: false,
  });

  const toggleColorScheme = (value) => {
    setColorScheme(colorScheme === "dark" ? "light" : "dark");
  };

  return (
    <MantineProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>
      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      >
        {children}
      </ColorSchemeProvider>
    </MantineProvider>
  );
};

export default MantineAndColorSchemaProvider;
