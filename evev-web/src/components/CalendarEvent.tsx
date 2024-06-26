import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { axiosInstance } from "../utils/axios.js";
import React from "react";

function CalenderEvents() {
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
    }, []); // 第2引数の空配列はマウント時に1度だけ実行されることを示します

    return (
        <div>
            aaa
        </div>
    );
}

export default CalenderEvents;
