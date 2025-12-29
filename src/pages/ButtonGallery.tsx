import { Button } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";

const ButtonGallery = () => {
  return (
    <Container className="py-5">
      <h1 className="mb-5">Button Components Gallery</h1>

      {/* Primary Buttons */}
      <section className="mb-5">
        <h2 className="mb-4">Primary Buttons (Blue/Purple)</h2>
        <Row className="mb-4">
          <Col md={12}>
            <h4 className="mb-3">Solid Primary Buttons</h4>
            <div className="d-flex flex-wrap gap-3 mb-3">
              <Button variant="primary">Button CTA</Button>
              <Button variant="primary" disabled>
                Button CTA
              </Button>
              <Button variant="primary" className="btn-ghost">
                Button CTA
              </Button>
              <Button variant="primary" className="btn-ghost" disabled>
                Button CTA
              </Button>
            </div>
          </Col>
        </Row>

        <Row className="mb-4">
          <Col md={12}>
            <h4 className="mb-3">Primary with Icons</h4>
            <div className="d-flex flex-wrap gap-3 mb-3">
              <Button variant="primary">
                <span className="btn-icon btn-icon-leading">●</span>
                Button CTA
              </Button>
              <Button variant="primary">
                Button CTA
                <span className="btn-icon btn-icon-trailing">●</span>
              </Button>
              <Button variant="primary" className="btn-ghost">
                <span className="btn-icon btn-icon-leading">●</span>
                Button CTA
              </Button>
              <Button variant="primary" className="btn-ghost">
                Button CTA
                <span className="btn-icon btn-icon-trailing">●</span>
              </Button>
            </div>
          </Col>
        </Row>

        <Row className="mb-4">
          <Col md={12}>
            <h4 className="mb-3">Circular Icon Buttons</h4>
            <div className="d-flex flex-wrap gap-3 mb-3">
              <Button variant="primary" className="btn-circle">
                <span className="btn-icon">●</span>
              </Button>
              <Button variant="primary" className="btn-circle btn-sm">
                <span className="btn-icon">●</span>
              </Button>
              <Button variant="primary" className="btn-circle btn-lg">
                <span className="btn-icon">●</span>
              </Button>
              <Button variant="primary" className="btn-circle btn-ghost">
                <span className="btn-icon">○</span>
              </Button>
            </div>
          </Col>
        </Row>
      </section>

      {/* Success Buttons */}
      <section className="mb-5">
        <h2 className="mb-4">Success Buttons (Green)</h2>
        <Row className="mb-4">
          <Col md={12}>
            <h4 className="mb-3">Solid Success Buttons</h4>
            <div className="d-flex flex-wrap gap-3 mb-3">
              <Button variant="success">Button CTA</Button>
              <Button variant="success" disabled>
                Button CTA
              </Button>
              <Button variant="success" className="btn-ghost">
                Button CTA
              </Button>
              <Button variant="success" className="btn-ghost" disabled>
                Button CTA
              </Button>
            </div>
          </Col>
        </Row>

        <Row className="mb-4">
          <Col md={12}>
            <h4 className="mb-3">Success with Icons</h4>
            <div className="d-flex flex-wrap gap-3 mb-3">
              <Button variant="success">
                <span className="btn-icon btn-icon-leading">●</span>
                Button CTA
              </Button>
              <Button variant="success">
                Button CTA
                <span className="btn-icon btn-icon-trailing">+</span>
              </Button>
              <Button variant="success" className="btn-ghost">
                <span className="btn-icon btn-icon-leading">●</span>
                Button CTA
              </Button>
              <Button variant="success" className="btn-ghost">
                Button CTA
                <span className="btn-icon btn-icon-trailing">+</span>
              </Button>
            </div>
          </Col>
        </Row>

        <Row className="mb-4">
          <Col md={12}>
            <h4 className="mb-3">Circular Success Buttons</h4>
            <div className="d-flex flex-wrap gap-3 mb-3">
              <Button variant="success" className="btn-circle">
                <span className="btn-icon">●</span>
              </Button>
              <Button variant="success" className="btn-circle btn-sm">
                <span className="btn-icon">●</span>
              </Button>
              <Button variant="success" className="btn-circle btn-lg">
                <span className="btn-icon">●</span>
              </Button>
              <Button variant="success" className="btn-circle btn-ghost">
                <span className="btn-icon">○</span>
              </Button>
            </div>
          </Col>
        </Row>
      </section>

      {/* Danger Buttons */}
      <section className="mb-5">
        <h2 className="mb-4">Danger Buttons (Red)</h2>
        <Row className="mb-4">
          <Col md={12}>
            <h4 className="mb-3">Solid Danger Buttons</h4>
            <div className="d-flex flex-wrap gap-3 mb-3">
              <Button variant="danger">Button CTA</Button>
              <Button variant="danger" disabled>
                Button CTA
              </Button>
              <Button variant="danger" className="btn-ghost">
                Button CTA
              </Button>
              <Button variant="danger" className="btn-ghost" disabled>
                Button CTA
              </Button>
            </div>
          </Col>
        </Row>

        <Row className="mb-4">
          <Col md={12}>
            <h4 className="mb-3">Danger with Icons</h4>
            <div className="d-flex flex-wrap gap-3 mb-3">
              <Button variant="danger">
                <span className="btn-icon btn-icon-leading">●</span>
                Button CTA
              </Button>
              <Button variant="danger">
                Button CTA
                <span className="btn-icon btn-icon-trailing">+</span>
              </Button>
              <Button variant="danger" className="btn-ghost">
                <span className="btn-icon btn-icon-leading">●</span>
                Button CTA
              </Button>
              <Button variant="danger" className="btn-ghost">
                Button CTA
                <span className="btn-icon btn-icon-trailing">+</span>
              </Button>
            </div>
          </Col>
        </Row>

        <Row className="mb-4">
          <Col md={12}>
            <h4 className="mb-3">Circular Danger Buttons</h4>
            <div className="d-flex flex-wrap gap-3 mb-3">
              <Button variant="danger" className="btn-circle">
                <span className="btn-icon">●</span>
              </Button>
              <Button variant="danger" className="btn-circle btn-sm">
                <span className="btn-icon">●</span>
              </Button>
              <Button variant="danger" className="btn-circle btn-lg">
                <span className="btn-icon">●</span>
              </Button>
              <Button variant="danger" className="btn-circle btn-ghost">
                <span className="btn-icon">○</span>
              </Button>
            </div>
          </Col>
        </Row>
      </section>

      {/* Secondary Buttons */}
      <section className="mb-5">
        <h2 className="mb-4">Secondary Buttons (Teal)</h2>
        <Row className="mb-4">
          <Col md={12}>
            <h4 className="mb-3">Solid Secondary Buttons</h4>
            <div className="d-flex flex-wrap gap-3 mb-3">
              <Button variant="secondary">Button CTA</Button>
              <Button variant="secondary" disabled>
                Button CTA
              </Button>
              <Button variant="secondary" className="btn-ghost">
                Button CTA
              </Button>
              <Button variant="secondary" className="btn-ghost" disabled>
                Button CTA
              </Button>
            </div>
          </Col>
        </Row>
      </section>

      {/* Button Sizes */}
      <section className="mb-5">
        <h2 className="mb-4">Button Sizes</h2>
        <Row className="mb-4">
          <Col md={12}>
            <div className="d-flex flex-wrap gap-3 align-items-center mb-3">
              <Button variant="primary" size="sm">
                Small Button
              </Button>
              <Button variant="primary">Default Button</Button>
              <Button variant="primary" size="lg">
                Large Button
              </Button>
            </div>
          </Col>
        </Row>
      </section>
    </Container>
  );
};

export default ButtonGallery;

