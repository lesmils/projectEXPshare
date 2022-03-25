import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import Fab from "@material-ui/core/Fab";
import { Send } from "@mui/icons-material";
import { useState, useEffect } from "react";
import { Socket } from "socket.io-client";
import ScrollToBottom from "react-scroll-to-bottom";
import { Button } from "@material-ui/core";

const useStyles = makeStyles({
  chatSection: {
    marginTop: "15px",
    width: "40%",
    minWidth: "350px",
    height: "65vh",
    border: "2px solid #8f87ea",
    marginLeft: "25px",
    borderRadius: "25px",
    paddingRight: "12px",
    backgroundImage: "linear-gradient(to bottom, #dbd6f9, #ffffff)",
  },

  messageArea: {
    height: "50vh",
    overflowY: "auto",
    padding: "25px",
  },
});

const Chat = ({ socket, username, room }) => {
  const classes = useStyles();
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([]);

  const sendMessage = async () => {
    if (currentMessage !== "") {
      const messageData = {
        room: room,
        author: username,
        message: currentMessage,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };
      await socket.emit("send_message", messageData);
      setMessageList((list) => [...list, messageData]);
      setCurrentMessage("");
    }
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessageList((list) => [...list, data]);
    });
  }, [socket]);

  return (
    <div style={{ marginTop: "15px" }}>
      <Grid container style={{ marginLeft: "30px" }}>
        <Grid item xs={12}>
          <Typography variant="h5" className="header-message">
            Live Chat
          </Typography>
        </Grid>
      </Grid>
      <Grid className={classes.chatSection}>
        <Grid>
          <ScrollToBottom className={classes.messageArea}>
            {messageList.map((messageContent, index) => {
              return (
                <ListItem key={index}>
                  <Grid container>
                    <Grid item xs={12}>
                      <ListItemText
                        align={
                          username !== messageContent.author ? "left" : "right"
                        }
                        secondary={messageContent.author}
                      >
                        {messageContent.message}
                      </ListItemText>
                    </Grid>
                    <Grid item xs={12}>
                      <ListItemText
                        style={{ marginRight: "10px" }}
                        align={
                          username !== messageContent.author ? "left" : "right"
                        }
                        secondary={messageContent.time}
                      ></ListItemText>
                    </Grid>
                  </Grid>
                </ListItem>
              );
            })}
          </ScrollToBottom>
          <Divider />
          <Grid container style={{ padding: "20px" }}>
            <Grid item xs={11}>
              <TextField
                fullWidth
                type="text"
                value={currentMessage}
                placeholder="Say something..."
                onChange={(event) => {
                  setCurrentMessage(event.target.value);
                }}
                onKeyDown={(event) => {
                  event.key === "Enter" && sendMessage();
                }}
              />
            </Grid>
            <Grid xs={1} align="right">
              <Fab color="primary" aria-label="add">
                <Send onClick={sendMessage} />
              </Fab>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Chat;
