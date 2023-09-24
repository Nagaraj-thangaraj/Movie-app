import { Button, Container, Grid } from "@mui/material";
import { useContext } from "react";
import contextComponent from "../../ContextComponent/Context";
import React from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  customButton: {
    backgroundColor: "black",
    "&:focus": {
      background: "red",
    },
  },
}));

const ButtonFilter = () => {
  const { data, setData, filteredData, setFilteredData } =
    useContext(contextComponent);
  const clasess = useStyles();
  function displayAll() {
    setFilteredData(data);
  }

  function dramaFilterData(Drama) {
    const DramaMovies = data.filter((item, index) => item.genre[0] === Drama);
    setFilteredData(DramaMovies);
  }

  function actionFilterData(Action) {
    const ActionMovies = data.filter((item, index) => item.genre[0] === Action);
    setFilteredData(ActionMovies);
  }

  function crimeFilterData(Crime) {
    const CrimeMovies = data.filter((item) => item.genre[0] === Crime);
    setFilteredData(CrimeMovies);
  }

  function biographyFilterData(Biography) {
    const BiographyMovies = data.filter((item) => item.genre[0] === Biography);
    setFilteredData(BiographyMovies);
  }

  function animationFilterData(Animation) {
    const AnimationMovies = data.filter((item) => item.genre[0] === Animation);
    setFilteredData(AnimationMovies);
  }

  function romanceFilterData(Romance) {
    const RomanceMovies = data.filter((item) => item.genre[1] === Romance);
    setFilteredData(RomanceMovies);
  }

  return (
    <>
      <div>
        <Container>
          <Grid
            container
            spacing={1}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Grid item>
              <Button
                sx={{ background: "black", fontWeight: "bold" }}
                variant="contained"
                onClick={() => displayAll()}
                className={clasess.customButton}
              >
                All
              </Button>{" "}
            </Grid>
            <Grid item>
              <Button
                sx={{ background: "black", fontWeight: "bold" }}
                variant="contained"
                onClick={() => dramaFilterData("Drama")}
                className={clasess.customButton}
              >
                Drama
              </Button>{" "}
            </Grid>
            <Grid item>
              <Button
                sx={{ background: "black", fontWeight: "bold" }}
                variant="contained"
                onClick={() => actionFilterData("Action")}
                className={clasess.customButton}
              >
                Action
              </Button>
            </Grid>
            <Grid item>
              <Button
                sx={{ background: "black", fontWeight: "bold" }}
                className={clasess.customButton}
                variant="contained"
                onClick={() => crimeFilterData("Crime")}
              >
                Crime{" "}
              </Button>
            </Grid>
            <Grid item>
              <Button
                sx={{ background: "black", fontWeight: "bold" }}
                variant="contained"
                className={clasess.customButton}
                onClick={() => biographyFilterData("Biography")}
              >
                Biography{" "}
              </Button>
            </Grid>
            <Grid item>
              <Button
                sx={{ background: "black", fontWeight: "bold" }}
                className={clasess.customButton}
                variant="contained"
                onClick={() => animationFilterData("Animation")}
              >
                Animation{" "}
              </Button>
            </Grid>
            <Grid item>
              <Button
                sx={{ background: "black", fontWeight: "bold" }}
                className={clasess.customButton}
                variant="contained"
                onClick={() => romanceFilterData("Romance")}
              >
                Romance{" "}
              </Button>
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
};

export default ButtonFilter;
