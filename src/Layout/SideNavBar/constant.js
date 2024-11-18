import {
  LABEL_DISCOVER,
  LABEL_LOGOUT,
  LABEL_MOVIE,
  LABEL_PLAYLIST,
  LABEL_RECOMMENDED,
  LABEL_SETTINGS,
  LABEL_TV_SHOWS,
  LABEL_WATCH_LATER,
  LABEL_MY_LIST,
} from "../../constants/labels";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import UpdateOutlinedIcon from "@mui/icons-material/UpdateOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LiveTvOutlinedIcon from "@mui/icons-material/LiveTvOutlined";
import TvOutlinedIcon from "@mui/icons-material/TvOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import PlaylistPlayOutlinedIcon from "@mui/icons-material/PlaylistPlayOutlined";

export const SIDBAR_PROFILE = [
  { label: LABEL_SETTINGS, icon: SettingsOutlinedIcon },
  { label: LABEL_LOGOUT, icon: LogoutOutlinedIcon },
];

export const SIDBAR_WATCH_OPTIONS = [
  { label: LABEL_WATCH_LATER, icon: UpdateOutlinedIcon },
  { label: LABEL_RECOMMENDED, icon: FavoriteBorderOutlinedIcon },
];

export const SIDBAR_MAIN_OPTIONS = [
  { label: LABEL_DISCOVER, icon: SearchOutlinedIcon },
  { label: LABEL_PLAYLIST, icon: PlaylistPlayOutlinedIcon },
  { label: LABEL_MOVIE, icon: LiveTvOutlinedIcon },
  { label: LABEL_TV_SHOWS, icon: TvOutlinedIcon },
  { label: LABEL_MY_LIST, icon: ListOutlinedIcon },
];
