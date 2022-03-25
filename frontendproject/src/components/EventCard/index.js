import * as React from "react";
import moment from "moment";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { selectUser } from "../../store/user/selectors";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Popover } from "@material-ui/core";
import { Box } from "@mui/system";
import { deleteLiveEvent } from "../../store/user/actions";

export default function EventCard(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const {
    id,
    name,
    description,
    location,
    imageUrl,
    maxParticipants,
    time,
    durationHours,
    tokenCost,
    organizerId,
  } = props.event;

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const date = moment(time).format("YYYY-MM-DD hh:mm A");

  const handleClickRequest = () => {
    console.log("hey let's add an action here");
  };

  const handleClickDelete = () => {
    dispatch(deleteLiveEvent(id));

    handleClose();
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const one = open ? "simple-popover" : undefined;

  return (
    <Card sx={{ maxWidth: 345, marginLeft: "25px", marginTop: "25px" }}>
      <CardHeader
        avatar={
          <Avatar
            component={Link}
            to={`/profiles/${organizerId}`}
            style={{ textDecoration: "none" }}
            sx={{ bgcolor: red[500] }}
            aria-label="event"
          >
            {!props.username ? "" : props.username.charAt(0)}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={name}
        subheader={date}
      />
      <CardMedia component="img" height="194" image={imageUrl} alt="name" />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <strong>Location:</strong> {location}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <strong>Max Number of participants:</strong> {maxParticipants}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <strong>Duration:</strong> {!durationHours ? "-" : durationHours}{" "}
          hours
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <strong>Token Cost:</strong> {tokenCost}
        </Typography>
      </CardContent>
      <CardActions disableSpacing></CardActions>

      {organizerId === user.id ? (
        <Button
          style={{ margin: "15px" }}
          variant="contained"
          onClick={handleClick}
        >
          Cancel Event
        </Button>
      ) : (
        <Button
          style={{ margin: "15px" }}
          variant="contained"
          onClick={handleClick}
        >
          Join Event
        </Button>
      )}

      <Popover
        id={one}
        style={{ textAlign: "center", paddingTop: "20px" }}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        {user.id !== organizerId ? (
          <Box>
            <Typography>
              Join Event for <strong>{tokenCost}</strong> tokens
            </Typography>
            <Button
              variant="contained"
              style={{ margin: "15px" }}
              onClick={handleClickRequest}
            >
              Continue, join
            </Button>
          </Box>
        ) : (
          <Box>
            <Typography>Are You Sure?</Typography>
            <Button
              variant="contained"
              style={{ margin: "15px" }}
              onClick={handleClickDelete}
            >
              Yes, cancel
            </Button>
          </Box>
        )}
      </Popover>
    </Card>
  );
}
