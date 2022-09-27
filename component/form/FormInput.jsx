import { FormControl, FormHelperText, FormLabel } from '@chakra-ui/form-control'
import { Input, InputGroup, InputRightElement } from '@chakra-ui/input'
import { FormErrorMessage, InputLeftElement } from '@chakra-ui/react'


export const FormInput = ({value,onChange, id,name, label,type, placeholder, helperText, errorText, outerProps, leftIcon, rightIcon,iconColor, labelProps, isDisabled, leftElement, rightElement, ...props }) => {

    const isError = value === ''


    return (
        <FormControl {...outerProps} isInvalid={isError}>
          {label && (
            <FormLabel {...labelProps}>
              {label}
            </FormLabel>
          )}
          <InputGroup position={'relative'}>
            {leftElement && (
              <InputLeftElement border='solid red'>
                   {leftIcon}
              </InputLeftElement>
            )}
            <Input
             value={value}
             type={type}
             onChange={onChange}
             id={id}
             name={name}
             placeholder={placeholder}
             w="full"
             rounded="2.375rem"
             height={12}
              _placeholder={{ fontSize: 'xs',color:'#636363' }}
            //   _hover={{ borderColor: 'p' }}
              _focus={{border:"none" }}
              isDisabled={isDisabled}
              {...props}
            />
            {rightElement && (
              <InputRightElement position={'absolute'} top={'5px'} right={'2px'}>
               {rightIcon}
              </InputRightElement>
            )}
          </InputGroup>
          {!isError ? (
        <FormHelperText>
               {helperText}
        </FormHelperText>
      ) : (
        <FormErrorMessage>
            {errorText}
        </FormErrorMessage>
      )}
        </FormControl>
    )
}

export default FormInput