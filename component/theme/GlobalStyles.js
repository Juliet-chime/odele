import { Global } from '@emotion/react'


const GlobalStyle = () => (
    <Global
      styles={`
          /* -----------Make clicks pass-through----------- */
          html,body {
            -webkit-overflow-scrolling: touch;
            scroll-behavior: smooth;
            font-variant-ligatures: common-ligatures contextual discretionary-ligatures;
            font-feature-settings: 'kern', 'liga', 'clig', 'calt', 'dlig';
            font-kerning: normal;
            padding:0;
            margin:0;
            color:#040404;
            // font-family: 'Euclid Circular B', sans-serif;
                                                
          }
          a {
            text-decoration: none;
          }

          // table {
          //   /* font-family: Arial, Helvetica, sans-serif; */
          //   border-collapse: collapse;
          //   width: 100%;
          // }
          
          // table td, table th {
          //   border: 1px solid #ddd;
          //   padding: 8px;
          // }
          
          // table tr:nth-child(even){background-color: blue;}
          
          // table tr:hover {background-color: #ddd;}
          
          // table th {
          //   padding-top: 12px;
          //   padding-bottom: 12px;
          //   text-align: center;
          //   background-color: #04AA6D;
          //   color: white;
          // }
         
        `}
    />
  )
  
  export default GlobalStyle


  // "^12.20.0 || ^14.18.0 || >=16.0.0". Got "14.17.6"