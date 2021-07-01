import { GetStaticProps } from "next";
import Link from "next/link";
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
  ListItemSecondaryAction,
  Fab,
  Box,
} from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import {
  ExpandMore as ExpandMoreIcon,
  ArrowBack as ArrowBackIcon,
} from "@material-ui/icons";
import TargetCategoryContext from "../lib/targetCategoryContext";
import React, { useContext, useState } from "react";

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
  const { targetCategory, setTargetCategory } = useContext(TargetCategoryContext);
  const [expanded, setExpanded] = useState<number | false>(targetCategory);
  const handleChange =
    (id: number) => (event: React.ChangeEvent<{}>, isExpanded: boolean) => {
      setExpanded(isExpanded ? id : false);
    };
  return (
    <Layout>
      <>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6">Breakfast / Menu</Typography>
          </Toolbar>
        </AppBar>
        <Container style={{ paddingTop: "1rem", paddingBottom: "2rem" }}>
          <Box
            display="flex"
            flexWrap="wrap"
            alignItems="center"
            style={{ marginBottom: "1rem" }}
          >
            <Link href="/" passHref>
              <Fab color="primary" size="small" style={{ marginRight: "1rem" }}>
                <ArrowBackIcon />
              </Fab>
            </Link>
            <Link href="/">
              <a>Back to Home</a>
            </Link>
          </Box>
          {menu.map((category) => {
            return (
              <Accordion
                key={category.id}
                expanded={expanded === category.id}
                onChange={handleChange(category.id)}
              >
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
                          <ListItemSecondaryAction>
                            <Typography>{item.pirce}</Typography>
                          </ListItemSecondaryAction>
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
