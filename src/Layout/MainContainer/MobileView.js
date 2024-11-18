import React from "react";
import { Box, useMediaQuery } from "@mui/system";
import Grid from "@mui/system/Grid";
import MovieCard from "../../components/MovieCard";
import MovieDetailsCard from "../../components/MovieDetails";
import SearchBar from "../../components/SearchBar";

function MobileView({
  movieData,
  selectedMovie,
  setSelectedMovie,
  onChangeHandler,
  restHanlder,
}) {
  const isMobile = useMediaQuery("(max-width:600px)");
  return (
    <>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          paddingX: "20px",
          marginBottom: "20px",
        }}
      >
        {!selectedMovie && (
          <SearchBar
            listData={movieData}
            onChangeHandler={onChangeHandler}
            restHanlder={restHanlder}
            width="100%"
            isMobile={isMobile}
          />
        )}
      </Box>
      {!selectedMovie ? (
        <Grid
          container
          spacing={2}
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          {movieData.map((movie) => (
            <Grid item xs={2} key={movie.imdbID}>
              <MovieCard
                movie={movie}
                selectedMovie={selectedMovie}
                setSelectedMovie={setSelectedMovie}
              />
            </Grid>
          ))}
        </Grid>
      ) : (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <MovieDetailsCard movieDetails={selectedMovie} isMobile={isMobile} />
        </Box>
      )}
    </>
  );
}

export default MobileView;
