import React, { useState, useEffect, useRef } from 'react';
import './NavBar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faAngleDown } from '@fortawesome/free-solid-svg-icons'; // Add faAngleDown

const menuItems = [
  { id: 'home', title: 'HOME', url: '#' },
  { id: 'electronics', title: 'ELECTRONICS', url: '#' },
  { id: 'books', title: 'BOOKS', url: '#' },
  { id: 'music', title: 'MUSIC', url: '#' },
  { id: 'movies', title: 'MOVIES', url: '#' },
  { id: 'clothing', title: 'CLOTHING', url: '#' },
  { id: 'games', title: 'GAMES', url: '#' },
  { id: 'furniture', title: 'FURNITURE', url: '#' },
  { id: 'travel', title: 'TRAVEL', url: '#' },
  { id: 'botanical', title: 'BOTANICAL', url: '#' },
  { id: 'category', title: 'CATEGORY NAME', url: '#' },
];

const DynamicNav = () => {
  const navRef = useRef(null);
  const [visibleItems, setVisibleItems] = useState(menuItems);
  const [moreItems, setMoreItems] = useState([]);

  useEffect(() => {
    const updateMenuItems = () => {
      const availableWidth = navRef.current.offsetWidth;
      const moreWidth = 100;
      let usedWidth = 0;
      const updatedVisibleItems = [];
      const updatedMoreItems = [];

      menuItems.forEach(item => {
        const itemWidth = 150;
        if (usedWidth + itemWidth < availableWidth - moreWidth) {
          updatedVisibleItems.push(item);
          usedWidth += itemWidth;
        } else {
          updatedMoreItems.push(item);
        }
      });

      setVisibleItems(updatedVisibleItems);
      setMoreItems(updatedMoreItems);
    };

    updateMenuItems();

    window.addEventListener('resize', updateMenuItems);
    return () => window.removeEventListener('resize', updateMenuItems);
  }, []);

  return (
    <div>
      <nav ref={navRef} className="dynamic-nav">
        <img className="logo-icon" src="Images/ecomm-logo.jpg" alt="ECOMM Logo" />
        <div className="ecomm-logo">
          E-COMM
        </div>
        <ul className="menu-items">
          {visibleItems.map(item => (
            <li key={item.id}><a href={item.url}>{item.title}</a></li>
          ))}
          {moreItems.length > 0 && (
            <li className="more">
              MORE <FontAwesomeIcon icon={faAngleDown} className="dropdown-icon" />
              <ul className="more-items">
                {moreItems.map(item => (
                  <li key={item.id}><a href={item.url}>{item.title}</a></li>
                ))}
              </ul>
            </li>
          )}
        </ul>
        <div className="search-bar">
          <div className="search-container">
            <input type="text" placeholder="Search something" />
            <FontAwesomeIcon icon={faSearch} className="search-icon" />
          </div>
        </div>
      </nav>

      <div className="featured-products">
        <h2 className="featured-title">Featured Products</h2>
        <p className="featured-description">Explore and Discover a variety of products</p>
      </div>
    </div>
  );
};

export default DynamicNav;
