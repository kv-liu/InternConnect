import React from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Ghost from '../components/Ghost'
import SearchButton from '../components/SearchButton'
import '../css/SearchButton.css'
import NavButton from '../components/NavButton'

const HomePage = () => {
  return (
    <>
      <NavButton />

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
