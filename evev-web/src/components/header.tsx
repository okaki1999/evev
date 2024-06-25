import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar,Container,Box,Button } from '@mui/material';

const Header = ({title}) => {
  return (
    <AppBar
    position="static"
    sx={{
      backgroundColor: 'white',
      color: 'black',
      boxShadow: 'none',
      py: '12px',
    }}
  >
    <Container maxWidth="lg" sx={{ px: 2 }}>
    <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
    <Box>
      <h1>{title}</h1>
    </Box>
      <div>
        <Link to="/"><Button variant="contained">
            TOP
          </Button></Link>
      </div>
      <div>
        <Link to="../create">
          <Button variant="contained">
            イベント作成画面
          </Button>
        </Link>
      </div>
      <div>
        <Link to="/events">
          <Button variant="contained">
            イベント一覧画面
          </Button>
        </Link>
      </div>
    </Box>
    </Container>
    </AppBar>
  );
}

export default Header;
