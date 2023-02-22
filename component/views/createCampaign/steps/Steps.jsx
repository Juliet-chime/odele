import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'

const Steps = ({ item, index, currentStep }) => {
    return (

        <>
            {item?.map((items, index) => (
                <>
                    <Flex
                        alignItems={'center'}
                        mb='3rem'
                        gap={"0.5rem"}
                        
                    >
                        <Box>
                        <Flex
                            alignItems={'center'}
                            justifyContent={'center'}
                            w={'1.25rem'} 
                            h={'1.25rem'}
                            borderRadius={'full'}
                            
                            border={currentStep === index || index < currentStep ? '1px solid #7F46F9' : '1px solid #404040'}
                            _after={index < item.length - 1 ? {
                                content: '""',
                                width: "0.065rem",
                                height: "1.875rem",
                                position: "absolute",
                                marginTop: "5rem",
                                backgroundColor: `${currentStep === index || index < currentStep ? '#7F46F9' : '#404040'}`,

                            } : ''}
                        >
                            <Box
                                w={'0.625rem'}
                                h={'0.625rem'}
                                borderRadius={'full'}
                                bg={currentStep === index || index < currentStep ? '#7F46F9' : '#404040'}
                            >

                            </Box>
                        </Flex>
                        </Box>
                        <Text
                            fontWeight={400}
                            fontSize={'1rem'}
                             w={"full"}
                            px={'1.5rem'}
                            py={'0.6rem'}
                            borderRadius='1.5rem'
                            border={'2px solid rgba(19, 19, 19, 0.2)'}
                            background={currentStep === index || index < currentStep ? 'rgba(19, 19, 19, 0.2)' : ''}
                            color={currentStep === index || index < currentStep ? '#fff' : '#404040'}>
                            {items.name}
                        </Text>
                    </Flex>
                </>
            ))}
        </>

    )
}

export default Steps



