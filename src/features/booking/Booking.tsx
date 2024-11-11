import { Button, Container, Form } from "react-bootstrap";

const Booking = () => {
    return (
        <>
            <Container className="mt-5">
                <Form>
                    <Form.Group className="mb-3" controlId="formDate">
                        <Form.Label>Date</Form.Label>
                        <Form.Control type="date" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBarber">
                        <Form.Label>Barber</Form.Label>
                        <Form.Select aria-label="Default select example">
                            <option value="1">Muhammad Amin</option>
                            <option value="2">Haikal Radzi</option>
                            <option value="3">Afhamudin</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formCutType">
                        <Form.Label>Cut Type</Form.Label>
                        <Form.Select aria-label="Default select example">
                            <option value="1">Two Block</option>
                            <option value="2">Burst Fade</option>
                            <option value="3">Fringe</option>
                        </Form.Select>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Container>

        </>


    )
}

export default Booking;