import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { makeStyles, Container } from "@material-ui/core";
import { selectFoundUsers } from "../../store/user/selectors";
import { fetchUsersSearch } from "../../store/user/actions";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import UserCard from "../../components/UserCard";

function SearchResults() {
  const useStyles = makeStyles((theme) => ({
    allCardsContainer: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      minHeight: "1000px",
      MarginTop: "400px",
      flexWrap: "wrap",
      backgroundColor: "#FFF5EE",
    },
    hero: {
      backgroundImage: "linear-gradient(to bottom, #dbd6f9, #ffffff)",
      height: "100px",
      padding: "20px",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      position: "relative",
      display: "flex",
      msFlexDirection: "column",
      justifyContent: "flex-end",
      marginTop: "80px",

      fontSize: "4rem",
      color: "#36454F",
    },
  }));

  const classes = useStyles();
  const dispatch = useDispatch();
  const params = useParams();

  const { searchword } = params;

  useEffect(() => {
    dispatch(fetchUsersSearch(searchword));
  }, [dispatch, searchword]);

  const foundUsers = useSelector(selectFoundUsers);

  console.log("foundUsers?", foundUsers);

  return (
    <Container>
      <div className={classes.hero}>
        <h4>Search results for "{searchword}"</h4>
      </div>
      <div className={classes.allCardsContainer}>
        {!foundUsers
          ? "loading"
          : foundUsers.flat().map((user) => {
              return <UserCard user={user} />;
            })}
      </div>
    </Container>
  );
}

export default SearchResults;
