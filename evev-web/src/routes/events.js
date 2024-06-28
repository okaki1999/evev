import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { axiosInstance } from "../utils/axios.js";
import Header from "../components/header.tsx";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

function Events() {
    const [events, setEvents] = useState();
    useEffect(() => {
      const f = async () => {
        const res = await axiosInstance.get("/events");
        setEvents(res.data);
      };
    f();
   }, []);
   console.log(events);
  return (
    <div>
      <Header title="イベント一覧"/>
      <div style={{ margin: "auto", width: "1000px" }}>
      
       <ul>
         {events?.map((b) => (
          <Card variant="outlined">
           <Link to={`/events/${b.id}`} underline="none" key={b.id}>
             <li><h1>{b.title}</h1></li>
           </Link>
          </Card>
         ))}
       </ul>
       
     </div>
     </div>
  );
}

export default Events;