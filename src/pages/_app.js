// Contexts
import CalcDataProvider from '@/controllers/contexts/calc-data';
import ConfigDataProvider from '@/controllers/contexts/config-data';
import ResultProvider from '@/controllers/contexts/result-data';
import { ThemeProvider } from '@material-ui/styles';
import { theme } from 'styles/mui-theme';

// Styles
import '../../styles/globals.css'

function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <CalcDataProvider>
        <ConfigDataProvider>
          <ResultProvider>

            <Component {...pageProps} />
            
          </ResultProvider>
        </ConfigDataProvider>
      </CalcDataProvider>
    </ThemeProvider>
  )
}

export default App
