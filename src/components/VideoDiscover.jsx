import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

const VideoDiscover = ({ coverImage, altText }) => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handlePlayVideo = () => {
    setIsVideoPlaying(true);
  };

  return (
    <div className="video-section">
      {isVideoPlaying ? (
        <iframe
          width="560"
          height="315"
          src={`#`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ) : (
        <div className="cover" onClick={handlePlayVideo}>
          {/* Image de couverture */}
          <img src={coverImage} alt={altText} className="cover-image" />
          
          {/* Icône de lecture */}
          <div className="icon-overlay">
            <FontAwesomeIcon icon={faPlay} size="4x" color="white" />
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoDiscover;