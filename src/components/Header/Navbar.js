import { Link } from "react-router-dom"
import { NavbarContainer } from "./StyledNavbar"

export default function Navbar() {
    return (
        <NavbarContainer>
            <Link to="/" data-test="go-home-header-btn">
                <h1>cineflex</h1>
            </Link>
        </NavbarContainer>
    )
}

