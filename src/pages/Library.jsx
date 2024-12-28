import React from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import booksData from '../JSON/library.json';

const Library = () => {
    const importAll = (r) => {
      let images = {};
      r.keys().forEach((item, index) => {
        images[item.replace('./', '')] = r(item);
      });
      return images;
    };
  
    const images = importAll(require.context('../img', false, /\.(png|jpe?g|svg)$/));
  
    return (
      <div>
        <Navbar />
        <div className='library'>
            <div className='inscription__h1'>
                <h1>Notre librairie</h1>
            </div>
            <h2 className='library-category'>Livres</h2>
            <div className='library-container'>
                {booksData.map(book => (
                <div key={book.id} className="card">
                    <img className='card__img' src={images[book.image.split('/').pop()]} alt={book.title} />
                    <h2 className='card__h2'>{book.title}</h2>
                    <h3 className='card__h3'>{book.title2}</h3>
                    <p className='card__p'>{book.author}</p>
                </div>
                ))}
            </div>
        </div>
        <Footer />
      </div>
    );
  };
  
  export default Library;