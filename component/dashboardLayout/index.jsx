import { Box, Flex, useDisclosure } from '@chakra-ui/react'
import { useAppContext } from 'context';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react'
import { FaBars } from 'react-icons/fa';
import CustomModal from '../customModal/CustomModal';
import About from '../views/about/About';
import Sidebar from './Sidebar'

const DashboardLayout = ({children}) => {

    const router = useRouter();
    const {isactive,resizeSidebar,setIsActive,screenSize, setscreenSize} = useAppContext()
    console.log(isactive,"acti")
    const { isOpen, onOpen, onClose } = useDisclosure()

    useEffect(()=>{
        const handleResize = () => setscreenSize(window.innerWidth)
        window.addEventListener('resize', handleResize)
        handleResize()
    
        return ()=> window.removeEventListener('resize',handleResize)
       
      },[])

      useEffect(()=>{
        if(screenSize <= 900){
          setIsActive(false)
        } else{
          setIsActive(true)
        }
      },[screenSize])

    if (router.pathname === "/" || router.pathname === "/creator" || router.pathname === "/syncWallet" || router.pathname === "/404")
    return (
    <>
    {children}
    </>
      )
      else {
        return (
    <>
     <CustomModal
      MaxW={'58rem'}
      modalBody={<About/>}
      isopen={isOpen}
      onclose={onClose}
      footerDirection={'column'}
            />
            <Box display={'flex'} bg={'#1E1E1E'} position={'relative'}>
                <Sidebar onOpen={onOpen}/>
                <Box w={'full'} position={'relative'} color={'white'} ml={{base:'0',md:resizeSidebar ? '5.313rem': '11.875rem'}}>
                  <Flex display={{base:'block',md:'none'}} position="relative" py={'0.5rem'} px={'1rem'} color={'white'}><FaBars style={{position:'absolute',right:"3rem"}} onClick={()=>setIsActive(!isactive)}/></Flex>
                    
                {children}
                </Box>
            </Box>
            </>
          )
          
      }
}

export default DashboardLayout