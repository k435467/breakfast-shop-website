import { Divider, Typography, IconButton } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import {
  Facebook as FacebookIcon,
  Twitter as TwitterIcon,
  LinkedIn as LinkedInIcon,
  Instagram as InstagramIcon,
} from "@material-ui/icons/";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    footerContainer: {
      width: "100%",
      color: "white",
      backgroundColor: theme.palette.primary.main,
      padding: "1rem 1.5rem",
    },
    iconsContainer: {
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap",
    },
    whiteDivider: {
      background: "hsla(0,0%,100%,.4)",
      marginTop: ".75rem",
      marginBottom: ".75rem",
    },
  })
);

export default function Footer() {
  const classes = useStyles();
  return (
    <div className={classes.footerContainer}>
      <div className={classes.iconsContainer}>
        <IconButton>
          <FacebookIcon />
        </IconButton>
        <IconButton>
          <TwitterIcon />
        </IconButton>
        <IconButton>
          <LinkedInIcon />
        </IconButton>
        <IconButton>
          <InstagramIcon />
        </IconButton>
      </div>
      <Typography align="center">
        Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus
        commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc.
        Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae
        velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel
        ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam
        elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis
        parturient montes, nascetur ridiculus mus.
      </Typography>
      <Divider variant="middle" className={classes.whiteDivider} />
      <Typography align="center">Developed by k435467</Typography>
    </div>
  );
}
