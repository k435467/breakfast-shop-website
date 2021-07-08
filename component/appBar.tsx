import {
  AppBar as MuiAppBar,
  Toolbar,
  Typography,
  IconButton,
  useScrollTrigger,
  Slide,
  Icon,
  Zoom,
  Tooltip,
} from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { GitHub as GitHubIcon, Feedback as FeedbackIcon } from "@material-ui/icons/";
import FeedbackIconButton from "./feedbackIconButton";

function HideOnScroll({ children }: { children: React.ReactElement }) {
  const trigger = useScrollTrigger();
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      flexGrow: 1,
      marginLeft: "4px",
    },
    lunchDiningIcon: {
      color: "rgba(0, 0, 0, 0.54)",
    },
  })
);

export default function AppBar({ title }: { title: string }) {
  const classes = useStyles();
  return (
    <HideOnScroll>
      <MuiAppBar position="sticky">
        <Toolbar>
          <Icon className={classes.lunchDiningIcon}>lunch_dining</Icon>
          <Typography variant="h6" className={classes.title}>
            {title}
          </Typography>
          <FeedbackIconButton />
          <Tooltip title="GitHub" arrow TransitionComponent={Zoom} interactive>
            <IconButton href="https://github.com/k435467/breakfast-shop-website">
              <GitHubIcon />
            </IconButton>
          </Tooltip>
        </Toolbar>
      </MuiAppBar>
    </HideOnScroll>
  );
}
