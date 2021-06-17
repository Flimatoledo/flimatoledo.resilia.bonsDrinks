import styled from "styled-components";

export const Forms = styled.form`
  max-width: 720px;
  border: 1px solid black;
  margin: 1rem auto;
  padding: 1.5rem 3rem;
  display: grid;
  grid-template-rows: 1fr 1fr 2fr 0.5fr;
  height: 60vh;

  .msg {
    height: 7rem;
    padding: 0.5rem 0.5rem;
    resize: none;
    border: 1px solid #d7d7d7;
  }

  div {
    display: flex;
    flex-direction: column;

    label {
      margin-bottom: 0.5rem;
    }

    input {
      padding: 0.5rem 0.5rem;
      width: 250px;
      height: 1.5rem;
      border: 1px solid #d7d7d7;
    }
  }

  button {
    width: 100%;
    margin-top: 1.5rem;
    padding: 0 1.5rem;
    height: 3rem;
    background: #df6060;
    border-radius: 0.25rem;
    border: 0;
    font-size: 1rem;
    font-weight: 600;

    transition: filter 0.2s;
    &:hover {
      filter: brightness(0.9);
    }
  }
`;
