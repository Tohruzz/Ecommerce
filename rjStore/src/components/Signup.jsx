import { Button, Paper, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import {useForm} from 'react-hook-form'
let render = 0
const Signup = () => {
    let paperStyle={
        width:400,
        margin:"20px auto",
        padding:"20px",
        display:"grid",
        gap:"20px"
    }
    render++
    let [input,setInput]=useState("") 
    let {register, handleSubmit, formState : {errors}} = useForm()
    let handleData=(data)=>{
      console.log(data);
      
    }
  return (
    <div>
     <Paper elevation={20} style={paperStyle} component="form" onSubmit={handleSubmit(handleData)}>
        <Typography variant='h6'>Create Account {render}</Typography>
        <TextField label="Name" {...register("name")}/>
        <TextField label="Email" {...register("email")}/>
        <TextField label="Password" {...register("password")}/>
        <TextField label="Confirm Password" {...register("cpassword")}/>
        <Button type='submit' variant='contained'>Sign up</Button>
     </Paper>
    </div>
  )

}

export default Signup