const Meetup = ({ image, title, startTime, eventType, getDate }) => {
  return (
    <div className="meetup">
      <img src={image} alt={title} />
      <h4>{title}</h4>
      <p>{getDate(startTime)}</p>
      <h5>{eventType}</h5>
    </div>
  );
};

export default Meetup;
