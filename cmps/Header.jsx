import { Nav } from './Nav.jsx';
const { NavLink } = ReactRouterDOM;


export function Header(props) {

    return (
        <header className="main-header flex space-between">

            <NavLink  to="/" activeClassName="active-nav" exact className="logo">logo</NavLink>
            <Nav />
        </header>
    )

}