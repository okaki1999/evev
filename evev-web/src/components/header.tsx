import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar,Container,Box,Button } from '@mui/material';

const Header = ({title}) => {
  return (
    <AppBar
    position="static"
    sx={{
      backgroundColor: '#64b5f6',
      color: '',
      boxShadow: 'none',
      py: '1px',
    }}
    >
        <Container sx={{ px: 2 }}>
            <Box
                sx={{
                    display: 'flex',
                      justifyContent: 'space-between',
                    alignItems: 'center',
                }}
                >
                <Box >
                <h1>{title}</h1>
                </Box>
                <div style={{ flexGrow: 1 }}></div>
                <Box >
                <Link to="/" style={{ textDecoration: 'none', marginRight: '8px' }}>
                    <Button variant="contained">
                        TOP
                    </Button>
                </Link>
                <Link to="../create" style={{ textDecoration: 'none', marginRight: '8px' }}>
                    <Button variant="contained">
                        イベント作成画面
                    </Button>
                </Link>
                <Link to="/events" style={{ textDecoration: 'none', marginRight: '8px' }}>
                    <Button variant="contained">
                        イベント一覧画面
                    </Button>
                </Link>
                </Box>
            </Box>
        </Container>
    </AppBar>
  );
}

export default Header;
