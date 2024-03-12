import React, { useState, useEffect } from "react";
import axios from "axios";
import { Route, Routes} from "react-router-dom";
import { Navbar } from "./Navbar";
import { CardList } from "./CardList";
import { AddUser } from "./AddUser";
import { Updatedat } from "./Updatedat";

export const Api = "https://65b264d59bfb12f6eafda3a9.mockapi.io/products";

export default function App() {
  // creating states for storing data from api fetch using axios
  const [data, setData] = useState([]);
// using useffect hook to call the handlefetch function for only one time
  useEffect(() => {
    handleFetch();
  }, []);

  const handleFetch = async () => {
    try {
      const response = await axios.get(Api);
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="text-center">
      <Navbar />
      <Routes>
        <Route path="/" element={<CardList data={data} />} />
        <Route path="/User" element={<CardList data={data} />} />
        <Route path="/AddUser" element={<AddUser />} />
        <Route path="updateuser/:userId" element={<Updatedat/>} /> 
      </Routes>
    </div>
  );
}


