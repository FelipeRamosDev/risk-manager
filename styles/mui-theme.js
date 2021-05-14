import { createMuiTheme } from '@material-ui/core/styles';

export const currentTheme = 'dark';

export const matrix = {
    dark: {
        primary:194,
        secondary: 154,
        tertiary: 348,
        success: 151,
        warn: 46,
        danger: 0
    }
}

export const theme = createMuiTheme({
    palette: {
        primary: {
            main: `hsl(${matrix[currentTheme].primary}, 100%, 40%)`,
            dark: `hsl(${matrix[currentTheme].primary}, 25%, 15%)`,
            hardDark: `hsl(${matrix[currentTheme].primary}, 15%, 10%)`,
            contrastText: '#fff',
        },
        secondary: {
            main: `hsl(${matrix[currentTheme].secondary}, 100%, 50%)`,
            dark: `hsl(${matrix[currentTheme].secondary}, 25%, 15%)`,
            hardDark: `hsl(${matrix[currentTheme].secondary}, 25%, 10%)`,
            contrastText: '#fff',
        },
        tertiary: {
            soft: `hsl(${matrix[currentTheme].tertiary}, 75%,  60%)`,
            main: `hsl(${matrix[currentTheme].tertiary}, 100%,  50%)`,
            dark: `hsl(${matrix[currentTheme].tertiary}, 25%, 15%)`,
            hardDark: `hsl(${matrix[currentTheme].tertiary}, 25%, 10%)`,
            contrastText: '#fff',
        },
        success: {
            main: `hsl(${matrix[currentTheme].success}, 69%,  26%)`
        },
        warn: {
            main: `hsl(${matrix[currentTheme].warn}, 100%, 50%})`
        },
        danger: {
            main: `hsl(${matrix[currentTheme].danger}, 100%, 62%)`
        },
        text: {
            main: `hsl(${matrix[currentTheme].primary}, 100%, 100%)`,
            dark: `hsl(${matrix[currentTheme].primary}, 3%, 3%)`
        }
    }
});