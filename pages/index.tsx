import { GetStaticProps } from "next";
import { MyModel, MenuCategory } from "@prisma/client";
import prisma from "../lib/pirsma";
import Layout from "../component/layout";
import { AppBar, Toolbar, Typography, Container, Divider } from "@material-ui/core";
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
  })
);

export default function Home({
  data,
  menuData,
}: {
  data: MyModel[];
  menuData: MenuCategory[];
}) {
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
          <Icon>lunch_dining</Icon>
          <p>{JSON.stringify(data)}</p>
          <p>{JSON.stringify(menuData)}</p>
          <Divider />
          <Typography align="center" className={classes.footer}>
            Developed by k435467
          </Typography>
        </Container>
      </>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const mymodeldata = await prisma.myModel.findMany();
  const menuCategories = await prisma.menuCategory.findMany();
  return {
    props: {
      data: mymodeldata,
      menuData: menuCategories,
    },
  };
};
