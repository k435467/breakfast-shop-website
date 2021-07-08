import { Typography, Box, Grid, GridDirection } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Image from "next/image";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    imgText: {
      [theme.breakpoints.down("xs")]: {
        width: "100%",
        textAlign: "center",
      },
    },
    imgTitle: {
      fontWeight: "bold",
    },
    [theme.breakpoints.up("md")]: {
      imgTitle: {
        fontSize: "2.75rem",
      },
      imgDescription: {
        fontSize: "1.35rem",
      },
    },
  })
);

export default function ImgTitleDescription({
  direction,
}: {
  direction?: GridDirection;
}) {
  const classes = useStyles();
  return (
    <Grid container spacing={3} direction={direction} style={{ padding: "1rem 5vw" }}>
      <Grid item xs={12} sm={6}>
        <Box display="flex" flexWrap="wrap" height="100%" alignContent="center">
          <Typography
            variant="h4"
            className={`${classes.imgText} ${classes.imgTitle}`}
            color="primary"
          >
            I am Just for Enrichment
          </Typography>
          <Typography
            color="textSecondary"
            className={`${classes.imgText} ${classes.imgDescription}`}
          >
            Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris
            cursus commodo interdum.
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Box display="flex" justifyContent="flex-end">
          <Image
            src="/images/food-icons.jpg"
            height={600}
            width={600}
            alt="food-icons img"
          />
        </Box>
      </Grid>
    </Grid>
  );
}
