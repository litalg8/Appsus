const { NavLink, withRouter } = ReactRouterDOM;

function _Nav(props) {


    return (
        <nav className="main-nav clean-list flex align-center">
            {/* <NavLink to="/" activeClassName="active-nav" className="nav-item" exact >Home</NavLink> */}
            <NavLink to="/keep" activeClassName="active-keep" className="nav-item keep">Keep</NavLink>
            <NavLink to="/mail" activeClassName="active-mail" className="nav-item mail">Mail</NavLink>
        </nav>
    )

}

export const Nav = withRouter(_Nav);