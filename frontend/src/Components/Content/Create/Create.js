import base_url from "../../../api/bootapi"
import React from 'react'
import axios from "axios"
import { Form, FormGroup,Label,Input,Button, Row, Col} from "reactstrap";
import { useEffect, useState} from "react";
import { toast } from "react-toastify";
import { useNavigate} from "react-router-dom";
import './Create.scss'

const Create=()=> {

    const form=document.getElementById("addEmployeeForm");
    const navigate=useNavigate();

    //mounting, only once when this component is loaded the title of the page
    useEffect(() =>{
        document.title="Add Employee";
    },[])

    //creating state to manage the new todo object which is going to addded
    const[employee,setEmployee]=useState({})
    let currentUser=localStorage.getItem('currentUser');

    //When Add button is clicked what will happen
    const handleForm=(e)=>{
        const id=document.getElementById("id").value;
        const fName=document.getElementById("firstName").value;
        const lName=document.getElementById("lastName").value;
        const designationId=document.getElementById("designationId").value;
        const dateOfJoining=document.getElementById("dateOfJoining").value;
        const salary=document.getElementById("salary").value;
        

        (id==="" || fName==="" || lName==="" || designationId=="Select" || dateOfJoining=="" || salary=="") 
        ? invalidForm()
        : validForm(e);
        
    }

    //invalidForm
    const invalidForm=()=>{
        toast.error("Fill all the fields.",{position:"bottom-right",
                autoClose:1500});
    }

    //Valid Form
    const validForm = (e) =>{

        postDatatoServer(employee)        
        e.preventDefault();   

        //to remove all data from UI form
        form.reset();
        //to remove current data from todo object
        removeData();
    }

    //remove Data from from current Employee
    const removeData=()=>{
        setEmployee({});
    }

    //creating function to post data to server
    const postDatatoServer=(user)=>{
        axios.post(`${base_url}/employees`,employee).then(
            (response)=>{
                console.log(employee);
                toast.success("Employee Added",{position:"bottom-right",
                autoClose:1500});
                navigate(`/login/${currentUser}`);
            },
            (error)=>{
                toast.error("Something Went Wrong",{position:"bottom-right",
                autoClose:1500});
                console.log("error"+error);
            }
        )
    }
    
  return (
    <div>
        <h1 className="">ADD EMPLOYEE</h1>
        <Form id="addEmployeeForm">
            <FormGroup>
                <Label className="EmployeeID">Employee ID(Use Only Number)</Label>
                <Input id="id" name="id" 
                    type="number" placeholder="Employee ID" 
                    
                    onChange={(e)=>{
                        setEmployee({...employee,employeeId:e.target.value})
                    }}/>

            </FormGroup>

            <FormGroup>
                <Label className="EmployeeName">Employee Name</Label>
                <Row>
                    <Col md={4}>
                        <Input id="firstName" name="firstName" 
                        placeholder="First Name" 
                        
                        onChange={(e)=>{
                            setEmployee({...employee,firstName:e.target.value})
                        }}/>
                    </Col>

                    <Col md={4}>
                        <Input className="" id="lastName" name="lastName" 
                        placeholder="Last Name" 
                        
                        onChange={(e)=>{
                            setEmployee({...employee,lastName:e.target.value})
                        }}/>
                    </Col>
                </Row>
            </FormGroup>

            <FormGroup>
                <Label className="designationId">Designation</Label>
                <Input id="designationId" name="designationId" 
                    type="select"
                    placeholder="Designation ID" 
                    
                    onChange={(e)=>{
                        setEmployee({...employee,designationId:e.target.value})
                    }}>
                    <option value="Select">SELECT</option>
                    <option value="SDE">SDE</option>
                    <option value="QA">QA</option>
                    <option value="Developer">Developer</option>
                    <option value="Marketing">Marketing</option>
                </Input>

            </FormGroup>

            <FormGroup>
                <Label className="dateOfJoining">Date Of Joining</Label>
                <Input id="dateOfJoining" name="dateOfJoining" type="date"
                    
                    onChange={(e)=>{
                        setEmployee({...employee,dateOfJoining:e.target.value})
                    }}/>

            </FormGroup>

            <FormGroup>
                <Label className="salary">Salary(Use Only Number)</Label>
                <Input id="salary" name="salary" 
                    type="number" placeholder="Salary " 
                    
                    onChange={(e)=>{
                        setEmployee({...employee,salary:e.target.value})
                    }}/>

            </FormGroup>

            <Button onClick={handleForm} color="success">ADD</Button>
            <Button type="reset" className="mx-2" color="danger" onClick={()=>{
                toast.warn("Form is cleared",{position:"bottom-right",
                autoClose:1500});
                removeData();}}>CLEAR</Button>
            
        </Form>
    </div>
  )
}

export default Create
