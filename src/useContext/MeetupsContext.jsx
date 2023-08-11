import { createContext, useState } from "react";
import { data } from "../db/data";

export const MeetupsContext = createContext();

export const MeetupsContextProvider = ({ children }) => {
  const [meetupsData, setMeetupsData] = useState(data.meetups);
  const [backupData, setBackupData] = useState(data.meetups);

  const getDate = (dateStr) => {
    const dateTime = new Date(dateStr);

    const dayOfWeek = dateTime.toLocaleDateString("en-US", { weekday: "long" });

    const date = dateTime.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });

    const time = dateTime.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "numeric"
    });

    return `${dayOfWeek} ${date} at ${time}`;
  };
  return (
    <div>
      <MeetupsContext.Provider
        value={{
          meetupsData,
          setMeetupsData,
          backupData,
          setBackupData,
          getDate
        }}
      >
        {children}
      </MeetupsContext.Provider>
    </div>
  );
};
