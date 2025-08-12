import React, { useState } from 'react';
import './Modal.css';

const EditLeagueModal = ({ league, onClose }) => {
  const [formData, setFormData] = useState({
    country: 'Belgium',
    leagueName: 'Jupiler Pro League',
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
    console.log('Updating league:', formData);
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
          <svg className="close-icon" onClick={onClose} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z" fill="#FCFCFC"/>
            <path d="M9.16986 15.58C8.97986 15.58 8.78986 15.51 8.63986 15.36C8.34986 15.07 8.34986 14.59 8.63986 14.3L14.2999 8.63999C14.5899 8.34999 15.0699 8.34999 15.3599 8.63999C15.6499 8.92999 15.6499 9.40998 15.3599 9.69998L9.69986 15.36C9.55986 15.51 9.35986 15.58 9.16986 15.58Z" fill="#FCFCFC"/>
            <path d="M14.8299 15.58C14.6399 15.58 14.4499 15.51 14.2999 15.36L8.63986 9.69998C8.34986 9.40998 8.34986 8.92999 8.63986 8.63999C8.92986 8.34999 9.40986 8.34999 9.69986 8.63999L15.3599 14.3C15.6499 14.59 15.6499 15.07 15.3599 15.36C15.2099 15.51 15.0199 15.58 14.8299 15.58Z" fill="#FCFCFC"/>
          </svg>
          <div className="modal-title">Edit League</div>
        </div>

        <div className="form-fields">
          <div className="field-group">
            <div className="field-label">Country</div>
            <div className="dropdown-field filled">
              <div className="dropdown-text filled">Belgium</div>
              <select
                name="country"
                value={formData.country}
                onChange={handleInputChange}
                className="dropdown-select filled"
              >
                <option value="Belgium">Belgium</option>
                <option value="France">France</option>
                <option value="Spain">Spain</option>
                <option value="Germany">Germany</option>
                <option value="Italy">Italy</option>
              </select>
              <svg className="dropdown-arrow" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 16.8C11.3 16.8 10.6 16.53 10.07 16L3.55002 9.48001C3.26002 9.19001 3.26002 8.71001 3.55002 8.42001C3.84002 8.13001 4.32002 8.13001 4.61002 8.42001L11.13 14.94C11.61 15.42 12.39 15.42 12.87 14.94L19.39 8.42001C19.68 8.13001 20.16 8.13001 20.45 8.42001C20.74 8.71001 20.74 9.19001 20.45 9.48001L13.93 16C13.4 16.53 12.7 16.8 12 16.8Z" fill="#FCFCFC"/>
              </svg>
            </div>
          </div>

          <div className="field-group">
            <div className="field-label">League Name</div>
            <div className="text-field filled">
              <input
                type="text"
                name="leagueName"
                value={formData.leagueName}
                onChange={handleInputChange}
                className="text-input filled"
                required
              />
            </div>
          </div>

          <div className="edit-logo-container">
            <div className="current-logo">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/d901f8d8f71e8d6efe317f3ecb0805588ea60e86?width=160" 
                alt="Current logo" 
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

        <button type="submit" onClick={handleSubmit} className="save-button">
          <span>Save</span>
        </button>
      </div>
    </div>
  );
};

export default EditLeagueModal;
