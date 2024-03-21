// Remove unused imports
// import ActiveDebate from "../components/DebateComponents/ActiveDebates/ActiveDebate.jsx";
import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
import DebateComponent from "../components/DebateComponents/ActiveDebates/ActiveDebateComponent.jsx";


// Remove unused variable declaration
//this page needs to import the active debate component and render it
//

function ActiveDebatePage() {
    return (
        <Container>
        <Row>
            <Col>
            <DebateComponent />
            </Col>
        </Row>
        </Container>
    );
}
export default ActiveDebatePage;


