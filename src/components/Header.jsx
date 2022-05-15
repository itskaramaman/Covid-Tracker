import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import CoronavirusOutlinedIcon from '@mui/icons-material/CoronavirusOutlined';

const Header = () => {
  return (
      <>
        <AppBar position='relative'>
            <Toolbar>
                <CoronavirusOutlinedIcon fontSize='large' />
                <Typography variant='h4'>Covid Tracker</Typography>
            </Toolbar>
        </AppBar>
      </>
  )
}

export default Header;