import Map from "./components/Map";
import { useState, useEffect } from "react";

function App() {
  const [eventData, setEventData] = useState([]);
  // const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchEvents = async () => {
      // setLoading(true);
      const res = await fetch(
        "https://eonet.sci.gsfc.nasa.gov/api/v2.1/events"
      );
      const { events } = await res.json();
      console.log(events, "events");

      setEventData(events);
      // setLoading(false);
    };

    fetchEvents();
  }, []);

  return (
    // <div>{!loading ? <Map eventData={eventData} /> : <h1> Loading</h1>}</div>
    <div>{eventData ? <Map eventData={eventData} /> : <div>Loading</div>}</div>
  );
}

export default App;
