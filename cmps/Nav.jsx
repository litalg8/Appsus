const { NavLink, withRouter } = ReactRouterDOM;

function _Nav(props) {

    return (
        <nav className="main-nav clean-list flex align-center">
            {props.location.pathname !== '/' &&
                <NavLink to="/note" activeClassName="active-keep" className="nav-item keep">
                    <i className="fas fa-sticky-note fa-2x"></i>
                </NavLink>}
            {props.location.pathname !== '/' &&
                <NavLink to="/mail" activeClassName="active-mail" className="nav-item mail">
                    <i className="fas fa-envelope fa-2x"></i>
                </NavLink>}
        </nav>
    )

}

export const Nav = withRouter(_Nav);