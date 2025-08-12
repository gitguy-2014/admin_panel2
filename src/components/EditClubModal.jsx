import React, { useState } from 'react';
import './Modal.css';

const EditClubModal = ({ club, onClose }) => {
  const [formData, setFormData] = useState({
    country: club?.country || 'Argentina',
    league: club?.league || 'Liga Profesional',
    season: club?.season || '2024 - 25',
    clubName: club?.name || 'AA Argentinos Juniors',
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
      <div className="modal-container">
        <div className="modal-header">
          <button className="close-btn" onClick={onClose}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z" fill="#FCFCFC"/>
              <path d="M9.16999 15.58C8.97999 15.58 8.78999 15.51 8.63999 15.36C8.34999 15.07 8.34999 14.59 8.63999 14.3L14.3 8.63999C14.59 8.34999 15.07 8.34999 15.36 8.63999C15.65 8.92999 15.65 9.40998 15.36 9.69998L9.69998 15.36C9.55998 15.51 9.35999 15.58 9.16999 15.58Z" fill="#FCFCFC"/>
              <path d="M14.83 15.58C14.64 15.58 14.45 15.51 14.3 15.36L8.63999 9.69998C8.34999 9.40998 8.34999 8.92999 8.63999 8.63999C8.92999 8.34999 9.40998 8.34999 9.69998 8.63999L15.36 14.3C15.65 14.59 15.65 15.07 15.36 15.36C15.21 15.51 15.02 15.58 14.83 15.58Z" fill="#FCFCFC"/>
            </svg>
          </button>
          <h2 className="modal-title">Edit Club</h2>
        </div>

        <form onSubmit={handleSubmit} className="modal-form">
          <div className="form-fields">
            <div className="form-group">
              <label className="form-label">Country</label>
              <div className="dropdown-field filled">
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  className="dropdown-select"
                  required
                >
                  <option value="Argentina">Argentina</option>
                  <option value="Belgium">Belgium</option>
                  <option value="France">France</option>
                  <option value="Spain">Spain</option>
                  <option value="Germany">Germany</option>
                  <option value="Italy">Italy</option>
                </select>
                <div className="dropdown-text filled">
                  {formData.country}
                </div>
                <svg className="dropdown-arrow" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 16.8C11.3 16.8 10.6 16.53 10.07 16L3.55002 9.48001C3.26002 9.19001 3.26002 8.71001 3.55002 8.42001C3.84002 8.13001 4.32002 8.13001 4.61002 8.42001L11.13 14.94C11.61 15.42 12.39 15.42 12.87 14.94L19.39 8.42001C19.68 8.13001 20.16 8.13001 20.45 8.42001C20.74 8.71001 20.74 9.19001 20.45 9.48001L13.93 16C13.4 16.53 12.7 16.8 12 16.8Z" fill="#FCFCFC"/>
                </svg>
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">League</label>
              <div className="dropdown-field filled">
                <select
                  name="league"
                  value={formData.league}
                  onChange={handleInputChange}
                  className="dropdown-select"
                  required
                >
                  <option value="Liga Profesional">Liga Profesional</option>
                  <option value="Premier League">Premier League</option>
                  <option value="La Liga">La Liga</option>
                  <option value="Bundesliga">Bundesliga</option>
                  <option value="Serie A">Serie A</option>
                </select>
                <div className="dropdown-text filled">
                  {formData.league}
                </div>
                <svg className="dropdown-arrow" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 16.8C11.3 16.8 10.6 16.53 10.07 16L3.55002 9.48001C3.26002 9.19001 3.26002 8.71001 3.55002 8.42001C3.84002 8.13001 4.32002 8.13001 4.61002 8.42001L11.13 14.94C11.61 15.42 12.39 15.42 12.87 14.94L19.39 8.42001C19.68 8.13001 20.16 8.13001 20.45 8.42001C20.74 8.71001 20.74 9.19001 20.45 9.48001L13.93 16C13.4 16.53 12.7 16.8 12 16.8Z" fill="#FCFCFC"/>
                </svg>
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Season</label>
              <div className="dropdown-field filled">
                <select
                  name="season"
                  value={formData.season}
                  onChange={handleInputChange}
                  className="dropdown-select"
                  required
                >
                  <option value="2024 - 25">2024 - 25</option>
                  <option value="2023 - 24">2023 - 24</option>
                  <option value="2022 - 23">2022 - 23</option>
                </select>
                <div className="dropdown-text filled">
                  {formData.season}
                </div>
                <svg className="dropdown-arrow" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 16.7999C11.3 16.7999 10.6 16.5299 10.07 15.9999L3.55002 9.47989C3.26002 9.18989 3.26002 8.70989 3.55002 8.41989C3.84002 8.12989 4.32002 8.12989 4.61002 8.41989L11.13 14.9399C11.61 15.4199 12.39 15.4199 12.87 14.9399L19.39 8.41989C19.68 8.12989 20.16 8.12989 20.45 8.41989C20.74 8.70989 20.74 9.18989 20.45 9.47989L13.93 15.9999C13.4 16.5299 12.7 16.7999 12 16.7999Z" fill="#FCFCFC"/>
                </svg>
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Club Name</label>
              <div className="text-field filled">
                <input
                  type="text"
                  name="clubName"
                  value={formData.clubName}
                  onChange={handleInputChange}
                  placeholder="Enter Club Name"
                  className="text-input filled"
                  required
                />
              </div>
            </div>

            <div className="edit-logo-container">
              <div className="current-logo">
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/b7ddb62eaa88bdec6f78f9dd8bd0875b26941a54?width=160" 
                  alt="Current club logo" 
                />
              </div>
              <div className="logo-info">
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

export default EditClubModal;
