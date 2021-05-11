import { ThemeProvider } from 'styled-components/';

// Styles
import '../../styles/globals.css'
import { defaultTheme } from '../../styles/theme';

function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
