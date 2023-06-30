
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../App";


const TrendingItems = () => {
  const {trendingItems,renderItems} = useContext(AppContext)

  
  return (
    <section className="movies-list">
      <div className="trending">
        <div className="trending__top">
          <h2 className="trending__title">Trending</h2>
          <Link className="trending__link" to={"/trending"}>
            See all
          </Link>
        </div>
        <div className="trending__items" >
         {renderItems(trendingItems)}
        </div>
      </div>
    </section>
  );
};

export default TrendingItems;
