import styled from "styled-components";
import Typed from "react-typed";

export const Banner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.4rem 0;
  background-color: var(--bgBanner);
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 3.1rem;
  letter-spacing: 0.05rem;
  color: var(--bannerText);
`;

export const Title = styled.h1`
  font-size: 2.4rem;
  font-weight: 600;
  line-height: 4.7rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.6rem 0;
`;

export const Container = styled.div`
  padding-left: 10rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.5rem;
  background-image: url("img/wallpaper.jpeg");
  min-height: 400px;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: var(--white);

  @media (max-width: 768px) {
    padding: 13rem 0 13rem 2rem;
  }
`;

export const Subtitle = styled.h2`
  font-size: 3.2rem;
  font-weight: 600;
  line-height: 3.9rem;

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

export const Description = styled(Typed)`
  font-size: 1.8rem;
  font-weight: 500;
  line-height: 3.5rem;
  max-width: 46rem;

  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
`;
