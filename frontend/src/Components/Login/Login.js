import base_url from "../../api/bootapi"
import React from 'react'
import axios from "axios"

import { Form, FormGroup,Label,Input,Button} from "reactstrap";
import './Login.scss'
import { useEffect, useState} from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Login=()=> {

    const form=document.getElementById("loginForm");
    const navigate=useNavigate();
    

    //creating state to manage the new user object that is going to be validated
    const[user,setUser]=useState({})

    //When Login button is clicked what will happen
    const handleForm=(e)=>{
        const email=document.getElementById("email").value;
        const pass=document.getElementById("pass").value;
        
        (email==="" || pass==="" ) 
        ? invalidForm()
        : validForm(e);
        
    }

    //invalidForm
    const invalidForm=()=>{
        // console.log("Invalid Todo");
        toast.error("Enter email and password both",{position:"bottom-right",
                autoClose:1500});
    }
    
    //Valid Form
    const validForm = (e) =>{
        
        postDatatoServer(user);

        //to remove all data from UI form
        form.reset();
        //to remove current data from user object
        removeData();
        e.preventDefault();   
    }

    //remove Data from from current Todo
    const removeData=()=>{
        setUser({});
    }

    //creating function to post data to server
    const postDatatoServer=(user)=>{
        axios.post(`${base_url}/login`,user).then(
            (response)=>{
                // console.log(user);
                // console.log(response);

                if(response.data==true){
                    localStorage.setItem('currentUser',user.userID);
                    navigate(`login/${user.userID}`);

                    toast.success(`Welcome ${user.userID}`,{position:"bottom-right",
                    autoClose:1500});
                }
                else{
                    toast.warning("Invalid Email or Password",{position:"bottom-right",
                    autoClose:1500});
                }
            },
            (error)=>{
                toast.error("Something Went Wrong",{position:"bottom-right",
                autoClose:1500});
                console.log("error"+error);
            }
        )
    }

  return (
    <div id = "cnt">
        <Form id="loginForm">

            <FormGroup>
                <Label for="username">User Name</Label>
                <Input id="email" name="userID" 
                    placeholder="Email" autoComplete="off"
                    type="email" required
                    onChange={(e)=>{
                        setUser({...user,userID:e.target.value})
                    }}/>

                
            </FormGroup>

            <FormGroup>
                <Label for="pass">Password</Label>
                <Input id="pass" name="pass" 
                    placeholder="Password" 
                    type="password" autoComplete="off" required
                    onChange={(e)=>{
                        setUser({...user,password:e.target.value})
                    }} />
                
                
            </FormGroup>

            
            <Button onClick={handleForm} color="success">Login</Button>
        </Form>
    </div>
  )
}

export default Login
