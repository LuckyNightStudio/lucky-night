import {createTheme} from "@mui/material/styles";

declare module '@mui/material/styles' {
    interface Palette {
        red: Palette['primary'];
        yellow: Palette['primary'];
        purple: Palette['primary'];
        green: Palette['primary'];
        greenLight: Palette['primary'];
        yellowDarker: Palette['primary'];
        blue: Palette['primary'];
    }
    interface PaletteOptions {
        red: PaletteOptions['primary'];
        yellow: PaletteOptions['primary'];
        purple: PaletteOptions['primary'];
        green: PaletteOptions['primary'];
        greenLight: PaletteOptions['primary'];
        yellowDarker: PaletteOptions['primary'];
        blue: PaletteOptions['primary'];
    }
}

export const theme = createTheme({
    palette: {
        primary: {
            main: '#27bb8e',
            contrastText: '#ffff'
        },
        secondary: {
            main: '#f69fb9'
        },
        red: {
            main: '#E71B09'
        },
        yellow: {
            main: '#F6EC6E'
        },
        purple: {
            main: '#D4C0F2'
        },
        green: {
            main: '#27BB8E',
            light: '#9ED8BF',
            dark: '#1B8E6B',
            contrastText: '#ffff'
        },
        greenLight: {
            main: '#9ED8BF',
            light:'#D9F0E6',
        },
        yellowDarker: {
            main: '#FECD2F'
        },
        blue: {
            main: '#74A5D8',
            contrastText: '#ffff'
        }
    },
    typography: {
        h1: {
            fontFamily: 'Decoy',
            fontWeight: 'normal',
        },
        h2: {
            fontFamily: 'Decoy',
            fontWeight: 'normal',
        },
        h3: {
            fontFamily: 'Decoy',
            fontWeight: 'normal',
        },
        h4: {
            fontFamily: 'Decoy',
            fontWeight: 'normal',
        },
        h5: {
            fontFamily: 'Decoy',
            fontWeight: '300',
        },
        h6: {
            fontFamily: 'Decoy',
            fontWeight: 'normal',
        },
        button: {
            fontFamily: 'roc-grotesk,sans-serif',
            color: '#fff'
        },
        fontFamily: 'roc-grotesk,sans-serif',
    },
});
