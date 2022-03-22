import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Link } from "react-router-dom";

export default function CategoryCard(props) {
  const { imageUrl, name, id, users } = props.category;
  console.log("users", users);

  return (
    <Card
      style={{
        width: 345,
        maxHeight: 450,
        marginTop: "150px",
        marginLeft: "150px",
        marginRight: "150px",
        textDecoration: "none",
      }}
      component={Link}
      to={`/categories/${id}`}
    >
      <CardActionArea>
        <CardMedia component="img" height="180" image={imageUrl} alt={name} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>

          <Typography variant="body2" color="text.secondary"></Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
