import { Box, Flex, Radio, RadioGroup, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import ChakraNextImage from '../chakraNextImage/ChakaraNextImage'

const FormRadio = ({showText,flexWrapper,gap,alignItems,justifyContent,label,showImg,fontSize,radioWrapperStyle,value,onChange,radioOption, isChecked,id,isDisabled,name,isRequired,size,colorscheme,radioGroupStyle,radioStyle}) => {
    return (
      <RadioGroup onChange={onChange} value={value} name={name} {...radioGroupStyle}>
        <Flex flexWrap={'wrap'} gap={gap} alignItems={alignItems} justifyContent={justifyContent}>
            {radioOption.map((option,index) => (
              <Box key={index} {...radioWrapperStyle}>
                <Flex alignItems='center' {...flexWrapper}>
                {showText && <Text>{option}</Text>}
                <Box {...radioStyle}>
                <Radio 
                id={id}
                fontSize={fontSize || '1rem'}
                colorScheme={colorscheme}
                size={size}
                isRequired={isRequired}
                isDisabled={isDisabled}
                isChecked={isChecked}
                value={option}
                >
                    {label || option}
                </Radio>
                </Box>
                </Flex>
                {showImg && <ChakraNextImage src={showImg}/>}
                </Box>
            ))}
        </Flex>
      </RadioGroup>
    )
}

export default FormRadio