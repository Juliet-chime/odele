import { FormControl, FormLabel, Switch } from '@chakra-ui/react'
import React from 'react'

const FormSwitch = ({
  label,
  id,
  name,
  size,
  isChecked,
  isDisabled,
  onChange,
  value,
  isReadOnly,
  isInvalid,
  isRequired,
  isCheckedColor,
  bg
}) => {
  return (
    <FormControl display='flex' flex={1} justifyContent={'flex-end'}>
  <FormLabel htmlFor='email-alerts' mb='0'>
    {label && label}
  </FormLabel>
  <Switch 
  colorScheme={isChecked ? isCheckedColor:bg}
  sx={{ 'span.chakra-switch__track:not([data-checked])': { backgroundColor: bg,color:'red' } }}
  id={id}
  name={name}
  size={size ||'lg'}
  isChecked={isChecked}
  value={value}
  onChange={onChange}
  isDisabled={isDisabled}
  isInvalid={isInvalid}
  isReadOnly={isReadOnly}
  isRequired={isRequired}
   />
</FormControl>
  )
}

export default FormSwitch