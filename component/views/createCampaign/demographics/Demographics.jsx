import CustomButton from '@/component/button/CustomButton'
import { Box, Flex, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import CreateCampaignHeader from '../CreateCampaignHeader'
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import { countries } from '@/component/data';
import { FaTimes } from 'react-icons/fa';
import FormCustomRadio from '@/component/form/FormCustomRadio';
import FormRadio from '@/component/form/FormRadio';
import FormSelect from '@/component/form/FormSelect';

const Dermographics = ({ next, previous }) => {
    const [listCountries,setListCountries] = useState([])

    const options = ['Any', 'Man', 'Woman']
    const optionsDataI =[18,25,30,40,50]
    const optionsDataII =[25,40,30,40,50]

    const radioOption = ['All', 'Age Range']

    const [value, setValue] = useState(options[0])
    const [radioValue, setradioValue] = useState('All')
    console.log(value,'ff')

    const handleOnSearch = (string, results) => {
        console.log(string, results);
      };
    
      const handleOnHover = (result) => {
        console.log(result);
      };
    
      const handleOnSelect = (item) => {
        console.log(item,'itrmmm');
        setListCountries([...listCountries,item])
      };

      console.log(listCountries,'conu')
    
      const handleOnFocus = () => {
        console.log("Focused");
      };
    
      const handleOnClear = () => {
        console.log("Cleared");
      };

      const deleteItem = (name) => {
        const filterData = listCountries.filter((item, index) => item.name !== name)
        setListCountries(filterData)
      }

    return (
        <Box>
            <CreateCampaignHeader title={'Dermographics'} />

            <Box
                mt={'1rem'}
                p={{base:'1rem',md:'1.6rem'}}
                boxShadow='0px 10px 24px rgba(0, 0, 0, 0.18)'
                border='2px solid #202020'
                borderRadius={'1.125rem'}
            >
                <Box borderBottom={'2px solid #353535'} pb={'1.938rem'}>
               <ReactSearchAutocomplete
            items={countries}
            onSearch={handleOnSearch}
            onHover={handleOnHover}
            onSelect={handleOnSelect}
            onFocus={handleOnFocus}
            onClear={handleOnClear}
            placeholder={'Search location and select'}
            styling={{ zIndex: 4,backgroundColor:'#0B0B0B',border: "1px solid #353535", color: "#fff",  hoverBackgroundColor: "#333", }} // To display it on top of the search box below
            autoFocus
          />

{listCountries.length ?<Box>
<Text mt={'0.5rem'} color={'#7F46F9'} fontWeight={400}>Selected</Text>
            <Flex mt={'1rem'} gap={'1rem'} flexWrap={'wrap'}>
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
        <Text>{countries.name}</Text>
        <FaTimes color='#FF2828' onClick={()=>deleteItem(countries.name)}/>
    </Flex>
)) : null}
                </Flex>
                </Box> : null}
            </Box>
<Flex alignItems={'center'} gap='2rem' flexWrap={'wrap'} pt={'1.5rem'}>
  
<Box>
<Text color={'#727272'} fontWeight={500} mb='1rem'>Gender</Text>
<Box
            border={'2px solid #404040'}
            borderRadius='1.5rem'
            >
              <FormCustomRadio
              option={options} 
              value={value} 
              setValue={setValue}
              radioStyle={{
                cursor:'pointer',
                px:'5',
                py:'3',
               // borderRight:'1px solid #404040'
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
              <FormRadio value={radioValue} onChange={setradioValue} radioOption={radioOption} size='md' colorscheme={'purple'}/>
            </Box>

            <Flex border='red' alignItems={'center'} gap='1rem'>
              <FormSelect optionsData={optionsDataI} formControlStyle={{border:'2px solid #353535', borderRadius:'1.5rem',  padding:'0.5rem 1rem'}} selectStyle={{fontSize:16,fontWeight: 400}}/>
              <FormSelect optionsData={optionsDataII} formControlStyle={{border:'2px solid #353535', borderRadius:'1.5rem',  padding:'0.5rem 1rem'}} selectStyle={{fontSize:16,fontWeight: 400}}/>
            </Flex>

          </Flex>
</Box>
           
</Flex>


            </Box>
            <Flex justifyContent={'center'} gap={'1rem'} mt={'2rem'}>
            <CustomButton text={'Discard'} bg={'#404040'} width={{ base: "100%", md: '10rem' }} fontSize={{base:'0.5rem',md:'1rem'}} fontWeight={'500'} onClick={previous} />
            <CustomButton text={'Save as Draft'} bg={'#151515'} border={'2px solid #7F46F9'} width={{ base: "100%", md: '10rem' }} fontSize={{base:'0.5rem',md:'1rem'}} fontWeight={'500'} onClick={previous} />
            <CustomButton text={'Previous'} bg={'#151515'} border={'2px solid #7F46F9'} width={{ base: "100%", md: '10rem' }} fontSize={{base:'0.5rem',md:'1rem'}} fontWeight={'500'} onClick={previous} />
            <CustomButton text={'Next'} bg={'#7F46F9'} border={'2px solid #fff'} width={{ base: "100%", md: '10rem' }} fontSize={{base:'0.5rem',md:'1rem'}} fontWeight={'500'} onClick={next} />
            </Flex>
        </Box>
    )
}

export default Dermographics