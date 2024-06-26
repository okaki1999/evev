import axios from 'axios';
import { Button } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

type DeleteTodoButtonProps = {
  id: number;
};

// Todoを削除するボタン
const DeleteTodoButton = ({ id }: DeleteTodoButtonProps) => {
    //削除後のルート
  const navigate = useNavigate();

  // Todoを削除する関数
  const handleDelete = async () => {
    // 確認のダイアログを表示
    if (!window.confirm('本当に削除しますか？')) {
      return;
    }

    try {
      // APIを呼び出して、Todoを削除する
      await axios.delete(`http://localhost:3010/events/${id}`);

      // 削除に成功したらトップページに遷移
      navigate('/events');
    } catch (error) {
      console.error('削除に失敗しました:', error);
    }
  };

  return (
    <Button
      onClick={handleDelete}
      variant="contained"
    >
      Delete
    </Button>
  );
};

export default DeleteTodoButton;
