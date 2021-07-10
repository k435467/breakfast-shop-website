import { GetStaticProps } from "next";
import Link from "next/link";
import NextHead from "next/head";
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
import React, { useContext, useEffect, useState } from "react";

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
  const [isLandscapeMode, setIsLandscapeMode] = useState(false);
  const handleChange =
    (id: number) => (event: React.ChangeEvent<{}>, isExpanded: boolean) => {
      setExpanded(isExpanded ? id : false);
    };

  const handleResize = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth > window.innerHeight) {
        setIsLandscapeMode(true);
      } else {
        setIsLandscapeMode(false);
      }
    }
  };
  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Head />
      <NextHead>
        <title>k435467 Breakfast Shop: Menu</title>
      </NextHead>
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
            <Box
              display="flex"
              flexDirection={isLandscapeMode ? "row" : "column"}
              overflow="auto"
            >
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
                          expanded={isLandscapeMode || expanded === category.id}
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
                                    <ListItemText
                                      primary={item.name}
                                      style={{ wordBreak: "keep-all" }}
                                    ></ListItemText>
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
            </Box>
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
