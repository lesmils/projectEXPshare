import React from "react";
import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";

import Form from "react-bootstrap/Form";
import { Typography } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { selectCategories } from "../../store/categories/selectors";
import Col from "react-bootstrap/Col";
import { fetchCategories } from "../../store/categories/action";
import { postOffer } from "../../store/user/actions";

export default function AddOffer(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [tokenCost, setTokenCost] = useState(0);
  const [category, setCategory] = useState(1);

  const allCategories = useSelector(selectCategories);

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
    <div style={{ minWidth: "500px", paddingBottom: "30px" }}>
      <Form as={Col} md={{ span: 8, offset: 2 }} className="mt-5">
        <Typography variant="h4"> Place Offer</Typography>
        <Form.Group>
          <Typography>Name</Typography>
          <Form.Control
            value={name}
            onChange={(event) => setName(event.target.value)}
            type="string"
            placeholder="Name of Offer"
            required
          />
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
          <Typography>Token Fee</Typography>
          <Form.Control
            value={tokenCost}
            onChange={(event) => setTokenCost(event.target.value)}
            type="number"
            placeholder={0}
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
            Post Offer
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
}
