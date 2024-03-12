import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Api } from "./App";

//Defining Adduser function to add new data
export function AddUser({ datas }) {
  const navigate = useNavigate();
  // Using use state to initially setting value as empty string and updating using setstate
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [street, setStreet] = useState("");
  const [suite, setSuite] = useState("");
  const [city, setCity] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState("");

  // Passing datas to handle subit function by passing datas 
  useEffect(() => {
    if (datas) {
      const { name, username, email, address, company, website, phone } = datas;
      setName(name);
      setUsername(username);
      setEmail(email);
      setCompany(company?.name);
      setStreet(address?.street);
      setSuite(address?.suite);
      setCity(address?.city);
      setZipcode(address?.zipcode);
      setPhone(phone);
      setWebsite(website);
    }
  }, [datas]);

  //Handle submit will call Put request to add new datas to Api
  const handleSubmit = async () => {
    try {
      let response;
      if (datas) {
        const { id } = datas;
        response = await axios.put(`${Api}/${id}`, {
          name,
          username,
          email,
          address: {
            street,
            suite,
            city,
            zipcode,
          },
          phone,
          website,
          company: {
            name: company
          }
        });
      } else {
        response = await axios.post(Api, {
          name,
          username,
          email,
          address: {
            street,
            suite,
            city,
            zipcode,
          },
          phone,
          website,
          company: {
            name: company
          }
        });
      }
      console.log("User saved successfully:", response.data);
      resetForm();
      navigate("/");
   
    } catch (error) {
      console.error("Error saving user:", error);
    }
  };

  const resetForm = () => {
    setName("");
    setUsername("");
    setEmail("");
    setStreet("");
    setSuite("");
    setCity("");
    setZipcode("");
    setPhone("");
    setWebsite("");
    setCompany("");
  };

  const handleCancel = () => {
    resetForm();
  };

  return (
    <div className="container   mx-auto mt-20 gap-4">
      <label className=" text-white w-6/12 mx-auto px-4 font-bold text-lg py-2 m-5 font-Domine font-bold flex flex-start text-lg">
        UserDetails :
      </label>
      <div className="  min-w-60  max-w-96 mx-auto px-4 min-w-55 font-bold text-lg py-2 m-5 font-Domine  flex flex-col items-center space-y-2">
        <input
          type="text"
          name="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          autoComplete="given-name"
          placeholder="    Name"
          className="block h-12 sm:w-60 md:w-96 rounded-md border-0 py-1.5 pl-2 text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-green-500 sm:text-sm sm:leading-6" />
        <input
  type="text"
  name="Username"
  value={username}
  onChange={(e) => setUsername(e.target.value)}
  autoComplete="username"
  placeholder="Username"
  className="block h-12 sm:w-60 md:w-96 rounded-md border-0 py-1.5 pl-2 text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-green-500 sm:text-sm sm:leading-6"
/>
        <input
          type="email"
          name="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="email"
          placeholder="   Email"
          className="block h-12 sm:w-60 md:w-96 rounded-md border-0 py-1.5 pl-2 text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-green-500 sm:text-sm sm:leading-6" />
        <input
          type="company"
          name="company"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          autoComplete="company"
          placeholder="   company"
          className="block h-12 sm:w-60 md:w-96 rounded-md border-0 py-1.5 pl-2 text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-green-500 sm:text-sm sm:leading-6" />
        <input
          type="text"
          name="Street"
          value={street}
          onChange={(e) => setStreet(e.target.value)}
          autoComplete="street"
          placeholder="    Street"
          className="block h-12 sm:w-60 md:w-96 rounded-md border-0 py-1.5 pl-2 text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-green-500 sm:text-sm sm:leading-6" />
        <input
          type="text"
          name="Suite"
          value={suite}
          onChange={(e) => setSuite(e.target.value)}
          autoComplete="suite"
          placeholder="    Suite"
          className="block h-12 sm:w-60 md:w-96 rounded-md border-0 py-1.5 pl-2 text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-green-500 sm:text-sm sm:leading-6" />
        <input
          type="text"
          name="City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          autoComplete="city"
          placeholder="    City"
          className="block h-12 sm:w-60 md:w-96 rounded-md border-0 py-1.5 pl-2 text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-green-500 sm:text-sm sm:leading-6" />
        <input
          type="text"
          name="Zipcode"
          value={zipcode}
          onChange={(e) => setZipcode(e.target.value)}
          autoComplete="zipcode"
          placeholder="    Zipcode"
          className="block h-12 sm:w-60 md:w-96 rounded-md border-0 py-1.5 pl-2 text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-green-500 sm:text-sm sm:leading-6" />
        <input
          type="text"
          name="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="    Phone Number"
          className="block h-12 sm:w-60 md:w-96 rounded-md border-0 py-1.5 pl-2 text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-green-500 sm:text-sm sm:leading-6" />
        <input
          type="text"
          name="Website"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
          placeholder="    Website"
          className="block h-12 sm:w-60 md:w-96 rounded-md border-0 py-1.5 pl-2 text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-green-500 sm:text-sm sm:leading-6" />
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
