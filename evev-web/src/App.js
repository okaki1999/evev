import { Link } from "react-router-dom";
import Header from "./components/header.tsx";
import { Button } from "@mui/material";

function App() {
  return (
    <div>
      <Header title="ブログアプリ"/>
      <div style={{ margin: "auto", width: "1000px" }}>
      <div>
       <Link to="/create"><Button variant="contained">記事作成画面</Button></Link>
      </div>
      <div>
        <Link to="/events"><Button variant="contained">記事一覧画面</Button></Link>
      </div>
      </div>
    </div>
  );
}

export default App;