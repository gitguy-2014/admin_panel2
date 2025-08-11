import React, { useState } from 'react';
import './ClubsPage.css';
import NewClubModal from './NewClubModal';
import EditClubModal from './EditClubModal';

const ClubsPage = () => {
  const [showNewModal, setShowNewModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedClub, setSelectedClub] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages] = useState(10);

  const clubs = [
    {
      id: 1,
      name: 'AA Argentinos Juniors',
      country: 'Argentina',
      league: 'Liga Profesional',
      season: '2024 - 25',
      logo: 'https://api.builder.io/api/v1/image/assets/TEMP/3fb5cb3339d76ef30ac204a1f0966c2c37a5ad07?width=76'
    },
    {
      id: 2,
      name: 'CA Banfield',
      country: 'Argentina',
      league: 'Liga Profesional',
      season: '2024 - 25',
      logo: 'https://api.builder.io/api/v1/image/assets/TEMP/3fb5cb3339d76ef30ac204a1f0966c2c37a5ad07?width=76'
    },
    {
      id: 3,
      name: 'Boca Juniors',
      country: 'Argentina',
      league: 'Liga Profesional',
      season: '2024 - 25',
      logo: 'https://api.builder.io/api/v1/image/assets/TEMP/3fb5cb3339d76ef30ac204a1f0966c2c37a5ad07?width=76'
    },
    {
      id: 4,
      name: 'River Plate',
      country: 'Argentina',
      league: 'Liga Profesional',
      season: '2024 - 25',
      logo: 'https://api.builder.io/api/v1/image/assets/TEMP/3fb5cb3339d76ef30ac204a1f0966c2c37a5ad07?width=76'
    },
    {
      id: 5,
      name: 'San Lorenzo',
      country: 'Argentina',
      league: 'Liga Profesional',
      season: '2024 - 25',
      logo: 'https://api.builder.io/api/v1/image/assets/TEMP/3fb5cb3339d76ef30ac204a1f0966c2c37a5ad07?width=76'
    },
    {
      id: 6,
      name: 'Racing Club',
      country: 'Argentina',
      league: 'Liga Profesional',
      season: '2024 - 25',
      logo: 'https://api.builder.io/api/v1/image/assets/TEMP/3fb5cb3339d76ef30ac204a1f0966c2c37a5ad07?width=76'
    },
    {
      id: 7,
      name: 'Independiente',
      country: 'Argentina',
      league: 'Liga Profesional',
      season: '2024 - 25',
      logo: 'https://api.builder.io/api/v1/image/assets/TEMP/3fb5cb3339d76ef30ac204a1f0966c2c37a5ad07?width=76'
    },
    {
      id: 8,
      name: 'Estudiantes de La Plata',
      country: 'Argentina',
      league: 'Liga Profesional',
      season: '2024 - 25',
      logo: 'https://api.builder.io/api/v1/image/assets/TEMP/3fb5cb3339d76ef30ac204a1f0966c2c37a5ad07?width=76'
    }
  ];

  const handleEdit = (club) => {
    setSelectedClub(club);
    setShowEditModal(true);
  };

  const handleDelete = (clubId) => {
    console.log('Delete club:', clubId);
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
    <div className="clubs-page">
      <div className="table-container">
        <div className="table">
          <div className="table-header">
            <div className="header-row">
              <div className="header-cell logo-header">Logo</div>
              <div className="header-cell club-name-header">Club Name</div>
              <div className="header-cell country-header">Country</div>
              <div className="header-cell league-header">League</div>
              <div className="header-cell season-header">Season</div>
              <div className="header-actions">
                <button className="new-club-button" onClick={() => setShowNewModal(true)}>
                  <svg className="button-icon" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 9.75H9.75V15H8.25V9.75H3V8.25H8.25V3H9.75V8.25H15V9.75Z" fill="#0D0D0D"/>
                  </svg>
                  <span className="button-text">New Club</span>
                </button>
              </div>
            </div>
          </div>
          
          <div className="table-body">
            {clubs.map((club) => (
              <div key={club.id} className="table-row">
                <div className="table-cell logo-cell">
                  <img src={club.logo} alt="" className="club-logo" />
                </div>
                <div className="table-cell club-name-cell">{club.name}</div>
                <div className="table-cell country-cell">{club.country}</div>
                <div className="table-cell league-cell">{club.league}</div>
                <div className="table-cell season-cell">{club.season}</div>
                <div className="table-cell actions-cell">
                  <button className="action-button" onClick={() => handleEdit(club)}>
                    <svg className="action-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.54011 19.52C4.93011 19.52 4.36011 19.31 3.95011 18.92C3.43011 18.43 3.18011 17.69 3.27011 16.89L3.64011 13.65C3.71011 13.04 4.08011 12.23 4.51011 11.79L12.7201 3.09999C14.7701 0.929988 16.9101 0.869988 19.0801 2.91999C21.2501 4.96999 21.3101 7.10999 19.2601 9.27999L11.0501 17.97C10.6301 18.42 9.85011 18.84 9.24011 18.94L6.02011 19.49C5.85011 19.5 5.70011 19.52 5.54011 19.52ZM15.9301 2.90999C15.1601 2.90999 14.4901 3.38999 13.8101 4.10999L5.60011 12.81C5.40011 13.02 5.17011 13.52 5.13011 13.81L4.76011 17.05C4.72011 17.38 4.80011 17.65 4.98011 17.82C5.16011 17.99 5.43011 18.05 5.76011 18L8.98011 17.45C9.27011 17.4 9.75011 17.14 9.95011 16.93L18.1601 8.23999C19.4001 6.91999 19.8501 5.69999 18.0401 3.99999C17.2401 3.22999 16.5501 2.90999 15.9301 2.90999Z" fill="#9E9EA1"/>
                      <path d="M17.3401 10.95C17.3201 10.95 17.2901 10.95 17.2701 10.95C14.1501 10.64 11.6401 8.26997 11.1601 5.16997C11.1001 4.75997 11.3801 4.37997 11.7901 4.30997C12.2001 4.24997 12.5801 4.52997 12.6501 4.93997C13.0301 7.35997 14.9901 9.21997 17.4301 9.45997C17.8401 9.49997 18.1401 9.86997 18.1001 10.28C18.0501 10.66 17.7201 10.95 17.3401 10.95Z" fill="#9E9EA1"/>
                      <path d="M21.0001 22.75H3.00012C2.59012 22.75 2.25012 22.41 2.25012 22C2.25012 21.59 2.59012 21.25 3.00012 21.25H21.0001C21.4101 21.25 21.7501 21.59 21.7501 22C21.7501 22.41 21.4101 22.75 21.0001 22.75Z" fill="#9E9EA1"/>
                    </svg>
                  </button>
                  <button className="action-button" onClick={() => handleDelete(club.id)}>
                    <svg className="action-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.0001 22.75C6.07012 22.75 1.25012 17.93 1.25012 12C1.25012 6.07 6.07012 1.25 12.0001 1.25C17.9301 1.25 22.7501 6.07 22.7501 12C22.7501 17.93 17.9301 22.75 12.0001 22.75ZM12.0001 2.75C6.90012 2.75 2.75012 6.9 2.75012 12C2.75012 17.1 6.90012 21.25 12.0001 21.25C17.1001 21.25 21.2501 17.1 21.2501 12C21.2501 6.9 17.1001 2.75 12.0001 2.75Z" fill="#9E9EA1"/>
                      <path d="M9.17011 15.58C8.98011 15.58 8.79011 15.51 8.64011 15.36C8.35011 15.07 8.35011 14.59 8.64011 14.3L14.3001 8.63999C14.5901 8.34999 15.0701 8.34999 15.3601 8.63999C15.6501 8.92999 15.6501 9.40998 15.3601 9.69998L9.70011 15.36C9.56011 15.51 9.36011 15.58 9.17011 15.58Z" fill="#9E9EA1"/>
                      <path d="M14.8301 15.58C14.6401 15.58 14.4501 15.51 14.3001 15.36L8.64011 9.69998C8.35011 9.40998 8.35011 8.92999 8.64011 8.63999C8.93011 8.34999 9.41011 8.34999 9.70011 8.63999L15.3601 14.3C15.6501 14.59 15.6501 15.07 15.3601 15.36C15.2101 15.51 15.0201 15.58 14.8301 15.58Z" fill="#9E9EA1"/>
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
              <path d="M15 20.67C14.81 20.67 14.62 20.6 14.47 20.45L7.95 13.93C6.89 12.87 6.89 11.13 7.95 10.07L14.47 3.55002C14.76 3.26002 15.24 3.26002 15.53 3.55002C15.82 3.84002 15.82 4.32002 15.53 4.61002L9.01 11.13C8.53 11.61 8.53 12.39 9.01 12.87L15.53 19.39C15.82 19.68 15.82 20.16 15.53 20.45C15.38 20.59 15.19 20.67 15 20.67Z" fill={hasPreviousPage ? "#FCFCFC" : "#5E5E62"}/>
            </svg>
            <div className="pagination-text">Previous Page</div>
          </div>

          <div className="page-numbers">
            <div className="page-number active">{currentPage}</div>
            {currentPage < totalPages - 1 && (
              <>
                <div className="page-number">{currentPage + 1}</div>
                <div className="page-number">{currentPage + 2}</div>
                {currentPage < totalPages - 3 && <div className="page-number">...</div>}
                <div className="page-number">{totalPages}</div>
              </>
            )}
          </div>

          <div
            className={`next-page ${hasNextPage ? 'active' : 'disabled'}`}
            onClick={hasNextPage ? handleNextPage : undefined}
          >
            <div className="pagination-text">Next Page</div>
            <svg className="pagination-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.9101 20.67C8.7201 20.67 8.5301 20.6 8.3801 20.45C8.0901 20.16 8.0901 19.68 8.3801 19.39L14.9001 12.87C15.3801 12.39 15.3801 11.61 14.9001 11.13L8.3801 4.61002C8.0901 4.32002 8.0901 3.84002 8.3801 3.55002C8.6701 3.26002 9.1501 3.26002 9.4401 3.55002L15.9601 10.07C16.4701 10.58 16.7601 11.27 16.7601 12C16.7601 12.73 16.4801 13.42 15.9601 13.93L9.4401 20.45C9.2901 20.59 9.1001 20.67 8.9101 20.67Z" fill={hasNextPage ? "#FCFCFC" : "#5E5E62"}/>
            </svg>
          </div>
        </div>
      </div>

      {showNewModal && (
        <NewClubModal onClose={() => setShowNewModal(false)} />
      )}

      {showEditModal && (
        <EditClubModal 
          club={selectedClub}
          onClose={() => setShowEditModal(false)} 
        />
      )}
    </div>
  );
};

export default ClubsPage;
