import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { axiosInstance } from "../utils/axios.js";
import * as React from 'react';
import Button from '@mui/material/Button';

function Event() {
    const [event, setEvent] = useState();
    const params = useParams();

    useEffect(() => {
        const f = async () => {
          const res = await axiosInstance.get(`/events/${params.id}`);
          setEvent(res.data);
        };
        f();
      }, [ ]);
      return (
        <div style={{ margin: "auto", width: "1000px" }}>
          <h1>イベント詳細画面</h1>
          <div>
            <Link to="/">TOP</Link>
          </div>
          <div>
            <Link to="/create"><Button variant="contained">
            イベント作成画面
            </Button></Link>
          </div>
          <div>
            <Link to="/events"><Button variant="contained">
            イベント一覧画面
            </Button></Link>
          </div>     
            <h2>{event?.title}</h2>
            <h3>本文</h3>
            <p>{event?.contents}</p> 
        </div>
      );
}

export default Event;