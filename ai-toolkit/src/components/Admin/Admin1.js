import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import Admin2 from "./admin2";
import { Link } from "react-router-dom";
import "./admin.css";

function Admin1() {
  const [metrics, setMetrics] = useState({
    totalUsers: 0,
    newUsersThisWeek: 0,
    pendingRequests: 0,
  });

  useEffect(() => {
    fetchMetrics();
  }, []);

  const fetchMetrics = async () => {
    try {
      const response = await axios.get("http://localhost:3001/admin/metrics");
      setMetrics(response.data);
    } catch (error) {
      console.error("Error fetching metrics:", error);
    }
  };

  return (
    <Container fluid className="admin-dashboard py-5 bg-gray-900">
      <Container>
        <Row className="mb-5 text-center">
          <Col>
            <h1 className="admin-heading display-4 text-white animate__animated animate__fadeInDown mt-4">
              Admin Dashboard
            </h1>
            <p className="admin-subheading lead text-white animate__animated animate__fadeInUp">
              Manage your users and settings here.
            </p>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md={4}>
            <div className="admin-card shadow-lg animate__animated animate__zoomIn">
              <div className="admin-card-body text-center">
                <h5 className="admin-title stylish-title">Total Users</h5>
                <p className="admin-text stylish-text text-primary">
                  {metrics.totalUsers}
                </p>
              </div>
            </div>
          </Col>

          <Col md={4}>
            <div className="admin-card shadow-lg animate__animated animate__zoomIn animate__delay-1s">
              <div className="admin-card-body text-center">
                <h5 className="admin-title stylish-title">
                  User Messages Section
                </h5>
                <Link to="/DisplayMessages">
                  <button className="admin-button btn btn-primary mt-3 stylish-button">
                    View Messages
                  </button>
                </Link>
              </div>
            </div>
          </Col>

          <Col md={4}>
            <div className="admin-card shadow-lg animate__animated animate__zoomIn animate__delay-2s">
              <div className="admin-card-body text-center">
                <h5 className="admin-title stylish-title">Pending Requests</h5>
                <p className="admin-text stylish-text text-warning">
                  {metrics.pendingRequests}
                </p>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col>
            <Admin2 />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Admin1;
