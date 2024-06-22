import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { axiosInstance } from "../utils/axios.js";

function Events() {
    const [events, setEvents] = useState();
    useEffect(() => {
      const f = async () => {
        const res = await axiosInstance.get("/events");
        setEvents(res.data);
      };
    f();
   }, []);
  return (
    <div style={{ margin: "auto", width: "1000px" }}>
      <h1>イベント一覧画面</h1>
      <div>
        <Link to="/">TOP</Link>
      </div>
      <div>
        <Link to="/create">イベント作成画面</Link>
      </div>
      <div>
       <ul>
         {events?.map((b) => (
           <Link to={`/events/${b.id}`} key={b.id}>
             <li>{b.title}</li>
           </Link>
         ))}
       </ul>
     </div>
    </div>
  );
}

export default Events;