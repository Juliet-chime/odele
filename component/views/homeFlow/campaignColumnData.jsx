import ChakraNextImage from "@/component/chakraNextImage/ChakaraNextImage"
import { Flex, Text } from "@chakra-ui/react"
import greenArrow from "../../../public/images/icons/greenArrow.svg"
import redArrow from "../../../public/images/icons/redArrow.svg"

export const campaginColumnsData = [
    {
        Header: 'Campaign Name',
        accessor: 'campaign name',
        Cell: ({value}) => {
            return <Text>{value}</Text>
          }
      },
      {
        Header: 'Clicks',
        accessor: 'clicks',
        Cell: ({value}) => {
          return <Text>{value}</Text>
        }
      },
      {
        Header: 'Sales',
        accessor: 'sales',
        Cell: ({value}) => {
          return <Text>{value}</Text>
        }
      },
      {
        Header: 'Conversion',
        accessor: 'conversion',
        Cell: ({value}) => {
          return <Flex alignItems={'center'} gap={'1rem'}>
            <Text>{value}</Text>
            {value >=30 ? <ChakraNextImage src={greenArrow}/>:<ChakraNextImage src={redArrow}/>}
          </Flex>
        }
      },
      {
        Header: 'CPC',
        accessor: 'cpc',
        Cell: ({value}) => {
          return <Flex alignItems={'center'} gap={'1rem'}>
          <Text>${value}</Text>
          {value >=30 ? <ChakraNextImage src={greenArrow}/>:<ChakraNextImage src={redArrow}/>}
        </Flex>
        }
      },
      {
        Header: 'Budget spent',
        accessor: 'budget',
        Cell: ({value}) => {
          return <Text>${value}</Text>
        }
      },
      {
        Header: 'Remaining budget',
        accessor: 'remaining budget',
        Cell: ({value}) => {
          return <Text>${value}</Text>
        }
      },
      {
        Header: 'Performance',
        accessor: 'performance',
        Cell: ({value}) => {
          return <Text color={value === 'Average' ? '#F2D01F': value === 'Good' ? '#1EDC53': value === 'Poor'? '#FF2828':''}>{value}</Text>
        }
      },
]