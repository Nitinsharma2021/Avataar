import React from 'react';
import NavBar from './components/NavBar/NavBar';
import Carousel from './components/Carousel/Carousel';
import FeaturedProducts from './components/FeaturedProducts/FeaturedProducts';

import './App.scss';

const slides = [
  {
    title: 'First Image',
    subtitle: 'This is the first subtitle',
    imageUrl: '/Images/first.jpg',
    link: '#first',
  },
  {
    title: 'Second Image',
    subtitle: 'This is the second subtitle',
    imageUrl: '/Images/second.jpg',
    link: '#second',
  },
  {
    title: 'Third Image',
    subtitle: 'This is the third subtitle',
    imageUrl: '/Images/third.jpg',
    link: '#third',
  },
];

function App() {
  return (
    <div className="App">
      <NavBar />
      <Carousel slides={slides} />
    </div>
  );
}

export default App;
