import React from 'react';
import DrawerGroup from "./app/routers/drawer/DrawerGroup";
import HomePage from "./app/components/HomePage";
import FeaturePage from "./app/components/FeaturePage";
import {
    Switch,
    Route, BrowserRouter as Router,
} from 'react-router-dom';

function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route exact path="/homepage" component={HomePage}/>
                    <Route path="/features" component={FeaturePage}/>
                </Switch>
                <DrawerGroup/>
            </div>
        </Router>
    );
}

export default App;
