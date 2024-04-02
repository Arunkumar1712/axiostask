import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Api } from "./App";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export function AddUser({ datas }) {
  const navigate = useNavigate();
  const [successMessage, setSuccessMessage] = useState(null);

  useEffect(() => {
    if (datas) {
      // Set initial form values if data is passed
    }
  }, [datas]);

  // Validation schema using Yup
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    username: Yup.string().required("Username is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    company: Yup.string().required("Company is required"),
    street: Yup.string().required("Street is required"),
    suite: Yup.string().required("Suite is required"),
    city: Yup.string().required("City is required"),
    zipcode: Yup.string().required("Zipcode is required"),
    phone: Yup.string().required("Phone number is required"),
    website: Yup.string().url("Invalid URL").required("Website is required"),
  });

  const handleSubmit = async (values, { resetForm }) => {
    try {
      // Your API call logic here
      setSuccessMessage("User saved successfully");
      resetForm(); // Reset form fields after successful submission
      navigate("/");
    } catch (error) {
      console.error("Error saving user:", error);
    }
  };

  return (
    <div className="container mx-auto mt-20 gap-4">
      <Formik
        initialValues={{
          name: "",
          username: "",
          email: "",
          company: "",
          street: "",
          suite: "",
          city: "",
          zipcode: "",
          phone: "",
          website: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form>
            <div className="min-w-60 max-w-96 mx-auto px-4 min-w-55 font-bold text-lg py-2 m-5 font-Domine  flex flex-col items-center space-y-2">
              <Field
                type="text"
                name="name"
                placeholder="Name"
                className="block h-12 sm:w-60 md:w-96 rounded-md border-0 py-1.5 pl-2 text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-green-500 sm:text-sm sm:leading-6"
              />
              <ErrorMessage
                name="name"
                component="div"
                className="text-red-500 text-sm mt-1"
              />

              <Field
                type="text"
                name="username"
                placeholder="Username"
                className="block h-12 sm:w-60 md:w-96 rounded-md border-0 py-1.5 pl-2 text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-green-500 sm:text-sm sm:leading-6"
              />
              <ErrorMessage
                name="username"
                component="div"
                className="text-red-500 text-sm mt-1"
              />

              <Field
                type="email"
                name="email"
                placeholder="Email"
                className="block h-12 sm:w-60 md:w-96 rounded-md border-0 py-1.5 pl-2 text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-green-500 sm:text-sm sm:leading-6"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-sm mt-1"
              />

              <Field
                type="text"
                name="company"
                placeholder="Company"
                className="block h-12 sm:w-60 md:w-96 rounded-md border-0 py-1.5 pl-2 text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-green-500 sm:text-sm sm:leading-6"
              />
              <ErrorMessage
                name="company"
                component="div"
                className="text-red-500 text-sm mt-1"
              />

              <Field
                type="text"
                name="street"
                placeholder="Street"
                className="block h-12 sm:w-60 md:w-96 rounded-md border-0 py-1.5 pl-2 text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-green-500 sm:text-sm sm:leading-6"
              />
              <ErrorMessage
                name="street"
                component="div"
                className="text-red-500 text-sm mt-1"
              />

              <Field
                type="text"
                name="suite"
                placeholder="Suite"
                className="block h-12 sm:w-60 md:w-96 rounded-md border-0 py-1.5 pl-2 text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-green-500 sm:text-sm sm:leading-6"
              />
              <ErrorMessage
                name="suite"
                component="div"
                className="text-red-500 text-sm mt-1"
              />

              <Field
                type="text"
                name="city"
                placeholder="City"
                className="block h-12 sm:w-60 md:w-96 rounded-md border-0 py-1.5 pl-2 text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-green-500 sm:text-sm sm:leading-6"
              />
              <ErrorMessage
                name="city"
                component="div"
                className="text-red-500 text-sm mt-1"
              />

              <Field
                type="text"
                name="zipcode"
                placeholder="Zipcode"
                className="block h-12 sm:w-60 md:w-96 rounded-md border-0 py-1.5 pl-2 text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-green-500 sm:text-sm sm:leading-6"
              />
              <ErrorMessage
                name="zipcode"
                component="div"
                className="text-red-500 text-sm mt-1"
              />

              <Field
                type="text"
                name="phone"
                placeholder="Phone"
                className="block h-12 sm:w-60 md:w-96 rounded-md border-0 py-1.5 pl-2 text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-green-500 sm:text-sm sm:leading-6"
              />
              <ErrorMessage
                name="phone"
                component="div"
                className="text-red-500 text-sm mt-1"
              />

              <Field
                type="text"
                name="website"
                placeholder="Website"
                className="block h-12 sm:w-60 md:w-96 rounded-md border-0 py-1.5 pl-2 text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-green-500 sm:text-sm sm:leading-6"
              />
              <ErrorMessage
                name="website"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
              <div >
              <button
                type="submit"
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full"
              >
                Save
              </button>
              <button
                type="button"
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full"
                onClick={() => navigate("/")}
              >
                Cancel
              </button></div>
            </div>
          </Form>
        )}
      </Formik>
      {successMessage && <p className="text-green-500">{successMessage}</p>}
    </div>
  );
}
