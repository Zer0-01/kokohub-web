import { Carousel, Col, Container, Row, Image } from "react-bootstrap";
import HomeNavbar from "./components/HomeNavbar";
import carousel1 from '../../assets/carousel1.jpeg';
import carousel2 from '../../assets/carousel2.jpeg';
import barbershop from '../../assets/barbershop.jpg';
import barbertools from '../../assets/barbertools.jpg';
import barberpeople from '../../assets/barberpeople.jpg';
import barbercutty from '../../assets/barbercutytpe.jpg';
import './Home.css';

const Home = () => {
    return (
        <>
            <HomeNavbar />
            <Container className="mt-5 mb-5">
                <Carousel>
                    <Carousel.Item >
                        <img className="w-100" src={carousel1} alt="" />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="w-100" src={carousel2} alt="" />
                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Container>
            <Container>
                <Row>
                    <Col className="p-1" md={4}>
                        <div className="h-100 image-container">
                            <Image className="h-100" src={barbershop} fluid rounded={true} />
                            <h4 className="overlay-text">Locations</h4>
                        </div>

                    </Col>
                    <Col className="p-1" md={4}>
                        <Image className="mb-2" rounded={true} src={barbertools} fluid />
                        <Image src={barberpeople} rounded={true} fluid />
                    </Col>
                    <Col className="p-1" md={4}><Image className="h-100" src={barbercutty} fluid rounded={true} /></Col>

                </Row>
            </Container>


        </>
    );
};

export default Home;