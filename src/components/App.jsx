/* eslint-disable react/prop-types */
import { useState } from 'react';
import Header from './Header.jsx';
import Gallery from './Gallery.jsx';
import Footer from './Footer.jsx';
import SelectedBeast from './SelectedBeast.jsx';
import './App.css';
import allBeasts from '../../data.json';

function App() {

  const [displayModal, setDisplayModal] = useState(false);
  const [selectedBeast, setSelectedBeast] = useState({});
  const [searchQuery, setSearchQuery] = useState('');
  
  // 🦄 NEW STATE FOR HORN FILTER
  const [selectedHorns, setSelectedHorns] = useState('all');

  function displayAsModal(beast) {
    setSelectedBeast(beast);
    setDisplayModal(true);
  }

  function handleClose() {
    setDisplayModal(false);
  }

  // 🔍 REGEX SEARCH PATTERN
  const regex = new RegExp(searchQuery, 'i');

const filteredBeasts = allBeasts.filter((beast) => {

    // 🔍 Matches search text
    const matchesSearch =
      regex.test(beast.title) ||
      regex.test(beast.description);

    // 🦄 Matches selected horn count
    const matchesHorns =
      selectedHorns === 'all' ||
      beast.horns === Number(selectedHorns);

    // ✅ Beast must match BOTH conditions
    return matchesSearch && matchesHorns; // SUPER Important
  });

  // 🔽 RETURN JSX
  return (
    <div className="App">

      <Header />

      <Gallery
        allBeasts={filteredBeasts}
        displayAsModal={displayAsModal}

        // 🦄 Dropdown state
         selectedHorns={selectedHorns}

        // 🦄 Function to update dropdown state
        setSelectedHorns={setSelectedHorns}
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
// Go to Gallery.jsx 