import { Box, chakra, Flex, Text, useCheckbox } from "@chakra-ui/react"


const FormCustomCheckBox = ({
    elementStyle,
    labelStyle,
    onChangeInputProps,
    value,
    children
}) => {
    const CustomCheckbox = (props) => { 
      const { state, getCheckboxProps, getInputProps, getLabelProps, htmlProps } =
        useCheckbox(props)
  
      return (
        <chakra.label
        {...labelStyle}
        {...htmlProps}
        >
          <input {...getInputProps()} hidden />
          <Flex w='100%' color="gray.700" {...getLabelProps()}>
          {children}
             </Flex>
          {/* <Flex {...getCheckboxProps()} w='100%'> */}
          {/* <Box {...elementStyle} {...getLabelProps()}> */}
          {/* </Box> */}
          {/* </Flex> */}
        </chakra.label>
      )
    }

  
    return (
        
      <Box>
        <CustomCheckbox value={value}  onChange={onChangeInputProps}/>
      </Box>
    )
  }

  export default FormCustomCheckBox