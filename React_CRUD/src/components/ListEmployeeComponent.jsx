import React,{useState,useEffect} from 'react'
import { deleteEmployee, listEmployeees } from '../services/EmployeeService'
import {useNavigate} from'react-router-dom'

const ListEmployeeComponent = () => {
    const[employees,setEmployees]=useState([])
    const navigator=useNavigate();
    useEffect(()=>{
      console.log('use effect from List called')
      getAllEmployees()

    },[])
    function getAllEmployees(){
      listEmployeees().then((Response)=>{
            setEmployees(Response.data);
      }).catch(error=>console.error(error))
    }
   
    function addNewEmlpoyee(){
      navigator('/add-employee')
    }
    function updateEmployee(id){
      navigator(`/edit-employee/${id}`)
    }
    function removeEmployee(id){
      console.log(id);
      deleteEmployee(id).then((response)=>{
            console.log(response.data);
            getAllEmployees();

      }).catch(error=>console.error(error));
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
                        <th>Actions</th>
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
                        <td><button className='btn btn-info'onClick={()=>updateEmployee(employee.id)}>Update</button>
                            <button className='btn btn-danger'onClick={()=>removeEmployee(employee.id)}style={{marginLeft:'10px'}}>Delete</button>
                        </td>

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