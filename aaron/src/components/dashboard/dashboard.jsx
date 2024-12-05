import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../contexts/UserContext';
import Search from './search/search';
import './dashboard.css';

const Dashboard = () => {
    const [logoutConfirm, setLogoutConfirm] = useState(false);
    const [activeSection, setActiveSection] = useState('search');
    const navigate = useNavigate();
    const { logout } = useUser();

    const handleLogoutClick = () => {
        setLogoutConfirm(true);
    };

    const handleConfirmLogout = () => {
        logout();
        navigate('/');
    };

    const handleNavLinkClick = (section) => {
        setActiveSection(section);
    };

    return (
        <div className="dashboard-container">
            <div className="dashboard-content">
                <div className="logo-container">
                    <img src="/aaronLogo.png" alt="Aaron Logo" className="logo" />
                </div>
                
                <div className="navigation-panel">
                    <div className="nav-links">
                        <button 
                            onClick={() => handleNavLinkClick('search')} 
                            className={`nav-button ${activeSection === 'search' ? 'active' : ''}`}
                        >
                            Search
                        </button>
                        <button 
                            onClick={() => handleNavLinkClick('my-movies')} 
                            className={`nav-button ${activeSection === 'my-movies' ? 'active' : ''}`}
                        >
                            My Movies
                        </button>
                    </div>
                    
                    <div className="logout-section">
                        {logoutConfirm ? (
                            <>
                                <button 
                                    className="confirm-button"
                                    onClick={handleConfirmLogout}
                                >
                                    Confirm Logout
                                </button>
                                <button 
                                    className="cancel-button"
                                    onClick={() => setLogoutConfirm(false)}
                                >
                                    Cancel
                                </button>
                            </>
                        ) : (
                            <button 
                                className="logout-button"
                                onClick={handleLogoutClick}
                            >
                                Logout
                            </button>
                        )}
                    </div>
                </div>

                <div className="content-panel">
                    {activeSection === 'search' && <Search />}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
