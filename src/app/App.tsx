import * as React from 'react';
import './App.css';
import { Navbar } from '../navbar/Navbar';
import { Switch, Route } from 'react-router';
import { Home } from '../components/Home';
import { Help } from '../components/Help';

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <header>
                    <Navbar />
                </header>
                <Switch>
                    <Route exact={true} path="/" component={Home} />
                    <Route exact={true} path="/help" component={Help} />
                </Switch>
            </div>
        );
    }
}

export default App;
