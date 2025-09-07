import React from 'react';
import styled from 'styled-components';

const Button = () => {
  return (
    <StyledWrapper> 
      <div className="container_mouse">
        <span className="mouse-btn">
          <span className="mouse-scroll" />
        </span>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .mouse-btn {
    margin: 5px auto;
    width: 30px;
    height: 50px;
    border: 3px solid rgba(255, 255, 255, 1);
    border-radius: 20px;
    display: flex;
    cursor: pointer;
  }

  .mouse-scroll {
    display: block;
    width: 10px;
    height: 10px;
    background: linear-gradient(170deg, rgba(255, 255, 255, 1), rgba(255, 255, 255, 1));
    border-radius: 50%;
    margin: auto;
    animation: scrolling13 3s linear infinite;
    cursor: pointer;
  }

  @keyframes scrolling13 {
    0% {
      opacity: 0;
      transform: translateY(-10px);
    }

    100% {
      opacity: 1;
      transform: translateY(10px);
    }
  }`;

export default Button;
