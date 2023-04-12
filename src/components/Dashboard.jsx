import React from "react";
import { Button } from "react-bootstrap";
import { useUserAuth } from "../context/UserAuthContext";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const { logOut } = useUserAuth();
  const navigate = useNavigate();

  const handleLogOut = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <h1 className="p-4 box mt-3 text-center">Hello World</h1>

      <div className="d-grid gap-2">
        <Button varient="primary" onClick={handleLogOut}>Log Out</Button>
      </div>
    </>
  );
};

export default Dashboard;
