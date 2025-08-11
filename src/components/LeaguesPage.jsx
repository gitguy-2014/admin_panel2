import React, { useState } from 'react';
import './LeaguesPage.css';
import NewLeagueModal from './NewLeagueModal';
import EditLeagueModal from './EditLeagueModal';

const LeaguesPage = () => {
  const [showNewModal, setShowNewModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedLeague, setSelectedLeague] = useState(null);
  const [currentPage, setCurrentPage] = useState(1); // Change to 3 to test last page
  const [totalPages] = useState(3); // Example: 3 total pages

  const leagues = [
    {
      id: 1,
      name: 'Liga Profesional',
      country: 'Belgium',
      logo: 'https://api.builder.io/api/v1/image/assets/TEMP/45e6d6ad31cd3712e484b4c960f98c5d90f3b3cc?width=76'
    },
    {
      id: 2,
      name: 'Liga Profesional',
      country: 'Belgium',
      logo: 'https://api.builder.io/api/v1/image/assets/TEMP/3fb5cb3339d76ef30ac204a1f0966c2c37a5ad07?width=76'
    },
    {
      id: 3,
      name: 'Liga Profesional',
      country: 'Belgium',
      logo: 'https://api.builder.io/api/v1/image/assets/TEMP/45e6d6ad31cd3712e484b4c960f98c5d90f3b3cc?width=76'
    }
  ];

  const handleEdit = (league) => {
    setSelectedLeague(league);
    setShowEditModal(true);
  };

  const handleDelete = (leagueId) => {
    console.log('Delete league:', leagueId);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const hasPreviousPage = currentPage > 1;
  const hasNextPage = currentPage < totalPages;

  return (
    <div className="leagues-page">
      <div className="table-container">
        <div className="table">
          <div className="table-header">
            <div className="header-row">
              <div className="header-cell logo-header">Logo</div>
              <div className="header-cell name-header">League Name</div>
              <div className="header-cell country-header">Country</div>
              <div className="header-actions">
                <button className="new-league-button" onClick={() => setShowNewModal(true)}>
                  <svg className="button-icon" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 9.75H9.75V15H8.25V9.75H3V8.25H8.25V3H9.75V8.25H15V9.75Z" fill="#0D0D0D"/>
                  </svg>
                  <span className="button-text">New League</span>
                </button>
              </div>
            </div>
          </div>
          
          <div className="table-body">
            {leagues.map((league) => (
              <div key={league.id} className="table-row">
                <div className="table-cell logo-cell">
                  <img src={league.logo} alt="" className="league-logo" />
                </div>
                <div className="table-cell name-cell">{league.name}</div>
                <div className="table-cell country-cell">{league.country}</div>
                <div className="table-cell actions-cell">
                  <button className="action-button" onClick={() => handleEdit(league)}>
                    <svg className="action-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.53803 19.5201C4.92803 19.5201 4.35803 19.31 3.94803 18.92C3.42803 18.43 3.17803 17.69 3.26803 16.89L3.63803 13.65C3.70803 13.04 4.07803 12.23 4.50803 11.79L12.718 3.10005C14.768 0.930049 16.908 0.870049 19.078 2.92005C21.248 4.97005 21.308 7.11005 19.258 9.28005L11.048 17.97C10.628 18.42 9.84803 18.84 9.23803 18.9401L6.01803 19.49C5.84803 19.5 5.69803 19.5201 5.53803 19.5201ZM15.928 2.91005C15.158 2.91005 14.488 3.39005 13.808 4.11005L5.59803 12.8101C5.39803 13.0201 5.16803 13.5201 5.12803 13.8101L4.75803 17.05C4.71803 17.38 4.79803 17.65 4.97803 17.82C5.15803 17.99 5.42803 18.05 5.75803 18L8.97803 17.4501C9.26803 17.4001 9.74803 17.14 9.94803 16.93L18.158 8.24005C19.398 6.92005 19.848 5.70005 18.038 4.00005C17.238 3.23005 16.548 2.91005 15.928 2.91005Z" fill="#9E9EA1"/>
                      <path d="M17.3365 10.9501C17.3165 10.9501 17.2865 10.9501 17.2665 10.9501C14.1465 10.6401 11.6365 8.27009 11.1565 5.17009C11.0965 4.76009 11.3765 4.38009 11.7865 4.31009C12.1965 4.25009 12.5765 4.53009 12.6465 4.94009C13.0265 7.36009 14.9865 9.22009 17.4265 9.46009C17.8365 9.50009 18.1365 9.87009 18.0965 10.2801C18.0465 10.6601 17.7165 10.9501 17.3365 10.9501Z" fill="#9E9EA1"/>
                      <path d="M21 22.75H3C2.59 22.75 2.25 22.41 2.25 22C2.25 21.59 2.59 21.25 3 21.25H21C21.41 21.25 21.75 21.59 21.75 22C21.75 22.41 21.41 22.75 21 22.75Z" fill="#9E9EA1"/>
                    </svg>
                  </button>
                  <button className="action-button" onClick={() => handleDelete(league.id)}>
                    <svg className="action-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z" fill="#9E9EA1"/>
                      <path d="M9.16937 15.5801C8.97937 15.5801 8.78938 15.5101 8.63938 15.3601C8.34938 15.0701 8.34938 14.5901 8.63938 14.3001L14.2994 8.64011C14.5894 8.35011 15.0694 8.35011 15.3594 8.64011C15.6494 8.93011 15.6494 9.41011 15.3594 9.70011L9.69937 15.3601C9.55937 15.5101 9.35937 15.5801 9.16937 15.5801Z" fill="#9E9EA1"/>
                      <path d="M14.8294 15.5801C14.6394 15.5801 14.4494 15.5101 14.2994 15.3601L8.63938 9.70011C8.34938 9.41011 8.34938 8.93011 8.63938 8.64011C8.92937 8.35011 9.40937 8.35011 9.69937 8.64011L15.3594 14.3001C15.6494 14.5901 15.6494 15.0701 15.3594 15.3601C15.2094 15.5101 15.0194 15.5801 14.8294 15.5801Z" fill="#9E9EA1"/>
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="pagination-container">
          <div
            className={`previous-page ${hasPreviousPage ? 'active' : 'disabled'}`}
            onClick={hasPreviousPage ? handlePreviousPage : undefined}
          >
            <svg className="pagination-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.0013 20.67C14.8113 20.67 14.6213 20.6 14.4713 20.45L7.95125 13.93C6.89125 12.87 6.89125 11.13 7.95125 10.07L14.4713 3.55002C14.7613 3.26002 15.2413 3.26002 15.5312 3.55002C15.8212 3.84002 15.8212 4.32002 15.5312 4.61002L9.01125 11.13C8.53125 11.61 8.53125 12.39 9.01125 12.87L15.5312 19.39C15.8212 19.68 15.8212 20.16 15.5312 20.45C15.3813 20.59 15.1912 20.67 15.0013 20.67Z" fill={hasPreviousPage ? "#FCFCFC" : "#5E5E62"}/>
            </svg>
            <div className="pagination-text">Previous Page</div>
          </div>

          <div className="page-numbers">
            <div className="page-number active">{currentPage}</div>
          </div>

          <div
            className={`next-page ${hasNextPage ? 'active' : 'disabled'}`}
            onClick={hasNextPage ? handleNextPage : undefined}
          >
            <div className="pagination-text">Next Page</div>
            <svg className="pagination-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.91156 20.67C8.72156 20.67 8.53156 20.6 8.38156 20.45C8.09156 20.16 8.09156 19.68 8.38156 19.39L14.9016 12.87C15.3816 12.39 15.3816 11.61 14.9016 11.13L8.38156 4.61002C8.09156 4.32002 8.09156 3.84002 8.38156 3.55002C8.67156 3.26002 9.15156 3.26002 9.44156 3.55002L15.9616 10.07C16.4716 10.58 16.7616 11.27 16.7616 12C16.7616 12.73 16.4816 13.42 15.9616 13.93L9.44156 20.45C9.29156 20.59 9.10156 20.67 8.91156 20.67Z" fill={hasNextPage ? "#FCFCFC" : "#5E5E62"}/>
            </svg>
          </div>
        </div>
      </div>

      {showNewModal && (
        <NewLeagueModal onClose={() => setShowNewModal(false)} />
      )}

      {showEditModal && (
        <EditLeagueModal 
          league={selectedLeague}
          onClose={() => setShowEditModal(false)} 
        />
      )}
    </div>
  );
};

export default LeaguesPage;
