import React, { useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Loading from "./components/Loading";
import MessageBox from "./components/MessageBox";
// import SignUp from "./pages/SignUp";
import ProfilePage from "./pages/ProfilePage";
import Home from "./pages/Home";
import { Jumbotron } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { selectAppLoading } from "./store/appState/selectors";
import { getUserWithStoredToken } from "./store/user/actions";
import NavMaterial from "./components/NavMaterial";
import OneOnlineEvent from "./pages/OneOnlineEvent";
import OnlineEvents from "./pages/OnlineEvents";
import LiveEvents from "./pages/LiveEvents";
import CategoriesPage from "./pages/CategoriesPage";
import CategoriesList from "./pages/CategoriesList";
import MyPage from "./pages/MyPage";
import Requests from "./pages/Requests";
import LogIn from "./pages/LoginNew";
import SignUp from "./pages/SignUpNew";

const Other = () => (
  <Jumbotron>
    <h1>Other</h1>
  </Jumbotron>
);

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectAppLoading);

  useEffect(() => {
    dispatch(getUserWithStoredToken());
  }, [dispatch]);

  return (
    <div className="App">
      <div>
        <NavMaterial />
      </div>
      <MessageBox />

      {isLoading ? <Loading /> : null}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/categories/:id" element={<CategoriesList />} />
        <Route path="/tokens" element={<Other />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/Profiles/:id" element={<ProfilePage />} />
        <Route exact path="/onlineevents" element={<OnlineEvents />} />
        <Route exact path="/onlineevents/:id" element={<OneOnlineEvent />} />
        <Route exact path="/liveevents" element={<LiveEvents />} />
        <Route exact path="/requests" element={<Requests />} />
      </Routes>
    </div>
  );
}

export default App;
