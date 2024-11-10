import { Container, Navbar } from "react-bootstrap";

const LoginNavbar = () => {
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        Barberas
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </>
    );
};

export default LoginNavbar;