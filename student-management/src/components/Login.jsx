import { Button, TextField } from '@mui/material'
import React from 'react'

const Login = () => {
  return (
    <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '50vh',
        flexDirection: 'column',
        marginTop:"100px",
        marginRight:"400px",
        marginLeft:"400px",
        backgroundColor:"black"
      }} >
        <br />
        <h1>Admin Login</h1>
        <TextField 
            variant='outlined'
            className="custom-textfield"
            label="username"
            />
            <br />
        <TextField
            variant='outlined'
            className="custom-textfield"
            label="password"
            type='password'
        />
        <br />
        <Button variant='contained' >
            Login
        </Button>
        <br /><br />
    </div>
  )
}

export default Login
