import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { axiosInstance } from "../utils/axios.js";
import * as React from 'react';
import Button from '@mui/material/Button';
import Header from "../components/header.tsx";

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
        <div style={{ margin: "auto", width: "1000px" }}>
          <Header title="イベント詳細"/>    
            <h2>{event?.title}</h2>
            <h3>本文</h3>
            <p>{event?.contents}</p> 
        </div>
      );
}

export default Event;