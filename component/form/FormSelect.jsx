import { FormControl, FormLabel, Select } from '@chakra-ui/react'
import React from 'react'

const FormSelect = ({icon,label,placeholder,optionsData,onChange,value,selectStyle}) => {
  return (
    <FormControl>
    <FormLabel>{label}</FormLabel>
    <Select
    cursor='pointer'
    icon={icon} 
    variant='unstyled' 
    placeholder={placeholder} 
    value={value} 
    onChange={onChange} 
    {...selectStyle}>
        {optionsData.map(options =>(
            <>
                  <option value={options}>{options}</option>
            </>
        ))}
    </Select>
  </FormControl>
  )
}

export default FormSelect