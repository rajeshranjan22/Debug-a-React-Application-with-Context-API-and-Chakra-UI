import { Box, Flex, Grid, Button, useColorModeValue } from '@chakra-ui/react';
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { ThemeContext } from '../contexts/ThemeContext';

const AppLayout = () => {
    const { isLoggedIn, toggleAuth } = useContext(AuthContext);
    const { theme, toggleTheme } = useContext(ThemeContext);

    const cardBg = useColorModeValue('gray.100', 'gray.700');
    const footerBg = useColorModeValue('gray.200', 'gray.800');
    const navBg = useColorModeValue('gray.100', 'gray.900');

    return (
        <>
            {/* Navbar */}
            <Flex as="nav" p="4" bg={navBg} justify="space-between" align="center">
                <Button onClick={toggleAuth}>
                    {isLoggedIn ? 'Log Out' : 'Log In'}
                </Button>
                <Button onClick={toggleTheme}>
                    Toggle to {theme === 'light' ? 'Dark' : 'Light'} Theme
                </Button>
            </Flex>

            {/* Main Content */}
            <Grid
                templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(3, 1fr)']}
                gap="4"
                p="4"
            >
                {['Card 1', 'Card 2', 'Card 3', 'Card 4', 'Card 5'].map((card) => (
                    <Box key={card} p="6" shadow="md" bg={cardBg} rounded="md">
                        {card}
                    </Box>
                ))}
            </Grid>

            {/* Footer */}
            <Box as="footer" p="4" bg={footerBg} textAlign="center">
                Footer Content
            </Box>
        </>
    );
};

export default AppLayout;
