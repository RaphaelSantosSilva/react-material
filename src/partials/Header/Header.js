import React, {useState} from "react"
import {
    AppBar,
    Box,
    Toolbar,
    Typography,
    Button,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
} from '@mui/material'

import HomeIcon from '@mui/icons-material/Home'
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt'
import MenuIcon from '@mui/icons-material/Menu'
import './Header.css'

const Header = () => {
  const [menuopen, setMenuopen] = useState(false)

  const handleToggleOpen = () => {
    setMenuopen(!menuopen)
  } 

    return(     
      <>
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton onClick={() => handleToggleOpen()}
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography className="title" variant="h6" component="div" sx={{ flexGrow: 1 }}>
              My Application
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
        </Box>
        <Drawer open={menuopen} onClose={() => handleToggleOpen()}>
          <List>
            <ListItem button>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText>
                <a className="ancora" href="/">Home</a>
              </ListItemText>
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <PersonAddAltIcon />
              </ListItemIcon>
              <ListItemText>
                <a className="ancora" href="/customers">CADASTRO</a>
              </ListItemText>
            </ListItem>
          </List>
        </Drawer>
      </>      
    )
}

export default Header