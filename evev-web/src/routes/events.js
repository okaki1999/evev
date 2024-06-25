import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { axiosInstance } from "../utils/axios.js";
import Header from "../components/header.tsx";

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
    <div>
      <Header title="イベント一覧"/>
      <div style={{ margin: "auto", width: "1000px" }}>
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
    </div>
  );
}

export default Events;