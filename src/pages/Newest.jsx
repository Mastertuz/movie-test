
import { useContext } from "react";
import Header from "../Components/Header";
import SideBar from "../Components/SideBar";
import { AppContext } from "../App";
import Movie from "../Components/Movie";
const Newest = () => {
    const { newestItems } = useContext(AppContext);
  return (
    <>
      <div className="container">
        <SideBar  />
        <div className="inner">
          <Header />
          <h2 className="trending__title all">Newest</h2>
          <div className="trending__items all">
            {newestItems.map((item) => (
              <Movie key={item.name} {...item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
 
export default Newest;