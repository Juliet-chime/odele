import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Line } from 'react-chartjs-2';
import { Box, Flex, Text } from '@chakra-ui/react';

const Chart = () => {
    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend
      );

 const options = {
        //responsive:true,
        maintainAspectRatio: false,
        elements:{
            point:{
                radius:0,
            }
        },
        layout:{
            //padding:16
        },
        plugins: {
            tooltip:{
                enabled:true,
            },
          legend: {
            display:false,
            position: 'top',
            labels: {
                font:{
                    size:14
                }
            }

          },
        },
      };

      const labels = ['wk1', 'wk2', 'wk3', 'wk4', 'wk5'];
       const data = {
        labels,
        datasets: [
          {
            label: 'Dataset 1',
            data: [0,10,20,15,0],
            borderColor: '#5AEC43',
          },
          {
            label: 'Dataset 2',
            data: [20,10,10,110,30],
            borderColor: '#7F46F9',
          },
        ],
      };

  return (
   <Box 
   border={'2px solid #202020'} 
   borderRadius={'1.125rem'} 
   boxShadow={' 0px 10px 24px rgba(0, 0, 0, 0.18)'} 
   w='100%' 
   h={{base:"100%",md:'21rem'}}
   mt={'1.5rem'}
   px={{base:'0.5rem',md:'2.25rem'}}
   py={'1.5rem'}
   position={'relative'}
   //overflowX= {{base:'scroll',md:'none'}}
  //  overflow={'auto'}
   >
    <Line options={options} data={data}/>
    <Flex
    direction={'column'}
    gap={'0.5rem'}
    p={'0.5rem'}
    w={'9rem'} 
    h={'6rem'}
    border={'2px solid #202020'} 
    borderRadius={'1.125rem'} 
    boxShadow={' 0px 10px 24px rgba(0, 0, 0, 0.18)'} 
    position={'absolute'}
    right={'35vw'}
    top={'6vh'}
    >
<Text fontSize={'0.75rem'} color={'#727272'} fontWeight={600}>August 12 - 20</Text>
<Flex alignItems={'center'} justifyContent={'space-between'}>
    <Flex alignItems={'center'} gap={'1rem'} fontSize={'0.875rem'} fontWeight={400}>
    <Box w={'0.75rem'}h={'0.75rem'} bg={"#7F46F9"}></Box>
    <Text>Clicks</Text>
    </Flex>
    <Text>200</Text>
</Flex>
<Flex alignItems={'center'} justifyContent={'space-between'}>
    <Flex alignItems={'center'} gap={'1rem'} fontSize={'0.875rem'} fontWeight={400}>
    <Box w={'0.75rem'}h={'0.75rem'} bg={"#5AEC43"}></Box>
    <Text>Clicks</Text>
    </Flex>
    <Text>12</Text>
</Flex>
    </Flex>
   </Box>
  )
}

export default Chart