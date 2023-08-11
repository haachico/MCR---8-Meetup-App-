import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MeetupsContext } from "..";
const Header = () => {
  const { setMeetupsData, backupData } = useContext(MeetupsContext);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    setMeetupsData(
      backupData.filter(
        (meetup) =>
          meetup.title.toLowerCase().includes(searchText.toLowerCase()) ||
          meetup.eventTags
            .map((e) => e.toLowerCase().includes(searchText.toLowerCase()))
            .includes(true)
      )
    );
  }, [searchText]);

  console.log(searchText);
  return (
    <div className="header">
      <h3>Meet ups</h3>
      <Link to="/">
        <input
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Search with title or event tags"
        />
      </Link>
    </div>
  );
};

export default Header;
