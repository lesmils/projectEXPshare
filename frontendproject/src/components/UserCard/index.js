import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { Link } from "react-router-dom";

export default function UserCard(props) {
  const { name, imageUrl, skillTags, id } = props.user;

  return (
    <Card
      sx={{
        width: 700,
        minWidth: 400,
        display: "flexBox",
        flexDirection: "columns",
        marginTop: "30px",
      }}
    >
      <CardActionArea>
        <CardMedia component="img" height="140" image={imageUrl} alt={name} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <strong>Skill Tags: </strong>
            <br />
            <br />
            {!skillTags
              ? "loading"
              : skillTags.map((skill) => (
                  <Button variant="outlined" size="small">
                    {" "}
                    {skill.name}
                  </Button>
                ))}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size="small"
          color="primary"
          component={Link}
          to={`/profiles/${id}`}
        >
          view profile
        </Button>
      </CardActions>
    </Card>
  );
}
