import React from "react";
import { Box, Container } from "@mui/system";
import Button from "../Button";
import ProgressBar from "../ProgressBar";
import Typography from "../Typography";
import {
  LABEL_DIRECTED_BY,
  LABEL_LANGUAGE,
  LABEL_PLAY_MOVIE,
  LABEL_RUNNING_TIME,
  LABEL_WATCH_TRAILER,
  LABEL_YEAR,
} from "../../constants/labels";

/**
 * MovieDetailsCard component displays detailed information about a movie
 * including title, rating, year, runtime, director, language, plot and action buttons
 *
 * @param {Object} props - Component props
 * @param {Object} props.movieDetails - Object containing movie information
 * @param {string} props.movieDetails.Title - Movie title
 * @param {string} props.movieDetails.Poster - URL of movie poster image
 * @param {number} props.movieDetails.imdbRating - IMDB rating (0-10)
 * @param {string} props.movieDetails.Year - Release year
 * @param {string} props.movieDetails.Runtime - Movie runtime
 * @param {string} props.movieDetails.Director - Movie director
 * @param {string} props.movieDetails.Language - Movie language
 * @param {string} props.movieDetails.Plot - Movie plot summary
 * @returns {React.ReactElement} A card displaying movie details
 */
function MovieDetailsCard({ movieDetails, isMobile }) {
  const { Title, Poster, imdbRating, Year, Runtime, Director, Language, Plot } =
    movieDetails;

  /**
   * MovieInfoItem component renders a label-value pair for movie information
   *
   * @param {Object} props - Component props
   * @param {string} props.label - Label for the movie information
   * @param {string} props.value - Value of the movie information
   * @returns {React.ReactElement} Typography component showing label and value
   */
  const MovieInfoItem = ({ label, value }) => (
    <Typography
      variant="h6"
      sx={{
        fontWeight: "600",
        color: "text.primary",
        fontSize: 16,
        margin: "5px 0",
      }}
      role="heading"
      aria-level="2"
    >
      {label}: {value}
    </Typography>
  );

  return (
    <Box
      sx={{
        bgcolor: "background.cardBg",
        width: "94%",
        height: isMobile ? "100%" : "390px",
        borderRadius: "12px",
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        overflow: "hidden",
        animation: "fadeInContent 1.8s ease-out",
        "@keyframes fadeInContent": {
          "0%": {
            bgcolor: "background.cardBg",
            opacity: 0,
          },
          "50%": {
            bgcolor: "background.cardBg",
            opacity: 1,
          },
          "100%": {
            opacity: 1,
          },
        },
      }}
      role="article"
      aria-label={`Movie card for ${Title}`}
      tabIndex="0"
    >
      <img
        src={Poster}
        alt={`Movie poster for ${Title}`}
        width={isMobile ? "100%" : "40%"}
        {...(isMobile ? { height: "50%" } : {})}
        style={{
          objectFit: "cover",
          animation: "fadeIn 0.5s ease-in 0.5s both",
          opacity: 0,
        }}
      />
      <Container>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            padding: "24px",
            animation: "fadeIn 0.5s ease-in 0.5s both",
            opacity: 0,
            "@keyframes fadeIn": {
              from: { opacity: 0 },
              to: { opacity: 1 },
            },
          }}
        >
          <Typography
            variant="h1"
            role="heading"
            aria-level="2"
            sx={{
              color: "text.primary",
              fontSize: 30,
              fontWeight: "700",
            }}
          >
            {Title}
          </Typography>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <ProgressBar
              progress={imdbRating * 10}
              sx={{
                width: "110px",
                margin: "20px 0",
                marginRight: "20px",
              }}
            />
            <Typography
              variant="h6"
              role="heading"
              aria-level="2"
              sx={{
                color: "text.primary",
                fontSize: 16,
                fontWeight: "600",
              }}
            >
              {imdbRating} / 10
            </Typography>
          </Box>

          <MovieInfoItem label={LABEL_YEAR} value={Year} />
          <MovieInfoItem label={LABEL_RUNNING_TIME} value={Runtime} />
          <MovieInfoItem label={LABEL_DIRECTED_BY} value={Director} />
          <MovieInfoItem label={LABEL_LANGUAGE} value={Language} />

          <Typography
            variant="span"
            role="span"
            aria-level="2"
            sx={{
              color: "text.primary",
              fontWeight: "400",
              fontSize: 14,
              margin: "10px 0",
            }}
          >
            {Plot}
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            animation: "fadeIn 0.5s ease-in 0.7s both",
            opacity: 0,
          }}
        >
          <Button
            fontSize={16}
            fontWeight={700}
            styles={{ marginLeft: "24px" }}
          >
            {LABEL_PLAY_MOVIE}
          </Button>
          <Button
            variant="outlined"
            fontSize={16}
            fontWeight={700}
            styles={{ margin: "0 24px" }}
          >
            {LABEL_WATCH_TRAILER}
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

export default MovieDetailsCard;
