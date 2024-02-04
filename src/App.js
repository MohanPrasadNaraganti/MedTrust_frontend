import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import Header from './headers/Header'
import Pages from './components/Pages';
import Footer from './Footer/Footer';




function App() {
  return (
    <>
      <Router>
        <div className="App">
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
