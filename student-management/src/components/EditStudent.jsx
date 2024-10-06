import { Label } from '@mui/icons-material'
import { Button, TextField } from '@mui/material'
import React from 'react'

const EditStudent = () => {
  return (

      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '75vh',
        flexDirection: 'column',
        marginTop:"60px",
        marginRight:"350px",
        marginLeft:"350px",
        backgroundColor:"black"
      }}>
        <h1>Edit Details</h1>
        <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
        <table style={{ margin: '0 auto' }}>
            <tbody>
                <tr>
                    <td style={{ padding: '10px', textAlign: 'center' }}>
                        <label htmlFor="">Name:</label>
                        <TextField  className="custom-textfield"></TextField>
                    </td>
                    <td style={{ padding: '10px', textAlign: 'center' }}>
                        <label htmlFor="">Reg No:</label>
                        <TextField  className="custom-textfield"></TextField>
                    </td>
                </tr>
                <tr>
                    <td style={{ padding: '10px', textAlign: 'center' }}>
                        <label htmlFor="">Course:</label>
                        <TextField  className="custom-textfield"></TextField>
                    </td>
                    <td style={{ padding: '10px', textAlign: 'center' }}>
                        <label htmlFor="">Email:</label>
                        <TextField  className="custom-textfield"></TextField>
                    </td>
                </tr>
                <tr>
                    <td style={{ padding: '10px', textAlign: 'center' }}>
                        <label htmlFor="">Phone:</label>
                        <TextField  className="custom-textfield"></TextField>
                    </td>
                    <td style={{ padding: '10px', textAlign: 'center' }}>
                        <label htmlFor="">Address:</label>
                        <TextField  className="custom-textfield"></TextField>
                    </td>
                </tr>
            </tbody>
        </table>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                <Button variant='contained'>
                    Update
                </Button>
            </div>
    
      </div>
  )
}

export default EditStudent
