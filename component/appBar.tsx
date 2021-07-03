import {
  AppBar as MuiAppBar,
  Toolbar,
  Typography,
  IconButton,
  useScrollTrigger,
  Slide,
} from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { GitHub as GitHubIcon } from "@material-ui/icons/";

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
    },
  })
);

export default function AppBar({ title }: { title: string }) {
  const classes = useStyles();
  return (
    <HideOnScroll>
      <MuiAppBar position="sticky">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            {title}
          </Typography>
          <IconButton>
            <GitHubIcon />
          </IconButton>
        </Toolbar>
      </MuiAppBar>
    </HideOnScroll>
  );
}
