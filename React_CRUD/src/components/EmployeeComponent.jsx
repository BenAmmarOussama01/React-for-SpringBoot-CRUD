import React, { useState } from 'react'
import { createEmployee } from '../services/EmployeeService'
import {useNavigate} from 'react-router-dom'
const EmployeeComponent = () => {
      const[firstName,setFirstName]=useState('')
      const[lastName,setLastName]=useState('')
      const[email,setEmail]=useState('')
      const[errors,setErrors]=useState({
            firstName:'',
            lastName:'',
            email:''
      })

      const navigator=useNavigate();
      function saveEmloyee(e){
            e.preventDefault()
            if(validateForm()){const employee ={firstName,lastName,email}
            console.log (employee)
            createEmployee(employee).then((response) =>{
                  console.log(response.data);
                  navigator('/')
            })}
            
      }
      function validateForm(){
            let valid = true;
            const errorsCopy={...errors}
            if( firstName.trim()){
                  errorsCopy.firstName='';
            }else{
                  errorsCopy.firstName='First name is required';
                  valid=false;
            }
            if (lastName.trim()){
                  errorsCopy.lastName='';
            }else{
                  errorsCopy.lastName='Last name is required';
                  valid=false; 
            }
            if (email.trim()){
                  errorsCopy.email='';
            }else{
                  errorsCopy.email='email is required';
                  valid=false; 
            }
            setErrors(errorsCopy);
            return valid;
      }
  return (
    <div className='container'>
      <div className="row">
            <div className="card mx-auto"style={{ marginTop: '20px',width:'50%' }}>
                  <h2 className='text-center'style={{ padding: '10px' }}>Add Employee</h2>
                  <div className="card-body">
                        <form>
                              <div className="form-group mb-2">
                                    <label className='form-label'>First Name</label>
                                    <input type="text"
                                           placeholder='Enter Employee First Name'
                                           name='firstName'
                                           value={firstName}
                                           className={`form-control ${errors.firstName? 'is-invalid':''} `}
                                           onChange={(e)=>setFirstName(e.target.value)}/>
                                           {errors.firstName&& <div className='invalid-feedback'> {errors.firstName}</div>}


                              </div>
                              <div className="form-group mb-2">
                                    <label className='form-label'>Last Name</label>
                                    <input type="text"
                                           placeholder='Enter Employee Last Name'
                                           name='lastName'
                                           value={lastName}
                                           className={`form-control ${errors.lastName? 'is-invalid':''} `}
                                           onChange={(e)=>setLastName(e.target.value)}/>
                                           {errors.lastName&& <div className='invalid-feedback'> {errors.lastName}</div>}
                              </div>
                              <div className="form-group mb-2">
                                    <label className='form-label'>Email</label>
                                    <input type="email"
                                           placeholder='Enter Employee Email'
                                           name='email'
                                           value={email}
                                           className={`form-control ${errors.email? 'is-invalid':''} `}
                                           onChange={(e)=>setEmail(e.target.value)}/>
                                           {errors.email&& <div className='invalid-feedback'> {errors.email}</div>}

                              </div>
                              <button className='btn btn-success d-block mx-auto'onClick={saveEmloyee}>Submit</button>

                        </form>
                  </div>
            </div>
      </div>

    </div>
  )
}

export default EmployeeComponent