import NextHead from "next/head";

export const siteTitle = "Breakfast Shop";

export default function Head() {
  return (
    <NextHead>
      <link rel="icon" href="/favicon.ico" />
      <meta
        name="google-site-verification"
        content="oDogpyQxtdwnNeYat4Juvg21XuxSmSag5RIJRJlDkwY"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto|Raleway&display=swap"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />
      <link
        rel="stylesheet"
        href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
      />
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width"
      />
      <meta
        name="description"
        content="A breakfast shop website created by k435467 using Vercel, Nextjs, Reactjs, Typescript, Prisma, Material UI... For more information: https://github.com/k435467/breakfast-shop-website."
      />
      <meta property="og:url" content="https://breakfast-shop-website.vercel.app/" />
      <meta property="og:locale" content="zh_TW" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={siteTitle} />
      <meta
        property="og:description"
        content="A breakfast shop website created by k435467 using Vercel, Nextjs, Reactjs, Typescript, Prisma, Material UI... For more information: https://github.com/k435467/breakfast-shop-website."
      />
      <meta
        property="og:image"
        content="https://breakfast-shop-website.vercel.app/images/ogimg.png"
      />
      <meta property="og:image:alt" content={siteTitle} />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="797" />
      <meta property="og:image:height" content="411" />
      <meta name="twitter:card" content="summary_large_image" />
    </NextHead>
  );
}
