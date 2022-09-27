import CustomButton from '@/component/button/CustomButton'
import FormSelect from '@/component/form/FormSelect'
import { Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { BsChevronDown, BsCloudArrowDown } from 'react-icons/bs'
import { FaPlus } from 'react-icons/fa'

const HomeNav = ({options}) => {
  return (
    
    <Flex mt={{base:'2rem',md:0}} alignItems={{ base: 'none', md: 'center' }} justifyContent={{ base: 'none', md: 'flex-end' }} gap='1rem' direction={{ base: 'column', md: 'row' }}>

    <Flex px='1rem' bg='#202020' gap='0.5rem' borderRadius={'3rem'} alignItems={'center'}>
        <Text color={'#A3A3A3'} fontWeight={500}>Filter</Text>

        <CustomButton
            text={<>
                <FormSelect
                    optionsData={options}
                    icon={<BsChevronDown />}
                    selectStyle={{
                        fontSize: { base: '1rem', md: '1rem' },
                        position: 'relative',
                        left: '0.4rem',
                    }}
                />
            </>}
            fontSize={'1rem'}
            width={{ base: 'full', md: '9rem' }}
            border={'2px solid #727272'}
        />

    </Flex>
    <Flex gap='1rem' >
        <CustomButton
            text={'Download report'}
            fontSize={{ base: '0.8rem', md: '1rem' }}
            leftIcon={<BsCloudArrowDown fontSize={'1rem'} />}
            width={{ base: '10rem', md: '15rem' }}
            border={'2px solid #5EB1FF'} />

        <CustomButton
            text={'Create campaign'}
            fontSize={{ base: '0.8rem', md: '1rem' }}
            leftIcon={<FaPlus fontSize={'1rem'} />}
            width={{ base: '10rem', md: '15rem' }}
            border={'2px solid #7F46F9'} />
    </Flex>
</Flex>
  )
}

export default HomeNav