import { useContext, useEffect } from "react";
import { AppContext } from "../App";
import SideBar from "../Components/SideBar";
import Header from "../Components/Header";
import Movie from "../Components/Movie";
export let user = localStorage.getItem("email");

const Favourites = () => {
  const { favourites } = useContext(AppContext);

  return (
    <>
      <div className="container">
        <SideBar favourites />
        <div className="inner">
          <Header />
          <h2 className="trending__title all">
            {favourites.length > 0 ? "Bookmarks" : "Bookmarks is empty"}
          </h2>
          {user ? (
            <div className="trending__items all">
              {favourites.map((item) => (
                <Movie {...item} key={item.name} />
              ))}
            </div>
          ) : (
            <h4>Sign in to see your bookmarks</h4>
          )}
        </div>
      </div>
    </>
  );
};

export default Favourites;
