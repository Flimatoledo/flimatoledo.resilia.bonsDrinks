import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: 1120px;
  height: 80vh;
  margin: 1rem auto;
  

  div {
    display: flex;
    flex-direction: column;
    border: 1px solid gray;
    margin-top: 1rem;
    margin-right: 1rem;
    padding: 1rem 2rem;
    border-radius: 3px;
    

    img {
      width: 30%;
      border-radius: 50%;
      align-self: center;
      margin-bottom: 2rem;
    }

    p {
      margin-top: 1rem;
    }
  }
`;
