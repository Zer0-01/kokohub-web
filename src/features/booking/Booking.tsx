import { Button, Container, Form, Spinner } from "react-bootstrap";
import { useEffect, useState } from "react";
import { User } from "../../models/User";


const Booking = () => {
    const [barbers, setBarbers] = useState<User[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [selectedBarber, setSelectedBarber] = useState<User | null>(null);

    const fetchBarbers = async () => {
        const response = await fetch('http://localhost:5167/Users');
        const barbers = await response.json();
        console.log(barbers);
        return barbers;
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchBarbers();
                setBarbers(data);
            } catch (error) {
                if (error instanceof Error) {
                    setError(error.message);
                } else {
                    setError('An unknown error occurred');
                }
            } finally {
                setLoading(false);
            }
        }; fetchData();
    }, []);

    const handleBarberSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedUserId = event.target.value;
        if (selectedUserId === "default") {
            setSelectedBarber(null);
        } else {
            const selectedUser = barbers.find(user => user.id.toString() === selectedUserId);
            setSelectedBarber(selectedUser || null);
        }
    };

    if (loading) {
        return (
            <div className="text-center">
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </div>
        );
    }

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
                        <Form.Select
                            aria-label="Default select example"
                            onChange={handleBarberSelect}
                        >
                            <option value="default">Please select your favorite barber</option>
                            {barbers.map((user) => (
                                <option key={user.id} value={user.id}>{user.name}</option>
                            ))}
                        </Form.Select>
                        <Form.Text className="text-muted">
                            {selectedBarber ? `Specialties: ${selectedBarber.barberDetails.specialties.join(', ')}` : 'Select barber to see their specialties.'}
                        </Form.Text>
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