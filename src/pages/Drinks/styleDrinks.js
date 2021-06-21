import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: 1120px;
  height: 80vh;
  margin: 1rem auto;
  
  .main-div {
    display: flex;
    border: 1px solid gray;
    margin-top: 1rem;
    margin-right: 1rem;
    padding: 1rem 2rem;
    border-radius: 3px;

    img {
      margin-right: 1rem;
    }
    
    div{ 
      display: flex;
      flex-direction: column;
      justify-content:space-evenly;
    }
  }  
  `;
