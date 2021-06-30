import { GetStaticProps } from "next";
import { MenuCategory } from "@prisma/client";
import prisma from "../lib/pirsma";
import Layout from "../component/layout";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Divider,
  Button,
  Box,
} from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Parallax } from "react-parallax";
import Icon from "@material-ui/core/Icon";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    insideParallax: {
      background: "white",
      padding: 20,
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
    },
    footer: {
      lineHeight: "5",
    },
    boxBtn: {
      flexDirection: "column",
    },
  })
);

export default function Home({ menuCategories }: { menuCategories: MenuCategory[] }) {
  const classes = useStyles();
  return (
    <Layout>
      <>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6">Breakfast</Typography>
          </Toolbar>
        </AppBar>
        <Container>
          <Parallax
            // blur={{ min: -1, max: 3 }}
            bgImage="/images/food-icons.jpg"
            bgImageAlt="food icons"
            strength={500}
          >
            <div style={{ height: "600px" }}>
              <Typography variant="h5" className={classes.insideParallax}>
                Breakfast
              </Typography>
            </div>
          </Parallax>
          <div style={{ height: "100vh" }}></div>
          <Box display="flex" justifyContent="center" flexWrap="wrap">
            {menuCategories.map((category) => {
              return (
                <div key={category.id} style={{ padding: "1rem" }}>
                  <Button
                    variant="outlined"
                    color="primary"
                    classes={{ label: classes.boxBtn }}
                  >
                    <Icon fontSize="large">{category.googleIcon}</Icon>
                    {category.name}
                  </Button>
                </div>
              );
            })}
          </Box>
          <p>{JSON.stringify(menuCategories)}</p>
          {console.log(menuCategories)}
        </Container>
        <Divider />
        <Typography align="center" className={classes.footer}>
          Developed by k435467
        </Typography>
      </>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const menuCategories = await prisma.menuCategory.findMany({
    include: {
      items: true,
    },
  });
  return {
    props: {
      menuCategories: menuCategories,
    },
  };
};
