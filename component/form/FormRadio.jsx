import { Flex, Radio, RadioGroup, Stack, Text } from '@chakra-ui/react'
import React from 'react'

const FormRadio = ({showText,value,onChange,radioOption, isChecked,id,isDisabled,name,isRequired,size,colorscheme,radioGroupStyle,radioStyle}) => {
    return (
      <RadioGroup onChange={onChange} value={value} name={name} {...radioGroupStyle}>
        <Stack direction='row'>
            {radioOption.map((option,index) => (
                <Flex key={index}>
                {showText && <Text>{option}</Text>}
                <Radio 
                id={id}
                fontSize={'1rem'}
                colorScheme={colorscheme}
                size={size}
                isRequired={isRequired}
                isDisabled={isDisabled}
                isChecked={isChecked}
                value={option}
                {...radioStyle}
                >
                    {option}
                </Radio>
                </Flex>
            ))}
        </Stack>
      </RadioGroup>
    )
}

export default FormRadio