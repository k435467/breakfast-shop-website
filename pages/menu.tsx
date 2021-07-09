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
  Fade,
  Slide,
} from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import {
  ExpandMore as ExpandMoreIcon,
  ArrowBack as ArrowBackIcon,
} from "@material-ui/icons";
import TargetCategoryContext from "../lib/targetCategoryContext";
import React, { useContext, useState } from "react";

import Head from "../component/head";
import Footer from "../component/footer";
import AppBar from "../component/appBar";
import BackToTop from "../component/backToTop";

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
    <>
      <Head />
      <AppBar title="BREAKFAST / MENU" />
      <div
        style={{
          backgroundImage: "linear-gradient(white, #ffe6c1)",
        }}
      >
        <Container style={{ paddingTop: "20px", paddingBottom: "40px" }}>
          <Box
            display="flex"
            flexWrap="wrap"
            alignItems="center"
            style={{ marginBottom: "16px" }}
          >
            <Fade in={true} timeout={1000}>
              <>
                <Link href="/" passHref>
                  <Fab color="primary" size="small">
                    <ArrowBackIcon />
                  </Fab>
                </Link>
                <Link href="/" passHref>
                  <Button color="primary" size="large">
                    <Typography>HOME</Typography>
                  </Button>
                </Link>
              </>
            </Fade>
          </Box>
          <div style={{ minHeight: "80vh" }}>
            {menu.map((category, i) => {
              return (
                <Fade in={true} timeout={1000 + i * 150} key={category.id}>
                  <div>
                    <Slide
                      in={true}
                      timeout={1000 + i * 100}
                      direction="down"
                      mountOnEnter
                      unmountOnExit
                    >
                      <Accordion
                        expanded={expanded === category.id}
                        onChange={handleChange(category.id)}
                        style={{ marginBottom: "1px" }}
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
                    </Slide>
                  </div>
                </Fade>
              );
            })}
          </div>
        </Container>
      </div>
      <BackToTop />
      <Footer />
    </>
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
