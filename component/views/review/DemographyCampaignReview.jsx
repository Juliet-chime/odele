import FormCustomRadio from '@/component/form/FormCustomRadio'
import FormRadio from '@/component/form/FormRadio'
import FormSelect from '@/component/form/FormSelect'
import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { FaTimes } from 'react-icons/fa'
import CreateCampaignHeader from '../createCampaign/CreateCampaignHeader'

const DemographyCampaignReview = ({listCountries}) => {
    const options = ['Any', 'Man', 'Woman']
    const radioOption = ['All', 'Age Range']
    const optionsDataI =[18,25,30,40,50]
    const optionsDataII =[25,40,30,40,50]

  return (
   <Box>
        <CreateCampaignHeader title={'Demographics'} />
        <Box
        border='2px solid #202020'
        box-shadow='0px 10px 24px rgba(0, 0, 0, 0.18)'
        border-radius='1.125rem'
        p='1.5rem'
        >
<Text>Selected</Text>
<Flex gap='1.5rem' flexWrap={'wrap'} mt='1.5rem' borderBottom= '2px solid #202020' pb={'1rem'}>
{listCountries.length > 0 ? listCountries.map((countries,index) => (
    <Flex
    key={countries.name} 
    cursor={'pointer'} 
    alignItems={'center'} 
    gap={'0.813rem'} 
    px={'1rem'} 
    py={'0.5rem'} 
    border='2px solid #353535' 
    borderRadius={'1.5rem'}>
        <Text>{countries}</Text>
        <FaTimes color='#FF2828' onClick={()=>deleteItem(countries.name)}/>
    </Flex>
)) : null}
</Flex>


<Flex alignItems={'center'} gap='2rem' flexWrap={'wrap'} pt={'1.5rem'}>
  
<Box>
<Text color={'#727272'} fontWeight={500} mb='1rem'>Gender</Text>
<Box
            border={'2px solid #404040'}
            borderRadius='1.5rem'
            >
              <FormCustomRadio
              option={options} 
              value={options[1]} 
            //   setValue={setValue}
              radioStyle={{
                cursor:'pointer',
                px:'5',
                py:'3',
              }}
              checkedStyle={{
                bg: '#7F46F9',
                color: 'white',
                borderRadius:'24px 0px 0px 24px',
                borderColor: '#7F46F9',
              }}/>
            </Box>
</Box>
<Box>
<Text color={'#727272'} fontWeight={500} mb='1rem'>Age</Text>
          <Flex flexWrap={'wrap'} gap={'1rem'}>

          <Box border='2px solid #353535' borderRadius='1.5rem'  px={'1rem'} 
           py={'0.5rem'}>
              <FormRadio value={radioOption[1]} radioOption={radioOption} size='md' colorscheme={'purple'}/>
            </Box>

            <Flex border='red' alignItems={'center'} gap='1rem'>
              <FormSelect optionsData={optionsDataI} formControlStyle={{border:'2px solid #353535', borderRadius:'1.5rem',  padding:'0.5rem 1rem'}} selectStyle={{fontSize:16,fontWeight: 400}}/>
              <FormSelect optionsData={optionsDataII} formControlStyle={{border:'2px solid #353535', borderRadius:'1.5rem',  padding:'0.5rem 1rem'}} selectStyle={{fontSize:16,fontWeight: 400}}/>
            </Flex>

          </Flex>
</Box>
           
</Flex>
        </Box>
   </Box>
  )
}

export default DemographyCampaignReview