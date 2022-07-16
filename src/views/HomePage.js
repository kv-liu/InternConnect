import React from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Ghost from '../components/Ghost'
import SearchButton from '../components/SearchButton'
import NavButton from '../components/NavButton'

const HomePage = ({ signOut }) => {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <>
      <NavButton signOut={signOut} />

      <Box
        className="center-box"
        sx={{
          color: 'white',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          flexWrap: 'wrap',
          margin: '30vh auto',
        }}
      >
        <Ghost />
        <Typography variant="h1" component="h1" align="center">
          InternConnect
        </Typography>
        <SearchButton />
      </Box>
    </>
  )
}

export default HomePage
