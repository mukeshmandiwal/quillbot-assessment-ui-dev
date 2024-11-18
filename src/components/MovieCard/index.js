import React from "react";
import { Box } from "@mui/system";
import Typography from "../Typography";
import PlayCircleFilledWhiteOutlinedIcon from "@mui/icons-material/PlayCircleFilledWhiteOutlined";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";

/**
 * MovieCard component displays a movie poster with title and action buttons
 * @param {Object} props - Component props
 * @param {Object} props.movie - Movie data object containing Title, Poster and imdbID
 * @param {Function} props.setSelectedMovie - Function to set the selected movie
 * @param {Object} props.selectedMovie - Currently selected movie object
 * @returns {React.ReactElement} MovieCard component
 */
const MovieCard = ({ movie, setSelectedMovie, selectedMovie }) => {
  const isSelected = selectedMovie?.imdbID === movie.imdbID;
  const truncatedTitle =
    movie.Title.length > 15 ? `${movie.Title.slice(0, 15)}...` : movie.Title;

  return (
    <Box
      sx={{
        bgcolor: "background.cardBg",
        width: "185px",
        height: "285px",
        borderRadius: "12px",
        flexDirection: "column",
        padding: "12px",
        border: isSelected ? "3px solid" : "none",
        borderColor: isSelected ? "border.primary" : "transparent",
      }}
      role="article"
      aria-label={`Movie card for ${movie.Title}`}
      tabIndex="0"
      onClick={() => setSelectedMovie(movie)}
    >
      <img
        src={movie.Poster}
        alt={`Movie poster for ${movie.Title}`}
        height={188}
        width={157}
        style={{
          borderRadius: "6px",
          objectFit: "cover",
        }}
      />

      <Typography
        sx={{
          color: "text.primary",
          fontWeight: "bold",
          fontSize: 15,
          marginTop: "10px",
        }}
        variant="h6"
        role="heading"
        aria-level="2"
      >
        {truncatedTitle}
      </Typography>

      <Box
        sx={{
          color: "text.primary",
          marginTop: "10px",
        }}
      >
        <PlayCircleFilledWhiteOutlinedIcon
          sx={{
            marginRight: "10px",
          }}
        />
        <AddCircleOutlineOutlinedIcon />
      </Box>
    </Box>
  );
};

export default MovieCard;
