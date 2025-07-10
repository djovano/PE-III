import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaPaw, FaCalendarCheck } from 'react-icons/fa';
import './Sidebar.css';

function Sidebar() {
  const location = useLocation();

  return (
    <div className="sidebar">
      <h2>🐾</h2>
      <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
        <FaPaw size={24} />
      </Link>
      <Link to="/vacinas" className={location.pathname === '/vacinas' ? 'active' : ''}>
        <FaCalendarCheck size={24} />
      </Link>
    </div>
  );
}

export default Sidebar;
