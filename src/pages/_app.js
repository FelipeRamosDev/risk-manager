// Contexts
import CalcDataProvider from '@/controllers/contexts/calc-data';
import ConfigDataProvider from '@/controllers/contexts/config-data';
import ResultProvider from '@/controllers/contexts/result-data';

// Styles
import '../../styles/globals.css'

function App({ Component, pageProps }) {
  return (
    <CalcDataProvider>
      <ConfigDataProvider>
        <ResultProvider>

          <Component {...pageProps} />
          
        </ResultProvider>
      </ConfigDataProvider>
    </CalcDataProvider>
  )
}

export default App
