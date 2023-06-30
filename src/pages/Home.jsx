import SideBar from "../Components/SideBar";
import Header from "../Components/Header";
import HeaderSlider from "../Components/Header-slider";
import TrendingItems from "../Components/TrendingItems";
import UpcomingItems from "../Components/UpcomingItems";
import NewestItems from "../Components/NewestItems";
import { useContext } from "react";
import { AppContext } from "../App";
import FullList from "../Components/FullList";

const Home = () => {
  const {  searchValue } = useContext(AppContext);
 

  return (
    <>
      <div className="container">
        <SideBar home/>
        <div className="inner">
          <Header />
          {searchValue !== "" ? (
            <FullList />
          ) : (
            <>
              <HeaderSlider />
              <TrendingItems />
              <UpcomingItems />
              <NewestItems  />
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
