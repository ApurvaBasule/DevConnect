import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'
import { extendTheme } from '@chakra-ui/react'
import { BrowserRouter} from 'react-router-dom'

const style = {
  global:(props)=>({
     body :{
      color:mode('grey.800','whiteAlpha.900' )(props),
      bg:mode('grey.100','#101010')(props),
     }
})
  };

const config ={
  initialColorMode :'dark',
  useSystemColorMode : true
}

const color = {
  gray:{
    light:"#616161",
    dark:"1e1e1e"
  }
}
const theme=extendTheme({style,config,color});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <ChakraProvider theme={theme}>
       <App/>
    </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
