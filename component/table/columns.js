import format from "date-fns/format"

export const columnsData = [
    {
        Header: 'Id',
        Footer:'Id',
        accessor: 'id', // accessor is the "key" in the data
      },
      {
        Header: 'First Name',
        Footer:'First Name',
        accessor: 'first_name',
      },
      {
        Header: 'Last Name',
        Footer: 'Last Name',
        accessor: 'last_name', // accessor is the "key" in the data
      },
      {
        Header: 'Email',
        Footer: 'Email',
        accessor: 'email', // accessor is the "key" in the data
      },
      {
        Header: 'Date of birth',
        Footer: 'Date of birth',
        accessor: 'date_of_birth',
        Cell:({value})=>{ return format(new Date(value),'dd/MM/yyyy')}
      },
      {
        Header: 'Age',
        Footer: 'Age',
        accessor: 'age', // accessor is the "key" in the data
      },
      {
        Header: 'Country',
        Footer: 'Country',
        accessor: 'country', // accessor is the "key" in the data
      },
      {
        Header: 'Phone number',
        Footer: 'Phone number',
        accessor: 'phone',
      },
]