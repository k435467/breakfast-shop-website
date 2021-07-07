import React from "react";
import MuiCarousel from "react-material-ui-carousel";
import { Paper, Icon, Box, Grid, Switch, Typography } from "@material-ui/core";
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

export default function Carousel() {
  const classes = useStyles();
  const items = ["filter_1", "filter_2", "filter_3", "filter_4"];
  const [carouselAnimation, setCarouselAnimation] = React.useState<"fade" | "slide">(
    "fade"
  );

  const handleSwitchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCarouselAnimation(event.target.checked ? "slide" : "fade");
  };

  return (
    <Box display="flex" justifyContent="center" flexWrap="wrap">
      <MuiCarousel className={classes.carouselContainer} animation={carouselAnimation}>
        {items.map((googleIcon, i) => (
          <Item key={i} googleIcon={googleIcon} />
        ))}
      </MuiCarousel>
      <Grid container alignItems="center" justify="center" spacing={1}>
        <Grid item>
          <Typography>Fade</Typography>
        </Grid>
        <Grid item>
          <Switch color="default" onChange={handleSwitchChange} />
        </Grid>
        <Grid item>
          <Typography>Slide</Typography>
        </Grid>
      </Grid>
    </Box>
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
