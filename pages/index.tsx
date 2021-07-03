import { GetStaticProps } from "next";
import Link from "next/link";
import { MenuCategory } from "@prisma/client";
import prisma from "../lib/pirsma";
import { Typography, Container, Button, Box, Icon, Paper } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Parallax } from "react-parallax";
import TargetCategoryContext from "../lib/targetCategoryContext";
import { useContext } from "react";

import Layout from "../component/layout";
import Footer from "../component/footer";
import AppBar from "../component/appBar";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    parallaxContentContainer: {
      height: "600px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      transform: "skewY(9deg)",
    },
    parallaxContent: {
      background: theme.palette.primary.dark,
      color: "white",
      padding: 20,
      borderRadius: 0,
      transform: "translate(0, -50px)",
    },
    diagonalContainer: {
      position: "relative",
      transform: "translate(0, -100px)",
      "&:before": {
        content: '""',
        position: "absolute",
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        backgroundImage: `linear-gradient(45deg, ${theme.palette.primary.dark}, ${theme.palette.primary.light})`,
        transform: "skewY(-11deg)",
      },
    },
    diagonalContent: {
      margin: "0 auto",
      height: "300px",
      position: "relative",
      zIndex: 3,
    },
    footer: {
      lineHeight: "5",
      color: "white",
      backgroundColor: theme.palette.primary.main,
    },
    boxBtn: {
      flexDirection: "column",
      width: "4rem",
      height: "5rem",
    },
    menuLink: {
      textAlign: "center",
      textDecoration: "none",
    },
  })
);

export default function Home({ menuCategories }: { menuCategories: MenuCategory[] }) {
  const classes = useStyles();
  const { targetCategory, setTargetCategory } = useContext(TargetCategoryContext);
  return (
    <Layout>
      <>
        <AppBar title="BREAKFAST" />
        <div style={{ paddingTop: "0.4rem" }}>
          <Parallax
            // blur={{ min: -1, max: 3 }}
            bgImage="/images/food-icons.jpg"
            bgImageAlt="food icons"
            strength={500}
          >
            <div className={classes.parallaxContentContainer}>
              <Paper elevation={24} className={classes.parallaxContent}>
                <Typography variant="h4" style={{ fontWeight: "bold" }}>
                  BREAKFAST
                </Typography>
              </Paper>
            </div>
          </Parallax>
        </div>
        <div className={classes.diagonalContainer}>
          <div className={classes.diagonalContent}></div>
        </div>
        <Container>
          <Box display="flex" justifyContent="center">
            <Link href="/menu" passHref>
              <Button
                color="primary"
                onClick={() => {
                  setTargetCategory(0);
                }}
                style={{ fontSize: "2rem" }}
              >
                VIEW MENU
              </Button>
            </Link>
          </Box>
          <Box display="flex" justifyContent="center" flexWrap="wrap">
            {menuCategories.map((category) => {
              return (
                <div key={category.id} style={{ padding: "1rem" }}>
                  <Link href="/menu" passHref>
                    <Button
                      variant="outlined"
                      color="primary"
                      classes={{ label: classes.boxBtn }}
                      onClick={() => {
                        setTargetCategory(category.id);
                      }}
                    >
                      <Icon fontSize="large">{category.googleIcon}</Icon>
                      {category.name}
                    </Button>
                  </Link>
                </div>
              );
            })}
          </Box>
        </Container>
        <div style={{ height: "100vh" }}></div>
        <Footer />
      </>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const menuCategories = await prisma.menuCategory.findMany();
  return {
    props: {
      menuCategories: menuCategories,
    },
  };
};
