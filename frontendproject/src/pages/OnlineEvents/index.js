import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchOnlineEvents } from "../../store/onlineEvents/action";
import { selectOnlineEvents } from "../../store/onlineEvents/selectors";
import OnlineEventCard from "../../components/OnlineEventCard";
import { useEffect } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Typography, makeStyles } from "@material-ui/core";
import background from "./bgmat.webp";
function OnlineEvents() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchOnlineEvents());
  }, [dispatch]);

  const allOnlineEvents = useSelector(selectOnlineEvents);

  const useStyles = makeStyles((theme) => ({
    backGroundContainer: {
      backgroundImage: `url(${background})`,
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      backgroundPosition: "center top",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      minHeight: "1250px",
    },
  }));
  const classes = useStyles();

  function FormRow() {
    return (
      <React.Fragment>
        <Typography variant="h3" component="div"></Typography>

        {!allOnlineEvents
          ? "loading"
          : allOnlineEvents.map((event) => {
              return (
                <Grid item xs={3}>
                  <OnlineEventCard
                    event={event}
                    username={event.user.name}
                    userId={event.userId}
                  />
                </Grid>
              );
            })}
      </React.Fragment>
    );
  }

  return (
    <div className={classes.backGroundContainer}>
      <Box
        sx={{ flexGrow: 1, marginTop: 9, marginLeft: 18, paddingTop: "25px" }}
      >
        <Typography variant="h4">Upcoming events</Typography>
        <Grid container spacing={1}>
          <Grid container item spacing={3}>
            <FormRow />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default OnlineEvents;
