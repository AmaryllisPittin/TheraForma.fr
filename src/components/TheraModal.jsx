import React from 'react';

const TheraModal = ({ isOpen, onClose, event }) => {
    if (!isOpen) return null;

    return (
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <h3 className='modal-content__h3'>{event.title}</h3>
          <h4 className='modal-content__h4'>{event.title2}</h4>
          <p className='modal-content__p'>{event.presentation1}</p>
          <p className='modal-content__p'>{event.presentation2}</p>
          <p className='modal-content__p'>{event.presentation3}</p>
          <p className='modal-content__tarif'><strong>Tarif: </strong>{event.price.montant} {event.price.devise}</p>
          <div className='modal-buttons'>
            <button onClick={onClose}>Fermer</button>
            <button>S'inscrire</button>
          </div>
        </div>
      </div>
    );
};

export default TheraModal;