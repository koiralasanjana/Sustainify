import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import OrganizationHome from './pages/Home/OrgnizationHome';

const GuestPage = () => (
    <div>
        <h1>Continue as Guest</h1>
        <p>You can report environmental issues without signing up!</p>
        {/* Add guest reporting form here */}
    </div>
);

const App = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path='/organization' element={<OrganizationHome/>}/>
                <Route path="/guest" element={<GuestPage />} />
            </Routes>
        </Router>
    );
};

export default App;