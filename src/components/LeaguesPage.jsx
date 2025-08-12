import React, { useState } from 'react';
import './LeaguesPage.css';
import NewLeagueModal from './NewLeagueModal';
import EditLeagueModal from './EditLeagueModal';

/**
 * Leagues management page component
 * Displays a table of leagues with CRUD operations and pagination
 * Manages modal dialogs for creating and editing leagues
 */
const LeaguesPage = () => {
  // Modal visibility state management
  const [showNewModal, setShowNewModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  // Currently selected league for editing
  const [selectedLeague, setSelectedLeague] = useState(null);
  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages] = useState(10); // Static for demo purposes

  // Mock data for leagues - in real app this would come from API
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

  /**
   * Opens edit modal with selected league data
   * @param {Object} league - League object to edit
   */
  const handleEdit = (league) => {
    setSelectedLeague(league);
    setShowEditModal(true);
  };

  /**
   * Handles league deletion (currently just logs - would integrate with API)
   * @param {number} leagueId - ID of league to delete
   */
  const handleDelete = (leagueId) => {
    console.log('Delete league:', leagueId);
    // TODO: Implement actual deletion logic with API call
  };

  /**
   * Navigate to previous page if available
   */
  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  /**
   * Navigate to next page if available
   */
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Computed pagination state
  const hasPreviousPage = currentPage > 1;
  const hasNextPage = currentPage < totalPages;

  return (
    <div className="leagues-page">
      <div className="table-container">
        {/* Leagues data table */}
        <div className="leagues-table">
          {/* Table header with column titles and New League button */}
          <div className="table-header">
            <div className="header-cell logo-header">Logo</div>
            <div className="header-cell name-header">
              <span>League Name</span>
            </div>
            <div className="header-cell country-header">Country</div>
            <div className="header-actions">
              {/* Button to open new league creation modal */}
              <button className="new-league-button" onClick={() => setShowNewModal(true)}>
                <svg className="button-icon" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 9.75H9.75V15H8.25V9.75H3V8.25H8.25V3H9.75V8.25H15V9.75Z" fill="#0D0D0D"/>
                </svg>
                <span className="button-text">New League</span>
              </button>
            </div>
          </div>

          {/* Table body with league data rows */}
          <div className="table-body">
            {leagues.map((league) => (
              <div key={league.id} className="table-row">
                {/* League logo column */}
                <div className="table-cell logo-cell">
                  <img src={league.logo} alt="" className="league-logo" />
                </div>
                {/* League name column */}
                <div className="table-cell name-cell">{league.name}</div>
                {/* Country column */}
                <div className="table-cell country-cell">{league.country}</div>
                {/* Action buttons column (edit/delete) */}
                <div className="table-cell actions-cell">
                  {/* Edit button */}
                  <button className="action-button" onClick={() => handleEdit(league)}>
                    <svg className="action-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.53999 19.52C4.92999 19.52 4.35999 19.31 3.94999 18.92C3.42999 18.43 3.17999 17.69 3.26999 16.89L3.63999 13.65C3.70999 13.04 4.07999 12.23 4.50999 11.79L12.72 3.09999C14.77 0.929988 16.91 0.869988 19.08 2.91999C21.25 4.96999 21.31 7.10999 19.26 9.27999L11.05 17.97C10.63 18.42 9.84999 18.84 9.23999 18.94L6.01999 19.49C5.84999 19.5 5.69999 19.52 5.53999 19.52ZM15.93 2.90999C15.16 2.90999 14.49 3.38999 13.81 4.10999L5.59999 12.81C5.39999 13.02 5.16999 13.52 5.12999 13.81L4.75999 17.05C4.71999 17.38 4.79999 17.65 4.97999 17.82C5.15999 17.99 5.42999 18.05 5.75999 18L8.97999 17.45C9.26999 17.4 9.74999 17.14 9.94999 16.93L18.16 8.23999C19.4 6.91999 19.85 5.69999 18.04 3.99999C17.24 3.22999 16.55 2.90999 15.93 2.90999Z" fill="#9E9EA1"/>
                      <path d="M17.3399 10.95C17.3199 10.95 17.2899 10.95 17.2699 10.95C14.1499 10.64 11.6399 8.27 11.1599 5.17C11.0999 4.76 11.3799 4.38 11.7899 4.31C12.1999 4.25 12.5799 4.53 12.6499 4.94C13.0299 7.36 14.9899 9.22 17.4299 9.46C17.8399 9.5 18.1399 9.87 18.0999 10.28C18.0499 10.66 17.7199 10.95 17.3399 10.95Z" fill="#9E9EA1"/>
                      <path d="M21 22.75H3C2.59 22.75 2.25 22.41 2.25 22C2.25 21.59 2.59 21.25 3 21.25H21C21.41 21.25 21.75 21.59 21.75 22C21.75 22.41 21.41 22.75 21 22.75Z" fill="#9E9EA1"/>
                    </svg>
                  </button>
                  {/* Delete button */}
                  <button className="action-button" onClick={() => handleDelete(league.id)}>
                    <svg className="action-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z" fill="#9E9EA1"/>
                      <path d="M9.16986 15.58C8.97986 15.58 8.78986 15.51 8.63986 15.36C8.34986 15.07 8.34986 14.59 8.63986 14.3L14.2999 8.63999C14.5899 8.34999 15.0699 8.34999 15.3599 8.63999C15.6499 8.92999 15.6499 9.40998 15.3599 9.69998L9.69986 15.36C9.55986 15.51 9.35986 15.58 9.16986 15.58Z" fill="#9E9EA1"/>
                      <path d="M14.8299 15.58C14.6399 15.58 14.4499 15.51 14.2999 15.36L8.63986 9.69998C8.34986 9.40998 8.34986 8.92999 8.63986 8.63999C8.92986 8.34999 9.40986 8.34999 9.69986 8.63999L15.3599 14.3C15.6499 14.59 15.6499 15.07 15.3599 15.36C15.2099 15.51 15.0199 15.58 14.8299 15.58Z" fill="#9E9EA1"/>
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination controls */}
        <div className="pagination-container">
          {/* Previous page button */}
          <div
            className={`previous-page ${hasPreviousPage ? 'active' : 'disabled'}`}
            onClick={hasPreviousPage ? handlePreviousPage : undefined}
          >
            <svg className="pagination-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.9998 20.67C14.8098 20.67 14.6198 20.6 14.4698 20.45L7.94979 13.93C6.88979 12.87 6.88979 11.13 7.94979 10.07L14.4698 3.54999C14.7598 3.25999 15.2398 3.25999 15.5298 3.54999C15.8198 3.83999 15.8198 4.31999 15.5298 4.60999L9.00979 11.13C8.52979 11.61 8.52979 12.39 9.00979 12.87L15.5298 19.39C15.8198 19.68 15.8198 20.16 15.5298 20.45C15.3798 20.59 15.1898 20.67 14.9998 20.67Z" fill="#5E5E62"/>
            </svg>
            <div className="pagination-text">Previous Page</div>
          </div>

          {/* Page numbers display */}
          <div className="page-numbers">
            {/* Current page number (highlighted) */}
            <div className="page-number active">{currentPage}</div>
            {/* Additional page numbers when there are multiple pages */}
            {totalPages > 1 && (
              <>
                {currentPage + 1 <= totalPages && (
                  <div className="page-number">{currentPage + 1}</div>
                )}
                {currentPage + 2 <= totalPages && (
                  <div className="page-number">{currentPage + 2}</div>
                )}
                {/* Ellipsis for gap when there are many pages */}
                {currentPage + 3 < totalPages && (
                  <div className="page-number">...</div>
                )}
                {/* Last page number if far from current */}
                {totalPages > currentPage + 2 && (
                  <div className="page-number">{totalPages}</div>
                )}
              </>
            )}
          </div>

          {/* Next page button */}
          <div
            className={`next-page ${hasNextPage ? 'active' : 'disabled'}`}
            onClick={hasNextPage ? handleNextPage : undefined}
          >
            <div className="pagination-text">Next Page</div>
            <svg className="pagination-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.90961 20.67C8.71961 20.67 8.52961 20.6 8.37961 20.45C8.08961 20.16 8.08961 19.68 8.37961 19.39L14.8996 12.87C15.3796 12.39 15.3796 11.61 14.8996 11.13L8.37961 4.60999C8.08961 4.31999 8.08961 3.83999 8.37961 3.54999C8.66961 3.25999 9.14961 3.25999 9.43961 3.54999L15.9596 10.07C16.4696 10.58 16.7596 11.27 16.7596 12C16.7596 12.73 16.4796 13.42 15.9596 13.93L9.43961 20.45C9.28961 20.59 9.09961 20.67 8.90961 20.67Z" fill="#FCFCFC"/>
            </svg>
          </div>
        </div>
      </div>

      {/* Modal dialogs - conditionally rendered */}
      {/* New league creation modal */}
      {showNewModal && (
        <NewLeagueModal onClose={() => setShowNewModal(false)} />
      )}

      {/* Edit league modal */}
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
