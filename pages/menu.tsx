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
    footer: {
      lineHeight: "5",
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
        <Container>123</Container>
        <Divider />
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
