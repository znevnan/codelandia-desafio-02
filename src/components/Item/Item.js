import { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import { Card, Image, Title } from "./Item.style";

const Item = ({ id, name, image }) => {
  useEffect(() => {
    const sr = ScrollReveal({
      origin: "top",
      distance: "50px",
      duration: 2000,
      reset: false,
    });

    sr.reveal("#item-card", { delay: 200 });
  }, []);

  return (
    <Card id="item-card">
      <Image id={id} src={image} />
      <Title>{name}</Title>
    </Card>
  );
};

export default Item;
