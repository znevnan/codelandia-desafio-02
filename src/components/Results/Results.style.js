import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 5.8rem;
  color: var(--title);
`;

export const Title = styled.h2`
  font-weight: 600;
  font-size: 3.2rem;
  line-height: 6.3rem;

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

export const Description = styled.p`
  font-weight: 500;
  font-size: 1.8rem;
  line-height: 3.5rem;

  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
`;

export const Content = styled.div`
  width: 80%;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 3.9rem 1.3rem;
  padding-bottom: 10rem;
`;
