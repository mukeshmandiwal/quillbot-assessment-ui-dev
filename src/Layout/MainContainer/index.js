import React from "react";
import { Box, useMediaQuery } from "@mui/system";
import Grid from "@mui/system/Grid";
import MobileView from "./MobileView";
import MovieCard from "../../components/MovieCard";
import MovieDetailsCard from "../../components/MovieDetails";
import Typography from "../../components/Typography";
import { useMainContainer } from "./useMainContainer";
import Header from "../../components/Header";

import { LABEL_NO_RESULT } from "../../constants/labels";

function MainContainer({ drawerHandler }) {
  const {
    selectedMovie,
    setSelectedMovie,
    movieData,
    onChangeHandler,
    restHanlder,
  } = useMainContainer();
  const isMobile = useMediaQuery("(max-width:600px)");
  const isLaptop = useMediaQuery("(max-width:1600px)");
  const itemsPerRow = isLaptop ? 5 : 6;

  return (
    <Box
      component="main"
      sx={{
        transition: "all 0.3s",
        width: isMobile ? "100%" : "80%",
        display: "flex",
        flexDirection: "column",
        overflowY: "auto",
        height: "99vh",
        padding: !isMobile && "60px",
      }}
      role="main"
      aria-label="Movie grid"
    >
      <Header
        listData={movieData}
        onChangeHandler={onChangeHandler}
        restHanlder={restHanlder}
        drawerHandler={drawerHandler}
        selectedItem={selectedMovie}
      />
      {isMobile && (
        <MobileView
          movieData={movieData}
          selectedMovie={selectedMovie}
          setSelectedMovie={setSelectedMovie}
          onChangeHandler={onChangeHandler}
          restHanlder={restHanlder}
        />
      )}

      {!isMobile && movieData?.length > 0 && (
        <Box>
          {/* First row - always shows 6 items */}
          {/* Show details card after first row if first row item selected */}
          {selectedMovie &&
            movieData.findIndex((m) => m.imdbID === selectedMovie.imdbID) <
              itemsPerRow && (
              <Box sx={{ width: "100%", margin: "20px 0" }}>
                <MovieDetailsCard movieDetails={selectedMovie} />
              </Box>
            )}
          <Grid container spacing={2}>
            {movieData.slice(0, itemsPerRow).map((movie) => (
              <Grid item xs={2} key={movie.imdbID}>
                <MovieCard
                  movie={movie}
                  selectedMovie={selectedMovie}
                  setSelectedMovie={setSelectedMovie}
                />
              </Grid>
            ))}
          </Grid>

          {/* Remaining rows */}
          {Array.from({
            length: Math.ceil((movieData.length - itemsPerRow) / itemsPerRow),
          }).map((_, rowIndex) => {
            const startIdx = (rowIndex + 1) * itemsPerRow;
            const rowMovies = movieData.slice(startIdx, startIdx + itemsPerRow);
            const selectedInThisRow =
              selectedMovie &&
              movieData.findIndex((m) => m.imdbID === selectedMovie.imdbID) >=
                startIdx &&
              movieData.findIndex((m) => m.imdbID === selectedMovie.imdbID) <
                startIdx + itemsPerRow;

            return (
              <React.Fragment key={rowIndex}>
                {selectedInThisRow && (
                  <Box sx={{ width: "100%", margin: "20px 0" }}>
                    <MovieDetailsCard movieDetails={selectedMovie} />
                  </Box>
                )}
                <Grid container spacing={2} sx={{ mt: 2 }}>
                  {rowMovies.map((movie) => (
                    <Grid item xs={2} key={movie.imdbID}>
                      <MovieCard
                        movie={movie}
                        selectedMovie={selectedMovie}
                        setSelectedMovie={setSelectedMovie}
                      />
                    </Grid>
                  ))}
                </Grid>
              </React.Fragment>
            );
          })}
        </Box>
      )}
      {!movieData?.length && (
        <Box
          sx={{
            display: "flex",
            justifyContent: isMobile ? "center" : "start",
          }}
        >
          <Typography
            sx={{
              fontSize: "21px",
              fontWeight: "600",
              color: "text.primary",
            }}
          >
            {LABEL_NO_RESULT}
          </Typography>
        </Box>
      )}
    </Box>
  );
}

export default MainContainer;
