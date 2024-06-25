import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { axiosInstance } from "../utils/axios.js";
import Header from "../components/header.tsx";

function CreateEvent() {
    const [title, setTitle] = useState("");
    const [contents, setContents] = useState("");
    const navigate = useNavigate();

    const onClick = async () => {
        await axiosInstance.post("/events", { title, contents });
        navigate("/events", { replace: true });
      };
  return (
    <div>
      <Header title="イベント作成"/>
      <div style={{ margin: "auto", width: "1000px" }}>
      <h2>タイトルを入力してください</h2>
     <div>
       <input
         value={title}
         onChange={(e) => setTitle(e.target.value)}
         style={{ width: "500px" }}
       />
     </div>
     <h2>本文を入力してください</h2>
     <div>
       <textarea
         value={contents}
         onChange={(e) => setContents(e.target.value)}
         style={{ width: "500px", height: "300px" }}
       />
     </div> 
     <div style={{ marginTop: "20px" }}>
       <button onClick={onClick}>イベントを作成する</button>
     </div>  
     </div>   
   </div>
  );
}

export default CreateEvent;