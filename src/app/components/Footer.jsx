'use client'

import Link from "next/link"

const { Container, Image } = require("react-bootstrap")

const Footer = () => {
    const logo = "https://i.ibb.co/DRhxdbr/logo.png"
    return (
        <Container className="bg-dark d-flex justify-content-center align-items-center py-4">
            <Link href="/" className="d-flex align-items-center text-decoration-none">
                <Image
                    src={logo}
                    alt="Logotipo PaTuristear"
                    width={100}
                    height={100}
                    className="d-inline-block align-top mx-2"
                />
                <h1 className="text-light">PaTuristear</h1>
            </Link>
        </Container>
    )
}

export default Footer