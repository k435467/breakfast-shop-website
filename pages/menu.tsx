import { GetStaticProps } from "next";
import Link from "next/link";
import { MenuCategory, MenuItem } from "@prisma/client";
import prisma from "../lib/pirsma";
import {
  Typography,
  Container,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Fab,
  Box,
  Button,
} from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import {
  ExpandMore as ExpandMoreIcon,
  ArrowBack as ArrowBackIcon,
} from "@material-ui/icons";
import TargetCategoryContext from "../lib/targetCategoryContext";
import React, { useContext, useState } from "react";

import Layout from "../component/layout";
import Footer from "../component/footer";
import AppBar from "../component/appBar";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    footer: {
      lineHeight: "5",
      color: "white",
      backgroundColor: theme.palette.primary.main,
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
        <AppBar title="BREAKFAST / MENU" />
        <Container style={{ paddingTop: "1rem", paddingBottom: "2rem" }}>
          <Box
            display="flex"
            flexWrap="wrap"
            alignItems="center"
            style={{ marginBottom: "1rem" }}
          >
            <Link href="/" passHref>
              <Fab color="primary" size="small">
                <ArrowBackIcon />
              </Fab>
            </Link>
            <Link href="/" passHref>
              <Button color="primary" size="large">
                HOME
              </Button>
            </Link>
          </Box>
          <div style={{ minHeight: "80vh" }}>
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
          </div>
        </Container>
        <Footer />
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
