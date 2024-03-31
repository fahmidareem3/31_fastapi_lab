import React from "react";
import { Route } from "react-router-dom";

const Home = React.lazy(() => import("../modules/pages/home"));
const Register = React.lazy(() => import("../modules/pages/auth/register"));
const Login = React.lazy(() => import("../modules/pages/auth/login"));
const TaskManager = React.lazy(() => import("../modules/pages/taskManager"));

const home = {
  path: "/",
  exact: true,
  name: "Home component",
  component: <Home />,
  roles: ["User"],
  route: Route,
};

const login = {
  path: "/login",
  exact: true,
  name: "Login component",
  component: <Login />,
  roles: ["User"],
  route: Route,
};

const register = {
  path: "/register",
  exact: true,
  name: "Register component",
  component: <Register />,
  roles: ["User"],
  route: Route,
};

const taskManager = {
  path: "/taskmanager",
  exact: true,
  name: "Task Manager component",
  component: <TaskManager />,
  roles: ["User"],
  route: Route,
};
export const appRoutes = [home, login, register, taskManager];
