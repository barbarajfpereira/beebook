import './Sidebar.scss';
import React, { useState } from 'react';

const tabs = ['posts', 'gallery', 'todos'];

const Sidebar = () => {
  const [activeTab, setActiveTab] = useState('posts');

  return (
    <ul className='sidebar'>
      {tabs.map((tab) => (
        <li
          onClick={() => setActiveTab(tab)}
          className={activeTab === tab ? 'active' : ''}
        >
          {tab}
        </li>
      ))}
    </ul>
  );
};

export default Sidebar;
