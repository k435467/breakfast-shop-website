import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

interface PropItem {
  name: string;
  description: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    carouselContainer: {
      height: "250px",
      width: "300px",
    },
    carouselItem: {
      margin: "1rem",
      padding: "1rem",
      height: "200px",
      // backgroundImage: "linear-gradient(white, orange)",
    },
  })
);

export default function CustomCarousel() {
  const classes = useStyles();
  var items = [
    {
      name: "Random Name #1",
      description: "Probably the most random thing you have ever seen!",
    },
    {
      name: "Random Name #2",
      description: "Hello World!",
    },
  ];

  return (
    <Carousel className={classes.carouselContainer}>
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

function Item({ item }: { item: PropItem }) {
  const classes = useStyles();
  return (
    <Paper className={classes.carouselItem}>
      <h2>{item.name}</h2>
      <p>{item.description}</p>

      <Button className="CheckButton">Check it out!</Button>
    </Paper>
  );
}
