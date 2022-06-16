import styled from "styled-components";

export const Image = styled.img`
  width: 250px;
  height: 150px;
  filter: brightness(0.5);
  transition: 1s all ease;
`;

export const Title = styled.p`
  width: 100%;
  position: absolute;
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  color: var(--bgCard);
  transition: 1s;
  max-width: 200px;
  bottom: 8%;
`;

export const Card = styled.div`
  width: 300px;
  height: 302px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: var(--bgCard);

  &:hover ${Image}, &:focus ${Image} {
    transform: scale(1.2);
    filter: brightness(1);
  }
  &:hover ${Title}, &:focus ${Title} {
    transform: scale(1.2);
    color: var(--text);
  }

  @media (max-width: 768px) {
    width: 374px;
    height: 302px;
  }
`;
