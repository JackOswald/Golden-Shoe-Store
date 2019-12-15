import styled from 'styled-components'

// Styled Components allows us to reuse this button anywhere in the project

export const ButtonContainer = styled.button `
  text-transform: capitalize;
  font-size: 1.4rem;
  background: var(--darkRed);
  border: 0.05rem solid var(--white);
  color: var(--white);
  border-radius: 0.5rem;
  padding: 0.2rem 0.5rem;
  cursor: pointer;
  margin: 0.2rem 0.5rem 0.2rem 0;
  transition: all 0.5 ease-in-out;
  &: hover {
    background: var(--white);
    color: var(--darkRed);
    border: 0.05rem solid var(--darkRed);
  }
  &: focus {
    outline: none;
  }
`