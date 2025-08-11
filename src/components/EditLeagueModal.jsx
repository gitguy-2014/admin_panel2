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
            <path d="M9.16937 15.5801C8.97937 15.5801 8.78938 15.5101 8.63938 15.3601C8.34938 15.0701 8.34938 14.5901 8.63938 14.3001L14.2994 8.64011C14.5894 8.35011 15.0694 8.35011 15.3594 8.64011C15.6494 8.93011 15.6494 9.41011 15.3594 9.70011L9.69937 15.3601C9.55937 15.5101 9.35937 15.5801 9.16937 15.5801Z" fill="#FCFCFC"/>
            <path d="M14.8294 15.5801C14.6394 15.5801 14.4494 15.5101 14.2994 15.3601L8.63938 9.70011C8.34938 9.41011 8.34938 8.93011 8.63938 8.64011C8.92937 8.35011 9.40937 8.35011 9.69937 8.64011L15.3594 14.3001C15.6494 14.5901 15.6494 15.0701 15.3594 15.3601C15.2094 15.5101 15.0194 15.5801 14.8294 15.5801Z" fill="#FCFCFC"/>
          </svg>
          <div className="modal-title">Edit League</div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-fields">
            <div className="field-group">
              <label className="field-label">Country</label>
              <div className="dropdown-field filled">
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  className="dropdown-select filled"
                >
                  <option value="belgium">Belgium</option>
                  <option value="france">France</option>
                  <option value="spain">Spain</option>
                  <option value="germany">Germany</option>
                  <option value="italy">Italy</option>
                </select>
                <svg className="dropdown-arrow" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.0034 16.7999C11.3034 16.7999 10.6034 16.5299 10.0734 15.9999L3.55344 9.47989C3.26344 9.18989 3.26344 8.70989 3.55344 8.41989C3.84344 8.12989 4.32344 8.12989 4.61344 8.41989L11.1334 14.9399C11.6134 15.4199 12.3934 15.4199 12.8734 14.9399L19.3934 8.41989C19.6834 8.12989 20.1634 8.12989 20.4534 8.41989C20.7434 8.70989 20.7434 9.18989 20.4534 9.47989L13.9334 15.9999C13.4034 16.5299 12.7034 16.7999 12.0034 16.7999Z" fill="#FCFCFC"/>
                </svg>
              </div>
            </div>

            <div className="field-group">
              <label className="field-label">League Name</label>
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

            <div className="file-upload-container">
              <div className="current-logo">
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/d901f8d8f71e8d6efe317f3ecb0805588ea60e86?width=160" 
                  alt="Current logo" 
                  className="logo-preview"
                />
              </div>
              <div className="file-upload-info">
                <div className="file-label">Logo</div>
                <div className="file-description">
                  PNG Format - (Transparent)<br />
                  Max file size allowed: 1MB
                </div>
                <input 
                  type="file"
                  accept=".png"
                  onChange={handleFileUpload}
                  className="file-input"
                  id="logo-upload-edit"
                />
                <label htmlFor="logo-upload-edit" className="change-logo-button">
                  Change Logo
                </label>
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

export default EditLeagueModal;
