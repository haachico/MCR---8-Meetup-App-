import { useContext, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Speaker from "../Components/Speaker";
import Modal from "../Components/Modal";

import { MeetupsContext } from "..";
const DetailsPage = () => {
  const { meetupsData, getDate } = useContext(MeetupsContext);
  const [RSPVedEvents, setRSVPedEvents] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userRSVPed, setUserRSVPed] = useState({
    name: "",
    email: ""
  });

  const { id } = useParams();

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setUserRSVPed({
      name: "",
      email: ""
    });
  };

  const selectedMeetup = meetupsData.find((meetup) => meetup.id === id);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUserRSVPed((prevState) => {
      return {
        ...prevState,
        [name]: value
      };
    });
  };

  const handleAddRSVP = (selectedMeetup) => {
    const newRSVP = {
      name: userRSVPed.name,
      email: userRSVPed.email
    };
    setRSVPedEvents((prevState) => [...prevState, selectedMeetup]);
    setUserRSVPed({
      name: "",
      email: ""
    });
    setIsModalOpen(false);
  };

  return (
    <div className="main">
      <button>
        <Link to="/" style={{ color: "white" }}>
          Back
        </Link>
      </button>
      <div className="details--div">
        <div>
          <h2>{selectedMeetup.title}</h2>
          <p>Hosted by : </p>
          <p>
            <strong>{selectedMeetup.hostedBy}</strong>
          </p>
          <img src={selectedMeetup.eventThumbnail} alt={selectedMeetup.title} />
          <h3>Details : </h3>
          <p>{selectedMeetup.eventDescription}</p>
          <h3>Additional Information : </h3>
          <p>
            <strong>Dress code : </strong>{" "}
            {selectedMeetup.additionalInformation.dressCode}
          </p>
          <p>
            <strong>Age Restrictions : </strong>{" "}
            {selectedMeetup.additionalInformation.ageRestrictions}
          </p>
          <h3>Event tags : </h3>
          <div className="event--tags">
            {selectedMeetup.eventTags.map((e) => (
              <p>{e}</p>
            ))}
          </div>
        </div>
        <div>
          <div className="time--card">
            <div>
              <span>
                <i class="fa-solid fa-clock"></i>
              </span>
              <p>
                {getDate(selectedMeetup.eventStartTime)} to{" "}
                {getDate(selectedMeetup.eventEndTime)}
              </p>
            </div>
            <div>
              <span>
                <i class="fa-solid fa-location-dot"></i>
              </span>
              <p>
                {selectedMeetup.location}, {selectedMeetup.address}
              </p>
            </div>
            <div>
              <span>
                <i class="fa-solid fa-indian-rupee-sign"></i>
              </span>
              <p>{selectedMeetup.price}</p>
            </div>
          </div>
          <h3>Speakers : ({selectedMeetup.speakers.length})</h3>
          <div className="list">
            {selectedMeetup.speakers.map(({ name, image, designation }) => (
              <Speaker
                name={name}
                image={image}
                designation={designation}
                key={image}
              />
            ))}
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginTop: "2rem"
            }}
          >
            <button onClick={openModal}>
              {RSPVedEvents.map((meetup) => meetup === selectedMeetup).includes(
                true
              )
                ? "Already RSVPed"
                : "RSVP"}
            </button>
          </div>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div className="RSVP--modal">
          <h3>Complete your RSVP </h3>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            value={userRSVPed.name}
            onChange={(e) => handleChange(e)}
          />
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            value={userRSVPed.email}
            onChange={(e) => handleChange(e)}
          />
          <h5 style={{ color: "gray" }}>
            {selectedMeetup.isPaid
              ? "*You have to make the payment at the venue."
              : ""}
          </h5>
          <button onClick={() => handleAddRSVP(selectedMeetup)}>Submit</button>
        </div>
      </Modal>
    </div>
  );
};

export default DetailsPage;
