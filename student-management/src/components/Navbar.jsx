import React from 'react';
import { AppBar, Box, Toolbar, IconButton, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { HomeOutlined } from '@mui/icons-material';

const Navbar = () => {
  return (
    <div>
          <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{backgroundColor:"maroon"}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <Link to="/" style={{textDecoration:"none",color:"white"}}><HomeOutlined/></Link>
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 ,marginTop:0}}>
            Student Management
          </Typography>
          <Button color="inherit"><Link to="/" style={{textDecoration:"none",color:"white"}}>Home</Link></Button>
          <Button color="inherit"><Link to="/course" style={{textDecoration:"none",color:"white"}}>Course</Link></Button>
          <Button color="inherit"><Link to="/login" style={{textDecoration:"none",color:"white"}}>Login</Link></Button>
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  )
}

export default Navbar
