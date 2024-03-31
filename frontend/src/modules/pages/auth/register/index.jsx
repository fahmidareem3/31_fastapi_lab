import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import MainLayout from "../../../layout/MainLayout";
import Input from "../../../shared/components/io/Input";
import { Icon } from "@iconify/react";
import axios from "axios";

// Validation schema using Yup
const validationSchema = Yup.object({
  username: Yup.string()
    .required("Username is required")
    .min(5, "Username must be at least 5 characters long"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters long"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm password is required"),
  phoneNumber: Yup.string()
    .required("Phone number is required")
    .matches(/^[0-9]{11}$/, "Phone number must be exactly 11 digits"),
});

const Register = () => {
  const [error, setError] = useState({ field: "", msg: "" });
  const handleSubmit = async (values) => {
    try {
      console.log(values);
      // Make a POST request to your API endpoint
      const response = await axios.post("http://localhost:8000/users/", values);
      console.log(response.data);
      // Handle response data or actions on successful registration here
      alert("Registration successful!");
      setError({ field: "", msg: "" });
    } catch (error) {
      if (error.response.data.detail[0] === "U")
        setError({ field: "username", msg: "Username is already taken" });
      else if (error.response.data.detail[0] === "E")
        setError({ field: "email", msg: "Email is already taken" });
      else if (error.response.data.detail[0] === "P")
        setError({
          field: "phoneNumber",
          msg: "Phone Number is already taken",
        });
      console.error("Registration error:", error);
      // Handle errors or actions on failed registration here
      // alert("Registration failed. Please try again.");
    }
  };
  return (
    <MainLayout>
      <div className="flex h-[100vh] w-[95%] md:w-[100%] mx-auto items-center justify-between">
        <div className="w-[95%] mx-auto md:w-[48%] flex items-center justify-center">
          <Formik
            enableReinitialize={true}
            initialValues={{
              username: "",
              email: "",
              password: "",
              confirmPassword: "",
              phoneNumber: "",
            }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => {
              handleSubmit(values).finally(() => {
                setSubmitting(false);
              });
            }}
          >
            {({ isSubmitting }) => (
              <Form className="w-[100%]">
                <Field
                  as={Input}
                  label="Username"
                  name="username"
                  type="text"
                  placeholder="Enter your username"
                />
                {error?.field === "username" && (
                  <p className="text-red pb-[5px]">{error.msg}</p>
                )}
                <Field
                  as={Input}
                  label="Email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                />
                {error?.field === "email" && (
                  <p className="text-red pb-[5px]">{error.msg}</p>
                )}
                <Field
                  as={Input}
                  label="Password"
                  name="password"
                  type="password"
                  placeholder="Enter your password"
                />
                <Field
                  as={Input}
                  label="Retype Password"
                  name="confirmPassword"
                  type="password"
                  placeholder="Retype your password"
                />
                <Field
                  as={Input}
                  label="Phone Number"
                  name="phoneNumber"
                  type="text" // Changed to text to handle leading zeros
                  placeholder="Enter your phone number"
                />
                {error?.field === "phoneNumber" && (
                  <p className="text-red pb-[5px]">{error.msg}</p>
                )}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-brand text-white flex px-6 py-2 rounded-md mt-5"
                >
                  {isSubmitting ? (
                    <Icon
                      icon="line-md:loading-twotone-loop"
                      fontSize={22}
                      className="mr-2"
                    />
                  ) : (
                    <Icon
                      icon="iconoir:verified-user"
                      fontSize={24}
                      className="mr-2"
                    />
                  )}
                  Sign Up
                </button>
              </Form>
            )}
          </Formik>
        </div>
        <div
          className="bg-primary w-[48%] h-[100vh] hidden justify-center items-center md:flex"
          style={{
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundImage:
              'url("https://images.unsplash.com/photo-1613539246066-78db6ec4ff0f?q=80&w=3386&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
          }}
        ></div>
      </div>
    </MainLayout>
  );
};

export default Register;
