import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#E50914', // Netflix red
            light: '#FF3D3D',
            dark: '#B20710',
        },
        secondary: {
            main: '#FFFFFF',
            light: '#E5E5E5',
            dark: '#B3B3B3',
        },
        background: {
            default: '#141414',
            paper: '#181818',
        },
        text: {
            primary: '#FFFFFF',
            secondary: '#B3B3B3',
        },
    },
    typography: {
        fontFamily: '"Netflix Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
        h1: {
            fontSize: '3.5rem',
            fontWeight: 700,
        },
        h2: {
            fontSize: '2.5rem',
            fontWeight: 700,
        },
        h3: {
            fontSize: '1.8rem',
            fontWeight: 600,
        },
        body1: {
            fontSize: '1rem',
            lineHeight: 1.5,
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 4,
                    textTransform: 'none',
                    fontWeight: 600,
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: 8,
                    transition: 'transform 0.3s ease-in-out',
                    '&:hover': {
                        transform: 'scale(1.05)',
                        zIndex: 1,
                    },
                },
            },
        },
    },
}); 