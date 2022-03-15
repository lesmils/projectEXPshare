import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles, Container } from "@material-ui/core";
import UserCard from "../../components/UserCard";
import { useParams } from "react-router-dom";
import { fetchUsersOneCategory } from "../../store/categories/action";
import { selectUsersByCategory } from "../../store/categories/selectors";

function CategoriesList() {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchUsersOneCategory(id));
  }, [dispatch, id]);

  const oneCategory = useSelector(selectUsersByCategory);

  const useStyles = makeStyles((theme) => ({
    allCardsContainer: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      MarginTop: "400px",
      flexWrap: "wrap",
      backgroundColor: "#FFF5EE",
    },
    hero: {
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${oneCategory.imageUrl})`,
      height: "400px",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      position: "relative",
      display: "flex",
      msFlexDirection: "column",
      justifyContent: "flex-end",

      fontSize: "4rem",
      color: "#fff",
    },
  }));

  const classes = useStyles();

  return (
    <Container>
      <div className={classes.hero}>
        <h4>{oneCategory.name}</h4>
      </div>
      <div className={classes.allCardsContainer}>
        {!oneCategory.users
          ? "loading"
          : oneCategory.users.map((user) => {
              return <UserCard user={user} />;
            })}
      </div>
    </Container>
  );
}

export default CategoriesList;
