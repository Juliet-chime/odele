import { Input } from '@chakra-ui/input'
import { Flex, FormControl, FormErrorMessage, FormHelperText, FormLabel, Textarea, TextareaProps } from '@chakra-ui/react'


export const FormTextarea = ({value, onChange, id, label,helperText,errorText, isDisabled, outerProps, placeholder, labelProps, name, ...props }) => {

    const isError = value === ''

    return (
        <FormControl {...outerProps} isInvalid={isError}>
            {label && (
              <FormLabel fontSize="sm" {...labelProps}>
                {label}
              </FormLabel>
            )}
          <Textarea
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          id={id}
          name={name}
          h={'auto'}
          fontSize={'1rem'}
          w="full"
          rounded="2.375rem"
          resize={'none'}
          _placeholder={{ fontSize: 'xs',color:'#636363' }}
          _focus={{ border: 'none' }}
          isDisabled={isDisabled}
            {...props}
          />
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


export default FormTextarea