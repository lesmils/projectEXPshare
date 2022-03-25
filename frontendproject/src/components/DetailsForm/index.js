import React from "react";
import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { useSelector, useDispatch } from "react-redux";
import { selectCategories } from "../../store/categories/selectors";
import Col from "react-bootstrap/Col";
import { fetchCategories } from "../../store/categories/action";
import { postOffer } from "../../store/user/actions";
import { updateDetails } from "../../store/user/actions";

export default function DetailsForm(props) {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  function submitForm(event) {
    event.preventDefault();
    dispatch(updateDetails(name, description));
    setName("");
    setDescription("");
  }

  return (
    <div style={{ minWidth: "550px", paddingBottom: "30px" }}>
      <Form as={Col} md={{ span: 8, offset: 2 }} className="mt-5">
        <h1 className="mt-5 mb-5"> Update Profile</h1>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control
            value={name}
            onChange={(event) => setName(event.target.value)}
            type="string"
            placeholder="Your Profile Name"
            required
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows="3"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            type="text"
            placeholder="Description Here"
            required
          />
        </Form.Group>

        <Form.Group className="mt-5">
          <Button variant="primary" type="submit" onClick={submitForm}>
            Change
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
}
