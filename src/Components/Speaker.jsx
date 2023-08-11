const Speaker = ({ name, image, designation }) => {
  return (
    <div className="speaker--card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>{designation}</p>
    </div>
  );
};

export default Speaker;
