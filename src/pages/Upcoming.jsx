import { useContext } from "react";
import Header from "../Components/Header";
import SideBar from "../Components/SideBar";
import { AppContext } from "../App";
import Movie from "../Components/Movie";
const Upcoming = () => {
  const { upcomingItems } = useContext(AppContext);

  return (
    <>
      <div className="container">
        <SideBar  />
        <div className="inner">
          <Header />
          <h2 className="trending__title all">Upcoming</h2>
          <div className="trending__items all">
            {upcomingItems.map((item) => (
              <Movie key={item.name} {...item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Upcoming;
