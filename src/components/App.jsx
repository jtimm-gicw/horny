/* eslint-disable react/prop-types */
import { useState } from 'react';
import Header from './Header.jsx';
import Gallery from './Gallery.jsx';
import Footer from './Footer.jsx';
import SelectedBeast from './SelectedBeast.jsx';
import './App.css';

function App(props) {

  const [displayModal, setDisplayModal] = useState(false);
  const [selectedBeast, setSelectedBeast] = useState({});

  function displayAsModal(beast) {
    setSelectedBeast(beast);
    setDisplayModal(true);
  };

  function handleClose() {
    setDisplayModal(false);
  };

  return (
    <div className="App">
      <Header />
      <Gallery
        allBeasts={props.allBeasts}
        displayAsModal={displayAsModal}
        displayFilteredImages={props.updateAllBeasts}
      />
      <SelectedBeast
        selectedBeast={selectedBeast}
        show={displayModal}
        handleClose={handleClose}
      />
      <Footer />
    </div>
  );
}

export default App;
