import { useState } from 'react';
import Header from './Header';
import Gallery from './Gallery';
import Footer from './Footer';
import allBeasts from '../../data.json';
import SelectedBeast from './SelectedBeast';
import './App.css';

function App() {

  const [displayModal, setDisplayModal] = useState(false);
  const [selectedBeast, setSelectedBeast] = useState({});
  // 🧠 NEW STATE FOR SEARCH --> Stretch Goal
  // const [searchQuery, setSearchQuery] = useState('');

  function displayAsModal(name) {
    const beastWithName = allBeasts.find(beast => beast.title === name);
    setSelectedBeast(beastWithName);
    setDisplayModal(true);
  }

  function handleClose() {
    setDisplayModal(false);
  }
  
  // 🧠 REGEX PATTERN (case-insensitive) ---->
  // const regex = new RegExp(searchQuery, 'i');

  // This creates a flexible search pattern based on what the user types.
//
// regex.test(string) checks:
// 👉 "Does this string contain the search text anywhere?"
//
// The 'i' flag makes it case-insensitive:
// "uni", "Uni", and "UNI" will all match "Unicorn"

// TODO: filter beasts
// const filteredBeasts = allBeasts.filter(beast => {
//   return regex.test(beast.title) || regex.test(beast.description);
// });
  return (
    <div className="App">
      <Header />
      {/* 🔍 SEARCH INPUT */}
      {/* “The search bar lives in App because App controls the data.
      Gallery just displays whatever App gives it.” */}
       {/* <div style={{ textAlign: 'center', margin: '20px' }}>
          <input
            type="text"
            placeholder="Search beasts..."  
          // TODO: update state when typing
            // value={searchQuery}
            // onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div> */}
      <Gallery
       
        // allBeasts={filteredBeasts}  <--- ...with this
        // TODO: swap this ---> NEXT LINE
        allBeasts={allBeasts}
        displayAsModal={displayAsModal}
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
