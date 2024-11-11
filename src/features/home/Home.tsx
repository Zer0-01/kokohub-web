import { Col, Container, Row, Image } from "react-bootstrap";
import HomeNavbar from "./components/HomeNavbar";
import barbershop from '../../assets/barbershop.jpg';
import barbertools from '../../assets/barbertools.jpg';
import barberpeople from '../../assets/barberpeople.jpg';
import barbercutty from '../../assets/barbercutytpe.jpg';
import './Home.css';
import { useState } from "react";
import { Navigate } from "react-router-dom";

const Home = () => {
    const [toBooking, setToBooking] = useState(false);
    if (toBooking) {
        return <Navigate to={"/booking"} />
    }

    return (
        <>
            <HomeNavbar />
            <Container className="mt-5">
                <Row>
                    <Col className="p-1" md={4}>
                        <div className="h-100 image-container">
                            <Image className="h-100" src={barbershop} fluid rounded={true} />
                            <h4 className="overlay-text">Locations</h4>
                        </div>
                    </Col>
                    <Col className="p-1" md={4}>
                        <div className="image-container">
                            <Image className="mb-2" rounded={true} src={barbertools} fluid />
                            <h4 className="overlay-text-2">Services</h4>
                        </div>
                        <div className="image-container">
                            <Image src={barberpeople} rounded={true} fluid />
                            <h4 className="overlay-text-2">About Us</h4>
                        </div>
                    </Col>
                    <Col className="p-1" md={4}>
                        <div className="h-100 image-container">
                            <Image className="h-100" src={barbercutty} fluid rounded={true} onClick={() => setToBooking(true)} />
                            <h4 className="overlay-text">Book Now</h4>
                        </div>
                    </Col>

                </Row>
            </Container>


        </>
    );
};

export default Home;