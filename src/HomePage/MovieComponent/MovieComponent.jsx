import React, { useContext, useEffect, useState } from "react";
import contextComponent from "../../ContextComponent/Context";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Grid, Container, Rating } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Skeleton from "@mui/material/Skeleton";

const useStyles = makeStyles((theme) => ({
  card: {
    width: 255,
    height: 350,
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
    cursor: "pointer",
    position: "relative",
    margin: 10,
    transition: "box-shadow 0.3s",
    "&:hover": {
      boxShadow: "0px 0px 10px 2px rgba(0,0,0,0.6)",
    },
  },

  cardContent: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 350,
    width: 255,
    backgroundColor: "rgba(0,0,0,0.7)",
  },
  cardTitle: {
    height: "50px",
    fontWeight: "bold",
    color: "white",
    fontSize: 20,
    textAlign: "center",
  },

  Rating: {
    fontSize: 15,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "60%",
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    position: "absolute",
    bottom: 0,
    right: 10,
    marginLeft: 10,
    "& .MuiRating-iconEmpty": {
      color: "white",
    },
  },
  Year: {
    position: "absolute",
    bottom: 0,
    left: 15,
    color: "yellow",
    fontSize: 15,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "50%",
    fontWeight: "bold",
    textAlign: "center",
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px)",
  },
}));
function MovieComponent() {
  const { data, setData, filteredData, setFilteredData } =
    useContext(contextComponent);

  const styles = useStyles();
  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://api.npoint.io/edc63d84d022b2b20f61"
      );
      const result = await response.json();
      setData(result);
      setFilteredData(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Container sx={{ marginTop: 3 }}>
        <Grid container spacing={2}>
          {filteredData.map((responceData, index) => {
            return (
              <Card
                elevation={0}
                className={styles.card}
                sx={{ borderRadius: 5 }}
              >
                <Grid item xs={12} sm={4} key={responceData.id}>
                  <CardActionArea disableRipple>
                    <CardMedia
                      component="img"
                      image={responceData.images[1][1]}
                      alt={responceData.title}
                      sx={{ height: 350, width: 255, objectFit: "cover" }}
                    />
                    <CardContent
                      className={styles.cardContent}
                      sx={{
                        padding: 0,
                        opacity: 0,
                        transform: "translate3d(0, 50px, 0)",
                        transition: "0.25s all ease-in-out",
                        textAlign: "center",
                        top: 0,
                        left: 0,
                        position: "absolute",

                        "&:hover": {
                          opacity: 1,
                          transform: "translate3d(0, 0, 0)",
                        },
                      }}
                    >
                      <Typography
                        gutterBottom
                        variant="span"
                        component="h2"
                        className={styles.cardTitle}
                      >
                        {responceData.title}
                      </Typography>
                      <div>
                        <Typography>
                          <h3 className={styles.Year}>
                            {" "}
                            Year : {responceData.year}
                          </h3>
                        </Typography>
                      </div>
                      <div>
                        <Typography
                          variant="p"
                          component="span"
                          className={styles.Rating}
                        >
                          Rating :
                          <Rating
                            name="half-rating-read"
                            defaultValue={responceData.rating / 2}
                            precision={0.1}
                            readOnly
                            className={styles.Rating}
                            sx={{ fontSize: 15, fontWeight: "bold" }}
                          />
                        </Typography>
                      </div>
                    </CardContent>
                  </CardActionArea>
                </Grid>
              </Card>
            );
          })}
        </Grid>
      </Container>
      {!filteredData.length && (
        <>
          <Container>
            <Grid container spacing={1}>
              <Grid item xs={12} sm={3}>
                <Skeleton
                  sx={{ height: 350, width: 250, borderRadius: 5, }}
                  animation="wave"
                  variant="rectangular"
                />
              </Grid>
              <Grid item xs={12} sm={3}>
                <Skeleton
                  sx={{ height: 350, width: 250, borderRadius: 5, }}
                  animation="wave"
                  variant="rectangular"
                />
              </Grid>
              <Grid item xs={12} sm={3}>
                <Skeleton
                  sx={{ height: 350, width: 250, borderRadius: 5, }}
                  animation="wave"
                  variant="rectangular"
                />
              </Grid>
              <Grid item xs={12} sm={3}>
                <Skeleton
                  sx={{ height: 350, width: 250, borderRadius: 5, }}
                  animation="wave"
                  variant="rectangular"
                />
              </Grid>
              <Grid item xs={12} sm={3}>
                <Skeleton
                  sx={{ height: 350, width: 250, borderRadius: 5, }}
                  animation="wave"
                  variant="rectangular"
                />
              </Grid>
              <Grid item xs={12} sm={3}>
                <Skeleton
                  sx={{ height: 350, width: 250, borderRadius: 5, }}
                  animation="wave"
                  variant="rectangular"
                />
              </Grid>
              <Grid item xs={12} sm={3}>
                <Skeleton
                  sx={{ height: 350, width: 250, borderRadius: 5, }}
                  animation="wave"
                  variant="rectangular"
                />
              </Grid>
              <Grid item xs={12} sm={3}>
                <Skeleton
                  sx={{ height: 350, width: 250, borderRadius: 5, }}
                  animation="wave"
                  variant="rectangular"
                />
              </Grid>
              <Grid item xs={12} sm={3}>
                <Skeleton
                  sx={{ height: 350, width: 250, borderRadius: 5, }}
                  animation="wave"
                  variant="rectangular"
                />
              </Grid>
              <Grid item xs={12} sm={3}>
                <Skeleton
                  sx={{ height: 350, width: 250, borderRadius: 5, }}
                  animation="wave"
                  variant="rectangular"
                />
              </Grid>
              <Grid item xs={12} sm={3}>
                <Skeleton
                  sx={{ height: 350, width: 250, borderRadius: 5, }}
                  animation="wave"
                  variant="rectangular"
                />
              </Grid>
              <Grid item xs={12} sm={3}>
                <Skeleton
                  sx={{ height: 350, width: 250, borderRadius: 5, }}
                  animation="wave"
                  variant="rectangular"
                />
              </Grid>
              <Grid item xs={12} sm={3}>
                <Skeleton
                  sx={{ height: 350, width: 250, borderRadius: 5, }}
                  animation="wave"
                  variant="rectangular"
                />
              </Grid>
              <Grid item xs={4}>
                <Skeleton
                  sx={{ height: 350, width: 250, borderRadius: 5, }}
                  animation="wave"
                  variant="rectangular"
                />
              </Grid>
              <Grid item xs={4}>
                <Skeleton
                  sx={{ height: 350, width: 250, borderRadius: 5 }}
                  animation="wave"
                  variant="rectangular"
                />
              </Grid>
            </Grid>
          </Container>
        </>
      )}
    </div>
  );
}
export default MovieComponent;
