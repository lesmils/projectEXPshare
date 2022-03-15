import React from "react";
import { fetchOneUser } from "../../store/profile/actions";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { selectUserProfile } from "../../store/profile/selectors";
import { Container, makeStyles } from "@material-ui/core";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import { Typography } from "@material-ui/core";
import OfferCard from "../../components/OfferCard";
import EventCard from "../../components/EventCard";
import OnlineEventCard from "../../components/OnlineEventCard";

function ProfilePage() {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchOneUser(id));
  }, [dispatch, id]);

  const profile = useSelector(selectUserProfile);

  const useStyles = makeStyles((theme) => ({
    container: {
      backgroundColor: "#bbdefb",
      minHeight: "2000px",
    },
    imageContent: {
      display: "flex",
      flexDirection: "column",
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.05)), url(${profile.imageUrl})`,
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      width: "45%",
      zIndex: "2",
    },
    detailsContent: {
      width: "55%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      height: "80%",
      marginLeft: "50px",
    },
    eventContainer: {
      display: "flex",
      flexDirection: "row",
      marginTop: "20px",
      marginLeft: "20px",
      marginBottom: "50px",
    },
  }));

  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Box
        sx={{
          width: "100%",
          height: 600,
          marginTop: "100px",
          backgroundColor: "primary.dark",
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          zIndex: "-2",
        }}
      >
        <div className={classes.imageContent}></div>
        <div className={classes.detailsContent}>
          <Typography variant="h3">{profile.name} </Typography>
          <Typography variant="p">{profile.description} </Typography>
        </div>
      </Box>
      <Box
        sx={{
          marginTop: "60px",
        }}
      >
        <Typography variant="h5">{profile.name}'s SkillTags</Typography>
        {!profile.skillTags
          ? "loading"
          : profile.skillTags.map((skill) => (
              <Button variant="outlined" size="small">
                {" "}
                {skill.name}
              </Button>
            ))}
      </Box>
      <Box>
        <Typography variant="h5">
          <hr />
          {profile.name}'s Offers
        </Typography>
        {!profile.offers
          ? "loading"
          : profile.offers.map((offer) => {
              return <OfferCard offer={offer} />;
            })}
      </Box>
      <Typography variant="h5">
        <hr />
        {profile.name}'s Live Events
      </Typography>
      <Box className={classes.eventContainer}>
        {!profile.organizer
          ? "loading"
          : profile.organizer.map((event) => {
              return <EventCard event={event} username={profile.name} />;
            })}
      </Box>
      <Typography variant="h5">
        <hr />
        {profile.name}'s Online Events
      </Typography>
      <Box className={classes.eventContainer}>
        {!profile.onlineEvents
          ? "loading"
          : profile.onlineEvents.map((event) => {
              return <OnlineEventCard event={event} username={profile.name} />;
            })}
      </Box>
    </Container>
  );
}

export default ProfilePage;
