import { Form, Formik } from "formik";
import React, { useState } from "react";
import MainLayout from "../../../layout/MainLayout";
import Input from "../../../shared/components/io/Input";
import { Icon } from "@iconify/react";

import { useNavigate } from "react-router-dom";
const Login = () => {
  const [toast, setToast] = useState("");
  const navigate = useNavigate();
  return (
    <MainLayout>
      <div className="flex h-[100vh] w-[95%] md:w-[100%] mx-auto items-center justify-between">
        <div className="w-[95%] mx-auto md:w-[48%] flex items-center justify-center">
          <Formik
            // enableReinitialize={true}
            initialValues={{ name: "", password: "" }}
            onSubmit={(values, { setSubmitting }) => {
              const { name, password } = values;
              // setTimeout(() => {
              if (name === "Admin" && password === "1234") {
                setToast("Success");
                navigate("/");
              } else {
                setToast("Failure");
              }
              setSubmitting(false);
              // }, 400);
            }}
          >
            {({ isSubmitting }) => (
              <Form className="w-[100%]">
                {/* <Flex> */}
                <Input
                  label="Username"
                  name="name"
                  type="text"
                  placeholder="Enter your username"
                />
                <Input
                  label="Password"
                  name="password"
                  type="password"
                  placeholder="Enter your password"
                />

                {/* </Flex> */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={
                    "bg-brand text-white flex px-6 py-2 rounded-md mt-5"
                  }
                >
                  {isSubmitting ? (
                    <Icon
                      icon={"line-md:loading-twotone-loop"}
                      fontSize={22}
                      className={"mr-2"}
                    />
                  ) : (
                    <Icon
                      icon="iconoir:verified-user"
                      fontSize={24}
                      className={"mr-2"}
                    />
                  )}
                  Login
                </button>
                {toast ? <p>{toast}</p> : ""}
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
              'url("https://images.unsplash.com/photo-1570949144026-8f8141748760?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjN8fGZsb3dlcnN8ZW58MHx8MHx8fDA%3D")',
          }}
        ></div>
      </div>
    </MainLayout>
  );
};

export default Login;
