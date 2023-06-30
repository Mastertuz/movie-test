import { useContext } from "react";
import Header from "../Components/Header";
import SideBar from "../Components/SideBar";
import { AppContext } from "../App";
import Movie from "../Components/Movie";

const Trending = () => {
   const {trendingItems}=useContext(AppContext)
    return ( 
        <>
        <div className="container">
          <SideBar />
          <div className="inner">
            <Header />
            <h2 className="trending__title all">Trending</h2>
            <div className="trending__items all">
              {trendingItems.map((item) => (
                <Movie key={item.name}  {...item} />
              ))}
            </div>
          </div>
        </div>
      </>
     );
}
 
export default Trending;