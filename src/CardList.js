import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Api } from "./App";
import "./App.css"

export function CardList({ data }) {
  const navigate = useNavigate();

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${Api}/${id}`);
      navigate("/", { replace: true });
      window.location.reload();
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const handleEdit = (datas) => {
    navigate("/edituser", { state: { datas } });
  };

  return (
    <div className="card flex flex-wrap justify-around mx-auto m-4">
      {data ? (
        data.map((item) => (
          <Card key={item.id} item={item} onDelete={() => handleDelete(item.id)} onEdit={handleEdit} />
        ))
      ) : (
        // Display a loading animation while data is being fetched
        <div className="loader"></div>
      )}
    </div>
  );
}

function Card({ item, onDelete, onEdit }) {
  const navigate = useNavigate();
  return (
    <div className="flex  justify-around">
      <div className="m-5 p-4 min-w-60 max-w-80 min-h-80 max-h-full bg-grey-400 gap-2 rounded border shadow-md shadow-zinc-600 text-center flex flex-col justify-evenly items-center" id="card">
        <img
          className="h-40 rounded-full filter grayscale"
          src="https://img.freepik.com/premium-vector/user-profile-icon-flat-style-member-avatar-vector-illustration-isolated-background-human-permission-sign-business-concept_157943-15752.jpg?size=338&ext=jpg&ga=GA1.1.1395880969.1710028800&semt=ais"
          alt="img"
        ></img>
        <h1 className="font-bold text-lg font-Domine">{item.name}</h1>
        <p className="font-Domine gap-1">
          <span className="text-grey-500">UserName:</span>
          <span>{item.username}</span>
          <br />
          <span>Email: </span>
          <span>{item.email}</span>
          <br />
          <span>Website: </span>
          <span>
            <a href={item.website} className="text-blue-400 ">
              {item.website}
            </a>
          </span>
          <br />
          <span>Company:</span>
          <span> {item.company.name}</span>
          <br />
        </p>
        <p className="font-Domine gap-1">
          <span>City: {item.address.city}</span>
          <br />
          <h2 className="text-lg">Address:</h2>
          <span>
            {item.address.street}, {item.address.suite}, {item.address.city},{" "}
            {item.address.zipcode}
          </span>
          <br />
          <span>Phone: {item.phone}</span>
        </p>
        <div className="flex justify-around space-x-4">
          <button className="bg-blue-500 hover:bg-green-600 text-white px-4 py-2 rounded-full" onClick={() => navigate(`/updateuser/${item.id}`)}>
            Edit
          </button>
          <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full" onClick={onDelete}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
