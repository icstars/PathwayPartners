import React, { useState, useEffect } from "react";
import "./settings.css";
import BarNav from "../navbar/Navbar";

const Settings = () => {
  const [darkMode, setDarkMode] = useState(localStorage.getItem("darkMode") === "true");
  const [language, setLanguage] = useState(localStorage.getItem("language") || "English");
  const [notifications, setNotifications] = useState(localStorage.getItem("notifications") === "true");
  const [fontSize, setFontSize] = useState(localStorage.getItem("fontSize") || "medium");
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "default");

  useEffect(() => {
    document.body.style.fontSize = fontSize === "small" ? "14px" : fontSize === "large" ? "18px" : "16px";
  }, [fontSize]);

  // Toggle Dark Mode
  const handleDarkModeChange = () => {
    setDarkMode((prevMode) => !prevMode);
    localStorage.setItem("darkMode", !darkMode);
  };

  // Change Language
  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
    localStorage.setItem("language", e.target.value);
  };

  // Toggle Notifications
  const handleNotificationsChange = () => {
    setNotifications((prev) => !prev);
    localStorage.setItem("notifications", !notifications);
  };

  // Change Font Size
  const handleFontSizeChange = (e) => {
    setFontSize(e.target.value);
    localStorage.setItem("fontSize", e.target.value);
  };

  // Change Theme
  const handleThemeChange = (e) => {
    setTheme(e.target.value);
    localStorage.setItem("theme", e.target.value);
  };

  return (
    <div className={`settings-container ${darkMode ? "dark-mode" : ""}`}>
      {/* <BarNav /> */}
      <h1>Settings</h1>

      {/* Dark Mode */}
      <div className="setting-item">
        <label htmlFor="darkModeToggle">Dark Mode</label>
        <input
          type="checkbox"
          id="darkModeToggle"
          checked={darkMode}
          onChange={handleDarkModeChange}
        />
      </div>

      {/* Language Selection */}
      <div className="setting-item">
        <label htmlFor="languageSelect">Language</label>
        <select id="languageSelect" value={language} onChange={handleLanguageChange}>
          <option value="English">English</option>
          <option value="Spanish">Spanish</option>
          <option value="French">French</option>
        </select>
      </div>

      {/* Notifications Toggle */}
      <div className="setting-item">
        <label htmlFor="notificationsToggle">Enable Notifications</label>
        <input
          type="checkbox"
          id="notificationsToggle"
          checked={notifications}
          onChange={handleNotificationsChange}
        />
      </div>

      {/* Font Size Selector */}
      <div className="setting-item">
        <label htmlFor="fontSizeSelect">Font Size</label>
        <select id="fontSizeSelect" value={fontSize} onChange={handleFontSizeChange}>
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>
      </div>

      {/* Theme Selector */}
      <div className="setting-item">
        <label htmlFor="themeSelect">Theme</label>
        <select id="themeSelect" value={theme} onChange={handleThemeChange}>
          <option value="default">Default</option>
          <option value="blue">Blue</option>
          <option value="green">Green</option>
        </select>
      </div>
    </div>
  );
};

export default Settings;
