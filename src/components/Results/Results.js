import Item from "../Item/Item";
import { Container, Title, Description, Content } from "./Results.style";

const Results = () => {
  const items = [
    {
      id: 1,
      name: "Women Air Jordan 1 Mid Dutch Green",
      image: "img/shoe-1.png",
    },
    {
      id: 2,
      name: "Air Jordan 1 High Zoom Comfort Tropical Twist",
      image: "img/shoe-2.png",
    },
    {
      id: 3,
      name: "Air Jordan 1 Retro High Court Purple",
      image: "img/shoe-3.png",
    },
    {
      id: 4,
      name: "Women Air Jordan 1 Light Smoke Grey",
      image: "img/shoe-4.png",
    },
    {
      id: 5,
      name: "Air Jordan 1 Mid Black Noble Red",
      image: "img/shoe-5.png",
    },
    {
      id: 6,
      name: "Women Air Jordan 1 Mid SE Bright Citrus",
      image: "img/shoe-6.png",
    },
    {
      id: 7,
      name: "Women Air Jordan 1 Mid Grey Camo",
      image: "img/shoe-7.png",
    },
    {
      id: 8,
      name: "Air Jordan 1 Mid Carbon Fiber All-Star",
      image: "img/shoe-8.png",
    },
  ];

  return (
    <main>
      <Container>
        <Title>Highlights</Title>
        <Description>
          Free shipping and an additional pair as gift, for a limited time only.
        </Description>
      </Container>
      <Content>
        {!items.length ? (
          <h1>No Items Found.</h1>
        ) : (
          items.map((item) => {
            return (
              <Item
                key={item.id}
                id={item.id}
                name={item.name}
                image={item.image}
              />
            );
          })
        )}
      </Content>
    </main>
  );
};

export default Results;
