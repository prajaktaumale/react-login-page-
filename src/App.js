import React, { useState } from 'react'
import { useEffect } from 'react';
import Login from './login'
import datas from "./db";
import "./App.css"
function App() {
    const loginUser={
        username:"admin@gmail.com",
        password:"admin123"
    }
    const [user,setUser]=useState({email:""});
//eslint-disable-next-line
    const [Employees,setEmps]=useState([]);


    useEffect(()=>{
        setEmps(datas)
    },[]);


    const loginUserFn=(details)=>{
        if(
            details.email===loginUser.username&&
            details.password===loginUser.password){
            setUser({
                    email:details.email,
                } );
                console.log(user)
        }else{
            alert("Invalid Credentials.Kindly Check username or password")
        }
    }

  return (
    <div className="App">
        {user.email?(
            <div className="container">
            <h1>Welcome to Employee List Page</h1>
            <table border={5} cellPadding={20}>
                <tbody>
                    <tr>
                        <td>ID</td>
                        <td>Name</td>
                        <td>Age</td>
                        <td>Gender</td>
                        <td>Email</td>
                        <td>Phone</td>
                    </tr>
                    {datas.user.map((user,idx)=>{
                        return (
                            <tr key={idx}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.age}</td>
                            <td>{user.gender}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            </div>
        ):(
            <Login loginUserFn={loginUserFn} errors={alert}/>
        )}
    </div>
    );
    }


     
           
export default App;