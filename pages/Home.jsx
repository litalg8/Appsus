const { Link } = ReactRouterDOM;

export class Home extends React.Component {

    render() {
        return (
            <section className="home-page">
                <h1>Welcome Home Ladies!</h1>
                <div className="home-navigation">
                    <Link to="/note" className="nav-item keep">
                        <i className="fas fa-sticky-note "></i>
                    </Link>
                    <Link to="/mail" className="nav-item mail">
                        <i className="fas fa-envelope "></i>
                    </Link>
                </div>
            </section>
        )
    }
}