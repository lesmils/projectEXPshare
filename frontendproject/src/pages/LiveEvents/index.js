import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLiveEvents } from "../../store/liveEvents/action";
import { selectLiveEvents } from "../../store/liveEvents/selectors";
import EventCard from "../../components/EventCard";
import { useEffect } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Typography } from "@material-ui/core";
function LiveEvents() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchLiveEvents());
  }, [dispatch]);

  const allLiveEvents = useSelector(selectLiveEvents);

  function FormRow() {
    return (
      <React.Fragment>
        <Typography variant="h3" component="div"></Typography>

        {!allLiveEvents
          ? "loading"
          : allLiveEvents.map((event) => {
              return (
                <Grid item xs={3}>
                  <EventCard event={event} username={event.organizer.name} />
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

export default LiveEvents;
