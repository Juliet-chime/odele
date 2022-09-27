import '../public/fonts/fonts.css'
import GlobalStyle from '../component/theme/GlobalStyles'
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from "@chakra-ui/react"
import { theme } from '@/component/theme'
import DashboardLayout from '@/component/dashboardLayout'
import { AppContextProvider } from 'context'
//import '@/component/table/index.css'


function MyApp({ Component, pageProps }) {

  return <ChakraProvider theme={theme}>
          <GlobalStyle/>
          <AppContextProvider>
          <DashboardLayout>
          <Component {...pageProps} />
          </DashboardLayout>
          </AppContextProvider>
          </ChakraProvider>
 
}

export default MyApp
