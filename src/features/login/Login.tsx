import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import LoginNavbar from "./components/LoginNavbar";

const Login = () => {
  return (
    <>
      <LoginNavbar />
      <Container fluid className="px-4 py-5">
        <Row className="align-items-center g-lg-5 py-5">
          <Col md={10} lg={5} className="mx-auto">
            <Card className="p-4 p-md-5 border rounded-3 bg-light">
              <Card.Body>
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Remember me" />
                  </Form.Group>

                  <Button variant="primary" type="submit" className="w-100 btn-lg">
                    Login
                  </Button>
                  <hr className="my-4" />
                  <small className="text-muted">
                    By clicking Login, you agree to the terms of use.
                  </small>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>

  );
};

export default Login;
