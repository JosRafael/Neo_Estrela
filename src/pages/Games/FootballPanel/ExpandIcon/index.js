import React, { useState } from 'react';
import styled from 'styled-components';

const StyledExpandIcon = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  margin-left: 60px;
  margin-right: -80px;
  align-items: center;
  justify-content: center;
  &:hover {
    transform: scale(1.1); // Aumenta o ícone ao passar o mouse sobre ele (opcional).
  }
`;

const IconSVG = styled.svg`
  width: 100%;
  height: 100%;
`;

const ExpandIcon = ({ onClick }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
    onClick();
  };

  return (
    <StyledExpandIcon onClick={toggleExpand}>
      {isExpanded ? (
        <IconSVG xmlns="http://www.w3.org/2000/svg" width="25" height="26" viewBox="0 0 25 26" fill="none">
          <ellipse cx="12.4068" cy="12.655" rx="12.655" ry="12.4069" transform="rotate(90 12.4068 12.655)" fill="#636363"/>
          <path d="M12.4068 25.0619C5.69634 25.0619 0.248075 19.5118 0.248075 12.655C0.248075 5.79824 5.69634 0.248137 12.4068 0.248137C19.1173 0.248138 24.5656 5.79824 24.5656 12.655C24.5656 19.5118 19.1173 25.0619 12.4068 25.0619Z" stroke="white" stroke-opacity="0.05" stroke-width="0.496276"/>
          <path d="M8.40466 13.8077L12.607 9.60534L16.8093 13.8077" stroke="white" stroke-width="1.0726" stroke-linecap="round" stroke-linejoin="round"/>
        </IconSVG>
      ) : (
        <IconSVG xmlns="http://www.w3.org/2000/svg" width="25" height="26" viewBox="0 0 25 26" fill="none">
          <ellipse cx="12.4069" cy="12.655" rx="12.655" ry="12.4069" transform="rotate(-90 12.4069 12.655)" fill="#636363"/>
          <path d="M12.4069 0.24814C19.1174 0.248139 24.5656 5.79824 24.5656 12.655C24.5656 19.5118 19.1174 25.0619 12.4069 25.0619C5.69641 25.0619 0.248138 19.5118 0.248137 12.655C0.248137 5.79824 5.69641 0.24814 12.4069 0.24814Z" stroke="white" stroke-opacity="0.05" stroke-width="0.496276"/>
          <path d="M16.4091 11.5024L12.2067 15.7047L8.00439 11.5024" stroke="white" stroke-width="1.0726" stroke-linecap="round" stroke-linejoin="round"/>
        </IconSVG>
      )}
    </StyledExpandIcon>
  );
};

export default ExpandIcon;