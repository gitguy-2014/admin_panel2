import React, { useState } from 'react';
import './Modal.css';

/**
 * Modal component for creating a new league
 * Contains form fields for country selection, league name, and logo upload
 * @param {Function} onClose - Callback function to close the modal
 */
const NewLeagueModal = ({ onClose }) => {
  // Form state management for league creation
  const [formData, setFormData] = useState({
    country: '',
    leagueName: '',
    logo: null
  });

  /**
   * Handles changes to text inputs and select fields
   * @param {Event} e - Input change event
   */
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  /**
   * Handles form submission for creating a new league
   * Currently logs data - would integrate with API in production
   * @param {Event} e - Form submission event
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Creating new league:', formData);
    // TODO: Integrate with API to actually create league
    onClose();
  };

  /**
   * Handles logo file upload
   * Stores selected file in form state
   * @param {Event} e - File input change event
   */
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
        {/* Modal header with close button and title */}
        <div className="modal-header">
          {/* Close button with X icon */}
          <svg className="close-icon" onClick={onClose} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z" fill="#FCFCFC"/>
            <path d="M9.16986 15.58C8.97986 15.58 8.78986 15.51 8.63986 15.36C8.34986 15.07 8.34986 14.59 8.63986 14.3L14.2999 8.63999C14.5899 8.34999 15.0699 8.34999 15.3599 8.63999C15.6499 8.92999 15.6499 9.40998 15.3599 9.69998L9.69986 15.36C9.55986 15.51 9.35986 15.58 9.16986 15.58Z" fill="#FCFCFC"/>
            <path d="M14.8299 15.58C14.6399 15.58 14.4499 15.51 14.2999 15.36L8.63986 9.69998C8.34986 9.40998 8.34986 8.92999 8.63986 8.63999C8.92986 8.34999 9.40986 8.34999 9.69986 8.63999L15.3599 14.3C15.6499 14.59 15.6499 15.07 15.3599 15.36C15.2099 15.51 15.0199 15.58 14.8299 15.58Z" fill="#FCFCFC"/>
          </svg>
          <div className="modal-title">New League</div>
        </div>

        {/* Form fields container */}
        <div className="form-fields">
          {/* Country selection dropdown */}
          <div className="field-group">
            <div className="field-label">Country</div>
            <div className={`dropdown-field ${formData.country ? 'filled' : ''}`}>
              {/* Display current selection or placeholder */}
              <div className="dropdown-text">
                {formData.country ? formData.country.charAt(0).toUpperCase() + formData.country.slice(1) : 'Select Country'}
              </div>
              {/* Hidden select element for functionality */}
              <select
                name="country"
                value={formData.country}
                onChange={handleInputChange}
                className="dropdown-select"
              >
                <option value="">Select Country</option>
                <option value="belgium">Belgium</option>
                <option value="france">France</option>
                <option value="spain">Spain</option>
                <option value="germany">Germany</option>
                <option value="italy">Italy</option>
              </select>
              {/* Dropdown arrow icon */}
              <svg className="dropdown-arrow" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 16.8C11.3 16.8 10.6 16.53 10.07 16L3.55002 9.48001C3.26002 9.19001 3.26002 8.71001 3.55002 8.42001C3.84002 8.13001 4.32002 8.13001 4.61002 8.42001L11.13 14.94C11.61 15.42 12.39 15.42 12.87 14.94L19.39 8.42001C19.68 8.13001 20.16 8.13001 20.45 8.42001C20.74 8.71001 20.74 9.19001 20.45 9.48001L13.93 16C13.4 16.53 12.7 16.8 12 16.8Z" fill="#5E5E62"/>
              </svg>
            </div>
          </div>

          {/* League name text input */}
          <div className="field-group">
            <div className="field-label">League Name</div>
            <div className={`text-field ${formData.leagueName ? 'filled' : ''}`}>
              <input
                type="text"
                name="leagueName"
                value={formData.leagueName}
                onChange={handleInputChange}
                placeholder="Enter League Name"
                className="text-input"
                required
              />
            </div>
          </div>

          {/* Logo file upload section */}
          <div className="file-upload-container">
            <div className="file-upload-icon">
              {/* Hidden file input */}
              <input
                type="file"
                accept=".png"
                onChange={handleFileUpload}
                className="file-input"
                id="logo-upload"
              />
              {/* Custom styled upload button */}
              <label htmlFor="logo-upload" className="file-upload-label">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.99994 17.75C8.58994 17.75 8.24994 17.41 8.24994 17V12.81L7.52994 13.53C7.23994 13.82 6.75994 13.82 6.46994 13.53C6.17994 13.24 6.17994 12.76 6.46994 12.47L8.46994 10.47C8.67994 10.26 9.00994 10.19 9.28994 10.31C9.56994 10.42 9.74994 10.7 9.74994 11V17C9.74994 17.41 9.40994 17.75 8.99994 17.75Z" fill="#FCFCFC"/>
                  <path d="M10.9999 13.75C10.8099 13.75 10.6199 13.68 10.4699 13.53L8.46994 11.53C8.17994 11.24 8.17994 10.76 8.46994 10.47C8.75994 10.18 9.23994 10.18 9.52994 10.47L11.5299 12.47C11.8199 12.76 11.8199 13.24 11.5299 13.53C11.3799 13.68 11.1899 13.75 10.9999 13.75Z" fill="#FCFCFC"/>
                  <path d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H14C14.41 1.25 14.75 1.59 14.75 2C14.75 2.41 14.41 2.75 14 2.75H9C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V10C21.25 9.59 21.59 9.25 22 9.25C22.41 9.25 22.75 9.59 22.75 10V15C22.75 20.43 20.43 22.75 15 22.75Z" fill="#FCFCFC"/>
                  <path d="M22 10.75H18C14.58 10.75 13.25 9.42 13.25 6V2C13.25 1.7 13.43 1.42 13.71 1.31C13.99 1.19 14.31 1.26 14.53 1.47L22.53 9.47C22.74 9.68 22.81 10.01 22.69 10.29C22.57 10.57 22.3 10.75 22 10.75ZM14.75 3.81V6C14.75 8.58 15.42 9.25 18 9.25H20.19L14.75 3.81Z" fill="#FCFCFC"/>
                </svg>
              </label>
            </div>
            {/* File upload information and requirements */}
            <div className="file-upload-info">
              <div className="file-label">Logo</div>
              <div className="file-description">
                PNG Format - (Transparent)<br />
                Max file size allowed: 1MB
              </div>
            </div>
          </div>
        </div>

        {/* Form submission button */}
        <button type="submit" onClick={handleSubmit} className="save-button">
          <span>Save</span>
        </button>
      </div>
    </div>
  );
};

export default NewLeagueModal;
