import {
  Banner,
  Title,
  Container,
  Subtitle,
  Description,
} from "./Header.style";

const DescriptionText = [
  "O tênis Jordan é fruto de uma velha e forte parceria entre a Nike e o jogador Michael Jordan.",
];

const Header = () => {
  return (
    <header>
      <Banner>Ganhe R$ 10,00 de desconto no frete</Banner>
      <Title>Jordan Shoes</Title>
      <Container>
        <Subtitle>A melhor loja de Jordan</Subtitle>
        <Description
          strings={DescriptionText}
          typeSpeed={30}
          showCursor={false}
        />
      </Container>
    </header>
  );
};

export default Header;
