import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NoteState from '../context/notes/NoteState';

const App = () => {
    return (
        <div>
            <NoteState> {/*provides the global state to all child components */}
                <Router>
                    <Navbar />
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route exact path="/about" element={<About />} />
                    </Routes>
                </Router>
            </NoteState>
        </div>
    );
};

export default App;
