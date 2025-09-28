import styled from "styled-components";


interface ErrorPageButtonProps {
  $secondary?: boolean;
}

export const StyledErrorPage = styled.div`
background-color: #fff;
  min-height: 100%;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`;

export const StyledButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 5rem;
  margin: 4rem 0;

  @media ("max-width: 37.5em") {
    flex-direction: column;
    gap: 0;
    margin: 2rem 0;
  }
`;

export const StyledImageWrapper = styled.div`
  width: 38.8rem;
  max-width: 100%;
  padding: 0 0.5rem 0.5rem 0.5rem;

  img {
    object-fit: contain;
    display: block;
    width: 100%;
    max-width: 100%;
  }
`;

export const StyledErrorTitle = styled.label`
  font-size: 3rem;
  color: #333;
  font-weight: 400;
  text-align: center;
  padding: 0;
  margin-bottom: 4rem;
`;

export const StyledErrorMessage = styled.label`
  font-size: 2rem;
  color: #333;
  font-weight: normal;
  text-align: center;
  padding: 0 0.5rem;
`;

export const StyledErrorPageButton = styled.button<ErrorPageButtonProps>`
  position: relative;
  border-radius: 40px;
  border: none;
  padding: "1rem 1.2rem";

  white-space: nowrap;
  font-size: 2rem;
  min-width: 15rem;
  max-width: 25rem;
  color: #fff;

  background-color: #333;

  overflow: visible;
  text-overflow: ellipsis;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }

  &:focus-visible {
    &:before {
      content: "";
      position: absolute;
      top: -3px;
      left: -3px;
      z-index: 0;
      height: calc(100% + 6px);
      width: calc(100% + 6px);
      border-radius: 42px;
      border-width: 2px;
      border-style: solid;
      border-color: #333
      overflow: visible;
    }
  }
 
`;
