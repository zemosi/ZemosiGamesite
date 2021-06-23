import React from 'react';
import { Switch, Route} from 'react-router-dom';

import Home from '../../pages/home';
import About from '../../pages/about';
import Esports from '../../pages/esports';

export default function Router() {
    return(
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/esports" component={Esports} />
            <Route path="/about" component={About} />
        </Switch>
    )
}