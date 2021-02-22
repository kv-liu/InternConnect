import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


import SearchBar from './SearchBar';

  const dataSet = [{'name': 'Ruben Casillan', 'linkedin_url': 'https://www.linkedin.com/in/rcasillan/'}, {'name': 'Stephanie Parks', 'linkedin_url': 'https://www.linkedin.com/in/stephanieanneparks/'}, {'name': 'Nataly Cortes', 'linkedin_url': 'https://www.linkedin.com/in/natalygracecortes/'}, {'name': 'Gerilyn Roll', 'linkedin_url': 'https://www.linkedin.com/in/gerilynroll/'}, {'name': 'Brooke Mannelly', 'linkedin_url': 'https://www.linkedin.com/in/brooke-mannelly/'}, {'name': 'Ina Williams - ACIR', 'linkedin_url': 'https://www.linkedin.com/in/ina-williams-acir-27a2a16/'}, {'name': 'Kevin Son', 'linkedin_url': 'https://www.linkedin.com/in/sonk90/'}, {'name': 'Chris Shaw', 'linkedin_url': 'https://www.linkedin.com/in/chrisshaw2/'}, {'name': 'Joanna Mackow', 'linkedin_url': 'https://www.linkedin.com/in/joanna-mackow-3320491b/'}, {'name': 'Darren Nakata', 'linkedin_url': 'https://www.linkedin.com/in/darrennakata/'}, {'name': 'Chanelle Yee', 'linkedin_url': 'https://www.linkedin.com/in/chanelle-yee-17499632/'}, {'name': 'Michael Maxey', 'linkedin_url': 'https://www.linkedin.com/in/michael-maxey-86655144/'}, {'name': 'Mike Atilano', 'linkedin_url': 'https://www.linkedin.com/in/matilano/'}, {'name': 'Jeremy Jones', 'linkedin_url': 'https://www.linkedin.com/in/jeremyyjones/'}, {'name': 'Rimmi Amjad', 'linkedin_url': 'https://www.linkedin.com/in/rimmiamjad/'}, {'name': 'Woanhwa Feng', 'linkedin_url': 'https://www.linkedin.com/in/woanhwa/'}, {'name': 'Archana Shekar', 'linkedin_url': 'https://www.linkedin.com/in/archanashekar/'}, {'name': 'Rick Figoni', 'linkedin_url': 'https://www.linkedin.com/in/rickfigoni/'}, {'name': 'Haley Maddox', 'linkedin_url': 'https://www.linkedin.com/in/haley-maddox-195431159/'}, {'name': 'Courtney Yeager', 'linkedin_url': 'https://www.linkedin.com/in/cnolet/'}, {'name': 'Taylor Murphy', 'linkedin_url': 'https://www.linkedin.com/in/taylorvalle/'}, {'name': 'Ann Xiao', 'linkedin_url': 'https://www.linkedin.com/in/annxiao7/'}, {'name': 'Dianna Chourarath', 'linkedin_url': 'https://www.linkedin.com/in/dianna-chourarath-296a7677/'}, {'name': 'Kayleigh Bottini', 'linkedin_url': 'https://www.linkedin.com/in/kayleighbottini/'}, {'name': 'Jeff Schnable', 'linkedin_url': 'https://www.linkedin.com/in/jeff-schnable-0940891/'}, {'name': 'Pete Farias', 'linkedin_url': 'https://www.linkedin.com/in/petefarias/'}, {'name': 'Gina Willett', 'linkedin_url': 'https://www.linkedin.com/in/ginaawillett/'}, {'name': 'Gretchen Farr', 'linkedin_url': 'https://www.linkedin.com/in/gretchenfarr/'}, {'name': 'Michael Ta Le', 'linkedin_url': 'https://www.linkedin.com/in/michael-ta-le-6a8b0019/'}, {'name': 'Silas Brickner', 'linkedin_url': 'https://www.linkedin.com/in/silas-brickner-62897182/'}, {'name': 'Tiffany Landayan', 'linkedin_url': 'https://www.linkedin.com/in/tiffany-landayan-9b46847/'}, {'name': 'Heelie Drury', 'linkedin_url': 'https://www.linkedin.com/in/heeliedrury/'}, {'name': 'Charles Chang, PHR', 'linkedin_url': 'https://www.linkedin.com/in/charles-chang-phr-74914063/'}, {'name': 'Cory Johnson', 'linkedin_url': 'https://www.linkedin.com/in/coryleejohnson/'}]

  const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function BasicTable(props) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left" ><b>Name</b></TableCell>
            <TableCell align="left"><b>LinkedIn URL</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.recruiters.map((list, index) => (
            <TableRow key={index}>
              <TableCell component="th" scope="row">
                {list.name}
              </TableCell>
              <TableCell align="left">
                  {<a href={list.linkedin_url}>{list.linkedin_url}</a>}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
