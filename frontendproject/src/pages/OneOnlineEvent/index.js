import React from "react";
import io from "socket.io-client";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Link } from "react-router-dom";
import Chat from "../../components/LiveChat";
import { selectUser } from "../../store/user/selectors";
import background from "./bgmat.webp";
import { makeStyles } from "@material-ui/core";
import { Box } from "@mui/system";
import YoutubeEmbed from "../../components/YoutubeEmbed";
import { fetchOneOnlineEvent } from "../../store/onlineEvents/action";
import { selectOneOnlineEvent } from "../../store/onlineEvents/selectors";

const socket = io.connect("http://localhost:4001");

function OneOnlineEvent() {
  const { id } = useParams();
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const oneOnlineEvent = useSelector(selectOneOnlineEvent);

  useEffect(() => {
    dispatch(fetchOneOnlineEvent(id));
  }, [dispatch, id]);

  useEffect(() => {
    setTimeout(() => {
      socket.emit("join_room", id);
    }, 1500);
  }, [dispatch, id]);

  const useStyles = makeStyles((theme) => ({
    backGroundContainer: {
      backgroundImage: `url(${background})`,
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      backgroundPosition: "center top",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      minHeight: "1250px",
      marginTop: "72px",
      padding: "25px",
    },
  }));

  const classes = useStyles();

  return (
    <div className={classes.backGroundContainer}>
      <Box>
        <YoutubeEmbed streamUrl={oneOnlineEvent.streamUrl} />
      </Box>
      <Box>
        <Chat socket={socket} username={user.name} room={id} />
      </Box>
    </div>
  );
}

export default OneOnlineEvent;
