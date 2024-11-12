import { Button, Container, Form } from "react-bootstrap";
import { useEffect, useState } from "react";
import { User } from "../../models/user";


const Booking = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [error, setError] = useState<string | null>(null);

    const fetchUser = async () => {
        const response = await fetch('http://localhost:5167/Users');
        const user = await response.json();
        console.log(user);
        return user;
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchUser();
                setUsers(data);
            } catch (error) {
                if (error instanceof Error) {
                    setError(error.message);
                } else {
                    setError('An unknown error occurred');
                }
            }
        }; fetchData();
    }, []);

    if (error) {
        return <div>Error: {error}</div>;
    }

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
                            {users.map((user) => (
                                <option key={user.id} value={user.id}>{user.name}</option>
                            ))}
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