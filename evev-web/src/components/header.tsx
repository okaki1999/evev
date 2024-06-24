import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

const Header = () => {
  return (
    <div style={{ margin: "auto", width: "1000px" }}>
      <h1>イベント詳細画面</h1>
      <div>
        <Link to="/">TOP</Link>
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
    </div>
  );
}

export default Header;
