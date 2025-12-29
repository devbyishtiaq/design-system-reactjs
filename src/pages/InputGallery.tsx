import { Container, Row, Col, Form, InputGroup, Button } from "react-bootstrap";

const InputGallery = () => {
    return (
        <Container className="py-2">
            <h1 className="mb-5">Inputs & Forms</h1>

            <section className="mb-5">
                <h2 className="mb-4">Basic Inputs</h2>
                <Row className="mb-4">
                    <Col md={6}>
                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="name@example.com" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Example textarea</Form.Label>
                                <Form.Control as="textarea" rows={3} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInputDisabled">
                                <Form.Label>Disabled Input</Form.Label>
                                <Form.Control type="text" placeholder="Disabled input" disabled />
                            </Form.Group>
                        </Form>
                    </Col>
                    <Col md={6}>
                        <Form>
                            <Form.Label htmlFor="inputPassword5">Password</Form.Label>
                            <Form.Control
                                type="password"
                                id="inputPassword5"
                                aria-describedby="passwordHelpBlock"
                            />
                            <Form.Text id="passwordHelpBlock" muted>
                                Your password must be 8-20 characters long, contain letters and numbers,
                                and must not contain spaces, special characters, or emoji.
                            </Form.Text>
                        </Form>
                        <Form.Group controlId="formFile" className="mt-3 mb-3">
                            <Form.Label>Default file input example</Form.Label>
                            <Form.Control type="file" />
                        </Form.Group>
                        <Form.Label>Color picker</Form.Label>
                        <Form.Control
                            type="color"
                            id="exampleColorInput"
                            defaultValue="#563d7c"
                            title="Choose your color"
                        />
                    </Col>
                </Row>
            </section>

            <section className="mb-5">
                <h2 className="mb-4">Selects</h2>
                <Row className="mb-4">
                    <Col md={6}>
                        <Form.Select aria-label="Default select example">
                            <option>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                    </Col>
                    <Col md={6}>
                        <Form.Select disabled aria-label="Disabled select example">
                            <option>Disabled select</option>
                        </Form.Select>
                    </Col>
                </Row>
            </section>

            <section className="mb-5">
                <h2 className="mb-4">Checks & Radios</h2>
                <Row className="mb-4">
                    <Col md={6}>
                        <Form>
                            {['checkbox', 'radio'].map((type) => (
                                <div key={`default-${type}`} className="mb-3">
                                    <Form.Check
                                        type={type as any}
                                        id={`default-${type}`}
                                        label={`default ${type}`}
                                    />

                                    <Form.Check
                                        disabled
                                        type={type as any}
                                        label={`disabled ${type}`}
                                        id={`disabled-default-${type}`}
                                    />
                                </div>
                            ))}
                        </Form>
                    </Col>
                    <Col md={6}>
                        <Form>
                            <Form.Check
                                type="switch"
                                id="custom-switch"
                                label="Check this switch"
                            />
                            <Form.Check
                                disabled
                                type="switch"
                                label="disabled switch"
                                id="disabled-custom-switch"
                            />
                        </Form>
                    </Col>
                </Row>
            </section>

            <section className="mb-5">
                <h2 className="mb-4">Input Groups</h2>
                <Row>
                    <Col md={12}>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                            <Form.Control
                                placeholder="Username"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                            />
                        </InputGroup>

                        <InputGroup className="mb-3">
                            <Form.Control
                                placeholder="Recipient's username"
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                            />
                            <InputGroup.Text id="basic-addon2">@example.com</InputGroup.Text>
                        </InputGroup>

                        <InputGroup className="mb-3">
                            <InputGroup.Text>$</InputGroup.Text>
                            <Form.Control aria-label="Amount (to the nearest dollar)" />
                            <InputGroup.Text>.00</InputGroup.Text>
                        </InputGroup>

                        <InputGroup className="mb-3">
                            <Button variant="outline-secondary" id="button-addon1">
                                Button
                            </Button>
                            <Form.Control
                                aria-label="Example text with button addon"
                                aria-describedby="button-addon1"
                            />
                        </InputGroup>
                    </Col>
                </Row>
            </section>
        </Container>
    );
};

export default InputGallery;
