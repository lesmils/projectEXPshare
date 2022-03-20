import React from "react";
import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { useSelector, useDispatch } from "react-redux";
import { selectCategories } from "../../store/categories/selectors";
import Col from "react-bootstrap/Col";
import { fetchCategories } from "../../store/categories/action";
import { postLiveEvent } from "../../store/user/actions";
import DateAdapter from "@mui/lab/AdapterMoment";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import TextField from "@mui/material/TextField";
import DateTimePicker from "@mui/lab/DateTimePicker";
import { Typography } from "@material-ui/core";

export default function AddLiveEvent(props) {
  const dispatch = useDispatch();

  // const { id, token } = props;
  // console.log("what is id?", id, "what is token", token);

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  const [name, setName] = useState("");
  const [time, setTime] = useState(new Date());
  const [durationHours, setDurationHours] = useState(0);
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [image, setImage] = useState("");
  const [tokenCost, setTokenCost] = useState(0);
  const [category, setCategory] = useState(1);
  const [maxParticipants, setMaxParticipants] = useState(0);
  const [message, setMessage] = useState("");

  const allCategories = useSelector(selectCategories);

  function submitForm(event) {
    event.preventDefault();
    dispatch(
      postLiveEvent(
        name,
        time,
        durationHours,
        description,
        location,
        image,
        tokenCost,
        category,
        maxParticipants
      )
    );
    setName("");
    setTime(new Date());
    setDescription("");
    setLocation("");
    setImage("");
    setTokenCost(0);
    setCategory(1);
    setMaxParticipants(0);
    setMessage("Event was created!");
  }

  //   const allParams = [
  //     name,
  //     time,
  //     durationHours,
  //     description,
  //     location,
  //     image,
  //     tokenCost,
  //     category,
  //     maxParticipants,
  //     category,
  //   ];

  //   function clgEverything(item, index) {
  //     console.log(`item no ${index}`, item);
  //   }

  //   allParams.forEach(clgEverything);

  const options = allCategories.map((category) => {
    return (
      <option key={category.id} value={category.id}>
        {category.name}
      </option>
    );
  });

  const handleChangeTime = (newTime) => {
    setTime(newTime);
  };

  return (
    <div style={{ minWidth: "550px", paddingBottom: "30px" }}>
      <Form as={Col} md={{ span: 8, offset: 2 }} className="mt-5">
        <Typography variant="h4"> Create Live Event </Typography>
        <Form.Group>
          <Typography>Name</Typography>
          <Form.Control
            value={name}
            onChange={(event) => setName(event.target.value)}
            type="string"
            placeholder="Title of Event"
            required
          />
        </Form.Group>

        <Form.Group style={{ marginTop: "10px" }}>
          <LocalizationProvider dateAdapter={DateAdapter}>
            <DateTimePicker
              label="Date And Time "
              value={time}
              onChange={handleChangeTime}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </Form.Group>

        <Form.Group>
          <Typography>Description</Typography>
          <Form.Control
            as="textarea"
            rows="3"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            type="text"
            placeholder="Describe your offer "
            required
          />
        </Form.Group>

        <Form.Group>
          <Typography>Location (City)</Typography>
          <Form.Control
            value={location}
            onChange={(event) => setLocation(event.target.value)}
            type="string"
            placeholder="City"
            required
          />
        </Form.Group>

        <Form.Group>
          <Typography>ImageUrl</Typography>
          <Form.Control
            value={image}
            onChange={(event) => setImage(event.target.value)}
            type="string"
            placeholder="place a url to an image here"
            required
          />
        </Form.Group>

        <Form.Group>
          <Typography>Duration (hours)</Typography>
          <Form.Control
            value={durationHours}
            onChange={(event) => setDurationHours(event.target.value)}
            type="number"
            placeholder={0}
            required
            min={0}
          />
        </Form.Group>

        <Form.Group>
          <Typography>Token Fee</Typography>
          <Form.Control
            value={tokenCost}
            onChange={(event) => setTokenCost(event.target.value)}
            type="number"
            placeholder={0}
            required
            min={0}
          />
        </Form.Group>

        <Form.Group>
          <Typography>Maximum Number of Participants</Typography>
          <Form.Control
            value={maxParticipants}
            onChange={(event) => setMaxParticipants(event.target.value)}
            type="number"
            placeholder={0}
            required
            min={0}
          />
        </Form.Group>

        <Form.Group>
          <Typography>Pick a Category</Typography>
          <Form.Control
            as="select"
            onChange={(event) => setCategory(event.target.value)}
            custom
          >
            {options}
          </Form.Control>
        </Form.Group>

        <Form.Group className="mt-5">
          <Button variant="primary" type="submit" onClick={submitForm}>
            Create Event
          </Button>
          <Typography>{message}</Typography>
        </Form.Group>
      </Form>
    </div>
  );
}
