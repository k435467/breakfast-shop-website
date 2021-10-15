import { Typography, Box, Grid, GridDirection } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Image from "next/image";
import FadeInSection from "./fadeInSection";

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
  })
);

export default function ImgTitleDescription({
  direction,
}: {
  direction?: GridDirection;
}) {
  const classes = useStyles();
  return (
    <Grid container spacing={3} direction={direction} style={{ padding: "50px 5vw 0" }}>
      <Grid item xs={12} sm={6}>
        <Box display="flex" flexWrap="wrap" height="100%" alignContent="center">
          <FadeInSection>
            <>
              <Typography
                variant="h4"
                className={`${classes.imgText} ${classes.imgTitle}`}
                color="primary"
              >
                I am Just for Enrichment
              </Typography>
              <Typography color="textSecondary" className={classes.imgText}>
                Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris
                cursus commodo interdum.
              </Typography>
            </>
          </FadeInSection>
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
