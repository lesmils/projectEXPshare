import React from "react";
import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { useSelector, useDispatch } from "react-redux";
import { selectCategories } from "../../store/categories/selectors";
import Col from "react-bootstrap/Col";
import { fetchCategories } from "../../store/categories/action";
import { postOnlineEvent } from "../../store/user/actions";
import DateAdapter from "@mui/lab/AdapterMoment";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import TextField from "@mui/material/TextField";
import DateTimePicker from "@mui/lab/DateTimePicker";
import { Typography } from "@material-ui/core";
import Cloudinary from "../../components/Cloudinary";

export default function AddOnlineEvent(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  const [name, setName] = useState("");
  const [time, setTime] = useState(new Date());
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [streamUrl, setStreamUrl] = useState("");
  const [category, setCategory] = useState(1);
  const [message, setMessage] = useState("");

  const allCategories = useSelector(selectCategories);

  function submitForm(event) {
    event.preventDefault();
    dispatch(
      postOnlineEvent(name, time, description, image, streamUrl, category)
    );
    setName("");
    setTime(new Date());
    setDescription("");
    setImage("");
    setCategory(1);
    setMessage("Event was created!");
  }

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
        <Typography variant="h4"> Create Online Event </Typography>
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
            placeholder="Describe your Event "
            required
          />
        </Form.Group>

        <Form.Group>
          <Typography>ImageUrl</Typography>
          <Cloudinary image={setImage} />
        </Form.Group>

        <Form.Group>
          <Typography>Youtube Stream URL</Typography>
          <Form.Control
            value={streamUrl}
            onChange={(event) => setStreamUrl(event.target.value)}
            type="string"
            placeholder="Stream Url Here"
            required
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
