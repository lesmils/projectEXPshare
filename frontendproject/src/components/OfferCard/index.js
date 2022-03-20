import React from "react";
import { useSelector } from "react-redux";
import { Box } from "@mui/system";
import { useDispatch } from "react-redux";
import { deleteOffer } from "../../store/user/actions";
import { selectUser } from "../../store/user/selectors";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { Popover } from "@material-ui/core";
import { Form } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import { postRequest } from "../../store/requests/actions";

export default function OfferCard(props) {
  const { name, imageUrl, description, tokenCost, userId, id } = props.offer;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [message, setMessage] = useState("");

  const params = useParams();
  const sellerId = params.id;
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const offerId = id;
  console.log("sellerId, offerId", sellerId, "and", offerId);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  //   console.log(props.user);
  function submitRequestForm(event) {
    event.preventDefault();
    dispatch(postRequest(message, offerId, sellerId));
    setMessage("");
    handleClose();
  }

  const open = Boolean(anchorEl);
  const one = open ? "simple-popover" : undefined;
  return (
    <Card
      sx={{
        width: 600,
        minWidth: 400,
        display: "flexBox",
        flexDirection: "columns",
        marginTop: "30px",
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          maxWidth="250"
          image={imageUrl}
          alt={name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
            <br />
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <strong>Token Cost:</strong> {tokenCost}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {userId === user.id ? (
          <Button
            aria-describedby={id}
            variant="contained"
            onClick={handleClick}
          >
            Remove Offer
          </Button>
        ) : (
          <Button
            aria-describedby={id}
            variant="contained"
            onClick={handleClick}
          >
            Send Request
          </Button>
        )}

        <Popover
          id={one}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
        >
          {userId === user.id ? (
            <Box
              style={{
                minWidth: 180,
                minHeight: 100,
                textAlign: "center",
                marginTop: "20px",
              }}
            >
              <Typography>Are you sure? </Typography>

              <Button
                variant="contained"
                onClick={() => dispatch(deleteOffer(id))}
              >
                Yes, Delete
              </Button>
            </Box>
          ) : (
            //request goes here
            <div style={{ minWidth: "400px", paddingBottom: "30px" }}>
              <Form as={Col} md={{ span: 8, offset: 2 }} className="mt-5">
                <Typography variant="h5"> Send Request to User </Typography>
                <Form.Group>
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows="3"
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    type="text"
                    placeholder="send a message to user"
                    required
                  />
                </Form.Group>

                <Form.Group className="mt-5">
                  <Button
                    variant="primary"
                    type="submit"
                    onClick={submitRequestForm}
                  >
                    Send request ({tokenCost} Tokens)
                  </Button>
                </Form.Group>
              </Form>
            </div>
          )}
        </Popover>
      </CardActions>
    </Card>
  );
}
