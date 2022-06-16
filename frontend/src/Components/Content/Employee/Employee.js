import axios from "axios";
import base_url from "../../../api/bootapi"

import { toast } from "react-toastify";
import { Row,Col,Card,CardBody, CardTitle, CardText, Button,CardSubtitle} from "reactstrap"; 
import { Prompt,useNavigate} from 'react-router-dom';
import './Employee.scss'

const Employee = ({index,employee,refreshAllEmployees}) =>{
    const navigate=useNavigate();
    
    //for deleting employee from database
    const deleteEmployee=()=>{
       if(window.confirm("Are you sure you want to delete this record?")==true){
            axios.delete(`${base_url}/employees/${employee.employeeId}`).then(
                (response)=>{
                    // console.log(response.data);
                    toast.success("Employee Record Deleted.",{position:"bottom-right",
                    autoClose:1500});
                    refreshAllEmployees(employee.employeeId);
                },
                (error)=>{
                    toast.error("Database Not Connected.",{position:"bottom-right",
                    autoClose:1500});
                }
            )
        }   
    }

    //for updating employee in database
    const setData = () => {
        localStorage.setItem('Id', employee.employeeId)
        localStorage.setItem('firstName', employee.firstName)
        localStorage.setItem('lastName', employee.lastName)
        localStorage.setItem('designationId', employee.designationId)
        localStorage.setItem('dateOfJoining',employee.dateOfJoining)
        localStorage.setItem('salary',employee.salary);
    }
    const updateEmployee=()=>{
        axios.get(`${base_url}/employees/${employee.employeeId}`).then(
            (response)=>{
                //success
                setData(response.data);
                navigate('/updateEmployee');
            },
            (error)=>{
                //error
                console.log(error);
            }
        )
        
    }

    
    return (
        <tr data-index={index}>  
            <td>{employee.employeeId}</td>  
            <td>{employee.firstName} {employee.lastName}</td>  
            <td>{employee.designationId}</td>  
            <td>{employee.dateOfJoining}</td>
            <td>{employee.salary}</td> 
            <td>
                <Button color="warning" onClick={updateEmployee}>Update</Button>
                <Button className="delete-button" color="danger" onClick={deleteEmployee}>Delete</Button>
            </td>
        </tr>
    )
}

export default Employee;