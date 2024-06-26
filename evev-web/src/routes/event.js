import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { axiosInstance } from "../utils/axios.js";
import * as React from 'react';
import Header from "../components/header.tsx";
import DeleteTodoButton from "../components/DeleteTodoButton.tsx";


function Event() {
    const [event, setEvent] = useState();
    const params = useParams();

    useEffect(() => {
        const f = async () => {
          const res = await axiosInstance.get(`/events/${params.id}`);
          setEvent(res.data);
        };
        f();
      }, []);
      return (
        <div>
          <Header title="イベント詳細"/>  
          <div style={{ margin: "auto", width: "1000px" }}>
            <h2>{event?.title}</h2>
            <h3>本文</h3>
            <p>{event?.contents}</p> 
            <p>{event?.created_at}</p> 
            <p>{event?.start_at}</p> 
            <p>{event?.end_at}</p> 
            <DeleteTodoButton id={event?.id}/>
          </div>
        </div>
      );
}

export default Event;