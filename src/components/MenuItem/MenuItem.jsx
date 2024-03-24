import React from 'react';
import './MenuItem.scss';

const MenuItem = ({ label, link }) => {
  return (
    <a href={link} className="menu-item">
      {label}
    </a>
  );
};

export default MenuItem;
