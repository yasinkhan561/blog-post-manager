import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  max-width: 700px;
  margin: 2rem auto;
  padding: 2rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #fff;
`;

export const Title = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

export const Content = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: #333;
  margin-bottom: 1rem;
`;

export const Author = styled.p`
  font-size: 0.9rem;
  color: #555;
  margin-bottom: 1rem;
`;

export const EditLink = styled(Link)`
  color: #0070f3;
  font-weight: 500;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;


export const IconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #555;
  transition: color 0.2s;

  &:hover {
    color: #0070f3;
  }

  &:active {
    color: #005bb5;
  }
`;

export const CardActions = styled.div`
  display: flex;
  gap: 0.5rem;
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
`;
