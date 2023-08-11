import "./styles.css";
import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Header from "./Components/Header";
import DetailsPage from "./Pages/DetailsPage";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="meetup/:id" element={<DetailsPage />} />
      </Routes>
    </div>
  );
}
