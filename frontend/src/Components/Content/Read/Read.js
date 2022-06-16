import { useState ,useEffect } from "react";
import { toast } from "react-toastify";
import { Row,Input,Table} from "reactstrap";
import { Link } from "react-router-dom";

import axios from "axios";
import Employee from "../Employee/Employee";
import base_url from "../../../api/bootapi"
import './Read.scss'

const Read=()=>{
    
    const[employee,setEmployee]=useState([]);
    
    useEffect(() =>{
        document.title="Employee List";
        getEmployeesFromDatabase();
    },[])

  
    const getEmployeesFromDatabase = ()=>{
        axios(`${base_url}/employees`).then(
            (response)=>{
                //in case of success
                toast("🦄 All Employees Loaded",{position:"bottom-right",
                autoClose:1500});
                // console.log(response.data);
                setEmployee(response.data);
            },
            (error)=>{
                //in case of error
                console.log(error);
                toast.error("Something Went Wrong",{position:"bottom-right",
                autoClose:1500});
            }
        )
    }

    //in order to delete employee from our employees array when employee is deleted successfully from
    //our database
    const refreshAllEmployees=(id)=>{
        setEmployee(
            employee.filter((item) => item.employeeId!==id)
        )
    }

    //searching in database using First Name
    const searchDatabaseFirstName=(content)=>{
        axios.get(`${base_url}/searchFirstName/${content}`).then(
            (response)=>{
                setEmployee(response.data);
            },
            ()=>{
                //error=> when everything inside searchBox is erased
                setEmployee("")
                console.log("Database Down Search Not Possible for First Name")
            }
        )
    }

    //searching in database using Designation
    const searchDatabaseDesignation=(content)=>{
        axios.get(`${base_url}/searchDesignation/${content}`).then(
            (response)=>{
                setEmployee(response.data);
            },
            ()=>{
                //error=> when everything inside searchBox is erased
                setEmployee("")
                console.log("Database Down Search Not Possible for Designation")
            }
        )
    }


    //when content inside input field searchbox is changed
    const onSearchChange = (e) => {
        //do not send request to database until and unless searchbox does contain anything
        if(e.target.value!==""){
            let searchBy=document.getElementById('searchType').value;
            if(searchBy=="First Name")
                searchDatabaseFirstName(e.target.value)
            else
                searchDatabaseDesignation(e.target.value)
        }
        else{
            getEmployeesFromDatabase();
        }   
    };

    
    return (
        <div >
            <h1>EMPLOYEE LIST</h1>
            <Row>
                <div className="searchCnt">
                    <div className="left" >
                        <label className="label">Search By</label>
                        <select name="searchType" id="searchType">
                            <option value="First Name">First Name</option>
                            <option value="Designation">Designation</option>
                        </select>
                    </div>
                    <Input id="searchBox" placeholder="Search" 
                    type="text" onChange={onSearchChange}/>
                    
                </div>
            </Row>

            <Table className="tableCnt" striped>
                <thead>
                    <tr>
                        <th>Employee ID</th>
                        <th>Employee Name</th>
                        <th>Designation</th>
                        <th>Date Of Joining</th>
                        <th>Salary (PA)</th>
                        <th>Operation</th>
                    </tr>
                </thead>
                <tbody>

                    {employee.map((item, index) => (  
                            <Employee index={index} employee={item} refreshAllEmployees={refreshAllEmployees}/> 
                             ))
                    }  
                    
                </tbody>
            </Table>

            <Link className="btn btn-success" tag='a' to="/addEmployee">Add Employee</Link>
        </div>
    )
}

export default Read;