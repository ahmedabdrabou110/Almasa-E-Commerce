import React from 'react'
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import { grey } from '@mui/material/colors';
const TopBar = ({open , handleDrawerOpen}) => {
  return (
    <AppBar color='transparent' style={{ background:"transparent" , boxShadow:"none" }} open={open}>
        <Toolbar>

          <IconButton
            color="primary"
            style={{zIndex:2 , backgroundColor:grey[200]}}
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          

        </Toolbar>
      </AppBar>
  )
}

export default TopBar