// NotificationStyles.tsx
import styled, { keyframes } from 'styled-components';

const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const timerAnimation = keyframes`
  0% {
    width: 100%;
  }
  100% {
    width: 0%;
  }
`;

interface NotificationProps {
  type: 'success' | 'error';
}

export const Notification = styled.div<NotificationProps>`
  position: fixed;
  bottom: 20px;
  left: 20px;
  padding: 10px 20px;
  border-radius: 5px;
  color: #fff;
  background-color: ${(props) => (props.type === 'success' ? '#4CAF50' : '#f44336')};
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  font-size: 25px;
  font-family: 'Inter', sans-serif; 
  text-align: center;
  opacity: 1;
  animation: ${fadeOut} 7s ease-out forwards;
  
  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    height: 3px;
    background-color: ${(props) => (props.type === 'success' ? '#4CAF50' : '#f44336')};
    animation: ${timerAnimation} 7s linear forwards;
  }
`;
