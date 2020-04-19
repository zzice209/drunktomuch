import React from 'react';
import DrawerGroup from "./app/routers/drawer/DrawerGroup";
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
    return (
        <Router>
            <div className="App">
                <DrawerGroup/>
            </div>
        </Router>
    );
}

export default App;
