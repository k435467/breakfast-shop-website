import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button, Icon } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    carouselContainer: {
      width: "100%",
      maxWidth: "800px",
      height: "calc(100vw - 32px)",
      maxHeight: "calc(790px - 1.2rem)",
    },
    carouselItem: {
      margin: "3px",
      padding: "10px",
      height: "calc(100vw - 32px - 26px)",
      maxHeight: "calc(790px - 1.2rem - 26px)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  })
);

export default function CustomCarousel() {
  const classes = useStyles();
  var items = ["filter_1", "filter_2", "filter_3", "filter_4"];

  return (
    <Carousel className={classes.carouselContainer}>
      {items.map((googleIcon, i) => (
        <Item key={i} googleIcon={googleIcon} />
      ))}
    </Carousel>
  );
}

function Item({ googleIcon }: { googleIcon: string }) {
  const classes = useStyles();
  return (
    <Paper className={classes.carouselItem}>
      <Icon style={{ fontSize: "100px" }}>{googleIcon}</Icon>
    </Paper>
  );
}
