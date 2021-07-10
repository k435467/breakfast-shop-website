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
      {/* <meta
        property="og:image"
        content={`https://og-image.vercel.app/${encodeURI(
          siteTitle
        )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
      /> */}
      <meta
        property="og:image"
        content="blob:https://vercel.com/4c1e16dd-d86d-4ffc-8052-3900d11db310"
      />
      <meta name="og:title" content={siteTitle} />
      <meta name="twitter:card" content="summary_large_image" />
    </NextHead>
  );
}
