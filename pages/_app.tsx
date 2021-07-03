import "../styles/global.scss";
import { AppProps } from "next/app";
import { useState } from "react";
import { TargetCategoryProvider } from "../lib/targetCategoryContext";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { orange } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: orange,
  },
  typography: {
    fontFamily: '"Raleway", "Roboto", "Helvetica", "Arial", sans-serif',
  },
});

export default function App({ Component, pageProps }: AppProps) {
  const [targetCategory, setTargetCategory] = useState(0);
  const contextProviderValue = { targetCategory, setTargetCategory };
  return (
    <TargetCategoryProvider value={contextProviderValue}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </TargetCategoryProvider>
  );
}
