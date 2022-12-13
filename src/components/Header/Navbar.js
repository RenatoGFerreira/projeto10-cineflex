import { Link } from "react-router-dom"
import { NavbarContainer } from "./StyledNavbar"

export default function Navbar() {
    return (
        <NavbarContainer>
            <Link to="/" >
                <h1 data-test="go-home-header-btn">cineflex</h1>
            </Link>
        </NavbarContainer>
    )
}

