import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { axiosInstance } from "../utils/axios.js";

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
          <h1>ブログ詳細画面</h1>
          <div>
            <Link to="/">TOP</Link>
          </div>
          <div>
            <Link to="/create">記事作成画面</Link>
          </div>
          <div>
            <Link to="/events">記事一覧画面</Link>
          </div>     
            <h2>{event?.title}</h2>
            <h3>本文</h3>
            <p>{event?.contents}</p> 
        </div>
      );
}

export default Event;