import React, { useState } from 'react';
import './Modal.css';

const NewLeagueModal = ({ onClose }) => {
  const [formData, setFormData] = useState({
    country: '',
    leagueName: '',
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
    console.log('Creating new league:', formData);
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
          <div className="modal-title">New League</div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-fields">
            <div className="field-group">
              <label className="field-label">Country</label>
              <div className={`dropdown-field ${formData.country ? 'filled' : ''}`}>
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  className={`dropdown-select ${formData.country ? 'filled' : ''}`}
                >
                  <option value="">Select Country</option>
                  <option value="belgium">Belgium</option>
                  <option value="france">France</option>
                  <option value="spain">Spain</option>
                  <option value="germany">Germany</option>
                  <option value="italy">Italy</option>
                </select>
                <svg className="dropdown-arrow" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.0034 16.7999C11.3034 16.7999 10.6034 16.5299 10.0734 15.9999L3.55344 9.47989C3.26344 9.18989 3.26344 8.70989 3.55344 8.41989C3.84344 8.12989 4.32344 8.12989 4.61344 8.41989L11.1334 14.9399C11.6134 15.4199 12.3934 15.4199 12.8734 14.9399L19.3934 8.41989C19.6834 8.12989 20.1634 8.12989 20.4534 8.41989C20.7434 8.70989 20.7434 9.18989 20.4534 9.47989L13.9334 15.9999C13.4034 16.5299 12.7034 16.7999 12.0034 16.7999Z" fill="#5E5E62"/>
                </svg>
              </div>
            </div>

            <div className="field-group">
              <label className="field-label">League Name</label>
              <div className={`text-field ${formData.leagueName ? 'filled' : ''}`}>
                <input
                  type="text"
                  name="leagueName"
                  value={formData.leagueName}
                  onChange={handleInputChange}
                  placeholder="Enter League Name"
                  className={`text-input ${formData.leagueName ? 'filled' : ''}`}
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
                    <path d="M8.9975 17.75C8.5875 17.75 8.2475 17.41 8.2475 17V12.81L7.5275 13.53C7.2375 13.82 6.7575 13.82 6.4675 13.53C6.1775 13.24 6.1775 12.76 6.4675 12.47L8.4675 10.47C8.6775 10.26 9.0075 10.19 9.2875 10.31C9.5675 10.42 9.7475 10.7 9.7475 11V17C9.7475 17.41 9.4075 17.75 8.9975 17.75Z" fill="#FCFCFC"/>
                    <path d="M10.9975 13.7499C10.8075 13.7499 10.6175 13.6799 10.4675 13.5299L8.4675 11.5299C8.1775 11.2399 8.1775 10.7599 8.4675 10.4699C8.7575 10.1799 9.2375 10.1799 9.5275 10.4699L11.5275 12.4699C11.8175 12.7599 11.8175 13.2399 11.5275 13.5299C11.3775 13.6799 11.1875 13.7499 10.9975 13.7499Z" fill="#FCFCFC"/>
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

export default NewLeagueModal;
