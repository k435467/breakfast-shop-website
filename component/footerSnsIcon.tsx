import React from "react";
import { Snackbar as MuiSnackbar, IconButton, Zoom, Tooltip } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

export default function FooterSnsIcon({
  children,
  tooltipTitle,
}: {
  children: React.ReactElement;
  tooltipTitle: string;
}) {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (
    event: React.SyntheticEvent | React.MouseEvent,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <>
      <Tooltip title={tooltipTitle} arrow TransitionComponent={Zoom} interactive>
        <IconButton onClick={handleClick}>{children}</IconButton>
      </Tooltip>
      <MuiSnackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        open={open}
        autoHideDuration={4000}
        onClose={handleClose}
        message="Not available. It's just for enrichment."
        action={
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={handleClose}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        }
      />
    </>
  );
}
