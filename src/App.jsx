import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import NotFoundError from "./pages/Errrors/Not-found";
import Calendar from "./pages/Calendar";
import Task from "./pages/Task";
import Users from "./pages/Users";
import Constituency from "./pages/Constituency";
import Levels from "./pages/Levels";
import LegislatorProfile from "./pages/Legislator-Profile";
import ConstituentsChat from "./pages/Constituents-chat";
import User from "./pages/User";
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/login";
import ForgetPassword from "./pages/Auth/Forgot-password";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgetPassword />} />
      {/*  <Route path="/login" element={<Login />} />
      <Route path="/verify/:email" element={<Verification />} />
      <Route path="/forgot-password" element={<Forget />} />
      <Route path="/Email-verified/:id" element={<SuccessVerify />} />
      <Route path="/password-reset" element={<ResetSuccessful />} />
      <Route path="/reset-password/:id/:token" element={<ResetPassword />} /> */}
      {/* Main routes */}
      <Route path="/user" element={<Layout />}>
        <Route path="home" element={<Dashboard />} />
        <Route path="" element={<Navigate to="/user/home" />} />
        <Route path="profile" element={<Profile />} />
        <Route path="calendar" element={<Calendar />} />
        <Route path="constituents-chat" element={<ConstituentsChat />} />
        <Route path="task" element={<Task />} />
        <Route path="users" element={<Users />} />
        <Route path="user" element={<User />} />

        <Route path="constituency" element={<Constituency />} />
        <Route path="Levels" element={<Levels />} />
        <Route path="legislator-profile" element={<LegislatorProfile />} />
        {/* 
        <Route path="Settings" element={<Settings />} /> */}
      </Route>
      {/* Error routes */}
      {/* // <Route path="/500" element={<GeneralError />} />
      // <Route path="/404" element={<NotFoundError />} />
      // <Route path="/503" element={<MaintenanceError />} /> */}
      {/* Fallback 404 route */}
      <Route path="*" element={<NotFoundError />} />
    </Routes>
  );
};

export default App;
