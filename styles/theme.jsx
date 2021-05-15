// Coolors pallete
// https://coolors.co/009ccc-0fff95-ed254e-157145-ffc914-f22121

export const currentTheme = 'dark';

export const matrix = {
    dark: {
        primary:194,
        secondary: 154,
        tertiary: 348,
        success: 140,
        warn: 46,
        danger: 0
    }
}

export const defaultTheme = {
    primary: {
        main: `hsl(${matrix[currentTheme].primary}, 100%, 40%)`,
        dark: `hsl(${matrix[currentTheme].primary}, 15%, 28%)`,
        hardDark: `hsl(${matrix[currentTheme].primary}, 15%, 10%)`
    },
    secondary: {
        main: `hsl(${matrix[currentTheme].secondary}, 100%, 50%)`,
        soft: `hsl(${matrix[currentTheme].secondary}, 75%, 50%)`,
        dark: `hsl(${matrix[currentTheme].secondary}, 25%, 15%)`,
        hardDark: `hsl(${matrix[currentTheme].secondary}, 25%, 10%)`
    },
    tertiary: {
        soft: `hsl(${matrix[currentTheme].tertiary}, 75%,  60%)`,
        main: `hsl(${matrix[currentTheme].tertiary}, 100%,  50%)`,
        dark: `hsl(${matrix[currentTheme].tertiary}, 25%, 15%)`,
        hardDark: `hsl(${matrix[currentTheme].tertiary}, 25%, 10%)`
    },
    success: {
        main: `hsl(${matrix[currentTheme].success}, 92%,  47%)`
    },
    warn: {
        main: `hsl(${matrix[currentTheme].warn}, 100%, 50%})`
    },
    danger: {
        main: `hsl(${matrix[currentTheme].danger}, 100%, 62%)`
    },
    text: {
        main: `hsl(${matrix[currentTheme].primary}, 2%, 90%)`,
        soft: `hsl(${matrix[currentTheme].primary}, 2%, 47%)`,
        dark: `hsl(${matrix[currentTheme].primary}, 3%, 3%)`
    }
}