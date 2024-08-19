import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Admin2 from "./admin2";

function Admin1() {
  return (
    <Container fluid className="admin-dashboard" style={{ paddingTop: "90px" }}>
      {/* Top Navbar */}

      {/* Main Content */}
      <Container fluid>
        <Row className="mt-4">
          <Col>
            <h1 className="display-4 text-white">Admin Dashboard</h1>
            <p className="lead text-white">
              Manage your users and settings here.
            </p>
          </Col>
        </Row>

        {/* Metrics */}
        <Row className="mt-4">
          <Col md={4}>
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Total Users</h5>
                <p className="card-text display-4">100</p>
              </div>
            </div>
          </Col>
          <Col md={4}>
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Active Users</h5>
                <p className="card-text display-4">75</p>
              </div>
            </div>
          </Col>
          <Col md={4}>
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Pending Requests</h5>
                <p className="card-text display-4">5</p>
              </div>
            </div>
          </Col>
        </Row>

        {/* User Management */}
        <Row className="mt-4">
          <Col>
            <Admin2 />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Admin1;
