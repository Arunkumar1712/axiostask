import React from "react";
import { Link } from "react-router-dom";
import "./App.css"
export function Navbar() {
  return (
    <section>
      <nav className="bg-blue-950 shadow-md md:flex md:justify-center md:space-x-4">
        <Link to="/User">
          <button className="text-white m-2 p-2 font-black text-lg font-Domine hover:border-b-2 " id="nav" >
            User Details
          </button>
        </Link>
        <Link to="/adduser">
          <button className="text-white m-2 p-2 font-black text-lg font-Domine hover:border-b-2 hover:border-gray-400"  id="nav">
            Add User
          </button>
        </Link>
      </nav>
    </section>
  );
}
