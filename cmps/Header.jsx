import { Nav } from './Nav.jsx';
const { NavLink } = ReactRouterDOM;


export function Header(props) {

    return (
        <header className="main-header flex space-between">

            <NavLink  to="/" activeClassName="active-nav" exact className="logo nav-item">
                <img src="./assets/css/logo.png"/>
            </NavLink>
            <Nav />
        </header>
    )

}

{/* <i className="fas fa-th-large fa-2x"></i> */}