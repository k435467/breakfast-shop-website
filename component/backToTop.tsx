import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { Fab, Zoom } from "@material-ui/core";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    backToTop: {
      position: "fixed",
      bottom: theme.spacing(2),
      right: theme.spacing(2),
    },
  })
);

export default function BackToTop() {
  const classes = useStyles();
  const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 100 });
  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} className={classes.backToTop}>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </div>
    </Zoom>
  );
}
