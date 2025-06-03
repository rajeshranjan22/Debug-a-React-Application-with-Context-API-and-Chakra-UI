import { ChakraProvider, ColorModeScript, extendTheme } from '@chakra-ui/react';
import { AuthContextProvider } from './contexts/AuthContext';
import { ThemeContextProvider } from './contexts/ThemeContext';
import AppLayout from './components/AppLayout';

const theme = extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <AuthContextProvider>
        <ThemeContextProvider>
          <AppLayout />
        </ThemeContextProvider>
      </AuthContextProvider>
    </ChakraProvider>
  );
}

export default App;
