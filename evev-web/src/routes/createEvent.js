import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { axiosInstance } from "../utils/axios.js";
import Header from "../components/header.tsx";
import { TextField, Button, Container, Typography, Box } from '@mui/material';

function CreateEvent() {
    const [title, setTitle] = useState("");
    const [contents, setContents] = useState("");
    const [start_at, setStartAt] = useState("");
    const [end_at, setEndAt] = useState("");
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const onClick = async () => {
        try {
            await axiosInstance.post("/events", { title, contents, start_at, end_at });
            navigate("/events", { replace: true });
        } catch (err) {
            setError("イベントの作成に失敗しました。");
            console.error(err);
        }
    };

    return (
      <div>
      <Header title="イベント作成" />
        <Container maxWidth="md">
            <Box sx={{ mt: 4, p: 2, borderRadius: 1, boxShadow: 3 }}>
                <Typography variant="h5" gutterBottom>イベントの詳細を入力してください</Typography>
                {error && <Typography color="error">{error}</Typography>}
                <TextField
                    label="タイトル"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <TextField
                    label="本文"
                    variant="outlined"
                    multiline
                    rows={4}
                    fullWidth
                    margin="normal"
                    value={contents}
                    onChange={(e) => setContents(e.target.value)}
                />
                <TextField
                    label="開始日時"
                    type="datetime-local"
                    fullWidth
                    margin="normal"
                    value={start_at}
                    onChange={(e) => setStartAt(e.target.value)}
                    InputLabelProps={{ shrink: true }}
                />
                <TextField
                    label="終了日時"
                    type="datetime-local"
                    fullWidth
                    margin="normal"
                    value={end_at}
                    onChange={(e) => setEndAt(e.target.value)}
                    InputLabelProps={{ shrink: true }}
                />
                <Button
                    variant="contained"
                    color="primary"
                    onClick={onClick}
                    sx={{ mt: 2 }}
                >
                    イベントを作成する
                </Button>
            </Box>
        </Container>
        </div>
    );
}

export default CreateEvent;
