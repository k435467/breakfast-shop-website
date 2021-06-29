import { GetStaticProps } from "next";
import { MyModel } from "@prisma/client";
import prisma from "../lib/pirsma";
import Layout from "../component/layout";
import { AppBar, Toolbar, Typography, Container } from "@material-ui/core";
// import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

// const useStyles = makeStyles((theme: Theme) =>
//   createStyles({
//     title: {
//       flexGrow: 1,
//     },
//   })
// );

export default function Home({ data }: { data: MyModel[] }) {
  return (
    <Layout>
      <>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6">Breakfast</Typography>
          </Toolbar>
        </AppBar>
        <Container>
          <p>{JSON.stringify(data)}</p>
        </Container>
      </>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const mymodeldata = await prisma.myModel.findMany();
  return {
    props: {
      data: mymodeldata,
    },
  };
};
