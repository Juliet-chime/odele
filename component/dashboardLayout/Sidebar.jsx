import { Box, List } from '@chakra-ui/react'
import { useAppContext } from 'context'
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { sideBarMenu } from '../data'
import SidebarExpandIcons from './SideBarExpandIcon';
import SidebarIcons from './SidebarIcons';

const Sidebar = ({ onOpen }) => {
  const { isactive,resizeSidebar,setResizeSideBar } = useAppContext()
  const [activeId, setActiveId] = useState(0)

  const router = useRouter()

  const onTabClick = (index) => {
    setActiveId(index)
  }



  useEffect(() => {
    if (router.pathname === '/homeflow') {
      setActiveId(0)
    } else if (router.pathname === '/createcampaign') {
      setActiveId(1)
    } else if (router.pathname === '/campaign') {
      setActiveId(2)
    } else if (router.pathname === '/syncedNFT') {
      setActiveId(3)
    } else if (router.pathname === '/settings') {
      setActiveId(4)
    } else if (router.pathname === '/About') {
      setActiveId(5)
    }
  }, [router.pathname, activeId])

  const showModal = (list) => {
    if (list.title === 'About') {
      onOpen()
    }
  }

  const showSideBar = () => {
    setResizeSideBar(false)
  }

  const showSideBarExpand = () => {
    setResizeSideBar(true)
  }

  return (
    <>
      {isactive &&
        <Box h={'100vh'} position={'fixed'} zIndex={999999} w={resizeSidebar ? '5.25rem' : '12rem'} py={'1rem'} px={'0.3rem'} bg={'#0B0B0B'}>
          <Box display={'flex'} justifyContent={'flex-end'} color={'#A3A3A3'} cursor={'pointer'}>
            {resizeSidebar ? <BsChevronRight onClick={showSideBar} /> : <BsChevronLeft onClick={showSideBarExpand} />}
          </Box>
          {resizeSidebar ?
            <Box mt={'3rem'} display={'flex'} flexDirection={'column'} alignItems={'center'}>
              <List>
                {
                  sideBarMenu.map((items, index) => (
                    <Box
                      as='li'
                      mb={'1.2rem'}
                      borderBottom={index === 0 && '1px solid #404040'}
                      cursor='pointer'
                      key={items.title}
                      active={activeId}
                      onClick={() => onTabClick(index)}>
                      <SidebarIcons item={items} index={index} activeId={activeId} onItemClick={() => showModal(items)} />
                    </Box>
                  ))
                }
              </List>
            </Box>
            : <Box mt={'3rem'} px={'1rem'}>
              <List>
                {
                  sideBarMenu.map((items, index) => (
                    <Box
                      as='li'
                      mb={'1rem'}
                      py={'0.5rem'}
                      cursor='pointer'
                      borderBottom={index === 0 && '1px solid #404040'}
                      mt={index === 5 && '10rem'}
                      key={items.title}
                      active={activeId}
                      onClick={() => setActiveId(index)}>
                      <SidebarExpandIcons item={items} index={index} activeId={activeId} onItemClick={() => showModal(items)} />
                    </Box>
                  ))
                }
              </List>
            </Box>
          }
        </Box>
      }

    </>
  )
}

export default Sidebar