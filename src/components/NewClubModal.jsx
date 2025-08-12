import React, { useState } from 'react';
import './Modal.css';

const NewClubModal = ({ onClose }) => {
  const [formData, setFormData] = useState({
    country: '',
    league: '',
    season: '',
    clubName: '',
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
    console.log('Creating new club:', formData);
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
      <div className="modal-container">
        <div className="modal-header">
          <button className="close-btn" onClick={onClose}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z" fill="#FCFCFC"/>
              <path d="M9.16999 15.58C8.97999 15.58 8.78999 15.51 8.63999 15.36C8.34999 15.07 8.34999 14.59 8.63999 14.3L14.3 8.63999C14.59 8.34999 15.07 8.34999 15.36 8.63999C15.65 8.92999 15.65 9.40998 15.36 9.69998L9.69998 15.36C9.55998 15.51 9.35999 15.58 9.16999 15.58Z" fill="#FCFCFC"/>
              <path d="M14.83 15.58C14.64 15.58 14.45 15.51 14.3 15.36L8.63999 9.69998C8.34999 9.40998 8.34999 8.92999 8.63999 8.63999C8.92999 8.34999 9.40998 8.34999 9.69998 8.63999L15.36 14.3C15.65 14.59 15.65 15.07 15.36 15.36C15.21 15.51 15.02 15.58 14.83 15.58Z" fill="#FCFCFC"/>
            </svg>
          </button>
          <h2 className="modal-title">New Club</h2>
        </div>

        <form onSubmit={handleSubmit} className="modal-form">
          <div className="form-fields">
            <div className="form-group">
              <label className="form-label">Country</label>
              <div className={`dropdown-field ${formData.country ? 'filled' : ''}`}>
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  className="dropdown-select"
                  required
                >
                  <option value="">Select Country</option>
                  <option value="Argentina">Argentina</option>
                  <option value="Belgium">Belgium</option>
                  <option value="France">France</option>
                  <option value="Spain">Spain</option>
                  <option value="Germany">Germany</option>
                  <option value="Italy">Italy</option>
                </select>
                <div className={`dropdown-text ${formData.country ? 'filled' : ''}`}>
                  {formData.country || 'Select Country'}
                </div>
                <svg className="dropdown-arrow" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 16.8C11.3 16.8 10.6 16.53 10.07 16L3.55002 9.48001C3.26002 9.19001 3.26002 8.71001 3.55002 8.42001C3.84002 8.13001 4.32002 8.13001 4.61002 8.42001L11.13 14.94C11.61 15.42 12.39 15.42 12.87 14.94L19.39 8.42001C19.68 8.13001 20.16 8.13001 20.45 8.42001C20.74 8.71001 20.74 9.19001 20.45 9.48001L13.93 16C13.4 16.53 12.7 16.8 12 16.8Z" fill="#5E5E62"/>
                </svg>
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">League</label>
              <div className={`dropdown-field ${formData.league ? 'filled' : ''}`}>
                <select
                  name="league"
                  value={formData.league}
                  onChange={handleInputChange}
                  className="dropdown-select"
                  required
                >
                  <option value="">Select League</option>
                  <option value="Liga Profesional">Liga Profesional</option>
                  <option value="Premier League">Premier League</option>
                  <option value="La Liga">La Liga</option>
                  <option value="Bundesliga">Bundesliga</option>
                  <option value="Serie A">Serie A</option>
                </select>
                <div className={`dropdown-text ${formData.league ? 'filled' : ''}`}>
                  {formData.league || 'Select League'}
                </div>
                <svg className="dropdown-arrow" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 16.8C11.3 16.8 10.6 16.53 10.07 16L3.55002 9.48001C3.26002 9.19001 3.26002 8.71001 3.55002 8.42001C3.84002 8.13001 4.32002 8.13001 4.61002 8.42001L11.13 14.94C11.61 15.42 12.39 15.42 12.87 14.94L19.39 8.42001C19.68 8.13001 20.16 8.13001 20.45 8.42001C20.74 8.71001 20.74 9.19001 20.45 9.48001L13.93 16C13.4 16.53 12.7 16.8 12 16.8Z" fill="#5E5E62"/>
                </svg>
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Season</label>
              <div className={`dropdown-field ${formData.season ? 'filled' : ''}`}>
                <select
                  name="season"
                  value={formData.season}
                  onChange={handleInputChange}
                  className="dropdown-select"
                  required
                >
                  <option value="">Select Season</option>
                  <option value="2024 - 25">2024 - 25</option>
                  <option value="2023 - 24">2023 - 24</option>
                  <option value="2022 - 23">2022 - 23</option>
                </select>
                <div className={`dropdown-text ${formData.season ? 'filled' : ''}`}>
                  {formData.season || 'Select Season'}
                </div>
                <svg className="dropdown-arrow" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 16.8C11.3 16.8 10.6 16.53 10.07 16L3.55002 9.48001C3.26002 9.19001 3.26002 8.71001 3.55002 8.42001C3.84002 8.13001 4.32002 8.13001 4.61002 8.42001L11.13 14.94C11.61 15.42 12.39 15.42 12.87 14.94L19.39 8.42001C19.68 8.13001 20.16 8.13001 20.45 8.42001C20.74 8.71001 20.74 9.19001 20.45 9.48001L13.93 16C13.4 16.53 12.7 16.8 12 16.8Z" fill="#5E5E62"/>
                </svg>
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Club Name</label>
              <div className={`text-field ${formData.clubName ? 'filled' : ''}`}>
                <input
                  type="text"
                  name="clubName"
                  value={formData.clubName}
                  onChange={handleInputChange}
                  placeholder="Enter Club Name"
                  className={`text-input ${formData.clubName ? 'filled' : ''}`}
                  required
                />
              </div>
            </div>

            <div className="file-upload-container">
              <div className="file-upload-icon">
                <input 
                  type="file"
                  accept=".png"
                  onChange={handleFileUpload}
                  className="file-input"
                  id="logo-upload"
                />
                <label htmlFor="logo-upload" className="file-upload-label">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.99994 17.75C8.58994 17.75 8.24994 17.41 8.24994 17V12.81L7.52994 13.53C7.23994 13.82 6.75994 13.82 6.46994 13.53C6.17994 13.24 6.17994 12.76 6.46994 12.47L8.46994 10.47C8.67994 10.26 9.00994 10.19 9.28994 10.31C9.56994 10.42 9.74994 10.7 9.74994 11V17C9.74994 17.41 9.40994 17.75 8.99994 17.75Z" fill="#FCFCFC"/>
                    <path d="M10.9999 13.7499C10.8099 13.7499 10.6199 13.6799 10.4699 13.5299L8.46994 11.5299C8.17994 11.2399 8.17994 10.7599 8.46994 10.4699C8.75994 10.1799 9.23994 10.1799 9.52994 10.4699L11.5299 12.4699C11.8199 12.7599 11.8199 13.2399 11.5299 13.5299C11.3799 13.6799 11.1899 13.7499 10.9999 13.7499Z" fill="#FCFCFC"/>
                    <path d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H14C14.41 1.25 14.75 1.59 14.75 2C14.75 2.41 14.41 2.75 14 2.75H9C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V10C21.25 9.59 21.59 9.25 22 9.25C22.41 9.25 22.75 9.59 22.75 10V15C22.75 20.43 20.43 22.75 15 22.75Z" fill="#FCFCFC"/>
                    <path d="M22 10.75H18C14.58 10.75 13.25 9.41999 13.25 5.99999V1.99999C13.25 1.69999 13.43 1.41999 13.71 1.30999C13.99 1.18999 14.31 1.25999 14.53 1.46999L22.53 9.46999C22.74 9.67999 22.81 10.01 22.69 10.29C22.57 10.57 22.3 10.75 22 10.75ZM14.75 3.80999V5.99999C14.75 8.57999 15.42 9.24999 18 9.24999H20.19L14.75 3.80999Z" fill="#FCFCFC"/>
                  </svg>
                </label>
              </div>
              <div className="file-upload-info">
                <div className="file-label">Logo</div>
                <div className="file-description">
                  PNG Format - (Transparent)<br />
                  Max file size allowed: 1MB
                </div>
              </div>
            </div>
          </div>

          <button type="submit" className="save-button">
            <span>Save</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewClubModal;
