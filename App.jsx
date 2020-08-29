const Router = ReactRouterDOM.HashRouter;
const { Route, Switch } = ReactRouterDOM;
import { Home } from './pages/Home.jsx';
import { Header } from './cmps/Header.jsx';
import { KeepApp } from './apps/keep/KeepApp.jsx';
import { MailApp } from './apps/mail/MailApp.jsx';

export class App extends React.Component {

    render() {
        return (
            <Router>
                <div>
                    <Header />
                    <main>
                        
                        <Switch>
                            <Route component={MailApp} path="/mail" />
                            <Route component={KeepApp} path="/note" />
                            <Route component={Home} path="/" />
                        </Switch>
                    </main>

                </div>
            </Router>
        )
    }
}
