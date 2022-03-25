import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { selectUser } from "../../store/user/selectors";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import OfferCard from "../../components/OfferCard";
import EventCard from "../../components/EventCard";
import OnlineEventCard from "../../components/OnlineEventCard";
import AddOffer from "../../components/AddOffer";
import AddLiveEvent from "../../components/AddLiveEvent";
import AddOnlineEvent from "../../components/AddOnlineEvent";
import { useNavigate } from "react-router-dom";
import { selectToken } from "../../store/user/selectors";
import ProfileImageUpload from "../../components/ProfileImageUpload";
import DetailsForm from "../../components/DetailsForm";
import { postSkillTag } from "../../store/user/actions";
import {
  Typography,
  TextField,
  Container,
  makeStyles,
  Popover,
} from "@material-ui/core";

function MyPage() {
  const [anchorElImage, setAnchorElImage] = React.useState(null);
  const [anchorElDetails, setAnchorElDetails] = React.useState(null);
  const [anchorElOffer, setAnchorElOffer] = React.useState(null);
  const [anchorElLiveEvent, setAnchorElLiveEvent] = React.useState(null);
  const [anchorElOnlineEvent, setAnchorElOnlineEvent] = React.useState(null);
  const [newSkillTag, setNewSkillTag] = React.useState("");
  const [show, setShow] = React.useState(false);
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
      flexWrap: "wrap",
      marginTop: "20px",
      marginLeft: "20px",
      marginBottom: "50px",
    },
  }));

  const classes = useStyles();

  const clickShow = () => {
    setShow(!show);
  };

  const handleSkillTagAdd = (event) => {
    event.preventDefault();
    dispatch(postSkillTag(newSkillTag));
    setNewSkillTag("");
  };

  const handleClickImage = (event) => {
    setAnchorElImage(event.currentTarget);
  };

  const handleCloseImage = () => {
    setAnchorElImage(null);
  };

  const openImage = Boolean(anchorElImage);
  const idImage = openImage ? "simple-popover" : undefined;

  const handleClickDetails = (event) => {
    setAnchorElDetails(event.currentTarget);
  };

  const handleCloseDetails = () => {
    setAnchorElDetails(null);
  };

  const openDetails = Boolean(anchorElDetails);
  const idDetails = openDetails ? "simple-popover" : undefined;

  const handleClickOffer = (event) => {
    setAnchorElOffer(event.currentTarget);
  };

  const handleCloseOffer = () => {
    setAnchorElOffer(null);
  };

  const openOffer = Boolean(anchorElOffer);
  const idOffer = openOffer ? "simple-popover" : undefined;

  const handleClickLiveEvent = (event) => {
    setAnchorElLiveEvent(event.currentTarget);
  };

  const handleCloseLiveEvent = () => {
    setAnchorElLiveEvent(null);
  };

  const openLiveEvent = Boolean(anchorElLiveEvent);
  const idLiveEvent = openLiveEvent ? "simple-popover" : undefined;

  const handleClickOnlineEvent = (event) => {
    setAnchorElOnlineEvent(event.currentTarget);
  };

  const handleCloseOnlineEvent = () => {
    setAnchorElOnlineEvent(null);
  };

  const openOnlineEvent = Boolean(anchorElOnlineEvent);
  const idOnlineEvent = openOnlineEvent ? "simple-popover" : undefined;

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
        onClick={handleClickDetails}
      >
        change Details
      </Button>
      <Popover
        id={idDetails}
        open={openDetails}
        anchorEl={anchorElDetails}
        onClose={handleCloseDetails}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <DetailsForm user={user} />
      </Popover>
      <Button
        aria-describedby={user.id}
        variant="contained"
        color="primary"
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
          maxWidth: "700px",
        }}
      >
        <Typography variant="h5">{user.name}'s SkillTags</Typography>
        {!user.skillTags
          ? "no skillTags Yet"
          : user.skillTags.map((skill) => (
              <Button variant="outlined" size="small">
                {" "}
                {skill.name}
              </Button>
            ))}
        {!show ? (
          <Button
            onClick={clickShow}
            variant="contained"
            color="primary"
            size="small"
          >
            {" "}
            Add SkillTag
          </Button>
        ) : (
          <Box style={{ marginTop: "10px" }}>
            <TextField
              required
              name="name"
              autoFocus
              value={newSkillTag}
              onChange={(event) => setNewSkillTag(event.target.value)}
            />
            <Button
              onClick={handleSkillTagAdd}
              type="submit"
              variant="contained"
              color="primary"
              size="small"
            >
              {" "}
              Add +
            </Button>
          </Box>
        )}
      </Box>
      <Box>
        <Typography variant="h5">
          <hr />
          {user.name}'s Offers
        </Typography>
        <Button
          aria-describedby={user.id}
          variant="contained"
          onClick={handleClickOffer}
        >
          Add offer
        </Button>
        <Popover
          id={idOffer}
          open={openOffer}
          anchorEl={anchorElOffer}
          onClose={handleCloseOffer}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
        >
          <AddOffer />
        </Popover>

        {!user.offers
          ? "No Offers Yet"
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
          ? "No Events Yet"
          : user.organizer.map((event) => {
              return <EventCard event={event} username={user.name} />;
            })}
      </Box>
      <Button
        aria-describedby={user.id}
        variant="contained"
        onClick={handleClickLiveEvent}
      >
        Add Live Event
      </Button>
      <Popover
        id={idLiveEvent}
        open={openLiveEvent}
        anchorEl={anchorElLiveEvent}
        onClose={handleCloseLiveEvent}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <AddLiveEvent />
      </Popover>
      <Typography variant="h5">
        <hr />
        {user.name}'s Online Events
      </Typography>

      <Box className={classes.eventContainer}>
        {!user.onlineEvents
          ? "No Events Yet"
          : user.onlineEvents.map((event) => {
              return <OnlineEventCard event={event} username={user.name} />;
            })}
      </Box>
      <Button
        aria-describedby={user.id}
        variant="contained"
        onClick={handleClickOnlineEvent}
      >
        Add Online Event
      </Button>
      <Popover
        id={idOnlineEvent}
        open={openOnlineEvent}
        anchorEl={anchorElOnlineEvent}
        onClose={handleCloseOnlineEvent}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <AddOnlineEvent />
      </Popover>
    </Container>
  );
}

export default MyPage;
