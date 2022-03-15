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

export default function OnlineEventCard(props) {
  const { id, name, description, time, imageUrl } = props.event;

  const date = moment(time).format("YYYY-MM-DD hh:mm A");

  console.log(date);

  const handleClick = () => {
    console.log("hey let's add an action here");
  };

  return (
    <Card sx={{ maxWidth: 345, marginLeft: "25px" }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="event">
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
      </CardContent>
      <CardActions disableSpacing></CardActions>
      <Button
        aria-describedby={id}
        variant="contained"
        onClick={handleClick}
        component={Link}
        to={`/onlineevents/${id}`}
      >
        Watch Stream
      </Button>
    </Card>
  );
}
