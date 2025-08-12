import React, { useState } from 'react';
import './AdminDashboard.css';
import LeaguesPage from './components/LeaguesPage';
import ClubsPage from './components/ClubsPage';

/**
 * Main admin dashboard component with sidebar navigation
 * Manages different sections of the admin panel (leagues, clubs, players)
 * @param {Function} onLogout - Callback function to handle user logout
 */
const AdminDashboard = ({ onLogout }) => {
  // Track which menu item is currently active
  const [activeMenu, setActiveMenu] = useState('leagues');

  // Configuration for sidebar navigation menu items
  const menuItems = [
    { id: 'overview', label: 'Overview' },
    { id: 'leagues', label: 'Leagues' },
    { id: 'clubs', label: 'Clubs' },
    { id: 'players', label: 'Players' }
  ];

  /**
   * Renders the appropriate content component based on active menu selection
   * @returns {JSX.Element} The component corresponding to the active menu
   */
  const renderContent = () => {
    switch (activeMenu) {
      case 'leagues':
        return <LeaguesPage />;
      case 'clubs':
        return <ClubsPage />;
      default:
        // Placeholder for unimplemented sections
        return <div className="coming-soon">Coming Soon</div>;
    }
  };

  return (
    <div className="admin-dashboard">
      {/* Left sidebar with navigation and branding */}
      <div className="sidebar">
        {/* Application logo/branding */}
        <div className="logo-container">
          <div className="logo-text">PLAYERSCUBE.</div>
        </div>

        <div className="menu-container">
          {/* Main navigation menu */}
          <div className="menu">
            {menuItems.map(item => (
              <div
                key={item.id}
                className={`menu-item ${activeMenu === item.id ? 'active' : ''} ${item.id === 'players' ? 'has-dropdown' : ''}`}
                onClick={() => setActiveMenu(item.id)}
              >
                <div className="menu-item-text">{item.label}</div>
                {/* Dropdown arrow for Players menu item (future functionality) */}
                {item.id === 'players' && (
                  <svg className="dropdown-icon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.00001 11.2C7.53335 11.2 7.06668 11.02 6.71335 10.6667L2.36668 6.31999C2.17335 6.12666 2.17335 5.80666 2.36668 5.61332C2.56001 5.41999 2.88001 5.41999 3.07335 5.61332L7.42001 9.95999C7.74001 10.28 8.26001 10.28 8.58001 9.95999L12.9267 5.61332C13.12 5.41999 13.44 5.41999 13.6333 5.61332C13.8267 5.80666 13.8267 6.12666 13.6333 6.31999L9.28668 10.6667C8.93335 11.02 8.46668 11.2 8.00001 11.2Z" fill="#FCFCFC"/>
                  </svg>
                )}
              </div>
            ))}
          </div>

          {/* Logout button at bottom of sidebar */}
          <div className="logout" onClick={onLogout}>
            <svg className="logout-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.2405 22.27H15.1105C10.6705 22.27 8.5305 20.52 8.1605 16.6C8.1205 16.19 8.4205 15.82 8.8405 15.78C9.2405 15.74 9.6205 16.05 9.6605 16.46C9.9505 19.6 11.4305 20.77 15.1205 20.77H15.2505C19.3205 20.77 20.7605 19.33 20.7605 15.26V8.73998C20.7605 4.66998 19.3205 3.22998 15.2505 3.22998H15.1205C11.4105 3.22998 9.9305 4.41998 9.6605 7.61998C9.6105 8.02998 9.2605 8.33998 8.8405 8.29998C8.4205 8.26998 8.1205 7.89998 8.1505 7.48998C8.4905 3.50998 10.6405 1.72998 15.1105 1.72998H15.2405C20.1505 1.72998 22.2505 3.82998 22.2505 8.73998V15.26C22.2505 20.17 20.1505 22.27 15.2405 22.27Z" fill="#FCFCFC"/>
              <path d="M14.9972 12.75H3.61719C3.20719 12.75 2.86719 12.41 2.86719 12C2.86719 11.59 3.20719 11.25 3.61719 11.25H14.9972C15.4072 11.25 15.7472 11.59 15.7472 12C15.7472 12.41 15.4072 12.75 14.9972 12.75Z" fill="#FCFCFC"/>
              <path d="M5.8475 16.1001C5.6575 16.1001 5.4675 16.0301 5.3175 15.8801L1.9675 12.5301C1.6775 12.2401 1.6775 11.7601 1.9675 11.4701L5.3175 8.12009C5.6075 7.83009 6.0875 7.83009 6.3775 8.12009C6.6675 8.41009 6.6675 8.89009 6.3775 9.18009L3.5575 12.0001L6.3775 14.8201C6.6675 15.1101 6.6675 15.5901 6.3775 15.8801C6.2375 16.0301 6.0375 16.1001 5.8475 16.1001Z" fill="#FCFCFC"/>
            </svg>
            <div className="logout-text">Log Out</div>
          </div>
        </div>
      </div>

      {/* Main content area */}
      <div className="main-content">
        {/* Page header with current section title */}
        <div className="header">
          <div className="header-title">| {menuItems.find(item => item.id === activeMenu)?.label}</div>
        </div>

        {/* Dynamic content area - renders different components based on menu selection */}
        <div className="content">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
