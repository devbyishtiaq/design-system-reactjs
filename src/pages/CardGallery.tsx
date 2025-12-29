import { Container, Row, Col, Card, Button } from "react-bootstrap";

const CardGallery = () => {
    return (
        <Container className="py-2">
            <h1 className="mb-5">Cards</h1>

            <section className="mb-5">
                <h2 className="mb-4">Basic Cards</h2>
                <Row className="g-4">
                    <Col md={4}>
                        <Card>
                            <Card.Img variant="top" src="https://placehold.co/600x400/EEE/31343C" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="text-center">
                            <Card.Body>
                                <Card.Title>Center Aligned</Card.Title>
                                <Card.Text>
                                    With supporting text below as a natural lead-in to additional content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="text-end">
                            <Card.Body>
                                <Card.Title>Right Aligned</Card.Title>
                                <Card.Text>
                                    With supporting text below as a natural lead-in to additional content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </section>

            <section className="mb-5">
                <h2 className="mb-4">Feature Cards</h2>
                <Row className="g-4">
                    <Col md={6}>
                        <Card>
                            <Card.Header>Featured</Card.Header>
                            <Card.Body>
                                <Card.Title>Special Title Treatment</Card.Title>
                                <Card.Text>
                                    With supporting text below as a natural lead-in to additional content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6}>
                        <Card>
                            <Card.Header as="h5">Featured Header</Card.Header>
                            <Card.Body>
                                <Card.Title>Special Title Treatment</Card.Title>
                                <Card.Text>
                                    With supporting text below as a natural lead-in to additional content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </section>

            <section className="mb-5">
                <h2 className="mb-4">Navigation Cards</h2>
                <Row className="g-4">
                    <Col md={12}>
                        <Card>
                            <Card.Header>
                                <ul className="nav nav-tabs card-header-tabs">
                                    <li className="nav-item">
                                        <a className="nav-link active" href="#">Active</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Link</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link disabled" href="#">Disabled</a>
                                    </li>
                                </ul>
                            </Card.Header>
                            <Card.Body>
                                <Card.Title>Special Title Treatment</Card.Title>
                                <Card.Text>
                                    With supporting text below as a natural lead-in to additional content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </section>
        </Container>
    );
};

export default CardGallery;
