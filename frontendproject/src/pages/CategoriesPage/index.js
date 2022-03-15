import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../../store/categories/action";
import { selectCategories } from "../../store/categories/selectors";
import CategoryCard from "../../components/CategoryCard";
import { useEffect } from "react";
import { makeStyles } from "@material-ui/core";

function CategoriesPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const allCategories = useSelector(selectCategories);

  const useStyles = makeStyles((theme) => ({
    allCardsContainer: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      MarginTop: "400px",
      flexWrap: "wrap",
      backgroundColor: "#FFF5EE",
    },
  }));

  const classes = useStyles();

  return (
    <>
      <div className={classes.allCardsContainer}>
        {!allCategories
          ? "loading"
          : allCategories.map((category) => {
              return <CategoryCard category={category} />;
            })}
      </div>
    </>
  );
}

export default CategoriesPage;
