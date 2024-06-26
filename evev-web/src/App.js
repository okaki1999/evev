// App.tsx
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "./components/header.tsx";
import { axiosInstance } from "./utils/axios.js";
import jaLocale from '@fullcalendar/core/locales/ja'; 
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!


function App() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await axiosInstance.get("/events");
        setEvents(res.data);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, []);

  // eventsからtitleとstartを取得してeventsArrayを生成する
  const eventsArray = events.map((event) => ({  
    title: event.title,
    start: event.start_at,
    end: event.end_at // 仮にcreated_atを使用していますが、実際のデータに応じて修正してください
  }));

  return (
    <div>
      <Header title="EVEV"/>
      <div style={{ margin: "auto", width: "1000px" }}>
        <FullCalendar
          plugins={[ dayGridPlugin ]}
          initialView="dayGridMonth"
          locales={[jaLocale]}
          locale='ja' 
          events={eventsArray}
        />
      </div>
    </div>
  )
}

export default App;
