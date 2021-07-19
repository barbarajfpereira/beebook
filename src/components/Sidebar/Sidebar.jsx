import './Sidebar.scss';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const tabs = ['posts', 'gallery', 'todos'];

const Sidebar = () => {
  const [activeTab, setActiveTab] = useState('');

  return (
    <ul className='sidebar'>
      {tabs.map((tab) => (
        <li
          onClick={() => setActiveTab(tab)}
          className={activeTab === tab ? 'active' : ''}
        >
          {activeTab === tab ? '>' : ''}
          <Link to={`/${tab}`}>{tab}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Sidebar;
