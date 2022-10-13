import { Checkbox, CheckboxGroup, useCheckbox } from '@chakra-ui/react'
import React from 'react'

// function CustomCheckbox(props) {
//     const { state, getCheckboxProps, getInputProps, getLabelProps, htmlProps } =
//     useCheckbox(props)
// }

const FormCheckInput = ({options,value,name,id,isRequired,onChange,isChecked,isCheckedColor,isDisabled,checkedProps,...rest}) => {
  return (
    <CheckboxGroup colorScheme='green' value={value} onChange={onChange} {...checkedProps}>
        {options.map(option =>(
            <>
            <Checkbox 
            value={option}
            name={name}
            id={id}
            isRequired={isRequired} 
            isDisabled={isDisabled}
            isChecked={isChecked}
            colorScheme={isChecked && isCheckedColor}
            {...rest}
            >{option}</Checkbox>
            </>
        ))}
  </CheckboxGroup>
  )
}

export default FormCheckInput