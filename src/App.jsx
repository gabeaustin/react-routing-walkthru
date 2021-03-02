import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";


const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>

                <Route exact path="/about">
                    <About />
                </Route>
                
                <Route exact path="/projects">
                    <Projects />
                </Route>
                
                <Route exact path="/users">
                    {() => <h1>Users Page</h1>}
                </Route>
                
                <Route exact path="/users/:userid">
                    {() => <h1>User Detail Page</h1>}
                </Route>
                
                <Route path="*">
                    {() => <h1>404 - Page Not Found</h1>}
                </Route>


            </Switch>
        </BrowserRouter>
    );
};

export default App;