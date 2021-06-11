import React from 'react';
import {Router} from '@reach/router';
import Home from './home';
import Contact from './contact';


const Main = () => {
    return ( 
        <main>
            <Router>
                <Home path='/' />
                <Contact path='contact' />
            </Router>
        </main>
     );
}
 
export default Main;