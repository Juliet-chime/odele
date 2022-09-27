import { Button } from '@chakra-ui/react'
import React from 'react'

const CustomButton = ({
  children,
  text,
  color,
  padding,
  bg,
  border,
  fontSize,
  width,
  leftIcon,
  rightIcon,
  disabled,
  isLoading,
  loadingText,
  spinner,
  onClick,
...props }) => {
  return (
    <Button
      onClick={onClick}
      fontSize={fontSize}
      display={'flex'}
      disabled={disabled}
      leftIcon={leftIcon}
      rightIcon={rightIcon}
      isLoading={isLoading}
      loadingText={loadingText}
      spinner={spinner}
      bg={bg || '#202020'}
      color={color}
      w={width || '100%'}
      h={'3rem'}
      cursor={'pointer'}
      border={border || 'none'}
      borderRadius={'2.375rem'}
      p={padding || '0.5rem'}
      transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
      _hover={{ bg: bg || 'none' }}
      {...props}
    >
      {text} {children}
    </Button>
  )
}

export default CustomButton