import { Button } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';


export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography>
            <Button variant='text'><Link className='header-button' to={"/"}> Home </Link></Button>
          </Typography>
          <Typography>
            <Button variant='text'><Link className='header-button' to={"/post-users"}> Post </Link></Button>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}