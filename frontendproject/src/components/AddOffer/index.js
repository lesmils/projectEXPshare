import React from "react";
import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import Box from "@mui/material/Box";
import Form from "react-bootstrap/Form";
import { useSelector, useDispatch } from "react-redux";
import { Typography, TextField } from "@material-ui/core";
import { selectCategories } from "../../store/categories/selectors";
import Col from "react-bootstrap/Col";
import { fetchCategories } from "../../store/categories/action";
import { postOffer } from "../../store/user/actions";

export default function AddOffer(props) {
  const dispatch = useDispatch();

  // const { id, token } = props;
  // console.log("what is id?", id, "what is token", token);

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [tokenCost, setTokenCost] = useState(0);
  const [category, setCategory] = useState(1);

  const allCategories = useSelector(selectCategories);
  // console.log("what are categories", allCategories);

  // console.log(name, description, image, tokenCost, category);

  function submitForm(event) {
    event.preventDefault();
    dispatch(postOffer(name, description, image, tokenCost, category));
    setName("");
    setDescription("");
    setTokenCost(0);
    setCategory(1);
  }

  const options = allCategories.map((category) => {
    return (
      <option key={category.id} value={category.id}>
        {category.name}
      </option>
    );
  });

  return (
    <div style={{ minWidth: "550px", paddingBottom: "30px" }}>
      <Form as={Col} md={{ span: 6, offset: 3 }} className="mt-5">
        <h1 className="mt-5 mb-5">Place Offer</h1>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control
            value={name}
            onChange={(event) => setName(event.target.value)}
            type="string"
            placeholder="Name of Offer"
            required
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Description</Form.Label>
          <Form.Control
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            type="text"
            placeholder="Describe your offer "
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>ImageUrl</Form.Label>
          <Form.Control
            value={image}
            onChange={(event) => setImage(event.target.value)}
            type="string"
            placeholder="place a url to an image here"
            required
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Token Fee</Form.Label>
          <Form.Control
            value={tokenCost}
            onChange={(event) => setTokenCost(event.target.value)}
            type="string"
            placeholder={0}
            required
            min={0}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Custom select</Form.Label>
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
            Post Offer
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
}
