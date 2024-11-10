import { Container, Navbar } from 'react-bootstrap'

const HomeNavbar = () => {
    return (
        <>
            <Navbar className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand>Brand text</Navbar.Brand>
                </Container>
            </Navbar>
        </>
    )
}

export default HomeNavbar