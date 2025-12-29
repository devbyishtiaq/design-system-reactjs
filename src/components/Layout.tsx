import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";

interface LayoutProps {
  children: React.ReactNode;
  activePage: string;
  onNavigate: (page: string) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, activePage, onNavigate }) => {
  const navItems = [
    { id: "buttons", label: "Buttons" },
    { id: "alerts", label: "Alerts" },
    { id: "badges", label: "Badges" },
    { id: "cards", label: "Cards" },
    { id: "inputs", label: "Inputs" },
    { id: "avatars", label: "Avatars" },
  ];

  return (
    <Container fluid className="vh-100 overflow-hidden">
      <Row className="h-100">
        {/* Sidebar */}
        <Col md={3} lg={2} className="bg-light border-end h-100 p-0 d-none d-md-block">
          <div className="p-4 border-bottom bg-white">
            <h5 className="m-0 fw-bold text-primary">Design System</h5>
            <small className="text-muted">v1.0.0</small>
          </div>
          <Nav className="flex-column p-3">
            {navItems.map((item) => (
              <Nav.Link
                key={item.id}
                onClick={() => onNavigate(item.id)}
                active={activePage === item.id}
                className={`mb-1 rounded px-3 py-2 ${
                  activePage === item.id 
                    ? "bg-primary text-white shadow-sm" 
                    : "text-secondary hover-bg-light"
                }`}
                style={{ cursor: "pointer" }}
              >
                {item.label}
              </Nav.Link>
            ))}
          </Nav>
        </Col>

        {/* Main Content */}
        <Col md={9} lg={10} className="h-100 overflow-auto bg-white p-0">
          <div className="p-4 p-lg-5">
            {children}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Layout;
