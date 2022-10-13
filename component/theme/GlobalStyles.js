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

          .scheduleDateInput {
            background: #0B0B0B;
            border: 1px solid #353535;
            border-radius: 2.375rem;
            padding: 2rem;
            width: 100%;
            height:3.5rem; 
          }

          ::placeholder {
            font-size: 14px;
            color: #6E7191;
        }

        .css-stz3g1[aria-invalid=true], .css-stz3g1[data-invalid] {
          border-color: none !important;
          box-shadow: none !important;
      }

          // .scheduleDateInput &:focus{
          //   border:'1px solid #353535';
          // }

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