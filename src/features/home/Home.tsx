import { Carousel } from "react-bootstrap";
import HomeNavbar from "./components/HomeNavbar";
import carousel1 from '../../assets/carousel1.jpeg';
import carousel2 from '../../assets/carousel2.jpeg';

const Home = () => {
    return (
        <>
            <HomeNavbar />
            <Carousel>
                <Carousel.Item>
                    <img src={carousel1} alt="" />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={carousel2} alt="" />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Home;