import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchOnlineEvents } from "../../store/onlineEvents/action";
import { selectOnlineEvents } from "../../store/onlineEvents/selectors";
import OnlineEventCard from "../../components/OnlineEventCard";
import { useEffect } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Typography } from "@material-ui/core";
function OnlineEvents() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchOnlineEvents());
  }, [dispatch]);

  const allOnlineEvents = useSelector(selectOnlineEvents);

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
    <Box sx={{ flexGrow: 1, marginTop: 18, marginLeft: 18 }}>
      <Typography variant="h4">Upcoming events</Typography>
      <Grid container spacing={1}>
        <Grid container item spacing={3}>
          <FormRow />
        </Grid>
      </Grid>
    </Box>
  );
}

export default OnlineEvents;
