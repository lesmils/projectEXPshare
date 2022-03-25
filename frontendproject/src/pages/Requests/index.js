import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { selectUser } from "../../store/user/selectors";
import { Button } from "@mui/material";

function Requests() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div style={{ marginTop: "100px" }}>
      <div>
        <Typography variant="h5"> Requests from Other Users </Typography>
        <List
          sx={{
            width: "100%",
            maxWidth: 700,
            bgcolor: "background.paper",
            marginTop: "20px",
            backgroundImage: "linear-gradient(to bottom, #dbd6f9, #ffffff)",
            borderRadius: "10px",
          }}
        >
          {!user.seller
            ? "loading"
            : user.seller.map((request) => {
                return (
                  <ListItem alignItems="flex-start">
                    <div>
                      <ListItemAvatar>
                        <Avatar src={request.buyer.imageUrl} />
                      </ListItemAvatar>
                      <ListItemText
                        primary={request.offer.name}
                        secondary={
                          <React.Fragment>
                            <Typography
                              sx={{ display: "inline" }}
                              component="span"
                              variant="body2"
                              color="text.primary"
                            >
                              {request.buyer.name}
                              {"    "}
                            </Typography>
                            {request.message}
                            <div>
                              <Typography
                                sx={{ display: "inline" }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                              >
                                Status:{" "}
                                {request.isAccepted ? (
                                  <strong>Accepted</strong>
                                ) : (
                                  <strong>Pending</strong>
                                )}
                              </Typography>
                            </div>
                            <div>
                              {request.isAccepted ? (
                                <Button variant="contained" color="primary">
                                  Cancel
                                </Button>
                              ) : (
                                <Button>Accept Request</Button>
                              )}
                            </div>
                          </React.Fragment>
                        }
                      />
                    </div>
                  </ListItem>
                );
              })}

          <Divider variant="inset" component="li" />
        </List>
      </div>

      <div style={{ marginTop: "20px" }}>
        <Typography variant="h5">Requests You've Made</Typography>
        <List
          sx={{
            width: "100%",
            maxWidth: 700,
            bgcolor: "background.paper",
            marginTop: "20px",
            backgroundImage: "linear-gradient(to bottom, #dbd6f9, #ffffff)",
            borderRadius: "10px",
          }}
        >
          {!user.buyer
            ? "loading"
            : user.buyer.map((request) => {
                return (
                  <ListItem alignItems="flex-start">
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <ListItemAvatar>
                        <Avatar src={request.seller.imageUrl} />
                      </ListItemAvatar>
                      <ListItemText
                        primary={request.offer.name}
                        secondary={
                          <React.Fragment>
                            <Typography
                              sx={{ display: "inline" }}
                              component="span"
                              variant="body2"
                              color="text.primary"
                            >
                              {request.seller.name} {"    "}
                            </Typography>
                            {request.message}
                            <div>
                              <Typography
                                sx={{ display: "inline" }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                              >
                                Status:{" "}
                                {request.isAccepted ? (
                                  <strong>Accepted</strong>
                                ) : (
                                  <strong>Pending</strong>
                                )}
                              </Typography>
                            </div>
                          </React.Fragment>
                        }
                      />
                    </div>
                  </ListItem>
                );
              })}

          <Divider variant="inset" component="li" />
        </List>
      </div>
    </div>
  );
}

export default Requests;
