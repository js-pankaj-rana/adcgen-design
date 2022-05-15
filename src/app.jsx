import { Container, Button, Card, Row, Col, Nav } from "react-bootstrap";
import dropdownIcon from './assets/icons/dropDown.svg'
import calender from './assets/icons/calender.svg'

import "./assets/scss/app.scss";


export default function App() {
  return (
    <>
      <Nav className="header">
        <Container fluid={true}>
          <div>
            <h1 className="header__title">Hello CodeSandbox</h1>
          </div>
        </Container>
      </Nav>

      <div className="common-container">
        <Card>
          <Card.Header className="card-title">
            Featured <span className="card-subtitle">(optional)</span>{" "}
            <span className="link">Clear Selections</span>
          </Card.Header>
          <Card.Body className="min-height">
            <Container>
              <Row className="g-0">
                <Col md="6" className="g-0">
                  <Button variant="default" className="radio-button"><i className="icon icon-radio" />MATH</Button>
                  <Button variant="default" className="radio-button"><i className="icon icon-radio" />SANS</Button>
                  <Button variant="default" className="radio-button active"><i className="icon icon-radio active" />ENG</Button>
                </Col>
                <Col md="6" className="pipe-separator">
                  <Button variant="default" className="radio-button">Go somewhere</Button>
                </Col>
              </Row>
              <Row className="mt-4">
                <hr className="horizontal-devider" />
                <Col md="12">
                  <Button variant="default" className="radio-button"><i className="icon icon-radio" />MATH</Button>
                  <Button variant="default" className="radio-button"><i className="icon icon-radio" />SANS</Button>
                </Col>
              </Row>
            </Container>
          </Card.Body>
        </Card>

        <Container fluid className="g-0 mt-4">
          <Row className="g-0">
            <Col md="3" className="mb-3">
              <label htmlFor="formGroupExampleInput" className="form-label custom-label">Access num search</label>
              <div className="input-group">
                <input type="text" className="form-control" aria-describedby="basic-addon2" id="formGroupExampleInput" />

                <span className="input-group-text input-dropdown">
                  <img src={dropdownIcon} />
                </span>

              </div>
            </Col>
            <Col md="2" className="text-center">
              or
            </Col>
            <Col md="3" className="mb-3">
              <label htmlFor="formGroupExampleInput" className="form-label custom-label">Access num search</label>
              <div className="input-group">
                <input type="text" className="form-control" aria-describedby="basic-addon2" id="formGroupExampleInput" />

                <span className="input-group-text input-dropdown">
                  <img src={dropdownIcon} />
                </span>
              </div>
            </Col>
            </Row>
            <Row className="g-0">
            <Col md="3" className="mb-3">
             <label htmlFor="formGroupExampleInput" className="form-label custom-label">Date (optiional)</label>
                <div className="input-group">
                  <input type="text" className="form-control" aria-describedby="basic-addon2" id="formGroupExampleInput" />

                  <span className="input-group-text input-dropdown">
                    <img src={calender} />
                  </span>
                </div>
            </Col>
            
            <Col md="2" className="mb-3">
            
            </Col>
            <Col md="3" className="mb-3">
              <label htmlFor="formGroupExampleInput" className="form-label custom-label">Toolbar Display</label>
                <div className="input-group">
                  <input type="text" className="form-control" aria-describedby="basic-addon2" id="formGroupExampleInput" />

                  <span className="input-group-text input-dropdown">
                    <img src={dropdownIcon} />
                  </span>
                </div>
            </Col>
          </Row>
          </Container>
          <Card>
          <Card.Header className="card-title">
            Requested item URL
          </Card.Header>
          <Card.Body>
            <Container>
              <Row className="g-0">
                <Col md="12" className="g-0">
                  <Button variant="default" className="clipboard-button active"><i className="icon icon-copy active" />Copy to clipboard</Button>
                  <Button variant="default" disabled={false} as="a" className="link-url" href={`http://abc.com`} target="new">http://abc.com</Button>

                </Col>

                </Row>
            </Container>
          </Card.Body>
        </Card>

      </div>
    </>
  );
}
