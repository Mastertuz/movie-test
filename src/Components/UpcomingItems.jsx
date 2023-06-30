import { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../App";
import Movie from "./Movie";
import ContentLoader from "react-content-loader";


const UpcomingItems = () => {
  const {renderItems,upcomingItems} = useContext(AppContext)
    return ( 
        <section className="movies-list">
            <div className="trending">
              <div className="trending__top">
                <h2 className="trending__title">Upcoming</h2>
                <Link className="trending__link" to={"/upcoming"}>
                  See all
                </Link>
              </div>
              <div className="trending__items">
          {renderItems(upcomingItems)}
              </div>
            </div>
          </section>
    );
}
 
export default UpcomingItems;