import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles/toggleButton.css';

const ToggleButton = ({ first, second, firstLink, secondLink }) => {
  const [hoverArea, setHoverArea] = useState(null);

  return (
    <div className="toggle-button-wrapper">
      <Link
        to={hoverArea === first ? `${firstLink}` : `${secondLink}`}
        className="btn btn-primary rounded-pill toggle-button"
        onMouseLeave={() => setHoverArea(null)}
      >
        <div
          className={`toggle-half ${hoverArea === first ? 'expanded' : ''}`}
          onMouseEnter={() => setHoverArea(first)}
        >
          {first}
        </div>
        <div
          className={`toggle-half ${hoverArea === second ? 'expanded' : ''}`}
          onMouseEnter={() => setHoverArea(second)}
        >
          {second}
        </div>
      </Link>
    </div>
  );
};

export default ToggleButton;
