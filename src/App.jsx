import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    {() => <h1>Home Page</h1>}
                </Route>

                <Route exact path="/about">
                    {() => <h1>About Page</h1>}
                </Route>
                
                <Route exact path="/projects">
                    {() => <h1>Projects Page</h1>}
                </Route>
            </Switch>
        </BrowserRouter>
    );
};

export default App;