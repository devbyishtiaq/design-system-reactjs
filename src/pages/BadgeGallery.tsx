import { Container, Row, Col, Badge } from "react-bootstrap";

const BadgeGallery = () => {
    return (
        <Container className="py-2">
            <h1 className="mb-5">Badges</h1>

            <section className="mb-5">
                <h2 className="mb-4">Contextual Variations</h2>
                <Row className="mb-4">
                    <Col md={12}>
                        <div className="d-flex flex-wrap gap-2">
                            <Badge bg="primary">Primary</Badge>
                            <Badge bg="secondary">Secondary</Badge>
                            <Badge bg="success">Success</Badge>
                            <Badge bg="danger">Danger</Badge>
                            <Badge bg="warning" text="dark">
                                Warning
                            </Badge>
                            <Badge bg="info">Info</Badge>
                            <Badge bg="light" text="dark">
                                Light
                            </Badge>
                            <Badge bg="dark">Dark</Badge>
                        </div>
                    </Col>
                </Row>
            </section>

            <section className="mb-5">
                <h2 className="mb-4">Pill Badges</h2>
                <Row className="mb-4">
                    <Col md={12}>
                        <div className="d-flex flex-wrap gap-2">
                            <Badge pill bg="primary">
                                Primary
                            </Badge>
                            <Badge pill bg="secondary">
                                Secondary
                            </Badge>
                            <Badge pill bg="success">
                                Success
                            </Badge>
                            <Badge pill bg="danger">
                                Danger
                            </Badge>
                            <Badge pill bg="warning" text="dark">
                                Warning
                            </Badge>
                            <Badge pill bg="info">
                                Info
                            </Badge>
                            <Badge pill bg="light" text="dark">
                                Light
                            </Badge>
                            <Badge pill bg="dark">
                                Dark
                            </Badge>
                        </div>
                    </Col>
                </Row>
            </section>

            <section className="mb-5">
                <h2 className="mb-4">Sizing</h2>
                <Row>
                    <Col md={12}>
                        <h1>Example Heading <Badge bg="secondary">New</Badge></h1>
                        <h2>Example Heading <Badge bg="secondary">New</Badge></h2>
                        <h3>Example Heading <Badge bg="secondary">New</Badge></h3>
                        <h4>Example Heading <Badge bg="secondary">New</Badge></h4>
                        <h5>Example Heading <Badge bg="secondary">New</Badge></h5>
                        <h6>Example Heading <Badge bg="secondary">New</Badge></h6>
                    </Col>
                </Row>
            </section>
        </Container>
    );
};

export default BadgeGallery;
