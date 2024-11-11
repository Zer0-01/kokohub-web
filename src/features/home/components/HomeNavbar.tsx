import { useState } from 'react'
import { Container, Navbar } from 'react-bootstrap'

const HomeNavbar = () => {
    const [toBooking, setToBooking] = useState(false)
    
    return (
        <>
            <Navbar className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand>Barberas</Navbar.Brand>
                </Container>
            </Navbar>
        </>
    )
}

export default HomeNavbar