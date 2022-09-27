import { Text } from "@chakra-ui/react"

export const toplocationColumnsData = [
    {
        Header: 'Location',
        accessor: 'location',
        Cell: ({value}) => {
            return <Text>{value}</Text>
          }
      },
      {
        Header: 'Viewers',
        accessor: 'viewers',
        Cell: ({value}) => {
          return <Text>{value}</Text>
        }
      },
      {
        Header: 'Traffic',
        accessor: 'traffic',
        Cell: ({value}) => {
          return <Text>{value}</Text>
        }
      },
]