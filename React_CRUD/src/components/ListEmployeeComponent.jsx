import React from 'react'

const ListEmployeeComponent = () => {
      const dummyData=[
            {
                  "id": 1,
                  "firstName": "Oussama",
                  "lastName": "Ben Ammar",
                  "email": "oussammabenammar@gmail.com"
              },
              {
                  "id": 2,
                  "firstName": "Omar",
                  "lastName": "Ben Ammar",
                  "email": "Omarbenammar@gmail.com"
              },
              {
                  "id": 3,
                  "firstName": "test",
                  "lastName": "Bentest",
                  "email": "testbentest@gmail.com"
              }


      ]
  return (
    <div>
      <h2>List of Employees</h2>
      <table>
            <thead>
                  <tr>
                        <tr>Employee Id</tr>
                        <tr>Employee first Name</tr>
                        <tr>Employee Last Name</tr>
                        <tr>Employee Email Id</tr>
                  </tr>
            </thead>
            <tbody>

              {
                  dummyData.map(employee => 
                     <tr key={employee.id}>
                        <td>{employee.id}</td>
                        <td>{employee.firstName}</td>
                        <td>{employee.lastName}</td>
                        <td>{employee.email}</td>

                     </tr>
                  
                  )
              }
            </tbody>
      </table>
    </div>
  )
}

export default ListEmployeeComponent