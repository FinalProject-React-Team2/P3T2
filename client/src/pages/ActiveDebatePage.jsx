// Remove unused imports
import ActiveDebate from "../components/DashboardComponents/ActiveDebate.jsx";
import { Container, Row, Col } from "react-bootstrap";


// Remove unused variable declaration
//this page needs to import the active debate component and render it
//

function ActiveDebatePage() {
    return (
        <Container>
        <Row>
            <Col>
            <ActiveDebate />
            </Col>
        </Row>
        </Container>
    );
    }
    export default ActiveDebatePage;


