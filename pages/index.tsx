import { GetStaticProps } from "next";
import Link from "next/link";
import { MenuCategory } from "@prisma/client";
import prisma from "../lib/pirsma";
import Layout from "../component/layout";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Button,
  Box,
  Icon,
  Paper,
} from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Parallax } from "react-parallax";
import TargetCategoryContext from "../lib/targetCategoryContext";
import { useContext } from "react";
import Chevron from "../component/chevron";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    insideParallax: {
      background: theme.palette.primary.dark,
      color: "white",
      padding: 20,
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
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
  })
);

export default function Home({ menuCategories }: { menuCategories: MenuCategory[] }) {
  const classes = useStyles();
  const { targetCategory, setTargetCategory } = useContext(TargetCategoryContext);
  return (
    <Layout>
      <>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6">Breakfast</Typography>
          </Toolbar>
        </AppBar>
        <Container style={{ paddingTop: "0.4rem" }}>
          <Parallax
            // blur={{ min: -1, max: 3 }}
            bgImage="/images/food-icons.jpg"
            bgImageAlt="food icons"
            strength={500}
          >
            <div style={{ height: "600px" }}>
              <Paper elevation={24} className={classes.insideParallax}>
                <Typography variant="h5">Breakfast</Typography>
              </Paper>
            </div>
          </Parallax>
          <h1>
            <Link href="/menu">
              <a
                onClick={() => {
                  setTargetCategory(0);
                }}
              >
                view menu
                {/* <Chevron /> */}
              </a>
            </Link>
          </h1>
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
          <div style={{ height: "100vh" }}></div>
        </Container>
        <Typography align="center" className={classes.footer}>
          Developed by k435467
        </Typography>
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
