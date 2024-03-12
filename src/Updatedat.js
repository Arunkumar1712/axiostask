import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Api } from "./App";

// defining Function to call the update data
export function Updatedat() {
  // getting data from url by using useparams Hooks
  const { userId } = useParams();
  // Initially setting the datas as Null
  const [datas, setDatas] = useState(null);

  // Using useeffect to get data from api by getting data only once
  useEffect(() => {
    const handleFetch = async () => {
      try {
        const response = await axios.get(`${Api}/${userId}`);
        setDatas(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    handleFetch();
  }, [userId]);

  return datas ? (
    <EditUser datas={datas} />
  ) : (
    <h1 className="text-white">"Your Data Is Loading"</h1>
  );
}
function EditUser({ datas }) {
  // setting the required field by using usestate hooks
  const [name, setName] = useState(datas.name || " ");
  const [username, setUsername] = useState(datas.username);
  const [email, setEmail] = useState(datas.email);
  const [company] = useState(datas.company);
  const [street, setStreet] = useState(datas.address?.street);
  const [suite, setSuite] = useState(datas.address?.suite);
  const [city, setCity] = useState(datas.address?.city);
  const [zipcode, setZipcode] = useState(datas.address?.zipcode);
  const [phone, setPhone] = useState(datas.phone);
  const [website, setWebsite] = useState(datas.website);
  const navigate = useNavigate();

  const handleSubmit = async () => {
    // Creating updated data object
    const updatedData = {
      name,
      username,
      email,
      phone,
      website,
      address: {
        street,
        suite,
        city,
        zipcode,
      },
      company,
    };
    // Using Put request to update data
    await axios.put(`${Api}/${datas.id}`, updatedData);
    // Navigating back to home page after saving changes
    navigate("/User");
    // to reload the page automattically
  
  };

  // handle funnction will takes us to Home page
  const handleCancel = () => {
    navigate("/User");
  };

  return (
    <div className="container mx-auto mt-20 gap-4">
      <label className=" text-white w-6/12 mx-auto px-4 font-bold text-lg py-2 m-5 font-Domine font-bold flex flex-start text-lg">
        UserDetails :
      </label>
      <div className="w-6/12 mx-auto px-4 min-w-55 font-bold text-lg py-2 m-5 font-Domine  flex flex-col items-center space-y-2">
        <input
          type="text"
          name="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          autoComplete="given-name"
          placeholder="    Name"
          className="block h-12 sm:w-60 md:w-96 rounded-md border-0 py-1.5 pl-2 text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-green-500 sm:text-sm sm:leading-6"
        />
        <input
          type="text"
          name="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          autoComplete="username"
          placeholder="    Username"
          className="block h-12 sm:w-60 md:w-96 rounded-md border-0 py-1.5 pl-2 text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-green-500 sm:text-sm sm:leading-6"
        />
        <input
          type="email"
          name="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="email"
          placeholder="   Email"
          className="block h-12 sm:w-60 md:w-96 rounded-md border-0 py-1.5 pl-2 text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-green-500 sm:text-sm sm:leading-6"
        />

        <input
          type="text"
          name="Street"
          value={street}
          onChange={(e) => setStreet(e.target.value)}
          autoComplete="street"
          placeholder="    Street"
          className="block h-12 sm:w-60 md:w-96 rounded-md border-0 py-1.5 pl-2 text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-green-500 sm:text-sm sm:leading-6"
        />
        <input
          type="text"
          name="Suite"
          value={suite}
          onChange={(e) => setSuite(e.target.value)}
          autoComplete="suite"
          placeholder="    Suite"
          className="block h-12 sm:w-60 md:w-96 rounded-md border-0 py-1.5 pl-2 text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-green-500 sm:text-sm sm:leading-6"
        />
        <input
          type="text"
          name="City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          autoComplete="city"
          placeholder="    City"
          className="block h-12 sm:w-60 md:w-96 rounded-md border-0 py-1.5 pl-2 text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-green-500 sm:text-sm sm:leading-6"
        />
        <input
          type="text"
          name="Zipcode"
          value={zipcode}
          onChange={(e) => setZipcode(e.target.value)}
          autoComplete="zipcode"
          placeholder="    Zipcode"
          className="block h-12 sm:w-60 md:w-96 rounded-md border-0 py-1.5 pl-2 text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-green-500 sm:text-sm sm:leading-6"
        />
        <input
          type="text"
          name="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="    Phone Number"
          className="block h-12 sm:w-60 md:w-96 rounded-md border-0 py-1.5 pl-2 text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-green-500 sm:text-sm sm:leading-6"
        />
        <input
          type="text"
          name="Website"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
          placeholder="    Website"
          className="block h-12 sm:w-60 md:w-96 rounded-md border-0 py-1.5 pl-2 text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-green-500 sm:text-sm sm:leading-6"
        />
        {/* Buttons for saving and canceling */}
        <div className="flex justify-around space-x-4">
          <button
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full"
            onClick={handleSubmit}
          >
            Save
          </button>
          <button
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full"
            onClick={handleCancel}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
