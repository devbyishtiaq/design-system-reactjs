import { Container, Row, Col, Alert } from "react-bootstrap";

const AlertGallery = () => {
    return (
        <Container className="py-2">
            <h1 className="mb-5">Alerts</h1>

            {/* Standard Alerts */}
            <section className="mb-5">
                <h2 className="mb-4">Standard Alerts</h2>
                <Row className="mb-4">
                    <Col md={12}>
                        <div className="d-flex flex-column gap-3">
                            <Alert variant="primary">
                                <Alert.Heading>Primary Alert</Alert.Heading>
                                This is a primary alert—check it out!
                            </Alert>
                            <Alert variant="secondary">
                                This is a secondary alert—check it out!
                            </Alert>
                            <Alert variant="success">
                                <Alert.Heading>Success!</Alert.Heading>
                                Your changes have been saved successfully.
                            </Alert>
                            <Alert variant="danger">
                                <Alert.Heading>Error Encountered</Alert.Heading>
                                Something went wrong. Please try again later.
                            </Alert>
                            <Alert variant="warning">
                                <Alert.Heading>Warning</Alert.Heading>
                                Please check your inputs before proceeding.
                            </Alert>
                            <Alert variant="info">
                                This is an info alert—check it out!
                            </Alert>
                            <Alert variant="light">
                                This is a light alert—check it out!
                            </Alert>
                            <Alert variant="dark">
                                This is a dark alert—check it out!
                            </Alert>
                        </div>
                    </Col>
                </Row>
            </section>

            {/* Dismisable Alerts */}
            <section className="mb-5">
                <h2 className="mb-4">Dismissible Alerts</h2>
                <Row>
                    <Col md={12}>
                        <Alert variant="success" dismissible>
                            <Alert.Heading>Closable Alert</Alert.Heading>
                            You can close this alert by clicking the X button.
                        </Alert>
                        <Alert variant="danger" dismissible>
                            Critical system failure imminent! Close this notification to ignore the problem.
                        </Alert>
                    </Col>
                </Row>
            </section>

            {/* Additional Content */}
            <section className="mb-5">
                <h2 className="mb-4">Alert with Content</h2>
                <Row>
                    <Col md={12}>
                        <Alert variant="success">
                            <Alert.Heading>Hey, nice to see you</Alert.Heading>
                            <p>
                                Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.
                            </p>
                            <hr />
                            <p className="mb-0">
                                Whenever you need to, be sure to use margin utilities to keep things nice and tidy.
                            </p>
                        </Alert>
                    </Col>
                </Row>
            </section>
        </Container>
    );
};

export default AlertGallery;
