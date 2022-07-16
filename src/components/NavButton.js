import React from 'react'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'

import { useNavigate } from 'react-router-dom'

import MenuIcon from '@mui/icons-material/Menu'

const NavButton = ({ signOut }) => {
  let navigateTo = useNavigate()
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)

  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  const onNav = () => {
    navigateTo(-1)
  }

  return (
    <>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={{
          color: '#FFFFFF',
        }}
      >
        <MenuIcon />
      </Button>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={signOut}>SignOut</MenuItem>
        <MenuItem onClick={onNav}>Go Back</MenuItem>
      </Menu>
    </>
  )
}

export default NavButton
