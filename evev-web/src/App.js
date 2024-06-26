
import Header from "./components/header.tsx";

import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!

function App() {
  return (
    <div>
      <Header title="EVEV"/>
      <div style={{ margin: "auto", width: "1000px" }}>    <FullCalendar
      plugins={[ dayGridPlugin ]}
      initialView="dayGridMonth"
    /></div>

    </div>
  )
}

export default App;