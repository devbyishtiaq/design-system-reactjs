import { Container, Row, Col } from "react-bootstrap";
// Note: We are using custom classes defined in theme.scss for avatars

const AvatarGallery = () => {
    // Helper to render placeholder avatars
    const renderAvatar = (size: number, text: string) => (
        <div
            className="avatar bg-secondary text-white fw-bold d-flex align-items-center justify-content-center"
            style={{ width: `${size}px`, height: `${size}px`, fontSize: `${size * 0.4}px` }}
        >
            {text}
        </div>
    );

    const renderImageAvatar = (size: number, src: string) => (
        <img
            src={src}
            className="avatar object-fit-cover"
            style={{ width: `${size}px`, height: `${size}px` }}
            alt="Avatar"
        />
    );

    return (
        <Container className="py-2">
            <h1 className="mb-5">Avatars</h1>

            <section className="mb-5">
                <h2 className="mb-4">Sizes</h2>
                <Row className="mb-4">
                    <Col md={12}>
                        <div className="d-flex align-items-end gap-3 flex-wrap">
                            <div>
                                {renderAvatar(24, "XS")}
                                <p className="small text-muted mt-2 text-center">24px</p>
                            </div>
                            <div>
                                {renderAvatar(32, "SM")}
                                <p className="small text-muted mt-2 text-center">32px</p>
                            </div>
                            <div>
                                {renderAvatar(40, "MD")}
                                <p className="small text-muted mt-2 text-center">40px</p>
                            </div>
                            <div>
                                {renderAvatar(48, "LG")}
                                <p className="small text-muted mt-2 text-center">48px</p>
                            </div>
                            <div>
                                {renderAvatar(64, "XL")}
                                <p className="small text-muted mt-2 text-center">64px</p>
                            </div>
                            <div>
                                {renderAvatar(96, "2XL")}
                                <p className="small text-muted mt-2 text-center">96px</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </section>

            <section className="mb-5">
                <h2 className="mb-4">Status Indicators</h2>
                <Row className="mb-4">
                    <Col md={12}>
                        <div className="d-flex gap-4">
                            <div className="avatar-status online">
                                {renderAvatar(48, "JD")}
                            </div>
                            <div className="avatar-status offline">
                                {renderAvatar(48, "AB")}
                            </div>
                            <div className="avatar-status online">
                                {renderImageAvatar(48, "https://placehold.co/100x100/1f7abc/ffffff?text=U")}
                            </div>
                        </div>
                    </Col>
                </Row>
            </section>

            <section className="mb-5">
                <h2 className="mb-4">Image Avatars</h2>
                <Row className="mb-4">
                    <Col md={12}>
                        <div className="d-flex align-items-center gap-3">
                            {renderImageAvatar(48, "https://placehold.co/100x100/6586c3/ffffff?text=A")}
                            {renderImageAvatar(48, "https://placehold.co/100x100/1f7abc/ffffff?text=B")}
                            {renderImageAvatar(48, "https://placehold.co/100x100/872918/ffffff?text=C")}
                        </div>
                    </Col>
                </Row>
            </section>
        </Container>
    );
};

export default AvatarGallery;
