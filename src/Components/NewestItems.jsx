import { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../App";

const NewestItems = () => {
  const {newestItems,renderItems} = useContext(AppContext)
    return ( 
        <section className="movies-list">
        <div className="trending">
          <div className="trending__top">
            <h2 className="trending__title">Newest</h2>
            <Link className="trending__link" to={"/newest"}>
              See all
            </Link>
          </div>
          <div className="trending__items">
          {renderItems(newestItems)}
          </div>
        </div>
      </section>
     );
}
 
export default NewestItems;