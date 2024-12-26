import React from 'react';

const FranceCenterCard = ({ data }) => {
  return (
    <div className="places-card" style={{ cursor: 'pointer' }}>
      <h3 className="places-card__h3">{data.title}</h3>
      <p className="places-card__p"><strong>Responsables :</strong> {data.responsibles}</p>
      <p className="places-card__p"><strong>Email :</strong> {data.email}</p>
      <p className="places-card__p"><strong>Téléphone :</strong> {data.tel}</p>
      <p className="places-card__p"><strong>Adresse :</strong> {Array.isArray(data.addresses) ? data.addresses.join(', ') : data.address}</p>

      {/* Détails supplémentaires avec conditions */}
      <div className="details">
        {data.accomodation && (
          <>
            <p><strong>Hébergement :</strong> {data.accomodation.info || `${data.accomodation.name}, Email: ${data.accomodation.email}, Tel: ${data.accomodation.tel}`}</p>
          </>
        )}
        {data.parking && <p><strong>Parking :</strong> {data.parking}</p>}
        {data.gps && <p><strong>GPS :</strong> Latitude: {data.gps.latitude}, Longitude: {data.gps.longitude}</p>}
        {data.localisation && <p><strong>Localisation :</strong> {data.localisation}</p>}
        {data.train && <p><strong>Train :</strong> {data.train}</p>}
      </div>
    </div>
  );
};

export default FranceCenterCard;