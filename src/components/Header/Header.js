import {
  Banner,
  Title,
  Container,
  Subtitle,
  Description,
} from "./Header.style";

const DescriptionText = [
  "The Jordan Shoes are the result of an old and strong partnership between Nike and the player Michael Jordan.",
];

const Header = () => {
  return (
    <header>
      <Banner>Get a $10 discount on shipping</Banner>
      <Title>Jordan Shoes</Title>
      <Container>
        <Subtitle>The best Jordan store</Subtitle>
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
