import React from 'react';
import ReactDom from 'react-dom';
import Header from "./components/header";
import Navigation from "./components/navigation";
import Main from "./components/main";
import Footer from "./components/footer";

function App() {
    return(
        <>
        <Header/>
        <Navigation/>
        <Main/>
        <Footer/>
        </>
        )
}

ReactDom.render(<App/>, document.getElementById('root'));

