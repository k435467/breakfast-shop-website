import { GetStaticProps } from "next";
import { MenuCategory, MenuItem } from "@prisma/client";
import prisma from "../lib/pirsma";
import Layout from "../component/layout";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Divider,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    footer: {
      lineHeight: "5",
    },
  })
);

export default function Menu({
  menu,
}: {
  menu: (MenuCategory & { items: MenuItem[] })[];
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
          {menu.map((category) => {
            return (
              <Accordion key={category.id}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls={`panel${category.id}a-content`}
                  id={`panel${category.id}a-header`}
                >
                  <Typography variant="h6">{category.name}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <List>
                    {category.items.map((item) => {
                      return (
                        <ListItem key={item.id}>
                          <ListItemText primary={item.name}></ListItemText>
                        </ListItem>
                      );
                    })}
                  </List>
                </AccordionDetails>
              </Accordion>
            );
          })}
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
  const menu = await prisma.menuCategory.findMany({
    include: {
      items: true,
    },
  });
  return {
    props: {
      menu: menu,
    },
  };
};
