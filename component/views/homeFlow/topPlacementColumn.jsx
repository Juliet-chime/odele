import ChakraNextImage from "@/component/chakraNextImage/ChakaraNextImage"
import { Flex, Text } from "@chakra-ui/react"
import videoIcon from "../../../public/images/icons/videoIcon.svg"
import graph from "../../../public/images/pictures/graph.svg"

export const topPlacementColumnsData = [
    {
        Header: 'Platform',
        accessor: 'platform',
        Cell: ({value}) => {
            return <Text>{value}</Text>
          }
      },
      {
        Header: 'Viewers',
        accessor: 'viewers',
        Cell: ({value}) => {
          return <Flex alignItems={'center'} gap={'0.5rem'}>
            <Text>{value}</Text>
            <ChakraNextImage src={graph}/>
            </Flex>
        }
      },
      {
        Header: 'Video',
        accessor: 'videos',
        Cell: ({value}) => {
          return <Text>{value}</Text>
        }
      },
      {
        Header: 'Phone',
        accessor: 'phone',
        Cell: ({value}) => {
          return <Text>{value}</Text>
        }
      },
      {
        Header: 'URL',
        accessor: 'url',
        Cell: ({value}) => {
          return <Text>${value}</Text>
        }
      },
      
]