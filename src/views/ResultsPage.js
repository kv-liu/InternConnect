import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import axios from 'axios'
import SimpleBar from 'simplebar'
import 'simplebar/dist/simplebar.css'
import { FaExternalLinkAlt } from 'react-icons/fa'
import TablePagination from '@mui/material/TablePagination'

import Container from '@mui/material/Container'
import NavButton from '../components/NavButton'

const AWS_ENDPOINT =
  'https://783uqf6eeg.execute-api.us-west-1.amazonaws.com/prod/recruiter?company='

const ResultsPage = ({ signOut }) => {
  const location = useLocation()

  const [recruiters, setRecruiters] = useState([])

  const AWS_ENDPOINT_FINAL =
    AWS_ENDPOINT +
    location.state.searchVal.charAt(0).toUpperCase() +
    location.state.searchVal.slice(1).toLowerCase()

  const [page, setPage] = useState(2)
  const [rowsPerPage, setRowsPerPage] = useState(10)

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  function handleApi() {
    fetch(AWS_ENDPOINT_FINAL)
      .then(response => response.json())
      .then(data => {
        setRecruiters({ data })
        console.log('JSON:', data)
        // console.log(AWS_ENDPOINT_FINAL)
        return
      })
      .catch(err => {
        console.log(err)
        return
      })
  }

  useEffect(async () => {
    const fetchRecruiters = async () => {
      try {
        const { data } = await axios.get(AWS_ENDPOINT_FINAL)
        setRecruiters(data)
      } catch (error) {
        console.log(error)
      }
    }
    if (recruiters) {
      fetchRecruiters()
    }
  }, [recruiters])

  return (
    <>
      <NavButton signOut={signOut} />
      <Container
        sx={{
          minWidth: '500px',
          width: '30%',
          overflow: 'auto',
          marginTop: '300px',
        }}
        data-simplebar
      >
        <TableContainer
          sx={{ height: '600px', overflow: 'auto' }}
          component={Paper}
          data-simplebar
        >
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="left">
                  <b>Recruiter Name</b>
                </TableCell>
                <TableCell align="center">
                  <b>LinkedIn</b>
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {recruiters
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((list, index) => (
                  <TableRow key={index}>
                    <TableCell align="left" component="th" scope="row">
                      {list.name}
                    </TableCell>
                    <TableCell align="center">
                      {
                        <a
                          href={list.linkedin_url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaExternalLinkAlt />
                        </a>
                      }
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>

        <TablePagination
          rowsPerPageOptions={[10, 15, 20, 25]}
          component="div"
          count={recruiters.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Container>
    </>
  )
  // <TableContainer component={Paper}>
  //   <Table sx={{ minWidth: 650 }} aria-label="simple table">
  //     <TableHead>
  //       <TableRow>
  //         <TableCell align="left">
  //           <b>Name</b>
  //         </TableCell>
  //         <TableCell align="left">
  //           <b>LinkedIn</b>
  //         </TableCell>
  //       </TableRow>
  //     </TableHead>
  //     <TableBody>
  //       {props.recruiters.map((list, index) => (
  //         <TableRow key={index}>
  //           <TableCell component="th" scope="row">
  //             {list.name}
  //           </TableCell>
  //           <TableCell align="left">
  //             {<Button href={list.linkedin_url}>{list.linkedin_url}</Button>}
  //           </TableCell>
  //         </TableRow>
  //       ))}
  //     </TableBody>
  //   </Table>
  // </TableContainer>
}

export default ResultsPage
