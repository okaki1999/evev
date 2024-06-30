import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { axiosInstance } from "../utils/axios.js";
import * as React from 'react';
import Header from "../components/header.tsx";
import DeleteTodoButton from "../components/DeleteTodoButton.tsx";
import { Card } from "@mui/material";


function Event() {
  const [event, setEvent] = useState();
  const params = useParams();

  const formatDate = (dateString) => {
    const options = { month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    const date = new Date(dateString);
    return date.toLocaleDateString('ja-JP', options);
  };

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
        <Card style={{padding: '20px'}}>
        <h2>{event?.title}</h2>
        <h3>本文</h3>
        <p>{event?.contents}</p> 
        <p>開始時間：{formatDate(event?.start_at)}</p> 
        <p>終了時間：{formatDate(event?.end_at)}</p> 
        <DeleteTodoButton id={event?.id}/>
        </Card>
      </div>
    </div>
  );
}

export default Event;