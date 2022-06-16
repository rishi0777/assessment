import { Form, FormGroup,Label,Input,Button,Row,Col} from "reactstrap";
import { useEffect, useState} from "react";
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom'
import base_url from "../../../api/bootapi"
import axios from "axios"


const Update=()=>{
    const navigate=useNavigate()
    
    //creating state to manage the new employee object which is going to addded.
    //creating state for everything inside employee
    let currentUser=localStorage.getItem('currentUser');

    const[employeeId,setEmployeeId]=useState(null);
    const[firstName,setFirstName]=useState();
    const[lastName,setLastName]=useState();
    const[designationId,setDesignationId]=useState();
    const[dateOfJoining,setDateOfJoining]=useState();
    const[salary,setSalary]=useState();

    
    //mounting, when this component gets loaded at that time only
    useEffect(() =>{
        document.title="Update Employee";

        setEmployeeId(localStorage.getItem('Id'))
        setFirstName(localStorage.getItem('firstName'))
        setLastName(localStorage.getItem('lastName'))
        setDateOfJoining(localStorage.getItem('dateOfJoining'))
        setDesignationId(localStorage.getItem('designationId'))
        setSalary(localStorage.getItem('salary'))
        /*setEmployee({...employee,employeeId:localStorage.getItem('Id')})
        setEmployee({...employee,firstName:localStorage.getItem('firstName')})
        setEmployee({...employee,lastName:localStorage.getItem('lastName')})
        setEmployee({...employee,designationId:localStorage.getItem('designationId')})
        setEmployee({...employee,dateOfJoining:localStorage.getItem('dateOfJoining')})
        setEmployee({...employee,salary:localStorage.getItem('salary')})*/
    },[])

    

    //posting updated data to database
    const updateData=()=>{
        const employee={"employeeId":employeeId,"firstName":firstName,"lastName":lastName,
        "dateOfJoining":dateOfJoining,"designationId":designationId,"salary":salary}
        axios.put(`${base_url}/employees/${employeeId}`,employee).then(
            ()=>{
                toast.success("Record Updated",{position:"bottom-right",
                    autoClose:1500});
                navigate(`/login/${currentUser}`);
            },
            (error)=>{
                //error
                console.log(error);
            }
        )
    }

    return (
        <div>
        <h1 className="">UPDATE EMPLOYEE</h1>
        <Form id="addEmployeeForm">
                
            <FormGroup>
                <Label for="Employee ID">Employee ID</Label>
                <Input id="id" name="id" 
                    type="number" placeholder="Employee ID" 
                    value={employeeId} disabled/>

            </FormGroup>

            <FormGroup>
                <Label for="EmployeeName">Employee Name</Label>
                <Row>
                    <Col md={4}>
                        <Input id="firstName" name="firstName" 
                        placeholder="First Name" 
                        value={firstName}
                        onChange={(e)=>{
                            setFirstName(e.target.value)
                        }}/>
                    </Col>

                    <Col md={4}>
                        <Input className="" id="lastName" name="lastName" 
                        placeholder="Last Name" 
                        value={lastName}
                        onChange={(e)=>{
                            setLastName(e.target.value)
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
                        setDesignationId(e.target.value)
                    }}>
                    <option value="Select">SELECT</option>
                    <option value="SDE">SDE</option>
                    <option value="QA">QA</option>
                    <option value="Developer">Developer</option>
                    <option value="Marketing">Marketing</option>
                </Input>
            </FormGroup>

            <FormGroup>
                <Label for="dateOfJoining">Date Of Joining</Label>
                <Input id="dateOfJoining" name="dateOfJoining" type="date"
                    value={dateOfJoining}
                    onChange={(e)=>{
                        setDateOfJoining(e.target.value)
                    }}/>

            </FormGroup>

            <FormGroup>
                <Label for="salary">Salary</Label>
                <Input id="salary" name="salary" 
                    type="number" placeholder="Salary " 
                    value={salary}
                    onChange={(e)=>{
                        setSalary(e.target.value)
                    }}/>

            </FormGroup>

            <Button onClick={updateData} color="success">UPDATE</Button>
            
        </Form>
    </div>
        
    )
}


export default Update;

