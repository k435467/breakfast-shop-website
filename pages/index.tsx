import { GetStaticProps } from "next";
import Link from "next/link";
import { MenuCategory } from "@prisma/client";
import prisma from "../lib/pirsma";
import { Typography, Container, Button, Box, Icon, Paper, Grid } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Parallax } from "react-parallax";
import TargetCategoryContext from "../lib/targetCategoryContext";
import { useContext } from "react";

import Head from "../component/head";
import Footer from "../component/footer";
import AppBar from "../component/appBar";
import Carousel from "../component/carousel";
import ImgTitleDescription from "../component/imgTitleDescription";
import FadeInSection from "../component/fadeInSection";
import BackToTop from "../component/backToTop";

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
      backgroundImage: `linear-gradient(45deg, ${theme.palette.primary.dark}, ${theme.palette.primary.light})`,
      transform: "skewY(-7deg) translate(0, -100px)",
      padding: "60px 0",
    },
    diagonalGridItem: {
      transform: "skewY(7deg)",
      "&>p": {
        textAlign: "center",
        fontWeight: "bold",
        fontSize: "2rem",
        color: "white",
      },
    },
    boxBtn: {
      flexDirection: "column",
      width: "4rem",
      height: "5rem",
    },
  })
);

export default function Home({ menuCategories }: { menuCategories: MenuCategory[] }) {
  const classes = useStyles();
  const { targetCategory, setTargetCategory } = useContext(TargetCategoryContext);
  return (
    <>
      <Head />
      <AppBar title="BREAKFAST" />
      <div style={{ paddingTop: "0.4rem" }}>
        <Parallax
          // blur={{ min: -1, max: 3 }}
          bgImage="/images/food-icons.jpg"
          bgImageAlt="food icons"
          strength={500}
        >
          <div className={classes.parallaxContentContainer}>
            <FadeInSection>
              <Paper elevation={24} className={classes.parallaxContent}>
                <Typography variant="h4" style={{ fontWeight: "bold" }}>
                  BREAKFAST
                </Typography>
              </Paper>
            </FadeInSection>
          </div>
        </Parallax>
      </div>
      <FadeInSection>
        <div className={classes.diagonalContainer}>
          <Container>
            <Grid container>
              <Grid item xs={12} sm={4} className={classes.diagonalGridItem}>
                <Typography>Speedy</Typography>
              </Grid>
              <Grid item xs={12} sm={4} className={classes.diagonalGridItem}>
                <Typography>Healthy</Typography>
              </Grid>
              <Grid item xs={12} sm={4} className={classes.diagonalGridItem}>
                <Typography>Tasty</Typography>
              </Grid>
            </Grid>
          </Container>
        </div>
      </FadeInSection>
      <div
        style={{
          backgroundImage: "linear-gradient(white, #ffe6c1)",
        }}
      >
        <Container>
          <FadeInSection>
            <Box display="flex" justifyContent="center">
              <Link href="/menu" passHref>
                <Button
                  color="primary"
                  onClick={() => {
                    setTargetCategory(0);
                  }}
                  style={{ fontSize: "2rem" }}
                >
                  <Typography variant="h4" style={{ fontWeight: "bold" }}>
                    VIEW MENU
                  </Typography>
                </Button>
              </Link>
            </Box>
          </FadeInSection>
          <FadeInSection>
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
          </FadeInSection>
          <FadeInSection>
            <Typography
              variant="h4"
              color="primary"
              align="center"
              style={{ fontWeight: "bold" }}
            >
              FEATURED
            </Typography>
          </FadeInSection>
          <FadeInSection>
            <Typography color="textSecondary" align="center" style={{ margin: "0 10vw" }}>
              Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris
              cursus commodo interdum.
            </Typography>
          </FadeInSection>
          <FadeInSection>
            <Carousel />
          </FadeInSection>
          <FadeInSection>
            <ImgTitleDescription direction="row-reverse" />
          </FadeInSection>
          <FadeInSection>
            <ImgTitleDescription />
          </FadeInSection>
          <FadeInSection>
            <Typography
              color="textSecondary"
              align="center"
              style={{ paddingTop: "1rem", paddingBottom: "2rem" }}
            >
              Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet.
            </Typography>
          </FadeInSection>
        </Container>
      </div>
      <BackToTop />
      <Footer />
    </>
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
