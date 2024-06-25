import { Link } from "react-router-dom";
import Header from "./components/header.tsx";

function App() {
  return (
    <div style={{ margin: "auto", width: "1000px" }}>
      <Header title="ブログアプリ"/>
      <div>
       <Link to="/create">記事作成画面</Link>
      </div>
      <div>
        <Link to="/events">記事一覧画面</Link>
      </div>
    </div>
  );
}

export default App;