import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import Header from './headers/Header'
import Pages from './components/Pages';
import Footer from './Footer/Footer';
import { Helmet } from "react-helmet";
import medtrust from './images/medtrust.png'



function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Helmet>
            <meta charSet="utf-8" />
            <title>MedTrust</title>
            <link rel="icon" href={medtrust} />
            <link rel="icon" type="image/png" href={medtrust} sizes="16x16" />
          </Helmet>
          <Header />
          <div className='pages-div'>
            <Pages />
          </div >
          <Footer />

        </div>
      </Router>
    </>
  );
}

export default App;
