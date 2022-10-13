import { Box, Flex, HStack, useRadio, useRadioGroup } from "@chakra-ui/react"
import { useState } from "react"


const RadioCard = (props) => {
    const { getInputProps, getCheckboxProps } = useRadio(props)
   // const {radioStyle, checkedStyle, focusStyle} = props

    // const {rest} = props
  
    const input = getInputProps()
    const checkbox = getCheckboxProps()
  
    return (
      <Box as='label'>
        <input {...input}/>
        <Box
          {...checkbox}
          {...props.radioStyle}
          _checked={props.checkedStyle}
          _focus={{
            boxShadow: 'none',
          }}>
          {props.children}
        </Box>
      </Box>
    )
}

const FormCustomRadio = ({option,value,setValue,radioStyle,checkedStyle, firstChildStyle,...rest}) => {
  
    const { getRootProps, getRadioProps } = useRadioGroup({
      name: 'framework',
     defaultValue: option[0],
      onChange: setValue,
    })
  
    const group = getRootProps()
  
    return (
      <Flex 
      {...group}
      >
        {option.map((value,index) => {
          const radio = getRadioProps({ value })
          return (
            <RadioCard 
            key={value} 
            {...radio} 
            index={index}
            radioStyle={radioStyle} 
            checkedStyle={checkedStyle} 
            >
              {value}
            </RadioCard>
          )
        })}
      </Flex>
    )
}
// function RadioCard(props) {
//     const { getInputProps, getCheckboxProps } = useRadio(props)
  
//     const input = getInputProps()
//     const checkbox = getCheckboxProps()
  
//     return (
//       <Box as='label'>
//         <input {...input} />
//         <Box
//           {...checkbox}
//           cursor='pointer'
//           borderWidth='1px'
//           borderRadius='md'
//           boxShadow='md'
//           _checked={{
//             bg: 'teal.600',
//             color: 'white',
//             borderColor: 'teal.600',
//           }}
//           _focus={{
//             boxShadow: 'outline',
//           }}
//           px={5}
//           py={3}
//         >
//           {props.children}
//         </Box>
//       </Box>
//     )
//   }
  
  // Step 2: Use the `useRadioGroup` hook to control a group of custom radios.


  //   function Example() {
//     const options = ['react', 'vue', 'svelte']
  
//     const { getRootProps, getRadioProps } = useRadioGroup({
//       name: 'framework',
//       defaultValue: 'react',
//       onChange: console.log,
//     })
  
//     const group = getRootProps()
  
//     return (
//       <HStack {...group}>
//         {options.map((value) => {
//           const radio = getRadioProps({ value })
//           return (
//             <RadioCard key={value} {...radio}>
//               {value}
//             </RadioCard>
//           )
//         })}
//       </HStack>
//     )
//   }

export default FormCustomRadio