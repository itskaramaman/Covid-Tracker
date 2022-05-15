import React from 'react';
import { Typography } from '@mui/material';


const Footer = () => {
  return (
      <footer style={{backgroundColor: "#D3D3D3", padding: "50px 0"}}>
          <Typography align='center' variant="h6">Real Time covid tracker</Typography>
          <Typography align='center' variant="subtitle1" color="textSecondary">&copy; Copyright issued to `Karamjeet Singh Jandu`</Typography>
      </footer>
  )
}

export default Footer;