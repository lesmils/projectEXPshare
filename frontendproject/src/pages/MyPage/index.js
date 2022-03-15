import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { selectUser } from "../../store/user/selectors";
import { Container, makeStyles } from "@material-ui/core";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import { Typography } from "@material-ui/core";
import OfferCard from "../../components/OfferCard";
import EventCard from "../../components/EventCard";
import OnlineEventCard from "../../components/OnlineEventCard";
import { Popover } from "@material-ui/core";
import AddOffer from "../../components/AddOffer";
import { useNavigate } from "react-router-dom";
import { selectToken } from "../../store/user/selectors";
import ProfileImageUpload from "../../components/ProfileImageUpload";

function MyPage() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorElImage, setAnchorElImage] = React.useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector(selectToken);
  const user = useSelector(selectUser);

  useEffect(() => {
    if (!token) {
      navigate("/");
    }
  }, [token, navigate]);

  const useStyles = makeStyles((theme) => ({
    container: {
      backgroundColor: "#bbdefb",
      minHeight: "2000px",
    },
    imageContent: {
      display: "flex",
      flexDirection: "column",
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.05)), url(${user.imageUrl})`,
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

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const handleClickImage = (event) => {
    setAnchorElImage(event.currentTarget);
  };

  const handleCloseImage = () => {
    setAnchorElImage(null);
  };

  const openImage = Boolean(anchorElImage);
  const idImage = openImage ? "simple-popover" : undefined;

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
          <Typography variant="h3">{user.name} </Typography>
          <Typography variant="p">{user.description} </Typography>
        </div>
      </Box>
      <Button
        aria-describedby={user.id}
        variant="contained"
        onClick={handleClickImage}
      >
        change Image
      </Button>
      <Popover
        id={idImage}
        open={openImage}
        anchorEl={anchorElImage}
        onClose={handleCloseImage}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <ProfileImageUpload />
      </Popover>
      <Box
        sx={{
          marginTop: "60px",
        }}
      >
        <Typography variant="h5">{user.name}'s SkillTags</Typography>
        {!user.skillTags
          ? "loading"
          : user.skillTags.map((skill) => (
              <Button variant="outlined" size="small">
                {" "}
                {skill.name}
              </Button>
            ))}
      </Box>
      <Box>
        <Typography variant="h5">
          <hr />
          {user.name}'s Offers
        </Typography>
        <Button
          aria-describedby={user.id}
          variant="contained"
          onClick={handleClick}
        >
          Add offer
        </Button>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
        >
          <AddOffer token={token} id={user.id} />
        </Popover>

        {!user.offers
          ? "loading"
          : user.offers.map((offer) => {
              return <OfferCard offer={offer} />;
            })}
      </Box>
      <Typography variant="h5">
        <hr />
        {user.name}'s Live Events
      </Typography>
      <Box className={classes.eventContainer}>
        {!user.organizer
          ? "loading"
          : user.organizer.map((event) => {
              return <EventCard event={event} username={user.name} />;
            })}
      </Box>
      <Typography variant="h5">
        <hr />
        {user.name}'s Online Events
      </Typography>
      <Box className={classes.eventContainer}>
        {!user.onlineEvents
          ? "loading"
          : user.onlineEvents.map((event) => {
              return <OnlineEventCard event={event} username={user.name} />;
            })}
      </Box>
    </Container>
  );
}

export default MyPage;
