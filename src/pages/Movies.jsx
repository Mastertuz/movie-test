import { useContext } from "react";
import Movie from "../Components/Movie";
import { AppContext } from "../App";
import SideBar from "../Components/SideBar";
import Header from "../Components/Header";

const Movies = () => {
  const { moviesOnly, searchValue,isLoading } = useContext(AppContext);
  const filtredItems = moviesOnly.filter((item) =>
    item.name.toLowerCase().includes(searchValue.toLowerCase())
  );
  return (
    <>
      <div className="container">
        <SideBar movies/>
        <div className="inner">
          <Header />
          <h2 className="trending__title all">Movies</h2>
          <div className="trending__items all">
            {filtredItems.map((item) => (
              <Movie key={item.name} isLoading={isLoading} {...item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Movies;
