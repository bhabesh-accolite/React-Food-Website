import styled from 'styled-components';


export const FruitContainer = styled.div`
  width: 100%; 
  min-height: 100vh;
  background: #f7f1e3;
  margin: 0;
`;

export const FruitWrapper = styled.div`
  display: flex;
  padding: 5rem 2rem;
  flex-wrap: wrap;
  justify-content: center;
  position: center;
`;

export const FruitHeading = styled.h1`
  padding: 0.5rem;
  margin: 0 10rem;
  font-size: clamp(2rem, 2.5vw, 3rem);
  text-align: center;
  background: #1e272e;
  color: #fff;
  font-family: 'Kanit', sans-serif;
`;

export const FruitInfo = styled.div`
  width: 50%;  
  display: flex;
  background: #dfe6e9;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 2rem;
  margin-top: 1rem;
  text-align: center;
  font-family: 'Kanit', sans-serif;
  font-size: 0.9rem;
  border-radius: 1rem;
  padding: 1rem;
`;