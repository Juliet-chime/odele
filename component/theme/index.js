import { extendTheme } from '@chakra-ui/react'

const breakpoints = {
  sm: '40em',
  md: '52em',
  lg: '69em',
  xl: '96em',
  '2xl': '134em',
}

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
} 

export const theme = extendTheme({
  // config,
  colors: {
    brand: {
      bgpurple: '#7F46F9',
      bgdark: '#1E1E1E',
      boldText: '#0B0B0B',
      text:'#040404',
      grayText: '#727272',
    },
  },

  fonts: {
    heading: `'Syne', sans-serif`,
    body: `'Euclid Circular B', sans-serif`,
  },

  fontSizes: {
    xs: '1rem',
    sm: '1.125rem',
    md: '1.5rem',
    lg: '2rem',
    xl: '2.375rem',
    xxl: '3rem',
  },
  //shadows: { outline: '0 0 0 1px red.100' },
  components: {
    Input: {
      defaultProps: {
        focusBorderColor: 'none',
      }
    },
    Textarea: {
      defaultProps: {
        focusBorderColor: 'none',
      }
    }

  },

  styles: {
    global: {
      html: {
         scrollBehavior: 'smooth',
      },
      body: {
        bg: 'white',
        color: 'white',
      },
      a: {
        color: 'black',
        _hover: {
          textDecoration: 'none',
        },
      },
    },
  },
})