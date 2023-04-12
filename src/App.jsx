import React from "react";
import Dashboard from "./components/Dashboard";
import { Col, Container, Row } from "react-bootstrap";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import { Route, Routes } from "react-router-dom";
import Router from "./components/Router";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

function App() {
  return (
    <Container style={{width: '400px'}}>
      <Row>
        <Col>
          <UserAuthContextProvider>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/dashboard" element={
                <Router>
                  <Dashboard />
                </Router>
              } />
            </Routes>
          </UserAuthContextProvider>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
