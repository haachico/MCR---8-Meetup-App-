import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { MeetupsContext } from "..";
import Meetup from "../Components/Meetup";

const Home = () => {
  const { meetupsData, getDate } = useContext(MeetupsContext);
  const [selectedType, setSelectedType] = useState("BOTH");

  const meetupTypeData =
    selectedType === "ONLINE"
      ? meetupsData.filter((meetup) => meetup.eventType === "Online")
      : selectedType === "OFFLINE"
      ? meetupsData.filter((meetup) => meetup.eventType === "Offline")
      : meetupsData;

  return (
    <div className="main">
      <div className="meetups--heading">
        <h2>Meetup events</h2>
        <select onChange={(e) => setSelectedType(e.target.value)}>
          <option>Select event type</option>
          <option value="ONLINE">Online</option>
          <option value="OFFLINE">Offline</option>
          <option value="BOTH">Both</option>
        </select>
      </div>
      <div>
        <div className="list">
          {meetupTypeData.map((meetup) => (
            <Link key={meetup.id} to={`meetup/${meetup.id}`}>
              <Meetup
                image={meetup.eventThumbnail}
                title={meetup.title}
                startTime={meetup.eventStartTime}
                eventType={meetup.eventType}
                getDate={getDate}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
