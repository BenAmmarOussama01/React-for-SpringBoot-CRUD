import React,{useState,useEffect} from 'react'
import { listEmployeees } from '../services/EmployeeService'
import {useNavigate} from'react-router-dom'

const ListEmployeeComponent = () => {
    const[employees,setEmployees]=useState([])
    const navigator=useNavigate();
    useEffect(()=>{
      listEmployeees().then((Response)=>{
            setEmployees(Response.data);
            console.log('use effect called');
      }).catch(error=>console.error(error))

    },[])
    function addNewEmlpoyee(){
      navigator('/add-employee')
    }
  return (
    <div className='container'>
      <h2 className='text-center'>List of Employees</h2>
     
      <table className='table table-striped table-bordered '>
            <thead>
                  <tr>
                        <th>Employee Id</th>
                        <th>Employee first Name</th>
                        <th>Employee Last Name</th>
                        <th>Employee Email Id</th>
                  </tr>
            </thead>
            <tbody>

              {
                  employees.map(employee => 
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
      <button type="button" className="btn btn-primary mb-2 d-block mx-auto" onClick={addNewEmlpoyee}>Add Employee</button>
    </div>
  )
}

export default ListEmployeeComponent