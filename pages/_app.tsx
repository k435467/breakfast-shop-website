import "../styles/global.scss";
import { AppProps } from "next/app";
import { TargetCategoryProvider } from "../lib/targetCategoryContext";
import { useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [targetCategory, setTargetCategory] = useState(0);
  const contextProviderValue = { targetCategory, setTargetCategory };
  return (
    <TargetCategoryProvider value={contextProviderValue}>
      <Component {...pageProps} />
    </TargetCategoryProvider>
  );
}
