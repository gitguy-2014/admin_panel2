import React, { useState } from 'react';
import './Modal.css';

const EditClubModal = ({ club, onClose }) => {
  const [formData, setFormData] = useState({
    country: club?.country || 'Argentina',
    league: club?.league || 'Liga Profesional',
    season: club?.season || '2024 - 25',
    clubName: club?.name || '',
    logo: null
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Updating club:', formData);
    onClose();
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData(prev => ({
        ...prev,
        logo: file
      }));
    }
  };

  return (
    <div className="modal-overlay">
      <div className="club-modal-container">
        <div className="modal-header">
          <button className="close-btn" onClick={onClose}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z" fill="#FCFCFC"/>
              <path d="M9.16937 15.5801C8.97937 15.5801 8.78938 15.5101 8.63938 15.3601C8.34938 15.0701 8.34938 14.5901 8.63938 14.3001L14.2994 8.64011C14.5894 8.35011 15.0694 8.35011 15.3594 8.64011C15.6494 8.93011 15.6494 9.41011 15.3594 9.70011L9.69937 15.3601C9.55937 15.5101 9.35937 15.5801 9.16937 15.5801Z" fill="#FCFCFC"/>
              <path d="M14.8294 15.5801C14.6394 15.5801 14.4494 15.5101 14.2994 15.3601L8.63938 9.70011C8.34938 9.41011 8.34938 8.93011 8.63938 8.64011C8.92937 8.35011 9.40937 8.35011 9.69937 8.64011L15.3594 14.3001C15.6494 14.5901 15.6494 15.0701 15.3594 15.3601C15.2094 15.5101 15.0194 15.5801 14.8294 15.5801Z" fill="#FCFCFC"/>
            </svg>
          </button>
          <h2 className="modal-title">Edit Club</h2>
        </div>

        <form onSubmit={handleSubmit} className="modal-form">
          <div className="form-fields">
            <div className="form-group">
              <label className="form-label">Country</label>
              <div className="select-wrapper">
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  className="form-select filled"
                >
                  <option value="Argentina">Argentina</option>
                  <option value="Belgium">Belgium</option>
                  <option value="France">France</option>
                  <option value="Spain">Spain</option>
                  <option value="Germany">Germany</option>
                  <option value="Italy">Italy</option>
                </select>
                <svg className="select-arrow" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 16.8C11.3 16.8 10.6 16.53 10.07 16L3.55002 9.48001C3.26002 9.19001 3.26002 8.71001 3.55002 8.42001C3.84002 8.13001 4.32002 8.13001 4.61002 8.42001L11.13 14.94C11.61 15.42 12.39 15.42 12.87 14.94L19.39 8.42001C19.68 8.13001 20.16 8.13001 20.45 8.42001C20.74 8.71001 20.74 9.19001 20.45 9.48001L13.93 16C13.4 16.53 12.7 16.8 12 16.8Z" fill="#FCFCFC"/>
                </svg>
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">League</label>
              <div className="select-wrapper">
                <select
                  name="league"
                  value={formData.league}
                  onChange={handleInputChange}
                  className="form-select filled"
                >
                  <option value="Liga Profesional">Liga Profesional</option>
                  <option value="Premier League">Premier League</option>
                  <option value="La Liga">La Liga</option>
                  <option value="Bundesliga">Bundesliga</option>
                  <option value="Serie A">Serie A</option>
                </select>
                <svg className="select-arrow" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 16.8C11.3 16.8 10.6 16.53 10.07 16L3.55002 9.48001C3.26002 9.19001 3.26002 8.71001 3.55002 8.42001C3.84002 8.13001 4.32002 8.13001 4.61002 8.42001L11.13 14.94C11.61 15.42 12.39 15.42 12.87 14.94L19.39 8.42001C19.68 8.13001 20.16 8.13001 20.45 8.42001C20.74 8.71001 20.74 9.19001 20.45 9.48001L13.93 16C13.4 16.53 12.7 16.8 12 16.8Z" fill="#FCFCFC"/>
                </svg>
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Season</label>
              <div className="select-wrapper">
                <select
                  name="season"
                  value={formData.season}
                  onChange={handleInputChange}
                  className="form-select filled"
                >
                  <option value="2024 - 25">2024 - 25</option>
                  <option value="2023 - 24">2023 - 24</option>
                  <option value="2022 - 23">2022 - 23</option>
                </select>
                <svg className="select-arrow" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 16.8C11.3 16.8 10.6 16.53 10.07 16L3.55002 9.48001C3.26002 9.19001 3.26002 8.71001 3.55002 8.42001C3.84002 8.13001 4.32002 8.13001 4.61002 8.42001L11.13 14.94C11.61 15.42 12.39 15.42 12.87 14.94L19.39 8.42001C19.68 8.13001 20.16 8.13001 20.45 8.42001C20.74 8.71001 20.74 9.19001 20.45 9.48001L13.93 16C13.4 16.53 12.7 16.8 12 16.8Z" fill="#FCFCFC"/>
                </svg>
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Club Name</label>
              <input
                type="text"
                name="clubName"
                value={formData.clubName}
                onChange={handleInputChange}
                placeholder="Enter Club Name"
                className="form-input filled"
                required
              />
            </div>

            <div className="logo-upload-section">
              {club?.logo && (
                <div className="current-logo-preview">
                  <img 
                    src={club.logo} 
                    alt="Current club logo" 
                    className="logo-image"
                  />
                </div>
              )}
              <div className="upload-info">
                <div className="upload-title">Logo</div>
                <div className="upload-description">
                  PNG Format - (Transparent)<br />
                  Max file size allowed: 1MB
                </div>
              </div>
            </div>
          </div>

          <button type="submit" className="save-btn">
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditClubModal;
